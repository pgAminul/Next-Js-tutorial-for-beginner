import Link from "next/link";

export default function navabar() {
  return (
    <div>
      <nav class="bg-white shadow-md px-4 py-3">
        <div class="container mx-auto flex justify-between items-center">
          <a href="#" class="text-2xl font-bold text-blue-600">
            Logo
          </a>
          <ul class="hidden md:flex space-x-6">
            <li>
              <Link href={"/"} className="text-gray-700 hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/about"}
                className="text-gray-700 hover:text-blue-600"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={"/about/myProfile"}
                className="text-gray-700 hover:text-blue-600"
              >
                My Profile
              </Link>
            </li>
            <li>
              <Link
                href={"/contact"}
                className="text-gray-700 hover:text-blue-600"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href={"/story"}
                className="text-gray-700 hover:text-blue-600"
              >
                Story
              </Link>
            </li>
          </ul>
          <div class="md:hidden">
            <button
              id="menu-btn"
              class="text-2xl text-gray-700 focus:outline-none"
            >
              &#9776;
            </button>
          </div>
        </div>

        {/* <div id="mobile-menu" class="md:hidden hidden px-4 pt-2 pb-4">
          <a href="#" class="block text-gray-700 py-2 hover:text-blue-600">
            Home
          </a>
          <a href="#" class="block text-gray-700 py-2 hover:text-blue-600">
            About
          </a>
          <a href="#" class="block text-gray-700 py-2 hover:text-blue-600">
            Services
          </a>
          <a href="#" class="block text-gray-700 py-2 hover:text-blue-600">
            Contact
          </a>
        </div> */}
      </nav>
    </div>
  );
}
