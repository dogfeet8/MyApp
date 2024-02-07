import { config } from '@gluestack-ui/config';
import { GluestackUIProvider, Center } from '@gluestack-ui/themed';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import WebToonSwiper from './components/Header/WebToonSwiper';
import { Dimensions } from 'react-native';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider config={config}>
        <Center bg='$black' flex={1} justifyContent='center' alignItems='center'>
          <Center width={Dimensions.get('window').width} height={350}>
            <WebToonSwiper />
          </Center>
        </Center>
      </GluestackUIProvider>
    </QueryClientProvider>
  );
}
