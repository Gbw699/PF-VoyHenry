import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getPlanById } from "../../redux/slices/planSlice/thunk";

export default function DetailPlan() {
    const navigate = useNavigate();
    const {id} = useParams();
    const dispatch = useDispatch();
    const plan = useSelector((state)=>state.planStore.planById);

    useEffect(()=>{
       dispatch(getPlanById(id));
    },[]);

    return (
        <div>
            <div style={{backgroundImage: `url(${plan.mainImage})`}} >
                <h1>{plan.title}</h1>
                <h3>Localidad</h3>
                <h3>{plan.eventDate}</h3>
            </div>
            <div>
                <h1>{plan.userNickName}</h1>
                <p>Título Descripción</p>
                <hr />
                <p>{plan.description}</p>
            </div>
            <div>
                <h1>Galería</h1>
                <hr />
                <img src={plan.images} alt={plan.title} />
                <img src={plan.images} alt={plan.title} />
                <img src={plan.images} alt={plan.title} />
                <img src={plan.images} alt={plan.title} />
                <img src={plan.images} alt={plan.title} />
                <img src={plan.images} alt={plan.title} />
                <img src={plan.images} alt={plan.title} />
                <img src={plan.images} alt={plan.title} />
            </div>
            <div>
                <button>Unirse</button>
                <button>Agregar a favoritos</button>
                <button>Dejar reseña</button>
                <button onClick={()=>navigate("/home")}>Volver</button>
            </div>
        </div>
    );

}
