// ============================================================
// ===== DADOS DAS MÚSICAS (COM IDs VÁLIDOS DO YOUTUBE) =====
// ============================================================
var MUSIC_DATA = {
    'ana-castela': [
        { id: 'dQw4w9WgXcQ', title: 'Never Gonna Give You Up', artist: 'Rick Astley', cover: '🎵', lyrics: 'Never gonna give you up\nNever gonna let you down...' },
        { id: '9bZkp7q19f0', title: 'Gangnam Style', artist: 'PSY', cover: '🕺', lyrics: 'Oppa Gangnam Style...' },
        { id: 'kJQP7kiw5Fk', title: 'Despacito', artist: 'Luis Fonsi ft. Daddy Yankee', cover: '💃', lyrics: 'Despacito\nQuiero respirar tu cuello despacito...' },
        { id: '3JWTaaS7LdU', title: 'Shape of You', artist: 'Ed Sheeran', cover: '🎶', lyrics: 'I\'m in love with the shape of you...' },
        { id: 'fJ9rUzIMcZQ', title: 'Que Tiro Foi Esse', artist: 'Jojo Maronttinni', cover: '💥', lyrics: 'Que tiro foi esse\nQue tiro foi esse...' },
        { id: '7wtfhZwyrcc', title: 'Envolver', artist: 'Anitta', cover: '🔥', lyrics: 'Envolver, envolver\nMe envolver...' },
        { id: 'NDL1cQfJZPs', title: 'Ai Papai', artist: 'Anitta ft. MC Kevinho', cover: '🎤', lyrics: 'Ai papai, ai papai\nAi papai, ai papai...' },
        { id: 'kffacxfA7G4', title: 'Fiu Fiu', artist: 'Banda Uó', cover: '💕', lyrics: 'Fiu fiu, você me deixou assim...' },
        { id: 'ViwtNLUqkMY', title: 'Me Gusta', artist: 'Anitta ft. Cardi B', cover: '🌶️', lyrics: 'Me gusta, me gusta...' },
        { id: 'Dke8lQutZRQ', title: 'Vai Malandra', artist: 'Anitta', cover: '💃', lyrics: 'Vai malandra\nVai malandra...' }
    ],
    'sertanejo': [
        { id: 'dQw4w9WgXcQ', title: 'Never Gonna Give You Up', artist: 'Rick Astley', cover: '🎵' },
        { id: '9bZkp7q19f0', title: 'Gangnam Style', artist: 'PSY', cover: '🕺' },
        { id: 'kJQP7kiw5Fk', title: 'Despacito', artist: 'Luis Fonsi ft. Daddy Yankee', cover: '💃' }
    ],
    'funk': [
        { id: 'fJ9rUzIMcZQ', title: 'Que Tiro Foi Esse', artist: 'Jojo Maronttinni', cover: '💥' },
        { id: '7wtfhZwyrcc', title: 'Envolver', artist: 'Anitta', cover: '🔥' }
    ]
};

var DEFAULT_PLAYLISTS = {
    'ana-castela': {
        id: 'ana-castela',
        name: 'Ana Castela',
        description: 'Todas as músicas da Ana Castela',
        cover: '🎤',
        songs: MUSIC_DATA['ana-castela'].map(function(s) { return s.id; })
    },
    'sertanejo': {
        id: 'sertanejo',
        name: 'Sertanejo',
        description: 'O melhor do sertanejo',
        cover: '🎸',
        songs: MUSIC_DATA['sertanejo'].map(function(s) { return s.id; })
    },
    'funk': {
        id: 'funk',
        name: 'Funk',
        description: 'Os melhores funks',
        cover: '🎧',
        songs: MUSIC_DATA['funk'].map(function(s) { return s.id; })
    }
};

var state = {
    currentUser: { name: 'Usuário', email: 'usuario@pobrefy.com' },
    currentPlaylist: null,
    currentSongIndex: 0,
    currentSongId: null,
    isPlaying: false,
    playerReady: false,
    player: null,
    playlists: {},
    queue: []
};

// ============================================================
// ===== INICIALIZAÇÃO =====
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    loadFromStorage();
    showApp();
    updateGreeting();
    renderHome();
    renderLibrary();
    renderSidebar();
    setupEvents();
    loadYouTubeAPI();
});

// ============================================================
// ===== LOCAL STORAGE =====
// ============================================================
function loadFromStorage() {
    try {
        var savedPlaylists = localStorage.getItem('pobrefy_playlists');
        if (savedPlaylists) {
            state.playlists = JSON.parse(savedPlaylists);
        } else {
            state.playlists = JSON.parse(JSON.stringify(DEFAULT_PLAYLISTS));
        }
    } catch (e) {
        console.error('Erro ao carregar dados:', e);
        state.playlists = JSON.parse(JSON.stringify(DEFAULT_PLAYLISTS));
    }
}

function saveToStorage() {
    try {
        localStorage.setItem('pobrefy_playlists', JSON.stringify(state.playlists));
    } catch (e) {
        console.error('Erro ao salvar dados:', e);
    }
}

// ============================================================
// ===== APLICATIVO =====
// ============================================================
function showApp() {
    var loginScreen = document.getElementById('loginScreen');
    var app = document.getElementById('app');
    if (loginScreen) loginScreen.style.display = 'none';
    if (app) app.style.display = 'flex';
    var userNameDisplay = document.getElementById('userNameDisplay');
    if (userNameDisplay) {
        userNameDisplay.textContent = state.currentUser ? state.currentUser.name : 'Usuário';
    }
}

// ============================================================
// ===== SAUDAÇÃO =====
// ============================================================
function updateGreeting() {
    var hour = new Date().getHours();
    var greeting = '';
    
    if (hour >= 5 && hour < 12) {
        greeting = 'Bom dia';
    } else if (hour >= 12 && hour < 18) {
        greeting = 'Boa tarde';
    } else {
        greeting = 'Boa noite';
    }
    
    var name = state.currentUser ? state.currentUser.name : '';
    var message = document.getElementById('greetingMessage');
    if (message) {
        message.textContent = name ? greeting + ', ' + name + '!' : greeting + '!';
    }
}

// ============================================================
// ===== NAVEGAÇÃO =====
// ============================================================
function setupNavigation() {
    var navItems = document.querySelectorAll('nav ul li');
    for (var i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener('click', function() {
            var page = this.dataset.page;
            
            var allNav = document.querySelectorAll('nav ul li');
            for (var j = 0; j < allNav.length; j++) {
                allNav[j].classList.remove('active');
            }
            this.classList.add('active');
            
            var allPages = document.querySelectorAll('.page-content');
            for (var k = 0; k < allPages.length; k++) {
                allPages[k].classList.remove('active');
            }
            var target = document.getElementById('page-' + page);
            if (target) target.classList.add('active');
        });
    }
    
    var sidebarItems = document.querySelectorAll('#sidebarPlaylists li[data-playlist]');
    for (var l = 0; l < sidebarItems.length; l++) {
        sidebarItems[l].addEventListener('click', function() {
            var playlistId = this.dataset.playlist;
            openPlaylist(playlistId);
        });
    }
    
    var createBtn = document.querySelector('.create-playlist-btn');
    if (createBtn) {
        createBtn.addEventListener('click', function() {
            var name = prompt('Nome da nova playlist:');
            if (name && name.trim()) {
                createPlaylist(name.trim());
            }
        });
    }
    
    var backBtn = document.getElementById('backFromPlaylist');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            document.getElementById('page-playlist').style.display = 'none';
            document.getElementById('page-home').classList.add('active');
            var homeNav = document.querySelector('nav ul li[data-page="home"]');
            if (homeNav) homeNav.classList.add('active');
        });
    }
}

// ============================================================
// ===== PLAYLISTS =====
// ============================================================
function createPlaylist(name) {
    var id = 'playlist_' + Date.now();
    state.playlists[id] = {
        id: id,
        name: name,
        description: 'Playlist criada por você',
        cover: '📋',
        songs: [],
        isCustom: true
    };
    saveToStorage();
    renderSidebar();
    renderLibrary();
    renderHome();
}

function deletePlaylist(id) {
    if (id in DEFAULT_PLAYLISTS) {
        alert('Não é possível excluir playlists padrão!');
        return;
    }
    if (confirm('Tem certeza que deseja excluir esta playlist?')) {
        delete state.playlists[id];
        saveToStorage();
        renderSidebar();
        renderLibrary();
        renderHome();
        document.getElementById('page-playlist').style.display = 'none';
        document.getElementById('page-home').classList.add('active');
    }
}

function openPlaylist(id) {
    var playlist = state.playlists[id];
    if (!playlist) return;
    
    state.currentPlaylist = id;
    
    var detail = document.getElementById('playlistDetail');
    var songs = [];
    for (var i = 0; i < playlist.songs.length; i++) {
        var song = getSongById(playlist.songs[i]);
        if (song) songs.push(song);
    }
    
    var html = '<div class="playlist-detail-header">';
    html += '<div class="detail-artwork">' + (playlist.cover || '🎵') + '</div>';
    html += '<div class="detail-info">';
    html += '<span class="detail-type">Playlist</span>';
    html += '<h2 class="detail-name">' + playlist.name + '</h2>';
    html += '<p class="detail-description">' + (playlist.description || '') + '</p>';
    html += '<p class="detail-description">' + songs.length + ' músicas</p>';
    if (playlist.isCustom) {
        html += '<button class="detail-delete" onclick="deletePlaylist(\'' + id + '\')">🗑️ Excluir</button>';
    }
    if (songs.length > 0) {
        html += '<button class="detail-play-all" onclick="playPlaylist(\'' + id + '\')">▶️ Reproduzir todas</button>';
    } else {
        html += '<p style="color: var(--text-secondary);">Adicione músicas a esta playlist</p>';
    }
    html += '</div></div>';
    
    html += '<div class="playlist-tracks">';
    for (var j = 0; j < songs.length; j++) {
        var song = songs[j];
        html += '<div class="playlist-track" onclick="playSong(\'' + song.id + '\', \'' + id + '\')">';
        html += '<div class="track-artwork">' + (song.cover || '🎵') + '</div>';
        html += '<div class="track-info">';
        html += '<div class="track-title">' + song.title + '</div>';
        html += '<div class="track-artist">' + (song.artist || 'Desconhecido') + '</div>';
        html += '</div>';
        html += '<button class="track-play" onclick="event.stopPropagation(); playSong(\'' + song.id + '\', \'' + id + '\')">▶️</button>';
        html += '</div>';
    }
    html += '</div>';
    
    detail.innerHTML = html;
    
    var allPages = document.querySelectorAll('.page-content');
    for (var k = 0; k < allPages.length; k++) {
        allPages[k].classList.remove('active');
    }
    document.getElementById('page-playlist').style.display = 'block';
}

function playPlaylist(id) {
    var playlist = state.playlists[id];
    if (!playlist || !playlist.songs.length) {
        alert('Esta playlist não tem músicas!');
        return;
    }
    
    state.queue = [];
    for (var i = 0; i < playlist.songs.length; i++) {
        var song = getSongById(playlist.songs[i]);
        if (song) state.queue.push(song);
    }
    state.currentSongIndex = 0;
    
    if (state.queue.length > 0) {
        playSong(state.queue[0].id, id);
    }
}

function getSongById(id) {
    var playlists = Object.keys(MUSIC_DATA);
    for (var i = 0; i < playlists.length; i++) {
        var playlist = MUSIC_DATA[playlists[i]];
        for (var j = 0; j < playlist.length; j++) {
            if (playlist[j].id === id) return playlist[j];
        }
    }
    return null;
}

function getAllSongs() {
    var all = [];
    var playlists = Object.keys(MUSIC_DATA);
    for (var i = 0; i < playlists.length; i++) {
        var playlist = MUSIC_DATA[playlists[i]];
        for (var j = 0; j < playlist.length; j++) {
            all.push(playlist[j]);
        }
    }
    return all;
}

// ============================================================
// ===== PLAYER =====
// ============================================================
function setupPlayer() {
    var playBtn = document.getElementById('playBtn');
    var prevBtn = document.getElementById('prevBtn');
    var nextBtn = document.getElementById('nextBtn');
    
    if (playBtn) playBtn.addEventListener('click', togglePlay);
    if (prevBtn) prevBtn.addEventListener('click', prevSong);
    if (nextBtn) nextBtn.addEventListener('click', nextSong);
    
    var progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        progressBar.addEventListener('click', function(e) {
            if (!state.player || !state.playerReady) return;
            var rect = this.getBoundingClientRect();
            var percent = (e.clientX - rect.left) / rect.width;
            var duration = state.player.getDuration();
            if (duration > 0) {
                state.player.seekTo(percent * duration, true);
            }
        });
    }
    
    var volumeBar = document.querySelector('.volume-bar');
    if (volumeBar) {
        volumeBar.addEventListener('click', function(e) {
            var rect = this.getBoundingClientRect();
            var percent = Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100));
            var volumeProgress = document.getElementById('volumeProgress');
            if (volumeProgress) volumeProgress.style.width = percent + '%';
            if (state.player && state.playerReady) {
                state.player.setVolume(percent);
            }
        });
    }
    
    var lyricsBtn = document.getElementById('toggleLyrics');
    if (lyricsBtn) lyricsBtn.addEventListener('click', toggleLyrics);
    
    var closeLyrics = document.getElementById('closeLyrics');
    if (closeLyrics) {
        closeLyrics.addEventListener('click', function() {
            document.getElementById('lyricsPanel').style.display = 'none';
        });
    }
}

function playSong(songId, playlistId) {
    var song = getSongById(songId);
    if (!song) {
        console.error('Música não encontrada:', songId);
        return;
    }
    
    state.currentSongId = songId;
    state.currentPlaylist = playlistId || state.currentPlaylist;
    
    var playerSong = document.getElementById('playerSong');
    var playerArtist = document.getElementById('playerArtist');
    var playerArtwork = document.getElementById('playerArtwork');
    
    if (playerSong) playerSong.textContent = song.title;
    if (playerArtist) playerArtist.textContent = song.artist || 'Desconhecido';
    if (playerArtwork) playerArtwork.innerHTML = song.cover || '🎵';
    
    if (state.player && state.playerReady) {
        try {
            state.player.loadVideoById(songId);
            state.player.playVideo();
            state.isPlaying = true;
            var playBtn = document.getElementById('playBtn');
            if (playBtn) {
                playBtn.textContent = '⏸';
                playBtn.title = 'Pausar';
            }
        } catch (e) {
            console.error('Erro ao tocar música:', e);
        }
    } else {
        console.warn('Player não está pronto. Tentando novamente...');
        setTimeout(function() {
            if (state.player && state.playerReady) {
                playSong(songId, playlistId);
            }
        }, 1000);
    }
    
    updateLyrics(song);
}

function togglePlay() {
    if (!state.player || !state.playerReady) {
        var all = getAllSongs();
        if (all.length > 0) playSong(all[0].id);
        return;
    }
    
    if (state.isPlaying) {
        try {
            state.player.pauseVideo();
            state.isPlaying = false;
            var playBtn = document.getElementById('playBtn');
            if (playBtn) {
                playBtn.textContent = '▶️';
                playBtn.title = 'Tocar';
            }
        } catch (e) {
            console.error('Erro ao pausar:', e);
        }
    } else {
        try {
            state.player.playVideo();
            state.isPlaying = true;
            var playBtn = document.getElementById('playBtn');
            if (playBtn) {
                playBtn.textContent = '⏸';
                playBtn.title = 'Pausar';
            }
        } catch (e) {
            console.error('Erro ao reproduzir:', e);
        }
    }
}

function nextSong() {
    if (!state.currentPlaylist) {
        var all = getAllSongs();
        var currentIndex = -1;
        for (var i = 0; i < all.length; i++) {
            if (all[i].id === state.currentSongId) {
                currentIndex = i;
                break;
            }
        }
        if (currentIndex < all.length - 1) {
            playSong(all[currentIndex + 1].id);
        }
        return;
    }
    
    var playlist = state.playlists[state.currentPlaylist];
    if (!playlist || !playlist.songs.length) return;
    
    var currentIndex = -1;
    for (var j = 0; j < playlist.songs.length; j++) {
        if (playlist.songs[j] === state.currentSongId) {
            currentIndex = j;
            break;
        }
    }
    if (currentIndex < playlist.songs.length - 1) {
        playSong(playlist.songs[currentIndex + 1].id, state.currentPlaylist);
    } else if (playlist.songs.length > 0) {
        playSong(playlist.songs[0].id, state.currentPlaylist);
    }
}

function prevSong() {
    if (!state.currentPlaylist) {
        var all = getAllSongs();
        var currentIndex = -1;
        for (var i = 0; i < all.length; i++) {
            if (all[i].id === state.currentSongId) {
                currentIndex = i;
                break;
            }
        }
        if (currentIndex > 0) {
            playSong(all[currentIndex - 1].id);
        }
        return;
    }
    
    var playlist = state.playlists[state.currentPlaylist];
    if (!playlist || !playlist.songs.length) return;
    
    var currentIndex = -1;
    for (var j = 0; j < playlist.songs.length; j++) {
        if (playlist.songs[j] === state.currentSongId) {
            currentIndex = j;
            break;
        }
    }
    if (currentIndex > 0) {
        playSong(playlist.songs[currentIndex - 1].id, state.currentPlaylist);
    } else if (playlist.songs.length > 0) {
        playSong(playlist.songs[playlist.songs.length - 1].id, state.currentPlaylist);
    }
}

// ============================================================
// ===== LETRAS =====
// ============================================================
function toggleLyrics() {
    var panel = document.getElementById('lyricsPanel');
    if (panel) {
        panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
    }
}

function updateLyrics(song) {
    var title = document.getElementById('lyricsTitle');
    var content = document.getElementById('lyricsContent');
    
    if (title) {
        title.textContent = song.title + ' - ' + (song.artist || 'Desconhecido');
    }
    
    if (content) {
        if (song.lyrics) {
            content.innerHTML = '<pre>' + song.lyrics + '</pre>';
        } else {
            content.innerHTML = '<p class="lyrics-placeholder">Letra não disponível para esta música.</p>';
        }
    }
}

// ============================================================
// ===== YOUTUBE PLAYER =====
// ============================================================
function loadYouTubeAPI() {
    if (window.YT && window.YT.Player) {
        console.log('YouTube API já carregada');
        createPlayer();
        return;
    }
    
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    if (firstScriptTag) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
    
    window.onYouTubeIframeAPIReady = function() {
        console.log('YouTube API carregada!');
        createPlayer();
    };
}

function createPlayer() {
    var playerElement = document.getElementById('player');
    if (playerElement) {
        state.player = new YT.Player('player', {
            height: '200',
            width: '300',
            playerVars: {
                'autoplay': 0,
                'controls': 0,
                'disablekb': 1,
                'modestbranding': 1,
                'rel': 0,
                'showinfo': 0,
                'iv_load_policy': 3,
                'fs': 0
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange,
                'onError': onPlayerError
            }
        });
    }
}

function onPlayerReady(event) {
    state.playerReady = true;
    console.log('Player pronto!');
    // Tocar a primeira música automaticamente
    if (!state.currentSongId) {
        var all = getAllSongs();
        if (all.length > 0) {
            playSong(all[0].id);
        }
    }
}

function onPlayerStateChange(event) {
    console.log('Estado do player:', event.data);
    if (event.data === YT.PlayerState.PLAYING) {
        state.isPlaying = true;
        var playBtn = document.getElementById('playBtn');
        if (playBtn) {
            playBtn.textContent = '⏸';
            playBtn.title = 'Pausar';
        }
        updateProgress();
    } else if (event.data === YT.PlayerState.PAUSED) {
        state.isPlaying = false;
        var playBtn = document.getElementById('playBtn');
        if (playBtn) {
            playBtn.textContent = '▶️';
            playBtn.title = 'Tocar';
        }
    } else if (event.data === YT.PlayerState.ENDED) {
        state.isPlaying = false;
        var playBtn = document.getElementById('playBtn');
        if (playBtn) {
            playBtn.textContent = '▶️';
            playBtn.title = 'Tocar';
        }
        nextSong();
    } else if (event.data === YT.PlayerState.UNSTARTED) {
        console.log('Player não iniciado');
    }
}

function onPlayerError(event) {
    console.error('Erro no player do YouTube:', event.data);
    // Erro 100 = vídeo não encontrado, 101 = embed proibido, 150 = embed proibido
    if (event.data === 100 || event.data === 101 || event.data === 150) {
        console.warn('Vídeo não disponível. Pulando para o próximo...');
        nextSong();
    } else if (state.currentSongId) {
        setTimeout(function() {
            if (state.player && state.playerReady) {
                try {
                    state.player.loadVideoById(state.currentSongId);
                } catch (e) {
                    console.error('Erro ao recarregar vídeo:', e);
                }
            }
        }, 2000);
    }
}

function updateProgress() {
    if (state.player && state.playerReady && state.player.getCurrentTime) {
        try {
            var duration = state.player.getDuration();
            var currentTime = state.player.getCurrentTime();
            
            if (duration > 0 && !isNaN(duration) && !isNaN(currentTime)) {
                var progress = (currentTime / duration) * 100;
                var progressFill = document.getElementById('progressFill');
                var currentTimeEl = document.getElementById('currentTime');
                var totalTimeEl = document.getElementById('totalTime');
                
                if (progressFill) progressFill.style.width = progress + '%';
                if (currentTimeEl) currentTimeEl.textContent = formatTime(currentTime);
                if (totalTimeEl) totalTimeEl.textContent = formatTime(duration);
            }
        } catch (e) {
            // Ignora erros
        }
    }
    requestAnimationFrame(updateProgress);
}

function formatTime(seconds) {
    if (!seconds || isNaN(seconds)) return '0:00';
    var min = Math.floor(seconds / 60);
    var sec = Math.floor(seconds % 60);
    return min + ':' + (sec < 10 ? '0' : '') + sec;
}

// ============================================================
// ===== RENDERIZAÇÃO =====
// ============================================================
function renderHome() {
    var container = document.getElementById('homePlaylists');
    if (!container) return;
    
    var playlists = [
        { id: 'ana-castela', name: 'Ana Castela', cover: '🎤', description: MUSIC_DATA['ana-castela'].length + ' músicas' },
        { id: 'sertanejo', name: 'Sertanejo', cover: '🎸', description: MUSIC_DATA['sertanejo'].length + ' músicas' },
        { id: 'funk', name: 'Funk', cover: '🎧', description: MUSIC_DATA['funk'].length + ' músicas' }
    ];
    
    var playlistKeys = Object.keys(state.playlists);
    for (var i = 0; i < playlistKeys.length; i++) {
        var id = playlistKeys[i];
        var playlist = state.playlists[id];
        var exists = false;
        for (var j = 0; j < playlists.length; j++) {
            if (playlists[j].id === id) {
                exists = true;
                break;
            }
        }
        if (playlist.isCustom && !exists) {
            playlists.push({
                id: id,
                name: playlist.name,
                cover: playlist.cover || '📋',
                description: playlist.songs.length + ' músicas',
                isCustom: true
            });
        }
    }
    
    var html = '';
    for (var k = 0; k < playlists.length; k++) {
        var p = playlists[k];
        html += '<div class="playlist-card" onclick="openPlaylist(\'' + p.id + '\')">';
        html += '<div class="card-artwork">' + (p.cover || '🎵') + '</div>';
        html += '<h3>' + p.name + '</h3>';
        html += '<p>' + (p.description || '') + '</p>';
        if (p.isCustom) {
            html += '<span style="font-size:11px;color:#6a6a6a;">📝 Personalizada</span>';
        }
        html += '<button class="play-btn-card" onclick="event.stopPropagation(); playPlaylist(\'' + p.id + '\')">▶️ Reproduzir</button>';
        html += '</div>';
    }
    
    container.innerHTML = html;
}

function renderLibrary() {
    var container = document.getElementById('libraryPlaylists');
    if (!container) return;
    
    var playlistKeys = Object.keys(state.playlists);
    var html = '';
    for (var i = 0; i < playlistKeys.length; i++) {
        var id = playlistKeys[i];
        var p = state.playlists[id];
        html += '<div class="playlist-card" onclick="openPlaylist(\'' + id + '\')">';
        html += '<div class="card-artwork">' + (p.cover || '🎵') + '</div>';
        html += '<h3>' + p.name + '</h3>';
        html += '<p>' + (p.songs ? p.songs.length : 0) + ' músicas</p>';
        if (p.isCustom) {
            html += '<span style="font-size:11px;color:#6a6a6a;">📝 Personalizada</span>';
        }
        html += '</div>';
    }
    
    container.innerHTML = html;
}

function renderSidebar() {
    var container = document.getElementById('sidebarPlaylists');
    if (!container) return;
    
    var html = '';
    html += '<li data-playlist="ana-castela">🎤 Ana Castela</li>';
    html += '<li data-playlist="sertanejo">🎸 Sertanejo</li>';
    html += '<li data-playlist="funk">🎧 Funk</li>';
    
    var playlistKeys = Object.keys(state.playlists);
    for (var i = 0; i < playlistKeys.length; i++) {
        var id = playlistKeys[i];
        var p = state.playlists[id];
        if (p.isCustom) {
            html += '<li data-playlist="' + id + '">📋 ' + p.name + '</li>';
        }
    }
    
    html += '<li class="create-playlist-btn">➕ Criar playlist</li>';
    container.innerHTML = html;
    
    var items = container.querySelectorAll('li[data-playlist]');
    for (var j = 0; j < items.length; j++) {
        items[j].addEventListener('click', function() {
            openPlaylist(this.dataset.playlist);
        });
    }
    
    var createBtn = container.querySelector('.create-playlist-btn');
    if (createBtn) {
        createBtn.addEventListener('click', function() {
            var name = prompt('Nome da nova playlist:');
            if (name && name.trim()) {
                createPlaylist(name.trim());
            }
        });
    }
}

// ============================================================
// ===== PESQUISA =====
// ============================================================
function setupSearch() {
    var input = document.getElementById('searchInput');
    var clearBtn = document.getElementById('clearSearch');
    var results = document.getElementById('searchResults');
    
    if (!input) return;
    
    input.addEventListener('input', function() {
        var query = this.value.trim().toLowerCase();
        if (clearBtn) {
            clearBtn.classList.toggle('visible', query.length > 0);
        }
        
        if (query.length === 0) {
            if (results) results.innerHTML = '';
            return;
        }
        
        var allSongs = getAllSongs();
        var filtered = [];
        for (var i = 0; i < allSongs.length; i++) {
            var song = allSongs[i];
            if (song.title.toLowerCase().indexOf(query) !== -1 ||
                (song.artist && song.artist.toLowerCase().indexOf(query) !== -1)) {
                filtered.push(song);
            }
        }
        
        if (!results) return;
        
        if (filtered.length === 0) {
            results.innerHTML = '<div class="no-results">🎵 Nenhuma música encontrada</div>';
            return;
        }
        
        var html = '';
        for (var j = 0; j < filtered.length; j++) {
            var song = filtered[j];
            html += '<div class="search-result-item" onclick="playSong(\'' + song.id + '\')">';
            html += '<div class="result-artwork">' + (song.cover || '🎵') + '</div>';
            html += '<div class="result-info">';
            html += '<div class="result-title">' + song.title + '</div>';
            html += '<div class="result-artist">' + (song.artist || 'Desconhecido') + '</div>';
            html += '</div>';
            html += '<button class="result-play" onclick="event.stopPropagation(); playSong(\'' + song.id + '\')">▶️</button>';
            html += '</div>';
        }
        
        results.innerHTML = html;
    });
    
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            input.value = '';
            input.dispatchEvent(new Event('input'));
            input.focus();
        });
    }
}

// ============================================================
// ===== CONFIGURAÇÃO DE EVENTOS =====
// ============================================================
function setupEvents() {
    setupNavigation();
    setupPlayer();
    setupSearch();
}

console.log('🎵 Pobrefy carregado!');