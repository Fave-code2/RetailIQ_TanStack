import React from "react";
import retail from "../../assects/retailiq-logo.svg";
import { LuLayoutDashboard } from "react-icons/lu";
import { FiBox, FiTag, FiUsers } from "react-icons/fi";
import { GiShoppingCart } from "react-icons/gi";
import { FaChartBar, FaCogs } from "react-icons/fa";

const SideBar = () => {
  return (
    <aside className="w-70 bg-gray-100 px-5 py-3 min-h-screen border-r border-gray-200 flex flex-col">
      <header className="pb-5 border-b border-gray-500">
        <img src={retail} alt="logo" className="w-125" />
      </header>

      <main className="flex-1">
        {/* main */}
        <div className="pl-2 mb-5 pt-3">
          <p className="text-gray-500 uppercase text-xs pb-3">Main</p>

          <nav className="space-y-2">
            <a
              href="/"
              className="flex items-center gap-2 text-neutral-950 text-xl font-semibold hover:bg-gray-300 p-2 rounded-md"
            >
              <LuLayoutDashboard size={18} className="text-gray-500" />
              Dashboard
            </a>
          </nav>
        </div>

        {/* Catalog */}
        <div className="pl-2 mb-5">
          <p className="text-gray-500 uppercase text-xs pb-3">Catalog</p>

          <nav className="space-y-2">
            <a
              href="/products"
              className="flex items-center gap-2 text-neutral-950 text-xl font-semibold hover:bg-gray-300 p-2 rounded-md"
            >
              <FiBox size={18} className="text-gray-500" />
              Products
            </a>
            <a
              href="/Categories"
              className="flex items-center gap-2 text-neutral-950 text-xl font-semibold hover:bg-gray-300 p-2 rounded-md"
            >
              <FiTag size={18} className="text-gray-500" />
              Categories
            </a>
          </nav>
        </div>

        {/* Users */}
        <div className="pl-2 mb-5">
          <p className="text-gray-500 uppercase text-xs pb-3">Customers</p>

          <nav className="space-y-2">
            <a
              href="/users"
              className="flex items-center gap-2 text-neutral-950 text-xl font-semibold hover:bg-gray-300 p-2 rounded-md"
            >
              <FiUsers size={18} className="text-gray-500" />
              Users
            </a>
          </nav>
        </div>

        {/* Orders */}
        <div className="pl-2 mb-5">
          <p className="text-gray-500 uppercase text-xs pb-3">Orders</p>

          <nav className="space-y-2">
            <a
              href="/users"
              className="flex items-center gap-2 text-neutral-950 text-xl font-semibold hover:bg-gray-300 p-2 rounded-md"
            >
              <GiShoppingCart size={18} className="text-gray-500" />
              Carts
            </a>
          </nav>
        </div>

        {/* Orders */}
        <div className="pl-2 mb-5">
          <p className="text-gray-500 uppercase text-xs pb-3">Analytics</p>

          <nav className="space-y-2">
            <a
              href="/users"
              className="flex items-center gap-2 text-neutral-950 text-xl font-semibold hover:bg-gray-300 p-2 rounded-md"
            >
              <FaChartBar size={18} className="text-gray-500" />
              Overview
            </a>
          </nav>
        </div>
      </main>

      <footer>
        {/* Settings */}
        <div className="pl-2 mb-5">
          <p className="text-gray-500 uppercase text-xs pb-3">Settings</p>

          <nav className="space-y-2">
            <a
              href="/users"
              className="flex items-center gap-2 text-neutral-950 text-xl font-semibold hover:bg-gray-300 p-2 rounded-md"
            >
              <FaCogs size={18} className="text-gray-500" />
              Settings
            </a>
          </nav>
        </div>
      </footer>
    </aside>
  );
};

export default SideBar;
