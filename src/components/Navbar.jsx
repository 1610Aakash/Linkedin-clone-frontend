import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow flex justify-between items-center px-6 py-4">
      {/* Logo */}
      <Link
        to={user ? "/home" : "/"}
        className="font-bold text-blue-600 text-xl"
      >
        LinkedIn
      </Link>

      {/* Center Links (Only if logged in) */}
      {user && (
        <div className="flex gap-6 items-center justify-center">
          <Link to="/home" className="hover:text-blue-600">Home</Link>
          <Link to="/jobs" className="hover:text-blue-600">Jobs</Link>
          <Link
            to="/create-post"
            className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold w-10 h-10 flex items-center justify-center rounded"
            title="Create Post"
          >
            +
          </Link>
          <Link to={`/profile/${user._id}`} className="hover:text-blue-600">
            Profile
          </Link>
        </div>
      )}

      {/* Auth Buttons (Right) */}
      <div className="flex gap-4 items-center">
        {user ? (
          <button
            onClick={() => {
              logout();
              navigate('/');
            }}
            className="hover:text-red-500"
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="hover:text-blue-600">Login</Link>
            <Link to="/register" className="hover:text-blue-600">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
