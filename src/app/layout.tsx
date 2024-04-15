import './globals.css';
import React from 'react';
import type { Metadata } from 'next';
import ReduxProvider from '@/shared/store/ReduxProvider';
import SmoothScroll from '@/shared/ui/SmoothScroll/SmoothScroll';
import { RemResizeScript } from '@/features/rem-resize';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// Шрифты
// const Roboto = localFont({
//   src: [
//     {
//       path: '../../public/fonts/Robotocondensed.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//   ],
//   display: 'swap',
//   variable: '--base-font',
// });
// ? clsx(Roboto.variable) для body

export const metadata: Metadata = {
  title: 'Next.js Project',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, et',
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: any;
}

export default function RootLayout({ children, ...rest }: RootLayoutProps) {
  return (
    <html lang="ru">
      <head>
        <RemResizeScript
          defaultFontSize={10}
          startScaleWidth={1440}
          endScaleTopWidth={1920}
          endScaleBottomWidth={1024}
        />
      </head>
      <body>
        <ReduxProvider {...rest}>
          <SmoothScroll>
            <div id="app">{children}</div>
          </SmoothScroll>
        </ReduxProvider>
      </body>
    </html>
  );
}
