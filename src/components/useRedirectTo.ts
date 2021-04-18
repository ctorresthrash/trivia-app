import { redirectTo } from "@reach/router";
import { useEffect } from "react";

export default function (shouldRedirect: boolean, path: string) {
  useEffect(() => {
    if (shouldRedirect) {
      redirectTo(path);
    }
  }, [shouldRedirect, path]);
}
