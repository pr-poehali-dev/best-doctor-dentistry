import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background font-open-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-montserrat font-bold text-2xl text-primary">
            Лучший Доктор
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="font-montserrat font-medium">
            Записаться онлайн
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-montserrat font-bold text-5xl md:text-6xl text-foreground mb-6 leading-tight">
                Профессиональная стоматология 
                <span className="text-primary"> в Сочи</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Современная клиника в центре города, где забота о вашей улыбке становится приоритетом. 
                Передовые технологии и опытные специалисты.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="font-montserrat font-medium text-lg px-8 py-4">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться на консультацию
                </Button>
                <Button variant="outline" size="lg" className="font-montserrat font-medium text-lg px-8 py-4">
                  <Icon name="Phone" className="mr-2" size={20} />
                  8 (962) 888-67-76
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/e7dc5c75-1c42-4bf3-9bda-88013b9bdcc5.jpg" 
                alt="Современная стоматологическая клиника" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-foreground mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный комплекс стоматологических услуг с использованием передовых технологий
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow animate-fade-in border-2 hover:border-primary/20">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Wrench" size={32} className="text-primary" />
                </div>
                <CardTitle className="font-montserrat text-2xl">Лечение зубов</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed">
                  Современное лечение кариеса, пульпита и других заболеваний любой сложности. 
                  Безболезненные процедуры с гарантией качества.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-fade-in border-2 hover:border-primary/20">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Crown" size={32} className="text-primary" />
                </div>
                <CardTitle className="font-montserrat text-2xl">Протезирование</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed">
                  Профессиональное протезирование зубов: коронки, мосты, съёмные и несъёмные протезы. 
                  Восстановление функции и эстетики.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-fade-in border-2 hover:border-primary/20">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Sparkles" size={32} className="text-primary" />
                </div>
                <CardTitle className="font-montserrat text-2xl">Гигиена</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed">
                  Комплексная профессиональная чистка зубов, удаление зубного камня и налёта. 
                  Профилактика заболеваний полости рта.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-foreground mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессионализм, современные технологии и индивидуальный подход
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="/img/43662f2a-2096-42d3-a9e0-0c7912e0613c.jpg" 
                alt="Профессиональный стоматолог" 
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4 animate-fade-in">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="UserCheck" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-xl mb-2">Опытные специалисты</h3>
                  <p className="text-muted-foreground">Врачи с многолетним стажем работы и постоянным повышением квалификации</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-fade-in">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Zap" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-xl mb-2">Современное оборудование</h3>
                  <p className="text-muted-foreground">Передовые технологии для точной диагностики и комфортного лечения</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-fade-in">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Heart" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-xl mb-2">Индивидуальный подход</h3>
                  <p className="text-muted-foreground">Комфортная атмосфера и персональное внимание к каждому пациенту</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-fade-in">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="DollarSign" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-xl mb-2">Доступные цены</h3>
                  <p className="text-muted-foreground">Честные цены и гибкая система оплаты без скрытых платежей</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-foreground mb-4">
              Отзывы пациентов
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Что говорят о нас наши пациенты
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="animate-fade-in">
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

            <Card className="animate-fade-in">
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

            <Card className="animate-fade-in">
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
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-foreground mb-4">
              Гарантии качества
            </h2>
            <img 
              src="/img/4acf2c1e-de92-4067-9478-34785d12f6e5.jpg" 
              alt="Здоровая улыбка" 
              className="w-64 h-32 object-cover rounded-xl mx-auto mb-8 shadow-lg"
            />
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Settings" size={32} className="text-primary" />
              </div>
              <h3 className="font-montserrat font-semibold text-lg mb-2">Современное оборудование</h3>
              <p className="text-muted-foreground text-sm">Европейского уровня</p>
            </div>

            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-primary" />
              </div>
              <h3 className="font-montserrat font-semibold text-lg mb-2">Стерильные условия</h3>
              <p className="text-muted-foreground text-sm">Безопасность процедур</p>
            </div>

            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-primary" />
              </div>
              <h3 className="font-montserrat font-semibold text-lg mb-2">Гарантия на работы</h3>
              <p className="text-muted-foreground text-sm">На все виды услуг</p>
            </div>

            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-primary" />
              </div>
              <h3 className="font-montserrat font-semibold text-lg mb-2">Внимательный персонал</h3>
              <p className="text-muted-foreground text-sm">Комфортная обстановка</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-foreground mb-4">
              Контакты
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с нами для записи на консультацию
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 animate-fade-in">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-xl mb-2">Адрес</h3>
                  <p className="text-muted-foreground">г. Сочи, ул. Ворошиловская, 4</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-fade-in">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-xl mb-2">Телефон</h3>
                  <p className="text-muted-foreground">8 (962) 888-67-76</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-fade-in">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-xl mb-2">Режим работы</h3>
                  <p className="text-muted-foreground">Понедельник-пятница: 10:00 - 17:00</p>
                </div>
              </div>

              <div className="pt-8">
                <Card className="border-2 border-primary/20">
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
                    <p className="text-center text-sm text-muted-foreground">
                      Или позвоните нам по телефону для консультации
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="animate-fade-in">
              <div className="bg-secondary/20 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Icon name="MapPin" size={64} className="text-primary mx-auto mb-4" />
                  <h3 className="font-montserrat font-semibold text-2xl mb-2">Карта</h3>
                  <p className="text-muted-foreground">
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
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
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