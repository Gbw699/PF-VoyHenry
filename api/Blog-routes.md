## 0. `Blogs routes`
/api/v1/blogs

## 1. `Get`

### 1.1 `All blogs`
Para traer todos los blogs podemos usar la route 
```
/api/v1/blogs
```
Por defecto viene:
  - **Orden Actuales primeros**
  - **3 por page**

### 1.2 `Pages`

Para traer la page deseada agregamos
```
?page= numero
```
**Ejemplo**
```
/api/v1/blogs?page=2
```

Esto nos va a traer la pagina 2

### 1.3 `Order`

Para traer los blogs por orden que pueden ser:
  - **alfabetico**
  - **reverso**
  - **masvotados**
  - **menosvotados**
```
?order= orderDeseado
```
**Ejemplo**
```
/api/v1/blogs?order=alfabetico
```

Esto nos va a traer orden alfabetico

### 1.4 `Date`

Para traer los blogs de la fecha:
```
?date= yyyy-mm-dd
```
**Ejemplo**
```
/api/v1/blogs?date=2023-12-16
```

Esto nos va a traer blogs de ese dia

### 1.5 `Limit`

Para traer los blogs modificando la cantidad de blogs que queremos ver:
```
?limit= numero
```
**Ejemplo**
```
/api/v1/blogs?limit=20
```

Esto nos va a traer 20 blogs

### 1.7 `Id`

Para traer un solo blog identificado por su id:
```
/:id
```
**Ejemplo**
```
/api/v1/blogs/324
```

Esto nos va a traer el blog 324 

## 2. `Post`

### 2.1 `Parametros`

Para poder postear un blog son necesarios:
  - Nombre de usuario creador como: **userNickName**
  - Contenido como: **content**
  - Imagen como: **image**
  - Titulo como: **title**
  - Puntuacion como: **rating**


### 2.2 `Requisitos de los parametros`

Cada parametro tiene requisitos diferentes que son:
  - **userNickName** || usuario existente - caracteres maximos 15
  - **content** || hasta 500 caracteres
  - **image** || debe ser una url
  - **title** || caracteres maximos 30
  - **rating** || puntuacion maxima 10


## 3. `Patch`

### 3.1 `Parametros de busqueda`

Para buscar el blog a modificar se utilizara la `id`

### 3.2 `Parametros modificables`

Se pueden modificar uno o varios :
  - **userNickName** 
  - **content** 
  - **image** 
  - **title** 
  - **rating** 

****se va a modificar el updatedAt, haciendo que aparezca primero en get all blogs****

### 3.3 `Voto`

Para buscar el blog a votar se utilizara la `id` seguido de vote

```
/api/v1/blogs/:id/votes
```

### 3.4 `Parametros obligatorios`

es necesario pasar:
  - **userNickName**
  - **stars**
  - **votes**

## 4. `Delete`

### 4.1 `Parametros de busqueda`

Para buscar el blog a eliminar se utilizara la `id`