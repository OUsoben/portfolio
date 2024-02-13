import "bootstrap/dist/css/bootstrap.css"
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillPage from "./pages/SkillPage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";



function App() {
  return (
    <> 
     <BrowserRouter>
      <MyNavbar/>
       <Routes>

            <Route path="/" index element={<HomePage/>}/>
            <Route path="/aboutme" element={<AboutPage/>}/>
            <Route path="/skills" element={<SkillPage/>}/>
            <Route path="/projects" element={<ProjectPage/>}/>
            <Route path="/contactme" element={<ContactPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/> 

       </Routes>
     
     </BrowserRouter>
    </>
  );
}

export default App;
