import { Route, Routes } from "react-router-dom";
import Admin from "../elem/Admin/Admin";

const PublicRoute = () => {
  return (
    <Routes>
      <Route path="/Admin" element={<Admin />} />
    </Routes>
  );
};
