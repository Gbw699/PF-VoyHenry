import { Link } from "react-router-dom";

export default function PlanCard(props) {

  return (
    <>
      <div>
        <img
          src={props.mainImage}
          alt={props.title}
        />
        <h1>{props.title}</h1>
        <p>{props.eventDate}</p>
        <p>Location?</p>
      </div>
      <Link>
        <div>
          <h1>{props.title}</h1>
          <p>{props.summary}</p>
          <p>{props.eventDate}</p>
          <p>Detail</p>
        </div>
      </Link>
    </>
  );
}
