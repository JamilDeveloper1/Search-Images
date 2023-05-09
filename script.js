// ELEMENTLERI CAQIRDIQ

const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#searchInput");
const buttonWrapper = document.querySelector(".button-wrapper");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const imageListWrapper = document.querySelector(".imageList-wrapper");


runFormWrapper();

function runFormWrapper(){
form.addEventListener("submit",search)
clearButton.addEventListener("click",clear);
    
}






function clear(){
    searchInput.value = "";
    Array.from(imageListWrapper.children).forEach((child)=>child.remove());
}


function search(e){
    let value = searchInput.value.trim();
fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
    method:"GET",
    headers:{
        Authorization:"Client-ID q9h13UxOGVMYJcb8dFKLLAx0rGu89bK-zRLvXwnpiDs"
    }
})
.then((res)=>res.json())
.then((data)=>{
    Array.from(data.results).forEach(image => {
        // console.log(image.urls.small)
        addImageToUI(image.urls.small)
    })
})
    e.preventDefault();
}





function addImageToUI(url){
let div = document.createElement("div");
div.className = "card";

let img = document.createElement("img");


img.setAttribute("src",url);

img.width = "400";
img.height = "400";


div.appendChild(img);
imageListWrapper.appendChild(div);
}


clearButton.addEventListener("click",removeALL);

