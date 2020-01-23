import React from "react";
import "./App.css";

import Previewer from "./Previewer";
import ImageFileLoader from "./ImageFileLoader";

const App: React.FC = () => {
  return (
    <div className="App">
      <Previewer />
      <ImageFileLoader />
    </div>
  );
};

export default App;
