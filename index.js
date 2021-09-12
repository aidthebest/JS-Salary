"use strict"
const taxRate = 20;
console.log ("Налоговая ставка составляет: " + taxRate + " процентов")
const numberOfStaffAll = [ 5, 15, 40, 10]
const staffSalaryAll = [10_000, 25_000, 50_000, 100_000]
for (let i = 0; i < numberOfStaffAll.length; i++) {
  const numberOfStaff = numberOfStaffAll [i];
  console.log (numberOfStaff)
  const staffSalary = staffSalaryAll [i];
  console.log (staffSalary)
  const taxRate = 20;

  let taxSumm = Math.floor(numberOfStaff * staffSalary * taxRate / 100)

  console.log (taxSumm)

 
  console.log("Сумма налога составляет: " + taxSumm);
}
let x;
let allWorkers = numberOfStaffAll.map(i=>x+=i, x=0).reverse()[0]
console.log("Всего работников: " + allWorkers);

var totalSolaryForEachGroup = []
for (var i=0; i<numberOfStaffAll.length;i++) {
    totalSolaryForEachGroup.push(numberOfStaffAll[i]*staffSalaryAll[i]);
}
console.log(totalSolaryForEachGroup);

let allTaxSumm = totalSolaryForEachGroup.map(i=>x+=i, x=0).reverse()[0]
console.log("Всего налогов: " + allTaxSumm * taxRate / 100);

let averageTaxPerPerson = Math.floor (allTaxSumm / allWorkers)
console.log("Средний налог на одного сотрудника состаяляет: " + averageTaxPerPerson)