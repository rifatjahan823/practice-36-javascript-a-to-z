// ১.১ অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা ২ দিয়ে গুণ করে গুণফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 

const array = [5,3,1,7,9];
 const output = array.map(multipy=>multipy*2);
 console.log(output)

//  ১.২. জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয় সেটার একটা সামারি লিখে ফেলো। 
const products = [
    {name:'phone1',color:'red1',price:15000},
    {name:'phone2',color:'red2',price:17000},
    {name:'phone3',color:'red3',price:19000},
    {name:'phone4',color:'red4',price:21000}
]
//map akti array ati diye loop kora hoy
const convert = products.map(product=>product.name)
console.log(convert)

// filter diye condition set kora hoy
const convert3 = products.filter(productFil=>productFil.price>17000)
console.log(convert3)

// find diye condition set kora hoy tobe ati sudhu 1st value dibe
const convert4 = products.find(productFin=>productFin.price>17000)
console.log(convert4)
