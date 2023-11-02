import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
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
  transactions: [];
  wallet: WalletData;
}

const AppContext = createContext<appContextType>({
  users: {},
  getUserDetails: async () => {},
  transactions: [],
  wallet: {},
});

function AppProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<UserData>({});
  const [wallet, setWallet] = useState<WalletData>({});
  const [transactions, setTransactions] = useState<[]>([]);

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
      // Your implementation for getUserDetails function
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
