export interface Webtoon {
  webtoonId: string;
  title: string;
  img: string;
  author: string;
  fanCount: number;
}

export type CounterScreensParams = {
  Counter: undefined;
  ScreenOne: undefined;
  ScreenTwo: undefined;
  ScreenThree: undefined;
};

export type ScreensParams = {
  Main: undefined;
  Search: undefined;
  Detail: { webtoon?: Webtoon };
};

export type TabScreenParams = {
  webtoon: undefined;
  my: undefined;
};

export interface WebtoonResponse {
  webtoons: Webtoon[];
}

// 네이버 웹툰 tripleRecommend
export interface TripleResponse {
  itemList: TripleWebtoon[];
}

export interface Author {
  id: number;
  name: string;
  blogUrl?: string;
}

export interface TripleWebtoon {
  titleId: number;
  no: number;
  title: string;
  displayAuthor: string;
  writers: Author[];
  painters: Author[];
  novelOriginAuthors: Author[];
  summary: string;
  starScore: number;
  bgImage: string;
  backImage: string;
  frontImage: string;
  bgColor: string;
  bm: boolean;
  adult: boolean;
  rating: boolean;
  up: boolean;
  rest: boolean;
  new: boolean;
}

export interface WeekDayResponse {
  titleList: WeekdayWebtoon[];
}

export interface WeekdayWebtoon {
  titleId: number;
  titleName: string;
  author: string;
  writers: Author[];
  painters: Author[];
  novelOriginAuthors: Author[];
  thumbnailUrl: string;
  up: boolean;
  rest: boolean;
  bm: boolean;
  adult: boolean;
  starScore: number;
  viewCount: number;
  openToday: boolean;
  potenUp: boolean;
  bestChallengeLevelUp: boolean;
  finish: boolean;
  new: boolean;
}
