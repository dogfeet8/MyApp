import { Center, Divider, ScrollView, Spinner, VStack } from '@gluestack-ui/themed';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ArticleResponse, DetailScreenParams } from '../types';
import DetailHeader from '../components/Detail/DetailHeader';
import { useInfiniteQuery } from '@tanstack/react-query';
import ArticleCard from '../components/Detail/ArticleCard';

const fetchWebtoonArticleList = async (titleId: number, page: number) => {
  const res = await fetch(
    `https://comic.naver.com/api/article/list?titleId=${titleId}&page=${page}`
  );
  return res.json();
};

type DetailScreenRouteProp = RouteProp<DetailScreenParams, 'Detail'>;

export default function DetailScreen() {
  const route = useRoute<DetailScreenRouteProp>();
  const titleId = route.params.titleId;

  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery<ArticleResponse>({
    queryKey: ['articleList', titleId],
    queryFn: ({ pageParam }) => fetchWebtoonArticleList(titleId, pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.pageInfo?.totalPages === lastPage.pageInfo?.page || !lastPage.pageInfo
        ? undefined
        : lastPage.pageInfo.page + 1,
  });

  return (
    <ScrollView bg='$backgroundDark900' onMomentumScrollEnd={() => fetchNextPage()}>
      <VStack pb={40}>
        <DetailHeader titleId={titleId} />
        <Divider my='$2' bgColor='$secondary500' />
        {data?.pages.map((page) =>
          page.articleList?.map((article) => <ArticleCard key={article.no} article={article} />)
        )}
      </VStack>
      {isFetchingNextPage && (
        <Center position='absolute' bottom={0} h={30} w='$full'>
          <Spinner color='$secondary300' size='small' />
        </Center>
      )}
    </ScrollView>
  );
}
