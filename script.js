let menu=document.querySelector(".repo");
let hh=document.querySelector(".hh");
let kk=document.querySelector(".kkj");
let flag=0;

function hello(){
     if(flag==0){
        console.log("hello");
        menu.style.display="block";
        gsap.to(menu,{
           y:-50,
           borderRadius:"0 0 0 0",
           opacity:1,
           duration:.5,
        //    delay:1,
        })
       
        hh.innerHTML='<h4 class=" hh text-uppercase gap-md-2 gap-0 d-flex  "><i class="ri-close-line text-danger "></i>close</h4>';
        kk.style.height="0vh";
        flag=1;
    }
    else{
        console.log('JJ');
        gsap.to(menu,{
            y:50,
        
            borderRadius:"50% 50% 0 0",
          
            opacity:0,
            duration:.5,
         })
        
        hh.innerHTML='  <h4 class=" hh text-uppercase gap-md-2 gap-0 d-flex  "><i class="ri-menu-3-line text-danger "></i>menu</h4>';
        kk.style.height="100%";
        setTimeout(()=>{
            menu.style.display="none";
            flag=0;
        },500)
       
    
     }

}