import React, { useState } from "react";
import { MdLogout } from "react-icons/md";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

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

const LogOut = () => {
  const { authUser, setAuthUser } = useAuthContext();
  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/logout", { credentials: "include" });
      const data = await res.json();
      setAuthUser(null);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <img
        src={authUser?.avatarUrl}
        className="w-10 h-10 rounded-full border border-gray-800"
      />

      <div
        className="cursor-pointer flex items-center p-2 rounded-lg bg-glass mt-auto border border-gray-800"
        onClick={handleLogout}
      >
        <IconWithTooltip icon={<MdLogout size={22} />} name="Log Out" />
      </div>
    </>
  );
};

export default LogOut;
