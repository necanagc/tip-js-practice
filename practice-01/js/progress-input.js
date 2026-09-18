"use strict";

const totalTasksText = " 12 ";
const completedTasksText = " 5 ";

if (totalTasksText === null || completedTasksText === null) {
    console.log("Ошибка: получено значение null.");
}

else if (totalTasksText === undefined || completedTasksText === undefined) {
    console.log("Ошибка: получено значение undefined.");
}

else if (
    typeof totalTasksText !== "string" || typeof completedTasksText !== "string"
) {
    console.log("Ошибка: входные данные должны быть строками.");
}

else {
    const totalTrimmed = totalTasksText.trim();
    const completedTrimmed = completedTasksText.trim();

    if (totalTrimmer === "" || completedTrimmed === "") {
        console.log("Ошибка: пустая строка.");
    }

    else {

        const totalTasks = Number(totalTrimmed);
        const completedTasks = Number(completedTrimmed);

        if (Number.isNaN(totalTasks) || Number.isNaN(completedTasks)) {
            console.log("Ошибка: строка не является числом.");
        }

        else if (!Number.isFinite(totalTasks) || !Number.isFinite(completedTasks)) {
    console.log("Ошибка: недопустимое числовое значение.");
} 

else if (!Number.isInteger(totalTasks) || !Number.isInteger(completedTasks)) {
    console.log("Ошибка: дробное количество.");
} 

else if (totalTasks < 0 || completedTasks < 0) {
    console.log("Ошибка: отрицательное количество.");
} 

else if (totalTasks > 1000 || completedTasks > 1000) {
    console.log("Ошибка: превышена верхняя граница.");
} 

else if (completedTasks > totalTasks) {
    console.log("Ошибка: выполнено больше, чем существует.");
} 

else {
    
    if (totalTasks === 0 && completedTasks === 0) {
        console.log("Задач пока нет");
    } else {
        const remainingTasks = totalTasks - completedTasks;
        const percentage = (completedTasks / totalTasks) * 100;
        
        let status = "";
        
        if (completedTasks === 0) {
            status = "Не начато";
        } else if (completedTasks === totalTasks) {
            status = "Завершено";
        } else {
            status = "В работе";
        }
        
        console.log(`Всего задач: ${totalTasks}`);
        console.log(`Выполнено: ${completedTasks}`);
        console.log(`Осталось: ${remainingTasks}`);
        console.log(`Прогресс: ${percentage.toFixed(1)}%`);
        console.log(`Статус: ${status}`);
    }
}
    }
}

