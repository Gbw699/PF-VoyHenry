import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function WhereAmI({ setWhereAmI }) {
  const url = useLocation();

  useEffect(() => {
    setWhereAmI(url.pathname);
  }, [url]);

  return <></>;
}
