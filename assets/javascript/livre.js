const session = localStorage.sessionLibrairie;
if(!session) return window.location.href="./connecter.html";

let formulaire = document.getElementsByTagName("form")[0];
formulaire.addEventListener("submit", event=>{
    event.preventDefault();

    const allInput = event.target.querySelectorAll("input");
    const formData = new FormData();
    allInput.forEach(input=>{
        console.log(input.files)
        if(input.files){
            formData.append(input.name,input.files[0])
        }else{
            formData.append(input.name,input.value)
        }
    })
    fetch("http://localhost:4010/api/livre/creer",{
        method: "POST",
        body: formData,
        headers:{Authorization:JSON.parse(session).token}
    })
    .then(res=>res.json())
    .then(succes=>res.json(succes))
})