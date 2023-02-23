import { useEffect, useRef } from "react";

export default function UploadWidget({ setUrl }) {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "voyhenry",
        uploadPreset: "qgeyqaqy",
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
      type="button"
      onClick={() => widgetRef.current.open()}
    >
      Agregar imagen
    </button>
  );
}
