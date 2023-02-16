import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";


export default function PlanCard(props) {

  return (
    <Card>
      <CardContent>
        <img
          src={props.mainImage}
          alt={props.title}
        />
        <h1>{props.title}</h1>
        <p>{props.eventDate}</p>
        <p>Location?</p>
      </CardContent>
      <Link>
        <CardContent>
          <h1>{props.title}</h1>
          <p>{props.summary}</p>
          <p>{props.eventDate}</p>
          <p>Detail</p>
        </CardContent>
      </Link>
    </Card>
  );
}
