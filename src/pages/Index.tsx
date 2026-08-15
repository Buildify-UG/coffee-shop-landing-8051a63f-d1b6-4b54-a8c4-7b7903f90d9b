import { Coffee, Clock, MapPin, Phone, Mail, Star, Facebook, Instagram, Twitter, Linkedin, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

const Index = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };
  const menuItems = [
    { category: 'Espresso', items: [
      { name: 'Espresso', price: '$2.50' },
      { name: 'Americano', price: '$3.00' },
      { name: 'Cappuccino', price: '$4.50' },
      { name: 'Latte', price: '$4.50' },
    ]},
    { category: 'Specialty', items: [
      { name: 'Macchiato', price: '$4.00' },
      { name: 'Flat White', price: '$4.75' },
      { name: 'Mocha', price: '$5.00' },
      { name: 'Caramel Macchiato', price: '$5.25' },
    ]},
    { category: 'Cold Drinks', items: [
      { name: 'Iced Coffee', price: '$3.50' },
      { name: 'Cold Brew', price: '$3.75' },
      { name: 'Iced Latte', price: '$4.75' },
      { name: 'Frappuccino', price: '$5.50' },
    ]},
  ];

  const hours = [
    { day: 'Monday - Friday', time: '6:00 AM - 8:00 PM' },
    { day: 'Saturday', time: '7:00 AM - 9:00 PM' },
    { day: 'Sunday', time: '8:00 AM - 7:00 PM' },
  ];

  const testimonials = [
    { name: 'Sarah Johnson', role: 'Regular Customer', text: 'The best coffee in town! The atmosphere is cozy and the baristas are incredibly skilled. I\'ve been coming here for 2 years.' },
    { name: 'Mike Chen', role: 'Remote Worker', text: 'Perfect spot to work. Great WiFi, comfortable seating, and amazing coffee keeps me productive all day.' },
    { name: 'Emma Davis', role: 'Coffee Enthusiast', text: 'Their single-origin beans are exceptional. Every cup is a journey. Highly recommend the Ethiopian blend!' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="bg-card border-b border-border sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Coffee className="w-6 h-6 text-primary" />
            <span className="text-lg font-bold text-foreground">Brew Haven</span>
          </div>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-muted hover:bg-accent transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-foreground" />
            ) : (
              <Moon className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>
      </nav>

      {/* Header/Hero */}
      <header 
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1495474472645-4d71bcdd2085?w=1920&h=800&fit=crop)',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white">
          <div className="flex items-center justify-center mb-4">
            <Coffee className="w-12 h-12" />
          </div>
          <h1 className="text-5xl font-bold mb-2">Brew Haven</h1>
          <p className="text-xl opacity-90">Artisan Coffee & Cozy Vibes</p>
        </div>
      </header>

      {/* Quick Info Bar */}
      <div className="bg-primary text-primary-foreground py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>123 Coffee Street, Brew City</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <span>(555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <span>hello@brewhaven.com</span>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Our Menu</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {menuItems.map((section) => (
              <div key={section.category} className="bg-card rounded-lg p-8 border border-border">
                <h3 className="text-2xl font-bold mb-6 text-primary">{section.category}</h3>
                <div className="space-y-4">
                  {section.items.map((item) => (
                    <div key={item.name} className="flex justify-between items-center pb-3 border-b border-border">
                      <span className="text-foreground font-medium">{item.name}</span>
                      <span className="text-primary font-semibold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Hours of Operation</h2>
          <div className="bg-card rounded-lg shadow-lg p-8 max-w-2xl mx-auto border border-border">
            <div className="space-y-6">
              {hours.map((schedule) => (
                <div key={schedule.day} className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-semibold text-foreground text-lg">{schedule.day}</p>
                    <p className="text-muted-foreground">{schedule.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Visit Us</h3>
                  <p className="text-muted-foreground">123 Coffee Street<br />Brew City, BC 12345</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                  <p className="text-muted-foreground">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                  <p className="text-muted-foreground">hello@brewhaven.com</p>
                </div>
              </div>
            </div>

            {/* Quick Message */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <Star className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Freshly roasted beans daily</span>
                </li>
                <li className="flex gap-2">
                  <Star className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Expert baristas crafting every cup</span>
                </li>
                <li className="flex gap-2">
                  <Star className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Cozy atmosphere perfect for work or relaxation</span>
                </li>
                <li className="flex gap-2">
                  <Star className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Free WiFi and plenty of seating</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-card rounded-lg p-8 border border-border shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-2">&copy; 2024 Brew Haven. All rights reserved.</p>
          <p className="text-secondary-foreground/80">Crafted with ❤️ for coffee lovers</p>
          
          {/* Social Media Links */}
          <div className="flex gap-4 justify-center mt-6">
            <a href="#" className="bg-primary hover:bg-primary/90 p-3 rounded-full transition-colors">
              <Facebook className="w-5 h-5 text-primary-foreground" />
            </a>
            <a href="#" className="bg-primary hover:bg-primary/90 p-3 rounded-full transition-colors">
              <Instagram className="w-5 h-5 text-primary-foreground" />
            </a>
            <a href="#" className="bg-primary hover:bg-primary/90 p-3 rounded-full transition-colors">
              <Twitter className="w-5 h-5 text-primary-foreground" />
            </a>
            <a href="#" className="bg-primary hover:bg-primary/90 p-3 rounded-full transition-colors">
              <Linkedin className="w-5 h-5 text-primary-foreground" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
