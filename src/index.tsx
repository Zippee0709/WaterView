import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { persistQueryClient } from 'react-query/persistQueryClient-experimental';
import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Stations from './pages/Stations';
import Station from './pages/Station';
import Error from './pages/Error';

import reportWebVitals from './reportWebVitals';

import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
    mutations: {
      retry: false,
    },
  },
});
if (typeof window !== 'undefined') {
  const localStoragePersistor = createWebStoragePersistor({ storage: window.localStorage });
  persistQueryClient({
    queryClient,
    persistor: localStoragePersistor,
  });
}

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {(process.env.NEXT_PUBLIC_ENVIRONMENT === 'development' || process.env.NEXT_PUBLIC_ENVIRONMENT === 'local') && (
        <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
      )}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/stations" element={<Stations />} />
          <Route path="/station/:id" element={<Station />} />
          <Route path="/error/:code" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
