import { Center, ScrollView, Text, VStack } from '@gluestack-ui/themed';
import { useReadWebtoon } from '../hooks/useReadWebtoon';
import MediumCard from '../components/Card/MediumCard';

export default function MyScreen() {
  const { webtoons, remove } = useReadWebtoon();
  return (
    <VStack flex={1} width='$full' height='$full' bg='$backgroundDark900'>
      <Text color='$white' padding={20}>
        내가 보고 있는 웹툰
      </Text>
      {webtoons.length > 0 ? (
        <ScrollView flex={1} width='$full' height='$full' bg='$backgroundDark900'>
          <VStack gap={12} px={20}>
            {webtoons.map((webtoon) => (
              <MediumCard
                key={webtoon.webtoonId}
                webtoon={webtoon}
                showCloseButton
                onPressClose={() => remove(webtoon)}
              />
            ))}
          </VStack>
        </ScrollView>
      ) : (
        <Center flex={1}>
          <Text color='$white' padding={20}>
            현재 보고있는 웹툰이 없습니다.
          </Text>
        </Center>
      )}
    </VStack>
  );
}
