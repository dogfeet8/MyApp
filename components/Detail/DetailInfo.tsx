import { HStack, Pressable, Text } from '@gluestack-ui/themed';
import { WebtoonDetail } from '../../types';
import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';

interface DetailHeaderProps {
  webtoonDetail: WebtoonDetail;
}

const DetailInfo = ({ webtoonDetail }: DetailHeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HStack>
      {isOpen ? (
        <Text flex={1} key={'up'} color='$secondary400' isTruncated={!isOpen}>
          {webtoonDetail.synopsis}
        </Text>
      ) : (
        <Text key='down' flex={1} color='$secondary400' isTruncated={!isOpen}>
          {webtoonDetail.synopsis.substring(0, 40)}
        </Text>
      )}
      <Pressable onPress={() => setIsOpen(!isOpen)} w={40}>
        <Icon
          size={20}
          name={isOpen ? 'chevron-up-outline' : 'chevron-down-outline'}
          color='#737373'
        ></Icon>
      </Pressable>
    </HStack>
  );
};

export default DetailInfo;
