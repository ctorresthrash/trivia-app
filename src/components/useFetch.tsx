import { useReducer, useEffect, Reducer } from "react";
import fetchReducer, {
  INITIAL_STATE,
  actions,
  FetchState,
} from "../reducers/fetchReducer";
import { ActionWithPayload } from "../types";

export default function useFetch<T>(
  fetchPromise: () => Promise<T>
): FetchState<T | null> {
  const [state, dispatch] = useReducer<
    Reducer<FetchState<T | null>, ActionWithPayload<T | string | null>>
  >(fetchReducer, INITIAL_STATE);

  useEffect(() => {
    dispatch(actions.loading());
    fetchPromise()
      .then((result) => {
        dispatch(actions.success(result));
      })
      .catch((error: Error) => {
        dispatch(actions.error(error.message));
      });
  }, []);

  return state;
}
