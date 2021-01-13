import { takeLatest } from "redux-saga/effects";
import { fetchAlbums } from "../actions/albums-action";

export default function* mySaga() {
  yield takeLatest("GET_ALBUMS", fetchAlbums);
}
