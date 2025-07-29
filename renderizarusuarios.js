import Usuario from "./clases/usuario.js";

let section = document.querySelector("section")
let usuarios= JSON.parse(localStorage.getItem("Usuarios")) || []

function Renderizar() {
    usuarios.forEach((usuario)=>{
        let usernew= new Usuario(usuario.foto,usuario.nombre, usuario.edad, usuario.correo, usuario.password, usuario.id)
        section.appendChild(usernew.crearusuario())
})}

Renderizar()
