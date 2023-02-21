import React from "react";

export default function DetailPlan() {

    return (
        <div>
            <div style={{backgroundImage: "url(https://loremflickr.com/640/480/abstract)"}} >
                <h1>Titulo del Plan</h1>
                <h3>Localidad</h3>
                <h3>Fecha</h3>
            </div>
            <div>
                <h1>Creador</h1>
                <p>Título Descripción</p>
                <hr />
                <p>Descripción</p>
            </div>
            <div>
                <h1>Galería</h1>
                <hr />
                <hr />
                <img src="https://loremflickr.com/640/480/abstract" alt="img" />
            </div>
        </div>
    );
}
