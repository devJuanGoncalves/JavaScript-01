var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

console.log('Campos -> ' + campos);

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {

    event.preventDefault();

    var tr = document.createElement('tr');

    campos.forEach(function(campo) {

        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);

    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

    console.table('Campos após incluir -> ' + campos);

    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();

});

/*

DOM (Document Object Model)

É a representação de dados dos objetos que compõem a estrutura e o conteúdo 
de um documento na Web.

O que é o DOM?

O Document Object Model é uma interface de programação para os documentos HTML e XML.
Representa a página de forma que os programas possam alterar a estrutura do coumento,
alterar o estilo e o conteúdo. O DOM representa o documento com nós e objetos, dessa forma,
as linguagens de programação podem se conectr à página.

Uma página Web é um documento. Este documento pode ser exibido na janela do navegador ou
como a fonte HTML. Mas é o mesmo documento nos dois casos. O DOM representa o mesmo documento
para que possa ser manipulado. O DOM é uma representação orientada a objetos da página da web,
que pode ser modificada com uma linguagem de script como JavaScript.

*/