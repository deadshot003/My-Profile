let content = document.querySelector("#myDiv");
let screen = document.querySelector("#screen");
function openModal(){
  content.setAttribute("style","visibility: visible;scale:1.08;transition-duration:0.5s;");
  screen.setAttribute("style","filter: opacity(85%);")
};

const cancel = document.querySelector("#cancel");
cancel.addEventListener('click',
function(){
    content.setAttribute("style","visibility: invisible;");
    screen.setAttribute("style","filter: opacity(100%);")
}
);