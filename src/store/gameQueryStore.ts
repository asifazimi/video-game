import { create } from "zustand";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sort?: string;
  searchText?: string;
}
export interface GameQueryStore {
  gameQuery: GameQuery;
  setGenre: (genreId: number) => void;
  setPlatform: (platformId: number) => void;
  setSort: (sort: string) => void;
  setSearch: (searchText: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},

  setGenre: (genreId) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, genreId } })),

  setPlatform: (platformId) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, platformId } })),

  setSort: (sort) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, sort } })),

  setSearch: (searchText) => set(() => ({ gameQuery: { searchText } })),
}));

export default useGameQueryStore;
