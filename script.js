const links = {
    x:"https://x.com/jayf0lder",
    gj:"https://gamejolt.com/@jayfolder",
    yt:"https://www.youtube.com/@jayfolder",
    itch:"https://jayfolder.itch.io/"
}
   

function move_page(a){
  window.open(links[a], '_blank');
}

setTimeout(() => {
  document.body.style.overflow = "auto";
}, 1000);