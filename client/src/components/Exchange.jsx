import React, { useState } from "react";
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

// Sample trend data for conversion (replace with real-time data later)
const conversionData = [
  { time: "1 PM", rate: 1.00 },
  { time: "2 PM", rate: 1.02 },
  { time: "3 PM", rate: 1.05 },
  { time: "4 PM", rate: 1.03 },
  { time: "5 PM", rate: 1.07 },
];

const TrendChart = ({ data }) => {
  const formattedData = data.map((entry, index) => ({
    index,
    time: entry.time,
    rate: entry.rate,
  }));

  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={formattedData}>
        <Line
          type="monotone"
          dataKey="rate"
          stroke="#10B981" // Green line for rising trend
          strokeWidth={2}
          dot={false}
        />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

const Exchange = () => {
  const [amount, setAmount] = useState(1);
  const [conversionType, setConversionType] = useState("currency"); // 'currency' or 'crypto'
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [fromCrypto, setFromCrypto] = useState("BTC");
  const [toCrypto, setToCrypto] = useState("ETH");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [conversionRate, setConversionRate] = useState(1.18); // Static rate (replace with real API data)
  const [cryptoRate, setCryptoRate] = useState(0.065); // Static crypto rate (replace with real data)

  // Handle conversion logic for Currency to Currency
  const convertCurrency = () => {
    const rate = conversionRate;
    setConvertedAmount(amount * rate);
  };

  // Handle conversion logic for Crypto to Crypto
  const convertCrypto = () => {
    const rate = cryptoRate;
    setConvertedAmount(amount * rate);
  };

  // Conversion Button Logic
  const handleConversion = () => {
    if (conversionType === "currency") {
      convertCurrency();
    } else {
      convertCrypto();
    }
  };

  return (
    <div className="min-h-screen gradient-bg-welcome text-white">
      <Navbar />
      <div className="p-6 md:px-20">
        <h1 className="text-4xl font-bold mb-6">💱 Exchange</h1>
        <p className="text-lg mb-6">Convert between various currencies and cryptocurrencies.</p>

        {/* Conversion Type Dropdown */}
        <div className="mb-6">
          <label className="block text-sm mb-2">Conversion Type</label>
          <select
            value={conversionType}
            onChange={(e) => setConversionType(e.target.value)}
            className="p-2 bg-white bg-opacity-10 rounded w-full"
          >
            <option value="currency">Currency</option>
            <option value="crypto">Crypto</option>
          </select>
        </div>

        {/* Amount Input */}
        <div className="mb-6">
          <label className="block text-sm mb-2">Amount</label>
          <input
            type="number"
            className="p-2 bg-white bg-opacity-10 rounded w-full"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        {/* Dynamic Conversion Form */}
        {conversionType === "currency" ? (
          // Currency Conversion Form
          <div className="mb-6 flex space-x-4">
            <div>
              <label className="block text-sm mb-2">From Currency</label>
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="p-2 bg-white bg-opacity-10 rounded w-full"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="INR">INR</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-2">To Currency</label>
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="p-2 bg-white bg-opacity-10 rounded w-full"
              >
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="INR">INR</option>
              </select>
            </div>
          </div>
        ) : (
          // Crypto Conversion Form
          <div className="mb-6 flex space-x-4">
            <div>
              <label className="block text-sm mb-2">From Crypto</label>
              <select
                value={fromCrypto}
                onChange={(e) => setFromCrypto(e.target.value)}
                className="p-2 bg-white bg-opacity-10 rounded w-full"
              >
                <option value="BTC">BTC</option>
                <option value="ETH">ETH</option>
                <option value="SOL">SOL</option>
                <option value="ADA">ADA</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-2">To Crypto</label>
              <select
                value={toCrypto}
                onChange={(e) => setToCrypto(e.target.value)}
                className="p-2 bg-white bg-opacity-10 rounded w-full"
              >
                <option value="ETH">ETH</option>
                <option value="BTC">BTC</option>
                <option value="SOL">SOL</option>
                <option value="ADA">ADA</option>
              </select>
            </div>
          </div>
        )}

        {/* Conversion Button */}
        <div className="mb-6">
          <button
            onClick={handleConversion}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg"
          >
            Convert
          </button>
        </div>

        {/* Conversion Result */}
        <div className="mt-6 text-xl">
          {conversionType === "currency" && (
            <p>
              {amount} {fromCurrency} is approximately{" "}
              {convertedAmount.toFixed(2)} {toCurrency}.
            </p>
          )}
          {conversionType === "crypto" && (
            <p>
              {amount} {fromCrypto} is approximately{" "}
              {convertedAmount.toFixed(2)} {toCrypto}.
            </p>
          )}
        </div>

        {/* Conversion Trend Chart */}
        <h2 className="text-2xl font-semibold mt-8">Conversion Rate Trend</h2>
        <TrendChart data={conversionData} />
      </div>
      <Footer />
    </div>
  );
};

export default Exchange;
