import { HStack, Text, VStack } from '@gluestack-ui/themed';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { ArticleResponse } from '../../types';
import ArticleCard from './ArticleCard';

const fetchWebtoonArticleList = async (titleId: number, page: number) => {
  const res = await fetch(
    `https://comic.naver.com/api/article/list?titleId=${titleId}&page=${page}`
  );
  return res.json();
};

interface ArticleListProps {
  titleId: number;
}

const ArticleList = ({ titleId }: ArticleListProps) => {
  const [page, setPage] = useState(1);
  const { data } = useQuery<ArticleResponse>({
    queryKey: ['webToonDetail', page],
    queryFn: () => fetchWebtoonArticleList(titleId, page),
    enabled: !!titleId,
  });

  const articles = data?.articleList || [];

  return (
    <VStack>
      {articles.map((article) => (
        <ArticleCard key={article.no} article={article} />
      ))}
    </VStack>
  );
};

export default ArticleList;
