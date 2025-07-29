import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-slate-50 font-open-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-blue-100 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="font-montserrat font-bold text-xl sm:text-2xl text-primary">
            Лучший Доктор
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-slate-700 hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="text-slate-700 hover:text-primary transition-colors">Услуги</a>
            <a href="#reviews" className="text-slate-700 hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-slate-700 hover:text-primary transition-colors">Контакты</a>
          </div>
          
          <Button className="hidden sm:block font-montserrat font-medium">
            Записаться онлайн
          </Button>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} className="text-slate-700" />
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-blue-100 shadow-lg">
            <div className="px-4 py-2 space-y-1">
              <a href="#home" className="block py-3 text-slate-700 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Главная</a>
              <a href="#services" className="block py-3 text-slate-700 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Услуги</a>
              <a href="#reviews" className="block py-3 text-slate-700 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Отзывы</a>
              <a href="#contacts" className="block py-3 text-slate-700 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Контакты</a>
              <div className="py-2">
                <Button className="w-full font-montserrat font-medium">
                  Записаться онлайн
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-800 mb-6 leading-tight">
                Профессиональная стоматология 
                <span className="text-primary"> в Сочи</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
                Современная клиника в центре города, где забота о вашей улыбке становится приоритетом. 
                Передовые технологии и опытные специалисты.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="font-montserrat font-medium text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  <span className="hidden sm:inline">Записаться на консультацию</span>
                  <span className="sm:hidden">Записаться</span>
                </Button>
                <Button variant="secondary" size="lg" className="font-montserrat font-medium text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                  <Icon name="Phone" className="mr-2" size={20} />
                  8 (962) 888-67-76
                </Button>
              </div>
            </div>
            <div className="animate-scale-in mt-8 lg:mt-0">
              <img 
                src="/img/e7dc5c75-1c42-4bf3-9bda-88013b9bdcc5.jpg" 
                alt="Современная стоматологическая клиника" 
                className="rounded-2xl shadow-2xl w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-slate-800 mb-4">
              Наши услуги
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto px-4">
              Полный комплекс стоматологических услуг с использованием передовых технологий
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 animate-fade-in bg-white border border-blue-100 border-2 hover:border-blue-200">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Wrench" size={24} className="text-primary" />
                </div>
                <CardTitle className="font-montserrat text-xl sm:text-2xl">Лечение зубов</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-sm sm:text-base leading-relaxed">
                  Современное лечение кариеса, пульпита и других заболеваний любой сложности. 
                  Безболезненные процедуры с гарантией качества.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 animate-fade-in bg-white border border-blue-100 border-2 hover:border-blue-200">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Crown" size={24} className="text-primary" />
                </div>
                <CardTitle className="font-montserrat text-xl sm:text-2xl">Протезирование</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-sm sm:text-base leading-relaxed">
                  Профессиональное протезирование зубов: коронки, мосты, съёмные и несъёмные протезы. 
                  Восстановление функции и эстетики.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 animate-fade-in bg-white border border-blue-100 border-2 hover:border-blue-200">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Sparkles" size={24} className="text-primary" />
                </div>
                <CardTitle className="font-montserrat text-xl sm:text-2xl">Гигиена</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-sm sm:text-base leading-relaxed">
                  Комплексная профессиональная чистка зубов, удаление зубного камня и налёта. 
                  Профилактика заболеваний полости рта.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-slate-800 mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto px-4">
              Профессионализм, современные технологии и индивидуальный подход
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-fade-in bg-white border border-blue-100 hover:shadow-lg transition-shadow">
              <img 
                src="/img/43662f2a-2096-42d3-a9e0-0c7912e0613c.jpg" 
                alt="Профессиональный стоматолог" 
                className="rounded-2xl shadow-xl w-full h-[250px] sm:h-[350px] lg:h-[400px] object-cover"
              />
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4 animate-fade-in bg-white border border-blue-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="UserCheck" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-lg sm:text-xl mb-2">Опытные специалисты</h3>
                  <p className="text-sm sm:text-base text-slate-600">Врачи с многолетним стажем работы и постоянным повышением квалификации</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-fade-in bg-white border border-blue-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Zap" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-lg sm:text-xl mb-2">Современное оборудование</h3>
                  <p className="text-sm sm:text-base text-slate-600">Передовые технологии для точной диагностики и комфортного лечения</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-fade-in bg-white border border-blue-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Heart" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-lg sm:text-xl mb-2">Индивидуальный подход</h3>
                  <p className="text-sm sm:text-base text-slate-600">Комфортная атмосфера и персональное внимание к каждому пациенту</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-fade-in bg-white border border-blue-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="DollarSign" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-lg sm:text-xl mb-2">Доступные цены</h3>
                  <p className="text-sm sm:text-base text-slate-600">Честные цены и гибкая система оплаты без скрытых платежей</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-slate-800 mb-4">
              Отзывы пациентов
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto px-4">
              Что говорят о нас наши пациенты
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="animate-fade-in bg-white border border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <CardTitle className="font-montserrat">Анна Петрова</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  "Отличная клиника! Врачи профессионалы своего дела. Лечение прошло комфортно и безболезненно. 
                  Современное оборудование и приятная атмосфера. Рекомендую!"
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="animate-fade-in bg-white border border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <CardTitle className="font-montserrat">Михаил Иванов</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  "Делал протезирование. Результат превзошёл все ожидания! Зубы выглядят естественно, 
                  функция полностью восстановлена. Спасибо команде за профессионализм."
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="animate-fade-in bg-white border border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <CardTitle className="font-montserrat">Елена Сидорова</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  "Хожу сюда уже 2 года. Всегда качественное лечение, внимательное отношение персонала. 
                  Цены адекватные, никаких неожиданных доплат. Моя семейная стоматология!"
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-slate-800 mb-4">
              Гарантии качества
            </h2>
            <img 
              src="/img/4acf2c1e-de92-4067-9478-34785d12f6e5.jpg" 
              alt="Здоровая улыбка" 
              className="w-64 h-32 object-cover rounded-xl mx-auto mb-8 shadow-lg"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center animate-fade-in bg-white border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Settings" size={32} className="text-primary" />
              </div>
              <h3 className="font-montserrat font-semibold text-base sm:text-lg mb-2">Современное оборудование</h3>
              <p className="text-slate-600 text-xs sm:text-sm">Европейского уровня</p>
            </div>

            <div className="text-center animate-fade-in bg-white border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-primary" />
              </div>
              <h3 className="font-montserrat font-semibold text-lg mb-2">Стерильные условия</h3>
              <p className="text-slate-600 text-sm">Безопасность процедур</p>
            </div>

            <div className="text-center animate-fade-in bg-white border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-primary" />
              </div>
              <h3 className="font-montserrat font-semibold text-lg mb-2">Гарантия на работы</h3>
              <p className="text-slate-600 text-sm">На все виды услуг</p>
            </div>

            <div className="text-center animate-fade-in bg-white border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-primary" />
              </div>
              <h3 className="font-montserrat font-semibold text-lg mb-2">Внимательный персонал</h3>
              <p className="text-slate-600 text-sm">Комфортная обстановка</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-slate-800 mb-4">
              Контакты
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto px-4">
              Свяжитесь с нами для записи на консультацию
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start space-x-4 animate-fade-in bg-white border border-blue-100 hover:shadow-lg transition-shadow p-4 rounded-lg">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-lg sm:text-xl mb-2">Адрес</h3>
                  <p className="text-sm sm:text-base text-slate-600">г. Сочи, ул. Ворошиловская, 4</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-fade-in bg-white border border-blue-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-xl mb-2">Телефон</h3>
                  <p className="text-slate-600">8 (962) 888-67-76</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-fade-in bg-white border border-blue-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-xl mb-2">Режим работы</h3>
                  <p className="text-slate-600">Понедельник-пятница: 10:00 - 17:00</p>
                </div>
              </div>

              <div className="pt-8">
                <Card className="border-2 border-blue-200 bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="font-montserrat text-2xl text-center">Онлайн запись</CardTitle>
                    <CardDescription className="text-center">
                      Запишитесь на консультацию прямо сейчас
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full font-montserrat font-medium text-lg py-3">
                      <Icon name="Calendar" className="mr-2" size={20} />
                      Записаться на приём
                    </Button>
                    <p className="text-center text-sm text-slate-600">
                      Или позвоните нам по телефону для консультации
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="animate-fade-in bg-white border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 h-96 flex items-center justify-center shadow-inner">
                <div className="text-center">
                  <Icon name="MapPin" size={64} className="text-primary mx-auto mb-4" />
                  <h3 className="font-montserrat font-semibold text-2xl mb-2">Карта</h3>
                  <p className="text-slate-600">
                    Мы находимся в центре Сочи<br />
                    на улице Ворошиловская, 4
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h3 className="font-montserrat font-bold text-3xl mb-4">Лучший Доктор</h3>
            <p className="text-lg mb-6">
              Доверьте здоровье своих зубов профессионалам!
            </p>
            <p className="text-primary/80">
              © 2024 Стоматология "Лучший Доктор". Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}