import { useEffect, useRef } from "react";

export default function UploadWidget({ setUrl }) {
  const cloudinaryRef = useRef();
  console.log(cloudinaryRef);
  const widgetRef = useRef();
  console.log(widgetRef);

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
    <button type="button" onClick={() => widgetRef.current.open()}>Agregar imagen</button>
  );
}
