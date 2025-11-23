const header = document.querySelector('header');
const section = document.querySelector('section');

async function Populate() {

    const requestURL = 'https://b12lor.github.io/lesson10/js/i-scream.json';

    const myRequest = new Request(requestURL);

    const response = await fetch(myRequest);

    const iScream = await response.json();

    console.log(iScream);

    populateHeader(iScream);
    showTopFlavors(iScream);
}

Populate();

function populateHeader(jsonObj) {
    const headerH1 = document.createElement('h1');
    headerH1.textContent = jsonObj.companyName;
    header.appendChild(headerH1);
}

function showTopFlavors(jsonObj) {

    let topFlavors = jsonObj.topFlavors;

    for (let i = 0; i < topFlavors.length; i++) {

        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let ul = document.createElement('ul');

        h2.textContent = topFlavors[i].name;

        img.setAttribute('src', 'https://b12lor.github.io/lesson10/images/' + topFlavors[i].image);

        let ingredients = topFlavors[i].ingredients;

        for (let j = 0; j < ingredients.length; j++) {
            let li = document.createElement('li');
            li.textContent = ingredients[j];
            ul.appendChild(li);
        }
          //display the calories of the ice cream
        let caloriesP = document.createElement('p');
        caloriesP.textContent = `Calories: ${topFlavors[i].calories}`;
         
        //condition to change the color of the calories
        if(topFlavors[i].calories > 400)
        {
            caloriesP.style.color = 'red'
        }
        else{
           caloriesP.style.color = 'green' 
        }
        
        //display the type of the ice cream as a badge
        let typeP = document.createElement('p');
        typeP.textContent = `Type: ${topFlavors[i].type}`;
        typeP.style.fontWeight = "bold";
        
        
        
       
        article.appendChild(h2);
        article.appendChild(img);
        article.appendChild(ul);
        article.appendChild(caloriesP);
        article.appendChild(typeP)
        section.appendChild(article);
    }
}
