import { Divider, ScrollView, Text, VStack } from '@gluestack-ui/themed';
import { RouteProp, useRoute } from '@react-navigation/native';
import { DetailScreenParams } from '../types';
import DetailHeader from '../components/Detail/DetailHeader';
import ArticleList from '../components/Detail/ArticleList';

type DetailScreenRouteProp = RouteProp<DetailScreenParams, 'Detail'>;

export default function DetailScreen() {
  const route = useRoute<DetailScreenRouteProp>();
  const titleId = route.params.titleId;

  return (
    <ScrollView bg='$backgroundDark900'>
      <VStack>
        <DetailHeader titleId={titleId} />
        <Divider my='$2' bgColor='$secondary500' />
        <ArticleList titleId={titleId} />
      </VStack>
    </ScrollView>
  );
}
