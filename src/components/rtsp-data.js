export const rtspData = [
  {
    title: "Video Streaming using RTSP & RTP (Python)",
    link: "https://www.youtube.com/embed/OxAvxsL08Cc",
    linkYouTube: "https://youtu.be/OxAvxsL08Cc",
    frameName: "Rtsp-1",
    gitLink: '',
    timing: {

    }
  },
  {
    title: "rtsp streaming node js ip camera jsmpeg",
    link: "https://www.youtube.com/embed/LcESmR70NFo",
    linkYouTube: "https://youtu.be/LcESmR70NFo",
    frameName: "Rtsp-2",
    gitLink: '',
    timing: {

    }
  },
  {
    title: "How To Code A Video Streaming Server in NodeJS",
    link: "https://www.youtube.com/embed/ZjBLbXUuyWg",
    linkYouTube: "https://youtu.be/ZjBLbXUuyWg",
    frameName: "Rtsp-3",
    gitLink: 'https://github.com/Abdisalan/blog-code-examples/tree/main/http-video-stream',
    timing: {

    }
  },
  {
    title: "How To Code A Video Stream using MongoDB",
    link: "https://www.youtube.com/embed/y6Z-SZt-Xvw",
    linkYouTube: "https://youtu.be/y6Z-SZt-Xvw",
    frameName: "Rtsp-4",
    gitLink: 'https://github.com/Abdisalan/blog-code-examples/blob/main/mongo-http-video',
    timing: {

    }
  },
  {
    title: "How To Code A LIVE Streaming Server: RTMP & Stream Key #1",
    link: "https://www.youtube.com/embed/yKdPSXkaV5c",
    linkYouTube: "https://youtu.be/yKdPSXkaV5c",
    frameName: "Rtsp-5",
    gitLink: 'https://github.com/Abdisalan/blog-code-examples/tree/main/live-stream-part-1',
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

