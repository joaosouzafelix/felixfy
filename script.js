// ============================================================
// ===== CARREGAMENTO DA API DO YOUTUBE =====
// ============================================================
function onYouTubeIframeAPIReady() {
    console.log('🎵 YouTube API carregada!');
    
    if (!state.player) {
        state.player = new YT.Player('player', {
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

function loadYouTubeAPI() {
    if (typeof YT !== 'undefined' && YT.Player) {
        onYouTubeIframeAPIReady();
        return;
    }
    
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
    setTimeout(() => {
        if (!state.playerReady && typeof YT === 'undefined') {
            console.warn('⚠️ YouTube API não carregou, tentando novamente...');
            loadYouTubeAPI();
        }
    }, 10000);
}

// ============================================================
// ===== DADOS DAS MÚSICAS =====
// ============================================================
const MUSIC_DATA = {
    'ana-castela': [
        { id: 'bN5XEh-V1to', title: 'Pipoco', artist: 'Ana Castela ft. Melody', cover: '🎶', lyrics: 'Pipoco, pipoco, pipoco...\nEla quer tchutchuca, quer tchutchuca...' },
        { id: 'GkCezdKkl1o', title: 'Nosso Quadro', artist: 'Ana Castela', cover: '🎤', lyrics: 'Nosso quadro na parede\nMe lembra do que a gente foi...' },
        { id: 'ZvO-dnRw_3Q', title: 'Solteiro Forçado', artist: 'Ana Castela', cover: '🤠', lyrics: 'Solteiro forçado\nNão queria estar assim...' },
        { id: 'nJvQElaVnZo', title: 'Boquinha', artist: 'Ana Castela', cover: '💋', lyrics: 'Boquinha, boquinha\nMe beija bem devagar...' },
        { id: 'jH4K1yZ4Jk0', title: 'Fazendeiro', artist: 'Ana Castela', cover: '🧢', lyrics: 'Fazendeiro, fazendeiro\nCuidando do meu gado...' },
        { id: 'dQw4w9WgXcQ', title: 'Never Gonna Give You Up', artist: 'Rick Astley', cover: '🎵', lyrics: 'Never gonna give you up\nNever gonna let you down...' },
        { id: 'kJQP7kiw5Fk', title: 'Despacito', artist: 'Luis Fonsi', cover: '🎶', lyrics: 'Despacito\nQuiero respirar tu cuello despacito...' },
        { id: 'fJ9rUzIMcZQ', title: 'Bohemian Rhapsody', artist: 'Queen', cover: '🎤', lyrics: 'Is this the real life?\nIs this just fantasy?...' },
        { id: 'u9Dg-g7t2l4', title: 'Believer', artist: 'Imagine Dragons', cover: '🎸', lyrics: 'First things first\nI\'ma say all the words inside my head...' },
        { id: 'YQHsXMglC9A', title: 'Hello', artist: 'Adele', cover: '🎧', lyrics: 'Hello from the other side\nI must have called a thousand times...' }
    ],
    'sertanejo': [
        { id: 'bN5XEh-V1to', title: 'Pipoco', artist: 'Ana Castela ft. Melody', cover: '🎶', genre: 'sertanejo' },
        { id: 'GkCezdKkl1o', title: 'Nosso Quadro', artist: 'Ana Castela', cover: '🎤', genre: 'sertanejo' },
        { id: 'ZvO-dnRw_3Q', title: 'Solteiro Forçado', artist: 'Ana Castela', cover: '🤠', genre: 'sertanejo' },
        { id: 'nJvQElaVnZo', title: 'Boquinha', artist: 'Ana Castela', cover: '💋', genre: 'sertanejo' },
        { id: 'jH4K1yZ4Jk0', title: 'Fazendeiro', artist: 'Ana Castela', cover: '🧢', genre: 'sertanejo' }
    ],
    'funk': [
        { id: 'bN5XEh-V1to', title: 'Pipoco (Funk)', artist: 'Ana Castela ft. Melody', cover: '🔥', genre: 'funk' },
        { id: 'kJQP7kiw5Fk', title: 'Despacito (Funk)', artist: 'Luis Fonsi', cover: '🎶', genre: 'funk' }
    ]
};

const DEFAULT_PLAYLISTS = {
    'ana-castela': {
        id: 'ana-castela',
        name: 'Ana Castela',
        description: 'Todas as músicas da Ana Castela',
        cover: '🎤',
        songs: MUSIC_DATA['ana-castela'].map(s => s.id)
    },
    'sertanejo': {
        id: 'sertanejo',
        name: 'Sertanejo',
        description: 'O melhor do sertanejo',
        cover: '🎸',
        songs: MUSIC_DATA['sertanejo'].map(s => s.id)
    },
    'funk': {
        id: 'funk',
        name: 'Funk',
        description: 'Os melhores funks',
        cover: '🎧',
        songs: MUSIC_DATA['funk'].map(s => s.id)
    }
};

// ============================================================
// ===== ESTADO DA APLICAÇÃO =====
// ============================================================
let state = {
    currentUser: null,
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
    console.log('🎵 Inicializando Pobrefy...');
    
    loadFromStorage();
    
    if (state.currentUser) {
        showApp();
        updateGreeting();
        renderHome();
        renderLibrary();
        renderSidebar();
    } else {
        showLogin();
    }
    
    setupEvents();
    loadYouTubeAPI();
});

// ============================================================
// ===== LOCAL STORAGE =====
// ============================================================
function loadFromStorage() {
    try {
        const savedUser = localStorage.getItem('pobrefy_user');
        if (savedUser) {
            state.currentUser = JSON.parse(savedUser);
        }
        
        const savedPlaylists = localStorage.getItem('pobrefy_playlists');
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
        if (state.currentUser) {
            localStorage.setItem('pobrefy_user', JSON.stringify(state.currentUser));
        }
        localStorage.setItem('pobrefy_playlists', JSON.stringify(state.playlists));
    } catch (e) {
        console.error('Erro ao salvar dados:', e);
    }
}

// ============================================================
// ===== LOGIN / CADASTRO =====
// ============================================================
function showLogin() {
    document.getElementById('loginScreen').style.display = 'flex';
    document.getElementById('app').style.display = 'none';
}

function showApp() {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('app').style.display = 'flex';
    document.getElementById('userNameDisplay').textContent = state.currentUser?.name || 'Usuário';
}

function setupLoginEvents() {
    document.getElementById('showRegister').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.login-box').style.display = 'none';
        document.querySelector('.register-box').style.display = 'block';
    });

    document.getElementById('showLogin').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.login-box').style.display = 'block';
        document.querySelector('.register-box').style.display = 'none';
    });

    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        const users = JSON.parse(localStorage.getItem('pobrefy_users') || '[]');
        const user = users.find(function(u) { return u.email === email && u.password === password; });
        
        if (user) {
            state.currentUser = { name: user.name, email: user.email };
            saveToStorage();
            showApp();
            updateGreeting();
            renderHome();
            renderLibrary();
            renderSidebar();
        } else {
            alert('E-mail ou senha incorretos!');
        }
    });

    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirm = document.getElementById('registerConfirmPassword').value;
        
        if (password !== confirm) {
            alert('As senhas não coincidem!');
            return;
        }
        
        const users = JSON.parse(localStorage.getItem('pobrefy_users') || '[]');
        
        if (users.find(function(u) { return u.email === email; })) {
            alert('Este e-mail já está cadastrado!');
            return;
        }
        
        users.push({ name: name, email: email, password: password });
        localStorage.setItem('pobrefy_users', JSON.stringify(users));
        
        state.currentUser = { name: name, email: email };
        saveToStorage();
        showApp();
        updateGreeting();
        renderHome();
        renderLibrary();
        renderSidebar();
    });

    document.getElementById('logoutBtn').addEventListener('click', function() {
        state.currentUser = null;
        localStorage.removeItem('pobrefy_user');
        showLogin();
        document.querySelector('.login-box').style.display = 'block';
        document.querySelector('.register-box').style.display = 'none';
    });

    document.getElementById('googleLoginBtn').addEventListener('click', function() {
        alert('⚠️ Configuração do Google OAuth necessária!\n\nPara ativar o login com Google, você precisa:\n1. Criar um projeto no Google Cloud Console\n2. Habilitar a API Google Identity Services\n3. Configurar o Client ID no código');
    });
}

// ============================================================
// ===== SAUDAÇÃO =====
// ============================================================
function updateGreeting() {
    const hour = new Date().getHours();
    let greeting = '';
    
    if (hour >= 5 && hour < 12) {
        greeting = 'Bom dia';
    } else if (hour >= 12 && hour < 18) {
        greeting = 'Boa tarde';
    } else {
        greeting = 'Boa noite';
    }
    
    const name = state.currentUser?.name || '';
    const message = document.getElementById('greetingMessage');
    message.textContent = name ? greeting + ', ' + name + '!' : greeting + '!';
}

// ============================================================
// ===== NAVEGAÇÃO =====
// ============================================================
function setupNavigation() {
    document.querySelectorAll('nav ul li').forEach(function(item) {
        item.addEventListener('click', function() {
            const page = this.dataset.page;
            
            document.querySelectorAll('nav ul li').forEach(function(li) {
                li.classList.remove('active');
            });
            this.classList.add('active');
            
            document.querySelectorAll('.page-content').forEach(function(p) {
                p.classList.remove('active');
            });
            const target = document.getElementById('page-' + page);
            if (target) target.classList.add('active');
        });
    });
    
    document.querySelectorAll('#sidebarPlaylists li[data-playlist]').forEach(function(item) {
        item.addEventListener('click', function() {
            const playlistId = this.dataset.playlist;
            openPlaylist(playlistId);
        });
    });
    
    document.querySelector('.create-playlist-btn').addEventListener('click', function() {
        const name = prompt('Nome da nova playlist:');
        if (name && name.trim()) {
            createPlaylist(name.trim());
        }
    });
    
    document.getElementById('backFromPlaylist').addEventListener('click', function() {
        document.getElementById('page-playlist').style.display = 'none';
        document.getElementById('page-home').classList.add('active');
    });
}

// ============================================================
// ===== PLAYLISTS =====
// ============================================================
function createPlaylist(name) {
    const id = 'playlist_' + Date.now();
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
    }
}

function openPlaylist(id) {
    const playlist = state.playlists[id];
    if (!playlist) return;
    
    state.currentPlaylist = id;
    
    const detail = document.getElementById('playlistDetail');
    const songs = playlist.songs.map(function(songId) {
        return getSongById(songId);
    }).filter(function(s) { return s; });
    
    var html = '';
    html += '<div class="playlist-detail-header">';
    html += '    <div class="detail-artwork">' + (playlist.cover || '🎵') + '</div>';
    html += '    <div class="detail-info">';
    html += '        <span class="detail-type">Playlist</span>';
    html += '        <h2 class="detail-name">' + playlist.name + '</h2>';
    html += '        <p class="detail-description">' + (playlist.description || '') + '</p>';
    html += '        <p class="detail-description">' + songs.length + ' músicas</p>';
    if (playlist.isCustom) {
        html += '        <button class="detail-delete" onclick="deletePlaylist(\'' + id + '\')">🗑️ Excluir</button>';
    }
    html += '        <button class="detail-play-all" onclick="playPlaylist(\'' + id + '\')">▶️ Reproduzir todas</button>';
    html += '    </div>';
    html += '</div>';
    html += '<div class="playlist-tracks">';
    
    songs.forEach(function(song) {
        html += '<div class="playlist-track" onclick="playSong(\'' + song.id + '\', \'' + id + '\')">';
        html += '    <div class="track-artwork">' + (song.cover || '🎵') + '</div>';
        html += '    <div class="track-info">';
        html += '        <div class="track-title">' + song.title + '</div>';
        html += '        <div class="track-artist">' + (song.artist || 'Desconhecido') + '</div>';
        html += '    </div>';
        html += '    <button class="track-play" onclick="event.stopPropagation(); playSong(\'' + song.id + '\', \'' + id + '\')">▶️</button>';
        html += '</div>';
    });
    
    html += '</div>';
    detail.innerHTML = html;
    
    document.querySelectorAll('.page-content').forEach(function(p) {
        p.classList.remove('active');
    });
    document.getElementById('page-playlist').style.display = 'block';
}

function playPlaylist(id) {
    const playlist = state.playlists[id];
    if (!playlist || !playlist.songs.length) return;
    
    state.queue = playlist.songs.map(function(songId) {
        return getSongById(songId);
    }).filter(function(s) { return s; });
    state.currentSongIndex = 0;
    
    if (state.queue.length > 0) {
        playSong(state.queue[0].id, id);
    }
}

function getSongById(id) {
    for (var playlist in MUSIC_DATA) {
        for (var i = 0; i < MUSIC_DATA[playlist].length; i++) {
            if (MUSIC_DATA[playlist][i].id === id) {
                return MUSIC_DATA[playlist][i];
            }
        }
    }
    return null;
}

function getAllSongs() {
    var all = [];
    for (var playlist in MUSIC_DATA) {
        for (var i = 0; i < MUSIC_DATA[playlist].length; i++) {
            all.push(MUSIC_DATA[playlist][i]);
        }
    }
    return all;
}

// ============================================================
// ===== PLAYER =====
// ============================================================
function setupPlayer() {
    document.getElementById('playBtn').addEventListener('click', togglePlay);
    document.getElementById('prevBtn').addEventListener('click', prevSong);
    document.getElementById('nextBtn').addEventListener('click', nextSong);
    
    document.querySelector('.progress-bar').addEventListener('click', function(e) {
        if (!state.player || !state.playerReady) return;
        var rect = this.getBoundingClientRect();
        var percent = (e.clientX - rect.left) / rect.width;
        var duration = state.player.getDuration();
        if (duration > 0) {
            state.player.seekTo(percent * duration, true);
        }
    });
    
    document.querySelector('.volume-bar').addEventListener('click', function(e) {
        var rect = this.getBoundingClientRect();
        var percent = Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100));
        document.getElementById('volumeProgress').style.width = percent + '%';
        if (state.player && state.playerReady) {
            state.player.setVolume(percent);
        }
    });
    
    document.getElementById('toggleLyrics').addEventListener('click', toggleLyrics);
    document.getElementById('closeLyrics').addEventListener('click', function() {
        document.getElementById('lyricsPanel').style.display = 'none';
    });
}

function playSong(songId, playlistId) {
    console.log('▶️ Tocando música:', songId);
    
    var song = getSongById(songId);
    if (!song) {
        console.error('❌ Música não encontrada:', songId);
        return;
    }
    
    state.currentSongId = songId;
    state.currentPlaylist = playlistId || state.currentPlaylist;
    
    document.getElementById('playerSong').textContent = song.title;
    document.getElementById('playerArtist').textContent = song.artist || 'Desconhecido';
    document.getElementById('playerArtwork').innerHTML = song.cover || '🎵';
    
    if (state.player && state.playerReady) {
        try {
            state.player.loadVideoById(songId);
            state.player.playVideo();
            state.isPlaying = true;
            document.getElementById('playBtn').textContent = '⏸';
            document.getElementById('playBtn').title = 'Pausar';
            console.log('✅ Música carregada:', song.title);
        } catch (error) {
            console.error('❌ Erro ao tocar música:', error);
        }
    } else {
        console.warn('⏳ Player não está pronto, tentando novamente em 2 segundos...');
        setTimeout(function() {
            if (state.player && state.playerReady) {
                playSong(songId, playlistId);
            }
        }, 2000);
    }
    
    updateLyrics(song);
}

function togglePlay() {
    if (!state.player || !state.playerReady) {
        var firstSong = getAllSongs()[0];
        if (firstSong) {
            playSong(firstSong.id);
        } else {
            alert('Nenhuma música disponível!');
        }
        return;
    }
    
    try {
        if (state.isPlaying) {
            state.player.pauseVideo();
            state.isPlaying = false;
            document.getElementById('playBtn').textContent = '▶️';
            document.getElementById('playBtn').title = 'Tocar';
        } else {
            state.player.playVideo();
            state.isPlaying = true;
            document.getElementById('playBtn').textContent = '⏸';
            document.getElementById('playBtn').title = 'Pausar';
        }
    } catch (error) {
        console.error('❌ Erro ao controlar player:', error);
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
        } else if (all.length > 0) {
            playSong(all[0].id);
        }
        return;
    }
    
    var playlist = state.playlists[state.currentPlaylist];
    if (!playlist) return;
    
    var currentIndex = -1;
    for (var i = 0; i < playlist.songs.length; i++) {
        if (playlist.songs[i] === state.currentSongId) {
            currentIndex = i;
            break;
        }
    }
    if (currentIndex < playlist.songs.length - 1) {
        playSong(playlist.songs[currentIndex + 1], state.currentPlaylist);
    } else if (playlist.songs.length > 0) {
        playSong(playlist.songs[0], state.currentPlaylist);
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
        } else if (all.length > 0) {
            playSong(all[all.length - 1].id);
        }
        return;
    }
    
    var playlist = state.playlists[state.currentPlaylist];
    if (!playlist) return;
    
    var currentIndex = -1;
    for (var i = 0; i < playlist.songs.length; i++) {
        if (playlist.songs[i] === state.currentSongId) {
            currentIndex = i;
            break;
        }
    }
    if (currentIndex > 0) {
        playSong(playlist.songs[currentIndex - 1], state.currentPlaylist);
    } else if (playlist.songs.length > 0) {
        playSong(playlist.songs[playlist.songs.length - 1], state.currentPlaylist);
    }
}

// ============================================================
// ===== LETRAS =====
// ============================================================
function toggleLyrics() {
    var panel = document.getElementById('lyricsPanel');
    panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
}

function updateLyrics(song) {
    var title = document.getElementById('lyricsTitle');
    var content = document.getElementById('lyricsContent');
    
    title.textContent = song.title + ' - ' + (song.artist || 'Desconhecido');
    
    if (song.lyrics) {
        content.innerHTML = '<pre>' + song.lyrics + '</pre>';
    } else {
        content.innerHTML = '<p class="lyrics-placeholder">Letra não disponível para esta música.</p>';
    }
}

// ============================================================
// ===== YOUTUBE PLAYER =====
// ============================================================
function onPlayerReady(event) {
    state.playerReady = true;
    console.log('✅ Player pronto!');
    
    if (state.currentSongId) {
        var song = getSongById(state.currentSongId);
        if (song) {
            try {
                state.player.loadVideoById(state.currentSongId);
                state.player.playVideo();
                state.isPlaying = true;
                document.getElementById('playBtn').textContent = '⏸';
                document.getElementById('playBtn').title = 'Pausar';
                console.log('✅ Música carregada após player ready:', song.title);
            } catch (error) {
                console.error('❌ Erro ao carregar música após ready:', error);
            }
        }
    }
}

function onPlayerStateChange(event) {
    console.log('📺 Estado do player:', event.data);
    
    if (event.data === YT.PlayerState.PLAYING) {
        state.isPlaying = true;
        document.getElementById('playBtn').textContent = '⏸';
        document.getElementById('playBtn').title = 'Pausar';
        updateProgress();
    } else if (event.data === YT.PlayerState.PAUSED) {
        state.isPlaying = false;
        document.getElementById('playBtn').textContent = '▶️';
        document.getElementById('playBtn').title = 'Tocar';
    } else if (event.data === YT.PlayerState.ENDED) {
        state.isPlaying = false;
        document.getElementById('playBtn').textContent = '▶️';
        document.getElementById('playBtn').title = 'Tocar';
        setTimeout(function() {
            console.log('⏭️ Tocando próxima música...');
            nextSong();
        }, 1500);
    } else if (event.data === YT.PlayerState.UNSTARTED) {
        console.log('⏳ Vídeo não iniciado');
    } else if (event.data === YT.PlayerState.BUFFERING) {
        console.log('⏳ Carregando...');
    }
}

function onPlayerError(event) {
    console.error('❌ Erro no player:', event.data);
    
    if (state.currentPlaylist) {
        console.log('⏭️ Tentando tocar próxima música...');
        setTimeout(nextSong, 2000);
    }
}

function updateProgress() {
    if (state.player && state.playerReady && state.player.getCurrentTime) {
        try {
            var duration = state.player.getDuration();
            var currentTime = state.player.getCurrentTime();
            
            if (duration > 0 && !isNaN(duration)) {
                var progress = (currentTime / duration) * 100;
                document.getElementById('progressFill').style.width = progress + '%';
                document.getElementById('currentTime').textContent = formatTime(currentTime);
                document.getElementById('totalTime').textContent = formatTime(duration);
            }
        } catch (error) {}
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
    var playlists = [
        { id: 'ana-castela', name: 'Ana Castela', cover: '🎤', description: MUSIC_DATA['ana-castela'].length + ' músicas' },
        { id: 'sertanejo', name: 'Sertanejo', cover: '🎸', description: MUSIC_DATA['sertanejo'].length + ' músicas' },
        { id: 'funk', name: 'Funk', cover: '🎧', description: MUSIC_DATA['funk'].length + ' músicas' }
    ];
    
    for (var id in state.playlists) {
        var playlist = state.playlists[id];
        if (playlist.isCustom && !playlists.find(function(p) { return p.id === id; })) {
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
    for (var i = 0; i < playlists.length; i++) {
        var p = playlists[i];
        html += '<div class="playlist-card" onclick="openPlaylist(\'' + p.id + '\')">';
        html += '    <div class="card-artwork">' + (p.cover || '🎵') + '</div>';
        html += '    <h3>' + p.name + '</h3>';
        html += '    <p>' + (p.description || '') + '</p>';
        if (p.isCustom) {
            html += '    <span style="font-size:11px;color:#6a6a6a;">📝 Personalizada</span>';
        }
        html += '    <button class="play-btn-card" onclick="event.stopPropagation(); playPlaylist(\'' + p.id + '\')">▶️ Reproduzir</button>';
        html += '</div>';
    }
    container.innerHTML = html;
}

function renderLibrary() {
    var container = document.getElementById('libraryPlaylists');
    var playlists = [];
    for (var id in state.playlists) {
        var playlist = state.playlists[id];
        playlists.push({
            id: id,
            name: playlist.name,
            cover: playlist.cover || '🎵',
            songs: playlist.songs || [],
            isCustom: playlist.isCustom || false
        });
    }
    
    var html = '';
    for (var i = 0; i < playlists.length; i++) {
        var p = playlists[i];
        html += '<div class="playlist-card" onclick="openPlaylist(\'' + p.id + '\')">';
        html += '    <div class="card-artwork">' + p.cover + '</div>';
        html += '    <h3>' + p.name + '</h3>';
        html += '    <p>' + (p.songs.length || 0) + ' músicas</p>';
        if (p.isCustom) {
            html += '    <span style="font-size:11px;color:#6a6a6a;">📝 Personalizada</span>';
        }
        html += '</div>';
    }
    container.innerHTML = html;
}

function renderSidebar() {
    var container = document.getElementById('sidebarPlaylists');
    var playlists = [];
    for (var id in state.playlists) {
        var playlist = state.playlists[id];
        playlists.push({
            id: id,
            name: playlist.name,
            isCustom: playlist.isCustom || false
        });
    }
    
    var html = '';
    html += '<li data-playlist="ana-castela">🎤 Ana Castela</li>';
    html += '<li data-playlist="sertanejo">🎸 Sertanejo</li>';
    html += '<li data-playlist="funk">🎧 Funk</li>';
    
    for (var i = 0; i < playlists.length; i++) {
        var p = playlists[i];
        if (p.isCustom) {
            html += '<li data-playlist="' + p.id + '">📋 ' + p.name + '</li>';
        }
    }
    
    html += '<li class="create-playlist-btn">➕ Criar playlist</li>';
    container.innerHTML = html;
    
    container.querySelectorAll('li[data-playlist]').forEach(function(item) {
        item.addEventListener('click', function() {
            openPlaylist(this.dataset.playlist);
        });
    });
    
    container.querySelector('.create-playlist-btn').addEventListener('click', function() {
        var name = prompt('Nome da nova playlist:');
        if (name && name.trim()) {
            createPlaylist(name.trim());
        }
    });
}

// ============================================================
// ===== PESQUISA =====
// ============================================================
function setupSearch() {
    var input = document.getElementById('searchInput');
    var clearBtn = document.getElementById('clearSearch');
    var results = document.getElementById('searchResults');
    
    input.addEventListener('input', function() {
        var query = this.value.trim().toLowerCase();
        clearBtn.classList.toggle('visible', query.length > 0);
        
        if (query.length === 0) {
            results.innerHTML = '';
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
        
        if (filtered.length === 0) {
            results.innerHTML = '<div class="no-results">🎵 Nenhuma música encontrada</div>';
            return;
        }
        
        var html = '';
        for (var i = 0; i < filtered.length; i++) {
            var song = filtered[i];
            html += '<div class="search-result-item" onclick="playSong(\'' + song.id + '\')">';
            html += '    <div class="result-artwork">' + (song.cover || '🎵') + '</div>';
            html += '    <div class="result-info">';
            html += '        <div class="result-title">' + song.title + '</div>';
            html += '        <div class="result-artist">' + (song.artist || 'Desconhecido') + '</div>';
            html += '    </div>';
            html += '    <button class="result-play" onclick="event.stopPropagation(); playSong(\'' + song.id + '\')">▶️</button>';
            html += '</div>';
        }
        results.innerHTML = html;
    });
    
    clearBtn.addEventListener('click', function() {
        input.value = '';
        input.dispatchEvent(new Event('input'));
        input.focus();
    });
}

// ============================================================
// ===== CONFIGURAÇÃO DE EVENTOS =====
// ============================================================
function setupEvents() {
    setupLoginEvents();
    setupNavigation();
    setupPlayer();
    setupSearch();
}

console.log('🎵 Pobrefy carregado!');
console.log('📌 As músicas agora estão funcionando com IDs reais do YouTube!');