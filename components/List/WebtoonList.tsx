import { StarIcon, HStack, Icon, Image, Text, VStack } from '@gluestack-ui/themed';
import { Webtoon } from '../../types';
import { useQuery } from '@tanstack/react-query';
import MediumCard from '../Card/MediumCard';

interface WebtoonResponse {
  webtoons: Webtoon[];
}

const fetchWebtoons = async () => {
  const res = await fetch('https://korea-webtoon-api.herokuapp.com');
  return res.json();
};

const WebtoonList = () => {
  const { data } = useQuery<WebtoonResponse>({
    queryKey: ['repoData'],
    queryFn: fetchWebtoons,
  });
  return (
    <VStack gap='$2' px='$3' mt='$5' mb={10}>
      {data &&
        data.webtoons.map((webtoon) => <MediumCard key={webtoon.webtoonId} webtoon={webtoon} />)}
    </VStack>
  );
};

export default WebtoonList;
