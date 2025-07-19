interface GameQuery {
  genreId?: number;
  platformId?: number;
  sort?: string;
  searchText?: string;
}

type GameQueryAction =
  | { type: "SET_GENRE"; payload: number }
  | { type: "SET_PLATFORM"; payload: number }
  | { type: "SET_SORT"; payload: string }
  | { type: "SET_SEARCH"; payload: string }
  | { type: "RESET" };

export const gameQueryReducer = (
  state: GameQuery,
  action: GameQueryAction
): GameQuery => {
  switch (action.type) {
    case "SET_GENRE":
      return { ...state, genreId: action.payload };
    case "SET_PLATFORM":
      return { ...state, platformId: action.payload };
    case "SET_SORT":
      return { ...state, sort: action.payload };
    case "SET_SEARCH":
      return { ...state, searchText: action.payload };
    case "RESET":
      return {};
    default:
      return state;
  }
};
