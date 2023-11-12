# Memory Game 

Проект команды #48 для благотворительного хакатона от ["Чата джунов" Наташи Давыдовой](https://t.me/natti_jun_front_chat) и [НКО "Найди семью"](https://sirota.ru/).

Лендинг хакатона: https://jun-hackaton-landing.vercel.app/

Memory game - игра с карточками, которые открываются попарно, и задача - открыть все карточки за наименьшее количество ходов.

Проект создан на React с Vite.

В проекте реализован главный экран с возможностью выбора новой игры или попасть на секретную страницу с ошибкой. По клику на "новая игра" открывается страничка с новой игрой - чтобы запустить игру надо нажать на "новая игра". Игроку дается поле 4х4 и надо переворачивать карточки, чтобы найти парные. Когда парная карточка нашлась - они остаются открытыми. Задача игрока запомнить карточки и по-возможности за минимальное количество ходов открыть все поле.

Наш проект: https://charity-project-48.vercel.app/

Ссылка на [Figma](https://www.figma.com/file/oOLscXHsIILl5YaTyqOwsS/Ccharity-hackaton-Team-%2348?type=design&node-id=32-1939&mode=design&t=Astx2JFQdzJHxloa-0).


Дополнительный репозиторий с [логикой](https://github.com/mariaklyass/memory-game), который перенесли в основной 

## Участники (ник в телеграме и на GitHub)

Вероника (frontend developer) @mysterynotsolved / delioncourts

Мария (frontend developer)@mariaklyass / mariaklyass

Матвей (frontend developer) @Arelman / Arelman


Выполнен базовый минимум:

вывод поля с рандомно расположенными карточками (каждый раунд - новая позиция карточек);
![вывод поля](https://github.com/delioncourts/charity-project/assets/110608602/4edfd956-49f2-4854-9376-bf22bcc8a169)

возможность открывать карточки;

закрытие непарных карточек, парные - остаются открытыми;
![парные открыты](https://github.com/delioncourts/charity-project/assets/110608602/72810778-950e-4b69-a28f-6fe802d3b12e)

подсчет количества ходов;
возможность начать игру заново;
экран поздравления с окончанием игры;



## Как запустить 

Склонировать репозиторий: 

git clone https://github.com/delioncourts/charity-project.git


Установить зависимости: 

npm install 

Запустить локально:

npm run dev
