const fetchData = () =>{

    return fetch(`https://jsonplaceholder.typicode.com/users`)

    .then(response => response.json())
    
    .then(data => {
         console.log(data[0]["id"]);
                document.getElementById(`h1`).innerHTML = `${data[0]["id"]}`;
                document.getElementById(`h2`).innerHTML = `${data[0]["name"]}`;
                document.getElementById(`h3`).innerHTML = `${data[0]["username"]}`;
                document.getElementById(`h4`).innerHTML = `${data[0]["email"]}`;
                document.getElementById(`h5`).innerHTML = `${data[0]["address"]["street"]}`;
                document.getElementById(`h6`).innerHTML = `${data[0]["phone"]}`;
                document.getElementById(`h7`).innerHTML = `${data[0]["website"]}`;
                document.getElementById(`h8`).innerHTML = `${data[0]["company"]["name"]}`;
            })
    
}