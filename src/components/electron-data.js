export const electronData = [
    {
      title: "Create a Desktop App With JavaScript & Electron",
      link: "https://www.youtube.com/embed/ML743nrkMHw",
      linkYouTube: "https://youtu.be/ML743nrkMHw",
      frameName: "Electron-1",
      gitLink: 'https://github.com/bradtraversy/image-resizer-electron',
      timing: {
        "3:05":  "Resources",
        "4:48":  "Setup & Install Dependencies",
        "8:08": "Create Main Window",
        "12:45": "Common Boilerplate",
        "15:53": "Show Devtools",
        "18:10": "Using Electronmon",
        "18:54": "Adding the UI Theme",
        "21:26": "Content Security Policy",
        "23:00": "Menu Customization",
        "27:36": "Menu Roles",
        "30:00": "About Window",
        "31:53": "Start Renderer JS / Load Image",
        "38:15": "Get Original Dimensions",
        "39:40": "Using Preload",
        "44:28": "Show Output Path",
        "46:43": "Toastify Alerts",
        "50:58": "Form Submit Handler",
        "53:54": "IPC Renderer (Send)",
        "56:44": "IPC Main (Recieve)",
        "59:35": "Resize Image",
        "1:05:32": "Catch Message In Renderer",
        "1:07:32": "Make mainWindow Global",
        "1:10:22": "Test Production Mode"
  
      }
    },   
    {
      title: "Build an Electron App in Under 60 Minutes",
      link: "https://www.youtube.com/embed/kN1Czs0m1SU",
      linkYouTube: "https://youtu.be/kN1Czs0m1SU",
      frameName: "Electron-2",
      gitLink: 'https://github.com/bradtraversy/electronshoppinglist',
      timing: {
  
      }
    },
    {
      title: "Making modern GUIs with Python and ElectronJS",
      link: "https://www.youtube.com/embed/627VBkAhKTc",
      linkYouTube: "https://youtu.be/627VBkAhKTc",
      frameName: "Electron-3",
      gitLink: 'https://github.com/SouravJohar/python-app-with-electron-gui',
      timing: {
  
      }
    },
    {
      title: "Python & ElectronJs Simple App | #2 | Simple Calculator Application",
      link: "https://www.youtube.com/embed/bTM-aPZjoIY",
      linkYouTube: "https://youtu.be/bTM-aPZjoIY",
      frameName: "Electron-4",
      gitLink: '',
      timing: {
  
      }
    },
    {
      title: "Python & ElectronJS Building Desktop GUI Application",
      link: "https://www.youtube.com/embed/povYTkpJiRA",
      linkYouTube: "https://youtu.be/povYTkpJiRA",
      frameName: "Electron-5",
      gitLink: '',
      timing: {
  
      }
    },
    {
      title: "Execute Python scripts from Express.js!",
      link: "https://www.youtube.com/embed/86G9BPC-i7w",
      linkYouTube: "https://youtu.be/86G9BPC-i7w",
      frameName: "Electron-5",
      gitLink: '',
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

  