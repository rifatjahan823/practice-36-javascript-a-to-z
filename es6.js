// ES6 রিলেটেড সাতটা জিনিস তোমাকে জানতে হবে 

// ১. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে অবজেক্ট এর প্রপার্টি এর মান কিভাবে বসায় সেটা জানতে হবে। বিশেষ করে নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। বা কোন একটা অবজেক্ট এর প্রপার্টি array সেই array থেকে ভ্যালু এনে কিভাবে টেমপ্লেট স্ট্রিং এর মধ্যে বসাতে পারবে । 
const arry = [3,5,7,9]
const obj = {
    name:'likha',country:'bangladesh',
}
const about = `My name is:${obj.name}
Country:${obj.country.charAt(0).toUpperCase()+ obj.country.slice(1)//capitaliize
}
Number:${arry[3]}
`
console.log(about)

// ২. স্প্রেড অপারেটর (...) কিভাবে কাজ করে। বিশেষ করে একটা array কে কপি করে নতুন করে array বানাবে এবং সেখানে একটা উপাদান যোগ করবে। আবার একটা উপাদান কে বাদ দিয়ে বাকি সব উপাদানকে কিভাবে যোগ করবে (filter ইউজ করে)
const numbers = [30,5,3,6,55,7,9]
//স্প্রেড অপারেটর use kore array the max and min number kora jay
const maxNumber = Math.max(...numbers);
console.log(maxNumber)

const minNumber = Math.min(...numbers);
console.log(minNumber)

//array copy kore new value add kora
const newNumbers = [...numbers,66,90,7];
console.log(newNumbers)

// ৩.১. শূন্য প্যারামিটারওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৯ রিটার্ন করবে। 
const getNine =()=>9;
console.log(getNine())

// ৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে ১২ দিয়ে গুণ করে গুণফল রিটার্ন করবে। 
const getMultipy = num1=>num1*12;
console.log(getMultipy(5))

// ৩.৩ দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে চার দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও।
const getTwo =(num2,num3)=>(num2+num3)/4;
console.log(getTwo(4,4))

// ৩.৪ একাধিক লাইনওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৫ যোগ করবে তারপর যোগফল দুইটাকে আবার গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 
const getNumbers = (num4,num5)=>{
    const result = (num4+5 + num5+5)*5;
    return result
}
console.log(getNumbers(9,7))


// ৪. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।
const calc = {
    accounter:'likha',
    balance:[500,1000,300,500]
}
const [one,two,tree]=calc.balance
console.log(two)

// ৫. shorthand দিয়ে অবজেক্ট কিভাবে ডিক্লেয়ার করে, {a , b } স্টাইলে। 
// ৬. ফাংশন এর মধ্যে ডিফল্ট প্যারামিটার কিভাবে ডিক্লেয়ার করে 
// ৭. অপশনাল চেইনিং কি জিনিস, সেটা কখন কিভাবে ইউজ করে ? না জানলে গুগলে সার্চ দাও 
const{a,b}={a:'haha',b:'hihi'}
console.log(a,b)

//array distructuring
const distruc =  [43,35];
const[x,y]=[43,35];
const[xa,ya]=distruc;
console.log(x,y)
console.log(xa,ya)

//function a array
function dicturArry(dictruc1,dictruc2) {
    const resuktDic = [dictruc1,dictruc2];
    return resuktDic
}
console.log(dicturArry(90,95) )

//objcet value call
const student = {
ide:'vs code',
designation:'developer',
languages:['html','css','javascript'],
spasification:{
    weight:45,
    height:5.3,
    watch:{
        color:'red',price:50,
    }
}
}
const{designation}=student;
console.log(designation)
const{color}=student.spasification.watch;
console.log(color)
