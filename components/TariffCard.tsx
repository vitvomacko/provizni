
import React from 'react';
import { Tariff } from '../types';

interface Props {
  tariff: Tariff;
  lang: 'CZ' | 'EN';
}

export const TariffCard: React.FC<Props> = ({ tariff, lang }) => {
  return (
    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl flex flex-col card-hover">
      <div className="mb-6">
        <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">{tariff.technology}</span>
        <h3 className="text-2xl font-extrabold mt-1">{tariff.name}</h3>
      </div>
      
      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-black text-slate-800">{tariff.price}</span>
          <span className="text-slate-500 font-medium">Kč/m</span>
        </div>
      </div>

      <div className="space-y-4 mb-8 flex-grow">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-slate-500 uppercase font-bold tracking-tighter">Download</p>
            <p className="text-xl font-bold">{tariff.speedDownload} Mb/s</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-slate-500 uppercase font-bold tracking-tighter">Upload</p>
            <p className="text-xl font-bold">{tariff.speedUpload} Mb/s</p>
          </div>
        </div>

        <ul className="pt-6 border-t border-slate-50 space-y-2">
          {tariff.features.map((f, i) => (
            <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
              <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {f}
            </li>
          ))}
        </ul>
      </div>

      <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-colors">
        {lang === 'CZ' ? 'Vybrat tarif' : 'Select plan'}
      </button>
    </div>
  );
};
