const links = {
    x:"https://x.com/jayf0lder",
    gj:"https://gamejolt.com/@jayfolder",
    yt:"https://www.youtube.com/@jayfolder",
    itch:"https://jayfolder.itch.io/",
    port:"portfolio.html",
    home:"index.html",
    weezer:"https://gamejolt.com/games/faaw/846454",
    tbn:"https://gamejolt.com/games/TBN/850856",
    dsmis3ep1:"https://gamejolt.com/games/dsmisarchive/830646",
    test:"https://google.com"
}
   

function move_page(a, b){
  window.open(links[a], '_'+b);
}

setTimeout(() => {
  document.body.style.overflow = "auto";
}, 1000);