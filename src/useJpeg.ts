import { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Status, GetStatus, ChangeJpegSet } from "./store/status";

const loadImage = (src: string) => {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = e => reject(e);
    img.src = src;
  });
};

const createJpeg = async (src: string, quality: number) => {
  const canvas = document.createElement("canvas");
  const image = await loadImage(src);
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  const ctx = canvas.getContext("2d");
  ctx?.drawImage(image, 0, 0);
  return canvas.toDataURL("image/jpeg", quality);
};

export const useJpeg = (): [Status, () => Promise<void>, boolean, string] => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const status = useSelector(GetStatus);

  const getJpeg = useCallback(async () => {
    setLoading(true);
    try {
      let dups = 5;
      const d = new URL(window.location.href).searchParams.get("d");
      if (d) {
        dups = parseInt(d) || 5;
      }
      const srces = await Array.from({ length: dups })
        .map(() => "")
        .reduce(async prarr => {
          const arr = await prarr;
          arr.push(await createJpeg(arr.slice(-1)[0], status.quality));
          return arr;
        }, Promise.resolve([status.url]));

      setLoading(false);

      dispatch(ChangeJpegSet({ srces }));
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  }, [status.url, status.quality, dispatch]);

  return [status, getJpeg, loading, error];
};
