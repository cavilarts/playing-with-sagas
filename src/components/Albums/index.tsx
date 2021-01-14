import { useDispatch, useSelector } from "react-redux";
import {
  confirmFetchRequest,
  getAlbums,
} from "../../api/actions/albums-action";

import { albumState } from "../../api/reducers/albums-reducer";

const Albums = () => {
  const dispatch = useDispatch();
  const { loading, albums, error } = useSelector((state: any) => ({
    ...state.albumsReducer,
  }));

  return (
    <div>
      <button
        onClick={() => {
          dispatch(getAlbums());
          setTimeout(() => {
            dispatch(confirmFetchRequest());
          }, 2000);
        }}
      >
        Load Albums
      </button>
      {loading ? "Loading..." : ""}
      {albums ? (
        albums.map((x: albumState, i: number) => <p>{x.title}</p>)
      ) : (
        <></>
      )}
      {error ? error : ""}
    </div>
  );
};

export default Albums;
