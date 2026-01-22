const links = {
    x:"https://x.com/jayf0lder",
    gj:"https://gamejolt.com/@jayfolder",
    yt:"https://www.youtube.com/@jayfolder",
    itch:"https://jayfolder.itch.io/",
    port:"portfolio.html"
}
   

function move_page(a, b){
  window.open(links[a], '_'+b);
}

setTimeout(() => {
  document.body.style.overflow = "auto";
}, 1000);