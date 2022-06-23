let fullName = "Marvellous Victor Okon";
let height = "6.71ft";
let country = "Nigeria";
let displayText = document.getElementById('displayText');

// A way of doing it using button to display details

// let btn = document.getElementById("btn");
// btn.addEventListener('click', display);
// function display(){
//     displayText.innerHTML = `<p>Name: ${fullName} </p> <p>Height: ${height} </p> <p>Country: ${country}</p>`;
// }


// A Way of doing it through Inner Html
displayText.innerHTML = `<p>Name: ${fullName} </p> <p>Height: ${height} </p> <p>Country: ${country}</p>`;



// Another Way of Doing it using document.write
// document.write(`<h2><p>Name: ${fullName} </p> <p>Height: ${height} </p> <p>Country: ${country}</p></h2>`)