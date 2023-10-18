import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

import Home from "./components/Home/Home";
import News from "./components/Post/PostNews/New";
import TeacherMenu from "./components/About/Teachers/TeacherMenu";
import Baklavar from "./components/Training/baklavar";
import FileView from "./components/file";
import SubMenu from "./components/About/SubMenu";
import SubMenuPost from "./components/Post/SubMenuPost";

import Newsdetail from "./components/Post/PostNews/NewsItem";
import SD from "./components/Training/baklavar/SD";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="News" element={<News />} />
          <Route path="TeacherMenu" element={<TeacherMenu />} />
          <Route path="SubMenu" element={<SubMenu />} exact />
          <Route path="Baklavar" element={<Baklavar />} exact />
          <Route path="FileView" element={<FileView />} exact />
          <Route path="SD" element={<SD />} exact />
          <Route path="SubMenuPost" element={<SubMenuPost />} exact />
          <Route path="Newsdetail" element={<Newsdetail />} exact />
          <Route path="Contact" element={<Contact />} exact />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
