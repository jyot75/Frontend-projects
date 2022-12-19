// // .point functionality not working  &&   input through keyboard

 

// let count= 0;
// let fin = null;
// let process;
// let screen = document.getElementById("screen");
// document.getElementById("clear").addEventListener("click",clearAll);



// document.getElementById("inverse").addEventListener("click",() => {
//     count*=-1;
//     screen.innerHTML = count;    
// });




// for(let i=0;i<document.querySelectorAll(".num").length;i++){
//     document.querySelectorAll(".num")[i].addEventListener("click", () => {
//         let num = parseInt(document.querySelectorAll(".num")[i].innerHTML);
//         count = count*10 + num;
//         screen.innerHTML = count;
//     });
// }



// for(let i=0;i<document.querySelectorAll(".task").length;i++){
//     document.querySelectorAll(".task")[i].addEventListener("click", () => {
    
//     screen.innerHTML = "";  

//     if(fin!=null) 
//         calc(count,process);
//     else
//         fin = count;

//     process = (document.querySelectorAll(".task")[i].innerHTML);
//     count = 0;
//     });
// 



// document.getElementById("ans").addEventListener("click",() => {
//     calc(count,process);
//     screen.innerHTML = fin;
//     count = fin;
//     fin = null;
// });



// function calc(count,p){
//     if(p=="+") fin+=count;
//     else if(p=="-") fin-=count;
//     else if(p=="*") fin*=count;
//     else if(p=="÷") fin/=count;
//     else if(p=="%") fin%=count;
// }


// function clearAll(){
//     count = 0;
//     fin = null;
//     screen.innerHTML = "";
// }






// keyboard

// document.addEventListener("keydown", keyboard,e);
// function keyboard(e){
//     if(e.key == "c" || e.key == "C")
//         clearAll();

//     // else if(e.key == "=")
//     //     screen.innerHTML = fin;

//     // else if(e.key>=0 && e.ke)
//     else
//         e.key
// }














// method-2




let screen = document.getElementById("screen");
let str = "";

for(let i=0;i<document.querySelectorAll(".keys").length;i++){
    document.querySelectorAll(".keys")[i].addEventListener("click", (e) => {

        if(e.target.innerHTML == "=")
        {
            let ans = eval(str);
            screen.innerHTML = ans;
            str = ans.toString();
        }

        else if(e.target.innerHTML == "C")
        {
            str = "";
            screen.innerHTML = "";
        }

        else if(e.target.innerHTML == "+/-")
        {
            let ans = eval(str)*-1;
            screen.innerHTML = ans;
            str = ans;
        }

        else
        {
            str += (document.querySelectorAll(".keys")[i].innerHTML);
            screen.innerHTML = str;
        }
    });
}