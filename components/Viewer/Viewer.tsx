import { VStack } from '@gluestack-ui/themed';
import { Article, ViewerResponse } from '../../types';
import { Image } from 'expo-image';
import convertUrl from '../../utils/convertUrl';
import { useQuery } from '@tanstack/react-query';
import { Dimensions } from 'react-native';

const fetchViewer = async (no: number) => {
  return {
    images: Array.from(
      { length: 30 },
      (_, i) =>
        `https://image-comic.pstatic.net/webtoon/602910/485/20240227000333_a7338e666a4549889bbd6bf1428b406b_IMAG01_${
          i + 1
        }.jpg`
    ),
  };
};

const width = Dimensions.get('window').width;

interface ViewerProp {
  article: Article;
}

const Viewer = ({ article }: ViewerProp) => {
  const { data } = useQuery<ViewerResponse>({
    queryKey: ['webtoonViewer'],
    queryFn: () => fetchViewer(article.no),
  });
  const images = data?.images || [];

  return (
    <VStack>
      {images.map((image) => (
        <Image
          key={image}
          contentFit='contain'
          source={{
            uri: convertUrl(image),
          }}
          style={{ width, height: width * 2.3 }}
        ></Image>
      ))}
    </VStack>
  );
};

export default Viewer;
