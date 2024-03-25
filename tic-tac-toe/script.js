let currentplayer="x";
const cell = document.querySelectorAll(".cell");
cell.forEach(cell=>cell.addEventListener("click",()=>{
    if(cell.innerHTML==""){cell.innerHTML=currentplayer;
    currentplayer=(currentplayer=="x")?"O":"x";}
    checker(cell);
}))
function getelement(index){
    const val=document.querySelector(`.cell[cellindex="${index}"]`)
    return val.innerHTML;
}
function checker(cell){
    const index=cell.getAttribute("cellindex");
    if (index=="0"){
        if(getelement(1)&&getelement(2)==getelement(0)){
            document.querySelector(".winner").innerHTML=`winner is ${getelement(0)}`;
        }else if(getelement(3)&&getelement(6)==getelement(0)){
            document.querySelector(".winner").innerHTML=`winner is ${getelement(0)}`
        }else if(getelement(4)&&getelement(8)==getelement(0)){
            document.querySelector(".winner").innerHTML=`winner is ${getelement(0)}`
        }
    }else if (index=="1"){
        if(getelement(0)&&getelement(2)==getelement(1)){
            document.querySelector(".winner").innerHTML=`winner is ${getelement(1)}`;
        }else if(getelement(4)&&getelement(7)==getelement(1)){
            document.querySelector(".winner").innerHTML=`winner is ${getelement(1)}`
        }
    }else if (index=="2"){
        if(getelement(0)&&getelement(1)==getelement(2)){
            document.querySelector(".winner").innerHTML=`winner is ${getelement(2)}`;
        }else if(getelement(5)&&getelement(8)==getelement(2)){
            document.querySelector(".winner").innerHTML=`winner is ${getelement(2)}`
        }else if(getelement(4)&&getelement(6)==getelement(2)){
            document.querySelector(".winner").innerHTML=`winner is ${getelement(2)}`
        }
    }else if (index=="3"){
        if(getelement(0)&&getelement(6)==getelement(3)){
            document.querySelector(".winner").innerHTML=`winner is ${getelement(3)}`;
        }else if(getelement(4)&&getelement(5)==getelement(3)){
            document.querySelector(".winner").innerHTML=`winner is ${getelement(3)}`
        }
    }else if (index=="4"){
        if(getelement(1)&&getelement(7)==getelement(4)){
            document.querySelector(".winner").innerHTML=`winner is ${getelement(4)}`;
        }else if(getelement(3)&&getelement(5)==getelement(4)){
            document.querySelector(".winner").innerHTML=`winner is ${getelement(4)}`
        }else if(getelement(0)&&getelement(8)==getelement(4)){
            document.querySelector(".winner").innerHTML=`winner is ${getelement(4)}`
        }else if(getelement(2)&&getelement(6)==getelement(4)){
            document.querySelector(".winner").innerHTML=`winner is ${getelement(4)}`
        }
    }else if (index=="5"){
        if(getelement(3)&&getelement(4)==getelement(5)){
            document.querySelector(".winner").innerHTML=`winner is ${getelement(5)}`;
        }else if(getelement(3)&&getelement(4)==getelement(5)){
            document.querySelector(".winner").innerHTML=`winner is ${getelement(5)}`
        }
    }else if (index=="6"){
        if(getelement(0)&&getelement(3)==getelement(6)){
            document.querySelector(".winner").innerHTML=`winner is ${getelement(6)}`;
        }else if(getelement(7)&&getelement(8)==getelement(6)){
            document.querySelector(".winner").innerHTML=`winner is ${getelement(6)}`
        }else if(getelement(4)&&getelement(2)==getelement(6)){
            document.querySelector(".winner").innerHTML=`winner is ${getelement(6)}`
        }
    }else if (index=="7"){
        if(getelement(6)&&getelement(8)==getelement(7)){
            document.querySelector(".winner").innerHTML=`winner is ${getelement(7)}`;
        }else if(getelement(1)&&getelement(4)==getelement(7)){
            document.querySelector(".winner").innerHTML=`winner is ${getelement(7)}`
        }
    }else if (index=="8"){
        if(getelement(6)&&getelement(7)==getelement(8)){
            document.querySelector(".winner").innerHTML=`winner is ${getelement(8)}`;
        }else if(getelement(2)&&getelement(5)==getelement(8)){
            document.querySelector(".winner").innerHTML=`winner is ${getelement(8)}`
        }else if(getelement(4)&&getelement(0)==getelement(8)){
            document.querySelector(".winner").innerHTML=`winner is ${getelement(8)}`
        }
    }
}
const reset=document.querySelector("button");
reset.addEventListener("click",()=>{
    cell.forEach((cell)=>{
        cell.innerHTML="";
    })
    document.querySelector(".winner").innerHTML="";
})