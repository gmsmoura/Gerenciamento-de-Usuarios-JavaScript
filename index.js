var fields = document.querySelectorAll("#form-user-create [name]")
var user = {};

function addLine(dataUser){ 
    var tr = document.createElement('tr');
    tr.innerHTML = `
    
    <tr>
        <td><img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
        <td>${dataUser.name}</td>
        <td>${dataUser.email}</td>
        <td>${dataUser.admin == 'on'?'Sim':'Não'}</td>
        <td>${new Date(dataUser.birth).toLocaleDateString('pt-BR')}</td>
        <td>
            <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
            <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
        </td>
    </tr>
    `
    document.getElementById('table-users').appendChild(tr);
}

document.getElementById('form-user-create').addEventListener('submit', function(event){
    event.preventDefault();//cancela a ação do evento nativo do JS
    
    //fields.forEach(function(field, index){
    fields.forEach((field, index) =>{ //arrow function
        if(field.name == "gender"){
            field.checked ? user[field.name] = field.value: false;
        } else {
            user[field.name] = field.value;
        }
    });
    addLine(user);
});