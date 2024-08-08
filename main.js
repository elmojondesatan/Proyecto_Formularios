//Llamado al node de DOOM
let root = document.querySelector("#root");


let div_formulario = document.createElement("div");
div_formulario.className = "div_formulario";


//Lista de datos(String)
let formulario = [
    {nombre:"Login",link:"componentes/login/login.html"},
    {nombre:"FormulariodeBusqueda",link:"componentes/FormulariodeBusqueda/FormulariodeBusqueda.html"},
    {nombre:"FormulariodeComentarios",link:"componentes/FormulariodeComentarios/FormulariodeComentarios.html"},
    {nombre:"FormulariodeContacto",link:"componentes/FormulariodeContacto/FormulariodeContacto.html"},
    {nombre:"FormulariodePedidos",link:"componentes/FormulariodePedidos/FormulariodePedidos.html"},
    {nombre:"FormulariodeRegistro",link:"componentes/FormulariodeRegistro/ContactodeRegistro.html"},


];


formulario.forEach(itemLista => {
    let div_item = document.createElement("a");
    div_item.className = "item";
    div_item.href = itemLista.link;
    div_item.innerText = itemLista.nombre;


    div_formulario.appendChild(div_item);
});


root.appendChild(div_formulario);

