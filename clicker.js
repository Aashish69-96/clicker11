
i=0;
 clicking=()=>{
    document.querySelector('#su').click();
 }
clr=setInterval(clicking,5);




clicker=()=>{
    document.querySelector("#de").innerHTML= i;  
i++;
     
}
clicker();

