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
};

export interface WebtoonResponse {
  webtoons: Webtoon[];
}
