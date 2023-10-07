import React, { useState } from "react";
import Form from "./component/Form";
import Weather from "./component/Weather";


function App() {
  const [info,setInfo] = useState([])
  return (
    <div className="App">
      <Form setInfo = {setInfo}/>
      <Weather info={info}/>
    </div>
  );
}

export default App;
