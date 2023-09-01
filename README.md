# Что это
Это готовый к запуску локальный сервер с fake-api.

Fake потому, что кроме ответов роуты не умеют ничего, даже валидации.

В файле requests.http перечислены все запросы с BODY и комментарии к ним.

# Как запустить
`npm i`

`npm run start`

Запустит локальный сервер на 3000 порту.

# Что нужно сделать
Установить Jest, написать тест для следующего пользовательского сценария:
1. Поставщик регистрирует поставку по заказу №1. Запрос №1 из файла requests.http
2. Поставщик внесистемно получает заказ №2 и редактирует созданную ранее поставку.

Нужно убедиться, что 
1. Поставщик сможет получить смс для проезда его автомобиля
2. Наши сотрудники могут получить информацию по заказу №1
3. Наши сотрудники ничего не видят по заказу №2, т.к. он был передан поставщику внесистемно
