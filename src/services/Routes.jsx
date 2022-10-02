import React from "react";
import { Routes, Route } from "react-router-dom";
import Checklists from "views/Checklists";
import DashboardIndex from "views/Dashboard";
import Documents from "views/Documents";
import FlowCharts from "views/FlowCharts";
import ForgotPass from "views/ForgotPass";
import Home from "views/Home";
import Login from "views/Login";
import SentPass from "views/SentPass";

export default () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/protocolos" element={<FlowCharts />} />
      <Route exact path="/documentos" element={<Documents />} />
      <Route exact path="/checklists" element={<Checklists />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/esqueci-minha-senha" element={<ForgotPass />} />
      <Route exact path="/senha-enviada" element={<SentPass />} />
      <Route exact path="/dashboard" element={<DashboardIndex />} />
    </Routes>
  );
};
