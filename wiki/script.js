const sidebar = document.getElementById("sidebar")
const content = document.getElementById("content")

const menuToggle = document.getElementById("menu-toggle")
const themeToggle = document.getElementById("theme-toggle")
const langToggle = document.getElementById("lang-toggle")

const themeIcon = themeToggle.querySelector(".material-icons")


menuToggle.addEventListener("click",()=>{

sidebar.classList.toggle("open")

})


themeToggle.addEventListener("click",()=>{

document.body.classList.toggle("dark")

if(document.body.classList.contains("dark")){

themeIcon.textContent="light_mode"

}else{

themeIcon.textContent="dark_mode"

}

})


langToggle.addEventListener("click",()=>{

langToggle.textContent = langToggle.textContent==="EN" ? "ES":"EN"

})


document.querySelectorAll(".folder-title").forEach(folder=>{

folder.addEventListener("click",e=>{

e.stopPropagation()

folder.parentElement.classList.toggle("open")

})

})


document.querySelectorAll(".page").forEach(link=>{

link.addEventListener("click",e=>{

e.stopPropagation()

const page = link.dataset.page

loadPage(page)

if(window.innerWidth<900){

sidebar.classList.remove("open")

}

})

})


async function loadPage(page){

try{

const res = await fetch(`content/${page}`)

const md = await res.text()

content.innerHTML = marked.parse(md)

window.scrollTo(0,0)

}catch{

content.innerHTML="<h2>Page not found</h2>"

}

}


loadPage("home.md")