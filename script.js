// Получаем элементы на странице
var prevMonthBtn = document.getElementById("prevMonthBtn");
var nextMonthBtn = document.getElementById("nextMonthBtn");
var currentMonthElement = document.getElementById("currentMonth");
var calendarBodyElement = document.getElementById("calendarBody");

// Создаем объект даты
var currentDate = new Date();

// Функция для отображения календаря
function renderCalendar() {
    // Очищаем содержимое таблицы календаря
    calendarBodyElement.innerHTML = "";

    // Получаем текущий месяц и год
    var currentMonth = currentDate.getMonth();
    var currentYear = currentDate.getFullYear();

    // Устанавливаем заголовок с текущим месяцем и годом
    currentMonthElement.textContent = new Intl.DateTimeFormat("ru-RU", { month: "long", year: "numeric" }).format(currentDate);

    // Создаем новую дату, с которой начнется отображение календаря
    var firstDayOfMonth = new Date(currentYear, currentMonth, 1);

    // Определяем, с какого дня недели начинается месяц
    var startDay = firstDayOfMonth.getDay();

    // Определяем количество дней в месяце
    var daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Создаем ячейки для каждого дня в месяце
    var date = 1;
    for (var i = 0; i < 6; i++) {
        var row = document.createElement("tr");

        for (var j = 0; j < 7; j++) {
            if (i === 0 && j < startDay) {
                // Заполняем пустые ячейки до начала месяца
                var cell = document.createElement("td");
                row.appendChild(cell);
            } else if (date > daysInMonth) {
                // Завершаем отображение после последнего дня месяца
                break;
            } else {
                // Создаем ячейку с датой
                var cell = document.createElement("td");
                cell.textContent = date;
                row.appendChild(cell);
                date++;
            }
        }

        calendarBodyElement.appendChild(row);
    }
}

// Обработчики событий для кнопок перехода по месяцам
prevMonthBtn.addEventListener("click", function () {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextMonthBtn.addEventListener("click", function () {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// Инициализация календаря
renderCalendar();