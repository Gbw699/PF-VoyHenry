import { useState } from "react";
import AxiosPlans from "./AxiosPlans";
import PlansGrid from "./PlansGrid";
import CreatePlanForm from "./CreatePlanForm";
import EditPlanForm from "./EditPlanForm";

export default function AdminPlans() {
  const [plans, setPlans] = useState([]);
  const [plansInfo, setPlansInfo] = useState({});
  const [createRecord, setCreateRecord] = useState(false);
  const [editRecord, setEditRecord] = useState(false);
  const [reRender, setReRender] = useState(false);

  return (
    <>
      <AxiosPlans
        setPlans={setPlans}
        reRender={reRender}
      />
      {!createRecord && !editRecord && (
        <PlansGrid
          plans={plans}
          reRender={reRender}
          setPlansInfo={setPlansInfo}
          setReRender={setReRender}
          setCreateRecord={setCreateRecord}
          setEditRecord={setEditRecord}
        />
      )}
      {createRecord && (
        <CreatePlanForm
          reRender={reRender}
          setReRender={setReRender}
          setCreateRecord={setCreateRecord}
        />
      )}
      {editRecord && (
        <EditPlanForm
          plansInfo={plansInfo}
          setPlansInfo={setPlansInfo}
          reRender={reRender}
          setReRender={setReRender}
          setEditRecord={setEditRecord}
        />
      )}
    </>
  );
}
