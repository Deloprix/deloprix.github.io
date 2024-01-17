// let tg = window.Telegram.WebApp;

// tg.expand();

// tg.MainButton.textColor = '#FFFFFF';
// tg.MainButton.color = '#2cab37';

// let item = "";

// let btn1 = document.getElementById("btn1");
// let btn2 = document.getElementById("btn2");
// let btn3 = document.getElementById("btn3");
// let btn4 = document.getElementById("btn4");
// let btn5 = document.getElementById("btn5");
// let btn6 = document.getElementById("btn6");

// btn1.addEventListener("click", function(){
// 	if (tg.MainButton.isVisible) {
// 		tg.MainButton.hide();
// 	}
// 	else {
// 		tg.MainButton.setText("Вы выбрали товар 1!");
// 		item = "1";
// 		tg.MainButton.show();
// 	}
// });

// btn2.addEventListener("click", function(){
// 	if (tg.MainButton.isVisible) {
// 		tg.MainButton.hide();
// 	}
// 	else {
// 		tg.MainButton.setText("Вы выбрали товар 2!");
// 		item = "2";
// 		tg.MainButton.show();
// 	}
// });

// btn3.addEventListener("click", function(){
// 	if (tg.MainButton.isVisible) {
// 		tg.MainButton.hide();
// 	}
// 	else {
// 		tg.MainButton.setText("Вы выбрали товар 3!");
// 		item = "3";
// 		tg.MainButton.show();
// 	}
// });

// btn4.addEventListener("click", function(){
// 	if (tg.MainButton.isVisible) {
// 		tg.MainButton.hide();
// 	}
// 	else {
// 		tg.MainButton.setText("Вы выбрали товар 4!");
// 		item = "4";
// 		tg.MainButton.show();
// 	}
// });

// btn5.addEventListener("click", function(){
// 	if (tg.MainButton.isVisible) {
// 		tg.MainButton.hide();
// 	}
// 	else {
// 		tg.MainButton.setText("Вы выбрали товар 5!");
// 		item = "5";
// 		tg.MainButton.show();
// 	}
// });

// btn6.addEventListener("click", function(){
// 	if (tg.MainButton.isVisible) {
// 		tg.MainButton.hide();
// 	}
// 	else {
// 		tg.MainButton.setText("Вы выбрали товар 6!");
// 		item = "6";
// 		tg.MainButton.show();
// 	}
// });


// Telegram.WebApp.onEvent("mainButtonClicked", function(){
// 	tg.sendData(item);
// });


// let usercard = document.getElementById("usercard");

// let p = document.createElement("p");

// p.innerText = `${tg.initDataUnsafe.user.first_name}
// ${tg.initDataUnsafe.user.last_name}`;

// usercard.appendChild(p);



document.addEventListener('DOMContentLoaded', function () {
    // Обработчик события нажатия кнопки "Добавить транзакцию"
    document.getElementById('addTransactionBtn').addEventListener('click', function () {
        // Значения полей ввода
        const asset = document.getElementById('asset').value;
        const amount = document.getElementById('amount').value;
        const rateUsdt = document.getElementById('rateUsdt').value;
        const timestamp = document.getElementById('timestamp').value;

        // Объект транзакции
        const transaction = {
            asset: asset,
            amount: parseFloat(amount),
            rateUsdt: parseFloat(rateUsdt),
            timestamp: timestamp
        };

        // Преобразование объекта транзакции в JSON
        const transactionJSON = JSON.stringify(transaction);

        // Запрос на сервер
        fetch('https://cryptoportfoliobackend.onrender.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: transactionJSON,
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log('Ответ от сервера:', data);
            // Здесь можно обработать ответ от сервера
        })
        .catch(error => {
            console.error('Ошибка: ', error);
        });

        // Вывод JSON в консоль
        console.log("Новая транзакция (в формате JSON):", transactionJSON);

        // Отправка данных в Telegram WebApp
        tg.sendData(transactionJSON);

        // Здесь можно выполнить дополнительные действия с объектом транзакции
    });
});







