export const laravelData = [
    {
      title: "Полный курс Laravel 01 Возможности фреймворка (All Features) ",
      link: "https://www.youtube.com/embed/aNcbYt8BykY",
      linkYouTube: "https://youtu.be/aNcbYt8BykY",
      frameName: "1",
      gitLink: 'https://github.com/indigoram89/laravel-course',
      timing: {
      }
    },
    {
      title: "Полный курс Laravel 03 Установка на MacOS и Linux (Installation)",
      link: "https://www.youtube.com/embed/r_f4oltMJ_s",
      linkYouTube: "https://youtu.be/r_f4oltMJ_s",
      frameName: "2",
      gitLink: 'https://github.com/indigoram89/laravel-course',
      timing: {
      }
    },
    {
      title: "Полный курс Laravel 04 Структура проекта (Project Structure)",
      link: "https://www.youtube.com/embed/Ole0x86T5po",
      linkYouTube: "https://youtu.be/Ole0x86T5po",
      frameName: "3",
      gitLink: 'https://github.com/indigoram89/laravel-course',
      timing: {
      }
    },
    {
      title: "Полный курс Laravel 05 Конфигурация (Configuration)",
      link: "https://www.youtube.com/embed/oADVoApTqsI",
      linkYouTube: "https://youtu.be/oADVoApTqsI",
      frameName: "4",
      gitLink: 'https://github.com/indigoram89/laravel-course',
      timing: {
      }
    },
    {
      title: "Полный курс Laravel 06 Принцип работы (How It Works)",
      link: "https://www.youtube.com/embed/ceppjNEVt_w",
      linkYouTube: "https://youtu.be/ceppjNEVt_w",
      frameName: "5",
      gitLink: 'https://github.com/indigoram89/laravel-course',
      timing: {
      }
    },
    {
      title: "Полный курс Laravel 07 Маршруты и Контроллеры (Routes and Controllers)",
      link: "https://www.youtube.com/embed/YoSv2xbs-9s",
      linkYouTube: "https://youtu.be/YoSv2xbs-9s",
      frameName: "6",
      gitLink: 'https://github.com/indigoram89/laravel-course',
      timing: {
      }
    },
    {
      title: "Полный курс Laravel 08 Мидлвейры + лайфхаки (Middleware)",
      link: "https://www.youtube.com/embed/DAhczeKPR34",
      linkYouTube: "https://youtu.be/DAhczeKPR34",
      frameName: "7",
      gitLink: 'https://github.com/indigoram89/laravel-course',
      timing: {
      }
    },
    {
      title: "Полный курс Laravel 09 Страницы и мой опыт + Вёрстка (Pages)",
      link: "https://www.youtube.com/embed/LDGbCKTBFWM",
      linkYouTube: "https://youtu.be/LDGbCKTBFWM",
      frameName: "8",
      gitLink: 'https://github.com/indigoram89/laravel-course',
      timing: {
      }
    },
  ]

  
  export const getSec = function (timeString) {
    return timeString.split(":").reverse().reduce((prev, item, index) => {
      prev = prev + Number(item) * (index === 0 ? 1 : Math.pow(60, index));
      return prev
    }, 0)
  }
  
  
  

  