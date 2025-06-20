import React from "react";
import Header from "@/components/Header";
import MovieSection from "@/components/MovieSection";
import SocialSection from "@/components/SocialSection";
import PlaylistSection from "@/components/PlaylistSection";
import BottomNavigation from "@/components/BottomNavigation";

const Index: React.FC = () => {
  // Моковые данные фильмов
  const recommendedMovies = [
    {
      id: 1,
      title: "Дюна",
      rating: 8.2,
      year: 2021,
      genre: "Фантастика",
      poster:
        "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop",
      isWatched: false,
    },
    {
      id: 2,
      title: "Матрица",
      rating: 8.7,
      year: 1999,
      genre: "Фантастика",
      poster:
        "https://images.unsplash.com/photo-1489599162353-4e1b0d4b0b8f?w=300&h=400&fit=crop",
      isWatched: true,
    },
    {
      id: 3,
      title: "Интерстеллар",
      rating: 8.6,
      year: 2014,
      genre: "Драма",
      poster:
        "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=300&h=400&fit=crop",
      isWatched: false,
    },
  ];

  const popularMovies = [
    {
      id: 4,
      title: "Мстители",
      rating: 8.4,
      year: 2019,
      genre: "Боевик",
      poster:
        "https://images.unsplash.com/photo-1635863138275-d9864d429db4?w=300&h=400&fit=crop",
      isWatched: true,
    },
    {
      id: 5,
      title: "Джокер",
      rating: 8.5,
      year: 2019,
      genre: "Триллер",
      poster:
        "https://images.unsplash.com/photo-1509347528160-9329f9dd50a5?w=300&h=400&fit=crop",
      isWatched: false,
    },
    {
      id: 6,
      title: "Паразиты",
      rating: 8.6,
      year: 2019,
      genre: "Триллер",
      poster:
        "https://images.unsplash.com/photo-1489599162353-4e1b0d4b0b8f?w=300&h=400&fit=crop",
      isWatched: false,
    },
  ];

  const newReleases = [
    {
      id: 7,
      title: "Оппенгеймер",
      rating: 8.3,
      year: 2023,
      genre: "Биография",
      poster:
        "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=400&fit=crop",
      isWatched: false,
    },
    {
      id: 8,
      title: "Барби",
      rating: 7.0,
      year: 2023,
      genre: "Комедия",
      poster:
        "https://images.unsplash.com/photo-1478720568477-b2709d01b2da?w=300&h=400&fit=crop",
      isWatched: false,
    },
  ];

  return (
    <div className="min-h-screen bg-black pb-20">
      <Header />

      <div className="py-4 space-y-4">
        <MovieSection
          title="Рекомендовано для вас"
          movies={recommendedMovies}
        />
        <MovieSection title="Популярное сейчас" movies={popularMovies} />
        <MovieSection title="Новинки" movies={newReleases} />

        <SocialSection />
        <PlaylistSection />
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Index;
