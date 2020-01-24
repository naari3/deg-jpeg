import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangeQuality, GetStatus } from "../store/status";

const QualitySelector: React.FC = () => {
  const dispatch = useDispatch();

  const status = useSelector(GetStatus);

  return (
    <input
      type="range"
      defaultValue={status.quality}
      min={0.1}
      max={1.0}
      step={0.1}
      onChange={e => {
        const quality = parseFloat(e.target.value);
        dispatch(ChangeQuality({ quality }));
      }}
    />
  );
};

export default QualitySelector;
