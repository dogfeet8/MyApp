import { Center, ScrollView, Text, VStack } from '@gluestack-ui/themed';
import { RouteProp, useRoute } from '@react-navigation/native';
import { DetailScreenParams } from '../types';
import Viewer from '../components/Viewer/Viewer';

type DetailScreenRouteProp = RouteProp<DetailScreenParams, 'Viewer'>;

export default function WebtoonViewScreen() {
  const route = useRoute<DetailScreenRouteProp>();
  const article = route.params.article;
  return (
    <ScrollView bg='$backgroundDark900'>
      <Viewer article={article} />
    </ScrollView>
  );
}
