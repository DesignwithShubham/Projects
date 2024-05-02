

let count = 0
function Counter(){
   
    let as = document.getElementsByTagName('p') [0];
    count += 1;
    as.innerText=count;
}



function Counter2(){
   
    let as1 = document.getElementsByTagName('p') [0];
    count -= 1;
    as1.innerText=count;
}