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