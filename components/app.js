import React, { useCallback, useState } from "react";
import Banner from "./banner";
import ComponentPicker from "./componentPicker";
import navValues from "@/helpers/navValues";
// import House from "./house";
// import HouseList from "./houseList";
// import HouseList from "./houseList";


const navigationContext = React.createContext(navValues.home);
// Consider that the change in context may trigger many components and their children to re-render
// also it's unclear what is in the state as this can be spread across the application

const App = () => {
  // // const jsx = <div>Hi</div>
  // const [selectedHouse, setSelectedHouse] = useState();

  // const setSelectedHouseWrapper = (house) => {
  //     // do checks on house
  //     // Would this even be need with TypeScript?
  //     setSelectedHouse(house);
      
  //     // Each re-render with recreate this function. Hence triggering re-renders
  //     // when passed to other memoized components or used as a dependency
  //     // useCallback would be a way to ensure this re-uses the same function reference
  //     // only rendered when component is mounted, due to empty array
  //     // however set state methods are handled by react to ensure they are never recreated on render
  //     // hence useCallback should never need to be used for useState functions
  //     // useCallback((house) => {setSelectedHouse(house)}, [])

  // };

  const navigate = useCallback(
    (navTo, param) => setNav({ current: navTo, param, navigate }),
    []
  );

  // It's tempting to pass navigate to the components via the context value object
  //however, that will be recreated on each re-render, hence so will all consuming components
  // better to leave that resoponsibility to the state itself
  const [nav, setNav] = useState({ current: navValues.home, navigate });

  return (
    // Can render jsx via a variable by using an {expression}
    <>
        {/* {jsx} */}
        {/* <Banner headerText="Providing houses all over the world"/> */}
        {/* <Banner headerText="Some other text"/> */}
        <navigationContext.Provider value={nav}>
        <Banner><div>Providing houses all over the world</div></Banner>
        {/* {selectedHouse ? (<House house={selectedHouse} />) : (
            <HouseList selectHouse={setSelectedHouseWrapper} />
        )} */}
        {/* <HouseList /> */}
        {/* Could have used switch instead of component picker */}
        <ComponentPicker currentNavLocation={nav.current} />
        </navigationContext.Provider>
    </>
  );
};

export {navigationContext}
export default App;