import Usuario from "./clases/usuario.js"
let Form= document.querySelector("form")
let usuarios= JSON.parse(localStorage.getItem("Usuarios")) || []
let i= 0


Form.addEventListener("submit", (e) =>{
    e.preventDefault()
    usuarios.push(new Usuario(Form.photo.value, Form.Username.value, parseInt(Form.Age.value), Form.Email.value, Form.password.value, i))
    console.log(usuarios)
    localStorage.setItem("Usuarios", JSON.stringify(usuarios))
    i++
})