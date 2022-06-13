//link: https://api.unsplash.com//search/photos/?query=${value}&per_page=20Client-ID YOUR_ACCESS_KEY

const API="ladg6Jn_YXPG0d6-qFkdr0t1uA4PnAKPs8yWq-uD6o4"
import {navbar} from "../components/navbar.js";

let n=document.getElementById("navbar")

n.innerHTML=navbar();

import {searchImages,append} from "./fetch.js"

let search=(e)=>{


    if(e.key==="Enter"){

        let value=document.getElementById("query").value
     searchImages(API,value).then((data)=> {

       

       //console.log(data)
let container=document.getElementById("container")

container.innerText=null
       append(data.results,container)
       })

    }

}
//https://api.unsplash.com/search/photos?query=${query}&per_page=20&client_id=dDh-O6duEH9-Et2s6M7319d-cVn34x9cFEOdr5obvg8

document.getElementById("query").addEventListener("keydown",search)
let categories=document.getElementById("categories").children

//console.log(categories)


function cSearch(){
console.log(this.id)


searchImages(API,this.id).then((data)=> {

 

    //console.log(data)
let container=document.getElementById("container")

container.innerHTML=null
    append(data.results,container)
    })

}


for(let el of categories){
    el.addEventListener("click",cSearch);
}




// let searchImages=async()=>{

//     let value=document.getElementById("query").value
//     try{

//         let res=await fetch(`https://api.unsplash.com/search/photos/?query=${value}per_page=20&client_id=${API}`)
//  let data=await res.json()

//  console.log(data.results)




//     }
//     catch(err){
//         console.log(err)
//     }

// }

//https://api.unsplash.com/search/photos/?query=cat&per_page=20&client_id=ladg6Jn_YXPG0d6-qFkdr0t1uA4PnAKPs8yWq-uD6o4`