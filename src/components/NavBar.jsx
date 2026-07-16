// layout/NavBar.jsx
import { FiSearch, FiBell, FiHelpCircle } from "react-icons/fi";

const NavBar = ({ title = "Dashboard" }) => {
  return (
    <header className="w-full flex items-center justify-between border-b border-gray-200 bg-gray-100 px-6 py-3">
      <h1 className="text-lg font-semibold text-neutral-950 shrink-0">
        {title}
      </h1>

      <div className="flex-1 min-w-0 max-w-md mx-6">
        <div className="relative">
          <FiSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={16}
          />
          <input
            type="text"
            placeholder="Search orders, customers..."
            className="w-full rounded-md border border-gray-200 bg-gray-50 py-2 pl-9 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
            ⌘K
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <FiBell size={18} className="text-gray-500 cursor-pointer" />
        <FiHelpCircle size={18} className="text-gray-500 cursor-pointer" />
      </div>
    </header>
  );
};

export default NavBar;
