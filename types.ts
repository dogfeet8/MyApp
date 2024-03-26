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

export type DetailScreenParams = {
  Main: undefined;
  Detail: { titleId: number };
  Viewer: { article: Article };
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
  subTitle: string;
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

export interface Artist {
  artistId: number;
  name: string;
  artistTypeList: string[];
  curationPageUrl: string;
}

export interface Tag {
  id: number;
  tagName: string;
  urlPath: string;
  curationType: string;
}

export interface WebtoonDetail {
  titleId: number;
  thumbnailUrl: string;
  posterThumbnailUrl: string;
  sharedThumbnailUrl: string;
  titleName: string;
  contentsNo: number;
  webtoonLevelCode: string;
  rest: boolean;
  finished: boolean;
  dailyPass: boolean;
  publishDayOfWeekList: string[];
  chargeBestChallenge: boolean;
  communityArtists: Artist[];
  synopsis: string;
  favorite: boolean;
  favoriteCount: number;
  age: {
    type: string;
    description: string;
  };
  publishDescription: string;
  curationTagList: Tag[];
  thumbnailBadgeList: [];
  gfpAdCustomParam: {
    titleId: number;
    webtoonLevelCode: string;
    titleName: string;
    displayAuthor: string;
    cpid: string;
    cpName: string;
    genreTypes: string;
    rankGenreTypes: string;
    tags: string[];
    weekdays: string[];
    finishedYn: string;
    adultYn: string;
    dailyPlusYn: string;
    dailyFreeYn: string;
  };
  new: false;
}

export interface Article {
  no: number;
  thumbnailUrl: string;
  subtitle: string;
  starScore: number;
  bgm: boolean;
  up: boolean;
  charge: boolean;
  serviceDateDescription: string;
  volumeNo: number;
  hasReadLog: boolean;
  recentlyReadLog: boolean;
  thumbnailClock: boolean;
  thumbnailLock: boolean;
}

export interface ArticleResponse {
  titleId: number;
  webtoonLevelCode: string;
  totalCount: number;
  contentsNo: number;
  finished: boolean;
  dailyPass: boolean;
  chargeBestChallenge: boolean;
  articleList?: Article[];
  chargeFolderArticleList: Article[];
  chargeFolderUp: boolean;
  pageInfo?: {
    totalRows: number;
    pageSize: number;
    indexSize: number;
    page: number;
    endRowNum: number;
    rawPage: number;
    totalPages: number;
    startRowNum: number;
    lastPage: number;
    firstPage: number;
    prevPage: number;
    nextPage: number;
  };
  sort: string;
}

export interface ViewerResponse {
  images: string[];
}
