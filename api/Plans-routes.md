## 0. `Plans routes`
/api/v1/plans

## 1. `Get`

### 1.1 `All plans`
Para traer todos los planes podemos usar la route 
```
/api/v1/plans
```
Por defecto viene:
  - **Orden Ascendente**
  - **9 por page**

### 1.2 `Pages`

Para traer la page deseada agregamos
```
?page= numero
```
**Ejemplo**
```
/api/v1/plans?page=2
```

Esto nos va a traer la pagina 2

### 1.3 `State`

Para traer los planes por busqueda 'En planeacion', 'En progreso' , 'Finalizado' agregamos
```
?state= estadoBuscado
```
**Ejemplo**
```
/api/v1/plans?state=En%20progreso
```

Esto nos va a traer solo los planes en progreso

### 1.3 `Contains`

Para traer los planes por busqueda de palabra en el titulo
```
?contains= palabraBuscada
```
**Ejemplo**
```
/api/v1/plans?contains=asia
```

Esto nos va a traer solo los planes en progreso

### 1.4 `Order`

Para traer los planes por orden que pueden ser:
  - **alfabetico**
  - **reverso**
  - **antiguos**
  - **masvotados**
  - **menosvotados**
```
?order= orderDeseado
```
**Ejemplo**
```
/api/v1/plans?order=alfabetico
```

Esto nos va a traer orden alfabetico

### 1.5 `Date`

Para traer los planes por fecha:
```
?date= yyyy-mm-dd
```
**Ejemplo**
```
/api/v1/plans?date=2023-12-16
```

Esto nos va a traer planes en ese dia

### 1.6 `Limit`

Para traer los planes modificando la cantidad de planes que queremos ver:
```
?limit= numero
```
**Ejemplo**
```
/api/v1/plans?limit=20
```

Esto nos va a traer planes 20 planes

### 1.7 `Id`

Para traer un solo plan identificado por su id:
```
/:id
```
**Ejemplo**
```
/api/v1/plans/324
```

Esto nos va a traer el plan 324 

## 2. `Post`

### 2.1 `Parametros`

Para poder postear un plan son necesarios:
  - Titulo como: **title**
  - Resumen como: **summary**
  - Descripcion como: **description**
  - Imagen principal como: **mainImage**
  - Imagenes como: **images**
  - Fecha del evento como: **eventDate**
  - Estado como: **state**
  - Nombre de usuario como: **userNickName**

### 2.2 `Requisitos de los parametros`

Cada parametro tiene requisitos diferentes que son:
  - **title** || caracteres minimos 3 - caracteres maximos 15
  - **summary** || hasta 125 caracteres
  - **description** || caracteres minimos 3 - caracteres maximos 255
  - **mainImage** || debe ser una url
  - **images** || debe ser array de imagenes 
  - **state** || pueden ser 'En planeacion', 'En progreso','Finalizado'
  - **eventDate** || debe ser mayor al dia de hoy
  - **userNickName** || caracteres minimos 3 - caracteres maximos 15

## 3. `Patch`

### 3.1 `Parametros de busqueda`

Para buscar el plan a modificar se utilizara la `id`

### 3.2 `Parametros modificables`

Se pueden modificar uno o varios :
  - **title**
  - **summary**
  - **description**
  - **mainImage**
  - **images**
  - **eventDate**
  - **state**

### 3.3 `Voto`

Para buscar el plan a votar se utilizara la `id` seguido de vote

```
/api/v1/plans/:id/votes
```

### 3.4 `Parametros obligatorios`

Se pueden modificar uno o varios :
  - **Planid**
  - **userNickName**
  - **stars**
  - **votes**

## 4. `Delete`

### 4.1 `Parametros de busqueda`

Para buscar el plan a eliminar se utilizara la `id`

