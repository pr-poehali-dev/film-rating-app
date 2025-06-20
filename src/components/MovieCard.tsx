import React, { useState } from "react";
import Icon from "@/components/ui/icon";

interface MovieCardProps {
  title: string;
  rating: number;
  year: number;
  genre: string;
  poster: string;
  isWatched?: boolean;
  isNew?: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  rating,
  year,
  genre,
  poster,
  isWatched = false,
  isNew = false,
}) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative">
      <div className="relative">
        <img src={poster} alt={title} className="w-full h-48 object-cover" />
        {isWatched && (
          <div className="absolute top-2 right-2 bg-green-500 rounded-full p-1">
            <Icon name="Check" size={16} className="text-white" />
          </div>
        )}
        {isNew && (
          <div className="absolute top-2 right-10 bg-red-500 rounded-full p-1 animate-pulse">
            <Icon name="Bell" size={16} className="text-white" />
          </div>
        )}
        <button
          onClick={() => setShowActions(!showActions)}
          className="absolute top-2 left-2 bg-black bg-opacity-50 rounded-full p-1 hover:bg-opacity-70 transition-colors"
        >
          <Icon name="Plus" size={16} className="text-white" />
        </button>
        <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 px-2 py-1 rounded">
          <div className="flex items-center space-x-1">
            <Icon
              name="Star"
              size={14}
              className="text-yellow-400 fill-current"
            />
            <span className="text-white text-sm font-medium">{rating}</span>
          </div>
        </div>
      </div>

      {showActions && (
        <div className="absolute top-10 left-2 bg-gray-800 rounded-lg p-2 shadow-lg z-10">
          <div className="flex flex-col space-y-1">
            <button className="flex items-center space-x-2 px-2 py-1 text-white text-xs hover:bg-gray-700 rounded">
              <Icon name="List" size={12} />
              <span>В плейлист</span>
            </button>
            <button className="flex items-center space-x-2 px-2 py-1 text-white text-xs hover:bg-gray-700 rounded">
              <Icon name="Share" size={12} />
              <span>Поделиться</span>
            </button>
            <button className="flex items-center space-x-2 px-2 py-1 text-white text-xs hover:bg-gray-700 rounded">
              <Icon name="MessageCircle" size={12} />
              <span>Обсудить</span>
            </button>
          </div>
        </div>
      )}

      <div className="p-3">
        <h3 className="text-white font-medium text-sm mb-1 truncate">
          {title}
        </h3>
        <div className="flex justify-between items-center text-xs text-gray-400">
          <span>{year}</span>
          <span>{genre}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
