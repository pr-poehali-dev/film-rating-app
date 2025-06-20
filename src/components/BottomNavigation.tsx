import React from "react";
import Icon from "@/components/ui/icon";

interface NavItem {
  name: string;
  icon: string;
  active?: boolean;
}

const BottomNavigation: React.FC = () => {
  const navItems: NavItem[] = [
    { name: "Главная", icon: "Home", active: true },
    { name: "Плейлисты", icon: "List", active: false },
    { name: "Социальное", icon: "Users", active: false },
    { name: "Поиск", icon: "Search", active: false },
    { name: "Профиль", icon: "User", active: false },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => (
          <button
            key={item.name}
            className={`flex flex-col items-center py-1 px-3 rounded-lg transition-colors ${
              item.active
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
