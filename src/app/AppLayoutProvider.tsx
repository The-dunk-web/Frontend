import { orbitron } from '@/constants/fonts';

export default function AppLayoutProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${orbitron.className} bg-stone-950 font-semibold tracking-wider text-stone-100 antialiased`}
    >
      {children}
    </div>
  );
}
