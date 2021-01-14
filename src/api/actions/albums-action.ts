import { call, put, take } from "redux-saga/effects";

const api = (url: string) => fetch(url).then((response) => response.json());

export const confirmFetchRequest = () => ({
  type: "CONFIRM_FETCH_ALBUMS",
});

export function* fetchAlbums(action: any) {
  try {
    yield take("CONFIRM_FETCH_ALBUMS");

    // const { normal, custom } = yield race({
    //   normal: call(api, "https://jsonplaceholder.typicode.com/albums"),
    //   custom: call(api, "https://jsonplaceholder.typicode.com/albums"),
    // });
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
