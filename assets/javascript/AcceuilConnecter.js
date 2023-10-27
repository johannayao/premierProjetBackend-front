
const button = document.querySelector("#hynt")


const contPanier= JSON.parse(localStorage.getItem("panier"))
const compt = document.querySelector(".hu")
const count = document.querySelector(".count")
count.textContent = contPanier === null ? 0: contPanier.length


button.addEventListener("click",(e)=>{
   alert(hynt)
  
    let enfant = e.target
    let parent = enfant.closest(".bix") 

    const imgs = document.querySelector(".imgs").src
    const prix = document.querySelector(".prix").textContent
    const nomArticle = document.querySelector(".lili").textContent
    const nomAuteur = document.querySelector(".nono").textContent
    // console.log(prix,nomArticle,nomAuteur);
      const paniers = localStorage.panier? JSON.parse(localStorage.panier):[];
      let id= null
      if(!paniers.length){
         id = 1
      }else{
         id = paniers[paniers.length-1].id+1
      }
         let article = {
            prix: prix,
            nomArticle: nomArticle,
            nomAuteur: nomAuteur,
            imgs : imgs 
         }
         alert()
         // panier.push(article)
         // localStorage.setItem("panier",JSON.stringify(panier))
         // count.textContent = panier.length<=8?panier.length:"8"

         // const showPanier = (balise)=>{
         //    const npanier = localStorage.panier?JSON.parse(localStorage.panier).length:0
         //    balise.textContent = npanier<= "8"? npanier
         // }

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