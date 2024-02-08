import {
  Box,
  Center,
  GluestackUIProvider,
  HStack,
  Image,
  ScrollView,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import Swiper from 'react-native-swiper';
import { Dimensions } from 'react-native';
import { useEffect } from 'react';
import { useQuery, QueryClientProvider, QueryClient } from '@tanstack/react-query';
import MySwiper from './components/MySwiper';
import LargeView from './components/Card/LargeView';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider config={config}>
        <ScrollView width='100%' flex={1} bg='$backgroundDark900'>
          <HStack width='100%'>
            <Center width='100%' height={350}>
              <MySwiper />
            </Center>
            <VStack bg='red'></VStack>
            <HStack width='100%' bg='$red100' h={1000}></HStack>
          </HStack>
        </ScrollView>
      </GluestackUIProvider>
    </QueryClientProvider>
  );
}
