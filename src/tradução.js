class No {
  constructor(codons) {
    this.codons = codons;
    this.prox = null;
  }
}

class ListaCodons {
  constructor() {
    this.comeco = null;
  }

  insLista(novoNo) {
    if (!this.comeco) {
      this.comeco = novoNo;
    } else {
      let aux = this.comeco;
      while (aux.prox) {
        aux = aux.prox;
      }
      aux.prox = novoNo;
    }
  }

  printProt() {
    let aux = this.comeco;
    while (aux) {
      if (aux.codons[0] === "C" && aux.codons[1] === "U") {
        console.log("Leucina - ");
      } else if (aux.codons[0] === "U" && aux.codons[1] === "C") {
        console.log("Serina - ");
      } else if (aux.codons[0] === "C" && aux.codons[1] === "C") {
        console.log("Prolina - ");
      } else if (aux.codons[0] === "C" && aux.codons[1] === "G") {
        console.log("Arginina - ");
      } else if (aux.codons[0] === "A" && aux.codons[1] === "C") {
        console.log("Treonina - ");
      } else if (aux.codons[0] === "G" && aux.codons[1] === "U") {
        console.log("Valina - ");
      } else if (aux.codons[0] === "G" && aux.codons[1] === "C") {
        console.log("Alanina - ");
      } else if (aux.codons[0] === "G" && aux.codons[1] === "G") {
        console.log("Glicina - ");
      } else if (aux.codons[0] === "U" && aux.codons[1] === "G") {
        if (aux.codons[2] === "C" || aux.codons[2] === "U") {
          console.log("Cisteina - ");
        } else if (aux.codons[2] === "G") {
          console.log("Triptofano - ");
        } else {
          console.log("Fim");
          return;
        }
      } else if (aux.codons[0] === "U" && aux.codons[1] === "A") {
        if (aux.codons[2] === "C" || aux.codons[2] === "U") {
          console.log("Tirosina - ");
        } else {
          console.log("Fim");
          return;
        }
      } else if (aux.codons[0] === "U" && aux.codons[1] === "U") {
        if (aux.codons[2] === "C" || aux.codons[2] === "U") {
          console.log("Fenilalanina - ");
        } else {
          console.log("Leucina - ");
        }
      } else if (aux.codons[0] === "C" && aux.codons[1] === "A") {
        if (aux.codons[2] === "C" || aux.codons[2] === "U") {
          console.log("Histidina - ");
        } else {
          console.log("Glutamina - ");
        }
      } else if (aux.codons[0] === "A" && aux.codons[1] === "A") {
        if (aux.codons[2] === "C" || aux.codons[2] === "U") {
          console.log("Asparagina - ");
        } else {
          console.log("Lisina - ");
        }
      } else if (aux.codons[0] === "A" && aux.codons[1] === "G") {
        if (aux.codons[2] === "C" || aux.codons[2] === "U") {
          console.log("Serina - ");
        } else {
          console.log("Arginina - ");
        }
      } else if (aux.codons[0] === "G" && aux.codons[1] === "A") {
        if (aux.codons[2] === "C" || aux.codons[2] === "U") {
          console.log("Ácido Aspártico - ");
        } else {
          console.log("Ácido Glutâmico - ");
        }
      } else if (aux.codons[0] === "A" && aux.codons[1] === "U") {
        if (
          aux.codons[2] === "C" ||
          aux.codons[2] === "U" ||
          aux.codons[2] === "A"
        ) {
          console.log("Isoleucina - ");
        } else {
          console.log("Metionina - ");
        }
      }
      aux = aux.prox;
    }
  }
}

function main() {
  const lista = new ListaCodons();
  let codons = "";

  do {
    for (let i = 0; i < 3; i++) {
      codons += prompt(`Digite o ${i + 1}º codon:`);
    }

    if (codons === "AUG") {
      lista.comeco = new No(codons);
    } else if (lista.comeco) {
      const novoNo = new No(codons);
      lista.insLista(novoNo);
    }

    codons = "";
  } while (codons !== "UGA" && codons !== "UAG" && codons !== "UAA");

  lista.printProt();
}

main();
