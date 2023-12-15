import { useCallback, useState } from "react";
import loadingStatus from "../helpers/loadingStatus";

const useGetRequest = (url) => {
  const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);


  // useCallback with url dependency is required here to stop redefinition of 
  // get function triggering infinite rerenders
  // as it is used as a dependency high up the component tree

  const get = useCallback(async () => {
    setLoadingState(loadingStatus.isLoading);
    try {
      const rsp = await fetch(url);
      const result = await rsp.json();
      setLoadingState(loadingStatus.loaded);
      return result;
    } catch {
      setLoadingState(loadingStatus.hasErrored);
    }
  }, [url]);
  return { get, loadingState };
};

export default useGetRequest;
