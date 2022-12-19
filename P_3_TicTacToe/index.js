// Improvements

// 1. ek vaar 0 k X mark thaya pa6i badalavu na joie, mouse te box ma lai jata kai asar na thavi joie...
// 2. localstorage ma point store karva...
// 3. multiplayer through web-sockets and npm...
// 4. delete span in buttons only div (.ea class)



let arr = ["012","036","048","147","246","258","345","678"];
let arrForLine = [[2,3,0,14],[-4,9,90,14],[1,9,46,16],[2,9,90,14],[1,9,-46,16],[8,9,90,14],[2,9,0,14],[2,15,0,14]];
let instruct = document.querySelector("#instruct");
let turn = "0";
let reset = document.querySelector("#reset");
let line = document.getElementsByClassName("line")[0];


const check = function(){
    arr.forEach((element) => {
    let b1 = document.querySelectorAll(".ea")[parseInt(element[0])];
    let b2 = document.querySelectorAll(".ea")[parseInt(element[1])];
    let b3 = document.querySelectorAll(".ea")[parseInt(element[2])];
    
    let ind = arr.indexOf(element);

    if((b1.innerHTML === b2.innerHTML) && (b2.innerHTML === b3.innerHTML) && (b1.innerHTML !== "")){
        instruct.innerHTML = `🔥🔥🔥🔥🔥🔥🔥  ${b1.innerHTML}  Won!!!  🔥🔥🔥🔥🔥🔥🔥`;
        instruct.classList.remove("bg-danger","bg-primary");
        instruct.classList.add("bg-dark");
        line.style.transform = `translate(${arrForLine[ind][0]}rem, ${arrForLine[ind][1]}rem) rotate(${arrForLine[ind][2]}deg)`;
        line.style.width = `${arrForLine[ind][3]}rem`;
        setTimeout(()=>{reset.click();},3000);
       
        return ;
    }
       
    })
}



for(let i=0;i<9;i++){
    let ele = document.querySelectorAll(".each")[i];
    ele.addEventListener("click",()=>{
        if(turn === "0"){
            ele.firstChild.innerHTML = "0";
            ele.classList.add("zero");
            turn="X";
            instruct.innerHTML = `Turn for ${turn}`;
            instruct.classList.add("bg-danger");
            instruct.classList.remove("bg-primary");
            check();

        }
        else if(turn === "X"){ 
            ele.firstChild.innerHTML = "X";
            ele.classList.add("cross");
            turn="0";
            instruct.innerHTML = `Turn for ${turn}`;
            instruct.classList.remove("bg-danger");
            instruct.classList.add("bg-primary");
            check();
        }
    })
}






reset.addEventListener("click",()=>{
    line.style.width = "0rem";
    document.querySelectorAll(".each").forEach((element) => {
        element.firstChild.innerHTML = "";
        element.classList.remove("zero","cross");
    })
    turn = "0";
    instruct.innerHTML = `Turn for ${turn}`;
    instruct.classList.remove("bg-danger","bg-dark");
    instruct.classList.add("bg-primary");
    

})
