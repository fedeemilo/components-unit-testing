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

Este tipo de componente es muy sencillo de testear. Se necesita una forma de  
seleccionar el componente y necesitas saber el resultado esperado.

### Recomendación para testear -> render-component de RITEway

```
npm install --save-dev riteway

```

```
import React from "react"
import { describe } from 'riteway'
import render from 'riteway/render-component'
import match from 'riteway/match'

import Hello from './Hello'

describe('Hello component', async assert => {
    const userName = 'Spiderman'
    const $ = render(<Hello userName={userName} />)
    const contains = match($('.gretting').html())

    assert({
        given: 'a username',
        should: 'Render a greeting to the correct username.',
        actual: contains(userName),
        expected: `Hello, ${userName}`
    })
})
```

### Es una buena idea separar el código en 3 bloques diferentes:

- UI de los Componentes

- La LÓGICA del componente

- Efectos secundarios (I/O, network, disk, etc)