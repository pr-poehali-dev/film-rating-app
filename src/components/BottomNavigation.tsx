import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface NavItem {
  name: string;
  icon: string;
  path: string;
}

const BottomNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems: NavItem[] = [
    { name: "Главная", icon: "Home", path: "/" },
    { name: "Фильмы", icon: "Film", path: "/movies" },
    { name: "Рейтинги", icon: "Trophy", path: "/ratings" },
    { name: "Поиск", icon: "Search", path: "/search" },
    { name: "Лицензии", icon: "Shield", path: "/licenses" },
    { name: "Профиль", icon: "User", path: "/profile" },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => handleNavigation(item.path)}
            className={`flex flex-col items-center py-1 px-3 rounded-lg transition-colors ${
              location.pathname === item.path
                ? "text-purple-400 bg-purple-400 bg-opacity-10"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Icon name={item.icon as any} size={22} />
            <span className="text-xs mt-1">{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
