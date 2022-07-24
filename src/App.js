import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./styling.css";
const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;