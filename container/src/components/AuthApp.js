import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname)
        }
      }
    });

    history.listen(onParentNavigate);
  }, []);

  useEffect(() => {
    window.addEventListener('addToken', (event) => {
      const { detail } = event || {};
      console.log(detail)
    });

    return () => {
      window.removeEventListener('addToken', e);
    };
  }, []);

  return <div ref={ref} className="h-full"></div>
};