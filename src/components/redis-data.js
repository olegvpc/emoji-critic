export const redisData = [
    {
        title: "Redis NoSQL база данных, (кеш для DB)",
        link: "https://www.youtube.com/embed/crKC4MuVxVg",
        linkYouTube: "https://youtu.be/crKC4MuVxVg",
        frameName: "Redis-1",
        gitLink: 'https://github.com/SamDiy/languages',
        timing: {
        }
    },
    {
        title: "REDIS QUEUES WITH PYTHON | Python)",
        link: "https://www.youtube.com/embed/PqPrfaNggL4",
        linkYouTube: "https://youtu.be/PqPrfaNggL4",
        frameName: "Redis-2",
        gitLink: 'https://github.com/knucklesuganda',
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
  
  