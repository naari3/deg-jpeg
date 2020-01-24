import React, { useEffect } from "react";
import { Status } from "../store/status";
import { useJpeg } from "../useJpeg";

const Previewer: React.FC = () => {
  const [status, getJpeg] = useJpeg();

  useEffect(() => {
    (getJpeg as Function)();
  }, [getJpeg]);

  return (
    <div className="Previewer">
      {(status as Status).jpegs.map((jpg, i) => {
        return <img src={jpg} alt="" key={i} />;
      })}
    </div>
  );
};

export default Previewer;
