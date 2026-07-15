// ==========================================
// Smooth Active Navbar
// ==========================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ==========================================
// Navbar Shadow
// ==========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        navbar.style.background = "rgba(255,255,255,.95)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    } else {

        navbar.style.background = "rgba(255,255,255,.75)";
        navbar.style.boxShadow = "none";

    }

});


// ==========================================
// Typing Effect
// ==========================================

const text =
"Midwifery Student • Dream Chaser • Makeup Lover";

let i = 0;

const typing = document.querySelector(".typing");

typing.innerHTML = "";

function typeWriter(){

    if(i < text.length){

        typing.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter,70);

    }

}

typeWriter();


// ==========================================
// Scroll Reveal
// ==========================================

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

const hidden=document.querySelectorAll(
".card,.friend-card,.dream-card,.fact-box,.timeline-item,.about-text"
);

hidden.forEach(el=>observer.observe(el));


// ==========================================
// Floating Button
// ==========================================

const topButton=document.createElement("button");

topButton.innerHTML="↑";

topButton.className="topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topButton.classList.add("showTop");

}else{

topButton.classList.remove("showTop");

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


// ==========================================
// Card Hover Animation
// ==========================================

const cards=document.querySelectorAll(".card,.dream-card,.friend-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});


// ==========================================
// Welcome Message
// ==========================================

console.log("Welcome to Putri Rindyani Portfolio 🌸");
/* ==========================
LOADER
========================== */

window.addEventListener("load",()=>{

setTimeout(()=>{

document
.getElementById("loader")
.classList.add("hide-loader");

},1500);

});


/* ==========================
MENU MOBILE
========================== */

const menu=document.querySelector(".menu-toggle");

const nav=document.querySelector(".nav-links");

menu.onclick=()=>{

nav.classList.toggle("active");

};
/* ==========================
   BACKGROUND MUSIC
========================== */

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let isPlaying = false;

// Musik mulai setelah loader selesai
window.addEventListener("load",()=>{

setTimeout(()=>{

bgMusic.volume = 0.3;

bgMusic.play().then(()=>{

isPlaying = true;
musicBtn.classList.add("musicRotate");

}).catch(()=>{

// Browser meminta interaksi pengguna

});

},1700);

});

// Jika autoplay diblokir browser,
// klik pertama akan memulai musik

document.body.addEventListener("click",()=>{

if(!isPlaying){

bgMusic.volume=0.3;

bgMusic.play();

isPlaying=true;

musicBtn.classList.add("musicRotate");

}

},{once:true});

// Tombol Play/Pause

musicBtn.onclick=()=>{

if(isPlaying){

bgMusic.pause();

musicBtn.classList.remove("musicRotate");

}else{

bgMusic.play();

musicBtn.classList.add("musicRotate");

}

isPlaying=!isPlaying;

};