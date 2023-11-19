export default function formatarNumeroComSeparadorMilhar(numero) {
    return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }