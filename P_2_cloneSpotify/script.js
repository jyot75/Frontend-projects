let songName = ["Let-Me-Love-You","Let-Me-Love-You","Let-Me-Love-You","Let-Me-Love-You","Let-Me-Love-You","Me-Gusta","Me-Gusta","Me-Gusta","Me-Gusta","Me-Gusta"];
let songLength = ["3:25", "3:25", "3:25", "3:25", "3:25", "3:12", "3:12", "3:12", "3:12", "3:12"];
let simg = document.getElementById("simg");



// print song name from array
for(let i=0;i<songName.length;i++)
{
    document.getElementsByClassName("song")[i].innerHTML = `${songName[i].replaceAll("-" , " ")}`;
}




// initialize some variables & set first song as default
let song = new Audio(`songs/${songName[0]}.mp3`);
simg.setAttribute("src",`song_img/${songName[0]}.png`);
let lenth = songLength[0];
let cur= 0;




// initializing play,next,previous buttons
let pp = document.getElementById("pp");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let range = document.getElementById("r_line");





// song list buttons
for(let i=0;i<10;i++){
    document.getElementsByClassName("song")[i].addEventListener("click",()=>{
        
        if(pp.classList.contains("playing")){
            song.currentTime = 0;
            song.pause();
            pp.classList.remove("playing");
            simg.removeAttribute("src");
            
        }

        document.getElementsByClassName("song")[cur].classList.add("bg-blue-300");
        document.getElementsByClassName("song")[cur].classList.remove("bg-green-600","text-white");

        document.getElementsByClassName("song")[i].classList.add("bg-green-600","text-white");
        document.getElementsByClassName("song")[i].classList.remove("bg-blue-300");
        song = new Audio(`songs/${songName[i]}.mp3`);
        simg.setAttribute("src",`song_img/${songName[i]}.png`);
        lenth = songLength[i];
        cur = i;
        pp.click();
    })
}



// song time upadate
const myFunction = () => {
    let sd = song.currentTime.toFixed(0); 
    document.getElementById("stime").innerHTML = `${Math.floor(sd/60)}:${("0" + (sd%60)).slice(-2)}`;
    range.value = (song.currentTime/song.duration)*100;
    if(song.currentTime == song.duration)
        next.click();
}



// play / pause Button
pp.addEventListener("click",() => {
    if(pp.classList.contains("playing")){
        pp.innerHTML = `<img src="images/play.png" alt="">`;
        song.pause();
        document.getElementById("giff").classList.add("opacity-0");
        pp.classList.remove("playing");
    }
    else{
        pp.innerHTML = `<img src="images/pause.png" alt="">`;
        song.play();
        document.getElementById("giff").classList.remove("opacity-0");
        pp.classList.add("playing");
        document.getElementById("endtime").innerHTML = lenth;
        song.ontimeupdate =  myFunction;
    }
})





// next & previous button
next.addEventListener("click",() => {
    
    if((cur+1) == songName.length)
        document.getElementsByClassName("song")[0].click();
    else
        document.getElementsByClassName("song")[cur+1].click();
})
prev.addEventListener("click",() => {
    
    if((cur-1) == -1)
        document.getElementsByClassName("song")[(songName.length)-1].click();
    else    
        document.getElementsByClassName("song")[cur-1].click();
})




// range upadate -> song update
document.getElementById("r_line").addEventListener("change",() => {
    song.currentTime = (range.value*song.duration)/100;
})