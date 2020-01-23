import React, { useState } from "react";

const ImageFileLoader: React.FC = () => {
  const [, setImgSrc] = useState("");

  return (
    <div className="ImageFileLoader">
      <input
        type="file"
        onChange={e => {
          if (e.target.files === null) return;

          const file = e.target.files[0];
          const src = URL.createObjectURL(file);
          setImgSrc(src);
        }}
      />
    </div>
  );
};

export default ImageFileLoader;
