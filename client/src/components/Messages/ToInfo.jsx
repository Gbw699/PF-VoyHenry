import style from "./ToInfo.module.css"

export default function ToInfo({ to }) {

  return (
    <div
      className={style.container}
    >
      <img 
        src={to.image}
        className={style.img}
      />
      <h4
        className={style.name}
      >
        {to.fullName}
      </h4>
    </div>
  );

}