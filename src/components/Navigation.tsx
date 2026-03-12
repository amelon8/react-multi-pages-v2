import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="max-w-6xl mx-auto flex gap-8">
                <Link to="/" className="text-lg font-bold hover:text-gray-300">
                    Home
                </Link>
                <Link to="/about" className="hover:text-gray-300">
                    About
                </Link>
                <Link to="/contact" className="hover:text-gray-300">
                    Contact
                </Link>
                <Link to="/info" className="hover:text-gray-300">
                    Info
                </Link>
            </div>
        </nav>
    );
}
