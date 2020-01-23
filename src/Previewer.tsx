import React from "react";
import { useSelector } from "react-redux";
import { Jpeg as JpegType, GetJpeg } from "./store/jpeg";

const Previewer: React.FC = () => {
  const jpeg = useSelector(GetJpeg);

  return (
    <div className="Previewer">
      <img src={jpeg.url} alt="" />
    </div>
  );
};

export default Previewer;
