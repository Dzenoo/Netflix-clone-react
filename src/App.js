import React from "react";

import { Routes, Route } from "react-router-dom";
import NetflixPocetna from "./components/screens/NetflixPocetna";
import AuthPage from "./components/screens/AuthPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NetflixPocetna />} />
        <Route path="*" element={<NetflixPocetna />} />{" "}
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </div>
  );
};

export default App;
