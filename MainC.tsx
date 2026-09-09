import { ComputadorG } from "./ComputadorG";
import { ComputadorH } from "./ComputadorH";

const computadorG = new ComputadorG();
const computadorH = new ComputadorH();

computadorG.ligar();
computadorG.reiniciar();
computadorG.desligar();
computadorG.carregandoSistema();

computadorH.ligar();
computadorH.reiniciar();
computadorH.desligar();
computadorH.carregandoSistema();