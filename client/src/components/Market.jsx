import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Sample trend data (you can fetch from an API later)
const marketData = [
  {
    name: "Bitcoin (BTC)",
    price: "$65,000",
    change: "+3.2%",
    trend: [63000, 63500, 64000, 65000, 65200, 65500],
  },
  {
    name: "Ethereum (ETH)",
    price: "$3,200",
    change: "+2.1%",
    trend: [3100, 3120, 3150, 3180, 3200],
  },
  {
    name: "Solana (SOL)",
    price: "$145",
    change: "-1.5%",
    trend: [150, 148, 147, 146, 145],
  },
  {
    name: "Cardano (ADA)",
    price: "$0.38",
    change: "+0.9%",
    trend: [0.36, 0.37, 0.375, 0.38],
  },
  {
    name: "XRP",
    price: "$0.62",
    change: "-0.3%",
    trend: [0.64, 0.63, 0.62],
  },
];

const TrendChart = ({ data }) => {
  const formattedData = data.map((value, index) => ({ index, value }));

  return (
    <ResponsiveContainer width="100%" height={50}>
      <LineChart data={formattedData}>
        <Line
          type="monotone"
          dataKey="value"
          stroke={data[0] > data[data.length - 1] ? "#EF4444" : "#10B981"} // red or green
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

const Market = () => {
  return (
    <div className="min-h-screen gradient-bg-welcome text-white">
      <Navbar />
      <div className="p-6 md:px-20">
        <h1 className="text-4xl font-bold mb-6">📈 Market Overview</h1>
        <p className="text-lg mb-6">
          Real-time crypto prices and trends. 
        </p>

        <div className="grid gap-4">
          {marketData.map((crypto, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 rounded-xl p-4 md:p-6 flex flex-col md:flex-row justify-between items-center"
            >
              <div className="flex-1 mb-4 md:mb-0">
                <h2 className="text-2xl font-semibold">{crypto.name}</h2>
                <p className="text-sm">
                  Price: {crypto.price} | 24h Change:{" "}
                  <span
                    className={
                      crypto.change.startsWith("-")
                        ? "text-red-400"
                        : "text-green-400"
                    }
                  >
                    {crypto.change}
                  </span>
                </p>
              </div>
              <div className="w-full md:w-[200px]">
                <TrendChart data={crypto.trend} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Market;
