import React from "react";
import Button from "./Button.jsx";

function App() {
  return (
    <>
      <h2> Button Types </h2>
      <Button text="solid" />
      <Button text="outlined" type="outlined" />
      <Button text="flat" type="flat" />

      <h2> Button Sizes </h2>
      <Button text="large" size="lg" icon />
      <Button text="medium" />
      <Button text="small" size="sm" />

      <h2> Button With Icons </h2>
      
      <Button size="lg" type="flat" text="Sample Text" icon />
      <Button size="lg" text="Sample Text" icon />
      <Button size="md" text="outlined small" icon />
      <Button size="md" type="outlined" text="Sample Text" icon />
      
      <Button />
    </>
  );
}

export default App;
