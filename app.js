// Promise with AJAX 

const descargarUsuarios = cantidad => new Promise((resolve, reject) => {
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    //  AJAX

    const xhr = new XMLHttpRequest();

    // Abrir la conexion
    xhr.open('GET', api, true);

    // on load

   xhr.onload = () => {
       if(xhr.status === 200){
           resolve( JSON.parse(xhr.responseText).results);
       } else{
           reject(Error(xhr.statusText));
       }
   }

   // Send

   xhr.send();

});

descargarUsuarios(5)
   .then(
       miembros => imprirmirHTML(miembros),
       error => console.error(
           new Error('Hubo un error' + error)
       )
   );

function imprirmirHTML(usuarios) {
   let html = '';
   usuarios.forEach(usuario => {
       html += `

   <tr>
       <th>FirstName</th>
       <th>LastName</th>
       <th>Nationality</th>
       <th>Image</th>
   </tr>

   <tr>
       <td> ${usuario.name.first} </td>
       <td> ${usuario.name.last} </td>
       <td> ${usuario.nat} </td>
       <td><img src="${usuario.picture.medium}"></td>
   </tr>
       `;
   });

   const contendorApp = document.querySelector('#app');
   contendorApp.innerHTML = html;

}