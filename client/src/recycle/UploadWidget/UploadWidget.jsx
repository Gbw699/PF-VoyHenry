import { useEffect, useRef } from "react";
import style from "./UploadWidget.module.css";

export default function UploadWidget({ setUrl }) {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "voyhenrydb",
        uploadPreset: "tapjvy8a",
      },
      function (error, result) {
        if (!error && result && result.event === "success") {
          setUrl(result.info.url);
        }
      }
    );
  }, []);

  return (
    <button
      className={style.image}
      type="button"
      onClick={() => widgetRef.current.open()}
    >
      Agregar imagen
    </button>
  );
}
