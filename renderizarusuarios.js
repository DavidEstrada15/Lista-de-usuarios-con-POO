import Usuario from "./clases/usuario.js";

let EraseAllusers= document.getElementById("EraseAllusers")
let section = document.querySelector("section")
let usuarios= JSON.parse(localStorage.getItem("Usuarios")) || []

EraseAllusers.addEventListener("click",()=>{
    usuarios.splice(0)
    localStorage.setItem("Usuarios", JSON.stringify(usuarios))
    section.innerHTML= ""
})
function Renderizar() {
    usuarios.forEach((usuario)=>{
        let usernew= new Usuario(usuario.foto,usuario.nombre, usuario.edad, usuario.correo, usuario.password, usuario.id)
        section.appendChild(usernew.crearusuario())
})}

Renderizar()
