document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('pesq');
   
    input.addEventListener('focus', function() {
        input.placeholder = '';
    });
    
    input.addEventListener('blur', function() {
        input.placeholder = 'O que deseja ouvir?';
    });

    const artists = document.querySelectorAll('.imageContainer');
    input.addEventListener('input', function () {
        const searchValue = input.value.toLowerCase();
        
        artists.forEach(artist => {
            const name = artist.getAttribute('data-name').toLowerCase();
            if (name.includes(searchValue)) {
                artist.style.display = 'block';
            } else {
                artist.style.display = 'none';
            }
        });
    });

    const fotoLP = document.getElementById("Linkin Park");
    const fotoYE = document.getElementById("Kanye West");
    const fotoDO = document.getElementById("MF DOOM");
    const fotoKdot = document.getElementById("Kdot");
    const fotoWE = document.getElementById("Weezer");
    
    const audio = document.getElementById("audio");

    const musicaLP = "../../AUDIO/Linkinpark.mp3";
    const musicaYE = "../../AUDIO/YE.mp3";
    const musicaDO = "../../AUDIO/DOOM.mp3";
    const musicaKdot = "../../AUDIO/Kendrick.mp3";
    const musicaWE = "../../AUDIO/Weezer.mp3";

    fotoLP.addEventListener("click", function() {
        audio.src = musicaLP;
        
        audio.load();
        audio.play();
    });

    fotoYE.addEventListener("click", function() {
        audio.src = musicaYE;
        
        audio.load();
        audio.play();
    });

    fotoDO.addEventListener("click", function() {
        audio.src = musicaDO;
        
        audio.load();
        audio.play();
    });

    fotoKdot.addEventListener("click", function() {
        audio.src = musicaKdot;
        
        audio.load();
        audio.play();
    });

    fotoWE.addEventListener("click", function() {
        audio.src = musicaWE;
        
        audio.load();
        audio.play();
    });
});
    const toggleSwitch = document.getElementById('modeToggle');
        const body = document.body;

        function setThemeBasedOnTime() {
            const hour = new Date().getHours();
            if (hour >= 18 || hour < 6) {
                body.classList.remove('claro');
                toggleSwitch.checked = true;
            } else {
                body.classList.add('claro');
                toggleSwitch.checked = false;
            }
        }

        toggleSwitch.addEventListener('change', () => {
            body.classList.toggle('claro');
        });

        setThemeBasedOnTime();
