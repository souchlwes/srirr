const audio = document.getElementById('audioPlayer');
const lyricBar = document.getElementById('lyricBar');

const lyrics = [
  { time: 0, text: "♪ Irresistible – Irene & Seulgi ♪" },
  { time: 5, text: "Oh, mm" },
  { time: 8, text: "Mm-mm" },

  { time: 11, text: "Irresistible (Body got you obsessed)" },
  { time: 17, text: "Irresistible (In my little black dress)" },
  { time: 23, text: "Irresistible (Betcha losin' your breath)" },
  { time: 29, text: "They tell me, my kiss is so irresistible" },

  { time: 35, text: "Cheonnune gamgin neoin geol (Love?)" },
  { time: 41, text: "Nunmeoreobeoril geot gata (Yeah) Uh" },
  { time: 47, text: "Challado nochigi sileo (No)" },
  { time: 53, text: "Before you know it, you'll be mine" },

  { time: 59, text: "Daeul deut deuriwo like magic" },
  { time: 65, text: "Move my lips, bimilseureon yaegi" },
  { time: 71, text: "Soksangnyeo, you gotta have it, ooh" },

  { time: 77, text: "Irresistible (Body got you obsessed)" },
  { time: 83, text: "Irresistible (In my little black dress)" },
  { time: 89, text: "Irresistible (Betcha losin' your breath)" },
  { time: 95, text: "They tell me, my kiss is so irresistible" },

  { time: 101, text: "Irresistible (Taking over your world)" },
  { time: 107, text: "Irresistible (In my diamonds and pearls)" },
  { time: 113, text: "Irresistible (You're falling in love)" },
  { time: 119, text: "They tell me, my kiss is so irresistible" },

  { time: 125, text: "Ojik uri dulppunin yeogi (Love)" },
  { time: 131, text: "Jeomjeom deo ppajyeodeuneun mood" },
  { time: 137, text: "(No one else is in the room)" },
  { time: 143, text: "Jungnyeoge ikkeullin deusi" },
  { time: 149, text: "Closer and closer into you" },
  { time: 155, text: "I can't control this chemistry" },
  { time: 161, text: "Nal mangchin daedo joeul mankeum" },

  { time: 167, text: "Kiss my lips, just-just like magic" },
  { time: 173, text: "Move your hips, chojohaejin momjit" },
  { time: 179, text: "Deulkyeosseo, you got a habit, ooh" },

  { time: 185, text: "Irresistible (Body got you obsessed)" },
  { time: 191, text: "Irresistible (In my little black dress)" },
  { time: 197, text: "Irresistible (Betcha losin' your breath)" },
  { time: 203, text: "They tell me, my kiss is so irresistible" },

  { time: 209, text: "Irresistible (Taking over your world)" },
  { time: 215, text: "Irresistible (In my diamonds and pearls)" },
  { time: 221, text: "Irresistible (You're falling in love)" },
  { time: 227, text: "They tell me, my kiss is so irresistible" },

  { time: 233, text: "Heum hana eopsi aju yuryeohage" },
  { time: 239, text: "Tuk geuryeonaen deuthan sonkkeutkkaji" },
  { time: 245, text: "Orosi binnaneun nal barabwa slow" },
  { time: 251, text: "Ojik naman gadeuki geoure bichin" },
  { time: 257, text: "Sumi meojeodo joeul i sungan" },
  { time: 263, text: "I love when I see you say that I'm so" },

  { time: 269, text: "Irresistible (Body got you obsessed)" },
  { time: 275, text: "Irresistible (In my little black dress)" },
  { time: 281, text: "Irresistible (Betcha losin' your breath)" },
  { time: 287, text: "Hollyeobeoril kiss, it's so irresistible" },
  { time: 293, text: "Chwihaebeoril kiss, it's so irresistible" }
];

audio.addEventListener('timeupdate', () => {
  const currentTime = audio.currentTime;
  for (let i = lyrics.length - 1; i >= 0; i--) {
    if (currentTime >= lyrics[i].time) {
      lyricBar.textContent = lyrics[i].text;
      break;
    }
  }
});