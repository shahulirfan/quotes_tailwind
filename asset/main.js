
let keyWord = 'random'

const quotesApiUrl = `https://qapi.vercel.app/api/${keyWord}`;




// const apiData = fetch(quotesApiUrl)
// 	.then((responce) => responce.json())
// 	.then(data => {
		
// 		});

let quotes = document.getElementById('qots');
let author = document.getElementById('author');

let next = document.getElementById('nextQot');
let previ = document.getElementById('preQot');

let qotId;
async function Dataon(qots,author,id=null) {


    const responce  = await fetch(quotesApiUrl);
    const dataFetc = await responce.json();
    
    qots.innerText = dataFetc.quote;
    author.innerText = dataFetc.author;
    qotId = dataFetc.id;
    
    
}


var start = performance.now();
Dataon(quotes,author)

var duration = performance.now() - start;;


console.log(duration);


next.addEventListener('click',()=>{
    Dataon(quotes,author)
})



