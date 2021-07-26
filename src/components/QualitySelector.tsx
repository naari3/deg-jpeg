import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangeQuality, GetStatus } from "../store/status";

const QualitySelector: React.FC = () => {
  const dispatch = useDispatch();
  const status = useSelector(GetStatus);

  const [currentQuality, setCurrentQuality] = useState(status.quality);
  const [previousQuality, setPreviousQuality] = useState(status.quality);

  useEffect(() => {
    // wait for user input completion
    setTimeout(() => {
      if (currentQuality === previousQuality) {
        dispatch(ChangeQuality({ quality: previousQuality }));
      }
      setPreviousQuality(currentQuality);
    }, 200);
  }, [currentQuality, previousQuality, dispatch]);

  return (
    <input
      type="range"
      defaultValue={status.quality}
      min={0.0}
      max={1.0}
      step={0.01}
      onChange={(e) => {
        const currentQuality = parseFloat(e.target.value);
        setCurrentQuality(currentQuality);
      }}
    />
  );
};

export default QualitySelector;
