import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Ателье</h1>
            <div className="hidden md:flex gap-6">
              {['home', 'portfolio', 'services', 'about', 'pricing', 'reviews', 'calculator', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-foreground/60'
                  }`}
                >
                  {section === 'home' ? 'Главная' : 
                   section === 'portfolio' ? 'Портфолио' :
                   section === 'services' ? 'Услуги' :
                   section === 'about' ? 'О нас' :
                   section === 'pricing' ? 'Прайс' :
                   section === 'reviews' ? 'Отзывы' :
                   section === 'calculator' ? 'Калькулятор' :
                   'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-accent text-accent-foreground">Индивидуальный пошив с 2015 года</Badge>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Создаём одежду вашей мечты
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Профессиональное ателье с опытными мастерами. Воплощаем ваши идеи в жизнь с любовью к деталям.
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('calculator')} className="bg-primary hover:bg-primary/90">
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('portfolio')}>
                  Наши работы
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/6c54fe3d-395b-4c2a-9e3c-fe0d231f0ffa/files/94cc297d-45e1-4460-81ae-c556a005921d.jpg" 
                alt="Интерьер ателье" 
                className="aspect-square rounded-3xl object-cover w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио</h2>
            <p className="text-muted-foreground text-lg">Наши лучшие работы</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Вечерние платья', items: '24 проекта', image: 'https://cdn.poehali.dev/projects/6c54fe3d-395b-4c2a-9e3c-fe0d231f0ffa/files/99f4e8e6-bd73-4f67-ae80-3068cf29a617.jpg' },
              { title: 'Костюмы', items: '18 проектов', image: 'https://cdn.poehali.dev/projects/6c54fe3d-395b-4c2a-9e3c-fe0d231f0ffa/files/c7a4bbe3-593b-4c2e-9c41-b67b68eb3bdb.jpg' },
              { title: 'Свадебные наряды', items: '32 проекта', image: 'https://cdn.poehali.dev/projects/6c54fe3d-395b-4c2a-9e3c-fe0d231f0ffa/files/61c38052-74b8-4c48-b64b-cfc4d0c6782c.jpg' },
              { title: 'Повседневная одежда', items: '45 проектов', color: 'from-muted to-muted/20' },
              { title: 'Детская одежда', items: '28 проектов', color: 'from-primary/15 to-accent/10' },
              { title: 'Ремонт и реставрация', items: '67 проектов', color: 'from-secondary/15 to-primary/10' },
            ].map((item, i) => (
              <Card key={i} className="group overflow-hidden hover-scale cursor-pointer">
                {item.image ? (
                  <div className="h-48 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-all group-hover:scale-105" />
                  </div>
                ) : (
                  <div className={`h-48 bg-gradient-to-br ${item.color} transition-all group-hover:scale-105`}></div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>{item.items}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Услуги</h2>
            <p className="text-muted-foreground text-lg">Полный спектр швейных работ</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: 'Scissors', title: 'Индивидуальный пошив', desc: 'Создание одежды по вашим меркам и эскизам' },
              { icon: 'Ruler', title: 'Подгонка по фигуре', desc: 'Идеальная посадка любой одежды' },
              { icon: 'Shirt', title: 'Ремонт одежды', desc: 'Профессиональный ремонт любой сложности' },
              { icon: 'Sparkles', title: 'Декорирование', desc: 'Вышивка, аппликации, украшения' },
              { icon: 'Heart', title: 'Свадебные наряды', desc: 'Создание платья мечты для особого дня' },
              { icon: 'Palette', title: 'Консультация дизайнера', desc: 'Помощь в выборе фасона и ткани' },
            ].map((service, i) => (
              <Card key={i} className="hover-scale">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Icon name={service.icon} className="text-primary" size={24} />
                    </div>
                    <div>
                      <CardTitle className="mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.desc}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">О нас</h2>
          </div>
          <Card>
            <CardContent className="p-8 md:p-12 space-y-6 text-lg leading-relaxed">
              <p>
                Наше ателье работает с 2015 года. За это время мы создали более 2000 изделий
                и помогли сотням клиентов обрести идеальный гардероб.
              </p>
              <p>
                В нашей команде работают опытные мастера с профильным образованием.
                Мы используем современное оборудование и качественные материалы.
              </p>
              <div className="grid md:grid-cols-3 gap-6 pt-6">
                {[
                  { number: '9+', label: 'лет опыта' },
                  { number: '2000+', label: 'изделий' },
                  { number: '5', label: 'мастеров' },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-6 rounded-xl bg-primary/5">
                    <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Прайс-лист</h2>
            <p className="text-muted-foreground text-lg">Базовые цены на услуги</p>
          </div>
          <Tabs defaultValue="sewing" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="sewing">Пошив</TabsTrigger>
              <TabsTrigger value="repair">Ремонт</TabsTrigger>
              <TabsTrigger value="fitting">Подгонка</TabsTrigger>
            </TabsList>
            <TabsContent value="sewing">
              <Card>
                <CardContent className="p-6">
                  {[
                    { service: 'Платье простое', price: 'от 3500 ₽' },
                    { service: 'Платье сложное', price: 'от 6000 ₽' },
                    { service: 'Брюки', price: 'от 2500 ₽' },
                    { service: 'Юбка', price: 'от 2000 ₽' },
                    { service: 'Блузка', price: 'от 2800 ₽' },
                    { service: 'Пиджак', price: 'от 4500 ₽' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between py-3 border-b last:border-0">
                      <span>{item.service}</span>
                      <span className="font-semibold text-primary">{item.price}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="repair">
              <Card>
                <CardContent className="p-6">
                  {[
                    { service: 'Замена молнии', price: 'от 400 ₽' },
                    { service: 'Ремонт подкладки', price: 'от 600 ₽' },
                    { service: 'Штопка', price: 'от 300 ₽' },
                    { service: 'Замена пуговиц', price: 'от 150 ₽' },
                    { service: 'Ремонт карманов', price: 'от 500 ₽' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between py-3 border-b last:border-0">
                      <span>{item.service}</span>
                      <span className="font-semibold text-primary">{item.price}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="fitting">
              <Card>
                <CardContent className="p-6">
                  {[
                    { service: 'Укоротить брюки', price: 'от 400 ₽' },
                    { service: 'Ушить по фигуре', price: 'от 800 ₽' },
                    { service: 'Удлинить изделие', price: 'от 700 ₽' },
                    { service: 'Расширить изделие', price: 'от 900 ₽' },
                    { service: 'Комплексная подгонка', price: 'от 1500 ₽' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between py-3 border-b last:border-0">
                      <span>{item.service}</span>
                      <span className="font-semibold text-primary">{item.price}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы</h2>
            <p className="text-muted-foreground text-lg">Что говорят наши клиенты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Анна Петрова',
                text: 'Сшили потрясающее платье для выпускного! Идеальная посадка, качественная работа. Спасибо огромное!',
                rating: 5,
              },
              {
                name: 'Мария Иванова',
                text: 'Обращаюсь в это ателье уже третий раз. Всегда довольна результатом. Мастера настоящие профессионалы.',
                rating: 5,
              },
              {
                name: 'Елена Смирнова',
                text: 'Отремонтировали любимое пальто так, что не видно следов. Быстро и качественно. Рекомендую!',
                rating: 5,
              },
            ].map((review, i) => (
              <Card key={i} className="hover-scale">
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={18} />
                    ))}
                  </div>
                  <p className="mb-4 text-muted-foreground leading-relaxed">{review.text}</p>
                  <p className="font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Calculator />

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-muted-foreground text-lg">Свяжитесь с нами удобным способом</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Наши контакты</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 1</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <Icon name="Phone" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <Icon name="Mail" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">info@atelier.ru</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <Icon name="Clock" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Режим работы</p>
                    <p className="text-muted-foreground">Пн-Пт: 10:00 - 20:00</p>
                    <p className="text-muted-foreground">Сб-Вс: 11:00 - 18:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Напишите нам</CardTitle>
                <CardDescription>Ответим в течение 24 часов</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  toast.success('Спасибо! Мы получили ваше сообщение');
                }} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea id="message" placeholder="Расскажите о вашем заказе" rows={4} required />
                  </div>
                  <Button type="submit" className="w-full">Отправить</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-muted/50 py-12 px-4 mt-20">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-bold mb-4 text-primary">Ателье</h2>
          <p className="text-muted-foreground mb-6">Создаём одежду вашей мечты с 2015 года</p>
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon">
              <Icon name="Instagram" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Facebook" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Phone" size={20} />
            </Button>
          </div>
          <Separator className="my-8" />
          <p className="text-sm text-muted-foreground">© 2024 Ателье. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

const Calculator = () => {
  const [itemType, setItemType] = useState('');
  const [complexity, setComplexity] = useState('');
  const [additionalServices, setAdditionalServices] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const basePrice: Record<string, number> = {
    'dress': 3500,
    'pants': 2500,
    'skirt': 2000,
    'blouse': 2800,
    'jacket': 4500,
    'coat': 6000,
  };

  const complexityMultiplier: Record<string, number> = {
    'simple': 1,
    'medium': 1.5,
    'complex': 2.2,
  };

  const additionalPrices: Record<string, number> = {
    'lining': 800,
    'decoration': 1200,
    'zipper': 400,
    'pockets': 600,
  };

  const calculatePrice = () => {
    if (!itemType || !complexity) {
      toast.error('Выберите тип изделия и сложность');
      return;
    }

    let price = basePrice[itemType] * complexityMultiplier[complexity];
    
    additionalServices.forEach(service => {
      price += additionalPrices[service];
    });

    setTotalPrice(Math.round(price));
    toast.success('Стоимость рассчитана!');
  };

  return (
    <section id="calculator" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Калькулятор стоимости</h2>
          <p className="text-muted-foreground text-lg">Рассчитайте предварительную стоимость заказа</p>
        </div>

        <Card>
          <CardContent className="p-8 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="item-type">Тип изделия</Label>
              <Select value={itemType} onValueChange={setItemType}>
                <SelectTrigger id="item-type">
                  <SelectValue placeholder="Выберите тип изделия" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dress">Платье</SelectItem>
                  <SelectItem value="pants">Брюки</SelectItem>
                  <SelectItem value="skirt">Юбка</SelectItem>
                  <SelectItem value="blouse">Блузка</SelectItem>
                  <SelectItem value="jacket">Пиджак</SelectItem>
                  <SelectItem value="coat">Пальто</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="complexity">Сложность работы</Label>
              <Select value={complexity} onValueChange={setComplexity}>
                <SelectTrigger id="complexity">
                  <SelectValue placeholder="Выберите сложность" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="simple">Простая (базовый крой)</SelectItem>
                  <SelectItem value="medium">Средняя (детали, отделка)</SelectItem>
                  <SelectItem value="complex">Сложная (многослойность, декор)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label>Дополнительные услуги</Label>
              <div className="space-y-3">
                {[
                  { id: 'lining', label: 'Подкладка (+800 ₽)', value: 'lining' },
                  { id: 'decoration', label: 'Декорирование (+1200 ₽)', value: 'decoration' },
                  { id: 'zipper', label: 'Потайная молния (+400 ₽)', value: 'zipper' },
                  { id: 'pockets', label: 'Дополнительные карманы (+600 ₽)', value: 'pockets' },
                ].map((service) => (
                  <div key={service.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={service.id}
                      checked={additionalServices.includes(service.value)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setAdditionalServices([...additionalServices, service.value]);
                        } else {
                          setAdditionalServices(additionalServices.filter(s => s !== service.value));
                        }
                      }}
                    />
                    <label
                      htmlFor={service.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {service.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            <Button onClick={calculatePrice} size="lg" className="w-full">
              Рассчитать стоимость
            </Button>

            {totalPrice > 0 && (
              <div className="text-center p-6 bg-primary/5 rounded-xl animate-scale-in">
                <p className="text-sm text-muted-foreground mb-2">Предварительная стоимость:</p>
                <p className="text-4xl font-bold text-primary">{totalPrice.toLocaleString()} ₽</p>
                <p className="text-xs text-muted-foreground mt-3">
                  *Окончательная цена определяется после консультации с мастером
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Index;