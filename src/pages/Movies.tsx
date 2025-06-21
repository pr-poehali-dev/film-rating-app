import React, { useState, useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import MovieCard from "@/components/MovieCard";
import BottomNavigation from "@/components/BottomNavigation";

interface Movie {
  id: number;
  title: string;
  rating: number;
  year: number;
  genre: string;
  poster: string;
  isNew?: boolean;
  country: string;
}

const mockMovies: Movie[] = [
  {
    id: 1,
    title: "Мстители: Финал",
    rating: 8.4,
    year: 2019,
    genre: "Боевик",
    poster:
      "https://images.unsplash.com/photo-1635863138275-d9864d429db4?w=300&h=400&fit=crop",
    isNew: true,
    country: "США",
  },
  {
    id: 2,
    title: "Движение вверх",
    rating: 7.8,
    year: 2017,
    genre: "Спорт",
    poster:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop",
    country: "Россия",
  },
  {
    id: 3,
    title: "Оппенгеймер",
    rating: 8.3,
    year: 2023,
    genre: "Биография",
    poster:
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=400&fit=crop",
    isNew: true,
    country: "США",
  },
  {
    id: 4,
    title: "Вампиры средней полосы",
    rating: 6.9,
    year: 2021,
    genre: "Комедия",
    poster:
      "https://images.unsplash.com/photo-1509347528160-9329f9dd50a5?w=300&h=400&fit=crop",
    country: "Россия",
  },
];

const Movies: React.FC = () => {
  const [activeTab, setActiveTab] = useState("popular");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMovies = useMemo(() => {
    return mockMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery]);

  const popularMovies = useMemo(() => {
    return [...filteredMovies].sort((a, b) => b.rating - a.rating);
  }, [filteredMovies]);

  const newMovies = useMemo(() => {
    return filteredMovies.filter((movie) => movie.isNew || movie.year >= 2022);
  }, [filteredMovies]);

  const russianMovies = useMemo(() => {
    return filteredMovies.filter((movie) => movie.country === "Россия");
  }, [filteredMovies]);

  const foreignMovies = useMemo(() => {
    return filteredMovies.filter((movie) => movie.country !== "Россия");
  }, [filteredMovies]);

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-black/90 backdrop-blur-md border-b border-gray-800 z-10">
        <div className="p-4">
          <div className="flex items-center mb-4">
            <Icon name="Film" size={28} className="text-purple-400 mr-3" />
            <h1 className="text-2xl font-bold">Фильмы</h1>
          </div>

          {/* Search */}
          <div className="relative">
            <Icon
              name="Search"
              size={18}
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
      <div className="p-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-gray-800/50 backdrop-blur-sm mb-6">
            <TabsTrigger value="popular" className="text-xs">
              Популярные
            </TabsTrigger>
            <TabsTrigger value="new" className="text-xs">
              Новые
            </TabsTrigger>
            <TabsTrigger value="russian" className="text-xs">
              Российские
            </TabsTrigger>
            <TabsTrigger value="foreign" className="text-xs">
              Зарубежные
            </TabsTrigger>
          </TabsList>

          <TabsContent value="popular">
            <div className="grid grid-cols-2 gap-4">
              {popularMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  title={movie.title}
                  rating={movie.rating}
                  year={movie.year}
                  genre={movie.genre}
                  poster={movie.poster}
                  isNew={movie.isNew}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="new">
            <div className="grid grid-cols-2 gap-4">
              {newMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  title={movie.title}
                  rating={movie.rating}
                  year={movie.year}
                  genre={movie.genre}
                  poster={movie.poster}
                  isNew={movie.isNew}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="russian">
            <div className="grid grid-cols-2 gap-4">
              {russianMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  title={movie.title}
                  rating={movie.rating}
                  year={movie.year}
                  genre={movie.genre}
                  poster={movie.poster}
                  isNew={movie.isNew}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="foreign">
            <div className="grid grid-cols-2 gap-4">
              {foreignMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  title={movie.title}
                  rating={movie.rating}
                  year={movie.year}
                  genre={movie.genre}
                  poster={movie.poster}
                  isNew={movie.isNew}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Movies;
