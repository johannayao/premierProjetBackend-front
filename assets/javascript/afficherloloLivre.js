

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
})