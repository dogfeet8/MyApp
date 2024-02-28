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
