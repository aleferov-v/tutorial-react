var promiseCount = 0;
function testPromise() {
    console.log(`Запуск (запуск синхронного кода)`);

    // Создаём обещание, возвращающее 'result' (по истечении 3-х секунд)
    var p1 = new Promise(
        // Функция разрешения позволяет завершить успешно или
        // отклонить обещание
        function(resolve, reject) {
            console.log(`Запуск обещания (запуск асинхронного кода)`);
            resolve(123);
        });

    // Указываем, что сделать с выполненным обещанием
    p1
        .then(
            // Записываем в протокол
            function(val) {
                console.log(`Обещание выполнено (асинхронный код завершён) ${val}`);
                return 'from 1 resolve';
            })
        .then(val => console.log(val))
        .catch(
            function(val) {
                console.log(`Error ${val}`);
            });

    console.log(`Обещание создано (синхронный код завершён)`);
}

testPromise();
