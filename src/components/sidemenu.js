export default function Sidemenu() {
    return (
      <nav className="bg-gray-200 p-4 w-64 h-full">
        <ul>
          <li className="mb-2"><a href="#" className="text-blue-600 hover:underline">Home</a></li>
          <li className="mb-2"><a href="#" className="text-blue-600 hover:underline">About</a></li>
          <li className="mb-2"><a href="#" className="text-blue-600 hover:underline">Contact</a></li>
        </ul>
      </nav>
    );
  }