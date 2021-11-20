import React from "react";
import Netflix from "./netflix";
import Prime from "./Prime";

const favSeries = "Prime";

// const FavS = () => {

//   if(favSeries === 'netflix'){
//    return <Netflix/>
//   }else{
//     return <Prime/>
// }
// };

const App =() => (
  <>
  <h1 className="heading_style">List of two 5 Netflix Series in 2020</h1>
  {/* <FavS/>   */}
  
  {favSeries === 'netflix' ? <Netflix/> : <Prime/>}
  
  </>
);

export default App;