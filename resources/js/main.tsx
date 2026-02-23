import React, { StrictMode } from 'react';
import ReactDOM, { Container } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
  title: (title) => (title ? `${title} - ${appName}` : appName),
  resolve: name => {
    const pages = import.meta.glob('./pages/**/*.tsx', { eager: true })
    return pages[`./pages/${name}.tsx`]
  },
  setup({ el, App, props }) {
    ReactDOM.createRoot(el as Container)
        .render(
          <StrictMode>
            <App {...props} />
          </StrictMode>
        )
  },
  progress: {
    color: '#F64E60',
  },
})
