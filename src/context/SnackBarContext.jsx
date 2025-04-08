// import React, { createContext, useContext, useState } from "react";

// const SnackBarContext = createContext();

// export const SnackBarProvider = ({ children }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   const showSnackBar = () => {
//     setIsVisible(true);
//     setTimeout(() => {
//       setIsVisible(false);
//     }, 3000); /
//   };

//   return (
//     <SnackBarContext.Provider value={{ isVisible, showSnackBar }}>
//       {children}
//     </SnackBarContext.Provider>
//   );
// };

// export const useSnackBar = () => {
//   return useContext(SnackBarContext);
// };
