import React, { useState } from "react";
import Icon from "@/components/ui/icon";

interface Friend {
  id: number;
  name: string;
  avatar: string;
  status: "online" | "offline";
  lastActivity: string;
}

interface Discussion {
  id: number;
  title: string;
  movieTitle: string;
  author: string;
  replies: number;
  lastReply: string;
}

const SocialSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"friends" | "discussions">(
    "friends",
  );

  const friends: Friend[] = [
    {
      id: 1,
      name: "Алексей",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
      status: "online",
      lastActivity: "Смотрит 'Дюну'",
    },
    {
      id: 2,
      name: "Мария",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=50&h=50&fit=crop&crop=face",
      status: "offline",
      lastActivity: "Вчера добавила 'Джокер'",
    },
    {
      id: 3,
      name: "Дмитрий",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      status: "online",
      lastActivity: "Создал плейлист 'Хорроры'",
    },
  ];

  const discussions: Discussion[] = [
    {
      id: 1,
      title: "Что думаете о новой Дюне?",
      movieTitle: "Дюна: Часть вторая",
      author: "Алексей",
      replies: 12,
      lastReply: "5 минут назад",
    },
    {
      id: 2,
      title: "Лучшие фильмы 2023 года",
      movieTitle: "Оппенгеймер",
      author: "Мария",
      replies: 8,
      lastReply: "2 часа назад",
    },
  ];

  return (
    <div className="bg-gray-900 rounded-lg p-4 mx-4">
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setActiveTab("friends")}
          className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
            activeTab === "friends"
              ? "bg-purple-600 text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          <Icon name="Users" size={16} />
          <span>Друзья</span>
        </button>
        <button
          onClick={() => setActiveTab("discussions")}
          className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
            activeTab === "discussions"
              ? "bg-purple-600 text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          <Icon name="MessageCircle" size={16} />
          <span>Обсуждения</span>
        </button>
      </div>

      {activeTab === "friends" && (
        <div className="space-y-3">
          {friends.map((friend) => (
            <div
              key={friend.id}
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <div className="relative">
                <img
                  src={friend.avatar}
                  alt={friend.name}
                  className="w-10 h-10 rounded-full"
                />
                <div
                  className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-gray-900 ${
                    friend.status === "online" ? "bg-green-500" : "bg-gray-500"
                  }`}
                ></div>
              </div>
              <div className="flex-1">
                <h4 className="text-white font-medium text-sm">
                  {friend.name}
                </h4>
                <p className="text-gray-400 text-xs">{friend.lastActivity}</p>
              </div>
              <button className="text-gray-400 hover:text-white">
                <Icon name="MessageCircle" size={16} />
              </button>
            </div>
          ))}
        </div>
      )}

      {activeTab === "discussions" && (
        <div className="space-y-3">
          {discussions.map((discussion) => (
            <div
              key={discussion.id}
              className="p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <h4 className="text-white font-medium text-sm mb-1">
                {discussion.title}
              </h4>
              <p className="text-purple-400 text-xs mb-2">
                {discussion.movieTitle}
              </p>
              <div className="flex justify-between items-center text-xs text-gray-400">
                <span>от {discussion.author}</span>
                <div className="flex items-center space-x-4">
                  <span>{discussion.replies} ответов</span>
                  <span>{discussion.lastReply}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SocialSection;
