# 🧠 JavaScript: Методи масивів vs Цикли

## 🔁 Класичні цикли

### `for`

```js
for (let i = 0; i < array.length; i++) {
  // дія з array[i]
}
```

- Повний контроль
- Підтримує `break`, `continue`
- Підходить для асинхронного коду
--------------------------------------------------------------------
### `while` / `do...while`

```js
let i = 0;
while (i < array.length) {
  // дія з array[i]
  i++;
}
```

- Добре, коли кількість ітерацій невідома заздалегідь
--------------------------------------------------------------------
### `for...in`

```js
for (let key in object) {
  console.log(key, object[key]);
}
```

- Для перебору **властивостей об'єкта**
---------------------------------------------------------------------
### `for...of`

```js
for (let item of array) {
  console.log(item);
}
```

- Для **ітерабельних** об'єктів (масиви, рядки, Set, Map)
---------------------------------------------------------------------
---

## 🧰 Методи масивів

| Метод       | Що робить                             | Повертає             | Змінює масив  | Має індекс  | Преривання   |
| ----------- | ------------------------------------- | -------------------  | ------------  | ----------  | ----------   |
| `forEach`   | Виконує дію для кожного елемента      | `undefined`          | ❌            | ✅          | ❌          |
| `map`       | Створює новий масив                   | ✅ новий масив       | ❌            | ✅          | ❌          |
| `filter`    | Фільтрує елементи                     | ✅ новий масив       | ❌            | ✅          | ❌          |
| `reduce`    | Зводить масив до одного значення      | ✅ значення          | ❌            | ✅          | ❌          |
| `some`      | Чи хоч один елемент задовольняє умову | ✅ true/false        | ❌            | ✅          | ❌          |
| `every`     | Чи всі елементи задовольняють умову   | ✅ true/false        | ❌            | ✅          | ❌          |
| `find`      | Повертає **перший** елемент           | ✅ елемент/undefined | ❌            | ✅          | ❌          |
| `findIndex` | Індекс першого елемента               | ✅ індекс/-1         | ❌            | ✅          | ❌          |
| `flat`      | Розплющує вкладені масиви             | ✅ новий масив       | ❌            | ❌          | ❌          |
| `sort`      | Сортує масив                          | ✅ той самий масив   | ✅            | ✅          | ❌          |

---
## Ось зведене порівняння основних способів перебору в JavaScript у зручному форматі таблиці:
| Властивість / Цикл              | `for`                    | `while` / `do...while`        | `for...in`                 | `for...of`                            | `forEach`                                             | `map`                                    |
| ------------------------------- | ------------------------ | ----------------------------- | -------------------------- | ------------------------------------- | ----------------------------------------------------- | ---------------------------------------- |
| 🔁 **Застосування**             | Загального призначення   | Коли потрібен ручний контроль | Для об'єктів               | Для ітерабельних структур             | Для масивів                                           | Для перетворення масивів                 |
| 🔄 **Що перебирає**             | Все, що задається умовою | Все, що задається умовою      | Властивості об'єкта        | Елементи масиву, Set, тощо            | Елементи масиву                                       | Елементи масиву                          |
| 🔧 **Іммутабельність**          | Залежить від коду        | Залежить від коду             | Залежить від коду          | Залежить від коду                     | Не змінює масив (але можна змінити об'єкти всередині) | Не змінює оригінальний масив             |
| 🎯 **Що повертає**              | Нічого (`undefined`)     | Нічого (`undefined`)          | Нічого (`undefined`)       | Нічого (`undefined`)                  | Нічого (`undefined`)                                  | **Новий масив** з результатами           |
| 🔢 **Доступ до індексу**        | Так                      | Так (через лічильник)         | Так (ключ як індекс/назва) | Ні (але можна поєднати з `entries()`) | Так (2-й параметр — індекс)                           | Так (2-й параметр — індекс)              |
| ⛔ **Можна перервати (`break`)** | ✅ Так                    | ✅ Так                         | ✅ Так                      | ✅ Так                                 | ❌ Ні                                                  | ❌ Ні                                     |
| ✅ **Підтримка `return`**        | ✅ Так                    | ✅ Так                         | ✅ Так                      | ✅ Так                                 | ❌ Ні (не перериває цикл)                              | ✅ Так (використовується для значення)    |
| 🧵 **Працює з async/await**     | ✅ Так                    | ✅ Так                         | ✅ Так                      | ✅ Так                                 | ❌ Погано працює з async                               | ✅ Працює краще, особливо з `Promise.all` |


## Основні відмінності:

|                            | Цикли (`for`, `while`)          | Методи масивів (`map`, `forEach`...)           |
| -------------------------- | ------------------------------- | ---------------------------------------------- |
| 🧠 **Абстракція**          | Низькорівнева (ручне керування) | Високорівнева (менше коду, читабельніше)       |
| 🧰 **Можливості**          | Повна гнучкість                 | Обмежені специфікою методу                     |
| 🔁 **Логіка повторення**   | Програміст задає вручну         | Закладена у метод                              |
| ⛔ **`break` / `continue`** | Можна                           | Зазвичай не можна (`forEach`, `map`, ...)      |
| ✅ **Іммутативність**       | Залежить від коду               | Більшість методів не змінюють оригінал         |
| 🔄 **Повернення значення** | Тільки вручну                   | Деякі повертають новий масив (`map`, `filter`) |



## 🧠 Коли що використовувати

| Потреба                             | Краще використовувати      |
| ----------------------------------- | -------------------------- |
| Повний контроль, можливість `break` | `for`, `while`, `for...of` |
| Зручний перебір усіх елементів      | `forEach`                  |
| Створити **новий** масив            | `map`, `filter`            |
| Знайти **один** елемент або індекс  | `find`, `findIndex`        |
| Працювати з вкладеними масивами     | `flat`                     |
| Сума, добуток, об'єднання значень   | `reduce`                   |
| Асинхронний цикл з `await`          | `for`, `for...of`          |

---

## 🔎 Приклад `map`:

```js
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
```

---

## 🧭 Висновок:

> Методи масивів = чистий, декларативний стиль.\
> Класичні цикли = більше контролю, більше відповідальності.

Вибирай інструмент, який найкраще підходить під задачу 💡

