<html>
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="Projeto de formulario">
        <meta name="keywords" content="Formulario, PHP, HTML, Futebol">
        <meta name="author" content="Daniel Silva">
        <title>Formulário de Cadastro</title>
        <link rel="stylesheet" href="assets/css/formulario.css">
    </head>
    <body>

        <h1>Formulário</h1>
        
        <ul id="erros"></ul>

        <form method="GET" name="formulario_envio" onsubmit="return validateForm();" action="receber.php" id="formulario_envio">
            <span>Nome:</span>
            <input type="text" name="nome" id="nome" value=""/>
            <br/>
            <span>Cidade:</span>
            <select name="cidade" id="cidade">
                <option value=""></option>
                <option value="rj">Rio de Janeiro</option>
                <option value="sp">São Paulo</option>
            </select>
            <br/>
            <label id="label_padrao">Sexo</label>
            <br/>
            <input type="checkbox" name="genero" value="m"> Masculino
            <input type="checkbox" name="genero" value="f"> Feminino
            <br/>
            <label id="label_padrao">Escolaridade</label>
            <br/>
            <input type="radio" name="escolaridade" value="ensino_fundamental">
            <span>Ensino Fundamental</span><br>
            <input type="radio" name="escolaridade" value="ensino_medio">
            <span>Ensino Médio</span><br>
            <input type="radio" name="escolaridade" value="ensino_superior">
            <span>Ensino Superior</span><br>

            <br/>
            <label id="label_padrao">Observação</label>
            <br/>
            <textarea name="observacao" rows="5" cols="20"></textarea>

            <br/>
            <input type="submit" value="Enviar"/>
            <input type="reset" value="Resetar"/>
            <br/>
        </form>

    </body>
</html>

<script src="assets/js/formulario.js"></script>