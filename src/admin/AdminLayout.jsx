import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AdminNavbar from "./components/AdminNavbar";
import Sidebar from "./components/Sidebar";
import Add from "./pages/Add";
import List from "./pages/List";
import AdminOrders from "./pages/AdminOrders";
import AdminLogin from "./components/AdminLogin";

const AdminLayout = () => {
  const [token, setToken] = useState(
    localStorage.getItem("adminToken") ? localStorage.getItem("adminToken") : ""
  );

  useEffect(() => {
    localStorage.setItem("adminToken", token);
  }, [token]);

  return (
    <div className="min-h-screen bg-gray-100 m-0 p-0 w-full">
      {token === "" ? (
        <AdminLogin setToken={setToken} />
      ) : (
        <>
          <AdminNavbar setToken={setToken} />
          <hr />
          <div className="flex w-full">
            <Sidebar />
            <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
              <Routes>
                <Route path="add" element={<Add token={token} />} />
                <Route path="list" element={<List token={token} />} />
                <Route path="orders" element={<AdminOrders token={token} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminLayout;
