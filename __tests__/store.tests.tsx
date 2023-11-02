import React from 'react';
import { render, act } from '@testing-library/react';
import { AppProvider, useAppContext } from '../src/app/store/index';

describe('AppProvider', () => {
  it('fetches user details, wallet, and transactions on mount', async () => {
    global.fetch = jest.fn().mockImplementation((url) =>
      Promise.resolve({
        json: () => {
          if (url.includes('user')) {
            return Promise.resolve({ email: 'test@example.com' });
          } else if (url.includes('wallet')) {
            return Promise.resolve({ balance: 100 });
          } else if (url.includes('transactions')) {
            return Promise.resolve([]);
          }
        },
        ok: true,
      })
    );

    await act(async () => {
      render(
        <AppProvider>
          <TestComponent />
        </AppProvider>
      );
    });

    expect(global.fetch).toHaveBeenCalledTimes(3); 
  });
});

const TestComponent = () => {
  const { users, wallet, transactions } = useAppContext();

  return (
    <div>
      <div data-testid="email">{users.email}</div>
      <div data-testid="balance">{wallet?.balance}</div>
    </div>
  );
};
