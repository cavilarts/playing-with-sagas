export interface albumsState {
  type: string;
  loading: boolean;
  albums: albumState[];
  error: boolean | null;
}

export interface albumState {
  userId: number;
  id: number;
  title: string;
}

const defaultState = {
  loading: false,
  albums: [],
  error: null,
};

export function albumsReducer(state = defaultState, action: albumsState) {
  switch (action.type) {
    case "GET_ALBUMS":
      return { ...state, loading: true };
    case "ALBUMS_ERROR":
      return { ...state, loading: false, error: true };
    case "SET_ALBUMS":
      return { ...state, loading: false, albums: action.albums };
    default:
      return { ...state };
  }
}
