export default function ReviewDetail({ blog }) {
    console.log(blog);
  return (
    <div>
      <img src={blog.userImage} alt="img" />
    </div>
  );
}
