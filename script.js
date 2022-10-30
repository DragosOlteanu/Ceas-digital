let hourElement = document.querySelector ('#ore');
let minutesElement = document.querySelector ('#minute');
let secondsElement = document.querySelector ('#secunde');
function ceas() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;

    hourElement.innerHTML = h; 
    minutesElement.innerHTML = m;
    secondsElement.innerHTML = s;
    setTimeout(()=>{
        ceas()
    },1000)

   

}
setInterval (()=>{
    ceas()
},1000)
