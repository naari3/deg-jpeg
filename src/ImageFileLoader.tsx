import React, { useState } from "react";

const ImageFileLoader: React.FC = () => {
  const [imgSrc, setImgSrc] = useState("");

  return (
    <div className="ImageFileLoader">
      <img src={imgSrc} alt="" />
      <input
        type="file"
        onChange={e => {
          if (e.target.files === null) return;

          const file = e.target.files[0];
          setImgSrc(URL.createObjectURL(file));
        }}
      />
    </div>
  );
};

export default ImageFileLoader;
