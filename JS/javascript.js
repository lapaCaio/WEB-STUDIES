document.write("Aqui já é Javascript!\n")

var nula = null
var booleana = true
var number = 12
var string = "sla kk"

const nome_da_constante = "Programação Web" //é uma constante normal


var a, inteiro, real

a = "40"
inteiro = parseInt(a)
real = parseFloat(a)

a = "4.25"
inteiro = parseInt(a)
real = parseFloat(a)

a = "4.25Kg"
inteiro = parseInt(a)
real = parseFloat(a)

//funções de manipulação de strings
var nome = "cAiO lApA"

var maiuscula = nome.toUpperCase()
document.write(maiuscula)

var minuscula = nome.toLowerCase()
document.write(minuscula)

var corte
var pais = "BRASIL"

corte = pais.substring(0,2) //retorna BR
corte = pais.substring(2,2) //retorna AS
corte = pais.substring(3,1) //retorna S

//comandos de entrada e saída
document.write("Texto")
alert("Alertazin de cria aqui!")

var ninguem_usa_isso = prompt("É sério, ninguem usa mesmo!")  //sempre retorna uma string, se quiser usar pra algo, tem que converter
var ninguem_usa_isso = parseInt(prompt("Só um exemplozin!"))

var confirmacao = confirm("Confirma aí pra nois!")

//estrutura condicionais
var a, b

a = 10
b = 5

if(a != b){
    alert("sla boy")
}

//TODAS SÃO IGUAIS À LINGUAGEM C!
//FOR, WHILE, DO WHILE...

//Arrays
var quantidade_de_espacos = 10

nome_do_array = new Array(quantidade_de_espacos)  //criado um vetor com 10 posições vazias

dias_da_semana = new Array("C", "A", "I", "O")

dias_da_semana = ["L", "A", "P", "A"]  //é um vetor dinâmico, ou seja, n tem tamanho definido e pode variar, possui funções especificas para o uso...
dias_da_semana.push(10)
dias_da_semana.pull(10)

//manipulação de array
nomes = new Array("Caio", "Pereira", "Lapa")

nomes_juntos = nomes.join("-")  //junta tudo com um '-' entre os nomes
nomes_invertidos = nomes.reverse()  //coloca ao contrario
nomes_ordenados = nomes.sort()   //ordena
tamanho = nomes.lenght()  //diz o tamanho pra nois

//método Date()
data_completa = new Date()
document.write(data_completa)

data_completa.getDay()
data_completa.getMonth()
data_completa.getFullYear()
data_completa.getHours()
data_completa.getMinutes()
data_completa.getSeconds()


