// Этот класс расширяет класс Мар так, что метод get() возвращает вместо
// null указанное значение, когда ключ отсутствует в отображении,
class DefaultMap extends Map {

    constructor(defaultValue) {
        super(); // Вызвать конструктор суперкласса
        this.defaultValue = defaultValue; // Запомнить стандартное значение
    }

    get(key) {
        if (this.has(key)) { //Если ключ присутствует в отображении,
            return super.get(key); //тогда возвратить его значение из суперкласса
        } else {
            return this.defaultValue; //Иначе возвратить стандартное значение
        }
    }
}

    //Этот класс рассчитывает и выводит гистограмму частоты использования букв
    class Histogram {

        constructor() {
            this.letterCounts = new DefaultMap(0); //Отображение букв на счетчики
            this.totalLetters = 0; // Общее количество букв
        }

        // Эта функция обновляет гистограмму буквами текста,
        add(text) {
            // Удалить из текста пробельные символы
            //и преобразовать оставшиеся в верхний регистр
            text = text.replace(/\s/g, "").toUpperCase();
            // Пройти в цикле по символам текста
            for (let character of text) {
                let count = this.letterCounts.get(character);
                // Получить старый счетчик
                this.letterCounts.set(character, count + 1);
                // Инкрементировать его
                this.totalLetters++;
            }
        }

// Преобразовать гистограмму в строку, которая отображает графику ASCII
        toString() {
// Преобразовать Мар в массив массивов [ключ, значение]
            let entries = [...this.letterCounts];
// Отсортировать массив по счетчикам, а затем в алфавитном порядке
            entries.sort((a, b) => {
                if (a[1] === b [1]) {
                    return a[0] < b[0] ? -1 : 1;
                } else {
                    return b[1] - a[1];
                }
            });
            for (let entry of entries) {
                entry[1] = entry[1] / this.totalLetters * 100;
            }
            // Отбросить все записи с процентным отношением менее 1%
            entries = entries.filter(entry => entry [1] >= 1);
            // Преобразовать каждую запись в строку текста
            let lines = entries.map(
                ([l, n]) => '${1}: ${"#”.repeat(Math.round(n))} ${n.toFixed(2)}%'
            );
            // Возвратить сцепленные строки, разделенные символами новой строки
            return lines.join("\nH");
        }
    }

    async function histogramFromStdin () {
        process.stdin.setEncoding("utf-8"); // Читать строки Unicode, не байты
        let histogram = new Histogram;
        for await (let chunk of process.stdin) {
            histogram.add(chunk);
        }
        return histogram;
    }
// Эта финальная строка кода является главным телом программы.
// Она создает объект Histogram из стандартного ввода
histogramFromStdin().then(histogram => {
    console.log(histogram.toString())
})
