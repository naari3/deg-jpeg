import React from "react";
import "./App.css";

import Previewer from "./components/Previewer";
import ImageFileLoader from "./components/ImageFileLoader";
import QualitySelector from "./components/QualitySelector";

const App: React.FC = () => {
  return (
    <div className="App">
      <Previewer />
      <ImageFileLoader />
      <QualitySelector />
    </div>
  );
};

export default App;
