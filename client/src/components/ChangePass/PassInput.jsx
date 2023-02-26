export default function PassInput({ tittle, set, value, pass }) {
  const handlerOnChange = (event) => {
    set({ ...pass, [value]: event.target.value });
  };

  return (
    <>
      <p>{tittle}</p>

      <input
        type="password"
        onChange={handlerOnChange}
      ></input>
    </>
  );
}
