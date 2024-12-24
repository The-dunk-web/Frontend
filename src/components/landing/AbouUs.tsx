import { press_start_2p, vt323 } from '@/constants/fonts';
import React from 'react';

export default function AbouUs() {
  return (
    <section className="py-14">
      <div className="container mx-auto">
        <header className="mb-12 text-center">
          <p
            className={`${press_start_2p.className} mb-3 text-center text-3xl font-medium uppercase text-red-600`}
          >
            About us
          </p>
          <h2>Beyond the Edge of the Known</h2>
        </header>

        <div className="grid md:grid-cols-2">
          <article className="space-y-2 border-2 border-stone-100 p-4 text-sm font-light leading-6 tracking-widest">
            <p>
              <span className="font-bold text-red-600">-</span> Welcome to The Dunk Web, your
              gateway to the enigmatic depths of the unknown. This is not just a store—it’s a portal
              into an alternate realm where boundaries dissolve, and the daring thrive.
            </p>
            <p>
              <span className="font-bold text-red-600">-</span> Here, we offer exclusive red room
              experiences, uncensored articles, and unrivaled services and products for those who
              crave the extraordinary. Each offering is meticulously crafted to spark curiosity and
              challenge the norms of reality.
            </p>
            <p>
              <span className="font-bold text-red-600">-</span> Whether you're drawn to the allure
              of our red rooms, seeking untold stories through provocative articles, or in need of
              rare and unconventional products, we provide a haven for those who dare to explore the
              forbidden.
            </p>
            <p>
              <span className="font-bold text-red-600">-</span> At The Dunk Web, we don’t just sell
              experiences—we invite you to live them. What we offer isn’t for everyone, but for the
              chosen few ready to embrace the unknown.
            </p>
          </article>

          <div className="cards grid grid-rows-4">
            <div className="border-2 border-stone-100 p-4">
              <h3 className={`${press_start_2p.className} mb-3 text-sm uppercase text-red-600`}>
                1 - Our Mission
              </h3>
              <p className="text-sm font-light">
                <span className="font-bold text-red-600">-</span> To illuminate the shadows and
                empower those bold enough to explore them.
              </p>
            </div>

            <div className="row-span-2 border-2 border-stone-100 p-4">
              <h3 className={`${press_start_2p.className} mb-3 text-sm uppercase text-red-600`}>
                2 - What Awaits You
              </h3>
              <p className="mb-2 text-sm font-light">
                <span className="font-medium text-red-600">- Red Rooms:</span> Immersive,
                mind-bending experiences designed to provoke and intrigue.
              </p>
              <p className="mb-2 text-sm font-light">
                <span className="font-medium text-red-600">- Articles:</span> Uncensored insights,
                shedding light on the obscure and the forbidden.
              </p>
              <p className="text-sm font-light">
                <span className="font-medium text-red-600">- Services & Products:</span> Carefully
                curated for those who demand the unconventional.
              </p>
            </div>

            <div className="border-2 border-stone-100 p-4">
              <h3 className={`${press_start_2p.className} mb-3 text-sm uppercase text-red-600`}>
                3 - Why Choose Us?
              </h3>
              <p className="text-sm font-light">
                <span className="font-bold text-red-600">-</span> Discretion. Quality. Exclusivity.
                With The Dunk Web, you're not just a customer—you’re part of a movement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
