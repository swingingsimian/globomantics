import React, { useEffect, useState } from "react";
import HouseRow from "./houseRow";
import useHouses from "@/hooks/useHouses";
import LoadingIndicator from "./loadingIndicator";
import loadingStatus from "@/helpers/loadingStatus";

// const houseArray = [
//   {
//     id: 1,
//     address: "12 Valley of Kings, Geneva",
//     country: "Switzerland",
//     price: 900000,
//   },
//   {
//     id: 2,
//     address: "89 Road of Forks, Bern",
//     country: "Switzerland",
//     price: 500000,
//   },
// ];

const HouseList = ({selectHouse}) => {
  // const [houses, setHouses] = useState(houseArray);
  // const [counter, setCounter] = useState(0);
  // setCounter(counter + 1)
  // setCounter(current => counter + 1)

  // const [houses, setHouses] = useState([]);

  // useEffect(() => {
  //   // Use effect cannot work with tht promise return by the await, hence wrapped in async
  //   const fetchHouses = async () => {
  //     const response = await fetch("/api/houses");
  //     const houses = await response.json();
  //     setHouses(houses);
  //   };
  //   fetchHouses();
  //   // can return a function to do clean up once the component is unmounted i.e. unsubscribe from event stream
  // }, []); // dependency array is empty to ensure that it is only run once, hence no infinite loop

  //useMemo for lower order memoization of just the data of an expensive function rather than the whole rendered component
  //again, not always faster as there is overhead

  //useRef to avoid re-renders and infinite loops i.e. for counters

  // remember hooks cannot be called conditionally! 
  const { houses, setHouses, loadingState } = useHouses();

  if (loadingState !== loadingStatus.loaded)
    return <LoadingIndicator loadingState={loadingState} />;

  const addHouse = () => {
    setHouses([
      ...houses,
      {
        id: 3,
        address: "32 Valley Way, New York",
        country: "USA",
        price: 1000000,
      },
    ]);
  };

  // todo add Add button component which also posts to the API for persistence

  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {/* key prop is used for efficient rendering when table is updated i.e. will not have to rerender the whole array */}
          {houses.map((h) => (
            <HouseRow key={h.id} house={h} selectHouse={selectHouse}/>
            //  {...h} />
            // This can be problematic as house maybe extended and end up passing a lot of extra props which may cause performance issues
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addHouse}>
        Add
      </button>
    </>
  );
};

export default HouseList;
