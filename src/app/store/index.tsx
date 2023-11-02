import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useMemo,
} from "react";

interface UserData {
  email?: string,
  first_name?: string,
  last_name?: string
}

type WalletData = {
  balance?: Number;
  ledger_balance?: Number;
  pending_payout?: Number;
  total_payout?: Number;
  total_revenue?: Number;
}

// Create a context for the user data
interface appContextType {
  users: UserData ;
  getUserDetails: () => Promise<void>;
  filterTable: (data: any) => Promise<void> ;
  transactions: any[];
  wallet: WalletData;
}

const AppContext = createContext<appContextType>({
  users: {},
  getUserDetails: async () => {},
  filterTable: (data: any) => { return data},
  transactions: [],
  wallet: {},
});

function AppProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<UserData>({});
  const [wallet, setWallet] = useState<WalletData>({});
  const [transactions, setTransactions] = useState<any[]>([]);
  const memoizedData = useMemo(() => transactions, [transactions]);

  const getUserDetails = async () => {
    try {
      // Your implementation for getUserDetails function
      const response = await fetch(`https://fe-task-api.mainstack.io/user`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setUsers(data);
      return data;
    } catch (err) {
      console.error("Error fetching data:", err);
      throw err;
    }
  };
  const getWallet = async () => {
    try {
      const response = await fetch(`https://fe-task-api.mainstack.io/wallet`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setWallet(data);
      return data;
    } catch (err) {
      console.error("Error fetching data:", err);
      throw err;
    }
  };
  const getTransactions = async () => {
    try {
      const response = await fetch(
        `https://fe-task-api.mainstack.io/transactions`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setTransactions(data);
      return data;
    } catch (err) {
      console.error("Error fetching data:", err);
      throw err;
    }
  };

  const filterTable = async (data: any[]) => {
    try {

      if (data.length == 0) {
        getTransactions()
      }
      let newA: string[] = []
      
      const filterValues = data.map((obj) => newA.push(obj.name.toLowerCase()));
      const holdData = transactions
      const filtered:any[] =  memoizedData.filter((item: any) => {
        const { type, status } = item;
        const bothIncluded = newA.includes(type.toLowerCase()) && newA.includes(status.toLowerCase());
        return bothIncluded
      })

      console.log('memoizedData', memoizedData, filtered)

      setTransactions(filtered)
    } catch (error) {
      
    }
  }

  useEffect(() => {
    getUserDetails();
    getWallet();
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value: appContextType = {
    users,
    wallet,
    transactions,
    getUserDetails,
    filterTable
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useUsersContext must be used within a UsersProvider");
  }
  return context;
}

export { useAppContext, AppProvider };
