// ৪. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। তারপর কয়েকটা কার্ড বানাবে (হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে।

const albums =()=>{
   fetch('https://jsonplaceholder.typicode.com/albums/1/photos') 
   .then(res=>res.json())
   .then(data=>showAlbum(data))
}
const showAlbum =(albumValue)=>{
    const photos = document.getElementById("photos")
    for(const albumValues of albumValue){
        const div = document.createElement("div");
        div.innerHTML=`<div onclick="details('${albumValues.id}')" class="col" >
        <div class="card h-100">
        <img src="${albumValues.thumbnailUrl}" alt="">
        </div>
      </div>
        `
        photos.appendChild(div)
    }
}

const details = name =>{
fetch(`https://jsonplaceholder.typicode.com/albums/1/photos?id=${name}`)
.then(res=>res.json())
.then(data=>showDetails(data))
}
const showDetails=value=>{
    const details =  document.getElementById("details")
    details.innerText=""
    value.forEach(values=> {
        const div = document.createElement("div");
        div.innerHTML=` <div class="card mx-auto  mb-5" style="width: 18rem; ">
        <img src="${values.thumbnailUrl}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${values.title}</h5>
        </div>
      </div>
      `
      details.appendChild(div)
    });
}