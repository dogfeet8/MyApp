import {
  Button,
  ButtonText,
  HStack,
  Input,
  InputField,
  ScrollView,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { CounterScreensParams, WebtoonResponse } from '../types';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import MediumCard from '../components/Card/MediumCard';

const fetchWebtoons = async (keyword: string) => {
  const res = await fetch(`https://korea-webtoon-api.herokuapp.com/search?keyword=${keyword}`);
  return res.json();
};

export default function SearchScreen() {
  const navigation = useNavigation<NavigationProp<CounterScreensParams>>();
  const [inputText, setInputText] = useState('');
  const [keyword, setKeyword] = useState('');

  const { data } = useQuery<WebtoonResponse>({
    queryKey: ['repoData', keyword],
    queryFn: () => fetchWebtoons(keyword),
    enabled: keyword.length > 1,
  });
  const searchedWebtoons = data?.webtoons || [];

  return (
    <VStack width='$full' height='$full' bg='$backgroundDark900'>
      <HStack gap={10} p={20}>
        <Input variant='outline' size='md' width={150} flex={1}>
          <InputField
            color='$blueGray200'
            value={inputText}
            onChangeText={setInputText}
            onEndEditing={() => setKeyword(inputText)}
          />
        </Input>
        <Button
          size='md'
          variant='solid'
          action='secondary'
          isDisabled={false}
          isFocusVisible={false}
          onPress={() => navigation.goBack()}
        >
          <ButtonText>취소</ButtonText>
        </Button>
      </HStack>
      <ScrollView flex={1} width='$full' bg='$backgroundDark900'>
        <VStack gap={12} px={20}>
          {searchedWebtoons.map((webtoon) => (
            <MediumCard key={webtoon.webtoonId} webtoon={webtoon} />
          ))}
        </VStack>
      </ScrollView>
    </VStack>
  );
}
