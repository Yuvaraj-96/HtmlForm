var colaps =(num)=>{
    var colapscontent= document.querySelector(".content"+num);

     if(colapscontent.style.display === "block")
     {
        colapscontent.style.display ="none";
     }else{
        colapscontent.style.display ="block";
        if(num===10)
        {
            let element= document.querySelector(".highlight");
    element.style.backgroundColor = "Yellow"
        }
       
    
     }
}

var charcount=(char)=>{

    let countplace= document.querySelector(".valuecount");
    countplace.innerHTML=char.value.length;
}

function highlight(){
    let element= document.querySelector(".highlight");
    element.style.backgroundColor = "Yellow"
}
