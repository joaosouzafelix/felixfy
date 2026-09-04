// ===== VARIÁVEIS GLOBAIS =====
let currentVideoId = null;
let currentTitle = 'Nenhuma';
let player = null;
let isPlaying = false;

// ===== INICIALIZAR PLAYER DO YOUTUBE =====
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    console.log('Player pronto!');
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        isPlaying = true;
        document.querySelector('.status-indicator').textContent = '▶️';
        document.querySelector('.play-btn').textContent = '⏸';
    } else if (event.data === YT.PlayerState.PAUSED) {
        isPlaying = false;
        document.querySelector('.status-indicator').textContent = '⏸';
        document.querySelector('.play-btn').textContent = '▶️';
    } else if (event.data === YT.PlayerState.ENDED) {
        isPlaying = false;
        document.querySelector('.status-indicator').textContent = '▶️';
        document.querySelector('.play-btn').textContent = '▶️';
        nextMusic();
    }
}

// ===== FUNÇÕES DO PLAYER =====
function playMusic(videoId, title) {
    currentVideoId = videoId;
    currentTitle = title;
    
    if (player && player.loadVideoById) {
        player.loadVideoById(videoId);
        player.playVideo();
        isPlaying = true;
        document.querySelector('.status-indicator').textContent = '▶️';
        document.querySelector('.play-btn').textContent = '⏸';
        document.querySelector('.current-song').textContent = title;
        document.querySelector('.player-info').classList.add('active');
        updateProgress();
    } else {
        // Fallback: abrir em nova aba
        window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
    }
}

function togglePlay() {
    if (!player || !currentVideoId) {
        alert('Selecione uma música primeiro!');
        return;
    }
    
    if (isPlaying) {
        player.pauseVideo();
        isPlaying = false;
        document.querySelector('.status-indicator').textContent = '⏸';
        document.querySelector('.play-btn').textContent = '▶️';
    } else {
        player.playVideo();
        isPlaying = true;
        document.querySelector('.status-indicator').textContent = '▶️';
        document.querySelector('.play-btn').textContent = '⏸';
    }
}

function pauseMusic() {
    if (player && isPlaying) {
        player.pauseVideo();
        isPlaying = false;
        document.querySelector('.status-indicator').textContent = '⏸';
        document.querySelector('.play-btn').textContent = '▶️';
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
    } else if (currentIndex === musicItems.length - 1) {
        // Volta para a primeira
        const firstItem = musicItems[0];
        playMusic(firstItem.dataset.video, firstItem.dataset.title);
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
        // Vai para a última
        const lastItem = musicItems[musicItems.length - 1];
        playMusic(lastItem.dataset.video, lastItem.dataset.title);
    }
}

// ===== BARRA DE PROGRESSO =====
function updateProgress() {
    if (player && player.getCurrentTime) {
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
document.addEventListener('DOMContentLoaded', function() {
    // Botões de play nos cards
    document.querySelectorAll('.play-music').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const item = this.closest('.music-item');
            const videoId = item.dataset.video;
            const title = item.dataset.title;
            playMusic(videoId, title);
        });
    });
    
    // Botões do player
    document.getElementById('playBtn').addEventListener('click', togglePlay);
    document.getElementById('pauseBtn').addEventListener('click', pauseMusic);
    document.getElementById('nextBtn').addEventListener('click', nextMusic);
    document.getElementById('prevBtn').addEventListener('click', prevMusic);
    
    // Clique nos cards (abrir playlist)
    document.querySelectorAll('.playlist-card').forEach(card => {
        card.addEventListener('click', function(e) {
            // Não disparar se clicou em um botão
            if (e.target.tagName === 'BUTTON') return;
            
            const firstMusic = this.querySelector('.music-item');
            if (firstMusic) {
                playMusic(firstMusic.dataset.video, firstMusic.dataset.title);
            }
        });
    });
    
    // Controle de volume (simulado)
    document.querySelector('.volume-bar').addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;
        const percent = Math.min(100, Math.max(0, (x / width) * 100));
        this.querySelector('.volume-progress').style.width = percent + '%';
        
        if (player && player.setVolume) {
            player.setVolume(percent);
        }
    });
});

// ===== CARREGAR API DO YOUTUBE =====
const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

console.log('🎵 Pobrefy carregado! Clique em uma música para tocar.');