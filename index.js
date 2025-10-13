//1
const students = [
    { name: "Алексей", scores: [85, 92, 78] },
    { name: "Мария", scores: [95, 87, 92] }
];
// console.log(calculateGrade(students));
/* 
Ожидаемый результат:
[
    { name: "Алексей", scores: [85,92,78], average: 85, grade: "B" },
    { name: "Мария", scores: [95,87,92], average: 91.33, grade: "A" }
]
*/

function average (scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum/scores.length;
}


function gradeFn(avg){
   if (avg >= 90 && avg <= 100){
     return "A"
   }
  else if (avg >= 80 && avg < 90){
    return "B";
  }
  else if(avg >= 70 && avg < 80){
    return "C";
  }
  else {
    return "F";
  }
}

function calculateGrade (students) {
    let result = [];
    for (student of students) {
      result.push({
        ...student,
        average: average(student.scores),
        grade: gradeFn(average(student.scores))})
    } 
    return result;
}

console.log(calculateGrade(students));


//2
const filterProducts = (products, filters) => {
  let tempItem = [];
  if ((filters.maxPrice) && (filters.category)) {
    for (let item of products) {
      if (item.price <= filters.maxPrice && item.category === filters.category) {
        tempItem.push(item);
      }
    }
  return tempItem;
  }
}

const products = [
    { name: "Ноутбук", price: 50000, category: "электроника" },
    { name: "Стул", price: 5000, category: "мебель" },
    { name: "Кофеварка", price: 15000, category: "электроника" }
];
const filters = { maxPrice: 20000, category: "электроника" };
console.log(filterProducts(products, filters));
// Ожидаемый результат: [{ name: "Кофеварка", price: 15000, category: "электроника"}]