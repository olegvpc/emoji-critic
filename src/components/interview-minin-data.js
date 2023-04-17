export const interviewMininData = [
  {
    title: "Владлен Минин - основы JS",
    link: "https://www.youtube.com/embed/M_pclb-58ZY",
    linkYouTube: "https://youtu.be/M_pclb-58ZY",
    frameName: "minin1",
    gitLink: 'https://github.com/vladilenm/js-interview-guide',
    timing: {
      "2:35": "Типы данных",
      "10:30": "Приведение типов",
      "25:28": "Значения, переменные",
      "29:40": "Область видимости",
      "33:42": "Поднятие - Hoisting",
      "37:24": "Объявление функций",
      "39:28": "let и const",
      "47:10": "Замыкание",
      "59:39": "IIFE",
      "1:03:54": "Контекст",
      "1:17:16": "New",
      "1:21:30": "Прототипы",
      "1:34:38": "Асинхронность",
    }
  },
    {
    title: "Владлен Минин - Prototype",
    link: "https://www.youtube.com/embed/aQkgUUmUJy4",
    linkYouTube: "https://youtu.be/aQkgUUmUJy4",
    frameName: "minin2",
    gitLink: '',
    timing: {
    }
  },
  {
    title: "Владлен Минин - Асинхронность",
    link: "https://www.youtube.com/embed/vIZs5tH-HGQ",
    linkYouTube: "https://youtu.be/vIZs5tH-HGQ",
    frameName: "minin3",
    gitLink: 'http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D',
    timing: {
    }
  },
    {
    title: "Владлен Минин - Promise",
    link: "https://www.youtube.com/embed/1idOY3C1gYU",
    linkYouTube: "https://youtu.be/1idOY3C1gYU",
    frameName: "minin4",
    gitLink: '',
    timing: {
      "19:02": "Promise.all([onePromise], twoPromise)",
    }
  },
  {
    title: "Владлен Минин 6 - Объекты и наследование",
    link: "https://www.youtube.com/embed/cS6nTVNzOPw",
    linkYouTube: "https://youtu.be/cS6nTVNzOPw",
    frameName: "minin5",
    gitLink: '',
    timing: {
    }
  },
  {
    title: "Владлен Минин 7 - Классы и Геттеры",
    link: "https://www.youtube.com/embed/uLY9GXGMXaA",
    linkYouTube: "https://youtu.be/uLY9GXGMXaA",
    frameName: "minin6",
    gitLink: '',
    timing: {
      "4:20": "Static",
      "9:50": "get AgeInfo () {return console.log(this.age)}",
      "15:00": "Классы в компонентах",
    }
  },
  {
    title: "Владлен Минин 8 - Promise, async, await",
    link: "https://www.youtube.com/embed/SHiUyM_fFME",
    linkYouTube: "https://youtu.be/SHiUyM_fFME",
    frameName: "minin8",
    gitLink: 'https://jsonplaceholder.typicode.com/posts',
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

