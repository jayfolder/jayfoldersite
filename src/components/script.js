var dm = false;
const dm_imgs = ["../moon.svg", "../sun.svg"];
const root = document.documentElement;
 
function getCookie(name) {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) {
        return parts.pop().split(';').shift()
    }
    return null
}

window.move_page = function(a, b) {
  window.open(a, '_' + b)
}

window.onload = function(){
  let dm_c = getCookie('dm');
  dm = dm_c === "true";
  dmToggle();
}

window.dmClick = function(){
  dm = !dm;
  document.cookie = "dm="+dm+"";
  dmToggle();
}

window.dmToggle = function() {
  document.getElementById("dm_icon").src = dm_imgs[+dm];
  root.style.setProperty('--primary-color', dm ?  "#000074" : "#F1F1FF");
  root.style.setProperty('--secondary-color', dm ? "#F1F1FF" : "#0000FF");
  root.style.setProperty('--misc-color', dm ? "#000074" : "#FFFFFF");
}