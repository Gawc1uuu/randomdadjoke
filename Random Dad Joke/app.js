const jokes = document.querySelector(".title");
const button = document.querySelector("button");


const getDadJoke = async () =>{
const config = {headers:{Accept:"application/json"}}
const res = await axios.get('https://icanhazdadjoke.com/', config);
jokes.innerText = `"${res.data.joke}"`;
}

button.addEventListener('click',getDadJoke);