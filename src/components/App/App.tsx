import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import { Route, Routes } from "react-router-dom";
import Brands from "../../pages/Brands/Brands";
import Company from "../../pages/Company/Company";
import Certificates from "../../pages/Сertificates/Сertificates";

const App: React.FC = () => {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="/company" element={<Company />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
    </>
  );
};

export default App;
