import React, { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";
import BottomNavigation from "@/components/BottomNavigation";

interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string;
  rating: number;
  poster: string;
  duration: string;
}

// Мок данные фильмов
const mockMovies: Movie[] = [
  {
    id: 1,
    title: "Интерстеллар",
    year: 2014,
    genre: "Фантастика",
    rating: 8.6,
    poster:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop",
    duration: "169 мин",
  },
  {
    id: 2,
    title: "Начало",
    year: 2010,
    genre: "Фантастика",
    rating: 8.8,
    poster:
      "https://images.unsplash.com/photo-1489599797957-2f4a16ba4fe3?w=300&h=400&fit=crop",
    duration: "148 мин",
  },
  {
    id: 3,
    title: "Джокер",
    year: 2019,
    genre: "Драма",
    rating: 8.4,
    poster:
      "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=300&h=400&fit=crop",
    duration: "122 мин",
  },
  {
    id: 4,
    title: "Паразиты",
    year: 2019,
    genre: "Триллер",
    rating: 8.5,
    poster:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=400&fit=crop",
    duration: "132 мин",
  },
  {
    id: 5,
    title: "Мстители: Финал",
    year: 2019,
    genre: "Боевик",
    rating: 8.4,
    poster:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=400&fit=crop",
    duration: "181 мин",
  },
  {
    id: 6,
    title: "Крестный отец",
    year: 1972,
    genre: "Драма",
    rating: 9.2,
    poster:
      "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=300&h=400&fit=crop",
    duration: "175 мин",
  },
];

const genres = [
  "Все жанры",
  "Фантастика",
  "Драма",
  "Триллер",
  "Боевик",
  "Комедия",
  "Ужасы",
];
const years = [
  "Все годы",
  "2020-2024",
  "2015-2019",
  "2010-2014",
  "2000-2009",
  "1990-1999",
];

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("Все жанры");
  const [selectedYear, setSelectedYear] = useState("Все годы");
  const [ratingRange, setRatingRange] = useState([0]);

  const filteredMovies = useMemo(() => {
    return mockMovies.filter((movie) => {
      const matchesSearch = movie.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesGenre =
        selectedGenre === "Все жанры" || movie.genre === selectedGenre;
      const matchesRating = movie.rating >= ratingRange[0];

      let matchesYear = true;
      if (selectedYear !== "Все годы") {
        const [startYear, endYear] = selectedYear.split("-").map(Number);
        matchesYear = movie.year >= startYear && movie.year <= endYear;
      }

      return matchesSearch && matchesGenre && matchesYear && matchesRating;
    });
  }, [searchQuery, selectedGenre, selectedYear, ratingRange]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedGenre("Все жанры");
    setSelectedYear("Все годы");
    setRatingRange([0]);
  };

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-black/90 backdrop-blur-sm border-b border-gray-800 z-10">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Поиск фильмов</h1>

          {/* Search Input */}
          <div className="relative mb-4">
            <Icon
              name="Search"
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <Input
              type="text"
              placeholder="Введите название фильма..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-900 border-gray-700 text-white placeholder-gray-400"
            />
          </div>

          {/* Filters */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                <SelectTrigger className="bg-gray-900 border-gray-700">
                  <SelectValue placeholder="Жанр" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700">
                  {genres.map((genre) => (
                    <SelectItem
                      key={genre}
                      value={genre}
                      className="text-white"
                    >
                      {genre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="bg-gray-900 border-gray-700">
                  <SelectValue placeholder="Год" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700">
                  {years.map((year) => (
                    <SelectItem key={year} value={year} className="text-white">
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Rating Filter */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">
                  Рейтинг от {ratingRange[0]}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-purple-400 hover:text-purple-300"
                >
                  <Icon name="X" size={16} className="mr-1" />
                  Сбросить
                </Button>
              </div>
              <Slider
                value={ratingRange}
                onValueChange={setRatingRange}
                max={10}
                min={0}
                step={0.1}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="p-4">
        <div className="mb-4">
          <p className="text-gray-400">
            Найдено фильмов:{" "}
            <span className="text-white font-semibold">
              {filteredMovies.length}
            </span>
          </p>
        </div>

        {filteredMovies.length === 0 ? (
          <div className="text-center py-12">
            <Icon
              name="Search"
              size={48}
              className="mx-auto text-gray-600 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              Фильмы не найдены
            </h3>
            <p className="text-gray-500">
              Попробуйте изменить параметры поиска
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {filteredMovies.map((movie) => (
              <div
                key={movie.id}
                className="bg-gray-900 rounded-lg overflow-hidden"
              >
                <div className="aspect-[3/4] relative">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-black/70 px-2 py-1 rounded-full">
                    <div className="flex items-center">
                      <Icon
                        name="Star"
                        size={12}
                        className="text-yellow-400 mr-1"
                      />
                      <span className="text-xs font-semibold">
                        {movie.rating}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-sm mb-1 line-clamp-2">
                    {movie.title}
                  </h3>
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    <span>
                      {movie.year} • {movie.genre}
                    </span>
                    <span>{movie.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Search;
