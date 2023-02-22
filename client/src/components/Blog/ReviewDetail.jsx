export default function ReviewDetail({ blog }) {
  return (
    <div>
      <img
        src={blog.userimage}
        alt="img"
      />
      <h3>{blog.userNickName}</h3>
      <p>{blog.createdAt?.slice(0, 10)}</p>
      <img
        src={blog.image}
        alt=""
      />
      <h4>{blog.title}</h4>
      <p>{blog.content}</p>
      <p>{blog.rating}</p>
      <button onClick={() => history.back()}>Volver</button>
    </div>
  );
}
