import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Welcome, Services, Transaction, Footer } from "./components";
import Market from "./components/Market";
import Exchange from "./components/Exchange";
import Wallet from "./components/Wallet";

const Home = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Transaction />
    <Footer />
  </div>
);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/market" element={<Market />} />
      <Route path="/exchange" element={<Exchange />} />
      <Route path="/wallets" element={<Wallet />} />
    </Routes>
  </Router>
);

export default App;
