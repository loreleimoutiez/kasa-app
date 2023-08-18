import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { Details } from "../Pages/Details/Details";
import { About } from "../Pages/About/About";
import { NotFound } from "../Pages/NotFound/NotFound";

const Router = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

export default Router;