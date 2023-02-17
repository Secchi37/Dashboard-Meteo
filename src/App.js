//import logo from './logo.svg';
import "./App.css";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <HomePage />
        <Dashboard />
      </header>
    </div>
  );
}

export default App;
