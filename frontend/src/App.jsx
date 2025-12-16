import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage.jsx";
import Chatpage from "./Pages/ChatPage.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chat" element={<Chatpage />} />
      </Routes>
    </div>
  );
}

export default App;
