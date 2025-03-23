import React, { useEffect, useState } from 'react';

const generateRandomTransaction = () => {
  const hexChars = '0123456789abcdef';
  const generateTxId = () => '0x' + Array.from({ length: 64 }, () => hexChars[Math.floor(Math.random() * 16)]).join('');

  const messages = [
    'Polygon Exchange', 'Bank Transfer', 'International Payment', 'Crypto Swap',
    'Merchant Payment', 'Freelance Payment', 'Loan Repayment', 'Salary Credit',
    'Stock Purchase', 'NFT Marketplace', 'Ethereum Bridge Transfer', 'Utility Bill Payment',
    'Shopping Cart Checkout', 'Subscription Renewal', 'Investment Fund Transfer',
    'Game Token Purchase', 'Charity Donation', 'Event Ticket Purchase',
    'Flight Booking Payment', 'Hotel Reservation Payment', 'Insurance Premium Payment',
    'Cloud Service Subscription', 'Vehicle EMI Payment', 'Credit Card Payment',
    'Medical Bill Payment', 'Online Course Payment', 'Streaming Service Payment',
    'Real Estate Payment', 'Peer-to-Peer Transfer', 'Education Loan Payment',
    'Car Lease Payment', 'Mutual Fund Investment', 'Stock Dividend Credit',
    'Mortgage Payment', 'Tax Payment', 'Government Subsidy Credit',
    'Cryptocurrency Mining Payout', 'Business Invoice Payment',
    'Gig Economy Payment', 'Rental Property Payment', 'Vendor Payment',
    'E-commerce Refund', 'Forex Exchange Transaction', 'Utility Token Purchase',
    'Payroll Processing', 'Mobile Wallet Recharge', 'Gaming Rewards Payout',
    'DeFi Liquidity Pool Withdrawal', 'Royalties Payment', 'Airline Miles Purchase',
    'Cloud Mining Payment', 'VPN Service Subscription', 'OTT Platform Subscription',
    'Data Center Hosting Fee', 'Software License Payment', 'Consultation Service Payment',
    'Export-Import Payment', 'Merchant POS Settlement', 'Blockchain Validator Rewards',
    'AI Model API Payment', 'Virtual Event Ticket Purchase', 'Gold Investment Transfer'
  ];

  return {
    id: generateTxId(),
    amount: (Math.random() * 10000).toFixed(2),
    message: messages[Math.floor(Math.random() * messages.length)],
  };
};

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const updateTransactions = () => {
      const newTransactions = new Set();
      while (newTransactions.size < 6) {
        newTransactions.add(generateRandomTransaction());
      }
      setTransactions(Array.from(newTransactions));
    };

    updateTransactions();
    const interval = setInterval(updateTransactions, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions min-h-screen">
      <div className="flex flex-col md:p-12 py-12 px-4">
        <h1 className="text-2xl font-bold mb-4 text-white text-center">Transactions</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {transactions.map((txn, index) => (
            <div key={index} className="bg-[#181918] m-4 flex flex-1 min-w-full flex-col p-3 rounded-md hover:shadow-2xl">
              <div className="flex flex-col items-center w-full mt-3">
                <div className="display-flex justify-start w-full mb-6 p-2">
                  <p className="text-white text-base break-all"><strong>Transaction ID:</strong> {txn.id}</p>
                  <p className="text-white text-base"><strong>Amount (INR):</strong> ₹{txn.amount}</p>
                  <p className="text-white text-base"><strong>Message:</strong> {txn.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transaction;
