export default class Mensagens {

    public listarOpcoes = () => {
        console.log(`Aqui você pode:`)
        console.log(`Somar, Subtrair ou Multiplicar números\n`)
    }

    public comoUsar = () => {
        console.log(`Para usar digite os números e a opção de cálculo separados por espaço como: "1.5 2.5 Soma"`)
        console.log(`O resultado será a soma dos números: 4`)
        console.log(`Para encerrar digite "Sair"\n`)
    }

    public boasVindas = () => {
        console.log('\nBem-vindo a calculadora polimórfica\n')
    }

}