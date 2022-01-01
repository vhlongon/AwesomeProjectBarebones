import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import RootNavigation from './navigation/RootNavigation';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RootNavigation />
    </QueryClientProvider>
  );
};

export default App;
