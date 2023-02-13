# 0. `Coding Format`

## 1 `Ident Style, Ident size`

Todo lo relacionado con las **Ident** sera formateado automaticamente con la extencion **.editorconfig**

En el proyecto se usara un **Ident Style** de **Space**. Este mismo sera de un **Ident Size** de **DOS Spaces**.

## 2 `Variables`

### 2.1 `Declaración de variables`

El nombre de las variables sera escrito en **camelCase** y en **Ingles**.

### 2.2 `Nombre de las variables`

Las variables tendran que ser escritas de la forma más descriptiva posible y abreviaba posible.

### 2.3 `Espaciado entre variables`

Las variables solo seran espaciadas SOLO si visualmente son declaradas de forma distintas.

Ejemplo:

```javascript
const shortGreeting = "Hola";
const shortFarewell = "Chau";
const extendedFarewell = "Chau, nos vemos mañana";

const { userName, userId, userActive } = {};
const { adminName, adminId, adminActive } = {};
const { pageName, pageId, pageActive } = {};

const [show, setShow] = useState(true);
const [active, setActive] = useState(true);
const [status, setStatus] = useState(true);
```

## 3 `Funciones`

### 3.1 `Tipo de funcion`

Siempre y cuando el bindeo no sea un problema se usaran funciones de tipo **Arrow**

### 3.2 `Espaciado dentro de la funcion`

Se espaciara una funcion (Antes y despues) de la primera linea y en la ultima, y se aplicara el **Espaciado entre variables (2.3)**

```javascript
const arrowFunction = () => {
  console.log("Hola");
};
```

### 3.3 `Espaciado en funciones anidadas`

En las funciones anidadas no habrá espaciado.

```javascript
const exampleFunction = () => {
  greet(shortGreeting);
  sayFarewell(extendedFarewell);
};
```

## 4 `Organización de React`

### 4.1 `Carpetas`

La organización de carpetas, sera la siguiente, **Una carpeta principal de components**, una carpeta de **views** donde se encontrar el componente principal que se renderiza, una carpeta por cada componete principal con el nombre de este mismo donde se guardaran los **Componentes hijos**, y por ultímo una carpeta llamada **Recycling** que sera para componentes reciclados, o sea, componentes que se usen en distintos **Componentes principales**.

Ejemplo:

![](./src/Assets/CodingFormatAssets/React_Folders.png)

### 4.2 `Componentes`

Se usaran componentes funcionales en el proyecto.

#### 4.2.1 `Componentes principales`

Los componentes principales, o sea, los que van el la carpeta _views_ son componentes que no tienen que tener NADA de logica, solamente es para mostrar y ordenar los componentes hijos.

#### 4.2.2 `Espaciado y sintaxis de nuestros componentes`

Los componentes se declararan como funciones normales, y se exportaran desde la misma linea en donde se declara.

Así se debería ver un componente apenas se crea:

```javascript
export default function ExampleComponent() {
  return <></>;
}
```

### 4.2.3 `Organización de etiquetas y espaciado`

Cada elemento debera tener **siempre** una etiqueta de cierre y de apertura, estas mismas seran abiertas y cerradas en lineas distintas, y estaran espaciadas antes y despues.

Ejemplo:

```javascript
export default function ExampleComponent() {
  return (
    <>
      <h1>Soy un primer titulo</h1>

      <p>Soy un parrafo</p>
    </>
  );
}
```

### 4.2.4 `Como pasar propiedades y como recibirlas`

Al momento de pasar propiedades a un componente cada propieda debera estar en una linea distinta.

Y al momento de que un componente reciba propiedades este mismo las desestructurara en las propiedades de la función.

Ejemplo:

```javascript
// componente que pasa propiedades

export default function FirstComponent() {

  return (
    <>

      <SecondComponent
        textH1="Hola"
        textH2="¿Como estas?"
        textP="Nos vemos!"
      >
      </SecondComponent>

    </>
  );

}

// Componente que recibe propiedades

export default function SecondComponent({ textH1, textH2, textP }) {

  return (
    <>

      <h1>
        {textH1}
      </h1>

      <h2>
        {textH2}
      </h2>

      <p>
        {textP}
      </p>

    </>
  );

}
```

### 4.2.4 `Logica dentro del componente y cuando crear uno nuevo`

Cada componente tendra la tarea de tener una **"Sola logica"**, o sea, que si un componente maneja estados, que solo maneje estados.

A continuación se dara el ejemplo de un componente mal hecho y varias componentes bien hechos.

Primer Ejemplo:

```javascript
// Ejemplo INCORRECTO de componente que contiene más de una logica

export default function BadlyOrganizedComponent () {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = event => {

    setName(event.target.value);

  };

  const handleEmailChange = event => {

    setEmail(event.target.value);

  };

  return (
    <>

      <input
        type="text"
        value={name}
        onChange={handleNameChange}
      >
      </input>

      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
      >
      </input>


    </div>
  );

};
```

Segúndo ejemplo:

```javascript
// Ejemplo CORRECTO con componentes que cada uno hace una sola logica

// Name Input component

export default function NameInput({ name, setName }) {

  const handleNameChange = event => {

    setName(event.target.value);

  };

  return (
    <>

      <input
        type="text"
        value={name}
        onChange={handleNameChange}
      >
      </input>

    </>
  );

}

// email Input Component

export default function EmailInput({ email, setEmail }) {

  const handleEmailChange = event => {

    setEmail(event.target.value);

  };

  return (
    <>

      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
      >
      </input>

    </>
  );

}

// Componente que maneja SOLO estados

export default function BetterOrganizedComponent() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>

      <NameInput
        name={name}
        setName={setName}
      >
      </NameInput>

      <EmailInput
        email={email}
        setEmail={setEmail}
      >
      </EmailInput>

    </>
  );

}
```
