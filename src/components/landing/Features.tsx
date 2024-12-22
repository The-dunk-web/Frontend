import { press_start_2p } from '@/constants/fonts';
import React from 'react';

import FeaturesCard from './FeatureCard';

export default function Features() {
  return (
    <section className="py-14">
      <div className="container mx-auto">
        <header className="mb-12 text-center">
          <p
            className={`${press_start_2p.className} mb-3 text-center text-3xl font-medium uppercase text-red-600`}
          >
            What awaits you
          </p>
        </header>
        <div className="grid grid-cols-4">
          <FeaturesCard />
        </div>
      </div>
    </section>
  );
}
