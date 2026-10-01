const readline = require("node:readline/promises");
const { stdin: input, stdout: output } = require("node:process");

async function main() {

//1. Criar a interface

const rl = readline.createInterface({ input, output });

let acumulador = 0;

for (let i = 0; i < 5; i++) {
    const numero = Number(await rl.question("Digite um número: "));
    acumulador = acumulador + numero;
}

let media = acumulador / 5;
console.log(`A média dos números digitados é: ${media}`);
await rl.close();

};

main();