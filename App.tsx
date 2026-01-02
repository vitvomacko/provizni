
import React, { useState, useMemo } from 'react';
import { Language } from './types';
import { translations } from './translations';
import { TARIFFS, FAQ } from './constants';
import { LanguageToggle } from './components/LanguageToggle';
import { TariffCard } from './components/TariffCard';
import { ChatWidget } from './components/ChatWidget';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('CZ');
  const [referrals, setReferrals] = useState(0);
  const [selectedTariffId, setSelectedTariffId] = useState('standard');
  
  const t = translations[lang];
  const selectedTariff = TARIFFS.find(tf => tf.id === selectedTariffId) || TARIFFS[1];
  
  const discountedPrice = useMemo(() => {
    const discountPercent = Math.min(referrals * 10, 100);
    const reduction = (selectedTariff.price * discountPercent) / 100;
    return Math.max(0, selectedTariff.price - reduction);
  }, [referrals, selectedTariff]);

  const isFree = discountedPrice === 0;

  return (
    <div className="min-h-screen relative">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center text-white font-black text-xl">P</div>
            <span className="text-xl font-black tracking-tight text-slate-800">Provizní<span className="text-blue-600">Net</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#how" className="hover:text-blue-600 transition-colors">Jak to funguje</a>
            <a href="#tariffs" className="hover:text-blue-600 transition-colors">Tarify</a>
            <a href="#calculator" className="hover:text-blue-600 transition-colors">Kalkulačka</a>
          </div>
          <LanguageToggle current={lang} onToggle={setLang} />
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6 animate-bounce">
              Novinka pro rok 2026
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-8 leading-tight">
              {t.heroTitle}
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-slate-500 mb-12">
              {t.heroSub}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#tariffs" className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all transform hover:scale-105 shadow-xl">
                {t.ctaButton}
              </a>
              <a href="#how" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all">
                {lang === 'CZ' ? 'Více informací' : 'Learn more'}
              </a>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-black mb-4">{t.howItWorks}</h2>
            <p className="text-slate-500 max-w-xl mx-auto">{t.howItWorksDesc}</p>
          </div>
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
            {[
              { title: t.step1Title, desc: t.step1Desc, icon: '🏠' },
              { title: t.step2Title, desc: t.step2Desc, icon: '📣' },
              { title: t.step3Title, desc: t.step3Desc, icon: '💸' },
            ].map((step, idx) => (
              <div key={idx} className="relative group p-8 rounded-3xl border border-slate-100 hover:border-blue-100 transition-colors">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tariffs */}
        <section id="tariffs" className="py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4">{t.tariffsTitle}</h2>
              <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {TARIFFS.map(tf => (
                <TariffCard key={tf.id} tariff={tf} lang={lang} />
              ))}
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section id="calculator" className="py-24 px-6 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full -mr-48 -mt-48 blur-3xl opacity-50"></div>
          <div className="max-w-4xl mx-auto bg-slate-900 rounded-[3rem] p-8 lg:p-16 text-white shadow-2xl relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-black mb-4">{t.calculatorTitle}</h2>
              <p className="text-slate-400">{t.calculatorSub}</p>
            </div>
            
            <div className="space-y-12">
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-blue-400 mb-6 text-center">
                  1. {lang === 'CZ' ? 'Vyberte si tarif pro výpočet' : 'Choose tariff for calculation'}
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {TARIFFS.map(tf => (
                    <button 
                      key={tf.id}
                      onClick={() => setSelectedTariffId(tf.id)}
                      className={`py-3 px-4 rounded-xl text-sm font-bold border transition-all ${selectedTariffId === tf.id ? 'bg-blue-600 border-blue-600 text-white' : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500'}`}
                    >
                      {tf.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-6">
                  <label className="block text-sm font-bold uppercase tracking-widest text-blue-400">
                    2. {t.referralCount}
                  </label>
                  <span className="text-3xl font-black text-white">{referrals}</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="10" 
                  step="1"
                  value={referrals}
                  onChange={(e) => setReferrals(parseInt(e.target.value))}
                  className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-4 font-bold">
                  <span>0% slevy</span>
                  <span>50% slevy</span>
                  <span>100% slevy (ZDARMA)</span>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-800 text-center">
                <p className="text-slate-400 text-sm mb-2 font-bold uppercase tracking-widest">{t.yourPrice}</p>
                {isFree ? (
                  <div className="animate-pulse">
                    <span className="text-5xl lg:text-7xl font-black gradient-text">ZDARMA</span>
                    <p className="text-green-400 font-bold mt-4">{t.freeInternet}</p>
                  </div>
                ) : (
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl lg:text-7xl font-black">{discountedPrice}</span>
                    <span className="text-2xl text-slate-500 font-bold">Kč / měsíc</span>
                  </div>
                )}
                <p className="text-slate-500 text-xs mt-6">
                  {lang === 'CZ' 
                    ? '* Výpočet je orientační. Sleva se uplatňuje na základní měsíční paušál.' 
                    : '* Calculation is indicative. Discount applies to the base monthly fee.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black text-center mb-16">{t.faqTitle}</h2>
            <div className="space-y-6">
              {FAQ.map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold mb-4 text-slate-800">{item.q}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto gradient-bg rounded-[3rem] p-12 lg:p-20 text-white text-center">
            <h2 className="text-4xl lg:text-5xl font-black mb-8">{t.contactTitle}</h2>
            <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto">
              {lang === 'CZ' 
                ? 'Náš tým je připraven vám pomoci s přechodem na Provizní Net. Stačí zanechat číslo.' 
                : 'Our team is ready to help you switch to Provizní Net. Just leave your number.'}
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="tel" 
                placeholder={lang === 'CZ' ? 'Vaše telefonní číslo' : 'Your phone number'} 
                className="flex-grow bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 font-black px-10 py-4 rounded-2xl hover:bg-blue-50 transition-colors shadow-lg">
                {lang === 'CZ' ? 'Zavolejte mi' : 'Call me'}
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-slate-800 pb-12 mb-12">
             <div className="flex items-center gap-2">
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center text-white font-black text-sm">P</div>
              <span className="text-lg font-black tracking-tight text-white">Provizní<span className="text-blue-600">Net</span></span>
            </div>
            <div className="flex gap-8 text-sm">
              <a href="#" className="hover:text-white transition-colors">GDPR</a>
              <a href="#" className="hover:text-white transition-colors">Obchodní podmínky</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
            <div className="flex gap-4">
              {/* Social icons placeholders */}
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all cursor-pointer">f</div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all cursor-pointer">in</div>
            </div>
          </div>
          <p className="text-center text-xs">
            © {new Date().getFullYear()} Provizní Net. Všechna práva vyhrazena. Člen skupiny Internetové Služby s.r.o.
          </p>
        </div>
      </footer>

      {/* AI Assistant */}
      <ChatWidget lang={lang} />
    </div>
  );
};

export default App;
