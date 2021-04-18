import { User } from "../types";
import { redirectTo } from "@reach/router";
import { useContext, useLayoutEffect } from "react";
import { UserContext } from "../context/UserContext";

const useAuthRedirect: Function = (
  predicate: (user?: User) => Boolean,
  path: string
) => {
  const [state] = useContext(UserContext);

  useLayoutEffect(() => {
    if (predicate(state.user)) {
      redirectTo(path);
    }
  }, [state.user, path]);
};

export default useAuthRedirect;
