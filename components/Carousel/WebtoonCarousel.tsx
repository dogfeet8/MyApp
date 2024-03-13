import { Box } from '@gluestack-ui/themed';
import { useQuery } from '@tanstack/react-query';
import Swiper from 'react-native-swiper';
import { TripleResponse } from '../../types';
import CarouselCard from './CarouselCard';

const fetchWebtoons = async () => {
  const res = await fetch(
    'https://comic.naver.com/api/tripleRecommend?week=undefined&tag=false&sortByUpdate=false'
  );
  return res.json();
};

const WebtoonCarousel = () => {
  const { data } = useQuery<TripleResponse>({
    queryKey: ['tripleWebtoon'],
    queryFn: fetchWebtoons,
  });

  const webtoons = data?.itemList || [];

  return (
    <Box justifyContent='center'>
      {webtoons.length > 0 && (
        <Swiper showsButtons={false} dotColor='#BDBDBD'>
          {webtoons.map((webtoon) => (
            <CarouselCard key={webtoon.titleId} webtoon={webtoon} />
          ))}
        </Swiper>
      )}
    </Box>
  );
};

export default WebtoonCarousel;
