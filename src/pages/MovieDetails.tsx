import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface CastMember {
  id: number;
  name: string;
  character: string;
  photo: string;
}

interface CrewMember {
  id: number;
  name: string;
  role: string;
  photo: string;
}

const MovieDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userRating, setUserRating] = useState(0);
  const [review, setReview] = useState("");
  const [hoverRating, setHoverRating] = useState(0);

  // Моковые данные фильма
  const movie = {
    id: id || "1",
    title: "Интерстеллар",
    originalTitle: "Interstellar",
    year: 2014,
    duration: "169 мин",
    genre: "Фантастика, Драма",
    rating: 8.9,
    poster:
      "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=300&h=450&fit=crop",
    backdrop:
      "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=400&fit=crop",
    synopsis:
      "В недалёком будущем Земля оказывается на грани экологической катастрофы из-за климатических изменений. Бывший инженер и пилот Купер вынужден стать фермером, чтобы прокормить семью. Когда он случайно обнаруживает секретную базу NASA, ему предлагают стать частью миссии по поиску новой планеты для человечества.",
    director: "Кристофер Нолан",
    country: "США, Великобритания",
    budget: "$165 млн",
  };

  const cast: CastMember[] = [
    {
      id: 1,
      name: "Мэттью МакКонахи",
      character: "Купер",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    },
    {
      id: 2,
      name: "Энн Хэтэуэй",
      character: "Амелия Брэнд",
      photo:
        "https://images.unsplash.com/photo-1494790108755-2616b332c88c?w=150&h=150&fit=crop",
    },
    {
      id: 3,
      name: "Джессика Честейн",
      character: "Мерф",
      photo:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    },
    {
      id: 4,
      name: "Майкл Кейн",
      character: "Профессор Брэнд",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    },
  ];

  const crew: CrewMember[] = [
    {
      id: 1,
      name: "Кристофер Нолан",
      role: "Режиссёр",
      photo:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop",
    },
    {
      id: 2,
      name: "Эмма Томас",
      role: "Продюсер",
      photo:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
    },
    {
      id: 3,
      name: "Ли Смит",
      role: "Монтажёр",
      photo:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
    },
  ];

  const handleRating = (rating: number) => {
    setUserRating(rating);
  };

  const handleSubmitReview = () => {
    if (userRating === 0) {
      alert("Поставьте оценку фильму");
      return;
    }
    console.log("Отзыв отправлен:", { rating: userRating, review });
    alert("Спасибо за ваш отзыв!");
    setReview("");
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="relative">
        <img
          src={movie.backdrop}
          alt={movie.title}
          className="w-full h-64 object-cover opacity-30"
        />
        <div className="absolute top-4 left-4">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="text-white hover:bg-white/20"
          >
            <Icon name="ArrowLeft" size={20} />
            Назад
          </Button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-32 relative z-10">
        {/* Main Info */}
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="flex-shrink-0">
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-64 h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
            <p className="text-gray-400 text-lg mb-4">{movie.originalTitle}</p>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                <Icon
                  name="Star"
                  size={20}
                  className="text-yellow-400 fill-current"
                />
                <span className="text-xl font-semibold">{movie.rating}</span>
              </div>
              <span className="text-gray-400">{movie.year}</span>
              <span className="text-gray-400">{movie.duration}</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {movie.genre.split(", ").map((g, index) => (
                <span
                  key={index}
                  className="bg-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {g}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Режиссёр:</strong> {movie.director}
              </div>
              <div>
                <strong>Страна:</strong> {movie.country}
              </div>
              <div>
                <strong>Бюджет:</strong> {movie.budget}
              </div>
            </div>
          </div>
        </div>

        {/* Synopsis */}
        <Card className="bg-gray-900 border-gray-800 mb-8">
          <CardHeader>
            <CardTitle className="text-white">Сюжет</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 leading-relaxed">{movie.synopsis}</p>
          </CardContent>
        </Card>

        {/* Rating Section */}
        <Card className="bg-gray-900 border-gray-800 mb-8">
          <CardHeader>
            <CardTitle className="text-white">Оценить фильм</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="text-2xl transition-colors"
                  >
                    <Icon
                      name="Star"
                      size={24}
                      className={
                        star <= (hoverRating || userRating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-600"
                      }
                    />
                  </button>
                ))}
                {userRating > 0 && (
                  <span className="ml-2 text-lg font-semibold">
                    {userRating}/10
                  </span>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Ваш отзыв
              </label>
              <Textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Поделитесь своими впечатлениями о фильме..."
                className="bg-gray-800 border-gray-700 text-white min-h-[120px]"
              />
            </div>

            <Button
              onClick={handleSubmitReview}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Icon name="Send" size={16} />
              Отправить отзыв
            </Button>
          </CardContent>
        </Card>

        {/* Cast */}
        <Card className="bg-gray-900 border-gray-800 mb-8">
          <CardHeader>
            <CardTitle className="text-white">Актёрский состав</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {cast.map((actor) => (
                <div key={actor.id} className="text-center">
                  <img
                    src={actor.photo}
                    alt={actor.name}
                    className="w-20 h-20 rounded-full mx-auto mb-2 object-cover"
                  />
                  <h4 className="font-medium text-sm">{actor.name}</h4>
                  <p className="text-gray-400 text-xs">{actor.character}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Crew */}
        <Card className="bg-gray-900 border-gray-800 mb-8">
          <CardHeader>
            <CardTitle className="text-white">Съёмочная группа</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {crew.map((member) => (
                <div key={member.id} className="flex items-center gap-3">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium">{member.name}</h4>
                    <p className="text-gray-400 text-sm">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MovieDetails;
