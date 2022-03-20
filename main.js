const empleado = {
  bruto: 28000,
  hijos: 2,
  pagas: 12,
};

const getSalaryRange = (item) => {
  let rangeSalary;
  switch (true) {
    case item.bruto < 12000:
      rangeSalary = 0;
      break;
    case item.bruto < 24000:
      rangeSalary = 0.08;
      break;
    case item.bruto < 34000:
      rangeSalary = 0.16;
      break;
    default:
      rangeSalary = 0.3;
      break;
  }
  return rangeSalary;
};

const getRetentionTotal = (item) => {
  return item.hijos > 0 ? getSalaryRange(item) - 0.02 : getSalaryRange(item);
};


const getNominationMonth = (item) => {

  const annualNet = item.bruto -  getRetentionTotal(item) * item.bruto

  // const annualNet = item.bruto / item.pagas * getRetentionTotal(item);

  return item.pagas > 12 ? annualNet / 14 : annualNet / 12;
};

console.log("Salary range", getSalaryRange(empleado)+ "%");
console.log("Retention", getRetentionTotal(empleado)+ "%");
console.log("Nomination:", getNominationMonth(empleado) + "€");

