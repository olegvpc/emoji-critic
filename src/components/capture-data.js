export const captureData = [
  {
    title: "Screen-Shot",
    link: "https://www.youtube.com/embed/fho1HCaCbpU",
    linkYouTube: "https://youtu.be/fho1HCaCbpU",
    frameName: "Screen-1",
    gitLink: '',
    timing: {

    }
  },
  {
    title: "How to upload and Display images",
    link: "https://www.youtube.com/embed/lzK8vM_wdoY",
    linkYouTube: "https://youtu.be/lzK8vM_wdoY",
    frameName: "Screen-2",
    gitLink: 'https://github.com/iamcodefoxx/image-uploading-frontend',
    timing: {

    }
  },
  {
    title: "Draw rectangle on canvas using mouse | Canvas API | React js ",
    link: "https://www.youtube.com/embed/tm4Ter9dpfo",
    linkYouTube: "https://youtu.be/tm4Ter9dpfo",
    frameName: "Canvas-4",
    gitLink: 'https://github.com/mikkuayu/React-Projects',
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
