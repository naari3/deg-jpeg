import React, { useEffect } from "react";
import { useJpeg } from "../useJpeg";

const Previewer: React.FC = () => {
  const [status, getJpeg, loading] = useJpeg();

  useEffect(() => {
    getJpeg();
  }, [getJpeg]);

  const tmpfilename = status.filename.split(".");
  tmpfilename.splice(-1, 0, `-${status.quality}`);
  const filename = [tmpfilename.slice(0, -1).join(""), "jpg"].join(".");

  const src = status.jpegs.slice(-1)[0];

  return (
    <div className="Previewer">
      <a href={src} download={filename}>
        <img src={src} alt={status.filename} style={{ maxWidth: "100%" }} />
      </a>
      {src ? <p>画像クリックでだうんろーどできます</p> : <></>}
      <p>{loading ? "loading" : "　"}</p>
    </div>
  );
};

export default Previewer;
