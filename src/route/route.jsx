import { Route, Routes } from "react-router-dom";
import Admin from "../elem/Admin/Admin";
import Body from "../elem/body/body";
const PublicRoute = () => {
  return (
    <Routes>
      <Route path="/Admin" element={<Admin />} />
      <Route path="/" element={<Body />} />
    </Routes>
  );
};
