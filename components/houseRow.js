import React, { useContext } from "react";
import currencyFormatter from "../helpers/currencyFormatter";
import {navigationContext} from "./app"
import navValues from "@/helpers/navValues";

// const HouseRow = ({ house: {address, country, price} }) => {
// const HouseRow = ({address, country, price}) => {
const HouseRow = ({house, selectHouse}) => {
  const { navigate } = useContext(navigationContext)

  return (
    //  <tr onClick={() => selectHouse(house)}>
     <tr onClick={() => navigate(navValues.house, house)}>
      <td>{house.address}</td>
      <td>{house.country}</td>
      {house.price && (
        <td className={`${house.price >= 500000 ? "text-primary" : ""}`}>
          {currencyFormatter.format(house.price)}
        </td>
      )}
      {/* <td>{currencyFormatter.format(house.price)}</td> */}
      {/* <td>{price}</td> */}
    </tr>
  );
};

// const HouseRowMem = React.memo(HouseRow);
// Only use when:
// - measured faster with the react dev tool profiler
// - often rerendered often with the same props
// - pure function
// often not worthwhile with simple JSX components as react rendering is highly optimised
// also React.memo only does shallow comparison of props! So can be risky, look at docs.

export default HouseRow;
// export { HouseRowMem }