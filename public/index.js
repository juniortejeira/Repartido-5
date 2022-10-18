fetch("./props.json").then(res => res.json()).then(
 props=>{
    let datos = document.querySelector("#datosIndex")//estoy seleccionando el html
    console.log(props)
    props.map(element => {
        datos.innerHTML +=`
       
        <td>${element.id}</td>
        <td>${element.titulo}</td>
        <td>${element.precio}</td>
        <td>${element.imagen}</td>
        <td>${element.categoria}</td>
        <td>${element.descripción}</td>
    `
    });
 }

)