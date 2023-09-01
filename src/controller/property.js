
const { Property } = require('../model/Property');
const { Validation } = require('./validation.js');
const prompt = require('prompt-sync')();

const propertys = new Property();

let option;

console.log('\n*********** Seja bem vindo ao Organiza Css ***********\n');

do {
  input = prompt('Insira uma propriedade ou digite "SAIR" para imprimir a lista: ');

  if(input.toLocaleUpperCase() != 'SAIR') {
    if(Validation.validationInput(input)) {
      if(propertys.findProperty(input)) {
        console.log(`\nA propriedade "${input}" foi inserida com sucesso ✨\n`)
        propertys.addProperty(input);
      } else {
        console.log(`\nA propriedade ${input} já foi inserida, insira uma nova propriedade.\n`)
      }
    } else {
      console.log(`\n"${input}" não é uma opção válida 🚫\n`);
    }
  }
} while (input.toLocaleUpperCase() != 'SAIR');


if(propertys.propertys.length > 0) {
  console.log(`\n***** Propriedades CSS *****\n`);
  
  const orderProperty = propertys.orderProperty();
  propertys.showProperty(orderProperty);
  
  console.log(`\n***** **************** *****`);
} else {
  console.log(`\n************************************************`);
  console.log('\nVocê não inseriu nenhuma propriedade.')
  console.log(`\n************************************************`);
}