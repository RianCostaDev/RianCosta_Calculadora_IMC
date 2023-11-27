const calcularImc = () => {
    let resultado;
    let imc;
    let img;
    let tipo;
    const dadosDoUsuario = document.getElementById('dados')
    const resultadoFinal = document.getElementById('resultado')
    const idade = document.getElementById('idade').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    
    resultado = peso/altura**2

    if (!resultado){
        resultadoFinal.innerHTML = `<h2>Valor incorreto</h2>`;

    }
    
    else{

        if (idade < 60){
            tipo = 'Adulto'
            if (resultado < 18.5){
                imc = 'Baixo Peso'
                img = 'abaixo do peso.png'
            }else if (resultado >= 18.5 && resultado <= 24.5){
                imc = 'Peso Normal'
                img = 'peso normal.png'
            }else if (resultado >= 25 && resultado <= 29.9){
                imc = 'Excesso de Peso'
                img = 'acima do peso.png'
            }else if (resultado >= 30 && resultado <= 34.9){
                imc = 'Obesidade de Classe 1'
                img = 'obeso.png'
            }else if (resultado >= 35 && resultado <= 39.9){
                imc = 'Obesidade de Classe 2'
                img = 'obesidade 2.png'
            }else if (resultado >= 40){
                imc = 'Obesidade de Classe 4'
                img = 'obesidade 2.png'
            }

        }else if (idade >= 60){
            tipo = 'Idoso'
            if (resultado <= 22){
                imc = 'Baixo Peso'
                img = 'abaixo do peso.png'
            }else if (resultado > 22 && resultado < 27){
                imc = 'Adequado ou eutotrófico'
                img = 'peso normal.png'
            }else if (resultado >= 27){
                imc = 'Sobrepeso'
                img = 'acima do peso.png'
            }
        }

        dadosDoUsuario.innerHTML = `
        <div class="main-calccontainer-esquerdo-dados-img">
            <img src="../img/${img}" alt="">
        </div>
        <div class="main-calccontainer-esquerdo-dados-texto">
            <p><span>Sua idade é: </span> ${idade}</p>
            <p><span>Você é: </span> ${tipo}</p>
            <p><span>Sua altura é de: </span> ${altura}m</p>
            <p><span>Seu peso é de: </span> ${peso}Kg</p>
            <p><span>Seu IMC é: </span> ${resultado}</p>
            <p><span>Sua classificação é: </span> ${imc}</p>
        </div>

        `;
        resultadoFinal.innerHTML = `<h2>${resultado}</h2>`;

    }

}