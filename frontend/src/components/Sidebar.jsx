import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoHomeSharp } from 'react-icons/io5';
import { FaHeart } from 'react-icons/fa';
import { MdOutlineExplore, MdEditDocument } from 'react-icons/md';
import { PiSignInBold } from 'react-icons/pi';
import LogOut from './LogOut';
import { useAuthContext } from '../context/AuthContext';

const IconWithTooltip = ({ icon, name }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {icon}
      {showTooltip && (
        <div className="absolute bg-gray-800 text-white text-xs px-2 py-1 rounded-lg bottom-full left-1/2 transform -translate-x-1/2">
          {name}
        </div>
      )}
    </div>
  );
};

export const Sidebar = () => {
  const { authUser } = useAuthContext();

  return (
    <aside className="flex flex-col items-center min-w-12 sm:w-16 sticky top-0 left-0 h-screen py-8 overflow-y-auto border-r bg-glass ">
      <nav className="h-full flex flex-col gap-3">
        <Link to="/" className="flex-justify-center">
          <img className="h-8" src="/github.svg" alt="Github Logo" />
        </Link>
        <Link
          to="/"
          className="p-1.5 felx justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800"
        >
          <IconWithTooltip icon={<IoHomeSharp size={20} />} name="Home" />
        </Link>
        {authUser && (
          <Link
            to="/likes"
            className="p-1.5 felx justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800"
          >
            <IconWithTooltip icon={<FaHeart size={22} />} name="Likes" />
          </Link>
        )}
        {authUser && (
          <Link
            to="/explore"
            className="p-1.5 felx justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800"
          >
            <IconWithTooltip
              icon={<MdOutlineExplore size={25} />}
              name="Explore"
            />
          </Link>
        )}
        {!authUser && (
          <Link
            to="/login"
            className="p-1.5 felx justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800"
          >
            <IconWithTooltip
              icon={<PiSignInBold size={25} />}
              name="Sign In"
            />
          </Link>
        )}
        {!authUser && (
          <Link
            to="/signup"
            className="p-1.5 felx justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800"
          >
            <IconWithTooltip
              icon={<MdEditDocument size={25} />}
              name="Sign Up"
            />
          </Link>
        )}
        {authUser && (
          <div className="flex flex-col gap-2 mt-auto">
            <LogOut sixe={22} />
          </div>
        )}
      </nav>
    </aside>
  );
};
