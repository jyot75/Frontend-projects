/* 
improvements 
&quote; ne badle " judu hovathi etle eve option khota pade 6e, samanya text ma fervi equality check karvi... 
*/



let arrApi = ["https://opentdb.com/api.php?amount=50&category=9&difficulty=easy&type=multiple",
"https://opentdb.com/api.php?amount=50&category=9&difficulty=medium&type=multiple",
"https://opentdb.com/api.php?amount=50&category=9&difficulty=hard&type=multiple",
"https://opentdb.com/api.php?amount=50&category=11&difficulty=easy&type=multiple",
"https://opentdb.com/api.php?amount=50&category=11&difficulty=medium&type=multiple",
"https://opentdb.com/api.php?amount=20&category=11&difficulty=hard&type=multiple",
"https://opentdb.com/api.php?amount=50&category=23&difficulty=easy&type=multiple",
"https://opentdb.com/api.php?amount=50&category=23&difficulty=medium&type=multiple",
"https://opentdb.com/api.php?amount=50&category=23&difficulty=hard&type=multiple"];


let start = document.querySelector(".start");
let correct,q_bank;
let c = 0;
let choice = document.getElementsByName("selection");
let rw,suchme=0;


// randomly set options
const set_option = () => {
    let options = [(q_bank.results[c].incorrect_answers[0]),(q_bank.results[c].incorrect_answers[1]),(q_bank.results[c].incorrect_answers[2]),(q_bank.results[c].correct_answer)];
            
    let i = (Math.floor(Math.random() * 4));
            
    document.querySelector(".quiz_text").innerHTML = `Q-${c+1}> ${q_bank.results[c].question}`;
    document.querySelector(".a_text").innerHTML = options[i%4];
    document.querySelector(".b_text").innerHTML = options[(i+1)%4];
    document.querySelector(".c_text").innerHTML = options[(i+2)%4];
    document.querySelector(".d_text").innerHTML = options[(i+3)%4];
    correct = q_bank.results[c].correct_answer;
};



// start quiz
start.addEventListener("click",() => {

    localStorage.setItem("score",0);
    let thisApi = fetch(arrApi[parseInt(document.querySelector("#cat").value)*3 + parseInt(document.querySelector("#diffi").value)]);

    thisApi.then((res) => {
        return res.json();
    }).then((value) => {
        
        q_bank = value; 
        set_option();
        document.querySelector(".main").hidden = true;
        document.querySelector(".quiz").hidden = false;
    })
});



// confirm
document.querySelector(".confirm").addEventListener("click",() => {
    rw = false;
    for(let i=0;i<choice.length;i++)
    {
        if(choice[i].checked){
            suchme=1;
            if(choice[i].nextElementSibling.innerHTML == correct){
                document.querySelector(".status").innerHTML = "Correct Answer✅✅✅";
                document.querySelector(".status").classList.add("text-success");
                document.querySelector(".status").classList.remove("text-danger");
                rw = true;
            }
            else{
            // document.querySelector(".status").innerHTML = `Wrong Answer❌❌❌, correct answer is: ${correct}`;
                document.querySelector(".status").innerHTML = "Wrong Answer❌❌❌";
                document.querySelector(".status").classList.add("text-danger");
                document.querySelector(".status").classList.remove("text-success");
            }
        }
    }
    if(suchme==1)
    {
        suchme = 0;
        for(let i=0;i<choice.length;i++)
        {   
            document.getElementsByName("selection")[i].disabled = true;
        }
    }
});



// next
document.querySelector(".next").addEventListener("click",() => {

    document.querySelector(".confirm").click();
    if(rw === true){
        let neww = parseInt(localStorage.getItem("score")) + 1;
        localStorage.setItem("score",neww);        
    }
    
    document.querySelector(".status").innerHTML = "";
    for(let i=0;i<choice.length;i++)
    {   
        document.getElementsByName("selection")[i].disabled = false;
        document.getElementsByName("selection")[i].checked = false;
    }


    c+=1;
    if(c==10){
        document.querySelector(".scorr").hidden = false;
        document.querySelector(".scorr").firstElementChild.innerHTML = `Your score is : ${parseInt(localStorage.getItem("score"))}`;
        document.querySelector(".next").innerHTML = "Next";
        document.querySelector(".quiz").hidden = true;
    }

    else{
        set_option();
        if(c == 9)
            document.querySelector(".next").innerHTML = "Submit";
    }
});



// play again
document.querySelector(".again").addEventListener("click",() => {
    localStorage.removeItem("score");
    document.querySelector(".main").hidden = false;
    document.querySelector(".scorr").hidden = true;
    c=0;
});





