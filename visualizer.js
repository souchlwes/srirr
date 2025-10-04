const audio = document.getElementById('audioPlayer');
const canvas = document.getElementById('visualizer');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let audioCtx, analyser, source, dataArray;

document.getElementById('playButton').addEventListener('click', () => {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioCtx.createAnalyser();
    source = audioCtx.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioCtx.destination);
    analyser.fftSize = 256;
    dataArray = new Uint8Array(analyser.frequencyBinCount);
    drawVisualizer();
  }

  if (audio.paused) {
    audio.play();
    playButton.textContent = '⏸ Pause Song';
  } else {
    audio.pause();
    playButton.textContent = '▶ Play Song';
  }
});

function drawVisualizer() {
  requestAnimationFrame(drawVisualizer);
  analyser.getByteFrequencyData(dataArray);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const barWidth = canvas.width / dataArray.length;
  for (let i = 0; i < dataArray.length; i++) {
    const barHeight = dataArray[i] * 1.5;
    const x = i * barWidth;
    const y = canvas.height - barHeight;

    const glow = `rgba(0, 255, 200, ${barHeight / 300})`;
    ctx.fillStyle = glow;
    ctx.shadowBlur = 20;
    ctx.shadowColor = glow;
    ctx.fillRect(x, y, barWidth - 2, barHeight);
  }
}