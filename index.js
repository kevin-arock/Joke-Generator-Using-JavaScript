function fetchData(){
    fetch(`https://official-joke-api.appspot.com/random_joke`)
    .then(response => response.json())
    .then(data => display(data))
    .catch(err => console.error(err));
}


function display(data){
    let setup = document.querySelector('.setupp');
    let punch = document.querySelector('.punchline');
    setup.innerHTML = `${data.setup}`;
    punch.innerHTML = `${data.punchline}`;

}

