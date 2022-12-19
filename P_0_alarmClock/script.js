let bt = document.getElementById("sub");

let aud = new Audio("https://pagalfree.com/musics/128-Tu%20Banke%20Hawa%20-%20Dhokha%20Round%20D%20Corner%20128%20Kbps.mp3");


const function1 = () => {

  if(bt.classList.contains("btn-success"))
  {
    let h = parseInt(document.getElementById("hour").value);
    let m = parseInt(document.getElementById("min").value);
    let s = parseInt(document.getElementById("sec").value);

    let x = (60 * 60 * h) + (60 * m) + (s);

    setTimeout(function play() {
      aud.play();

      bt.innerHTML = "STOP";
      bt.classList.remove("btn-success");
      bt.classList.add("btn-danger");
      
    }, 1000 * x);
  }
}

  

bt.addEventListener("click", function1);

bt.addEventListener("click", () =>{
  if(bt.classList.contains("btn-danger"))
  {
      bt.innerHTML = "Set Alarm";
      bt.classList.add("btn-success");
      bt.classList.remove("btn-danger");
      aud.pause();
      aud.currentTime = 0;
  }
});