console.log('Gerenciador Financeiro!');

var client = "Suhailah Alves"

console.log('Cliente: ' + client);


// 1 - module
var valProduct = 100;
var valDiscount = 37;

// 4 - Incluindo o arquivo calDiscount
var discountFunc =  require("./modules/calDiscount")

// 5 -Passando os dois Parâmetros (valPro)
var finalValue = discountFunc(valProduct, valDiscount);

console.log('Valor final do produto R$ ' + finalValue);