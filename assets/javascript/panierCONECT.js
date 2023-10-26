

const joh= JSON.parse(localStorage.getItem("panier"))

let html = ""

function affiche(){ 
   
    joh.forEach(element => {
        html += ` 
        
  
             
        <div class="panier1">
        <div class="flex">
          <img src="../assets/images/livre2.jpeg" class="imgs" alt="" width="160px">
        </div>

          <div contextmenu="gu">
                <div class="tis">
                  <h3 class="lili">${element.nomArticle}</h3>
                  <p class="nono">${element.nomAuteur}</p>
                 <div > <p class="prix">${element.prix}</p></div>
                </div>
          </div>
          <div class="cor">
            <img src="../assets/images/corbeil-removebg-preview.png" class="corbeil" id="${element.id}" alt="" width="70px">
          </div>
      </div>`
    
        
       
    });
    document.querySelector(".panier1").innerHTML = html
}

affiche()

const batton = document.querySelectorAll(".corbeil")

batton.forEach(element => element.addEventListener("click",(e)=>{
  
  const id = e.target.id
  const panier = JSON.parse(localStorage.panier).filter(element=> element.id != id);
  localStorage.setItem("panier",JSON.stringify(panier))
  e.target.closest(".panier1").remove();
  console.log("bonjour");
}))




