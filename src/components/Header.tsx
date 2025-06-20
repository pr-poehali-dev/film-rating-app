import React from "react";
import Icon from "@/components/ui/icon";

const Header: React.FC = () => {
  return (
    <div className="bg-gray-900 px-4 py-3 flex justify-between items-center">
      <div>
        <h1 className="text-white text-xl font-bold">КиноРек</h1>
        <p className="text-gray-400 text-sm">Персональные рекомендации</p>
      </div>
      <button className="bg-purple-600 p-2 rounded-full hover:bg-purple-700 transition-colors">
        <Icon name="Bell" size={20} className="text-white" />
      </button>
    </div>
  );
};

export default Header;
