
let allPost =[];
/*********nav************/ 
$(".open").click(function(){
    if($("#nav").css("left")=="0px"){
        let translateValue=$("#nav").outerWidth();
        $("#nav").animate({left : -translateValue} , 1000 );
        $(".layer-two-nav").animate({left : 0} , 1000)
    }else{
        $("#nav").animate({left :0} , 1000);
        $(".layer-two-nav").animate({left : 250} , 1000)
        // $(".layer-two-nav").html(`<i class="fa-solid fa-xmark"></i>`)

    }
})
$(".open").click(function(){
    $(".layer-one-nav ul li").show(2000);
}) 
/*****************linksApi********************/ 
console.log($(".layer-one-nav span"))
async function linksApi(){
        $(".layer-one-nav span").click( async function(e){
            let link =$(this).attr("id");
            let Api =await fetch(`https://api.themoviedb.org/3/movie/${link}?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
            let req =await Api.json()
            allPost =req.results;
            display(allPost);
         })   
    } 
linksApi();

/*****************tredingApi****************/ 
async function tredingApi(){
    $(".layer-one-nav span").click( async function(e){
        let trending =$(this).attr('id');
        let ApiTraning =await fetch(`https://api.themoviedb.org/3/${trending}/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
        let reqTraning =await ApiTraning.json()
        allPost =reqTraning.results; 
        display(allPost);
})
}
tredingApi();
/***************searchApi***************/ 
let searchMovice= document.getElementById("getMovice")
searchMovice.addEventListener("keyup" ,  function(e){
    let result =e.target.value
    searchApi(result);
})
async function searchApi(term){
    let Api= await fetch(`https://api.themoviedb.org/3/search/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2tLM97derUVGrow9ZyG36bPI5oR3zXO43EqTFSGtmob4jmDbn6My9soD0&query&query=${term}`)
    let reqTraning =await Api.json()
    allPost =reqTraning.results; 
        display(allPost);
}
searchApi();

let searchCurrent= document.getElementById("search")
searchCurrent.addEventListener("keyup" ,  function(list){
    var allSearch=[];
        for(var i=0 ; i<allPost.length ; i++)
        {
            if(allPost[i].original_title.includes(list)){
                allSearch.push(allPost[i]);
            }
            display(allPost);
            nowApi();
            console.log(allPost[i].original_title)
        }
       
        
})
/******************nowApi****************************/ 
async function nowApi(){
    
        let ApiTraning =await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
        let reqTraning =await ApiTraning.json()
        allPost =reqTraning.results; 
        display(allPost);
}

nowApi();
/*****************display*******************/ 

function display(searchFlime){
    html="";
    for(let i=0 ;i<searchFlime.length ; i++){
        html+=`<div class=" col-lg-4 cols-md-6 col-sm-12">
        <div class="items-contect py-5 position-relative" >
            <img class=" w-100" src="https://image.tmdb.org/t/p/w500/${searchFlime[i].poster_path}" alt="flime">
            <div class="layer-img py-5 my-5 ">
                    <h1>${searchFlime[i].original_title ||searchFlime[i].original_name}</h1>
                    <p>${searchFlime[i].overview}</p>
                    <h4>${"rate:"+searchFlime[i].vote_average}</h4>
                    <h6>${searchFlime[i].release_date||searchFlime[i].first_air_date}</h6>
                </div>
        </div><!--/items-contect-->
    </div><!--/col-->
    `
    }
    document.querySelector(".row").innerHTML=html;
}
/****************regex******************/ 
let EnterName =document.getElementById("EnterName");
let EnterEmail =document.getElementById("EnterEmail");
let EnterPhone =document.getElementById("EnterPhone");
let EnterAge =document.getElementById("EnterAge");
let EnterPassword =document.getElementById("EnterPassword");
let EnterRePassword =document.getElementById("EnterRePassword");
let spanE =document.getElementById("masaggeE");
let spanP =document.getElementById("masaggeP");
let spanA =document.getElementById("masaggeA");
let spanPASS =document.getElementById("masaggePASS");
let spanRePASS =document.getElementById("masaggeRePASS");
let AllNumber = EnterPhone+EnterAge+EnterPassword+ EnterRePassword 



EnterName.addEventListener("keyup" , function(){
    const regeM= /^[a-z]{4,9}$/;
    if(regeM.test(EnterName.value)==true){
        span.innerText ="Your Avalid Name";
         span.style.color = "lime";
         return true;
    }
    else{
        span.innerText ="Enter Avalid Name" ;
         return false;  
    }
})

EnterEmail.addEventListener("keyup" , function(){
    const regexE= /^(.)(@)(.)(.[a-z]{2,3})$/;
    if(regexE.test(EnterEmail.value)==true){
        spanE.innerText ="Your Avalid Email";
         spanE.style.color = "lime";
         return true;
    }
    else{
        spanE.innerText ="Enter Avalid Email" ;
         return false;  
    }
})
EnterPhone.addEventListener("keyup" , function(){
    const regexP= /^01(0|1|2|5)[0-9]{8}$/;
    if(regexP.test(EnterPhone.value)==true){
        spanP.innerText ="Your Avalid Phone";
         spanP.style.color = "lime";
         return true;
    }
    else{
        spanP.innerText ="Enter Avalid Phone" ;
         return false;  
    }
})
EnterAge.addEventListener("keyup" , function(){
    const regexA= /^[0-9]{1,2}$/;
    if(regexA.test(EnterAge.value)==true){
        spanA.innerText ="Your Avalid Age";
         spanA.style.color = "lime";
         return true;
    }
    else{
        spanA.innerText ="Enter Avalid Age" ;
         return false;  
    }
})
EnterPassword.addEventListener("keyup" , function(){
    const regexPASS= /^[0-9][a-z]{1,9}$/;
    if(regexPASS.test(EnterPassword.value)==true){
        spanPASS.innerText ="Your Avalid Password ";
         spanPASS.style.color = "lime";
         return true;
    }
    else{
        spanPASS.innerText ="Enter Avalid Password" ;
         return false;  
    }
})
EnterRePassword.addEventListener("keyup" , function(){
    const regexRePASS= /^[0-9][a-z]{1,9}$/;
    if(regexRePASS.test(EnterRePassword.value)==true){
        spanRePASS.innerText ="Your Avalid RePassword ";
         spanRePASS.style.color = "lime";
         return true;
    }
    else{
        spanRePASS.innerText ="Enter Avalid RePassword" ;
         return false;  
    }
})

// let regexNum = [EnterPhone , EnterAge ,EnterPassword , EnterRePassword ]
// console.log(regexNum)

// // regexNum.keydown =function(){
// //     for( let i =0 ; i<regexNum.length ; i++){
// //         let regex= /^[1-9]{2-9}$/;
// //         if(regex.test(regexNum[i].value)==true){
// //             span.innerText ="Your Avalid Name"
// //             regexNum[i].classList.replace("is-invalid" , "is-valid")
// //              return true;
// //         }
// //         else{
// //             span.innerText ="Enter Avalid Name" 
// //             regexNum[i].classList.add("is-invalid")
// //              return false;  
// //         }
    

// //     }
   
// // }





