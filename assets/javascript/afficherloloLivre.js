
const session = localStorage.sessionLibrairie;
fetch("https://johlibrairie.onrender.com/api/livre/getAll")
.then(res=>res.json())
.then(succes=>{
  console.log(succes);
    const content = document.querySelector("#content");
    console.log(content);
    if(succes.data.length){
        succes.data.forEach(element=>{
            content.innerHTML+= `<div class="bix">
            <div class="images"><img src="${element.image}" class="imgs" alt=""></div>
            <div class="texteo">
              <p class="lili">${element.titre}</p>
              <p class="nono">${element.auteur}</p>
            </div>
            <div class="panio">
              <a href="#" class="button"><img src="../assets/images/panier__1_-removebg-preview.png" class="card" alt="" ></a>
              <span class="prix">${element.prix} FCFA</span>
            </div>
          </div>`;
        })
    }





const button = document.querySelector("#hynt")
console.log(button);

const contPanier= JSON.parse(localStorage.getItem("panier"))
const compt = document.querySelector(".hu")
const count = document.querySelector(".count")
count.textContent = contPanier === null ? 0: contPanier.length


button.addEventListener("click",(e)=>{
   e.preventDefault();
  console.log(button);

  
    let enfant = e.target
    let parent = enfant.closest(".bix") 

    const imgs = document.querySelector(".imgs").src
    const prix = document.querySelector(".prix").textContent
    const nomArticle = document.querySelector(".lili").textContent
    const nomAuteur = document.querySelector(".nono").textContent
    
      
     
         let article = {
            prix: prix,
            nomArticle: nomArticle,
            nomAuteur: nomAuteur,
            imgs : imgs 
         }
         

         let panier = localStorage.getItem("panier")
         console.log(panier);
         if(panier === null){
            panier =[];
            article.id = 1
            panier.push(article)
            localStorage.setItem("panier",JSON.stringify(panier))
            window.location.reload()
          
         }else{
            panier=JSON.parse(panier)
            panier.push(article)
            localStorage.setItem("panier",JSON.stringify(panier))
           window.location.reload()
         }
         console.log(panier);
         console.log(article);
        
})
})