import { HStack, ScrollView } from '@gluestack-ui/themed';
import { useQuery } from '@tanstack/react-query';
import { WeekDayResponse } from '../../types';
import WeekDayCard from './WeekdayCard';

interface DayListProps {
  type: string;
}

const fetchWebtoons = async (type: string) => {
  const res = await fetch(
    `https://comic.naver.com/api/webtoon/titlelist/weekday?week=${type}&order=user`
  );
  return res.json();
};

const WeekDayList = ({ type }: DayListProps) => {
  const { data, isLoading } = useQuery<WeekDayResponse>({
    queryKey: ['weekday', type],
    queryFn: () => fetchWebtoons(type),
  });

  const webtoons = data?.titleList.slice(0, 15) || [];
  return (
    <ScrollView flex={1} width='$full' h='$full' bg='$backgroundDark900' stickyHeaderIndices={[1]}>
      <HStack flexWrap='wrap'>
        {webtoons.map((webtoon) => (
          <WeekDayCard key={webtoon.titleId} webtoon={webtoon} />
        ))}
      </HStack>
    </ScrollView>
  );
};

export default WeekDayList;
