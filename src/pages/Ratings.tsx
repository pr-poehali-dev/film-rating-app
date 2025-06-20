import React, { useState, useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import BottomNavigation from "@/components/BottomNavigation";

interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string;
  rating: number;
  poster: string;
  popularity: number;
  rank?: number;
}

// Расширенные мок данные фильмов
const mockMovies: Movie[] = [
  {
    id: 1,
    title: "Крестный отец",
    year: 1972,
    genre: "Драма",
    rating: 9.2,
    poster:
      "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=300&h=400&fit=crop",
    popularity: 95,
  },
  {
    id: 2,
    title: "Побег из Шоушенка",
    year: 1994,
    genre: "Драма",
    rating: 9.3,
    poster:
      "https://images.unsplash.com/photo-1489599797957-2f4a16ba4fe3?w=300&h=400&fit=crop",
    popularity: 98,
  },
  {
    id: 3,
    title: "Начало",
    year: 2010,
    genre: "Фантастика",
    rating: 8.8,
    poster:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop",
    popularity: 92,
  },
  {
    id: 4,
    title: "Интерстеллар",
    year: 2014,
    genre: "Фантастика",
    rating: 8.6,
    poster:
      "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=300&h=400&fit=crop",
    popularity: 89,
  },
  {
    id: 5,
    title: "Мстители: Финал",
    year: 2019,
    genre: "Боевик",
    rating: 8.4,
    poster:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=400&fit=crop",
    popularity: 100,
  },
  {
    id: 6,
    title: "Джокер",
    year: 2019,
    genre: "Драма",
    rating: 8.4,
    poster:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=400&fit=crop",
    popularity: 88,
  },
  {
    id: 7,
    title: "Паразиты",
    year: 2019,
    genre: "Триллер",
    rating: 8.5,
    poster:
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=400&fit=crop",
    popularity: 85,
  },
  {
    id: 8,
    title: "Форрест Гамп",
    year: 1994,
    genre: "Драма",
    rating: 8.8,
    poster:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop",
    popularity: 91,
  },
];

const MovieRankCard: React.FC<{ movie: Movie; rank: number }> = ({
  movie,
  rank,
}) => (
  <div className="flex items-center bg-gray-900 rounded-lg p-3 space-x-3">
    <div className="flex-shrink-0">
      <Badge
        variant="secondary"
        className="bg-purple-600 text-white font-bold text-sm px-2 py-1"
      >
        #{rank}
      </Badge>
    </div>
    <div className="flex-shrink-0">
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-16 h-20 object-cover rounded"
      />
    </div>
    <div className="flex-1 min-w-0">
      <h3 className="font-semibold text-white truncate">{movie.title}</h3>
      <p className="text-sm text-gray-400">
        {movie.year} • {movie.genre}
      </p>
      <div className="flex items-center mt-1">
        <Icon name="Star" size={14} className="text-yellow-400 mr-1" />
        <span className="text-yellow-400 font-medium">{movie.rating}</span>
      </div>
    </div>
  </div>
);

const Ratings: React.FC = () => {
  const [activeTab, setActiveTab] = useState("top");

  const topMovies = useMemo(() => {
    return [...mockMovies].sort((a, b) => b.rating - a.rating).slice(0, 10);
  }, []);

  const moviesByGenre = useMemo(() => {
    const genres = Array.from(new Set(mockMovies.map((movie) => movie.genre)));
    return genres.reduce(
      (acc, genre) => {
        acc[genre] = mockMovies
          .filter((movie) => movie.genre === genre)
          .sort((a, b) => b.rating - a.rating);
        return acc;
      },
      {} as Record<string, Movie[]>,
    );
  }, []);

  const moviesByYear = useMemo(() => {
    const years = Array.from(
      new Set(mockMovies.map((movie) => movie.year)),
    ).sort((a, b) => b - a);
    return years.reduce(
      (acc, year) => {
        acc[year] = mockMovies
          .filter((movie) => movie.year === year)
          .sort((a, b) => b.rating - a.rating);
        return acc;
      },
      {} as Record<number, Movie[]>,
    );
  }, []);

  const popularMovies = useMemo(() => {
    return [...mockMovies]
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 10);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-black/90 backdrop-blur-sm border-b border-gray-800 z-10">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Рейтинги фильмов</h1>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-gray-900">
            <TabsTrigger value="top" className="text-xs">
              Топ
            </TabsTrigger>
            <TabsTrigger value="genre" className="text-xs">
              Жанр
            </TabsTrigger>
            <TabsTrigger value="year" className="text-xs">
              Год
            </TabsTrigger>
            <TabsTrigger value="popular" className="text-xs">
              Популярность
            </TabsTrigger>
          </TabsList>

          <TabsContent value="top" className="mt-4">
            <div className="space-y-3">
              <div className="flex items-center mb-4">
                <Icon
                  name="Trophy"
                  size={20}
                  className="text-yellow-400 mr-2"
                />
                <h2 className="text-lg font-semibold">
                  Топ фильмов по рейтингу
                </h2>
              </div>
              {topMovies.map((movie, index) => (
                <MovieRankCard key={movie.id} movie={movie} rank={index + 1} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="genre" className="mt-4">
            <div className="space-y-6">
              <div className="flex items-center mb-4">
                <Icon name="Film" size={20} className="text-purple-400 mr-2" />
                <h2 className="text-lg font-semibold">Лучшие по жанрам</h2>
              </div>
              {Object.entries(moviesByGenre).map(([genre, movies]) => (
                <div key={genre}>
                  <h3 className="text-md font-medium text-purple-400 mb-3">
                    {genre}
                  </h3>
                  <div className="space-y-2">
                    {movies.slice(0, 3).map((movie, index) => (
                      <MovieRankCard
                        key={movie.id}
                        movie={movie}
                        rank={index + 1}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="year" className="mt-4">
            <div className="space-y-6">
              <div className="flex items-center mb-4">
                <Icon
                  name="Calendar"
                  size={20}
                  className="text-blue-400 mr-2"
                />
                <h2 className="text-lg font-semibold">Лучшие по годам</h2>
              </div>
              {Object.entries(moviesByYear).map(([year, movies]) => (
                <div key={year}>
                  <h3 className="text-md font-medium text-blue-400 mb-3">
                    {year} год
                  </h3>
                  <div className="space-y-2">
                    {movies.slice(0, 2).map((movie, index) => (
                      <MovieRankCard
                        key={movie.id}
                        movie={movie}
                        rank={index + 1}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="popular" className="mt-4">
            <div className="space-y-3">
              <div className="flex items-center mb-4">
                <Icon
                  name="TrendingUp"
                  size={20}
                  className="text-green-400 mr-2"
                />
                <h2 className="text-lg font-semibold">Самые популярные</h2>
              </div>
              {popularMovies.map((movie, index) => (
                <div
                  key={movie.id}
                  className="flex items-center bg-gray-900 rounded-lg p-3 space-x-3"
                >
                  <div className="flex-shrink-0">
                    <Badge
                      variant="secondary"
                      className="bg-green-600 text-white font-bold text-sm px-2 py-1"
                    >
                      #{index + 1}
                    </Badge>
                  </div>
                  <div className="flex-shrink-0">
                    <img
                      src={movie.poster}
                      alt={movie.title}
                      className="w-16 h-20 object-cover rounded"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white truncate">
                      {movie.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {movie.year} • {movie.genre}
                    </p>
                    <div className="flex items-center justify-between mt-1">
                      <div className="flex items-center">
                        <Icon
                          name="Star"
                          size={14}
                          className="text-yellow-400 mr-1"
                        />
                        <span className="text-yellow-400 font-medium">
                          {movie.rating}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Icon
                          name="Heart"
                          size={14}
                          className="text-green-400 mr-1"
                        />
                        <span className="text-green-400 font-medium">
                          {movie.popularity}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Ratings;
