// =====================================
// 3D TILT EFFECT
// =====================================

VanillaTilt.init(

document.querySelectorAll(".image-card,.card,.project"),

{

max:20,
speed:500,
glare:true,
"max-glare":0.3,
scale:1.05

}

);

// =====================================
// ACTIVE NAVBAR
// =====================================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// =====================================
// SMOOTH FADE-IN ON SCROLL
// =====================================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".card,.project,#about,#contact").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

// =====================================
// TYPING EFFECT
// =====================================

const text="Java Full Stack Developer";

const title=document.querySelector(".left h2");

let i=0;

title.innerHTML="";

function typing(){

if(i<text.length){

title.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,80);

}

}

typing();

// =====================================
// SCROLL TO TOP BUTTON
// =====================================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// =====================================
// SCROLL PROGRESS BAR
// =====================================

const progress=document.createElement("div");

progress.id="progressBar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const percent=(scrollTop/height)*100;

progress.style.width=percent+"%";

});

// =====================================
// IMAGE PARALLAX
// =====================================

window.addEventListener("mousemove",(e)=>{

const card=document.querySelector(".image-card");

const x=(window.innerWidth/2-e.pageX)/35;

const y=(window.innerHeight/2-e.pageY)/35;

card.style.transform=`rotateY(${x}deg) rotateX(${-y}deg)`;

});

// =====================================
// NAVBAR SHADOW
// =====================================

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.background="rgba(5,8,22,.9)";

}else{

header.style.background="rgba(255,255,255,.05)";

}

});

// =====================================
// CURRENT YEAR FOOTER
// =====================================

const footer=document.querySelector("footer");

footer.innerHTML=`© ${new Date().getFullYear()} Mohammed Nadeer | Java Full Stack Developer`;

// =====================================
// LOADER
// =====================================

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});