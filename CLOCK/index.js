function Clock(){
    const now = new Date();
    let hours = now.getHours();
    hours = hours % 12 || 0;
    const minutes = now.getMinutes().toString().padStart(2,0);
    const sec = now.getSeconds().toString().padStart(2,0);
    const display = `${hours}:${minutes}:${sec}`;
    document.getElementById("clock").textContent = `${display}`;
}
Clock();
setInterval(Clock,1000);