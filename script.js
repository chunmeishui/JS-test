//1 Write a function that logs to the console numbers 1 to 100.
function count(){
    for(let i =0;i < 101;i++){
        if(i%15===0){
            console.log("Jackpot!");
        }
        else if(i%3 ===0){
            console.log("This is divisible by 3")
        }
        else if(i%5 ===0){
            console.log("This is divisibleby 5");
        }
        console.log(i);
    }

};
count()
//2  create a button and add it to the html (the document)
const myBtn = document.createElement("button");
const body = document.querySelector("body");
const http= "https://random.imagecdn.app/500/150"
myBtn.innerHTML= "random image";
body.appendChild(myBtn);
myBtn.addEventListener("click",insertImage);
function insertImage(){
        const myImage = document.createElement("img")
        myImage.src = http;
        body.appendChild(myImage); 
      
}
//3.Make an API call using the Fetch API. Make use of the following API
async function callApi(){
    try {
        const myData = await fetch("https://reqres.in/api/users");
        const result = await myData.json();
        console.log(result.data);
        for(let i =0; i <3; i++){
            const name = document.createElement("h3");
            name.innerHTML="First_name : "+ result.data[i].first_name;
            body.appendChild(name);
        }
        
    } catch (error) {
        console.log(error);
    }
};
callApi()