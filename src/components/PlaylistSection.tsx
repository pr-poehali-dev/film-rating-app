import React, { useState } from "react";
import Icon from "@/components/ui/icon";

interface Playlist {
  id: number;
  name: string;
  description: string;
  movieCount: number;
  thumbnail: string;
  isPublic: boolean;
  author: string;
}

const PlaylistSection: React.FC = () => {
  const [playlists] = useState<Playlist[]>([
    {
      id: 1,
      name: "Мои любимые фантастика",
      description: "Лучшие фильмы в жанре фантастика",
      movieCount: 15,
      thumbnail:
        "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=200&h=120&fit=crop",
      isPublic: true,
      author: "Вы",
    },
    {
      id: 2,
      name: "К просмотру",
      description: "Фильмы, которые хочу посмотреть",
      movieCount: 8,
      thumbnail:
        "https://images.unsplash.com/photo-1489599162353-4e1b0d4b0b8f?w=200&h=120&fit=crop",
      isPublic: false,
      author: "Вы",
    },
    {
      id: 3,
      name: "Хорроры от Дмитрия",
      description: "Лучшие фильмы ужасов",
      movieCount: 12,
      thumbnail:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=120&fit=crop",
      isPublic: true,
      author: "Дмитрий",
    },
  ]);

  const [showCreateForm, setShowCreateForm] = useState(false);

  return (
    <div className="px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-lg font-semibold">Мои плейлисты</h2>
        <button
          onClick={() => setShowCreateForm(true)}
          className="bg-purple-600 px-4 py-2 rounded-lg text-white text-sm hover:bg-purple-700 transition-colors flex items-center space-x-2"
        >
          <Icon name="Plus" size={16} />
          <span>Создать</span>
        </button>
      </div>

      {showCreateForm && (
        <div className="bg-gray-800 rounded-lg p-4 mb-4">
          <h3 className="text-white font-medium mb-3">Создать плейлист</h3>
          <input
            type="text"
            placeholder="Название плейлиста"
            className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            placeholder="Описание (необязательно)"
            className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 mb-3 h-20 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <div className="flex items-center space-x-2 mb-3">
            <input type="checkbox" id="public" className="rounded" />
            <label htmlFor="public" className="text-gray-300 text-sm">
              Публичный плейлист
            </label>
          </div>
          <div className="flex space-x-2">
            <button className="bg-purple-600 px-4 py-2 rounded-lg text-white text-sm hover:bg-purple-700 transition-colors">
              Создать
            </button>
            <button
              onClick={() => setShowCreateForm(false)}
              className="bg-gray-600 px-4 py-2 rounded-lg text-white text-sm hover:bg-gray-700 transition-colors"
            >
              Отмена
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4">
        {playlists.map((playlist) => (
          <div
            key={playlist.id}
            className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors"
          >
            <div className="flex">
              <img
                src={playlist.thumbnail}
                alt={playlist.name}
                className="w-20 h-16 object-cover"
              />
              <div className="flex-1 p-3">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-white font-medium text-sm">
                    {playlist.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    {playlist.isPublic ? (
                      <Icon name="Globe" size={14} className="text-green-400" />
                    ) : (
                      <Icon name="Lock" size={14} className="text-gray-400" />
                    )}
                    <button className="text-gray-400 hover:text-white">
                      <Icon name="Share" size={14} />
                    </button>
                  </div>
                </div>
                <p className="text-gray-400 text-xs mb-1">
                  {playlist.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-xs">
                    {playlist.movieCount} фильмов
                  </span>
                  <span className="text-gray-500 text-xs">
                    от {playlist.author}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistSection;
