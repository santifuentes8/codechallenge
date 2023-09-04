document.addEventListener('DOMContentLoaded', function() {
  const formulario = document.getElementById('formulario_registro');
  formulario.addEventListener ('submit', function (e){
    e.preventDefault();


  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const fecha = document.getElementById('fecha').value;
  const datos= {
    nombre:nombre,
    apellido:apellido,
    fecha:fecha,
  };
  fetch('https://jsonplaceholder.typicode.com/users',{
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(datos)
  })
  .
  then(response=> response.json())
  .then(data =>{
    console.log('Datos ingresados', data);

  })
});
});