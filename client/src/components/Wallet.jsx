import React, { useEffect, useState } from "react";

// Importing GIFs from src folder
import boomerangGif from "../assets/gifs/boomerang.gif";
import creditGif from "../assets/gifs/credit.gif";
import dogGif from "../assets/gifs/dog.gif";
import simpsonGif from "../assets/gifs/simpson.gif";
import omileGif from "../assets/gifs/omile.gif";
import money from "../assets/gifs/money.gif";

const gifList = [
  boomerangGif,
  creditGif,
  dogGif,
  simpsonGif,
  omileGif,
  money
];

const getRandomGif = () => gifList[Math.floor(Math.random() * gifList.length)];

const Wallet = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
    console.log("Loaded Transactions:", storedTransactions);

    const txWithGifs = storedTransactions.map((tx) => ({
      ...tx,
      gif: getRandomGif(),
    }));

    setTransactions(txWithGifs);
  }, []);

  return (
    <div className="min-h-screen gradient-bg-welcome text-white">
      <h1 className="text-3xl font-bold mb-6">📜 Akhil-george Transaction History</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {transactions.map((tx, index) => (
          <div key={index} className="bg-[#1e1e2f] p-4 rounded-xl shadow-md blue-glassmorphism">
            <img
              src={tx.gif}
              alt="funny gif"
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <p><strong>To:</strong> {tx.addressTo}</p>
            <p><strong>Amount:</strong> ₹{tx.amount}</p>
            <p><strong>Keyword:</strong> {tx.keyword}</p>
            <p><strong>Message:</strong> {tx.message}</p>
            <p className="text-xs mt-2 text-gray-400">{tx.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wallet;
