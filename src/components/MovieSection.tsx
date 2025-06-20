import React from "react";
import MovieCard from "./MovieCard";

interface Movie {
  id: number;
  title: string;
  rating: number;
  year: number;
  genre: string;
  poster: string;
  isWatched?: boolean;
}

interface MovieSectionProps {
  title: string;
  movies: Movie[];
}

const MovieSection: React.FC<MovieSectionProps> = ({ title, movies }) => {
  return (
    <div className="mb-6">
      <h2 className="text-white text-lg font-semibold mb-3 px-4">{title}</h2>
      <div className="flex space-x-3 overflow-x-auto pb-2 px-4">
        {movies.map((movie) => (
          <div key={movie.id} className="flex-shrink-0 w-32">
            <MovieCard {...movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSection;
