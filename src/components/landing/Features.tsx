import { press_start_2p } from '@/constants/fonts';
import React from 'react';

import redRoom from '@/assets/red-room.jpg';
import archive from '@/assets/archive.jpg';
import store from '@/assets/darkStore-1.jpg';
import services from '@/assets/services.jpg';
import FeaturesCard from './FeatureCard';

const featuresDate = [
  {
    title: 'Red Rooms',
    subTitle: 'Exclusive Access',
    image: redRoom,
    paragraph:
      'Experience the most forbidden, live-streamed spectacles—reserved for the truly curious.',
    href: '/red-rome',
  },
  {
    title: 'Hidden Market',
    subTitle: 'dark Artifacts',
    image: store,
    href: '/products',

    paragraph:
      'Browse our exclusive marketplace for items and services you won’t find anywhere else.',
  },
  {
    title: 'Dark Archives',
    subTitle: 'Secrets Unearthed',
    image: archive,
    href: '/articles',

    paragraph: 'Dive into a treasure trove of articles, guides, and stories from the shadows.',
  },
  {
    title: 'Untraceable Services',
    subTitle: 'Anonymity Assured',
    image: services,
    href: '/services',
    paragraph: 'Discover services that disappear without a trace, just like your tracks.',
  },
];

export default function Features() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <header className="mb-20 text-center">
          <p
            className={`${press_start_2p.className} mb-3 text-center text-3xl font-medium uppercase text-red-600`}
          >
            What awaits you
          </p>
        </header>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {featuresDate.map((feature) => (
            <FeaturesCard
              key={feature.title}
              title={feature.title}
              subTitle={feature.subTitle}
              image={feature.image}
              paragraph={feature.paragraph}
              href={feature.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
