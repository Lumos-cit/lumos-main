import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import RouteNames from "./components/RouteNames";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Article from "./pages/Article";
import CampusLife from "./pages/CampusLife";
import Career from "./pages/Career";
import News from "./pages/News";
import SpotLight from "./pages/SpotLight";
import StudentHQ from "./pages/StudentHQ";
import Xplore from "./pages/Xplore";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <RouteNames />
      <Routes>
        <Route index element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="article/:articleId" element={<Article />} />
        <Route path="campuslife" element={<CampusLife />} />
        <Route path="career" element={<Career />} />
        <Route path="news" element={<News />} />
        <Route path="spotlight" element={<SpotLight />} />
        <Route path="studenthq" element={<StudentHQ />} />
        <Route path="xplore" element={<Xplore />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
