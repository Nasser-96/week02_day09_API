const Body = document.querySelector("body")
 const bigDiv = document.createElement("div")




fetch('https://rickandmortyapi.com/api/character')
.then(function(response) {
  return response.json()})
  .then(function (json) { 
      for(i=0;i<json.results.length;i++){
        const par = document.createElement("p");
        const smDiv = document.createElement("div");
        const img = document.createElement("img")
        par.innerHTML = json.results[i].name
        smDiv.id = i;
        bigDiv.append(smDiv);
        img.src = json.results[i].image;
        img.id=i;  
        img.style = "width: 10rem; height: 10rem;"
        smDiv.append(img);
        smDiv.append(par)
         Body.append(smDiv)

    }
    
    //  console.log(json.results[1].image);
  })


  