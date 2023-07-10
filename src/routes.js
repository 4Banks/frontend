import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home";
import Documentation from './pages/documentation';
import DataAnalysis from './pages/data-analysis';
import AboutUs from './pages/about-us';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documentacao" element={<Documentation />} />
        <Route path="/analise" element={<DataAnalysis />} />
        <Route path="/quemsomos" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;