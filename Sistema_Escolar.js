const readline = require('node:readline/promises');
const { stdin, stdout } = require('node:process');

const rl = readline.createInterface({ input: stdin, output: stdout });

async function main() {
  let quantidadeEstudantes = parseInt(await rl.question('Digite a quantidade de estudantes que serão cadastrados: '));
  let quantidadeAprovados = 0;
  let quantidadeRecuperacao = 0;
  let quantidadeReprovados = 0;

    for (let i = 0; i < quantidadeEstudantes; i++) {
        let nome = await rl.question(`Digite o nome do estudante ${i + 1}: `);

        let nota1;
        do {
            nota1 = parseFloat(await rl.question(`Digite a primeira nota de ${nome} (0 a 10): `));
            if (nota1 < 0 || nota1 > 10) {
                console.log('Nota inválida. Por favor, digite uma nota entre 0 e 10.');
            }
        } while (nota1 < 0 || nota1 > 10);

        let nota2;
        do {
            nota2 = parseFloat(await rl.question(`Digite a segunda nota de ${nome} (0 a 10): `));
            if (nota2 < 0 || nota2 > 10) {
                console.log('Nota inválida. Por favor, digite uma nota entre 0 e 10.');
            }
        } while (nota2 < 0 || nota2 > 10);

        let media = (nota1 + nota2) / 2;

        let situacao;

        if (media >= 7) {
            situacao = 'Aprovado';
            quantidadeAprovados++;
        } else if (media >= 5) {
            situacao = 'Recuperação';
            quantidadeRecuperacao++;
        } else {
            situacao = 'Reprovado';
            quantidadeReprovados++;
        }

        console.log(`Estudante: ${nome}, Média: ${media.toFixed(2)}, Situação: ${situacao}`);
    }

    console.log(`\nQuantidade total de estudantes: ${quantidadeEstudantes}`);
    console.log(`Quantidade de aprovados: ${quantidadeAprovados}`);
    console.log(`Quantidade em recuperação: ${quantidadeRecuperacao}`);
    console.log(`Quantidade de reprovados: ${quantidadeReprovados}`);

    rl.close();

}

main();