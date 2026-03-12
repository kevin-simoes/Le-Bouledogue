import { FaSearch, FaShoppingCart } from "react-icons/fa";

export default function SearchBar() {
    return (
      <div className="w-full max-w-md mx-auto border-red-100">
        <div className="flex items-center bg-white shadow-md rounded-3xl border-2 border-(--color-amber-600) overflow-hidden">
        <FaSearch className="text-(--color-amber-600) pl-2 size-7" />
          <input
            type="text"
            placeholder="Buscar produtos..."
            className="flex-1 px-4 py-2 outline-none bg-transparent text-gray-700"
          />
          <button className="ml-2 bg-(--color-amber-600) text-white px-4 py-2  overflow-hidden hover:bg-(--color-amber-700) transition">
            Buscar
          </button>
        </div>
      </div>
    );
  }