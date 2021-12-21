
// alert('Load');

//Fetch()
var div_user = document.querySelector('#user');
var div_userjanet = document.querySelector('#userjanet');

    getuser()
    .then(data => data.json() )
    .then(users => {
        usuarios = users.data;
        console.log(usuarios);
        mostraruser(usuarios);       

        return getjanet();
    })
    .then(data => data.json())
    .then(userjanet => {
        user = userjanet.data;
        mostraruser_janet(user);
    });

function getuser(){
    return fetch('https://reqres.in/api/users');
}

function getjanet(){
    return  fetch('https://reqres.in/api/users/2')
}

function mostraruser(usuarios){
    usuarios.map((user, i)=> {
        let name = document.createElement('h2');

        name.innerHTML = "Indice:" + i + " id:"+  user.id + " " + user.first_name + " " + user.last_name;
        div_user.appendChild(name);

        document.querySelector('.loading').style.display = 'none';

    });
}

function mostraruser_janet(user){
    let name = document.createElement('h3');

    name.innerHTML =  " id:"+  user.id + " " + user.first_name + " " + user.last_name;
    div_userjanet.appendChild(name);

    document.querySelector('.loading2').style.display = 'none';
}
