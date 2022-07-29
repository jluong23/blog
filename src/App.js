import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import BlogPost from "./components/BlogPost";
import "./styling.css";
import BlogOverview from "./components/BlogOverview";
const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/blog" element={<BlogOverview />} />
        <Route path="/blog/:blogId" element={<BlogPost />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;