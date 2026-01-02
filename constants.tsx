
import React from 'react';
import { Tariff } from './types';

export const TARIFFS: Tariff[] = [
  {
    id: 'basic',
    name: 'START',
    speedDownload: 100,
    speedUpload: 100,
    price: 349,
    technology: 'Optika',
    features: ['Bez limitu dat', 'Stabilní připojení', 'Instalace v ceně']
  },
  {
    id: 'standard',
    name: 'OPTIMAL',
    speedDownload: 300,
    speedUpload: 300,
    price: 449,
    technology: 'Optika',
    features: ['Streamování 4K', 'Práce z domova', 'Wi-Fi router v ceně']
  },
  {
    id: 'premium',
    name: 'MAXIMUM',
    speedDownload: 1000,
    speedUpload: 1000,
    price: 599,
    technology: 'Optika',
    features: ['Giga rychlost', 'Pro náročné hráče', 'VIP podpora']
  },
  {
    id: 'wireless',
    name: 'VZDUCH',
    speedDownload: 50,
    speedUpload: 10,
    price: 399,
    technology: 'Bezdrát',
    features: ['Kdekoliv v dosahu', 'Rychlé zřízení', 'Bez kabelů']
  }
];

export const FAQ = [
  {
    q: 'Co když doporučím 11 lidí?',
    a: 'Vaše odměna se zastaví na 100% slevě. Další doporučení však můžete využít jako kredit na doplňkové služby (např. TV balíčky).'
  },
  {
    q: 'Platí sleva napořád?',
    a: 'Ano, dokud vámi doporučený klient zůstává aktivním uživatelem našich služeb, vaše sleva trvá.'
  },
  {
    q: 'Jak uplatním svůj kód?',
    a: 'Při objednávce nového klienta stačí do poznámky uvést vaše jméno nebo variabilní symbol.'
  }
];
