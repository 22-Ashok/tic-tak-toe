const ipt=document.querySelector("input");
let str="";
const btns=document.querySelectorAll(".btn");

for (btn of btns){
    btn.addEventListener("click",(event)=>{
         if(event.target.innerText=="="){
            str=eval(str);
            ipt.value=str;
         } else if(event.target.innerText=="AC"){
            str="";
            ipt.value=str;
         } else if(event.target.innerText=="C"){
              str=str.slice(0,-1);
              ipt.value=str;
         } else if(event.target.innerText=="0"){
            if(str[0]==0){
                str='0'
                ipt.value=str;
            } else{
                str+=event.target.innerText;
                ipt.value=str;
            }
         }else{
            str+=event.target.innerText;
            ipt.value=str;
         }
    })
}

