let usuarios= JSON.parse(localStorage.getItem("Usuarios")) || []
let section= document.querySelector("section")
console.log(usuarios)
function Renderizar() {
    section.innerHTML= ``
    usuarios.forEach((usuario)=>{
        let usernew= new Usuario(usuario.foto,usuario.nombre, usuario.edad, usuario.correo, usuario.password, usuario.id)
        section.appendChild(usernew.crearusuario())
})}


 class Usuario {
    constructor(foto, nombre, edad, correo, password, id) {
        this.foto= foto || "https://img.freepik.com/vector-premium/icono-perfil-avatar-predeterminado-imagen-usuario-redes-sociales-icono-avatar-gris-silueta-perfil-blanco-ilustracion-vectorial_561158-3467.jpg";
        this.nombre= nombre;
        this.edad= edad;
        this.correo= correo;
        this.password= password;
        this.id= id;
    }

    crearusuario = () =>{
         let article= document.createElement("article")

         let fotoelement= document.createElement("img")
        fotoelement.src= this.foto

        let nombreelement= document.createElement("h2")
        nombreelement.innerHTML= ` ${this.nombre}`
        nombreelement.id= "Name"

        let div= document.createElement("div")
        let edadelement= document.createElement("p")
        edadelement.innerHTML= `<span>Edad:</span> ${this.edad}`

        let correoelement= document.createElement("p")
        correoelement.innerHTML= ` ${this.correo}`
        correoelement.id= "Emailelement"
        let passwordelement= document.createElement("p")
        passwordelement.innerHTML= `<span>Contraseña:</span> ${this.password}`

        let eraseElement= document.createElement("p")
        eraseElement.innerHTML= `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>`
        eraseElement.id= "Erase"

        eraseElement.addEventListener("click", ()=>{
           usuarios.splice(this.id, 1)
           usuarios.forEach((usuario) =>{
            if (usuario.id > this.id) {
                usuario.id --
            }
           })
           localStorage.setItem("Usuarios", JSON.stringify(usuarios))
           location.reload()
        })
        div.appendChild(passwordelement)
        div.appendChild(edadelement)
        article.appendChild(fotoelement)
        article.appendChild(nombreelement)
        article.appendChild(correoelement)
        article.appendChild(eraseElement)
        article.appendChild(div)
        return article
    }
};

export default Usuario