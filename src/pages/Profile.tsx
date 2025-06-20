import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState("ratings");

  // Mock data
  const userStats = {
    totalRatings: 142,
    totalReviews: 23,
    totalFavorites: 18,
    averageRating: 4.2,
  };

  const mockRatings = [
    {
      id: 1,
      movie: "Inception",
      rating: 5,
      poster:
        "https://images.unsplash.com/photo-1489599804919-51b21acb5ca9?w=200&h=300&fit=crop",
    },
    {
      id: 2,
      movie: "The Matrix",
      rating: 4,
      poster:
        "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=200&h=300&fit=crop",
    },
    {
      id: 3,
      movie: "Interstellar",
      rating: 5,
      poster:
        "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=200&h=300&fit=crop",
    },
  ];

  const mockReviews = [
    {
      id: 1,
      movie: "Dune",
      rating: 4,
      review: "Потрясающая визуализация и саундтрек...",
      date: "2 дня назад",
    },
    {
      id: 2,
      movie: "Spider-Man",
      rating: 3,
      review: "Хороший фильм для семейного просмотра...",
      date: "1 неделя назад",
    },
  ];

  const mockFavorites = [
    {
      id: 1,
      movie: "Pulp Fiction",
      genre: "Криминал",
      poster:
        "https://images.unsplash.com/photo-1512070679279-8988d32161be?w=200&h=300&fit=crop",
    },
    {
      id: 2,
      movie: "The Godfather",
      genre: "Драма",
      poster:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=300&fit=crop",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={
          i < rating ? "text-yellow-500 fill-current" : "text-gray-600"
        }
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white pb-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-purple-900/20 to-transparent p-6">
        <div className="flex items-center space-x-4 mb-6">
          <Avatar className="w-20 h-20 border-2 border-purple-400">
            <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face" />
            <AvatarFallback>АВ</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Александр Волков</h1>
            <p className="text-gray-400">Киноман с 2019 года</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">
              {userStats.totalRatings}
            </div>
            <div className="text-sm text-gray-400">Оценок</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">
              {userStats.totalReviews}
            </div>
            <div className="text-sm text-gray-400">Отзывов</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-pink-400">
              {userStats.totalFavorites}
            </div>
            <div className="text-sm text-gray-400">Избранных</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="px-4">
        <TabsList className="grid w-full grid-cols-3 bg-gray-900 mb-6">
          <TabsTrigger value="ratings" className="text-sm">
            Оценки
          </TabsTrigger>
          <TabsTrigger value="reviews" className="text-sm">
            Отзывы
          </TabsTrigger>
          <TabsTrigger value="favorites" className="text-sm">
            Избранное
          </TabsTrigger>
        </TabsList>

        {/* Ratings Tab */}
        <TabsContent value="ratings" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Мои оценки</h2>
            <Badge variant="secondary">{userStats.totalRatings}</Badge>
          </div>
          <div className="grid gap-4">
            {mockRatings.map((item) => (
              <Card key={item.id} className="bg-gray-900 border-gray-800">
                <CardContent className="flex items-center space-x-4 p-4">
                  <img
                    src={item.poster}
                    alt={item.movie}
                    className="w-16 h-24 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">{item.movie}</h3>
                    <div className="flex items-center space-x-1 mt-2">
                      {renderStars(item.rating)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Reviews Tab */}
        <TabsContent value="reviews" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Мои отзывы</h2>
            <Badge variant="secondary">{userStats.totalReviews}</Badge>
          </div>
          <div className="grid gap-4">
            {mockReviews.map((review) => (
              <Card key={review.id} className="bg-gray-900 border-gray-800">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg text-white">
                      {review.movie}
                    </CardTitle>
                    <div className="flex items-center space-x-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-300 mb-3">{review.review}</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Favorites Tab */}
        <TabsContent value="favorites" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Избранное</h2>
            <Badge variant="secondary">{userStats.totalFavorites}</Badge>
          </div>
          <div className="grid gap-4">
            {mockFavorites.map((favorite) => (
              <Card key={favorite.id} className="bg-gray-900 border-gray-800">
                <CardContent className="flex items-center space-x-4 p-4">
                  <img
                    src={favorite.poster}
                    alt={favorite.movie}
                    className="w-16 h-24 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">
                      {favorite.movie}
                    </h3>
                    <Badge
                      variant="outline"
                      className="mt-2 text-purple-400 border-purple-400"
                    >
                      {favorite.genre}
                    </Badge>
                  </div>
                  <Icon
                    name="Heart"
                    size={20}
                    className="text-pink-500 fill-current"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;
