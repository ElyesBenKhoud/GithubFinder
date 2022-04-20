import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Notfound from "./pages/Notfound";
import { GithubProvider } from "./context/github/GithubContext";
import AlertState from "./context/alert/AlertState";
import Alert from "./components/layout/Alert";
function App() {
  return (
    <GithubProvider>
      <AlertState>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/notfound" element={<Notfound />} />
                <Route path="/*" element={<Notfound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertState>
    </GithubProvider>
  );
}

export default App;
