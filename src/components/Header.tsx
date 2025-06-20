import React from "react";
import NotificationBell from "./NotificationBell";

const Header: React.FC = () => {
  return (
    <div className="bg-gray-900 px-4 py-3 flex justify-between items-center">
      <div>
        <h1 className="text-white text-xl font-bold">КиноРек</h1>
        <p className="text-gray-400 text-sm">Персональные рекомендации</p>
      </div>
      <NotificationBell />
    </div>
  );
};

export default Header;
