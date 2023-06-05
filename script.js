function table() {
    let table = document.getElementById('stockTable');
    table.style.color = 'black';

    //Делаем заголовки
    let header1 = document.createElement("th");
    header1.innerHTML = "Дата";
    header1.style.color = 'black';
    header1.style.width = '12vw';
    table.appendChild(header1);

    let header2 = document.createElement("th");
    header2.innerHTML = "Цена акций";
    header2.style.color = '#497693';
    table.appendChild(header2);

    let header3 = document.createElement('th');
    header3.innerHTML = 'Кол-во сделок';
    header3.style.color = 'red';
    table.appendChild(header3); 


    //создаем таблицу и выводим в нее значения из массивов
    let date = ['28.04.2023', '27.04.2023', '26.04.2023', '25.04.2023', '24.04.2023', '21.04.2023', '20.04.2023', '19.04.2023', '18.04.2023', '17.04.2023',
                '14.04.2023', '13.04.2023', '12.04.2023', '11.04.2023', '10.04.2023', '07.04.2023', '06.04.2023', '05.04.2023', '04.04.2023', '03.04.2023'];
                
    let closePrice = [186.00, 189.20, 195.90, 184.00, 189.50, 193.00, 196.00, 199.00, 204.80, 206.10, 
                      204.70, 201.40, 191.40, 190.20, 195.40, 191.70, 189.30, 197.00, 204.20, 196.40];
    
    let deals = [7820, 12405, 20991, 11460, 10910, 5632, 8878, 15573, 11913, 15657,
                    35587, 48828, 5126, 9936, 13398, 27737, 24878, 30036, 29287, 61601];




    for (let i = 0; i < closePrice.length; i++) {
        let row = document.createElement('tr');

        let cell1 = document.createElement('td');
        cell1.innerHTML = date[i];
        cell1.style.textAlign = 'center';
        row.appendChild(cell1);

        let cell2 = document.createElement('td');
        cell2.innerHTML = closePrice[i];
        cell2.style.textAlign = 'center';
        row.appendChild(cell2);

        let cell3 = document.createElement('td');
        cell3.innerHTML = deals[i];
        cell3.style.textAlign = 'center';
        row.appendChild(cell3);
        table.appendChild(row);
    }
  
    let priceSum = 0;
    for (let i = 0; i < closePrice.length; i++) {
        priceSum = priceSum + closePrice[i];
    }

    let stockAverage = priceSum / closePrice.length;
    let squared_diff_sum = 0;
    for (i = 0 ; i < closePrice.length; i++){
        squared_diff_sum = squared_diff_sum + (closePrice[i] - stockAverage) ** 2;
    }
    let st_deviation = (Math.sqrt(squared_diff_sum / closePrice.length)).toFixed(5);
    let alert1 = document.getElementById('average');
    alert1.innerHTML = 'Среднеквадратическое отклонение: ' + st_deviation;

    let minValue = Math.min.apply(0, closePrice);
    let alert2 = document.getElementById('minValue');
    alert2.innerHTML = 'Минимальное значение: ' + minValue;

    let maxValue = Math.max.apply(0, closePrice);
    let alert3 = document.getElementById('maxValue');
    alert3.innerHTML = 'Максимальное значение: ' + maxValue;
    }
    table()