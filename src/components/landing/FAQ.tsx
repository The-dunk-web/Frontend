import { press_start_2p } from '@/constants/fonts';
import FaqCard from './FaqCard';

export default function FAQ() {
  return (
    <section className="mb-20 py-14">
      <div className="container mx-auto">
        <header className="mb-12 text-center">
          <p
            className={`${press_start_2p.className} mb-3 text-center text-3xl font-medium uppercase text-red-600`}
          >
            FAQs
          </p>
        </header>
        <div>
          <FaqCard />
        </div>
      </div>
    </section>
  );
}
