export default function InputErrors({pass}) {

  return (
    <>
    {
      pass.length < 8
      && pass !== "" 
      && <p>La contraseña debe tener más de 8 caracteres.</p>
    }
    </>
  );

}