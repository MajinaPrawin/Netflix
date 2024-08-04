import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";


const App = () => (
  <>
  <h1 className="heading-style">List Of Top Netflix Series</h1>
  {Sdata.map((currVal) => {
    return(
      <Card
      key = {currVal.id}
      imgsrc= {currVal.imgsrc}
      title= {currVal.title}
      sName= {currVal.sName}
      link= {currVal.link}
    />
    );
  })}
  </>
);

export default App;

