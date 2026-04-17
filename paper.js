 
 let choices=document.querySelectorAll(".choice");
 let userscore=document.getElementById("para");
 let compscore=document.getElementById("compt");
 let msg=document.querySelector("#btn")
 let rest=document.querySelector("#reset");

 let userscores=0;
 let computerscore=0;

    choices.forEach((choice)=>{     
    choice.addEventListener("click",()=>{

    let userchoice=choice.getAttribute("id");
    let options=["Rock","Paper","Scissor"];

    let computerchoice=options[Math.floor(Math.random()*3)];

     if(userchoice===computerchoice)
       
     {
       msg.innerText="Game was Draw,Please try again.";
       msg.style.backgroundColor="";
     }

     else if(userchoice==="Rock" && computerchoice==="Scissor" || 
             userchoice==="Scissor" && computerchoice==="Paper" ||
             userchoice==="Paper" && computerchoice==="Rock")
             {
                userscores++;
                userscore.innerText=userscores;
                msg.innerText=`You Win! Your ${userchoice} beats ${computerchoice}`;
                msg.style.backgroundColor="green";
             }


             else{
                computerscore++;
                compscore.innerText=computerscore;
                msg.innerText=`You Lose! ${computerchoice} beats Your ${userchoice}`;
                msg.style.backgroundColor="red";
             }

       })
})

    rest.addEventListener("click",()=>{
         msg.innerText="Play your Move";
         msg.style.backgroundColor="black";
         compscore.innerText="0";
         userscore.innerText="0";
    })




