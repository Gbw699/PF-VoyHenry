import React from "react";
import FacundoTombesi from "./FacundoTombesi";
import GabrielBarimboim from "./GabrielBarimboim";
import JulianCastro from "./JulianCastro";
import LienSanchez from "./LienSanchez";
import MarcosParella from "./MarcosParella";
import MatiasVarela from "./MatiasVarela";
import MauricioFonseca from "./MauricioFonseca";
import ThomasLiendo from "./ThomasLiendo";
import style from "./AboutUsSection.module.css";

export default function AboutUsSection() {
  return (
    <div className={style.container}>
      <div className={style.DescriptionOfProyect}>
        <h3>Descripción del proyecto</h3>
        <hr
          width="100%"
          color="#F1E100"
        />
        <p>
          La red social Henry es un espacio virtual creado con el objetivo de
          fomentar la unión y fortalecer la comunidad de personas que comparten
          el nombre Henry. A través de esta plataforma, los usuarios pueden
          organizar viajes, planes y experiencias en conjunto, creando un
          vínculo más fuerte entre ellos y permitiéndoles disfrutar de la
          compañía de otros miembros de la comunidad Henry.
        </p>
        <p>
          Además de facilitar la organización de actividades en grupo, la red
          social Henry también ofrece un espacio para que los usuarios compartan
          sus historias, fotos y pensamientos con otros miembros de la
          comunidad. Esto permite que los usuarios conozcan más a fondo a otros
          Henry de todo el mundo, y creen un sentido de comunidad y pertenencia
          que va más allá de su nombre en común.
        </p>
        <p>
          Otro aspecto importante de la red social Henry es la posibilidad de
          conectarse con otros miembros que comparten intereses y aficiones
          similares. Esto permite que los usuarios formen grupos de interés y
          participen en actividades específicas relacionadas con sus pasatiempos
          favoritos.
        </p>
        <p>
          En resumen, la red social Henry es una herramienta valiosa para
          cualquier persona que comparte el nombre Henry, ya que le brinda la
          oportunidad de conectarse con otros miembros de la comunidad,
          organizar actividades en conjunto y crear una red de amistades y apoyo
          duradera. Si eres un Henry, ¡no dudes en unirte a la comunidad hoy
          mismo!
        </p>
      </div>
      <div className={style.cardContainer}>
        <h3>Desarrolladores</h3>
        <hr
          width="100%"
          color="#F1E100"
        />
        <div className={style.cards}>
          <FacundoTombesi />
          <GabrielBarimboim />
          <JulianCastro />
          <LienSanchez />
          <MarcosParella />
          <MauricioFonseca />
          <MatiasVarela />
          <ThomasLiendo />
        </div>
      </div>
    </div>
  );
}
