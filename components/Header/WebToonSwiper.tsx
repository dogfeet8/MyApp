import Swiper from 'react-native-swiper';
import { Dimensions } from 'react-native';
import { Box } from '@gluestack-ui/themed';
import { useQuery } from '@tanstack/react-query';
import { Webtoon, WebtoonResponse } from '../../types';
import LargeCard from '../Card/LargeCard';

const fetchWebtoons = async () => {
  const res = await fetch('https://korea-webtoon-api.herokuapp.com');
  return res.json();
};

const WebToonSwiper = () => {
  const { data } = useQuery<WebtoonResponse>({
    queryKey: ['repoData'],
    queryFn: fetchWebtoons,
  });

  const swiperWebtoons = data?.webtoons.slice(0, 5) || [];

  return (
    <Box justifyContent='center' alignItems='center'>
      {swiperWebtoons && swiperWebtoons?.length > 0 && (
        <Swiper showsButtons={false} dotColor='#BDBDBD'>
          {swiperWebtoons.map((webtoon) => (
            <LargeCard key={webtoon.webtoonId} webtoon={webtoon} />
          ))}
        </Swiper>
      )}
    </Box>
  );
};

export default WebToonSwiper;
