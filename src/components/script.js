var dm = false;
const bgColor = ["#dfdffa", "#0a0a23"];
const textColor = ["#0000ff", "#F1F1FF"]
const dm_imgs = ["moon.svg", "sun.svg"];
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
  document.getElementById("dm_icon").src = dm_imgs[+dm];
  document.body.style.backgroundColor = bgColor[+dm];
  root.style.setProperty('--main-color', textColor[+dm]);
}

window.darkMode = function() { 
  dm = !dm;
  document.getElementById("dm_icon").src = dm_imgs[+dm]
  document.cookie = "dm="+dm+""
  document.body.style.backgroundColor = bgColor[+dm];
  root.style.setProperty('--main-color', textColor[+dm]);
} 