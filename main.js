//Llamado al node de DOOM
let root = document.querySelector("#root");


let div_formulario = document.createElement("div");
div_formulario.className = "div_formulario";


//Lista de datos(String)
let formulario = [
    {nombre:"Login",link:"componentes/login/login.html"},
    {nombre:"FormularioBusqueda",link:"componentes/FormulariodeBusqueda/FormulariodeBusqueda.html"},
    {nombre:"FormularioComentarios",link:"componentes/FormulariodeComentarios/FormulariodeComentarios.html"},
    {nombre:"FormularioContacto",link:"componentes/FormulariodeContacto/FormulariodeContacto.html"},
    {nombre:"FormularioPedidos",link:"componentes/FormulariodePedidos/FormulariodePedidos.html"},
    {nombre:"FormularioRegistro",link:"componentes/FormulariodeRegistro/ContactodeRegistro.html"},


];


formulario.forEach(itemLista => {
    let div_item = document.createElement("a");
    div_item.className = "item";
    div_item.href = itemLista.link;
    div_item.innerText = itemLista.nombre;


    div_formulario.appendChild(div_item);
});


root.appendChild(div_formulario);

