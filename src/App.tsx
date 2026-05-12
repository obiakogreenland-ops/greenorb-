import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  Bot, 
  User, 
  Rocket, 
  Globe, 
  Smartphone, 
  Zap, 
  MessageSquare, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  Clock, 
  Calendar, 
  Wallet, 
  ChevronRight, 
  Copy, 
  Check, 
  Menu, 
  X,
  HelpCircle,
  Hotel,
  Scissors,
  Stethoscope,
  GraduationCap,
  Home,
  Utensils,
  Search,
  Paintbrush,
  Infinity,
  ArrowRight,
  Instagram
} from 'lucide-react';
import { generateBotResponse } from './lib/ai';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Outreach', href: '#outreach' },
    { name: 'AI Demo', href: '#chatbot' },
    { name: 'Help', href: '#help' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-1000 transition-all duration-300 ${scrolled ? 'bg-dark/95 backdrop-blur-xl border-b border-primary/10' : 'bg-dark/80 backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 text-2xl font-extrabold gradient-text">
          <Bot size={32} className="text-primary" />
          GreenOrb Agency
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-gray-text font-medium hover:text-light transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-primary to-secondary transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-light" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Links */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-dark border-b border-primary/10 overflow-hidden"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-text font-medium block py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(99,102,241,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      </div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-1">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-pulse">
            <Zap size={16} /> AI-Powered Business Solutions
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Transform Your Business With <span className="gradient-text">AI Automation</span>
          </h1>
          <p className="text-xl text-gray-text mb-8 max-w-lg leading-relaxed">
            We help Nigerian businesses get modern AI-powered websites with WhatsApp booking and automatic customer replies in 48 hours. No coding needed.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#services" className="bg-linear-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:scale-105 transition-transform">
              <Rocket size={20} /> Start Your Project
            </a>
            <a href="#portfolio" className="bg-light/5 border border-light/10 text-light px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-light/10 transition-colors">
              <Globe size={20} /> View Demos
            </a>
          </div>

          <div className="flex gap-12 mt-12 pt-12 border-t border-light/5">
            <div>
              <div className="text-3xl font-bold gradient-text">50+</div>
              <p className="text-sm text-gray-text">Clients Served</p>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">$17k+</div>
              <p className="text-sm text-gray-text">Revenue Generated</p>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">2400+</div>
              <p className="text-sm text-gray-text">Hours Saved</p>
            </div>
          </div>
        </motion.div>

        <div className="relative h-[500px] hidden md:block">
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-10 left-10 p-6 glass-card w-72"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/20 text-primary rounded-xl"><TrendingUp /></div>
              <div>
                <div className="text-sm font-bold">Revenue Growth</div>
                <div className="text-xs text-gray-text">+127% this month</div>
              </div>
            </div>
            <div className="w-full bg-light/5 h-2 rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} transition={{ duration: 2, delay: 0.5 }} className="h-full bg-primary" />
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: -2 }}
            className="absolute top-1/2 right-10 p-6 glass-card w-64"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-secondary/20 text-secondary rounded-xl"><Users /></div>
              <div>
                <div className="text-sm font-bold">Leads</div>
                <div className="text-xs text-gray-text">72% conversion</div>
              </div>
            </div>
            <div className="w-full bg-light/5 h-2 rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: '72%' }} transition={{ duration: 2, delay: 1 }} className="h-full bg-secondary" />
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: -4 }}
            className="absolute bottom-10 left-20 p-6 glass-card w-72"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-accent/20 text-accent rounded-xl"><Bot /></div>
              <div>
                <div className="text-sm font-bold">AI Response</div>
                <div className="text-xs text-gray-text">93% automated</div>
              </div>
            </div>
            <div className="w-full bg-light/5 h-2 rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: '93%' }} transition={{ duration: 2, delay: 1.5 }} className="h-full bg-accent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Dashboard = () => {
  const [weeklyGoal, setWeeklyGoal] = useState(2500);
  const [clientValue, setClientValue] = useState(350);
  const [clientsPerWeek, setClientsPerWeek] = useState(5);
  const [expenses, setExpenses] = useState(50);

  const weeklyIncome = (clientValue * clientsPerWeek) - expenses;
  const monthlyIncome = weeklyIncome * 4.33;

  return (
    <section id="dashboard" className="py-24 px-6 bg-linear-to-b from-darker to-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Income <span className="gradient-text">Dashboard</span></h2>
          <p className="text-gray-text max-w-2xl mx-auto">Track your journey from N0 to $2,500/week with real-time projections and client management.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 glass-card">
            <div className="flex items-center gap-3 text-gray-text mb-6">
              <Wallet size={20} /> Weekly Income Target
            </div>
            <div className="text-5xl font-extrabold gradient-text mb-2">${weeklyIncome.toLocaleString()}</div>
            <div className="text-sm text-gray-text mb-8">of ${weeklyGoal.toLocaleString()}/week goal</div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-light/5 rounded-xl">
                <span className="text-sm flex items-center gap-2"><CheckCircle className="text-success" size={16} /> Active Clients</span>
                <span className="font-bold">{clientsPerWeek}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-light/5 rounded-xl">
                <span className="text-sm flex items-center gap-2"><Clock className="text-warning" size={16} /> Pending Payments</span>
                <span className="font-bold">${(clientValue * 0.5).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-light/5 rounded-xl">
                <span className="text-sm flex items-center gap-2"><Calendar className="text-primary" size={16} /> Monthly Projection</span>
                <span className="font-bold">${Math.floor(monthlyIncome).toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="p-8 glass-card">
            <h3 className="flex items-center gap-3 text-gray-text mb-6">
              <ArrowRight size={20} /> Client Pipeline
            </h3>
            <div className="space-y-4">
              {[
                { label: 'Prospects Contacted', value: '47' },
                { label: 'Demos Sent', value: '12' },
                { label: 'Proposals Pending', value: '5' },
                { label: 'Closed This Week', value: '3', badge: true },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center p-3 bg-light/5 rounded-xl">
                  <span className="text-sm">{item.label}</span>
                  <span className={`font-bold ${item.badge ? 'px-3 py-1 bg-success/10 text-success rounded-full text-xs' : ''}`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 glass-card">
            <h3 className="flex items-center gap-3 text-gray-text mb-6">
              <Zap size={20} /> Revenue Sources
            </h3>
            <div className="space-y-4">
              {[
                { label: 'Website Builds', value: '60%', color: 'bg-primary' },
                { label: 'AI Chatbots', value: '25%', color: 'bg-secondary' },
                { label: 'Automation', value: '15%', color: 'bg-accent' },
              ].map((item) => (
                <div key={item.label} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{item.label}</span>
                    <span className="font-bold">{item.value}</span>
                  </div>
                  <div className="w-full bg-light/5 h-2 rounded-full overflow-hidden">
                    <div className={`h-full ${item.color}`} style={{ width: item.value }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Calculator Section */}
        <div className="p-12 glass-card border-accent/20">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-2">Income <span className="text-accent">Calculator</span></h3>
            <p className="text-gray-text">Calculate how many clients you need to hit your weekly income goals.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Average Client Value ($)</label>
                <input 
                  type="number" 
                  value={clientValue}
                  onChange={(e) => setClientValue(Number(e.target.value))}
                  className="w-full bg-dark border border-light/10 rounded-xl p-4 focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Clients Per Week</label>
                <input 
                  type="number" 
                  value={clientsPerWeek}
                  onChange={(e) => setClientsPerWeek(Number(e.target.value))}
                  className="w-full bg-dark border border-light/10 rounded-xl p-4 focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Weekly Expenses ($)</label>
                <input 
                  type="number" 
                  value={expenses}
                  onChange={(e) => setExpenses(Number(e.target.value))}
                  className="w-full bg-dark border border-light/10 rounded-xl p-4 focus:outline-none focus:border-accent"
                />
              </div>
            </div>
            
            <div className="p-8 bg-accent/5 border border-accent/10 rounded-3xl text-center">
              <p className="text-gray-text mb-2 font-medium">Projected Weekly Net Income</p>
              <div className="text-6xl font-black text-accent mb-4">${weeklyIncome.toLocaleString()}</div>
              <p className="text-gray-text">That's <strong className="text-light">${Math.floor(monthlyIncome).toLocaleString()}</strong> per month</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { 
      title: 'AI Website + Chatbot', 
      price: '$350', 
      period: '/project', 
      icon: <Globe />, 
      desc: 'Modern mobile-friendly website with integrated AI customer support chatbot, WhatsApp booking, and lead capture.',
      color: 'text-primary',
      bg: 'bg-primary/10'
    },
    { 
      title: 'WhatsApp Business Setup', 
      price: '$200', 
      period: '/setup', 
      icon: <Send />, 
      desc: 'Complete WhatsApp Business API integration with automated replies, catalog setup, and appointment booking.',
      color: 'text-secondary',
      bg: 'bg-secondary/10'
    },
    { 
      title: 'AI Automation System', 
      price: '$500', 
      period: '/system', 
      icon: <Zap />, 
      desc: 'Custom AI workflows for customer service, email responses, social media management, and lead nurturing.',
      color: 'text-accent',
      bg: 'bg-accent/10'
    },
    { 
      title: 'Brand Identity + Design', 
      price: '$150', 
      period: '/package', 
      icon: <Paintbrush />, 
      desc: 'Professional logo, brand colors, business cards, and social media templates using AI-assisted design.',
      color: 'text-success',
      bg: 'bg-success/10'
    },
    { 
      title: 'SEO + Google Business', 
      price: '$250', 
      period: '/month', 
      icon: <Search />, 
      desc: 'Google Business Profile optimization, local SEO setup, and review management system for Nigerian businesses.',
      color: 'text-warning',
      bg: 'bg-warning/10'
    },
    { 
      title: 'Monthly Maintenance', 
      price: '$100', 
      period: '/month', 
      icon: <Infinity />, 
      desc: 'Ongoing website updates, AI chatbot training, content updates, and priority support for existing clients.',
      color: 'text-purple-500',
      bg: 'bg-purple-500/10'
    },
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our <span className="gradient-text">Services</span></h2>
          <p className="text-gray-text max-w-2xl mx-auto">High-value digital services powered by AI, delivered fast.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={service.title}
              whileHover={{ y: -5 }}
              className="p-8 glass-card gradient-border-top"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${service.bg} ${service.color} mb-6`}>
                {React.cloneElement(service.icon as React.ReactElement, { size: 32 })}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-text text-sm leading-relaxed mb-8">{service.desc}</p>
              <div className="text-3xl font-bold gradient-text">
                {service.price} <span className="text-xs text-gray-text font-normal">{service.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const demos = [
    { 
      title: 'Luxury Hotel', 
      industry: 'Hospitality', 
      icon: <Hotel />, 
      tags: ['Booking', 'AI Concierge'],
      desc: 'Room booking, AI concierge, restaurant reservations, and guest services automation.'
    },
    { 
      title: 'Beauty Salon', 
      industry: 'Beauty & Wellness', 
      icon: <Scissors />, 
      tags: ['Appointments', 'WhatsApp'],
      desc: 'Appointment scheduling, service catalog, style galleries, and automated reminders.'
    },
    { 
      title: 'Medical Clinic', 
      industry: 'Healthcare', 
      icon: <Stethoscope />, 
      tags: ['Patient Portal', 'AI Triage'],
      desc: 'Patient booking, AI symptom checker, doctor profiles, and health tips automation.'
    },
    { 
      title: 'School Portal', 
      industry: 'Education', 
      icon: <GraduationCap />, 
      tags: ['Admissions', 'Payments'],
      desc: 'Online admissions, fee payments, result checking, and parent communication portal.'
    },
    { 
      title: 'Real Estate Agency', 
      industry: 'Real Estate', 
      icon: <Home />, 
      tags: ['Listings', 'AI Agent'],
      desc: 'Property listings, virtual tours, mortgage calculator, and AI property matching.'
    },
    { 
      title: 'Restaurant & Food', 
      industry: 'Food & Beverage', 
      icon: <Utensils />, 
      tags: ['Menu', 'Online Orders'],
      desc: 'Digital menu, online ordering, table reservations, and delivery integration.'
    },
  ];

  return (
    <section id="portfolio" className="py-24 px-6 bg-linear-to-b from-dark to-darker">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Demo <span className="gradient-text">Portfolio</span></h2>
          <p className="text-gray-text max-w-2xl mx-auto">Ready-made templates for different industries - customize and deploy in hours.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demos.map((demo) => (
            <motion.div 
              key={demo.title}
              whileHover={{ y: -5 }}
              className="bg-dark/80 rounded-3xl border border-light/5 overflow-hidden group hover:border-primary/20 transition-all"
            >
              <div className="h-48 bg-linear-to-br from-primary/10 to-secondary/10 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundSize: '20px 20px', backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)' }} />
                <div className="text-primary mb-3">{React.cloneElement(demo.icon as React.ReactElement, { size: 48 })}</div>
                <h4 className="text-xl font-bold">{demo.title}</h4>
                <p className="text-sm text-gray-text">Demo Preview</p>
              </div>
              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  {demo.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[10px] text-primary uppercase tracking-wider font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-bold mb-2">{demo.industry}</h3>
                <p className="text-sm text-gray-text leading-relaxed">{demo.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: 'Discovery Call (15 min)', desc: 'We discuss your business needs, target customers, and goals. No tech knowledge required - we handle everything.' },
    { title: 'AI Design & Build (24h)', desc: 'Our AI tools generate a custom design based on your industry. We build the site, integrate chatbot, and set up automation.' },
    { title: 'Review & Revise (12h)', desc: 'You review the demo, request changes, and we refine. Unlimited revisions until you are 100% satisfied.' },
    { title: 'Launch & Train (12h)', desc: 'We deploy your site, connect your domain, train the AI on your business, and hand over the keys.' },
  ];

  return (
    <section id="process" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It <span className="gradient-text">Works</span></h2>
          <p className="text-gray-text max-w-2xl mx-auto">From first contact to delivered project in 48 hours.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-primary to-secondary opacity-30" />
          
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <motion.div 
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse text-right'}`}
              >
                <div className={`flex-1 hidden md:block`} />
                <div className="relative z-10 w-12 h-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center font-bold text-xl shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                  {idx + 1}
                </div>
                <div className="flex-1 glass-card p-8">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-text leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const OutreachToolkit = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const scripts = [
    { title: 'Instagram DM Script', platform: 'instagram', content: '"Hi [Name], I came across your business page and love what you are building! I noticed your website could be converting more customers with a modern mobile-friendly design + automated WhatsApp assistant. I build these for Nigerian businesses - can I show you a free demo? Takes 2 mins."' },
    { title: 'WhatsApp Business Script', platform: 'whatsapp', content: '"Good day! I am [Your Name] from GreenOrb Agency. We specialize in building AI-powered websites and WhatsApp automation for businesses in [City]. I noticed [specific observation about their business]. Would you be open to seeing a free mockup of how your business could look online?"' },
    { title: 'Facebook Group Post', platform: 'facebook', content: '"FREE WEBSITE MAKEOVER for 3 businesses this week! I am building my portfolio and looking for: Salons, Hotels, Clinics, or Restaurants in [City]. You get: Modern website + AI chatbot + WhatsApp booking. Zero cost, just a testimonial if you love it. Comment your business type below!"' },
  ];

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="outreach" className="py-24 px-6 bg-linear-to-b from-darker to-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Outreach <span className="gradient-text">Toolkit</span></h2>
          <p className="text-gray-text max-w-2xl mx-auto">Copy-paste scripts and templates to start closing clients today.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scripts.map((script) => (
            <div key={script.title} className="p-8 glass-card">
              <h3 className="flex items-center gap-2 font-bold mb-6">
                {script.platform === 'instagram' && <Rocket className="text-secondary" />}
                {script.platform === 'whatsapp' && <Send className="text-success" />}
                {script.platform === 'facebook' && <Globe className="text-primary" />}
                {script.title}
              </h3>
              <div className="bg-black/30 border border-light/5 rounded-2xl p-6 relative group">
                <button 
                  onClick={() => copyToClipboard(script.content, script.title)}
                  className="absolute top-4 right-4 p-2 bg-primary/10 border border-primary/20 rounded-lg text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {copied === script.title ? <Check size={16} /> : <Copy size={16} />}
                </button>
                <p className="text-sm text-gray-text italic leading-relaxed">{script.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AIChatbot = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', content: string }[]>([
    { role: 'bot', content: "Hello! I am the AI assistant for GreenOrb Agency. I can help you with:\n\n🌐 Website design & development\n🤖 AI chatbot integration\n📱 WhatsApp Business setup\n⚡ Business automation\n\nWhat type of business do you have?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    const response = await generateBotResponse(userMessage, '');
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'bot', content: response }]);
  };

  return (
    <section id="chatbot" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Try Our <span className="gradient-text">AI Assistant</span></h2>
          <p className="text-gray-text max-w-2xl mx-auto">Experience how your customers will interact with your business 24/7.</p>
        </div>

        <div className="max-w-2xl mx-auto glass-card overflow-hidden h-[500px] md:h-[600px] flex flex-col relative">

          <div className="bg-primary/10 p-6 flex items-center gap-4 border-b border-primary/20">
            <div className="w-12 h-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-2xl">🤖</div>
            <div>
              <h3 className="font-bold">GreenOrb Assistant</h3>
              <p className="text-xs text-success flex items-center gap-1">
                <span className="w-2 h-2 bg-success rounded-full animate-pulse" /> Online - Replies instantly
              </p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-primary text-white rounded-tr-none' 
                    : 'bg-light/5 text-light border border-light/10 rounded-tl-none whitespace-pre-wrap'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-light/5 p-4 rounded-2xl rounded-tl-none flex gap-1">
                  <span className="w-1.5 h-1.5 bg-gray-text rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 bg-gray-text rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 bg-gray-text rounded-full animate-bounce" />
                </div>
              </div>
            )}
          </div>

          <div className="p-6 border-t border-light/5 bg-darker/50 flex gap-4">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="flex-1 bg-dark border border-light/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary text-sm"
            />
            <button 
              onClick={handleSend}
              disabled={isTyping}
              className="bg-primary text-white p-3 rounded-xl hover:scale-105 transition-transform disabled:opacity-50"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const HelpSection = () => {
  const features = [
    { title: 'Industry Demos', desc: 'Pre-built templates optimized for hotels, salons, clinics, and more.', icon: <Hotel size={24} /> },
    { title: 'Income Calculator', desc: 'Calculate your potential earnings based on client value and quantity.', icon: <Wallet size={24} /> },
    { title: 'AI Assistant', desc: 'A real-time chatbot powered by Gemini to handle your customer queries.', icon: <Bot size={24} /> },
    { title: 'Outreach Toolkit', desc: 'Proven scripts for Instagram, WhatsApp, and Facebook to close deals.', icon: <Send size={24} /> },
  ];

  const steps = [
    { title: 'Browse Demos', desc: 'Scroll to the Portfolio section to find a template that fits your industry or a potential client\'s niche.' },
    { title: 'Plan Your Income', desc: 'Use the Dashboard calculator to set realistic financial goals and see how many clients you need.' },
    { title: 'Test the AI', desc: 'Head to the AI Demo section and chat with our assistant to see the quality of responses your clients will get.' },
    { title: 'Initiate Outreach', desc: 'Copy a script from the Outreach Toolkit and send it to a local business owner on Instagram or WhatsApp.' },
    { title: 'Close the Deal', desc: 'Once they respond, show them the industry demo and use our WhatsApp link to contact us for the final build.' },
  ];

  return (
    <section id="help" className="py-24 px-6 bg-linear-to-b from-darker to-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How to Use <span className="gradient-text">GreenOrb</span></h2>
          <p className="text-gray-text max-w-2xl mx-auto">Get started with our core features and learn how to launch your AI agency in minutes.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Features Explanation */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <Zap className="text-primary" /> Core Features
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="p-6 glass-card hover:border-primary/30 transition-colors">
                  <div className="text-primary mb-3">{feature.icon}</div>
                  <h4 className="font-bold mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-text leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Step-by-Step Tutorial */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <HelpCircle className="text-secondary" /> Getting Started
            </h3>
            <div className="space-y-4">
              {steps.map((step, idx) => (
                <div key={step.title} className="flex gap-6 p-6 glass-card border-none bg-light/5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{step.title}</h4>
                    <p className="text-sm text-gray-text leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 px-6 bg-linear-to-b from-dark to-darker">
      <div className="max-w-4xl mx-auto glass-card p-8 md:p-16 text-center border-primary/30">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-gray-text text-lg mb-10">
          Get your AI-powered website with WhatsApp integration in 48 hours. Join 50+ Nigerian businesses already using our system.
        </p>
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
            <a 
              href="https://wa.me/2348115106084?text=Hi%20GreenOrb%2C%20I%27m%20interested%20in%20getting%20an%20AI-powered%20website%20for%20my%20business" 
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(37,211,102,0.2)]"
            >
              <MessageSquare size={24} /> Chat Admin 1
            </a>
            <a 
              href="https://wa.me/2349123879116?text=Hi%20GreenOrb%2C%20I%27m%20interested%20in%20getting%20an%20AI-powered%20website%20for%20my%20business" 
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(37,211,102,0.2)]"
            >
              <MessageSquare size={24} /> Chat Admin 2
            </a>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <a 
              href="https://www.instagram.com/peterobiako1?igsh=MTJtemx5amdlOWtucA==" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-3 text-light hover:text-primary transition-colors font-bold text-lg"
            >
              <Instagram size={24} className="text-secondary" /> @peterobiako1
            </a>
            <p className="text-sm text-gray-text">
              Or email us at <a href="mailto:peterobiako1@gmail.com" className="text-primary hover:underline">peterobiako1@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-light/5 text-center px-6">
      <p className="text-gray-text mb-2">© 2026 GreenOrb Agency. Built with AI for Nigerian businesses.</p>
      <p className="text-xs text-gray-text/50 mb-8">No coding required. Deploy in 48 hours.</p>
      <div className="flex justify-center gap-8 text-gray-text">
        <a href="https://wa.me/2348115106084" target="_blank" rel="noreferrer" className="hover:text-[#25D366] transition-colors"><MessageSquare size={24} /></a>
        <a href="https://www.instagram.com/peterobiako1?igsh=MTJtemx5amdlOWtucA==" target="_blank" rel="noreferrer" className="hover:text-secondary transition-colors"><Instagram size={24} /></a>
        <a href="mailto:peterobiako1@gmail.com" className="hover:text-primary transition-colors"><Send size={24} /></a>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <Dashboard />
      <Services />
      <Portfolio />
      <Process />
      <OutreachToolkit />
      <AIChatbot />
      <HelpSection />
      <CTA />
      <Footer />
    </div>
  );
}
