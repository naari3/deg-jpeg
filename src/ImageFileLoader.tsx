import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Jpeg as JpegType, ChangeImageUrl, GetJpeg } from "./store/jpeg";

const ImageFileLoader: React.FC = () => {
  const dispatch = useDispatch();

  const jpeg = useSelector(GetJpeg);

  return (
    <div className="ImageFileLoader">
      <input
        type="file"
        onChange={e => {
          if (e.target.files === null) return;

          const file = e.target.files[0];
          const url = URL.createObjectURL(file);

          dispatch(ChangeImageUrl({ url }));
        }}
      />
    </div>
  );
};

export default ImageFileLoader;
