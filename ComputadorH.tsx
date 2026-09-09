import { Computador } from "./Computador";

export class ComputadorH implements Computador {

    ligar(): void {
        console.log("O computador foi ligado.");
    }   
    reiniciar(): void {
        console.log("O computador está reiniciando.");
    }
    desligar(): void {
        console.log("O computador foi desligado.");
    }
    carregandoSistema(): void {
        console.log("O sistema está sendo carregado.");
    }
}