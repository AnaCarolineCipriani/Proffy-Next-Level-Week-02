// Procurar o botao, quando clicar no botao duplicar o conteudo de um novo horario e colocar na pagina 


//Procurar o botao
document.querySelector("#add-time")  //add-time e o id do botao

//Quando clicar no botao 
.addEventListener('click',cloneField)  

//Executar uma acao
function cloneField() {  // Todas as vezes que clicar no botao, vai chamar esse cloneField
    //Duplicar os campos. Que campo? 
    const newfFieldContainer = document.querySelector(".schedule-item").cloneNode(true) //const: variavel constante

    // Limpar os campos. Que campos? Quando duplica os campos, se voce colocar o horario ele fica igual
    const fields = newfFieldContainer.querySelectorAll('input')

    //console.log(fields[0].value ="") esse console.log(fields) vai mostrar uma lista de dois inputs: o time-from e o time-to, entao, definimos o value vazio para que quando clonarmos os elementos html, ele inicie com os valores vazios

    //Para cada campo, limpar
    //fields[0].value =""
    //fields[1].value =""

    fields.forEach(function(field){ //esse field é como um i em um for
        //pegar o field do momento
        field.value=""

    })

    //Colocar na pagina. Onde? 
    document.querySelector("#schedule-items").appendChild(newfFieldContainer)

}