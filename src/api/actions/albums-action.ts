import { call, put } from "redux-saga/effects";

const api = (url: string) => fetch(url).then((response) => response.json());

export function* fetchAlbums(action: any) {
  try {
    const albums = yield call(
      api,
      "https://jsonplaceholder.typicode.com/albums"
    );

    yield put({ type: "SET_ALBUMS", albums: albums });
  } catch (error) {
    console.log(error);
  }
}

export const getAlbums = () => ({
  type: "GET_ALBUMS",
});
