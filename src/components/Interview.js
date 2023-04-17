import React from 'react';
import './Interview.css';


function Interview () {

  // useEffect(() => {
  //   console.log(interviewData[0].name)
  // }, [])
  //
  // function videoFrame(props) {
  //   return (
  //     <iframe width="560" height="315"
  //             src={props.link}
  //             title="YouTube video player" frameBorder="0"
  //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //             allowFullScreen
  //             name={props.name}
  //     >
  //     </iframe>
  //   )
  // }

  return (
    <>
      <h1>Видео Интервью</h1>
      <main className='interview__iframes'>
        <section className="interview__frame-container">
          <div className="interview__iframe-video">
            <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/M_pclb-58ZY"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
            </iframe>
            <h3>Владлен Минин - основы JS</h3>
          </div>
          <div className='interview__frame-about'>
            <h4>Исходники тут:
              <a href='https://github.com/vladilenm/js-interview-guide' target='_blank' rel="noreferrer"> https://github.com/vladilenm/js-interview-guide</a>
            </h4>
          </div>
        </section>

        <section className="interview__frame-container">
          <div className="interview__iframe-video">
            <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/ycYp7CYOnO0"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    name="raz"
            >
            </iframe>
            <h3>WebDev - #1 Курс</h3>
          </div>
          <div className='interview__frame-about'>
            <a href='https://www.youtube.com/watch?v=G7hLwudGWL4&list=PLNkWIWHIRwMFSLI9wBuHxuGI5lAZ7QNUg&index=1' rel="noreferrer" target='_blank'>Ссылка на все курсы WebDev</a>
            <h6>Timeline:
            <ol>
              <li><a href='https://www.youtube.com/embed/ycYp7CYOnO0?rel=0&autolay=1&start=65' target='raz'>1:05</a> - Что такое doctype? И для чего он используется?</li>
              <li><a href='https://www.youtube.com/embed/ycYp7CYOnO0?rel=0&autolay=1&start=103' target='raz'>1:43</a> - Опишите базовую структуру HTML-страницы?</li>
              <li><a href='https://www.youtube.com/embed/ycYp7CYOnO0?rel=0&autolay=1&start=149' target='raz'>2:29</a> - Что такое семантика? Какие семантичные тэги вы знаете?</li>
              <li><a href='https://www.youtube.com/embed/ycYp7CYOnO0?rel=0&autolay=1&start=202' target='raz'>3:22</a> - Какая разница между тэгами strong/em и b/i?</li>
              <li><a href='https://www.youtube.com/embed/ycYp7CYOnO0?rel=0&autolay=1&start=251' target='raz'>4:11</a>  - Что такое CSS? И для чего он используется?</li>
              <li><a href='https://www.youtube.com/embed/ycYp7CYOnO0?rel=0&autolay=1&start=277' target='raz'>4:37</a> - Варианты добавление CSS стилей на страницу?</li>
            </ol>
              {/*<p>0:00 - Введение</p>*/}

              <p>5:21 - Типы позиционирования в CSS?</p>
              <p>6:50 - Блочная модель CSS?</p>
              <p>7:51 -Типы данных в JavaScript?</p>
              <p>8:49 - Разница между «==» и «===»?</p>
              <p>9:37 - Строгий режим (strict mode) в JavaScript?</p>
              <p>10:32 - Разница между function declaration и function expression?</p>
              <p>11:23 - Функция проверки палиндрома?</p>
            </h6>
          </div>
        </section>

        <section className="interview__frame-container">
          <div className="interview__iframe-video">
            <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/G7hLwudGWL4"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    start="100"
            >
            </iframe>
            <h3>WebDev - #2 Курс</h3>
          </div>
          <div className='interview__frame-about'>
            <h6>Timeline:
              <p>0:00 - Введение</p>
              <p>0:39 - Что такое валидация? И какие типы проверок HTML документа вы знаете?</p>
              <p>1:36 - Какой тэг использовать для того, что бы сверстать кнопку?</p>
              <p>2:35 - Что такое инлайновый стиль? Можно ли его переопределить?</p>
              <p>3:01 - Есть ли у HTML элементов свои дефолтные специфичные стили?</p>
              <p>3:50 - Для какого тэга используется атрибут alt и зачем он нужен?</p>
              <p>4:42 - Что такое селектор? И какие селекторы существуют?</p>
              <p>5:58 - Что такое специфичность селектора? Как считать вес селектора?</p>
              <p>7:25 - Разница между Reset.css и Normalize.css?</p>
              <p>8:31 - Разница между null и undefined?</p>
              <p>9:12 - Что такое Hoisting (поднятие)?</p>
              <p>10:16 - Операторы «И» и «ИЛИ» (&& и ||)</p>
              <p>11:30 - Типы таймеров в JavaScript?</p>
              <p>12:44 - Функция поиска самого короткого слова?</p>
            </h6>
          </div>
        </section>

        <section className="interview__frame-container">
          <div className="interview__iframe-video">
            <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/1eIRTdgzHtw"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    name="webdev3">
            </iframe>
            <h3>WebDev - #3 Курс</h3>
          </div>
          <div className='interview__frame-about'>
            <h4>Timeline:
            <ol>
              <li><a href='https://www.youtube.com/embed/1eIRTdgzHtw?rel=0&autolay=1&start=29' target='webdev3'>0:29</a> - Типы списков в HTML?</li>
              <li><a href='https://www.youtube.com/embed/1eIRTdgzHtw?rel=0&autolay=1&start=66' target='webdev3'>1:06</a> - Как семантически правильно сверстать картинку с подписью?</li>
              <li><a href='https://www.youtube.com/embed/1eIRTdgzHtw?rel=0&autolay=1&start=116' target='webdev3'>1:56</a> - Разница между margin и padding?</li>
              <li><a href='https://www.youtube.com/embed/1eIRTdgzHtw?rel=0&autolay=1&start=139' target='webdev3'>2:19</a> - Разница между display: none и visibility: hidden?</li>
              <li><a href='https://www.youtube.com/embed/1eIRTdgzHtw?rel=0&autolay=1&start=188' target='webdev3'>3:08</a> - Разница между блочным и строчным (инлайновым) элементами?</li>
              <li><a href='https://www.youtube.com/embed/1eIRTdgzHtw?rel=0&autolay=1&start=233' target='webdev3'>3:53</a> - Разница между адаптивным (adaptive) и отзывчивым (responsive) дизайнами?</li>
              <li><a href='https://www.youtube.com/embed/1eIRTdgzHtw?rel=0&autolay=1&start=282' target='webdev3'>4:42</a> - Что такое область видимости (Scope)?</li>
              <li><a href='https://www.youtube.com/embed/1eIRTdgzHtw?rel=0&autolay=1&start=362' target='webdev3'>6:02</a> - Разница между «let», «const» и «var»?</li>
              <li><a href='https://www.youtube.com/embed/1eIRTdgzHtw?rel=0&autolay=1&start=425' target='webdev3'>7:05</a> - Что такое функции высшего порядка (Higher Order Functions)?</li>
              <li><a href='https://www.youtube.com/embed/1eIRTdgzHtw?rel=0&autolay=1&start=472' target='webdev3'>7:52</a> - Что такое DOM?</li>
              <li><a href='https://www.youtube.com/embed/1eIRTdgzHtw?rel=0&autolay=1&start=522' target='webdev3'>8:42</a> - Что такое распространение события (Event Propagation)?</li>
              <li><a href='https://www.youtube.com/embed/1eIRTdgzHtw?rel=0&autolay=1&start=576' target='webdev3'>9:36</a> - Что такое делегирование событий (Event Delegation)?</li>
              <li><a href='https://www.youtube.com/embed/1eIRTdgzHtw?rel=0&autolay=1&start=634' target='webdev3'>10:34</a> - Функция создания инициалов?</li>
            </ol>
            </h4>
          </div>
        </section>

        <section className="interview__frame-container">
          <div className="interview__iframe-video">
            <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/CjdCxxqObaM"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    name="webdev4"
            >
            </iframe>
            <h3>WebDev - #4 Курс</h3>
          </div>
          <div className='interview__frame-about'>
            <h4>Timeline:
            <ol>
              <li><a href='https://www.youtube.com/embed/CjdCxxqObaM?rel=0&autolay=1&start=39' target='webdev4'>0:39</a> - Что такое HTML и для чего он используется?</li>
              <li><a href='https://www.youtube.com/embed/CjdCxxqObaM?rel=0&autolay=1&start=88' target='webdev4'>1:28</a> - Типы input элементов в HTML?</li>
              <li><a href='https://www.youtube.com/embed/CjdCxxqObaM?rel=0&autolay=1&start=200' target='webdev4'>3:20</a> - Что такое элемент canvas? И для чего он используется?</li>
              <li><a href='https://www.youtube.com/embed/CjdCxxqObaM?rel=0&autolay=1&start=228' target='webdev4'>3:48</a> - Что такое CSS-правило?</li>
              <li><a href='https://www.youtube.com/embed/CjdCxxqObaM?rel=0&autolay=1&start=264' target='webdev4'>4:24</a> - Разница между классом и идентификатором в CSS?</li>
              <li><a href='https://www.youtube.com/embed/CjdCxxqObaM?rel=0&autolay=1&start=330' target='webdev4'>5:30</a> - Что такое CSS спрайт? И для чего он используется?</li>
              <li><a href='https://www.youtube.com/embed/CjdCxxqObaM?rel=0&autolay=1&start=369' target='webdev4'>6:09</a> - Как превратить любой тип данных в булевый? Перечислите ложные значения в JS?</li>
              <li><a href='https://www.youtube.com/embed/CjdCxxqObaM?rel=0&autolay=1&start=415' target='webdev4'>6:55</a> - Методы строк в JavaScript?</li>
              <li><a href='https://www.youtube.com/embed/CjdCxxqObaM?rel=0&autolay=1&start=538' target='webdev4'>8:58</a> - Методы массивов в JavaScript?</li>
              <li><a href='https://www.youtube.com/embed/CjdCxxqObaM?rel=0&autolay=1&start=650' target='webdev4'>10:50</a> - Разница между e.preventDefault() и e.stopPropagation()?</li>
              <li><a href='https://www.youtube.com/embed/CjdCxxqObaM?rel=0&autolay=1&start=678' target='webdev4'>11:18</a> - Методы поиска элементов в DOM?</li>
              <li><a href='https://www.youtube.com/embed/CjdCxxqObaM?rel=0&autolay=1&start=764' target='webdev4'>12:44</a> - Функция суммирования всех цифр числа?</li>
            </ol>
            </h4>
          </div>
        </section>

        <section className="interview__frame-container">
          <div className="interview__iframe-video">
            <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/rlWgI7AvV18"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    name='webdev5'>
            </iframe>
            <h3>WebDev - #5 Курс</h3>
          </div>
          <div className='interview__frame-about'>
            <h4>Timeline:
            <ol>
              <li><a href='https://www.youtube.com/embed/rlWgI7AvV18?rel=0&autolay=1&start=34' target='webdev5'>0:34</a> - Для чего используют data-атрибуты?</li>
              <li><a href='https://www.youtube.com/embed/rlWgI7AvV18?rel=0&autolay=1&start=78' target='webdev5'>1:18</a> - Разница между script, script async и script defer?</li>
              <li><a href='https://www.youtube.com/embed/rlWgI7AvV18?rel=0&autolay=1&start=178' target='webdev5'>2:58</a> - Для чего используется элемент datalist?</li>
              <li><a href='https://www.youtube.com/embed/rlWgI7AvV18?rel=0&autolay=1&start=234' target='webdev5'>3:54</a> - Что такое вендорные префиксы? И для чего они используются?</li>
              <li><a href='https://www.youtube.com/embed/rlWgI7AvV18?rel=0&autolay=1&start=286' target='webdev5'>4:46</a> - Разница между Progressive Enhancement и Graceful Degradation?</li>
              <li><a href='https://www.youtube.com/embed/rlWgI7AvV18?rel=0&autolay=1&start=355' target='webdev5'>5:55</a> - Что такое псевдоэлементы? И для чего они используются?</li>
              <li><a href='https://www.youtube.com/embed/rlWgI7AvV18?rel=0&autolay=1&start=401' target='webdev5'>6:41</a> - Что такое чистая функция?</li>
              <li><a href='https://www.youtube.com/embed/rlWgI7AvV18?rel=0&autolay=1&start=456' target='webdev5'>7:36</a> - Разница между .forEach и .map()?</li>
              <li><a href='https://www.youtube.com/embed/rlWgI7AvV18?rel=0&autolay=1&start=507' target='webdev5'>8:27</a> - Что обозначает «this» в JavaScript?</li>
              <li><a href='https://www.youtube.com/embed/rlWgI7AvV18?rel=0&autolay=1&start=547' target='webdev5'>9:07</a> - Разница между .call(), .apply() и bind()?</li>
              <li><a href='https://www.youtube.com/embed/rlWgI7AvV18?rel=0&autolay=1&start=624' target='webdev5'>10:24</a> - Почему в JS функции называют объектами первого класса?</li>
              <li><a href='https://www.youtube.com/embed/rlWgI7AvV18?rel=0&autolay=1&start=670' target='webdev5'>11:10</a> - Функция поиска минимального и максимального значений в массиве?</li>
            </ol>
            </h4>
          </div>
        </section>

        <section className="interview__frame-container">
          <div className="interview__iframe-video">
            <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/kx3dR6ztICU"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    name="webdev6">

            </iframe>
            <h3>WebDev - #6 Курс</h3>
          </div>
          <div className='interview__frame-about'>
            <h4>Timeline:
            <ol>
              <li><a href='https://www.youtube.com/embed/kx3dR6ztICU?rel=0&autolay=1&start=30' target='webdev6'>0:30</a> - Что такое схлопывание границ (margin collapsing)?</li>
              <li><a href='https://www.youtube.com/embed/kx3dR6ztICU?rel=0&autolay=1&start=90' target='webdev6'>1:30</a> - Что такое кроссбраузерность?</li>
              <li><a href='https://www.youtube.com/embed/kx3dR6ztICU?rel=0&autolay=1&start=159' target='webdev6'>2:39</a> - Что такое CSS препроцессор?</li>
              <li><a href='https://www.youtube.com/embed/kx3dR6ztICU?rel=0&autolay=1&start=226' target='webdev6'>3:46</a> - Как определить наличие свойства в объекте??</li>
              <li><a href='https://www.youtube.com/embed/kx3dR6ztICU?rel=0&autolay=1&start=284' target='webdev6'>4:44</a> - Что такое замыкание (Closure)?</li>
              <li><a href='https://www.youtube.com/embed/kx3dR6ztICU?rel=0&autolay=1&start=396' target='webdev6'>6:36</a> - Что такое IIFE?</li>
              <li><a href='https://www.youtube.com/embed/kx3dR6ztICU?rel=0&autolay=1&start=442' target='webdev6'>7:22</a> - Что такое псевдомассив arguments?</li>
              <li><a href='https://www.youtube.com/embed/kx3dR6ztICU?rel=0&autolay=1&start=484' target='webdev6'>8:04</a> - Разница между host-объектами и нативными объектами?</li>
              <li><a href='https://www.youtube.com/embed/kx3dR6ztICU?rel=0&autolay=1&start=539' target='webdev6'>8:59</a> - Разница между event.target и event.currentTarget?</li>
              <li><a href='https://www.youtube.com/embed/kx3dR6ztICU?rel=0&autolay=1&start=580' target='webdev6'>9:40</a> - Разница между .stopPropagation() и .stopImmediatePropagation()?</li>
              <li><a href='https://www.youtube.com/embed/kx3dR6ztICU?rel=0&autolay=1&start=627' target='webdev6'>10:27</a> - Разница между событиями load и DOMContentLoaded?</li>
              <li><a href='https://www.youtube.com/embed/kx3dR6ztICU?rel=0&autolay=1&start=681' target='webdev6'>11:21</a> - Разница между синхронными и асинхронными функциями?</li>
              <li><a href='https://www.youtube.com/embed/kx3dR6ztICU?rel=0&autolay=1&start=736' target='webdev6'>12:16</a> - Функция создания набора дубликатов символов строки?</li>
            </ol>
            </h4>
          </div>
        </section>

      </main>
      {/*Конец секции main*/}
    </>

  )
}

export default Interview;
