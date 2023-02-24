import { useEffect } from "react";

export default function HandlerErrorInput({ email, setIsValidEmail }) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = emailRegex.test(email);

  useEffect(() => {
    setIsValidEmail(isValidEmail);
  }, [email, setIsValidEmail, isValidEmail]);
  
  return (
    <>
      {
        !isValidEmail 
        && <p>Please enter a valid email address.</p>
      }
      </>
    );
  }