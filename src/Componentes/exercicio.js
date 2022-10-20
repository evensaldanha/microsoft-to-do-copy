
// const fabricantes = ["BMW", "Mercedez", "Ferrari"]

// function imprimir(nome, indice){
//     console.log(`${indice +1}. ${nome}`)
// }

// fabricantes.forEach(imprimir)
// fabricantes.forEach(fabricante => console.log(fabricante))

// function exercicio1(nome){
//    return "olá," +`${nome}`
// }
// console.log(exercicio1("Even!"))


// function exercicio2(idade,dias) {
//     return `${idade}` *`${dias}`
// }
// console.log(exercicio2(30, 365))
// console.log(parseInt("30" / 365))

// function calcularsalario(horastrabalhada, receber){
//     const recebeporhora= horastrabalhada / 8
//     const receberototal= receber * recebeporhora
    

//     return(
//         "Salário igual a R$"+`${receberototal}`
//     )
// }
// console.log(calcularsalario(120, 5000))


// function mes(number){
//     switch (number) {
//     case 1:
//          console.log( "janeiro");
//         break;
    
//     case 2:
//          console.log( "fevereiro");
//         break;

//     case 3:
//             console.log( "março");
//            break;

//     case 4:
//             console.log( "abril");
//            break;

//     case 5:
//             console.log( "maio");
//            break;

//     case 6:
//             console.log( "junho");
//            break;
//     case 7:
//             console.log( "julho");
//            break;
//     case 8:
//             console.log( "agosto");
//            break;
//     case 9:
//             console.log( "setembro");
//            break;
//     case 10:
//             console.log( "outubro");
//            break;
//     case 11:
//             console.log( "novembro");
//            break;
//     case 12:
//             console.log( "dezembro");
//            break;
    
//         default:
//             console.log("default");
//     }
// }
// console.log(mes(5))

// function saberomaior(number1, number2){
//     if( number1 >= number2){
//       return  true
//     } else {
//       return false
//     }
// }
// console.log(saberomaior(12,12))


// function inverso(primeiro, segundo){
//     if(typeof primeiro != typeof segundo) 
//         return false
//     return primeiro >= segundo

// }
// console.log(inverso( 3, 3))

// function inverso(valor) {
//     const tipo= typeof valor

//     if (tipo =="boolean") {return !valor}
//     else if (tipo == "number") return -valor
//     else
//     return `booleano ou número esperado, mas  o parametro é do tipo ${tipo}`
// }
// console.log(inverso("programação"))




// function repeticao(number){
//     let resultado = " "
//     for(let i= 0; i < number; i++){
//     resultado += " +"

//     resultado = resultado + " +" ambas são formas de escrever diferentes, mas com o msm resultado
//     }
//     return resultado
// }
// console.log(repeticao(6))



// function repetir(item, quantidade) {
//     let resultado = []
//     for (let i = 0; i < quantidade; i++)
//     resultado.push(item)
//     return resultado
//     }
// console.log(repetir("código", 3))    

// function retornarOPrimeiroEUltimo(adc){
// const testando = [12, 21, "ola"]    

// return {
//     testando.push(adc )
// }
// }


// function retornandoPrimeiroEUltimo([primeiroElemento, ...elementoRestante]){
//    const ultimoElemento = elementoRestante.pop()
//     return[primeiroElemento, ultimoElemento]
// }
// console.log(retornandoPrimeiroEUltimo([9, 20,15, "Oi"]))

// function objeto(obj,nomeDoAtributo){
//     delete obj[nomeDoAtributo]

//     return {...obj}
// }

// console.log(objeto({nome: "even", idade:30, altura:1.60 },"idade" ))

// function retornarSomenteNumeros(retornararrays){
    
//     return retornararrays.filter(function(numero){
//        if( typeof numero == "number"){return true}
//     })
// }
// console.log(retornarSomenteNumeros([ "pao",12, "amor", 22]))


function retornarArraysDeObj(obj){
    const retornandoarrays= []
    return 

}
console.log(retornarArraysDeObj("nome:Ana", " Idade: 30"))