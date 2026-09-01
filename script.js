// ===== VARIÁVEIS GLOBAIS =====
let currentVideoId = null;
let currentTitle = 'Nenhuma';
let player = null;
let isPlaying = false;
let playerReady = false;

// ===== INICIALIZAR PLAYER DO YOUTUBE =====
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '1',
        width: '1',
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            'disablekb': 1,
            'modestbranding': 1,
            'rel': 0,
            'showinfo': 0,
            'iv_load_policy': 3,
            'fs': 0,
            'origin': window.location.origin
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    playerReady = true;
    console.log('Player pronto!');
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        isPlaying = true;
        updatePlayButton(true);
        updateProgress();
    } else if (event.data === YT.PlayerState.PAUSED) {
        isPlaying = false;
        updatePlayButton(false);
    } else if (event.data === YT.PlayerState.ENDED) {
        isPlaying = false;
        updatePlayButton(false);
        nextMusic();
    }
}

function updatePlayButton(playing) {
    const playBtn = document.getElementById('playBtn');
    if (playBtn) {
        playBtn.textContent = playing ? '⏸' : '▶️';
        playBtn.title = playing ? 'Pausar' : 'Tocar';
        playBtn.setAttribute('aria-label', playing ? 'Pausar' : 'Tocar');
    }
    const indicator = document.querySelector('.status-indicator');
    if (indicator) {
        indicator.textContent = playing ? '▶️' : '⏸';
    }
}

// ===== FUNÇÕES DO PLAYER =====
function playMusic(videoId, title) {
    currentVideoId = videoId;
    currentTitle = title;

    if (player && playerReady && player.loadVideoById) {
        player.loadVideoById(videoId);
        isPlaying = true;
        updatePlayButton(true);
        document.querySelector('.current-song').textContent = title;
        document.querySelector('.player-info').classList.add('active');
    } else {
        // Espera o player e tenta novamente
        const tryPlay = setInterval(() => {
            if (player && playerReady && player.loadVideoById) {
                clearInterval(tryPlay);
                player.loadVideoById(videoId);
                isPlaying = true;
                updatePlayButton(true);
                document.querySelector('.current-song').textContent = title;
                document.querySelector('.player-info').classList.add('active');
            }
        }, 200);
        // Para de tentar após 5 segundos
        setTimeout(() => clearInterval(tryPlay), 5000);
    }
}

function togglePlay() {
    if (!player || !playerReady || !currentVideoId) {
        return;
    }

    if (isPlaying) {
        player.pauseVideo();
    } else {
        player.playVideo();
    }
}

function pauseMusic() {
    if (player && playerReady && isPlaying) {
        player.pauseVideo();
    }
}

function nextMusic() {
    const musicItems = document.querySelectorAll('.music-item');
    let currentIndex = -1;

    musicItems.forEach((item, index) => {
        if (item.dataset.video === currentVideoId) {
            currentIndex = index;
        }
    });

    if (currentIndex !== -1 && currentIndex < musicItems.length - 1) {
        const nextItem = musicItems[currentIndex + 1];
        playMusic(nextItem.dataset.video, nextItem.dataset.title);
    } else if (currentIndex === musicItems.length - 1 || currentIndex === -1) {
        const firstItem = musicItems[0];
        if (firstItem) {
            playMusic(firstItem.dataset.video, firstItem.dataset.title);
        }
    }
}

function prevMusic() {
    const musicItems = document.querySelectorAll('.music-item');
    let currentIndex = -1;

    musicItems.forEach((item, index) => {
        if (item.dataset.video === currentVideoId) {
            currentIndex = index;
        }
    });

    if (currentIndex > 0) {
        const prevItem = musicItems[currentIndex - 1];
        playMusic(prevItem.dataset.video, prevItem.dataset.title);
    } else if (currentIndex === 0) {
        const lastItem = musicItems[musicItems.length - 1];
        playMusic(lastItem.dataset.video, lastItem.dataset.title);
    }
}

// ===== BARRA DE PROGRESSO =====
function updateProgress() {
    if (player && playerReady && player.getCurrentTime && player.getDuration) {
        const duration = player.getDuration();
        const currentTime = player.getCurrentTime();

        if (duration > 0) {
            const progress = (currentTime / duration) * 100;
            document.querySelector('.progress-fill').style.width = progress + '%';
        }
    }
    requestAnimationFrame(updateProgress);
}

// ===== EVENTOS =====
document.addEventListener('DOMContentLoaded', function () {
    // Botões de play nos cards
    document.querySelectorAll('.play-music').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            const item = this.closest('.music-item');
            const videoId = item.dataset.video;
            const title = item.dataset.title;
            playMusic(videoId, title);
        });
    });

    // Botão único de play/pause
    document.getElementById('playBtn').addEventListener('click', togglePlay);

    // Botões next/prev
    document.getElementById('nextBtn').addEventListener('click', nextMusic);
    document.getElementById('prevBtn').addEventListener('click', prevMusic);

    // Clique nos cards (tocar primeira música)
    document.querySelectorAll('.playlist-card').forEach(card => {
        card.addEventListener('click', function (e) {
            if (e.target.tagName === 'BUTTON') return;

            const firstMusic = this.querySelector('.music-item');
            if (firstMusic) {
                playMusic(firstMusic.dataset.video, firstMusic.dataset.title);
            }
        });
    });

    // Controle de volume
    document.querySelector('.volume-bar').addEventListener('click', function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;
        const percent = Math.min(100, Math.max(0, (x / width) * 100));
        this.querySelector('.volume-progress').style.width = percent + '%';

        if (player && playerReady && player.setVolume) {
            player.setVolume(percent);
        }
    });
});

// ===== CARREGAR API DO YOUTUBE =====
const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

console.log('Pobrefy carregado!');
