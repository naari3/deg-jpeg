import React from "react";
import { useDispatch } from "react-redux";
import { ChangeImageUrl, ChangeFilename } from "../store/status";

const ImageFileLoader: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="ImageFileLoader">
      <input
        type="file"
        onChange={(e) => {
          if (e.target.files === null) return;

          const file = e.target.files[0];
          if (!file.type.includes("image/")) {
            alert("画像しか選択できません");
            e.target.value = "";
            return;
          }

          const url = URL.createObjectURL(file);
          const filename = file.name;

          dispatch(ChangeImageUrl({ url }));
          dispatch(ChangeFilename({ filename }));
        }}
      />
    </div>
  );
};

export default ImageFileLoader;
