import React, { useState, useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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
}

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
  {
    id: 9,
    title: "Темный рыцарь",
    year: 2008,
    genre: "Боевик",
    rating: 9.0,
    poster:
      "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300&h=400&fit=crop",
    popularity: 94,
  },
  {
    id: 10,
    title: "Криминальное чтиво",
    year: 1994,
    genre: "Триллер",
    rating: 8.9,
    poster:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=400&fit=crop",
    popularity: 87,
  },
];

const MovieRankCard: React.FC<{ movie: Movie; rank: number }> = ({
  movie,
  rank,
}) => (
  <div className="flex items-center bg-gray-900/50 rounded-lg p-4 space-x-4 border border-gray-800">
    <Badge
      variant="secondary"
      className="bg-purple-600 text-white font-bold px-3 py-1"
    >
      #{rank}
    </Badge>
    <img
      src={movie.poster}
      alt={movie.title}
      className="w-16 h-20 object-cover rounded-lg"
    />
    <div className="flex-1 min-w-0">
      <h3 className="font-semibold text-white truncate text-lg">
        {movie.title}
      </h3>
      <p className="text-gray-400 text-sm">
        {movie.year} • {movie.genre}
      </p>
      <div className="flex items-center mt-2 space-x-4">
        <div className="flex items-center">
          <Icon name="Star" size={16} className="text-yellow-400 mr-1" />
          <span className="text-yellow-400 font-medium">{movie.rating}</span>
        </div>
        <div className="flex items-center">
          <Icon name="Heart" size={16} className="text-red-400 mr-1" />
          <span className="text-red-400 font-medium">{movie.popularity}%</span>
        </div>
      </div>
    </div>
  </div>
);

const Ratings: React.FC = () => {
  const [activeTab, setActiveTab] = useState("top");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMovies = useMemo(() => {
    return mockMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery]);

  const topMovies = useMemo(() => {
    return [...filteredMovies].sort((a, b) => b.rating - a.rating);
  }, [filteredMovies]);

  const moviesByGenre = useMemo(() => {
    const genres = Array.from(
      new Set(filteredMovies.map((movie) => movie.genre)),
    );
    return genres.reduce(
      (acc, genre) => {
        acc[genre] = filteredMovies
          .filter((movie) => movie.genre === genre)
          .sort((a, b) => b.rating - a.rating);
        return acc;
      },
      {} as Record<string, Movie[]>,
    );
  }, [filteredMovies]);

  const moviesByYear = useMemo(() => {
    const years = Array.from(
      new Set(filteredMovies.map((movie) => movie.year)),
    ).sort((a, b) => b - a);
    return years.reduce(
      (acc, year) => {
        acc[year] = filteredMovies
          .filter((movie) => movie.year === year)
          .sort((a, b) => b.rating - a.rating);
        return acc;
      },
      {} as Record<number, Movie[]>,
    );
  }, [filteredMovies]);

  const popularMovies = useMemo(() => {
    return [...filteredMovies].sort((a, b) => b.popularity - a.popularity);
  }, [filteredMovies]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-black/90 backdrop-blur-md border-b border-gray-800 z-10">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <Icon name="Trophy" size={28} className="text-yellow-400 mr-3" />
            <h1 className="text-3xl font-bold">Рейтинги фильмов</h1>
          </div>

          {/* Search */}
          <div className="relative">
            <Icon
              name="Search"
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <Input
              placeholder="Поиск фильмов..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-gray-800/50 backdrop-blur-sm">
            <TabsTrigger value="top" className="text-sm">
              <Icon name="Trophy" size={16} className="mr-1" />
              Топ
            </TabsTrigger>
            <TabsTrigger value="genre" className="text-sm">
              <Icon name="Film" size={16} className="mr-1" />
              Жанр
            </TabsTrigger>
            <TabsTrigger value="year" className="text-sm">
              <Icon name="Calendar" size={16} className="mr-1" />
              Год
            </TabsTrigger>
            <TabsTrigger value="popular" className="text-sm">
              <Icon name="TrendingUp" size={16} className="mr-1" />
              Топ
            </TabsTrigger>
          </TabsList>

          <TabsContent value="top" className="mt-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-purple-400 mb-4">
                Лучшие фильмы по рейтингу
              </h2>
              {topMovies.map((movie, index) => (
                <MovieRankCard key={movie.id} movie={movie} rank={index + 1} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="genre" className="mt-6">
            <div className="space-y-8">
              <h2 className="text-xl font-semibold text-purple-400 mb-4">
                Лучшие по жанрам
              </h2>
              {Object.entries(moviesByGenre).map(([genre, movies]) => (
                <div key={genre}>
                  <h3 className="text-lg font-medium text-blue-400 mb-4 flex items-center">
                    <Icon name="Film" size={20} className="mr-2" />
                    {genre}
                  </h3>
                  <div className="space-y-3">
                    {movies.map((movie, index) => (
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

          <TabsContent value="year" className="mt-6">
            <div className="space-y-8">
              <h2 className="text-xl font-semibold text-purple-400 mb-4">
                Лучшие по годам выпуска
              </h2>
              {Object.entries(moviesByYear).map(([year, movies]) => (
                <div key={year}>
                  <h3 className="text-lg font-medium text-green-400 mb-4 flex items-center">
                    <Icon name="Calendar" size={20} className="mr-2" />
                    {year} год
                  </h3>
                  <div className="space-y-3">
                    {movies.map((movie, index) => (
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

          <TabsContent value="popular" className="mt-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-purple-400 mb-4">
                Самые популярные фильмы
              </h2>
              {popularMovies.map((movie, index) => (
                <MovieRankCard key={movie.id} movie={movie} rank={index + 1} />
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
