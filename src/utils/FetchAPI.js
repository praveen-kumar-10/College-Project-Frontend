//This is a global function using 
//This is a global function using 

const sendReq = (url)=>{
    fetch(url).then(res => res.json()).then(res => console.log(res));
}

sendReq("https://jsonplaceholder.typicode.com/posts");