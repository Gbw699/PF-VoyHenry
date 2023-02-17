//Componete que renderiza la información de un usuario, disitnto al usuario que ingresó a la página

export default function UserCard({ nickName, image }) {
  return (
    <div>
      <img
        src={image}
        alt="img"
      />
      <h1>{nickName}</h1>
      <h4>Nacionalidad</h4>
      <p>Siguiendo</p>
      <span>312</span>
      <p>Seguidores</p>
      <span>432</span>
    </div>
  );
}
