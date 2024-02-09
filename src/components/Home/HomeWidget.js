'use client';
import React, { useEffect } from 'react';
import { initWebFrame } from 'web-frame-lib';

const HomeWidget = () => {
  useEffect(() => {
    initWebFrame({
      url: 'https://mg.writewrap.in/widget/clrbyc3ie0000j8lc9zdhosjk',
      config: {
        activatorText: 'Message Me',
        css: '#wfl-frame{border: 2px solid #000; background: #fff;} @media (max-width: 450px){#wfl-frame{border:none;}}',
      },
    });
  }, []);
  return <>{/* Just to load client component in server rendered code */}</>;
};

export default HomeWidget;
