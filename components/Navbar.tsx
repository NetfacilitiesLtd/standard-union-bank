export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-700">
          Standard Union Bank
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="hover:text-blue-700 cursor-pointer">Home</li>
          <li className="hover:text-blue-700 cursor-pointer">About</li>
          <li className="hover:text-blue-700 cursor-pointer">Services</li>
          <li className="hover:text-blue-700 cursor-pointer">Contact</li>
        </ul>

        <button className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800">
          Login
        </button>
      </div>
    </nav>
  );
}