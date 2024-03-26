import { HStack, Pressable, Text, VStack } from '@gluestack-ui/themed';
import { Article, DetailScreenParams } from '../../types';
import { Image } from 'expo-image';
import convertUrl from '../../utils/convertUrl';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationProp, useNavigation } from '@react-navigation/native';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  const navigation = useNavigation<NavigationProp<DetailScreenParams>>();
  return (
    <Pressable onPress={() => navigation.navigate('Viewer', { article })}>
      <HStack
        h='$20'
        borderBottomColor='$secondary700'
        borderBottomWidth='$1'
        alignItems='center'
        gap='$4'
      >
        <Image
          contentFit='contain'
          source={{ uri: convertUrl(article.thumbnailUrl) }}
          style={{ width: 106, height: 62, borderRadius: 10 }}
        ></Image>
        <VStack flex={1} gap='$1'>
          <Text size='md' color='$white'>
            {article.subtitle}
          </Text>
          <HStack alignItems='center' gap='$3'>
            <HStack alignItems='center' gap={2}>
              <Icon size={14} name='star-sharp' color='#737373'></Icon>
              <Text size='sm' color='$secondary400'>
                {article.starScore.toFixed(2)}
              </Text>
            </HStack>
            <Text size='sm' color='$secondary400'>
              {article.serviceDateDescription}
            </Text>
          </HStack>
        </VStack>
      </HStack>
    </Pressable>
  );
};

export default ArticleCard;
