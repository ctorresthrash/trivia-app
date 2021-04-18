import { ActionWithPayload } from "../types";

export enum STATUSES {
  idle = "idle",
  loading = "loading",
  error = "error",
  success = "success",
}

export type FetchState<T> = {
  status: STATUSES;
  error?: string;
  data?: T;
};

export enum TYPES {
  loading = "LOADING",
  error = "ERROR",
  success = "SUCCESS",
}

export const INITIAL_STATE: FetchState<null> = {
  status: STATUSES.idle,
  error: undefined,
  data: undefined,
};

export const actions = {
  loading: (): ActionWithPayload<null> => ({
    type: TYPES.loading,
    payload: null,
  }),
  error: (error: string): ActionWithPayload<string> => ({
    type: TYPES.error,
    payload: error,
  }),
  success: <T>(data: T): ActionWithPayload<T> => ({
    type: TYPES.success,
    payload: data,
  }),
};

export default function fetchStateReducer<T>(
  state: FetchState<T>,
  action: ActionWithPayload<string | T>
): FetchState<T | null> {
  switch (action.type) {
    case TYPES.loading: {
      return {
        ...state,
        status: STATUSES.loading,
      };
    }

    case TYPES.error: {
      const payload = action.payload as string;
      return {
        ...state,
        status: STATUSES.error,
        error: payload,
      };
    }

    case TYPES.success: {
      const payload = action.payload as T;
      return {
        ...state,
        status: STATUSES.success,
        data: payload,
      };
    }

    default: {
      return state;
    }
  }
}
