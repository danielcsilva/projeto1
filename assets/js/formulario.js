function validateForm(){


    const error_mensagem = [];


    let nome = document.forms['formulario_envio']['nome'].value
    let cidade = document.forms['formulario_envio']['cidade'].value
    let genero = document.forms['formulario_envio'][2].value

    //console.log(document.forms['formulario_envio'][2]);
    //return false;


    // = é atribuíção
    // == comparativo
    // "" NULL vazio
    // && associativo
    // || <> outro
    // != diferente
    // > maior que algo
    // < menor que algo
    // ! negação

    if(nome == ""){
        error_mensagem.push('nome não pode ser vazio');
        //alert('nome não pode ser vazio');
        //return false;
    }

    if(nome.length < 3){
        error_mensagem.push('o nome deve ser maior que 3 caracteres');
        //alert('o nome deve ser maior que 3 caracteres');
        //return false;
    }else 
        if(nome.length > 10){
            error_mensagem.push('o nome deve ser menor que 10 caracteres');
            //alert('o nome deve ser menor que 10 caracteres')
            //return false;
    }


    if(cidade == ""){
        error_mensagem.push('cidade não pode ser vazio');
        //alert('cidade não pode ser vazio');
        //return false;
    }



    if(genero == ""){
        //alert(genero);
        error_mensagem.push('genero não pode ser vazio');
        //alert('cidade não pode ser vazio');
        //return false;
    }


    if(error_mensagem.length > 0){
        //console.log(error_mensagem);
        errorMensage(error_mensagem);
        return false;
    }else{
        return true;
    }

    // se eu for de fora do rio e masculino == true
    // se eu sou do rio e sou masculino == falso
    // se eu sou de fora do rio mas sou feminino == falso

    /*
    if(cidade!="rj" || genero!="m"){ //true
        alert('no rio só entra macho');
        return false;
    }
    */ 
}

// ++ incremento
// -- decremento
// += acrescimo


function errorMensage(errors) {
    let display = "";
    for(const error of errors){
        display += '<li>'+error+'</li>';
    }
    document.getElementById("erros").innerHTML = display;

    //return false;
}