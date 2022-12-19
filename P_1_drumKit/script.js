let arr = ["A","S","D","F","G","H","J","K","L"];
for(let i=0;i<9;i++)
{
    let ele = document.getElementsByClassName("drum")[i];
    ele.addEventListener("click",() =>{
        let aud = new Audio(`sounds/${arr[i]}.mp3`);
        aud.play();
        ele.classList.add("ring-4","ring-yellow-600");
        setTimeout(()=>{    
        ele.classList.remove("ring-4","ring-yellow-700");
        aud.pause();
        aud.currentTime = 0;
    },500);  
    })
}


window.addEventListener("keydown",(evt) => {
    let aud = new Audio(`sounds/${evt.key.toUpperCase()}.mp3`);
    aud.play();
        let kele = document.getElementById(evt.key.toLowerCase());
        kele.classList.add("ring-4","ring-yellow-600");
        setTimeout(()=>{    
        kele.classList.remove("ring-4","ring-yellow-700");
        aud.pause();
        aud.currentTime = 0;
        },500);
})

