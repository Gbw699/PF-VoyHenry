export default function MailInput({setMailInput}) {

  const handlerOnChange = (event) => {
    setMailInput(event.target.value);
  };

  return (
    <>
      <p>
        Your email:
      </p>
      <input
        onChange={handlerOnChange}
      ></input>

    </>
  );
}