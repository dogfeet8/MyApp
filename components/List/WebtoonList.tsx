import { StarIcon, HStack, Icon, Image, Text, VStack } from '@gluestack-ui/themed';
import { Webtoon } from '../../types';
import { useQuery } from '@tanstack/react-query';

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
    <VStack gap='$2' px='$3' mt='$5'>
      {data &&
        data.webtoons.map((webtoon) => (
          <HStack borderWidth='$1' borderColor='$backgroundLight700'>
            <Image
              bg='$backgroundLight700'
              alt={webtoon.title}
              size='xl'
              source={{
                uri: webtoon.img,
              }}
            />
            <VStack justifyContent='center' pl='$5' gap='$1'>
              <Text color='$blueGray50' size='md' bold={true}>
                {webtoon.title}
              </Text>
              <Text color='$blueGray300' size='sm' bold={true}>
                {webtoon.author}
              </Text>
              <HStack gap='$1'>
                <Icon
                  as={StarIcon}
                  size='sm'
                  color='$yellow500'
                  fill='$yellow300'
                  mt='$0.5'
                  ml='$0.5'
                  $dark-color='$primary300'
                />
                <Text color='$blueGray300' size='sm' bold={true}>
                  {webtoon.fanCount}
                </Text>
              </HStack>
            </VStack>
          </HStack>
        ))}
    </VStack>
  );
};

export default WebtoonList;
