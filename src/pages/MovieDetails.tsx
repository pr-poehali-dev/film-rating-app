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

interface Comment {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  date: string;
  rating: number;
  text: string;
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

  // Моковые комментарии
  const comments: Comment[] = [
    {
      id: 1,
      user: {
        name: "Алексей Петров",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      },
      date: "15 декабря 2024",
      rating: 10,
      text: "Невероятный фильм! Нолан снова поразил своим видением. Каждая сцена продумана до мелочей, а игра актёров просто великолепна. Особенно впечатлили сцены в космосе - захватывает дух!",
    },
    {
      id: 2,
      user: {
        name: "Мария Иванова",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b332c88c?w=50&h=50&fit=crop&crop=face",
      },
      date: "12 декабря 2024",
      rating: 9,
      text: "Фильм заставляет задуматься о времени, семье и жертвах. Эмоциональная составляющая на высоте. Плакала в конце. Музыка Циммера - отдельное произведение искусства.",
    },
    {
      id: 3,
      user: {
        name: "Дмитрий Козлов",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
      },
      date: "10 декабря 2024",
      rating: 8,
      text: "Визуально потрясающий фильм с глубоким сюжетом. Хотя местами сложновато для понимания, но это только добавляет интереса. МакКонахи в своей лучшей роли.",
    },
    {
      id: 4,
      user: {
        name: "Елена Смирнова",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
      },
      date: "8 декабря 2024",
      rating: 9,
      text: "Один из лучших научно-фантастических фильмов! Сочетание научной точности и эмоциональной глубины просто невероятное. Обязательно к просмотру в кинотеатре.",
    },
  ];

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

        {/* Licensing & Rights */}
        <Card className="bg-gray-900 border-gray-800 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Icon name="Shield" size={20} />
              Лицензии и права
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Distribution Rights */}
              <div>
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <Icon name="Globe" size={16} />
                  Права на распространение
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-gray-800 p-3 rounded-lg">
                    <strong className="text-blue-400">Theatrical:</strong>
                    <p className="text-gray-300">
                      Paramount Pictures Worldwide
                    </p>
                  </div>
                  <div className="bg-gray-800 p-3 rounded-lg">
                    <strong className="text-blue-400">Streaming:</strong>
                    <p className="text-gray-300">
                      Netflix, Amazon Prime (лицензия до 2025)
                    </p>
                  </div>
                  <div className="bg-gray-800 p-3 rounded-lg">
                    <strong className="text-blue-400">DVD/Blu-ray:</strong>
                    <p className="text-gray-300">
                      Warner Bros. Home Entertainment
                    </p>
                  </div>
                  <div className="bg-gray-800 p-3 rounded-lg">
                    <strong className="text-blue-400">TV Rights:</strong>
                    <p className="text-gray-300">HBO, Showtime (США)</p>
                  </div>
                </div>
              </div>

              {/* Regional Availability */}
              <div>
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <Icon name="Map" size={16} />
                  Региональная доступность
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                  <div className="bg-green-900/30 border border-green-700 p-2 rounded text-center">
                    <p className="text-green-400 font-medium">США</p>
                    <p className="text-gray-300 text-xs">Полные права</p>
                  </div>
                  <div className="bg-green-900/30 border border-green-700 p-2 rounded text-center">
                    <p className="text-green-400 font-medium">Европа</p>
                    <p className="text-gray-300 text-xs">Полные права</p>
                  </div>
                  <div className="bg-yellow-900/30 border border-yellow-700 p-2 rounded text-center">
                    <p className="text-yellow-400 font-medium">Азия</p>
                    <p className="text-gray-300 text-xs">Ограниченно</p>
                  </div>
                  <div className="bg-red-900/30 border border-red-700 p-2 rounded text-center">
                    <p className="text-red-400 font-medium">Китай</p>
                    <p className="text-gray-300 text-xs">Запрещён</p>
                  </div>
                </div>
              </div>

              {/* Talent Rights */}
              <div>
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <Icon name="Users" size={16} />
                  Права участников
                </h4>
                <div className="space-y-3">
                  {/* Actor Rights */}
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h5 className="text-blue-400 font-medium mb-2">Актёры</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <strong>Мэттью МакКонахи:</strong>
                        <p className="text-gray-400">
                          © CAA Talent Agency | Гонорар + % с проката
                        </p>
                      </div>
                      <div>
                        <strong>Энн Хэтэуэй:</strong>
                        <p className="text-gray-400">
                          © WME Entertainment | Фиксированный гонорар
                        </p>
                      </div>
                      <div>
                        <strong>Джессика Честейн:</strong>
                        <p className="text-gray-400">
                          © United Talent Agency | Гонорар + бонус
                        </p>
                      </div>
                      <div>
                        <strong>Майкл Кейн:</strong>
                        <p className="text-gray-400">
                          © ICM Partners | Фиксированный гонорар
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Director & Producer Rights */}
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h5 className="text-blue-400 font-medium mb-2">
                      Режиссёр и продюсеры
                    </h5>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>Кристофер Нолан (Режиссёр):</strong>
                        <p className="text-gray-400">
                          © Syncopy Inc. | Авторские права + % с проката +
                          контроль монтажа
                        </p>
                      </div>
                      <div>
                        <strong>Эмма Томас (Продюсер):</strong>
                        <p className="text-gray-400">
                          © Syncopy Inc. | Продюсерский гонорар + % с прибыли
                        </p>
                      </div>
                      <div>
                        <strong>Lynda Obst (Продюсер):</strong>
                        <p className="text-gray-400">
                          © Lynda Obst Productions | Продюсерский гонорар
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Copyright Info */}
              <div>
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <Icon name="Copyright" size={16} />
                  Авторские права
                </h4>
                <div className="bg-gray-800 p-4 rounded-lg text-sm">
                  <div className="space-y-2">
                    <p>
                      <strong className="text-blue-400">
                        © 2014 Paramount Pictures Corporation.
                      </strong>{" "}
                      Все права защищены.
                    </p>
                    <p>
                      <strong>Студия:</strong> Legendary Entertainment, Syncopy
                    </p>
                    <p>
                      <strong>Дистрибьютор:</strong> Paramount Pictures, Warner
                      Bros. Pictures
                    </p>
                    <p>
                      <strong>Музыка:</strong> © Hans Zimmer, Remote Control
                      Productions
                    </p>
                    <p>
                      <strong>Сценарий:</strong> © Jonathan Nolan, Christopher
                      Nolan
                    </p>
                    <p className="text-gray-500 text-xs mt-3">
                      Все торговые марки, логотипы и изображения являются
                      собственностью соответствующих правообладателей.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comments Section */}
        <Card className="bg-gray-900 border-gray-800 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Icon name="MessageCircle" size={20} />
              Комментарии ({comments.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className="border-b border-gray-800 pb-6 last:border-b-0"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={comment.user.avatar}
                      alt={comment.user.name}
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-white">
                          {comment.user.name}
                        </h4>
                        <div className="flex items-center gap-1">
                          <Icon
                            name="Star"
                            size={16}
                            className="text-yellow-400 fill-current"
                          />
                          <span className="text-yellow-400 font-medium">
                            {comment.rating}
                          </span>
                        </div>
                        <span className="text-gray-500 text-sm">
                          {comment.date}
                        </span>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {comment.text}
                      </p>
                    </div>
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
