import { Link } from "react-router-dom";

export default function PlanCard() {
  return (
    <>
      {/* lado A */}
      <div>
        <img
          src="https://via.placeholder.com/150"
          alt=""
        />
        <h1>Title</h1>
      </div>
      {/* lado B */}
      <Link>
        <div>
          <h1>Title</h1>
          <h2>Location</h2>
          <p>Description</p>
          <p>Detail</p>
        </div>
      </Link>
    </>
  );
}
