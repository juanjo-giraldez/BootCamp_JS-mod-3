const empleado = {
  bruto: 28000,
  hijos: 2,
  pagas: 12,
};

let rangoSalario;

switch (true) {
  case empleado.bruto < 12000:
    rangoSalario = 0;
    break;
  case empleado.bruto < 24000:
    rangoSalario = 0.08;
    break;
  case empleado.bruto < 34000:
    rangoSalario = 0.16;
    break;
  default:
    rangoSalario = 0.3;
    break;
}

const retencion = empleado.hijos > 0 ? rangoSalario - 0.02 : rangoSalario;
const resultadoRetencion = empleado.bruto * retencion;
const netoAnual = empleado.bruto - resultadoRetencion;
const netoMensual = empleado.pagas > 12 ? netoAnual / 14 : netoAnual / 12;

console.log("rango Salario", rangoSalario);
console.log("rango retencion", retencion);
console.log("resultado Retencion", resultadoRetencion);
console.log("netoAnual", netoAnual);
console.log("netoAnual", netoMensual);
