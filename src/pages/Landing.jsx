import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Landing = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/home');
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center justify-center px-6 py-12 text-center relative overflow-hidden">
      {/* Background circle effect */}
      <div className="absolute top-[-200px] right-[-200px] w-[400px] h-[400px] bg-blue-100 rounded-full opacity-40 animate-pulse"></div>

      {/* Main content */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 mb-6 z-10">
        Connect. Share. Grow.
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-xl z-10">
        Join a vibrant community of professionals. Share your knowledge, build your network, and grow your career with us.
      </p>

      <div className="flex gap-4 z-10">
        <button
          onClick={() => navigate('/register')}
          className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300"
        >
          Get Started
        </button>
        <button
          onClick={() => navigate('/login')}
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-100 transition duration-300"
        >
          Login
        </button>
      </div>

      
    </div>
  );
};

export default Landing;
