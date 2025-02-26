import { useState } from "react";
import "./App.css";
import MyFirstGrid from "./MyFirstGrid";
import MyResponsiveGrid from "./MyResponsiveGrid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <MyFirstGrid></MyFirstGrid>  */}
      <MyResponsiveGrid></MyResponsiveGrid>
    </>
  );
}

export default App;
