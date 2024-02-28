import { create } from 'zustand';
import { Webtoon } from '../types';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Store = {
  webtoons: Webtoon[];
  add: (webtoon: Webtoon) => void;
  remove: (webtoon: Webtoon) => void;
};

export const useReadWebtoon = create<Store>()(
  persist(
    (set) => ({
      webtoons: [],
      add: (webtoon) =>
        set((state) => ({
          webtoons: [webtoon, ...state.webtoons.filter((w) => w.webtoonId !== webtoon.webtoonId)],
        })),
      remove: (webtoon) =>
        set((state) => ({
          webtoons: [...state.webtoons.filter((w) => w.webtoonId !== webtoon.webtoonId)],
        })),
    }),
    {
      name: 'read-webtoon',
      storage: createJSONStorage<Store>(() => AsyncStorage),
    }
  )
);
