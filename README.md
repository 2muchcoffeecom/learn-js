# Java Script

## Перед началом работы
1. Установите [WebStorm](https://www.jetbrains.com/ru-ru/webstorm/download/#section=mac):
    1. После установки, выберите вариант с триалом на 30 дней
2. Создайте бесплатный аккаунт на [github](https://github.com/)
3. Войдите в свой аккаунт на [github](https://github.com/)
4. [Установите](https://git-scm.com/book/ru/v2/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%A3%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-Git) Git:
    1. Windows
        1. Скачайте и установите [Git SCM](https://gitforwindows.org/).
           Во время установки оставьте все значения по умолчанию.
        2. В дальнейшем используйте `Git Bash` для работы с командной строкой
    1. Linux
       Откройте терминал и воспользуйтесь менеджером пакетов вашего дистрибутива:
        1. Если у вас дистрибутив, основанный на Debian, например, Ubuntu, используйте apt:
        ```shell
        sudo apt install git
        ```
        2. Если у вас Fedora (или другой похожий дистрибутив, такой как RHEL или CentOS), используйте dnf:
        ```shell
        sudo dnf install git-all
        ```
    1. Mac
        1. Выполните команду `git --version` в терминале.
           Если Git не установлен, вам будет предложено его установить.
5. [Проверка](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys) существующих ключей SSH:
    1. Откройте терминал
    2. Выполните команду `ls -al ~/.ssh`:
        1. Если у вас есть ключ и он не используется для другого GitHub аккаунта, вы можете пропустить 6 шаг
        2. Если у вас есть ключ и он используется для другого GitHub аккаунта, вам нужно создать ключ с другим именем в 6 шаге
6. [Создайте SSH ключ](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) на локальном компьютере:
    1. Выполните команду `ssh-keygen -t ed25519 -C "your_email@example.com"`
    2. Оставьте название по умолчанию, если у вас нет ключа с таким названием
    3. Введите passphrase (по желанию можно оставить пустым)
    4. Запустите `ssh-agent` выполнив команду `eval "$(ssh-agent -s)"`
    5. Добавьте приватный ключ в `ssh-agent`:
        1. Windows - выполните команду `ssh-add ~/.ssh/id_ed25519` в терминале
        1. Linux - выполните команду `ssh-add ~/.ssh/id_ed25519` в терминале
        1. Mac - выполните команду `ssh-add -K ~/.ssh/id_ed25519` в терминале
7. [Добавьте](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) созданный SSH в ваш GitHub аккаунт:
    1. Выполните команду `cat ~/.ssh/id_ed25519.pub`
    2. Скопируйте содержимое файла `id_ed25519` с терминала
    3. Перейдите по [ссылке](https://github.com/settings/keys)
    4. Нажмите на кнопку `New SSH key`
    5. Введите произвольное название и вставьте скопированное содержимое файла
    5. Нажмите `Add SSH Key`
8. Сделайте [форк](https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository) репозитория [learn-js](https://github.com/2muchcoffeecom/learn-js):
    1. Откройте [learn-js](https://github.com/2muchcoffeecom/learn-js)
    2. Нажмите кнопку `Fork` в правом верхнем углу
    3. Если вы все сделаете правильно, в вашем аккаунте появится новый репозиторий
       `learn-js` доступный по адресу `https://github.com/YOUR-USERNAME/learn-js`
9. [Склонируйте](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository#cloning-a-repository) свой репозиторий на локальный компьютер:
    1. Нажмите зеленую кнопку `Code`
    2. Измените выбор с `HTTPS` на `SSH`
    3. Скопируйте ссылку
    4. Откройте терминал на локальном компьютере
    5. Перейдите в директорию, где должна быть создана папка с проектом
    6. Напечатайте в терминале `git clone` и добавьте скопированный url,
       должна получится строка `git clone git@github.com:YOUR-USERNAME/learn-js.git`
    7. После нажатия на `Enter` будет создана папка `learn-js`
7. Откройте папку с проектом в WebStorm

## Пример
```
Пример формата вопросов и ответов вы можете видеть в файлах example.md
```

## Тестирование
```
Тестирование всех задач межет быть произведенно в консоли разработчика
Более подробно о консоли разработчика будет рассказанно в пункте 1.4
```

## Опциональные пункты
```
Опциональные пункты обязательны к ознакомлению, но детально разбираться на уроках не будут.
```

## Вопросы из learn.javascript.ru
```
Рекомендуется выполнять задачи после прочтения пунктов.
```

## Сохранение результатов

> После выполнения задачи нужно сделать [коммит](https://github.com/git-guides/git-commit) (git commit -am "descriptive commit message") и [push](https://github.com/git-guides/git-push) (git push origin master) в ваш репозиторий


## Roadmap
1. ### [Введение](https://learn.javascript.ru/getting-started)
    1. [Введение в JavaScript](https://learn.javascript.ru/intro) (OPTIONAL)
    2. [Справочники и спецификации](https://learn.javascript.ru/manuals-specifications) (OPTIONAL)
    3. [Редакторы кода](https://learn.javascript.ru/code-editors) (OPTIONAL)
    4. [Консоль разработчика](https://learn.javascript.ru/devtools)
2.  ### [Основы JavaScript](https://learn.javascript.ru/first-steps)
    1.  [Привет, мир!](https://learn.javascript.ru/hello-world)
    2.  [Структура кода](https://learn.javascript.ru/structure) (OPTIONAL)
    3.  [Строгий режим — "use strict"](https://learn.javascript.ru/strict-mode) (OPTIONAL)
    4.  [Переменные](https://learn.javascript.ru/variables)
    5.  [Типы данных](https://learn.javascript.ru/types)
    6.  [Взаимодействие: alert, prompt, confirm](https://learn.javascript.ru/alert-prompt-confirm) (OPTIONAL)
    7.  [Преобразование типов](https://learn.javascript.ru/type-conversions)
    8.  [Базовые операторы, математика](https://learn.javascript.ru/operators)
    9.  [Операторы сравнения](https://learn.javascript.ru/comparison)
    10. [Условное ветвление: if, '?'](https://learn.javascript.ru/ifelse)
    11. [Логические операторы](https://learn.javascript.ru/logical-operators)
    12. [Оператор объединения с null '??'](https://learn.javascript.ru/nullish-coalescing-operator)
    13. [Циклы while и for](https://learn.javascript.ru/while-for)
    14. [Конструкция "switch"](https://learn.javascript.ru/switch)
    15. [Функции](https://learn.javascript.ru/function-basics)
    16. [Function Expression](https://learn.javascript.ru/function-expressions)
    17. [Функции-стрелки, основы](https://learn.javascript.ru/arrow-functions-basics)
    18. [Особенности JavaScript](https://learn.javascript.ru/javascript-specials)
3.  ### [Качество кода](https://learn.javascript.ru/code-quality) (OPTIONAL)
    1.  ### [Отладка в браузере Chrome](https://learn.javascript.ru/debugging-chrome) (OPTIONAL)
    2.  ### [Советы по стилю кода](https://learn.javascript.ru/coding-style) (OPTIONAL)
    3.  ### [Комментарии](https://learn.javascript.ru/comments) (OPTIONAL)
    4.  ### [Ниндзя-код](https://learn.javascript.ru/ninja-code) (OPTIONAL)
4.  ### [Объекты: основы](https://learn.javascript.ru/object-basics)
    1. [Объекты](https://learn.javascript.ru/object)
    2. [Копирование объектов и ссылки](https://learn.javascript.ru/object-copy)
    3. [Сборка мусора](https://learn.javascript.ru/garbage-collection) (OPTIONAL)
    4. [Методы объекта, "this"](https://learn.javascript.ru/object-methods)
    5. [Конструкторы, создание объектов через "new"](https://learn.javascript.ru/constructor-new)
    6. [Опциональная цепочка '?.'](https://learn.javascript.ru/optional-chaining)
    7. [Тип данных Symbol](https://learn.javascript.ru/symbol) (OPTIONAL)
    8. [Преобразование объектов в примитивы](https://learn.javascript.ru/object-toprimitive) (OPTIONAL)
5.  ### [Типы данных](https://learn.javascript.ru/data-types)
    1. [Методы у примитивов](https://learn.javascript.ru/primitives-methods)
    2. [Числа](https://learn.javascript.ru/number)
    3. [Строки](https://learn.javascript.ru/string)
    4. [Массивы](https://learn.javascript.ru/array)
    5. [Методы массивов](https://learn.javascript.ru/array-methods)
    6. [Перебираемые объекты](https://learn.javascript.ru/iterable) (OPTIONAL)
    7. [Map и Set](https://learn.javascript.ru/map-set) (OPTIONAL)
    8. [WeakMap и WeakSet](https://learn.javascript.ru/weakmap-weakset) (OPTIONAL)
    9. [Object.keys, values, entries](https://learn.javascript.ru/keys-values-entries)
    10. [Деструктурирующее присваивание](https://learn.javascript.ru/destructuring-assignment)
    11. [Дата и время](https://learn.javascript.ru/date) (OPTIONAL)
    12. [Формат JSON, метод toJSON](https://learn.javascript.ru/json) (OPTIONAL)
6.  ### [Продвинутая работа с функциями](https://learn.javascript.ru/advanced-functions)
    1. [Рекурсия и стек](https://learn.javascript.ru/recursion) (OPTIONAL)
    2. [Остаточные параметры и оператор расширения](https://learn.javascript.ru/rest-parameters-spread-operator)
    3. [Замыкание](https://learn.javascript.ru/closure)
    4. [Устаревшее ключевое слово "var"](https://learn.javascript.ru/var) (OPTIONAL)
    5. [Глобальный объект](https://learn.javascript.ru/global-object) (OPTIONAL)
    6. [Объект функции, NFE](https://learn.javascript.ru/function-object) (OPTIONAL)
    7. [Синтаксис "new Function"](https://learn.javascript.ru/new-function) (OPTIONAL)
    8. [Планирование: setTimeout и setInterval](https://learn.javascript.ru/settimeout-setinterval)
    9. [Декораторы и переадресация вызова, call/apply](https://learn.javascript.ru/call-apply-decorators)
    10. [Привязка контекста к функции](https://learn.javascript.ru/bind)
    11. [Повторяем стрелочные функции](https://learn.javascript.ru/arrow-functions)
7.  ### [Свойства объекта, их конфигурация](https://learn.javascript.ru/object-properties) (OPTIONAL)
8.  ### [Прототипы, наследование](https://learn.javascript.ru/prototypes) (OPTIONAL)
9.  ### [Классы](https://learn.javascript.ru/classes)
    1. [Класс: базовый синтаксис](https://learn.javascript.ru/class)
    2. [Наследование классов](https://learn.javascript.ru/class-inheritance)
    3. [Статические свойства и методы](https://learn.javascript.ru/static-properties-methods)
    4. [Приватные и защищённые методы и свойства](https://learn.javascript.ru/private-protected-properties-methods)
    5. [Расширение встроенных классов](https://learn.javascript.ru/extend-natives) (OPTIONAL)
    6. [Проверка класса: "instanceof"](https://learn.javascript.ru/instanceof)
    7. [Примеси](https://learn.javascript.ru/mixins) (OPTIONAL)
10. ### [Обработка ошибок](https://learn.javascript.ru/error-handling)
    1. [Обработка ошибок, "try..catch"](https://learn.javascript.ru/try-catch)
    1. [Пользовательские ошибки, расширение Error](https://learn.javascript.ru/custom-errors) (OPTIONAL)
11. ### [Промисы, async/await](https://learn.javascript.ru/async)
    1. [Введение: колбэки](https://learn.javascript.ru/callbacks)
    2. [Промисы](https://learn.javascript.ru/promise-basics)
    3. [Цепочка промисов](https://learn.javascript.ru/promise-chaining)
    4. [Промисы: обработка ошибок](https://learn.javascript.ru/promise-error-handling)
    5. [Promise API](https://learn.javascript.ru/promise-api)
    6. [Промисификация](https://learn.javascript.ru/promisify)
    7. [Микрозадачи](https://learn.javascript.ru/microtask-queue)
    8. [Async/await](https://learn.javascript.ru/async-await)
12. ### [Генераторы, продвинутая итерация](https://learn.javascript.ru/generators-iterators) (OPTIONAL)
13. ### [Модули](https://learn.javascript.ru/modules) (OPTIONAL)
14. ### [Разное](https://learn.javascript.ru/js-misc) (OPTIONAL)


