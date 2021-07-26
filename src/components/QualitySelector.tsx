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
    <>
      <input
        type="range"
        value={currentQuality}
        min={1}
        max={100}
        step={1}
        style={{ width: "300px" }}
        onChange={(e) => {
          const currentQuality = parseFloat(e.target.value);
          setCurrentQuality(currentQuality);
        }}
      />
      <input
        type="number"
        value={currentQuality}
        min={1}
        max={100}
        step={1}
        onChange={(e) => {
          const currentQuality = parseFloat(e.target.value);
          setCurrentQuality(currentQuality);
        }}
      />
    </>
  );
};

export default QualitySelector;
