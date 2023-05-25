const consultaBD = require("./consultaBD");

export function proteinaDNA(codigoIniciacaoActina, codigoParadaActina) {
  const actinaInicioDNA = consultaBD(codigoIniciacaoActina);
  const actinaFimDna = consultaBD(codigoParadaActina);
  const actinaDNA = actinaFimDna - actinaInicioDNA;

  return actinaDNA;
}

export function RNAPolimerase(actinaDNA) {
  const nucleotideos = actinaDNA.split("");

  for (let i = 0; i < nucleotideos.length; i++) {
    switch (nucleotideos[i]) {
      case "A":
        nucleotideos[i] = "U";
        break;
      case "T":
        nucleotideos[i] = "A";
        break;
      case "C":
        nucleotideos[i] = "G";
        break;
      case "G":
        nucleotideos[i] = "C";
        break;
      default:
        console.log("Inválido");
        break;
    }
  }

  const rna = nucleotideos.join("");
  return rna;
}

export function splicing(sequenciaRNA) {
  const introns = ["CGU", "AUC"];

  function removerIntrons(sequenciaRNA, introns) {
    let sequenciaFinal = sequenciaRNA;

    for (let i = 0; i < introns.length; i++) {
      const intron = introns[i];
      sequenciaFinal = sequenciaFinal.replace(intron, "");
    }

    return sequenciaFinal;
  }

  const rnaFinal = removerIntrons(sequenciaRNA, introns);
  return rnaFinal;
}
