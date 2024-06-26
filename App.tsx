import { config } from '@gluestack-ui/config';
import { GluestackUIProvider, SafeAreaView, StatusBar, View } from '@gluestack-ui/themed';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { DetailScreenParams, ScreensParams, TabScreenParams } from './types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyScreen from './screens/MyScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import WebtoonScreen from './screens/WebtoonScreen';
import DetailScreen from './screens/DetailScreen';
import Header from './components/Detail/Header';
import WebtoonViewScreen from './screens/WebtoonViewScreen';

const queryClient = new QueryClient();
const Stack = createStackNavigator<DetailScreenParams>();
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
      component={WebtoonScreen}
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
        <View flex={1} bg='$backgroundDark900'>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name='Main' component={Tabs} />
              <Stack.Screen
                name='Detail'
                component={DetailScreen}
                options={{ headerShown: true, header: () => <Header color='white' /> }}
              />
              <Stack.Screen
                name='Viewer'
                component={WebtoonViewScreen}
                options={{ headerShown: true, header: () => <Header color='$secondary600' /> }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
        <SafeAreaView bg='$backgroundDark900' />
      </GluestackUIProvider>
    </QueryClientProvider>
  );
}
