"use strict";

const totalTasks = 12;
const completedTasks = 5;
const dailyLimit = 3;

// Здесь разместите своё решение.

if (typeof totalTasks === "string" || typeof completedTasks === "string") {
    console.log("Ошибка: вместо числа передана строка.");
} 

else if (typeof dailyLimit === "string") {
    console.log("Ошибка: дневная норма задана строкой.");
} 

else if (!Number.isFinite(totalTasks) || !Number.isFinite(completedTasks)) {
    console.log("Ошибка: недопустимое числовое значение.");
} 

else if (!Number.isFinite(dailyLimit)) {
    console.log("Ошибка: недопустимое числовое значение нормы.");
} 

else if (!Number.isInteger(totalTasks) || !Number.isInteger(completedTasks)) {
    console.log("Ошибка: дробное количество.");
} 

else if (!Number.isInteger(dailyLimit)) {
    console.log("Ошибка: дробной дневной нормы быть не должно.");
} 

else if (totalTasks < 0 || completedTasks < 0) {
    console.log("Ошибка: отрицательное количество.");
} 

else if (dailyLimit < 1) {
    console.log("Ошибка; цикл не запускается.");
} 

else if (totalTasks > 1000 || completedTasks > 1000) {
    console.log("Ошибка: превышена верхняя граница.");
} 

else if (dailyLimit > 1000) {
    console.log("Ошибка: превышена верхняя граница нормы.");
} 

else if (completedTasks > totalTasks) {
    console.log("Ошибка: некорректное число выполненных задач.");
}

else if (totalTasks - completedTasks === 0) {
  console.log("Все задачи уже выполнены.");
  console.log("Потребуется дней: 0")
}

else {
    
    let days = 0
    let tasksLeft = totalTasks - completedTasks
    console.log(`Осталось задач: ${tasksLeft}`)
    let completed = 0
    while (tasksLeft > 0) {
        if (tasksLeft >= dailyLimit) {
            days += 1
            tasksLeft -= dailyLimit
            completed = dailyLimit
        }
        else {
            completed = tasksLeft
            tasksLeft = 0
            days += 1
            
        }
        
        
        console.log(`День ${days}: выполнено ${completed}, осталось ${tasksLeft}`)

    }

    console.log(`Потребуется дней: ${days}`)
    
}