import React, { useState } from "react";
import Icon from "@/components/ui/icon";

interface Notification {
  id: number;
  type: "release" | "premiere" | "friend" | "playlist";
  title: string;
  message: string;
  time: string;
  isRead: boolean;
}

const NotificationBell: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications] = useState<Notification[]>([
    {
      id: 1,
      type: "release",
      title: "Новый релиз",
      message: "Вышел фильм 'Дюна 2' в хорошем качестве",
      time: "2 часа назад",
      isRead: false,
    },
    {
      id: 2,
      type: "premiere",
      title: "Премьера завтра",
      message: "Завтра премьера 'Человек-паук 4'",
      time: "5 часов назад",
      isRead: false,
    },
    {
      id: 3,
      type: "friend",
      title: "Активность друга",
      message: "Алексей добавил 5 фильмов в плейлист",
      time: "1 день назад",
      isRead: true,
    },
  ]);

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "release":
        return "Play";
      case "premiere":
        return "Calendar";
      case "friend":
        return "Users";
      case "playlist":
        return "List";
      default:
        return "Bell";
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-purple-600 p-2 rounded-full hover:bg-purple-700 transition-colors relative"
      >
        <Icon name="Bell" size={20} className="text-white" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-12 w-80 bg-gray-800 rounded-lg shadow-xl border border-gray-700 z-50">
          <div className="p-4 border-b border-gray-700">
            <h3 className="text-white font-semibold">Уведомления</h3>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 border-b border-gray-700 hover:bg-gray-700 transition-colors ${
                  !notification.isRead ? "bg-gray-750" : ""
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-600 p-2 rounded-full">
                    <Icon
                      name={getNotificationIcon(notification.type) as any}
                      size={16}
                      className="text-white"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium text-sm">
                      {notification.title}
                    </h4>
                    <p className="text-gray-300 text-sm mt-1">
                      {notification.message}
                    </p>
                    <p className="text-gray-500 text-xs mt-2">
                      {notification.time}
                    </p>
                  </div>
                  {!notification.isRead && (
                    <div className="bg-purple-500 w-2 h-2 rounded-full"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
