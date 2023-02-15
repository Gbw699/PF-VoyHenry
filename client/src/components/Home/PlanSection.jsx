export default function PlanSection(props) {
    return (
            <div>
                <h1>{props.title}</h1>
                <img
                    src={props.mainImage}
                    alt={props.title}
                />
            </div>
    );
}
