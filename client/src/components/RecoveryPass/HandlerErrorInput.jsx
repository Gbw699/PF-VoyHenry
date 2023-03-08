import { useEffect } from "react";
import style from "./MailInput.module.css";
export default function HandlerErrorInput({ email, setIsValidEmail }) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = emailRegex.test(email);

  useEffect(() => {
    setIsValidEmail(isValidEmail);
  }, [email, setIsValidEmail, isValidEmail]);

  return (
    <div className={style.container}>
      {!isValidEmail && <p>Please enter a valid email address.</p>}
    </div>
  );
}
