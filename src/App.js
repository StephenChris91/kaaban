import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Create from "./components/modal";
import { useContext } from "react";
import { AuthContext } from "./firebase/auth/AuthContext";

function App() {
  const user = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={user ? <Dashboard /> : <Login />} />
    </Routes>
  );
}

export default App;
