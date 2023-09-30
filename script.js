let btn = document.querySelector("#btn");

 btn.addEventListener('click',()=>{

   number.classList.add('countdoun')
   wish();
   btn.style.display='none'

  })
  btn.style.display='block'
function wish(callback) {
  console.log("waiting");
 
  texts ('10');
  setTimeout(() => {
    console.log("waiting");
      setTimeout(() => {
           setTimeout(() => {

            setTimeout(()=>{
                setTimeout(()=>{
                    setTimeout(()=>{
                        setTimeout(()=>{

                            setTimeout(()=>{

                                setTimeout(()=>{

                                    setTimeout(()=>{

                                      number.classList.add('countdoun1')
                                        texts ('Happy Independence Day');
                                        
                                       
                                        },1000)

                                       
                                    texts ('1');

                                    },1000)
                                texts ('2');
                                },1000)
                            texts ('3');
                            },1000)
                
                        texts ('4');
                        },1000)
                
                    texts ('5');
                    },1000)
                
            texts ('6');
            },1000)
             
            texts ('7');
            }, 1000);

            texts ('8');
    }, 1000);
 
    texts ('9');
  }, 1000);
}


let i =0;

let check=setInterval(()=>

{

for (let index = 0; index <5; index++) {
  const element = index ;
  
}
  
  
}


,1000)
console.log(check)



 function texts(val){

 document.getElementById('number').innerText=val

 }
