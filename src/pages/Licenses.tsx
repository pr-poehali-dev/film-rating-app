import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import BottomNavigation from "@/components/BottomNavigation";

interface Platform {
  id: number;
  name: string;
  logo: string;
  isLegal: boolean;
  subscription: boolean;
  price?: string;
  description: string;
}

const platforms: Platform[] = [
  {
    id: 1,
    name: "Netflix",
    logo: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=60&h=60&fit=crop",
    isLegal: true,
    subscription: true,
    price: "₽799/мес",
    description: "Крупнейший стриминговый сервис с лицензионным контентом",
  },
  {
    id: 2,
    name: "Кинопоиск HD",
    logo: "https://images.unsplash.com/photo-1489599797957-2f4a16ba4fe3?w=60&h=60&fit=crop",
    isLegal: true,
    subscription: true,
    price: "₽399/мес",
    description: "Российский сервис с большой коллекцией фильмов и сериалов",
  },
  {
    id: 3,
    name: "Premier",
    logo: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=60&h=60&fit=crop",
    isLegal: true,
    subscription: true,
    price: "₽199/мес",
    description: "Отечественный контент и зарубежные новинки",
  },
];

const legalInfo = [
  {
    title: "Что такое лицензионный контент?",
    content:
      "Это фильмы и сериалы, права на показ которых официально приобретены платформой у правообладателей.",
  },
  {
    title: "Почему важно смотреть легально?",
    content:
      "Поддержка создателей контента, качественное изображение и звук, отсутствие рисков для устройства.",
  },
  {
    title: "Как проверить легальность платформы?",
    content:
      "Официальная регистрация, наличие лицензий, прозрачная подписочная модель, техподдержка.",
  },
];

const Licenses: React.FC = () => {
  const [activeTab, setActiveTab] = useState("platforms");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPlatforms = platforms.filter((platform) =>
    platform.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-black/90 backdrop-blur-md border-b border-gray-800 z-10">
        <div className="p-4">
          <div className="flex items-center mb-4">
            <Icon name="Shield" size={28} className="text-green-400 mr-3" />
            <div>
              <h1 className="text-2xl font-bold">Лицензии</h1>
              <p className="text-gray-400 text-sm">Легальный просмотр кино</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-800/50 backdrop-blur-sm mb-6">
            <TabsTrigger value="platforms" className="text-sm">
              <Icon name="Tv" size={16} className="mr-1" />
              Платформы
            </TabsTrigger>
            <TabsTrigger value="check" className="text-sm">
              <Icon name="Search" size={16} className="mr-1" />
              Проверка
            </TabsTrigger>
            <TabsTrigger value="info" className="text-sm">
              <Icon name="Info" size={16} className="mr-1" />
              Инфо
            </TabsTrigger>
          </TabsList>

          <TabsContent value="platforms" className="space-y-4">
            <h2 className="text-xl font-semibold text-green-400 mb-4">
              Легальные платформы
            </h2>

            <div className="space-y-4">
              {platforms.map((platform) => (
                <Card key={platform.id} className="bg-gray-900 border-gray-800">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <img
                        src={platform.logo}
                        alt={platform.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-white font-semibold">
                            {platform.name}
                          </h3>
                          <Badge className="bg-green-600 text-white">
                            Легально
                          </Badge>
                        </div>
                        <p className="text-gray-400 text-sm mb-2">
                          {platform.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-purple-400 font-medium">
                            {platform.price}
                          </span>
                          <Button
                            size="sm"
                            className="bg-green-600 hover:bg-green-700"
                          >
                            Перейти
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="check" className="space-y-4">
            <h2 className="text-xl font-semibold text-blue-400 mb-4">
              Проверка платформы
            </h2>

            <div className="relative mb-6">
              <Icon
                name="Search"
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <Input
                placeholder="Введите название сайта..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
            </div>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-green-400"
                  />
                  Признаки легальной платформы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span className="text-gray-300">Официальная регистрация</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span className="text-gray-300">Подписочная модель</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span className="text-gray-300">Техническая поддержка</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span className="text-gray-300">Высокое качество видео</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Icon
                    name="AlertTriangle"
                    size={20}
                    className="text-red-400"
                  />
                  Признаки пиратства
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="X" size={16} className="text-red-400" />
                  <span className="text-gray-300">
                    Бесплатный новый контент
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="X" size={16} className="text-red-400" />
                  <span className="text-gray-300">Множество рекламы</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="X" size={16} className="text-red-400" />
                  <span className="text-gray-300">Подозрительные домены</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="info" className="space-y-4">
            <h2 className="text-xl font-semibold text-purple-400 mb-4">
              Правовая информация
            </h2>

            <div className="space-y-4">
              {legalInfo.map((item, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{item.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Licenses;
