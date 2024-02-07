import { config } from '@gluestack-ui/config';
import { GluestackUIProvider, Center, SafeAreaView, ScrollView } from '@gluestack-ui/themed';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import WebToonSwiper from './components/Header/WebToonSwiper';
import { Dimensions } from 'react-native';
import WebtoonList from './components/List/WebtoonList';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider config={config}>
        <SafeAreaView flex={1} bg='$backgroundDark950'>
          <ScrollView flex={1} width='$full'>
            <Center width={Dimensions.get('window').width} height={300} px='$5'>
              <WebToonSwiper />
            </Center>
            <WebtoonList />
          </ScrollView>
        </SafeAreaView>
      </GluestackUIProvider>
    </QueryClientProvider>
  );
}
