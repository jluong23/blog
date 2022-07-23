import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div className="page-content">
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;