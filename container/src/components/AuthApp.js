import React, { useRef, useEffect } from 'react';
import { mount } from 'auth/AuthApp';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current, {
      onNavigate: () => {
        console.log('The container noticed navigation in Auth App');
      }
    });
  });

  return <div ref={ref} className="h-full"></div>
};