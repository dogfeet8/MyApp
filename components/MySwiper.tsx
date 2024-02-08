import Swiper from 'react-native-swiper';
import { useQuery } from '@tanstack/react-query';
import { Webtoon } from '../types';
import LargeView from './Card/LargeView';

interface WebtoonResponse {
  webtoons: Webtoon[];
}

const fetchWebtoons = async () => {
  const res = await fetch('https://korea-webtoon-api.herokuapp.com');
  return res.json();
};

export default function MySwiper() {
  const { data } = useQuery<WebtoonResponse>({
    queryKey: ['korea-webtoon-api.herokuapp.com'],
    queryFn: fetchWebtoons,
  });

  return (
    <Swiper>{data ? data.webtoons.map((webtoon) => <LargeView webtoon={webtoon} />) : []}</Swiper>
  );
}
