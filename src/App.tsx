import { motion } from "motion/react";
import { 
  Laptop, 
  Cpu, 
  Settings, 
  Wrench, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  ExternalLink, 
  Package,
  ArrowRight,
  Terminal,
  Activity,
  HardDrive,
  Check
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.4 }
};

const services = [
  {
    id: "01",
    title: "Naprawa Hardware",
    description: "Diagnostyka układów scalonych, naprawa płyt głównych, wymiana gniazd zasilania i matryc.",
    icon: <Cpu className="w-5 h-5 text-brand-accent" />
  },
  {
    id: "02",
    title: "Modernizacja Stacji",
    description: "Optymalizacja wydajności poprzez dobór komponentów: dyski NVMe, szybka pamięć DDR5/6.",
    icon: <HardDrive className="w-5 h-5 text-brand-accent" />
  },
  {
    id: "03",
    title: "Maintenance",
    description: "Dekontaminacja wnętrza, ultradźwiękowe czyszczenie wentylatorów, wymiana fazowa past.",
    icon: <Settings className="w-5 h-5 text-brand-accent" />
  },
  {
    id: "04",
    title: "System OS / Software",
    description: "Konfiguracja środowiska, migracja danych, hardening systemu i usuwanie malware.",
    icon: <ShieldCheck className="w-5 h-5 text-brand-accent" />
  },
  {
    id: "05",
    title: "Legacy Support",
    description: "Restauracja i modernizacja starszych jednostek do współczesnych standardów pracy.",
    icon: <Wrench className="w-5 h-5 text-brand-accent" />
  },
  {
    id: "06",
    title: "Logistyka Serwisowa",
    description: "Pełne wsparcie Door-to-Door oraz obsługa wysyłkowa (InPost/DPD) na terenie całego kraju.",
    icon: <Package className="w-5 h-5 text-brand-accent" />
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg selection:bg-brand-accent/40">
      {/* Background Effect */}
      <div className="fixed inset-0 tech-grid pointer-events-none opacity-40" />

      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-brand-border bg-brand-bg/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center">
              <Terminal size={18} className="text-brand-accent" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm font-bold tracking-tight">MTT-SERWIS</span>
              <span className="tech-label">Standard Laboratoryjny</span>
            </div>
          </div>
          
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="font-mono text-[11px] uppercase tracking-widest hover:text-brand-accent transition-colors">Laboratorium</a>
            <a href="#services" className="font-mono text-[11px] uppercase tracking-widest hover:text-brand-accent transition-colors">Usługi</a>
            <a href="#contact" className="font-mono text-[11px] uppercase tracking-widest hover:text-brand-accent transition-colors">Terminal</a>
          </nav>

          <a 
            href="tel:501172654" 
            className="flex items-center gap-3 px-4 py-1.5 border border-brand-accent text-brand-accent font-mono text-xs font-bold hover:bg-brand-accent hover:text-white transition-all"
          >
            <Activity size={14} className="animate-pulse" />
            KONTAKT: 501 172 654
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative pt-16">
        
        {/* Hero */}
        <section className="relative min-h-[80vh] flex flex-col justify-center border-b border-brand-border">
          <div className="max-w-7xl mx-auto px-6 w-full py-20 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="tech-label mb-8 flex items-center gap-4">
                <div className="w-12 h-[1px] bg-brand-accent" />
                Specjalistyczny Serwis Sprzętowy
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
                CENTRUM <br />
                REGENERACJI <br />
                <span className="text-brand-accent">SYSTEMÓW</span>
              </h1>
              <p className="text-brand-text-dim max-w-md text-sm md:text-base leading-relaxed mb-10 border-l border-brand-border pl-6">
                MTT-Serwis to profesjonalne laboratorium naprawcze specjalizujące się w architekturze PC oraz Laptop. 
                Wrocław, ul. Krucza 8. Precyzja, rzetelność, technologia.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="#contact" className="px-8 py-3 bg-white text-black font-mono text-xs font-bold uppercase tracking-widest hover:bg-brand-accent hover:text-white transition-all">
                  Zleć Diagnostykę
                </a>
                <a href="https://www.facebook.com/profile.php?id=61581720132736" target="_blank" rel="noreferrer" className="px-8 py-3 border border-brand-border font-mono text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all flex items-center gap-2">
                  <Facebook size={14} /> Informacje Facebook
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square flex items-center justify-center"
            >
              <div className="absolute inset-0 border border-brand-border/30 rounded-full animate-spin-slow opacity-10" />
              <div className="relative group overflow-hidden border border-brand-border bg-brand-surface p-2">
                 <img 
                  src="https://i.postimg.cc/rFMmD6r9/560028968-31713936168221318-4947682271372192380-n.jpg" 
                  alt="Workstation" 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 tech-label bg-black/80 px-2 py-1">Jednostka_01: Laboratorium Hardware</div>
                <div className="absolute bottom-4 right-4 bg-brand-accent p-2">
                  <Activity size={20} className="text-white" />
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Decorative Lines */}
          <div className="absolute bottom-0 left-0 h-40 w-[1px] bg-gradient-to-t from-brand-border to-transparent" />
          <div className="absolute bottom-0 right-0 h-40 w-[1px] bg-gradient-to-t from-brand-border to-transparent" />
        </section>

        {/* Stats/Quick Info Bar */}
        <div className="border-b border-brand-border bg-brand-surface/50">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-brand-border">
            <div className="p-8 text-center">
              <div className="tech-label mb-2">Lokalizacja</div>
              <div className="font-mono text-sm font-bold">WROCŁAW, PL</div>
            </div>
            <div className="p-8 text-center">
              <div className="tech-label mb-2">Godziny</div>
              <div className="font-mono text-sm font-bold">PN - PT</div>
            </div>
            <div className="p-8 text-center">
              <div className="tech-label mb-2">Typ Usługi</div>
              <div className="font-mono text-sm font-bold">PC / LAPTOP</div>
            </div>
            <div className="p-8 text-center">
              <div className="tech-label mb-2">Doświadczenie</div>
              <div className="font-mono text-sm font-bold">POZIOM EKSPERT</div>
            </div>
          </div>
        </div>

        {/* Services */}
        <section id="services" className="py-24 border-b border-brand-border">
          <div className="max-w-7xl mx-auto px-6 mb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <div className="tech-label mb-4">Moduły Funkcjonalne</div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">Dostępne Operacje</h2>
              </div>
              <div className="text-brand-text-dim max-w-sm text-sm font-mono leading-relaxed">
                Kompletny zakres wsparcia IT: od mikro-lutowania po optymalizację środowisk roboczych.
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-border overflow-hidden border-x border-y border-brand-border">
            {services.map((s, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-bg p-10 group hover:bg-brand-surface transition-colors cursor-default"
              >
                <div className="flex justify-between items-start mb-10">
                  <span className="font-mono text-xs text-brand-accent font-bold">{s.id}</span>
                  <div className="p-3 border border-brand-border group-hover:border-brand-accent transition-colors">
                    {s.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{s.title}</h3>
                <p className="text-brand-text-dim text-sm leading-relaxed mb-6">
                  {s.description}
                </p>
                <div className="h-[1px] w-0 bg-brand-accent group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Module */}
        <section id="contact" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              
              <motion.div {...fadeIn}>
                <div className="tech-label mb-4">Terminal Serwisowy</div>
                <h2 className="text-5xl font-bold tracking-tighter uppercase mb-12">Nawiąż <br />Połączenie</h2>
                
                <div className="space-y-px bg-brand-border border border-brand-border">
                  <div className="bg-brand-surface p-8 flex items-center justify-between">
                    <div>
                      <div className="tech-label mb-1">Bezpośrednia Linia Telefoniczna</div>
                      <a href="tel:501172654" className="text-3xl font-bold tracking-tight hover:text-brand-accent">501 172 654</a>
                    </div>
                    <Phone className="text-brand-border" size={32} />
                  </div>
                  
                  <div className="bg-brand-surface p-8 flex items-center justify-between">
                    <div>
                      <div className="tech-label mb-1">Poczta Elektroniczna</div>
                      <a href="mailto:trumar@wp.pl" className="text-xl font-bold tracking-tight hover:text-brand-accent">trumar@wp.pl</a>
                    </div>
                    <Mail className="text-brand-border" size={32} />
                  </div>

                  <div className="bg-brand-surface p-8">
                    <div className="tech-label mb-4">Węzeł Fizyczny</div>
                    <div className="flex items-start gap-4">
                      <MapPin className="text-brand-accent" size={24} />
                      <div className="font-bold text-lg leading-tight">
                        Wrocław, <br />
                        ul. Krucza 8, 53-411
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 border border-brand-accent/20 bg-brand-accent/5">
                  <div className="flex gap-4 items-center">
                    <Package className="text-brand-accent" size={24} />
                    <div>
                      <div className="font-bold text-sm">Usługa Wysyłkowa InPost</div>
                      <p className="text-xs text-brand-text-dim">Możliwość wysyłki sprzętu z całego kraju. <br />Ustal szczegóły telefonicznie.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                {...fadeIn}
                transition={{ delay: 0.2 }}
                className="relative min-h-[400px] border border-brand-border p-2 bg-brand-surface"
              >
                <div className="absolute top-6 left-6 z-10 bg-black/80 px-3 py-1.5 border border-brand-border flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="font-mono text-[10px] uppercase font-bold tracking-widest">Mapa Węzła Live</span>
                </div>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.79708927026!2d17.010439077057246!3d51.09375214083682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc2158ea06c91%3A0xf3d8e276100ce968!2sKrucza%208%2C%2053-406%20Wroc%C5%82aw!5e0!3m2!1spl!2spl!4v1778677940310!5m2!1spl!2spl" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale opacity-80"
                ></iframe>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Social Proof Section - More Serious */}
        <section className="py-24 border-t border-brand-border bg-brand-surface/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
              <h2 className="text-3xl font-bold uppercase tracking-tighter">Opinie Klientów</h2>
              <a 
                href="https://www.facebook.com/profile.php?id=61581720132736&sk=reviews" 
                target="_blank" 
                rel="noreferrer" 
                className="font-mono text-xs font-bold border border-brand-border px-6 py-2 hover:bg-brand-accent hover:border-brand-accent transition-all"
              >
                ZOBACZ WSZYSTKIE OPINIE →
              </a>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2].map(id => (
                <div key={id} className="p-8 border border-brand-border bg-brand-bg relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-8 h-8 opacity-5 border-t border-l border-white" />
                   <p className="text-brand-text-dim text-lg italic mb-6 leading-relaxed">
                     "{id === 1 ? "Profesjonalne podejście do trudnych przypadków. Sprzęt naprawiony szybko, rzetelnie i w dobrej cenie. Polecam każdemu we Wrocławiu." : "Modernizacja starego laptopa przerosła moje oczekiwania. System działa błyskawicznie. Bardzo dobry kontakt i fachowe doradztwo."}"
                   </p>
                   <div className="flex items-center gap-3">
                     <div className="w-1.5 h-1.5 bg-brand-accent" />
                     <span className="font-mono text-[10px] uppercase font-bold tracking-widest">Zweryfikowany Klient ID_{id}024</span>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-brand-border bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 border border-brand-accent flex items-center justify-center">
                  <div className="w-2 h-2 bg-brand-accent" />
                </div>
                <span className="font-mono font-bold">MTT-SERWIS</span>
              </div>
              <p className="text-brand-text-dim text-sm font-mono">
                Zaawansowana Logistyka Serwisowa i <br />
                Integracja Systemów.
              </p>
            </div>
            
            <div>
              <div className="tech-label mb-6 underline decoration-brand-accent decoration-2 underline-offset-8">Godziny Otwarcia</div>
              <ul className="space-y-3 font-mono text-xs">
                <li className="flex justify-between"><span>Pon - Pt</span> <span className="text-brand-accent">09:00 - 18:00</span></li>
                <li className="flex justify-between"><span>Sob</span> <span className="text-brand-text-dim">Po ustaleniu</span></li>
                <li className="flex justify-between"><span>Niedz</span> <span className="text-brand-text-dim">Zamknięte</span></li>
              </ul>
            </div>

            <div>
              <div className="tech-label mb-6 underline decoration-brand-accent decoration-2 underline-offset-8">Kontakt</div>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/profile.php?id=61581720132736" target="_blank" rel="noreferrer" className="w-10 h-10 border border-brand-border flex items-center justify-center hover:border-brand-accent hover:text-brand-accent transition-all">
                  <Facebook size={18} />
                </a>
                <a href="tel:501172654" className="w-10 h-10 border border-brand-border flex items-center justify-center hover:border-brand-accent hover:text-brand-accent transition-all">
                  <Phone size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between pt-10 border-t border-brand-border items-center gap-4">
             <div className="tech-label">© 2026 MTT-SERWIS | SYSTEM_BUILD: V2.1.0</div>
             <div className="flex gap-8 tech-label">
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
