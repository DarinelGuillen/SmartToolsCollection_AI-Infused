import React from 'react';

function Title() {
  return (
    <>
      <h1 className="mt-8 text-4xl font-bold font-GA">Bienvenido a Vite + React 1234</h1>
      <h2 className="mt-4 text-xl font-bold font-BB">Breymont 1213 </h2>
      <h1 className="font-GA">Título con la fuente Gaoel</h1>
<p className="font-BL">Párrafo con la fuente BreymontL</p>
      <label className='NUM'>1234</label>
      <p className="mt-2 font-BL">
      Breymont 1213
        En este tutorial, descubriremos cómo utilizar React con Vite para crear aplicaciones
        eficientes y modernas. Vamos a aprender sobre componentes, estados y props.
      </p>
      <p className="mt-2 font-BL">
        React facilita la creación de interfaces de usuario interactivas. Diseña vistas simples
        para cada estado en tu aplicación, y React actualizará y renderizará de manera eficiente
        los componentes adecuados cuando los datos cambien.
      </p>
    </>
  );
}

export default Title;
