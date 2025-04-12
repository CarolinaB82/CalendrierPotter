document.addEventListener("DOMContentLoaded", main);

function main(evt) {
    
const overlay = document.querySelector(".overlay")
overlay.addEventListener("click", effacer);

function effacer(){
    overlay.className="fade";
    setTimeout(callback,2000);
        function callback(){
            overlay.className="effacer";
        }
}

scatterImages();
function scatterImages() {
    const container = document.getElementsByClassName("dispersion");
    const images = container.querySelector(".dispersion");

    for (let i = 0; i < images.length; i++) {
        let randomX = Math.random() * window.innerWidth;
        let randomY = Math.random() * window.innerHeight;

        images[i].style.left = randomX + "px";
        images[i].style.top = randomY + "px";
    }
}

}