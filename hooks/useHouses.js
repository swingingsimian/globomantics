import { useEffect, useState } from "react";
// import loadingStatus from "../helpers/loadingStatus";
import useGetRequest from "./useGetRequest";
 
// hooks useful for getting and setting state
// triggering re-renders of the component that uses the hook
// a good way to separate concerns from the component
// and easy re-use
// beware state is isolated for every component, unless the same hook instance is shared between components

const useHouses = () => {
  const [houses, setHouses] = useState([]);
  const { get, loadingState } = useGetRequest("/api/houses");

  // arguable useHouses abstraction is really needed, could also useEffect directly in HouseList
  // This is cleaner and better separation of concerns though

  useEffect(() => {
    const fetchHouses = async () => {
      const houses = await get();
      setHouses(houses);
    };
    fetchHouses();
  }, [get]);

  return { houses, setHouses, loadingState };
};

export default useHouses;
