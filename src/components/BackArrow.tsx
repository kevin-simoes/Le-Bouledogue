import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export function ReturnArrow() {
    return(
        <Link
        href="/"
        className="text-white text-3xl flex fixed top-4 left-4 p-3 z-50 bg-(--color-camel-700) rounded-full hover:bg-(--color-camel-600) transition"
      >
        <FaArrowLeft />
      </Link>
    )
}