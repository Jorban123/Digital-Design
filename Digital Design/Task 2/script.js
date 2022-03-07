let getDayInfo = (date) => {
	let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
	let months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октябрь", "Ноября", "Декабря"];
	let mas = date.split(".");
	let dates = new Date(mas[2], mas[1] - 1, mas[0]);
	let numberInWeek = dates.getDay();
	let day = dates.getDate();
	let month = dates.getMonth();
	let year = dates.getFullYear();
	console.log(days[numberInWeek] + ", " + Math.ceil(day / 7) + " неделя " + months[month] + " " + year + " года");
};

getDayInfo("08.03.2022");
