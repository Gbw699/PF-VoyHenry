import PlanCard from "../../recycle/PlanCard/PlanCard";

export default function HomePlansCardList() {
  // este componente dispatchea la action de traer los planes

  return (
    <>
      <h1>Planes Destacados</h1>
      <PlanCard />
      <PlanCard />
      <PlanCard />
      <PlanCard />
      <PlanCard />
      <PlanCard />
    </>
  );
}
