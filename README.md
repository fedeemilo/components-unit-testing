# TIPS PARA ESCRIBIR MEJORES TEST UNITARIOS

- Favorecer a los componentes puros: dadas las mismas props, siempre renderiza
  el mismo componente. Si necesitas state de la app, podes envolver esos componentes
  con un componente contenedor que maneje el estado y los efectos secundarios.

- Aisla la lógica de la aplicación de las reglas del negocio en reducers puros.

- Aisla efectos secundarios usando componentes contenedores.


## PURE COMPONENT: 

Es un componente que, dado las mismas props, siempre renderiza el mismo UI,  
y no tiene efectos secundarios.  
 

```
import React from 'react';
const Hello = ({ userName }) => (
  <div className="greeting">Hello, {userName}!</div>
);
export default Hello;
```

Este tipo de componentes es muy sencillo de testear. Se necesita una forma de  
seleccionar el componente y necesitas saber el resultado esperado.

### Recomendación para testear -> render-component de RITEway

```
npm install --save-dev riteway

```