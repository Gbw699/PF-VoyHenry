export default function BlogReview({
  usernickName,
  userimage,
  title,
  image,
  content,
  rating,
}) {
  return (
    <div>
      <img
        src={userimage}
        alt="Imagen de usuario"
      />
      <h3>{usernickName}</h3>
      <img
        src={image}
        alt="Imagen del plan"
      />
      <h4>{title}</h4>
      <p>{content}</p>
      <p>
        Valoración: <span>{rating}</span>
      </p>
    </div>
  );
}
