import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import Main from './ui/main/Main';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Personal from './ui/Personal/Personal';
import HomePage from './ui/pages/HomePage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const query:QueryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:false
    }
  }
});

const router = createBrowserRouter([
   {
     path:"/",
     element:<HomePage />,
     children:[
        {
          index:true,
          element:<Main />
        },
        {
          path:"/:id",
          element:<Personal />
        }
     ]
   }
])
function App():JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={query}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default App
