// ১. কিভাবে let, const দিয়ে ভেরিয়েবল লিখতে হয়,কখন কোনটা ইউজ করে তুমি কি জানো ?
//let changable atar value change kora jayna
let change = 'orange';
change = 'red';
console.log(change)

//const changeable na ata value change kora jayna
const notChange = 'blue'
console.log(notChange)

//  ২.১ কিভাবে কন্ডিশন লিখতে হয়, ছয় রকমের কন্ডিশন (>, <, ===, !==, >=. <=) কোনটা কোন জিনিসের জন্য ইউজ করবে। এছাড়াও && বা ।। দিয়ে কিভাবে একাধিক কন্ডিশন এর মধ্যে দুইটাই ফুলফিল করতে হবে আবার দুইটার যেকোন একটা ফুলফিল করতে হবে, সেটা কিভাবে করবে 
let a = 2
let b = 13
if(a>b){console.log('1st')} //a jodi b theke boro hoy
if(a<b){console.log('2nd')} //a jodi b theke coto hoy
if(a===b){console.log('3rd')} //a r b jodi soman hoy
if(a!==b){console.log('4th')} //a r b jodi soman na hoy
if(a>=b){console.log('5th')} //a jodi b theke boro hoy ba soman hoy
if(a<=b){console.log('6th')} //a jodi b theke coto hoy ba soman hoy
if(a==2 && b==5){console.log('7th')}//a and b 2tar condition fullfill hote hobe
if(a==2||b==3){console.log('8th')}//a and b 2ta theke 1tar condition fullfill holeo hobe

// ২.২. এক বা একাধিক কন্ডিশন দিয়ে কিভাবে if-else লিখে আবার কখন if-else-if - else লিখে। সেই রকম একটা উদারহণ চিন্তা করে তুমি লিখে ফেলো 
const comfirm = ()=>{
    const response =prompt('see your result')
    parseFloat(response)
    if(response>=90 && response<=100){
        alert('You got A Golden')
    }
    else if(response>=80 && response<=89){
        alert('You got A+')
    }
    else if(response>=70 && response<=79){
        alert('You got A')
    }
    else if(response>=60 && response<=69){
        alert('You got A-')
    }
    else if(response>=50 && response<=59){
        alert('You got B')
    }
    else if(response>=40 && response<=49){
        alert('You got C')
    }
    else if(response>=33 && response<=39){
        alert('You got D')
    }
    else if(response>=0 && response<=32){
        alert('You are fail')
    }
    else if(response<0 ){
       alert('please give positive number')
    }
}

// ৩.array কিভাবে ডিক্লেয়ার করে array এর মধ্যে length, index, push, pop, indexOf, includes এইগুলা কিভাবে কাজ করে। কোনটা দিয়ে কি করে? সেগুলা কি তুমি জানো?
let array = ['likha','red','blue'];
console.log(array.length);
//push diye last new array add kora hoy
array.push("new push")
console.log(array);
//pop diye last ar array bad deoya hoy
array.pop("new push")
console.log(array);
//unshirt diye first ar array add kora hoy
array.unshift("1st new push")
console.log(array);
//shift diye 1st ar array bad deoya hoy
array.shift("new push")
console.log(array);
array.includes('in')
console.log(array);
//index diye array change kora hoy
array[1]='orange'
console.log(array)
//index off diye koy number position a ace seta ber kora hoy
console.log(array.indexOf('likha'));
//include diye array te value ace kina seta check kora hoy
console.log(array.includes('likha'));

// ৪. দুইটা বেসিক লুপ ,এর মধ্যে for loop তোমাকে জানতেই হবে। while লুপটাও দেখে রাখতে পারো। যদিও আমরা এই দুইটা লুপই কম ইউজ করবো। তাও কখনো লাগলে যেন তুমি বুঝে ফেলতে পারো।  
for(let a = 0; a<=15;a++){
    console.log(a)
}
//odd number
for(let a = 0; a<=15;a++){
    if(a%2!=0){
        console.log(a)
    }
}
//while loop
var x = 1;
while (x<=10) {
    console.log(x)
  x++;
}
//even number
var x = 1;
while (x<15) {
  if (x % 2 == 0)
    console.log(x);
  x++;
}

// ৫. function একটা অবশ্য জিনিস। বিশেষ করে সিম্পল একটা ফাংশন কখন ডিক্লেয়ার করতে হয়। কখন ফাংশন থেকে return করে। আর কিভাবে ফাংশন এর মধ্যে parameter নিতে হয়। 
function mulitipy (num1,num2){
    const result = num1*num2;
    return result;
}
// const results = mulitipy(15,23)
// console.log(results)
console.log(mulitipy (15,23))

// ৬. আখেরি রত্ন হচ্ছে Object তাই কোন একটা অবজেক্ট কিভাবে ডিক্লেয়ার করে। সেখান property কিভাবে কিভাবে একসেস করা যায়। এছাড়াও অবজেক্ট এর প্রপার্টি এর ভ্যালু হিসেবে কিভাবে array, object ইউজ করা যায়। 

const obj = {
    name:'likha',id:555,
    movies:['war','action','comic']
}
const id = 'id'
console.log(obj.name)
console.log(obj['name'])
console.log(obj[id])
console.log(obj.movies[1])