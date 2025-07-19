 function startMagic() {
            alert("🎉 Innu surprises idava, Scroll madle Magane!");
            window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
        }

        window.addEventListener('load', () => {
            const audio = document.getElementById('bgm');
            audio.volume = 0.4;
            const unlock = () => {
                audio.play().catch(() => { });
                window.removeEventListener('click', unlock);
            };
            window.addEventListener('click', unlock);
        });

        // Button 1: Random burst from click point
        function burstAtClick(e) {
            const popSound = document.getElementById('popSound');
            if (popSound) {
                popSound.currentTime = 0; // Rewind to start
                setTimeout(() => {
                    popSound.play();
                }, 500); // 1000ms = 1 second
            }


            const emojis = ['🌸', '🎈', '✨', '💖', '🎊', '🧁'];
            for (let i = 0; i < 40; i++) {
                const emoji = emojis[Math.floor(Math.random() * emojis.length)];
                const span = document.createElement('span');
                span.className = 'burst';
                span.innerText = emoji;

                span.style.left = `${e.clientX}px`;
                span.style.top = `${e.clientY}px`;

                const size = Math.random() * 2 + 7;
                span.style.fontSize = `${size}rem`;

                const x = (Math.random() - 0.5) * 500 + 'px';
                const y = (Math.random() - 0.5) * 500 + 'px';
                const r = Math.random() * 720 - 360 + 'deg';

                span.style.setProperty('--x', x);
                span.style.setProperty('--y', y);
                span.style.setProperty('--r', r);

                document.body.appendChild(span);
                setTimeout(() => span.remove(), 1200);
            }
        }

        function fullScreenBurst() {
            const blastSound = document.getElementById('blastSound');
            if (blastSound) {
                blastSound.currentTime = 0;
                blastSound.play();
            }

            const emojis = ['🌸', '🎈', '💖', '✨', '🎊'];
            for (let i = 0; i < 30; i++) {
                const emoji = emojis[Math.floor(Math.random() * emojis.length)];
                const span = document.createElement('span');
                span.className = 'burst';
                span.innerText = emoji;

                span.style.left = `${Math.random() * window.innerWidth}px`;
                span.style.top = `${Math.random() * window.innerHeight}px`;

                const size = Math.random() * 2 + 7;
                span.style.fontSize = `${size}rem`;

                const x = (Math.random() - 0.5) * 300 + 'px';
                const y = (Math.random() - 0.5) * 300 + 'px';
                const r = Math.random() * 360 - 180 + 'deg';

                span.style.setProperty('--x', x);
                span.style.setProperty('--y', y);
                span.style.setProperty('--r', r);

                document.body.appendChild(span);
                setTimeout(() => span.remove(), 1200);
            }
        }


        window.addEventListener('load', () => {
            const audio = document.getElementById('bgm');
            audio.volume = 0.4;
            const unlock = () => {
                audio.play().catch(() => { });
                window.removeEventListener('click', unlock);
            };
            window.addEventListener('click', unlock);
        });

        document.addEventListener('visibilitychange', () => {
            const audio = document.getElementById('bgm');
            if (document.hidden) {
                audio.pause(); // pause when user leaves
            } else {
                audio.play().catch(() => { });
            }
        });

        // hero section...



         const emojis = ['🌸', '🎈', '✨', '💖', '🧁'];
    for (let i = 0; i < 25; i++) {
      const emoji = document.createElement('div');
      emoji.className = 'emoji';
      emoji.style.left = Math.random() * 100 + 'vw';
      emoji.style.top = '100vh';
      emoji.style.animationDuration = (4 + Math.random() * 3) + 's';
      emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      document.body.appendChild(emoji);
    }

    const dob = new Date("2005-07-20T00:00:00");

    function updateLiveTime() {
      const now = new Date();
      let diff = now - dob;

      const msInSec = 1000;
      const msInMin = msInSec * 60;
      const msInHr  = msInMin * 60;
      const msInDay = msInHr * 24;

      const years = now.getFullYear() - dob.getFullYear();
      const birthThisYear = new Date(now.getFullYear(), dob.getMonth(), dob.getDate());

      let adjustedYears = years;
      if (now < birthThisYear) adjustedYears--;

      const days = Math.floor(diff / msInDay);
      const hrs  = Math.floor((diff % msInDay) / msInHr);
      const mins = Math.floor((diff % msInHr) / msInMin);
      const secs = Math.floor((diff % msInMin) / msInSec);

      document.getElementById("live-time").innerHTML = `
        <span class="highlight">${adjustedYears}</span> years, i.e<br>
        <span class="highlight">${days}</span> days,
        <span class="highlight">${hrs}</span> hours, <br>
        <span class="highlight">${mins}</span> minutes,
        <span class="highlight">${secs}</span> seconds
      `;
    }

    updateLiveTime();
    setInterval(updateLiveTime, 1000);

    // Rotating Quotes
  const quotes = [
  "Le magane, Time with you hits different 🎉",
   "Vibe check? You passed without Exam 💫",
"Not always in touch, you’re still my default da.",
   "When I say ‘my people’, you top the list.",
  "One message from you = instant mood fix.",


 
];

    let currentQuote = 0;
    function rotateQuote() {
      document.getElementById("quote").textContent = quotes[currentQuote];
      currentQuote = (currentQuote + 1) % quotes.length;
    }

    rotateQuote();
    setInterval(rotateQuote, 5000);