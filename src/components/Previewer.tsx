import React, { useEffect } from "react";
import { Status } from "../store/status";
import { useJpeg } from "../useJpeg";

const Previewer: React.FC = () => {
  const [status, getJpeg, loading] = useJpeg();

  useEffect(() => {
    (getJpeg as Function)();
  }, [getJpeg]);

  return (
    <div className="Previewer">
      <img src={(status as Status).jpegs.slice(-1)[0]} alt="" />
      <p>{loading ? "loading" : "　"}</p>
    </div>
  );
};

export default Previewer;
