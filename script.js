// ============================================================
// ===== DADOS DAS MÚSICAS =====
// ============================================================
const MUSIC_DATA = {
    'ana-castela': [
        { id: 'BngZJ-yORWw', title: 'Ponto Fraco', artist: 'Ana Castela', cover: '🎶', lyrics: 'Letra de Ponto Fraco - Ana Castela\n\nPonto fraco, você é meu ponto fraco...' },
        { id: 'qTVbdTffP5k', title: 'É Que Eu Não Te Esqueci', artist: 'Ana Castela', cover: '🎤', lyrics: 'É que eu não te esqueci\nMesmo depois de tudo que passou...' },
        { id: 'F3kqSn_BP50', title: 'Eu Não Vou Mudar', artist: 'Ana Castela', cover: '🎸', lyrics: 'Eu não vou mudar por você\nSou do jeito que sou...' },
        { id: 'tX7-EVaP_RY', title: 'Hoje Tem Rodeio', artist: 'Ana Castela', cover: '🤠', lyrics: 'Hoje tem rodeio\nVai ter festa, vai ter som...' },
        { id: '_fqH6zYJ3DI', title: 'Vou Vender o Meu Chapéu', artist: 'Ana Castela', cover: '🧢', lyrics: 'Vou vender o meu chapéu\nPra comprar um violão...' },
        { id: 'fIDdKiCL1lA', title: 'Não Depende Só De Mim', artist: 'Ana Castela', cover: '🎵', lyrics: 'Não depende só de mim\nPra dar certo tem que ser nós dois...' },
        { id: '9O4RM1VNLuM', title: 'É Bom Demais', artist: 'Ana Castela', cover: '🎧', lyrics: 'É bom demais te amar\nÉ bom demais sentir você...' },
        { id: 'nmlSLqOvPHQ', title: 'Meu Erro', artist: 'Ana Castela', cover: '💔', lyrics: 'Meu erro foi ter te amado demais...' },
        { id: 'kTSAECb8iIc', title: 'Rodeio Acabou', artist: 'Ana Castela', cover: '🐴', lyrics: 'O rodeio acabou\nMas a saudade ficou...' },
        { id: 'CKNjiHKiNvM', title: 'Agora Ou Nunca', artist: 'Ana Castela ft. Pedro Sampaio', cover: '🔥', lyrics: 'Agora ou nunca\nVamos viver esse amor...' },
        { id: 'qlPKAzw6-dk', title: 'Simplesmente Acontece', artist: 'Péricles ft. Ana Castela', cover: '💕', lyrics: 'Simplesmente acontece\nO amor quando menos se espera...' },
        { id: 'Jpv9iR09sjc', title: 'Mamãe, Não Deixe Seu Filho Ser um Cowboy', artist: 'Ana Castela', cover: '👩‍👦', lyrics: 'Mamãe, não deixe seu filho ser um cowboy...' },
        { id: '4OK23Y-4xsE', title: 'Franguinho na Panela', artist: 'Ana Castela ft. Lourenço & Lourival', cover: '🍗', lyrics: 'Franguinho na panela\nPra fazer um bom jantar...' },
        { id: 'CnY6xryxYDw', title: 'Hoje eu Lembrei de Você', artist: 'Ana Castela', cover: '😢', lyrics: 'Hoje eu lembrei de você\nE o coração apertou...' },
        { id: 'HxsxGqM3Sc0', title: 'Rédeas do Possante', artist: 'Ana Castela ft. Sula Miranda', cover: '🐎', lyrics: 'Rédeas do possante\nPra conduzir meu coração...' },
        { id: 'Kw6X7Z1Qy4k', title: 'Romaria', artist: 'Ana Castela ft. Sérgio Reis', cover: '⛪', lyrics: 'Romaria, fé e devoção...' },
        { id: 'OZSpfBEdz8k', title: 'Vá com Deus', artist: 'Ana Castela ft. Roberta Miranda', cover: '🙏', lyrics: 'Vá com Deus, meu bem\nQue Ele te guarde...' },
        { id: 'aPqYwUPyZN0', title: 'Você Vai Ver', artist: 'Ana Castela ft. Zezé Di Camargo & Luciano', cover: '🎶', lyrics: 'Você vai ver\nQue o amor sempre vence...' },
        { id: 'cZHlSHFeq7E', title: 'Se a casa Cair', artist: 'Ana Castela ft. Teodoro e Sampaio', cover: '🏠', lyrics: 'Se a casa cair\nA gente levanta de novo...' },
        { id: 'dNixkzO0jgI', title: 'Saudade é mato', artist: 'Ana Castela', cover: '🌿', lyrics: 'Saudade é mato\nQue cresce no peito da gente...' },
        { id: 'jGbldS066tA', title: 'Barulho da Camioneta', artist: 'Ana Castela', cover: '🚗', lyrics: 'Barulho da camioneta\nAnunciando a chegada...' }
    ],
    'sertanejo': [
        { id: 'BngZJ-yORWw', title: 'Ponto Fraco', artist: 'Ana Castela', cover: '🎶', genre: 'sertanejo' },
        { id: 'qTVbdTffP5k', title: 'É Que Eu Não Te Esqueci', artist: 'Ana Castela', cover: '🎤', genre: 'sertanejo' },
        { id: 'F3kqSn_BP50', title: 'Eu Não Vou Mudar', artist: 'Ana Castela', cover: '🎸', genre: 'sertanejo' },
        { id: 'tX7-EVaP_RY', title: 'Hoje Tem Rodeio', artist: 'Ana Castela', cover: '🤠', genre: 'sertanejo' },
        { id: '_fqH6zYJ3DI', title: 'Vou Vender o Meu Chapéu', artist: 'Ana Castela', cover: '🧢', genre: 'sertanejo' },
        { id: 'nmlSLqOvPHQ', title: 'Meu Erro', artist: 'Ana Castela', cover: '💔', genre: 'sertanejo' },
        { id: 'kTSAECb8iIc', title: 'Rodeio Acabou', artist: 'Ana Castela', cover: '🐴', genre: 'sertanejo' },
    ],
    'funk': [
        { id: 'CKNjiHKiNvM', title: 'Agora Ou Nunca', artist: 'Ana Castela ft. Pedro Sampaio', cover: '🔥', genre: 'funk' },
        { id: 'Jpv9iR09sjc', title: 'Mamãe, Não Deixe Seu Filho Ser um Cowboy', artist: 'Ana Castela', cover: '👩‍👦', genre: 'funk' },
    ]
};

// Playlists padrão
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
    queue: [],
    resetEmail: null,
    resetCode: null
};

// ============================================================
// ===== INICIALIZAÇÃO =====
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    // Carregar dados do localStorage
    loadFromStorage();
    
    // Verificar se usuário está logado
    if (state.currentUser) {
        showApp();
        updateGreeting();
        renderHome();
        renderLibrary();
        renderSidebar();
    } else {
        showLogin();
    }
    
    // Configurar eventos
    setupEvents();
    
    // Inicializar player do YouTube
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
            state.playlists = { ...DEFAULT_PLAYLISTS };
        }
    } catch (e) {
        console.error('Erro ao carregar dados:', e);
        state.playlists = { ...DEFAULT_PLAYLISTS };
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
    // Mostrar cadastro
    document.getElementById('showRegister').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.login-box').style.display = 'none';
        document.querySelector('.register-box').style.display = 'block';
        document.getElementById('resetPasswordBox').style.display = 'none';
    });

    // Mostrar login
    document.getElementById('showLogin').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.login-box').style.display = 'block';
        document.querySelector('.register-box').style.display = 'none';
        document.getElementById('resetPasswordBox').style.display = 'none';
    });

    // Mostrar reset de senha
    document.getElementById('showForgotPassword').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.login-box').style.display = 'none';
        document.querySelector('.register-box').style.display = 'none';
        document.getElementById('resetPasswordBox').style.display = 'block';
    });

    // Voltar da tela de reset
    document.getElementById('backToLogin').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.login-box').style.display = 'block';
        document.querySelector('.register-box').style.display = 'none';
        document.getElementById('resetPasswordBox').style.display = 'none';
        document.getElementById('resetStep1').style.display = 'block';
        document.getElementById('resetStep2').style.display = 'none';
    });

    // Solicitar código de reset
    document.getElementById('requestResetCode').addEventListener('click', (e) => {
        e.preventDefault();
        const email = document.getElementById('resetEmail').value.trim();
        
        if (!email) {
            alert('Por favor, digite seu e-mail.');
            return;
        }
        
        // Verificar se o e-mail existe
        const users = JSON.parse(localStorage.getItem('pobrefy_users') || '[]');
        const user = users.find(u => u.email === email);
        
        if (!user) {
            alert('E-mail não encontrado. Verifique se você digitou corretamente.');
            return;
        }
        
        // Gerar código de 6 dígitos
        const code = Math.floor(100000 + Math.random() * 900000).toString();
        state.resetEmail = email;
        state.resetCode = code;
        
        // Simular envio de e-mail (na prática, você usaria um serviço como EmailJS, SendGrid, etc.)
        console.log(`Código de verificação para ${email}: ${code}`);
        
        // Mostrar mensagem com o código (em produção, isso iria para o e-mail)
        alert(`🔐 Código de verificação enviado para ${email}\n\nCódigo: ${code}\n\n(Em produção, este código seria enviado por e-mail)`);
        
        // Avançar para o passo 2
        document.getElementById('resetStep1').style.display = 'none';
        document.getElementById('resetStep2').style.display = 'block';
        document.getElementById('resetEmailDisplay').textContent = email;
    });

    // Verificar código e resetar senha
    document.getElementById('resetPasswordForm').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const code = document.getElementById('resetCodeInput').value.trim();
        const newPassword = document.getElementById('resetNewPassword').value;
        const confirmPassword = document.getElementById('resetConfirmPassword').value;
        
        // Verificar código
        if (code !== state.resetCode) {
            alert('Código inválido. Tente novamente.');
            return;
        }
        
        // Verificar senha
        if (newPassword.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
        }
        
        if (newPassword !== confirmPassword) {
            alert('As senhas não coincidem.');
            return;
        }
        
        // Atualizar senha no localStorage
        const users = JSON.parse(localStorage.getItem('pobrefy_users') || '[]');
        const userIndex = users.findIndex(u => u.email === state.resetEmail);
        
        if (userIndex !== -1) {
            users[userIndex].password = newPassword;
            localStorage.setItem('pobrefy_users', JSON.stringify(users));
            
            alert('✅ Senha alterada com sucesso! Faça login com sua nova senha.');
            
            // Voltar para o login
            document.querySelector('.login-box').style.display = 'block';
            document.querySelector('.register-box').style.display = 'none';
            document.getElementById('resetPasswordBox').style.display = 'none';
            document.getElementById('resetStep1').style.display = 'block';
            document.getElementById('resetStep2').style.display = 'none';
            
            // Limpar campos
            document.getElementById('resetEmail').value = '';
            document.getElementById('resetCodeInput').value = '';
            document.getElementById('resetNewPassword').value = '';
            document.getElementById('resetConfirmPassword').value = '';
            state.resetEmail = null;
            state.resetCode = null;
        }
    });

    // Login
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        // Verificar se o usuário existe
        const users = JSON.parse(localStorage.getItem('pobrefy_users') || '[]');
        const user = users.find(u => u.email === email && u.password === password);
        
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

    // Cadastro
    document.getElementById('registerForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirm = document.getElementById('registerConfirmPassword').value;
        
        if (password !== confirm) {
            alert('As senhas não coincidem!');
            return;
        }
        
        if (password.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
        }
        
        const users = JSON.parse(localStorage.getItem('pobrefy_users') || '[]');
        
        if (users.find(u => u.email === email)) {
            alert('Este e-mail já está cadastrado!');
            return;
        }
        
        users.push({ name, email, password });
        localStorage.setItem('pobrefy_users', JSON.stringify(users));
        
        state.currentUser = { name, email };
        saveToStorage();
        showApp();
        updateGreeting();
        renderHome();
        renderLibrary();
        renderSidebar();
    });

    // Logout
    document.getElementById('logoutBtn').addEventListener('click', () => {
        state.currentUser = null;
        localStorage.removeItem('pobrefy_user');
        showLogin();
        document.querySelector('.login-box').style.display = 'block';
        document.querySelector('.register-box').style.display = 'none';
        document.getElementById('resetPasswordBox').style.display = 'none';
    });

    // Google Login (preparado)
    document.getElementById('googleLoginBtn').addEventListener('click', () => {
        alert('⚠️ Configuração do Google OAuth necessária!\n\n' +
              'Para ativar o login com Google, você precisa:\n' +
              '1. Criar um projeto no Google Cloud Console\n' +
              '2. Habilitar a API Google Identity Services\n' +
              '3. Configurar o Client ID no código\n\n' +
              'Arquivo: script.js\n' +
              'Linha: const GOOGLE_CLIENT_ID = "seu-client-id-aqui";');
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
    message.textContent = name ? `${greeting}, ${name}!` : `${greeting}!`;
}

// ============================================================
// ===== NAVEGAÇÃO =====
// ============================================================
function setupNavigation() {
    document.querySelectorAll('nav ul li').forEach(item => {
        item.addEventListener('click', () => {
            const page = item.dataset.page;
            
            // Atualizar menu
            document.querySelectorAll('nav ul li').forEach(li => li.classList.remove('active'));
            item.classList.add('active');
            
            // Mostrar página
            document.querySelectorAll('.page-content').forEach(p => p.classList.remove('active'));
            const target = document.getElementById(`page-${page}`);
            if (target) target.classList.add('active');
        });
    });
    
    // Playlists na sidebar
    document.querySelectorAll('#sidebarPlaylists li[data-playlist]').forEach(item => {
        item.addEventListener('click', () => {
            const playlistId = item.dataset.playlist;
            openPlaylist(playlistId);
        });
    });
    
    // Criar playlist
    document.querySelector('.create-playlist-btn').addEventListener('click', () => {
        const name = prompt('Nome da nova playlist:');
        if (name && name.trim()) {
            createPlaylist(name.trim());
        }
    });
    
    // Voltar da playlist
    document.getElementById('backFromPlaylist').addEventListener('click', () => {
        document.getElementById('page-playlist').style.display = 'none';
        document.getElementById('page-home').classList.add('active');
        document.querySelector('nav ul li[data-page="home"]').classList.add('active');
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
        // Fechar detalhe se estiver aberto
        document.getElementById('page-playlist').style.display = 'none';
        document.getElementById('page-home').classList.add('active');
    }
}

function openPlaylist(id) {
    const playlist = state.playlists[id];
    if (!playlist) return;
    
    state.currentPlaylist = id;
    
    const detail = document.getElementById('playlistDetail');
    const songs = playlist.songs.map(songId => getSongById(songId)).filter(s => s);
    
    detail.innerHTML = `
        <div class="playlist-detail-header">
            <div class="detail-artwork">${playlist.cover || '🎵'}</div>
            <div class="detail-info">
                <span class="detail-type">Playlist</span>
                <h2 class="detail-name">${playlist.name}</h2>
                <p class="detail-description">${playlist.description || ''}</p>
                <p class="detail-description">${songs.length} músicas</p>
                ${playlist.isCustom ? `<button class="detail-delete" onclick="deletePlaylist('${id}')">🗑️ Excluir</button>` : ''}
                ${songs.length > 0 ? `<button class="detail-play-all" onclick="playPlaylist('${id}')">▶️ Reproduzir todas</button>` : '<p style="color: var(--text-secondary);">Adicione músicas a esta playlist</p>'}
            </div>
        </div>
        <div class="playlist-tracks">
            ${songs.map((song, index) => `
                <div class="playlist-track" onclick="playSong('${song.id}', '${id}')">
                    <div class="track-artwork">${song.cover || '🎵'}</div>
                    <div class="track-info">
                        <div class="track-title">${song.title}</div>
                        <div class="track-artist">${song.artist || 'Desconhecido'}</div>
                    </div>
                    <button class="track-play" onclick="event.stopPropagation(); playSong('${song.id}', '${id}')">▶️</button>
                </div>
            `).join('')}
        </div>
    `;
    
    document.querySelectorAll('.page-content').forEach(p => p.classList.remove('active'));
    document.getElementById('page-playlist').style.display = 'block';
}

function playPlaylist(id) {
    const playlist = state.playlists[id];
    if (!playlist || !playlist.songs.length) {
        alert('Esta playlist não tem músicas!');
        return;
    }
    
    state.queue = playlist.songs.map(songId => getSongById(songId)).filter(s => s);
    state.currentSongIndex = 0;
    
    if (state.queue.length > 0) {
        playSong(state.queue[0].id, id);
    }
}

function getSongById(id) {
    for (const playlist of Object.values(MUSIC_DATA)) {
        for (const song of playlist) {
            if (song.id === id) return song;
        }
    }
    return null;
}

function getAllSongs() {
    const all = [];
    for (const playlist of Object.values(MUSIC_DATA)) {
        all.push(...playlist);
    }
    return all;
}

// ============================================================
// ===== PLAYER =====
// ============================================================
function setupPlayer() {
    // Botões do player
    document.getElementById('playBtn').addEventListener('click', togglePlay);
    document.getElementById('prevBtn').addEventListener('click', prevSong);
    document.getElementById('nextBtn').addEventListener('click', nextSong);
    
    // Barra de progresso
    document.querySelector('.progress-bar').addEventListener('click', (e) => {
        if (!state.player || !state.playerReady) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        const duration = state.player.getDuration();
        if (duration > 0) {
            state.player.seekTo(percent * duration, true);
        }
    });
    
    // Volume
    document.querySelector('.volume-bar').addEventListener('click', (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const percent = Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100));
        document.getElementById('volumeProgress').style.width = percent + '%';
        if (state.player && state.playerReady) {
            state.player.setVolume(percent);
        }
    });
    
    // Letras
    document.getElementById('toggleLyrics').addEventListener('click', toggleLyrics);
    document.getElementById('closeLyrics').addEventListener('click', () => {
        document.getElementById('lyricsPanel').style.display = 'none';
    });
}

function playSong(songId, playlistId) {
    const song = getSongById(songId);
    if (!song) {
        console.error('Música não encontrada:', songId);
        return;
    }
    
    state.currentSongId = songId;
    state.currentPlaylist = playlistId || state.currentPlaylist;
    
    // Atualizar UI
    document.getElementById('playerSong').textContent = song.title;
    document.getElementById('playerArtist').textContent = song.artist || 'Desconhecido';
    document.getElementById('playerArtwork').innerHTML = song.cover || '🎵';
    
    // Tocar no YouTube
    if (state.player && state.playerReady) {
        try {
            state.player.loadVideoById(songId);
            state.player.playVideo();
            state.isPlaying = true;
            document.getElementById('playBtn').textContent = '⏸';
            document.getElementById('playBtn').title = 'Pausar';
        } catch (e) {
            console.error('Erro ao tocar música:', e);
            alert('Erro ao tocar a música. Tente novamente.');
        }
    } else {
        console.warn('Player não está pronto. Tentando novamente em 1 segundo...');
        // Tentar novamente após um tempo
        setTimeout(() => {
            if (state.player && state.playerReady) {
                playSong(songId, playlistId);
            } else {
                alert('Player do YouTube não carregou. Verifique sua conexão com a internet.');
            }
        }, 1000);
    }
    
    // Atualizar letras
    updateLyrics(song);
}

function togglePlay() {
    if (!state.player || !state.playerReady) {
        // Se não houver música, tenta tocar a primeira
        const firstSong = getAllSongs()[0];
        if (firstSong) playSong(firstSong.id);
        return;
    }
    
    if (state.isPlaying) {
        try {
            state.player.pauseVideo();
            state.isPlaying = false;
            document.getElementById('playBtn').textContent = '▶️';
            document.getElementById('playBtn').title = 'Tocar';
        } catch (e) {
            console.error('Erro ao pausar:', e);
        }
    } else {
        try {
            state.player.playVideo();
            state.isPlaying = true;
            document.getElementById('playBtn').textContent = '⏸';
            document.getElementById('playBtn').title = 'Pausar';
        } catch (e) {
            console.error('Erro ao reproduzir:', e);
        }
    }
}

function nextSong() {
    if (!state.currentPlaylist) {
        const all = getAllSongs();
        const currentIndex = all.findIndex(s => s.id === state.currentSongId);
        if (currentIndex < all.length - 1) {
            playSong(all[currentIndex + 1].id);
        }
        return;
    }
    
    const playlist = state.playlists[state.currentPlaylist];
    if (!playlist || !playlist.songs.length) return;
    
    const currentIndex = playlist.songs.findIndex(id => id === state.currentSongId);
    if (currentIndex < playlist.songs.length - 1) {
        playSong(playlist.songs[currentIndex + 1].id, state.currentPlaylist);
    } else if (playlist.songs.length > 0) {
        playSong(playlist.songs[0].id, state.currentPlaylist);
    }
}
// ============================================================
// ===== DADOS DAS MÚSICAS =====
// ============================================================
const MUSIC_DATA = {
    'ana-castela': [
        { id: 'BngZJ-yORWw', title: 'Ponto Fraco', artist: 'Ana Castela', cover: '🎶', lyrics: 'Letra de Ponto Fraco - Ana Castela\n\nPonto fraco, você é meu ponto fraco...' },
        { id: 'qTVbdTffP5k', title: 'É Que Eu Não Te Esqueci', artist: 'Ana Castela', cover: '🎤', lyrics: 'É que eu não te esqueci\nMesmo depois de tudo que passou...' },
        { id: 'F3kqSn_BP50', title: 'Eu Não Vou Mudar', artist: 'Ana Castela', cover: '🎸', lyrics: 'Eu não vou mudar por você\nSou do jeito que sou...' },
        { id: 'tX7-EVaP_RY', title: 'Hoje Tem Rodeio', artist: 'Ana Castela', cover: '🤠', lyrics: 'Hoje tem rodeio\nVai ter festa, vai ter som...' },
        { id: '_fqH6zYJ3DI', title: 'Vou Vender o Meu Chapéu', artist: 'Ana Castela', cover: '🧢', lyrics: 'Vou vender o meu chapéu\nPra comprar um violão...' },
        { id: 'fIDdKiCL1lA', title: 'Não Depende Só De Mim', artist: 'Ana Castela', cover: '🎵', lyrics: 'Não depende só de mim\nPra dar certo tem que ser nós dois...' },
        { id: '9O4RM1VNLuM', title: 'É Bom Demais', artist: 'Ana Castela', cover: '🎧', lyrics: 'É bom demais te amar\nÉ bom demais sentir você...' },
        { id: 'nmlSLqOvPHQ', title: 'Meu Erro', artist: 'Ana Castela', cover: '💔', lyrics: 'Meu erro foi ter te amado demais...' },
        { id: 'kTSAECb8iIc', title: 'Rodeio Acabou', artist: 'Ana Castela', cover: '🐴', lyrics: 'O rodeio acabou\nMas a saudade ficou...' },
        { id: 'CKNjiHKiNvM', title: 'Agora Ou Nunca', artist: 'Ana Castela ft. Pedro Sampaio', cover: '🔥', lyrics: 'Agora ou nunca\nVamos viver esse amor...' },
        { id: 'qlPKAzw6-dk', title: 'Simplesmente Acontece', artist: 'Péricles ft. Ana Castela', cover: '💕', lyrics: 'Simplesmente acontece\nO amor quando menos se espera...' },
        { id: 'Jpv9iR09sjc', title: 'Mamãe, Não Deixe Seu Filho Ser um Cowboy', artist: 'Ana Castela', cover: '👩‍👦', lyrics: 'Mamãe, não deixe seu filho ser um cowboy...' },
        { id: '4OK23Y-4xsE', title: 'Franguinho na Panela', artist: 'Ana Castela ft. Lourenço & Lourival', cover: '🍗', lyrics: 'Franguinho na panela\nPra fazer um bom jantar...' },
        { id: 'CnY6xryxYDw', title: 'Hoje eu Lembrei de Você', artist: 'Ana Castela', cover: '😢', lyrics: 'Hoje eu lembrei de você\nE o coração apertou...' },
        { id: 'HxsxGqM3Sc0', title: 'Rédeas do Possante', artist: 'Ana Castela ft. Sula Miranda', cover: '🐎', lyrics: 'Rédeas do possante\nPra conduzir meu coração...' },
        { id: 'Kw6X7Z1Qy4k', title: 'Romaria', artist: 'Ana Castela ft. Sérgio Reis', cover: '⛪', lyrics: 'Romaria, fé e devoção...' },
        { id: 'OZSpfBEdz8k', title: 'Vá com Deus', artist: 'Ana Castela ft. Roberta Miranda', cover: '🙏', lyrics: 'Vá com Deus, meu bem\nQue Ele te guarde...' },
        { id: 'aPqYwUPyZN0', title: 'Você Vai Ver', artist: 'Ana Castela ft. Zezé Di Camargo & Luciano', cover: '🎶', lyrics: 'Você vai ver\nQue o amor sempre vence...' },
        { id: 'cZHlSHFeq7E', title: 'Se a casa Cair', artist: 'Ana Castela ft. Teodoro e Sampaio', cover: '🏠', lyrics: 'Se a casa cair\nA gente levanta de novo...' },
        { id: 'dNixkzO0jgI', title: 'Saudade é mato', artist: 'Ana Castela', cover: '🌿', lyrics: 'Saudade é mato\nQue cresce no peito da gente...' },
        { id: 'jGbldS066tA', title: 'Barulho da Camioneta', artist: 'Ana Castela', cover: '🚗', lyrics: 'Barulho da camioneta\nAnunciando a chegada...' }
    ],
    'sertanejo': [
        { id: 'BngZJ-yORWw', title: 'Ponto Fraco', artist: 'Ana Castela', cover: '🎶', genre: 'sertanejo' },
        { id: 'qTVbdTffP5k', title: 'É Que Eu Não Te Esqueci', artist: 'Ana Castela', cover: '🎤', genre: 'sertanejo' },
        { id: 'F3kqSn_BP50', title: 'Eu Não Vou Mudar', artist: 'Ana Castela', cover: '🎸', genre: 'sertanejo' },
        { id: 'tX7-EVaP_RY', title: 'Hoje Tem Rodeio', artist: 'Ana Castela', cover: '🤠', genre: 'sertanejo' },
        { id: '_fqH6zYJ3DI', title: 'Vou Vender o Meu Chapéu', artist: 'Ana Castela', cover: '🧢', genre: 'sertanejo' },
        { id: 'nmlSLqOvPHQ', title: 'Meu Erro', artist: 'Ana Castela', cover: '💔', genre: 'sertanejo' },
        { id: 'kTSAECb8iIc', title: 'Rodeio Acabou', artist: 'Ana Castela', cover: '🐴', genre: 'sertanejo' },
    ],
    'funk': [
        { id: 'CKNjiHKiNvM', title: 'Agora Ou Nunca', artist: 'Ana Castela ft. Pedro Sampaio', cover: '🔥', genre: 'funk' },
        { id: 'Jpv9iR09sjc', title: 'Mamãe, Não Deixe Seu Filho Ser um Cowboy', artist: 'Ana Castela', cover: '👩‍👦', genre: 'funk' },
    ]
};

// Playlists padrão
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
    queue: [],
    resetEmail: null,
    resetCode: null
};

// ============================================================
// ===== INICIALIZAÇÃO =====
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    // Carregar dados do localStorage
    loadFromStorage();
    
    // Verificar se usuário está logado
    if (state.currentUser) {
        showApp();
        updateGreeting();
        renderHome();
        renderLibrary();
        renderSidebar();
    } else {
        showLogin();
    }
    
    // Configurar eventos
    setupEvents();
    
    // Inicializar player do YouTube
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
    // Mostrar cadastro
    document.getElementById('showRegister').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.login-box').style.display = 'none';
        document.querySelector('.register-box').style.display = 'block';
        document.getElementById('resetPasswordBox').style.display = 'none';
    });

    // Mostrar login
    document.getElementById('showLogin').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.login-box').style.display = 'block';
        document.querySelector('.register-box').style.display = 'none';
        document.getElementById('resetPasswordBox').style.display = 'none';
    });

    // Mostrar reset de senha
    document.getElementById('showForgotPassword').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.login-box').style.display = 'none';
        document.querySelector('.register-box').style.display = 'none';
        document.getElementById('resetPasswordBox').style.display = 'block';
        document.getElementById('resetStep1').style.display = 'block';
        document.getElementById('resetStep2').style.display = 'none';
    });

    // Voltar da tela de reset
    document.getElementById('backToLogin').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.login-box').style.display = 'block';
        document.querySelector('.register-box').style.display = 'none';
        document.getElementById('resetPasswordBox').style.display = 'none';
        document.getElementById('resetStep1').style.display = 'block';
        document.getElementById('resetStep2').style.display = 'none';
    });

    // Solicitar código de reset
    document.getElementById('requestResetCode').addEventListener('click', function(e) {
        e.preventDefault();
        const email = document.getElementById('resetEmail').value.trim();
        
        if (!email) {
            alert('Por favor, digite seu e-mail.');
            return;
        }
        
        // Verificar se o e-mail existe
        const users = JSON.parse(localStorage.getItem('pobrefy_users') || '[]');
        const user = users.find(u => u.email === email);
        
        if (!user) {
            alert('E-mail não encontrado. Verifique se você digitou corretamente.');
            return;
        }
        
        // Gerar código de 6 dígitos
        const code = Math.floor(100000 + Math.random() * 900000).toString();
        state.resetEmail = email;
        state.resetCode = code;
        
        // Simular envio de e-mail
        console.log('Código de verificação para ' + email + ': ' + code);
        
        // Mostrar mensagem com o código
        alert('🔐 Código de verificação enviado para ' + email + '\n\nCódigo: ' + code + '\n\n(Em produção, este código seria enviado por e-mail)');
        
        // Avançar para o passo 2
        document.getElementById('resetStep1').style.display = 'none';
        document.getElementById('resetStep2').style.display = 'block';
        document.getElementById('resetEmailDisplay').textContent = email;
    });

    // Verificar código e resetar senha
    document.getElementById('resetPasswordForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const code = document.getElementById('resetCodeInput').value.trim();
        const newPassword = document.getElementById('resetNewPassword').value;
        const confirmPassword = document.getElementById('resetConfirmPassword').value;
        
        // Verificar código
        if (code !== state.resetCode) {
            alert('Código inválido. Tente novamente.');
            return;
        }
        
        // Verificar senha
        if (newPassword.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
        }
        
        if (newPassword !== confirmPassword) {
            alert('As senhas não coincidem.');
            return;
        }
        
        // Atualizar senha no localStorage
        const users = JSON.parse(localStorage.getItem('pobrefy_users') || '[]');
        const userIndex = users.findIndex(u => u.email === state.resetEmail);
        
        if (userIndex !== -1) {
            users[userIndex].password = newPassword;
            localStorage.setItem('pobrefy_users', JSON.stringify(users));
            
            alert('✅ Senha alterada com sucesso! Faça login com sua nova senha.');
            
            // Voltar para o login
            document.querySelector('.login-box').style.display = 'block';
            document.querySelector('.register-box').style.display = 'none';
            document.getElementById('resetPasswordBox').style.display = 'none';
            document.getElementById('resetStep1').style.display = 'block';
            document.getElementById('resetStep2').style.display = 'none';
            
            // Limpar campos
            document.getElementById('resetEmail').value = '';
            document.getElementById('resetCodeInput').value = '';
            document.getElementById('resetNewPassword').value = '';
            document.getElementById('resetConfirmPassword').value = '';
            state.resetEmail = null;
            state.resetCode = null;
        }
    });

    // Login
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        // Verificar se o usuário existe
        const users = JSON.parse(localStorage.getItem('pobrefy_users') || '[]');
        const user = users.find(u => u.email === email && u.password === password);
        
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

    // Cadastro
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
        
        if (password.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
        }
        
        const users = JSON.parse(localStorage.getItem('pobrefy_users') || '[]');
        
        if (users.find(u => u.email === email)) {
            alert('Este e-mail já está cadastrado!');
            return;
        }
        
        users.push({ name, email, password });
        localStorage.setItem('pobrefy_users', JSON.stringify(users));
        
        state.currentUser = { name, email };
        saveToStorage();
        showApp();
        updateGreeting();
        renderHome();
        renderLibrary();
        renderSidebar();
    });

    // Logout
    document.getElementById('logoutBtn').addEventListener('click', function() {
        state.currentUser = null;
        localStorage.removeItem('pobrefy_user');
        showLogin();
        document.querySelector('.login-box').style.display = 'block';
        document.querySelector('.register-box').style.display = 'none';
        document.getElementById('resetPasswordBox').style.display = 'none';
    });

    // Google Login (preparado)
    document.getElementById('googleLoginBtn').addEventListener('click', function() {
        alert('⚠️ Configuração do Google OAuth necessária!\n\nPara ativar o login com Google, você precisa configurar o Client ID no código.');
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
            
            // Atualizar menu
            document.querySelectorAll('nav ul li').forEach(function(li) {
                li.classList.remove('active');
            });
            this.classList.add('active');
            
            // Mostrar página
            document.querySelectorAll('.page-content').forEach(function(p) {
                p.classList.remove('active');
            });
            const target = document.getElementById('page-' + page);
            if (target) target.classList.add('active');
        });
    });
    
    // Playlists na sidebar
    document.querySelectorAll('#sidebarPlaylists li[data-playlist]').forEach(function(item) {
        item.addEventListener('click', function() {
            const playlistId = this.dataset.playlist;
            openPlaylist(playlistId);
        });
    });
    
    // Criar playlist
    document.querySelector('.create-playlist-btn').addEventListener('click', function() {
        const name = prompt('Nome da nova playlist:');
        if (name && name.trim()) {
            createPlaylist(name.trim());
        }
    });
    
    // Voltar da playlist
    document.getElementById('backFromPlaylist').addEventListener('click', function() {
        document.getElementById('page-playlist').style.display = 'none';
        document.getElementById('page-home').classList.add('active');
        document.querySelector('nav ul li[data-page="home"]').classList.add('active');
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
        document.getElementById('page-playlist').style.display = 'none';
        document.getElementById('page-home').classList.add('active');
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
    
    let html = '<div class="playlist-detail-header">';
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
    songs.forEach(function(song) {
        html += '<div class="playlist-track" onclick="playSong(\'' + song.id + '\', \'' + id + '\')">';
        html += '<div class="track-artwork">' + (song.cover || '🎵') + '</div>';
        html += '<div class="track-info">';
        html += '<div class="track-title">' + song.title + '</div>';
        html += '<div class="track-artist">' + (song.artist || 'Desconhecido') + '</div>';
        html += '</div>';
        html += '<button class="track-play" onclick="event.stopPropagation(); playSong(\'' + song.id + '\', \'' + id + '\')">▶️</button>';
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
    if (!playlist || !playlist.songs.length) {
        alert('Esta playlist não tem músicas!');
        return;
    }
    
    state.queue = playlist.songs.map(function(songId) {
        return getSongById(songId);
    }).filter(function(s) { return s; });
    state.currentSongIndex = 0;
    
    if (state.queue.length > 0) {
        playSong(state.queue[0].id, id);
    }
}

function getSongById(id) {
    for (const playlist of Object.values(MUSIC_DATA)) {
        for (const song of playlist) {
            if (song.id === id) return song;
        }
    }
    return null;
}

function getAllSongs() {
    const all = [];
    for (const playlist of Object.values(MUSIC_DATA)) {
        all.push(...playlist);
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
        const rect = this.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        const duration = state.player.getDuration();
        if (duration > 0) {
            state.player.seekTo(percent * duration, true);
        }
    });
    
    document.querySelector('.volume-bar').addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const percent = Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100));
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
    const song = getSongById(songId);
    if (!song) {
        console.error('Música não encontrada:', songId);
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
        } catch (e) {
            console.error('Erro ao tocar música:', e);
            alert('Erro ao tocar a música. Tente novamente.');
        }
    } else {
        console.warn('Player não está pronto. Tentando novamente em 1 segundo...');
        setTimeout(function() {
            if (state.player && state.playerReady) {
                playSong(songId, playlistId);
            } else {
                alert('Player do YouTube não carregou. Verifique sua conexão com a internet.');
            }
        }, 1000);
    }
    
    updateLyrics(song);
}

function togglePlay() {
    if (!state.player || !state.playerReady) {
        const firstSong = getAllSongs()[0];
        if (firstSong) playSong(firstSong.id);
        return;
    }
    
    if (state.isPlaying) {
        try {
            state.player.pauseVideo();
            state.isPlaying = false;
            document.getElementById('playBtn').textContent = '▶️';
            document.getElementById('playBtn').title = 'Tocar';
        } catch (e) {
            console.error('Erro ao pausar:', e);
        }
    } else {
        try {
            state.player.playVideo();
            state.isPlaying = true;
            document.getElementById('playBtn').textContent = '⏸';
            document.getElementById('playBtn').title = 'Pausar';
        } catch (e) {
            console.error('Erro ao reproduzir:', e);
        }
    }
}

function nextSong() {
    if (!state.currentPlaylist) {
        const all = getAllSongs();
        const currentIndex = all.findIndex(function(s) { return s.id === state.currentSongId; });
        if (currentIndex < all.length - 1) {
            playSong(all[currentIndex + 1].id);
        }
        return;
    }
    
    const playlist = state.playlists[state.currentPlaylist];
    if (!playlist || !playlist.songs.length) return;
    
    const currentIndex = playlist.songs.findIndex(function(id) { return id === state.currentSongId; });
    if (currentIndex < playlist.songs.length - 1) {
        playSong(playlist.songs[currentIndex + 1].id, state.currentPlaylist);
    } else if (playlist.songs.length > 0) {
        playSong(playlist.songs[0].id, state.currentPlaylist);
    }
}

function prevSong() {
    if (!state.currentPlaylist) {
        const all = getAllSongs();
        const currentIndex = all.findIndex(function(s) { return s.id === state.currentSongId; });
        if (currentIndex > 0) {
            playSong(all[currentIndex - 1].id);
        }
        return;
    }
    
    const playlist = state.playlists[state.currentPlaylist];
    if (!playlist || !playlist.songs.length) return;
    
    const currentIndex = playlist.songs.findIndex(function(id) { return id === state.currentSongId; });
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
    const panel = document.getElementById('lyricsPanel');
    panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
}

function updateLyrics(song) {
    const title = document.getElementById('lyricsTitle');
    const content = document.getElementById('lyricsContent');
    
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
function loadYouTubeAPI() {
    if (window.YT && window.YT.Player) {
        console.log('YouTube API já carregada');
        createPlayer();
        return;
    }
    
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
    window.onYouTubeIframeAPIReady = function() {
        console.log('YouTube API carregada!');
        createPlayer();
    };
}

function createPlayer() {
    if (document.getElementById('player').innerHTML === '') {
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

function onPlayerReady(event) {
    state.playerReady = true;
    console.log('Player pronto!');
    if (!state.currentSongId) {
        const firstSong = getAllSongs()[0];
        if (firstSong) {
            playSong(firstSong.id);
        }
    }
}

function onPlayerStateChange(event) {
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
        nextSong();
    } else if (event.data === YT.PlayerState.UNSTARTED) {
        console.log('Player não iniciado');
    }
}

function onPlayerError(event) {
    console.error('Erro no player do YouTube:', event.data);
    if (state.currentSongId) {
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
            const duration = state.player.getDuration();
            const currentTime = state.player.getCurrentTime();
            
            if (duration > 0 && !isNaN(duration) && !isNaN(currentTime)) {
                const progress = (currentTime / duration) * 100;
                document.getElementById('progressFill').style.width = progress + '%';
                document.getElementById('currentTime').textContent = formatTime(currentTime);
                document.getElementById('totalTime').textContent = formatTime(duration);
            }
        } catch (e) {
            // Ignora erros de progresso
        }
    }
    requestAnimationFrame(updateProgress);
}

function formatTime(seconds) {
    if (!seconds || isNaN(seconds)) return '0:00';
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return min + ':' + (sec < 10 ? '0' : '') + sec;
}

// ============================================================
// ===== RENDERIZAÇÃO =====
// ============================================================
function renderHome() {
    const container = document.getElementById('homePlaylists');
    const playlists = [
        { id: 'ana-castela', name: 'Ana Castela', cover: '🎤', description: MUSIC_DATA['ana-castela'].length + ' músicas' },
        { id: 'sertanejo', name: 'Sertanejo', cover: '🎸', description: MUSIC_DATA['sertanejo'].length + ' músicas' },
        { id:
function prevSong() {
    if (!state.currentPlaylist) {
        const all = getAllSongs();
        const currentIndex = all.findIndex(s => s.id === state.currentSongId);
        if (currentIndex > 0) {
            playSong(all[currentIndex - 1].id);
        }
        return;
    }
    
    const playlist = state.playlists[state.currentPlaylist];
    if (!playlist || !playlist.songs.length) return;
    
    const currentIndex = playlist.songs.findIndex(id => id === state.currentSongId);
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
    const panel = document.getElementById('lyricsPanel');
    panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
}

function updateLyrics(song) {
    const title = document.getElementById('lyricsTitle');
    const content = document.getElementById('lyricsContent');
    
    title.textContent = `${song.title} - ${song.artist || 'Desconhecido'}`;
    
    if (song.lyrics) {
        content.innerHTML = `<pre>${song.lyrics}</pre>`;
    } else {
        content.innerHTML = '<p class="lyrics-placeholder">Letra não disponível para esta música.</p>';
    }
}

// ============================================================
// ===== YOUTUBE PLAYER =====
// ============================================================
function loadYouTubeAPI() {
    // Verificar se a API já está carregada
    if (window.YT && window.YT.Player) {
        console.log('YouTube API já carregada');
        createPlayer();
        return;
    }
    
    // Criar script para carregar a API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
    // A função onYouTubeIframeAPIReady será chamada pela API quando carregar
    window.onYouTubeIframeAPIReady = function() {
        console.log('YouTube API carregada!');
        createPlayer();
    };
}

function createPlayer() {
    if (document.getElementById('player').innerHTML === '') {
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

function onPlayerReady(event) {
    state.playerReady = true;
    console.log('Player pronto!');
    // Tentar tocar a primeira música se não houver nada tocando
    if (!state.currentSongId) {
        const firstSong = getAllSongs()[0];
        if (firstSong) {
            playSong(firstSong.id);
        }
    }
}

function onPlayerStateChange(event) {
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
        nextSong();
    } else if (event.data === YT.PlayerState.UNSTARTED) {
        // Player carregado mas não iniciado
        console.log('Player não iniciado');
    }
}

function onPlayerError(event) {
    console.error('Erro no player do YouTube:', event.data);
    // Tenta recarregar se houver erro
    if (state.currentSongId) {
        setTimeout(() => {
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
            const duration = state.player.getDuration();
            const currentTime = state.player.getCurrentTime();
            
            if (duration > 0 && !isNaN(duration) && !isNaN(currentTime)) {
                const progress = (currentTime / duration) * 100;
                document.getElementById('progressFill').style.width = progress + '%