import { config } from '@gluestack-ui/config';
import { GluestackUIProvider, SafeAreaView, StatusBar } from '@gluestack-ui/themed';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ScreensParams, TabScreenParams } from './types';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyScreen from './screens/MyScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import WebtoonDetailScreen from './screens/WebtoonDetailScreen';
import DetailHeader from './components/Header/DetailHeader';

const queryClient = new QueryClient();
const Stack = createStackNavigator<ScreensParams>();
const Tab = createBottomTabNavigator<TabScreenParams>();

const Tabs = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: 'white',
      tabBarActiveBackgroundColor: '#262626',
      tabBarInactiveBackgroundColor: '#262626',
    }}
  >
    <Tab.Screen
      name='webtoon'
      component={HomeScreen}
      options={{
        title: '웹툰',
        tabBarIcon: ({ color, size }) => <Ionicons name='list' size={size} color={color} />,
      }}
    />
    <Tab.Screen
      name='my'
      component={MyScreen}
      options={{
        title: 'MY',
        tabBarIcon: ({ color, size }) => <Ionicons name='happy' size={size} color={color} />,
      }}
    />
  </Tab.Navigator>
);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar barStyle='light-content' />
      <GluestackUIProvider config={config}>
        <SafeAreaView flex={1} bg='$backgroundDark900'>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name='Main' component={Tabs} />
              <Stack.Screen name='Search' component={SearchScreen} />
              <Stack.Screen
                name='Detail'
                component={WebtoonDetailScreen}
                initialParams={{ webtoon: undefined }}
                options={{ header: () => <DetailHeader />, headerShown: true }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </GluestackUIProvider>
    </QueryClientProvider>
  );
}
