
// alert('Load');

//Fetch()
var div_user = document.querySelector('#user');
var user = [];

fetch('https://reqres.in/api/users')
    .then(data => data.json() )
    .then(users => {
        usuarios = users.data;
        console.log(usuarios);

        usuarios.map((user, i)=> {
            let name = document.createElement('h2');

            name.innerHTML = "Indice:" + i + " id:"+  user.id + " " + user.first_name + " " + user.last_name;
            div_user.appendChild(name);

            document.querySelector('.loading').style.display = 'none';
        });
    });


