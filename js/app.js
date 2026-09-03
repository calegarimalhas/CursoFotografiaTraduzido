/**
 * Photography Masterclass Workbook - Interatividade e Lógica do App
 */

let state = {
  currentPage: 1,
  currentMode: 'page', // 'page' | 'continuous'
  theme: localStorage.getItem('pm_theme') || 'dark',
  activeCategoryFilter: 'all'
};

/* ==========================================================================
   Sidebar Drawer Retrátil (Funções Globais de Controle Instantâneo)
   ========================================================================== */

function openSidebar() {
  const sidebar = document.getElementById('app-sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  const btn = document.getElementById('sidebar-toggle-btn');
  if (sidebar) sidebar.classList.add('open');
  if (backdrop) backdrop.classList.add('active');
  if (btn) btn.classList.add('active');
}

function closeSidebar() {
  const sidebar = document.getElementById('app-sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  const btn = document.getElementById('sidebar-toggle-btn');
  if (sidebar) sidebar.classList.remove('open');
  if (backdrop) backdrop.classList.remove('active');
  if (btn) btn.classList.remove('active');
}

function toggleSidebar() {
  const sidebar = document.getElementById('app-sidebar');
  if (!sidebar) return;
  if (sidebar.classList.contains('open')) {
    closeSidebar();
  } else {
    openSidebar();
  }
}

window.openSidebar = openSidebar;
window.closeSidebar = closeSidebar;
window.toggleSidebar = toggleSidebar;



document.addEventListener('DOMContentLoaded', () => {
  initTheme();

  

  initHeaderControls();
  initSearch();
  initModals();
  initKeyboardNav();
  
  // Lê hash inicial da URL se houver (ex: #page=5)
  const hash = window.location.hash;
  if (hash && hash.startsWith('#page=')) {
    const p = parseInt(hash.replace('#page=', ''));
    if (p >= 1 && p <= COURSE_DATA.length) {
      state.currentPage = p;
    }
  }
  
  renderApp();
});

function initTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.innerHTML = state.theme === 'dark' ? '☀️ Modo Claro' : '🌙 Modo Escuro';
  }
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('pm_theme', state.theme);
  initTheme();
}

function initHeaderControls() {
  // Seletor de Seções
  const secSelect = document.getElementById('section-select');
  if (secSelect) {
    SECTIONS_LIST.forEach(sec => {
      const opt = document.createElement('option');
      opt.value = sec.num;
      opt.textContent = `Seção ${sec.num}: ${sec.name}`;
      secSelect.appendChild(opt);
    });

    secSelect.addEventListener('change', (e) => {
      const secNum = parseInt(e.target.value);
      // Encontra a primeira página desta seção
      const targetPage = COURSE_DATA.find(p => p.sectionNum === secNum);
      if (targetPage) {
        goToPage(targetPage.page);
      }
    });
  }

  // Stepper de Páginas
  const prevBtn = document.getElementById('prev-page-btn');
  const nextBtn = document.getElementById('next-page-btn');
  const pageInput = document.getElementById('page-input');

  if (prevBtn) prevBtn.addEventListener('click', () => goToPage(state.currentPage - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goToPage(state.currentPage + 1));
  
  if (pageInput) {
    pageInput.addEventListener('change', (e) => {
      let p = parseInt(e.target.value);
      if (isNaN(p)) p = state.currentPage;
      goToPage(p);
    });
  }

  // Botão de Tema
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  // Botão de Dicionário no topo
  const dictBtn = document.getElementById('open-dict-btn');
  if (dictBtn) dictBtn.addEventListener('click', () => openDictionaryModal());

  // Botão de Dicas Gerais
  const tipsBtn = document.getElementById('open-tips-btn');
  if (tipsBtn) tipsBtn.addEventListener('click', () => openGeneralTipsModal());

  // Alternador de Modo de Leitura
  const modeBtn = document.getElementById('view-mode-btn');
  if (modeBtn) {
    modeBtn.addEventListener('click', () => {
      state.currentMode = state.currentMode === 'page' ? 'continuous' : 'page';
      modeBtn.innerHTML = state.currentMode === 'page' ? '📜 Leitura Contínua' : '📖 Modo Página';
      document.body.classList.toggle('mode-continuous', state.currentMode === 'continuous');
      renderApp();
    });
  }
}

function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    // Ignora se estiver digitando em input ou textarea
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;

    if (e.key === 'ArrowRight' || e.key === 'PageDown') {
      goToPage(state.currentPage + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      goToPage(state.currentPage - 1);
    } else if (e.key === 'd' || e.key === 'D') {
      if (e.ctrlKey) {
        e.preventDefault();
        openDictionaryModal();
      }
    }
  });
}

function goToPage(pno) {
  if (window.closeSidebar) window.closeSidebar();
  if (pno < 1) pno = 1;
  if (pno > COURSE_DATA.length) pno = COURSE_DATA.length;
  state.currentPage = pno;
  window.location.hash = `#page=${pno}`;
  renderApp();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderApp() {
  const pageData = COURSE_DATA[state.currentPage - 1];
  if (!pageData) return;

  // Atualiza controles do topo
  const pageInput = document.getElementById('page-input');
  if (pageInput) {
    pageInput.value = pageData.page;
    pageInput.max = COURSE_DATA.length;
  }
  const totalPagesEl = document.getElementById('total-pages-label');
  if (totalPagesEl) totalPagesEl.textContent = COURSE_DATA.length;

  const prevBtn = document.getElementById('prev-page-btn');
  const nextBtn = document.getElementById('next-page-btn');
  if (prevBtn) prevBtn.disabled = (state.currentPage <= 1);
  if (nextBtn) nextBtn.disabled = (state.currentPage >= COURSE_DATA.length);

  const secSelect = document.getElementById('section-select');
  if (secSelect && pageData.sectionNum) {
    secSelect.value = pageData.sectionNum;
  }

  // Renderiza Sidebar
  renderSidebar(pageData);

  // Renderiza Conteúdo Principal
  const mainEl = document.getElementById('app-main-content');
  if (!mainEl) return;

  if (state.currentMode === 'continuous') {
    // Renderiza todas as páginas da mesma seção em sequência
    const sectionPages = COURSE_DATA.filter(p => p.sectionNum === pageData.sectionNum);
    mainEl.innerHTML = `
      <div class="continuous-section-header">
        <h2 style="font-family: var(--font-heading); margin-bottom: 24px; color: var(--accent-primary);">
          Seção ${pageData.sectionNum}: ${pageData.section} (${sectionPages.length} Lições)
        </h2>
      </div>
      ${sectionPages.map(p => createLessonHTML(p)).join('')}
    `;
  } else {
    // Renderiza uma única página do workbook
    mainEl.innerHTML = createLessonHTML(pageData);
  }

  bindDynamicEvents();
}

function renderSidebar(pageData) {
  const badgeEl = document.getElementById('sidebar-sec-badge');
  const titleEl = document.getElementById('sidebar-sec-title');
  const listEl = document.getElementById('sidebar-lessons-list');

  if (badgeEl) badgeEl.textContent = `Seção ${pageData.sectionNum}`;
  if (titleEl) titleEl.textContent = pageData.section;

  if (listEl) {
    listEl.innerHTML = '';
    
    // Se a página tem tópicos explícitos de sidebar, usamos eles; senão listamos as lições da seção
    const sectionPages = COURSE_DATA.filter(p => p.sectionNum === pageData.sectionNum);

    if (sectionPages.length > 0) {
      sectionPages.forEach(p => {
        const li = document.createElement('li');
        li.className = `sidebar-lesson-item ${p.page === pageData.page ? 'active' : ''}`;
        li.innerHTML = `
          <span class="sidebar-lesson-dot"></span>
          <span class="sidebar-lesson-text">${p.title}</span>
        `;
        li.addEventListener('click', () => goToPage(p.page));
        listEl.appendChild(li);
      });
    }
  }

  // Carrega as anotações locais para a página atual
  const notesArea = document.getElementById('page-notes');
  if (notesArea) {
    const saved = localStorage.getItem(`pm_notes_page_${pageData.page}`) || '';
    notesArea.value = saved;
    notesArea.placeholder = `Escreva suas anotações pessoais para a Página ${pageData.page}...`;
  }
}

function saveCurrentNotes() {
  const notesArea = document.getElementById('page-notes');
  const statusEl = document.getElementById('notes-status');
  if (!notesArea) return;

  localStorage.setItem(`pm_notes_page_${state.currentPage}`, notesArea.value);
  if (statusEl) {
    statusEl.classList.add('visible');
    setTimeout(() => statusEl.classList.remove('visible'), 1500);
  }
}

// Constrói o HTML da Lição
function createLessonHTML(pageData) {
  if (pageData.type === 'cover') {
    return `
      <div class="lesson-card section-divider-card">
        <div class="divider-badge">Livro de Exercícios Oficial • Tradução Integral PT-BR</div>
        <h1 class="divider-title">PHOTOGRAPHY MASTERCLASS</h1>
        <p style="font-size: 1.3rem; color: var(--accent-primary); font-weight: 600; margin-bottom: 20px;">
          Guia Completo de Fotografia: Da Câmera ao Negócio
        </p>
        <p class="divider-desc">
          Por Phil Ebiner, William Carnahan e Sam Shimizu-Jones.<br>
          Edição interativa completa com ${COURSE_DATA.length} páginas, 313 fotografias originais, sistema de dicionário inteligente por seleção de palavras em inglês e dicas profissionais.
        </p>
        <div style="display: flex; justify-content: center; gap: 16px; flex-wrap: wrap;">
          <button class="btn-start-section" onclick="goToPage(2)">
            Começar o Curso (Página 2) →
          </button>
          <button class="btn-start-section" style="background: var(--bg-card-subtle); color: #fff; border: 1px solid var(--border-color);" onclick="openDictionaryModal()">
            📖 Abrir Dicionário de Inglês
          </button>
        </div>
      </div>
    `;
  }

  if (pageData.type === 'divider') {
    return `
      <div class="lesson-card section-divider-card">
        <div class="divider-badge">Módulo Temático do Curso</div>
        <h1 class="divider-title">${pageData.title}</h1>
        <p class="divider-desc">
          Aprofunde-se nos fundamentos teóricos, exercícios práticos e técnicas profissionais deste módulo.
        </p>
        <button class="btn-start-section" onclick="goToPage(${pageData.page + 1})">
          Iniciar Lições deste Módulo →
        </button>
      </div>
    `;
  }

  const hasImages = pageData.images && pageData.images.length > 0;

  // Monta blocos de texto
  let textHTML = '';
  pageData.contentBlocks.forEach(b => {
    if (b.type === 'assignment') {
      textHTML += `
        <div class="assignment-box">
          <div class="assignment-badge">🎯 EXERCÍCIO PRÁTICO</div>
          <p class="lesson-p" style="color: #fff;">${b.text}</p>
        </div>
      `;
    } else if (b.type === 'bullet') {
      textHTML += `<div class="lesson-bullet">${b.text}</div>`;
    } else if (b.type === 'heading') {
      textHTML += `<h3 class="lesson-heading">${b.text}</h3>`;
    } else if (b.type === 'caption') {
      textHTML += `<div style="font-size: 0.8rem; color: var(--text-muted); font-style: italic; margin-top: -6px;">Créditos da Foto: ${b.text}</div>`;
    } else {
      textHTML += `<p class="lesson-p">${b.text}</p>`;
    }
  });

  // Insere a Dica de Foto Original do Workbook (se existir nesta página)
  if (pageData.photoTip) {
    textHTML += `
      <div class="photo-tip-box">
        <div class="tip-badge">📸 DICA DE FOTO ORIGINAL DO WORKBOOK</div>
        <p class="photo-tip-content">${pageData.photoTip}</p>
      </div>
    `;
  }

  // Se a página não tiver blocos de texto nativos além do título (ex: visual guides)
  if (!textHTML.trim()) {
    textHTML = `
      <p class="lesson-p">
        Este módulo consiste em um <strong>Guia Visual e Prático</strong> ilustrado nas imagens ao lado. Analise cuidadosamente a tabela e os esquemas gráficos abaixo para fixar os conceitos de <em>${pageData.title}</em>.
      </p>
    `;
  }

  // Seção de Recursos Complementares e Vídeos Recomendados no YouTube
  let resourcesHTML = '';
  if (pageData.resources && pageData.resources.length > 0) {
    resourcesHTML = `
      <div class="video-resources-section">
        <div class="video-section-title">
          <span>🎥 Vídeos Recomendados no YouTube & Recursos Práticos</span>
        </div>
        <div class="resources-grid">
          ${pageData.resources.map(r => `
            <div class="resource-card">
              <div class="resource-header">
                <span class="resource-type-icon">${r.type === 'youtube' ? '🔴' : (r.type === 'tool' ? '🛠️' : '📄')}</span>
                <div>
                  <div class="resource-title">${r.title}</div>
                  <div class="resource-channel">${r.channel || ''}</div>
                </div>
              </div>
              <p class="resource-desc">${r.desc || ''}</p>
              <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="resource-link-btn ${r.type === 'youtube' ? 'resource-btn-youtube' : (r.type === 'tool' ? 'resource-btn-tool' : 'resource-btn-article')}">
                ${r.type === 'youtube' ? '▶ Assistir no YouTube ↗' : (r.type === 'tool' ? 'Abrir Simulador ↗' : 'Acessar Artigo / Guia ↗')}
              </a>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // Galeria de Imagens
  let imagesHTML = '';
  if (hasImages) {
    imagesHTML = `
      <div class="lesson-images-column">
        ${pageData.images.map(img => `
          <div class="lesson-image-card" onclick="openLightbox('${img.src}', '${img.alt}')">
            <img src="${img.src}" alt="${img.alt}" class="lesson-img" loading="lazy">
            <div class="image-zoom-overlay">🔍 Clique para Ampliar</div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Botões de Dicas e Curiosidades
  const tipsJson = encodeURIComponent(JSON.stringify(pageData.tips || []));
  const curioJson = encodeURIComponent(JSON.stringify(pageData.curiosities || []));

  // Identifica se é uma atividade prática ou se titleEn é apenas cabeçalho genérico
  const isGenericHeader = /assignment|activity|photo chat|tips for|overview|introduction|chapter|section|welcome/i.test(pageData.titleEn || '') || pageData.hasAssignment;
  
  let badgeHTML = '';
  if (pageData.hasAssignment || /exercício|atividade/i.test(pageData.title)) {
    badgeHTML = `
      <div class="assignment-header-badge">
        🎯 Atividade Prática de Campo • Exercício do Módulo
      </div>
    `;
  } else if (pageData.titleEn && !isGenericHeader) {
    badgeHTML = `
      <div class="lesson-title-en-badge" onclick="window.appDictionary && window.appDictionary.openTerm('${pageData.titleEn}')" title="Clique para consultar no dicionário fotográfico">
        📖 Termo Fotográfico: "${pageData.titleEn}"
      </div>
    `;
  }

  return `
    <div class="lesson-card" id="card-page-${pageData.page}">
      <div class="lesson-top-bar">
        <div class="lesson-breadcrumbs">
          <span>Seção ${pageData.sectionNum}</span>
          <span class="sep">/</span>
          <span class="current-sec">${pageData.section}</span>
          <span class="sep">•</span>
          <span style="font-weight: 600;">Pág. ${pageData.page} de ${COURSE_DATA.length}</span>
        </div>
        <div class="lesson-actions">
          <button class="btn-interactive-tip" onclick="showTipModal('${tipsJson}', '${pageData.title}')">
            💡 Dica Prática
          </button>
          <button class="btn-interactive-curio" onclick="showCurioModal('${curioJson}', '${pageData.title}')">
            🔍 Curiosidade
          </button>
        </div>
      </div>

      <div class="lesson-header">
        <h1 class="lesson-title-pt">${pageData.title}</h1>
        ${badgeHTML}
      </div>

      <div class="lesson-body ${hasImages ? 'has-images' : ''}">
        <div class="lesson-text-column">
          ${textHTML}
        </div>
        ${imagesHTML}
      </div>

      ${resourcesHTML}

      <div class="bottom-nav-bar">
        <button class="btn-nav-page" onclick="goToPage(${pageData.page - 1})" ${pageData.page <= 1 ? 'disabled' : ''}>
          ← Página Anterior
        </button>
        <span style="font-size: 0.85rem; color: var(--text-muted);">
          Use as setas <strong>←</strong> e <strong>→</strong> do teclado
        </span>
        <button class="btn-nav-page" onclick="goToPage(${pageData.page + 1})" ${pageData.page >= COURSE_DATA.length ? 'disabled' : ''}>
          Próxima Página →
        </button>
      </div>
    </div>
  `;
}

function bindDynamicEvents() {
  // Configura o salvamento automático com debounce das anotações da sidebar
  const notesArea = document.getElementById('page-notes');
  if (notesArea) {
    notesArea.removeEventListener('input', handleNotesInput);
    notesArea.addEventListener('input', handleNotesInput);
  }
}

let notesDebounce = null;
function handleNotesInput() {
  clearTimeout(notesDebounce);
  notesDebounce = setTimeout(saveCurrentNotes, 500);
}

// Modais: Dicas Práticas e Curiosidades
function showTipModal(encodedTips, lessonTitle) {
  const tips = JSON.parse(decodeURIComponent(encodedTips));
  const modal = document.getElementById('shared-modal');
  const titleEl = document.getElementById('shared-modal-title');
  const bodyEl = document.getElementById('shared-modal-body');

  titleEl.innerHTML = `💡 Dicas Práticas: ${lessonTitle}`;
  bodyEl.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 16px;">
      ${tips.map(t => `
        <div style="background: var(--bg-card-subtle); border-left: 4px solid var(--accent-gold); border-radius: var(--radius-md); padding: 16px 20px;">
          <h4 style="color: var(--accent-gold); font-size: 1.05rem; margin-bottom: 6px;">${t.title}</h4>
          <p style="color: var(--text-secondary); line-height: 1.6;">${t.text}</p>
        </div>
      `).join('')}
    </div>
  `;

  modal.classList.add('active');
}

function showCurioModal(encodedCurio, lessonTitle) {
  const curios = JSON.parse(decodeURIComponent(encodedCurio));
  const modal = document.getElementById('shared-modal');
  const titleEl = document.getElementById('shared-modal-title');
  const bodyEl = document.getElementById('shared-modal-body');

  titleEl.innerHTML = `🔍 Curiosidades & Bastidores: ${lessonTitle}`;
  bodyEl.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 16px;">
      ${curios.map(c => `
        <div style="background: var(--bg-card-subtle); border-left: 4px solid var(--accent-secondary); border-radius: var(--radius-md); padding: 16px 20px;">
          <h4 style="color: var(--accent-secondary); font-size: 1.05rem; margin-bottom: 6px;">${c.title}</h4>
          <p style="color: var(--text-secondary); line-height: 1.6;">${c.text}</p>
        </div>
      `).join('')}
    </div>
  `;

  modal.classList.add('active');
}

function openGeneralTipsModal() {
  const modal = document.getElementById('shared-modal');
  const titleEl = document.getElementById('shared-modal-title');
  const bodyEl = document.getElementById('shared-modal-body');

  titleEl.innerHTML = `💡 Dicas e Segredos de Mestres da Fotografia`;
  bodyEl.innerHTML = `
    <p style="color: var(--text-muted); margin-bottom: 20px;">
      Compilação de regras de ouro utilizadas por grandes fotógrafos do mundo inteiro para obter imagens de impacto.
    </p>
    <div style="display: flex; flex-direction: column; gap: 14px;">
      <div style="background: var(--bg-card-subtle); border-left: 4px solid var(--accent-primary); border-radius: var(--radius-md); padding: 14px 18px;">
        <strong style="color: var(--accent-primary);">1. A Regra do Olho Humano:</strong> O primeiro lugar para onde o olho do observador viaja é a área de maior contraste ou a face humana. Em retratos, garanta que a íris esteja em foco cravado.
      </div>
      <div style="background: var(--bg-card-subtle); border-left: 4px solid var(--accent-secondary); border-radius: var(--radius-md); padding: 14px 18px;">
        <strong style="color: var(--accent-secondary);">2. Cuide das Bordas do Quadro:</strong> Antes de apertar o obturador, olhe os quatro cantos da imagem. Elimine galhos cortados pela metade, lixeiras ou objetos brilhantes que roubem a atenção do assunto principal.
      </div>
      <div style="background: var(--bg-card-subtle); border-left: 4px solid var(--accent-gold); border-radius: var(--radius-md); padding: 14px 18px;">
        <strong style="color: var(--accent-gold);">3. Mude a Altura da Câmera:</strong> 95% das pessoas tiram fotos na altura dos próprios olhos. Agache-se na altura do chão para paisagens ou fique na linha dos olhos de crianças e animais de estimação para fotos muito mais envolventes.
      </div>
      <div style="background: var(--bg-card-subtle); border-left: 4px solid var(--accent-purple); border-radius: var(--radius-md); padding: 14px 18px;">
        <strong style="color: var(--accent-purple);">4. O Triângulo de Exposição é uma Balança:</strong> Se você acelerar o obturador para 1/1000s, precisará compensar abrindo a lente (ex: f/2.8) ou elevando o ISO (ex: ISO 800) para manter a luminosidade estável.
      </div>
    </div>
  `;

  modal.classList.add('active');
}

// Lightbox
function openLightbox(src, alt) {
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  if (modal && img) {
    img.src = src;
    img.alt = alt || 'Fotografia ampliada';
    modal.classList.add('active');
  }
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (modal) modal.classList.remove('active');
}

// Modais compartilhados e Dicionário
function initModals() {
  // Fechar modal compartilhado
  const sharedModal = document.getElementById('shared-modal');
  const sharedClose = document.getElementById('shared-modal-close');
  if (sharedClose && sharedModal) {
    sharedClose.addEventListener('click', () => sharedModal.classList.remove('active'));
    sharedModal.addEventListener('click', (e) => {
      if (e.target === sharedModal) sharedModal.classList.remove('active');
    });
  }

  // Fechar lightbox
  const lbModal = document.getElementById('lightbox-modal');
  const lbClose = document.getElementById('lightbox-close');
  if (lbClose && lbModal) {
    lbClose.addEventListener('click', closeLightbox);
    lbModal.addEventListener('click', (e) => {
      if (e.target === lbModal) closeLightbox();
    });
  }

  // Dicionário Modal
  const dictModal = document.getElementById('dictionary-modal');
  const dictClose = document.getElementById('dict-modal-close');
  if (dictClose && dictModal) {
    dictClose.addEventListener('click', () => dictModal.classList.remove('active'));
    dictModal.addEventListener('click', (e) => {
      if (e.target === dictModal) dictModal.classList.remove('active');
    });
  }

  const dictSearch = document.getElementById('dict-modal-search');
  if (dictSearch) {
    dictSearch.addEventListener('input', (e) => renderDictionaryList(e.target.value));
  }

  // Filtros de categoria do dicionário
  const catButtons = document.querySelectorAll('.btn-cat-filter');
  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      catButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeCategoryFilter = btn.dataset.cat;
      const term = dictSearch ? dictSearch.value : '';
      renderDictionaryList(term);
    });
  });
}

function openDictionaryModal(initialQuery = '') {
  const modal = document.getElementById('dictionary-modal');
  const searchInput = document.getElementById('dict-modal-search');
  if (modal) {
    modal.classList.add('active');
    if (searchInput) {
      searchInput.value = initialQuery;
      searchInput.focus();
    }
    renderDictionaryList(initialQuery);
  }
}

function renderDictionaryList(query = '') {
  const listEl = document.getElementById('dict-entries-list');
  if (!listEl || typeof DICTIONARY_DATA === 'undefined') return;

  const q = query.toLowerCase().trim();
  const entries = Object.values(DICTIONARY_DATA).filter(item => {
    const matchCat = (state.activeCategoryFilter === 'all' || item.category.toLowerCase().includes(state.activeCategoryFilter.toLowerCase()));
    if (!matchCat) return false;

    if (!q) return true;
    return item.term.toLowerCase().includes(q) ||
           item.translation.toLowerCase().includes(q) ||
           item.definition.toLowerCase().includes(q);
  });

  if (entries.length === 0) {
    listEl.innerHTML = `
      <div style="text-align: center; padding: 30px; color: var(--text-muted);">
        Nenhum termo encontrado para "${query}".
      </div>
    `;
    return;
  }

  listEl.innerHTML = entries.map(item => `
    <div class="dict-entry-card">
      <div class="dict-entry-header">
        <span class="dict-entry-title">${item.term}</span>
        <span class="dict-entry-category">${item.category}</span>
      </div>
      <div class="dict-entry-trans">${item.translation}</div>
      <div class="dict-entry-def">${item.definition}</div>
      ${item.example ? `<div class="dict-entry-ex">"${item.example}"</div>` : ''}
    </div>
  `).join('');
}

window.renderDictionaryList = renderDictionaryList;

// Busca Global
function initSearch() {
  const searchInput = document.getElementById('global-search');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    if (q.length < 2) return;

    // Busca nas lições
    const match = COURSE_DATA.find(p => 
      p.title.toLowerCase().includes(q) ||
      p.titleEn.toLowerCase().includes(q) ||
      p.section.toLowerCase().includes(q)
    );

    if (match) {
      goToPage(match.page);
    }
  });
}


/* ==========================================================================
   PWA & Service Worker Integration (iOS / iPhone & Android Support)
   ========================================================================== */

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('[PWA] Service Worker registrado com sucesso! Scope:', reg.scope))
      .catch(err => console.log('[PWA] Falha ao registrar Service Worker:', err));
  });
}

let deferredPrompt = null;
const pwaBtn = document.getElementById('pwa-install-btn');
const pwaModal = document.getElementById('pwa-modal');
const pwaClose = document.getElementById('pwa-modal-close');
const pwaBody = document.getElementById('pwa-modal-body');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  if (pwaBtn) pwaBtn.style.display = 'inline-flex';
});

function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

function openPWAModal() {
  if (!pwaModal || !pwaBody) return;
  
  const isApple = isIOS();
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone;

  if (isStandalone) {
    pwaBody.innerHTML = `
      <div style="text-align: center; padding: 20px 10px;">
        <div style="font-size: 3rem; margin-bottom: 10px;">🎉</div>
        <h4 style="font-size: 1.3rem; color: #34d399; margin-bottom: 8px;">Você já está usando o WebApp!</h4>
        <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6;">
          Este aplicativo já está instalado e rodando em modo nativo de tela cheia no seu dispositivo.
        </p>
      </div>
    `;
  } else if (isApple) {
    pwaBody.innerHTML = `
      <div style="padding: 10px 5px;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px; background: rgba(16, 185, 129, 0.1); padding: 12px 16px; border-radius: 12px; border: 1px solid rgba(16, 185, 129, 0.3);">
          <span style="font-size: 2rem;"></span>
          <div>
            <strong style="color: #34d399; display: block; font-size: 1.05rem;">Como Instalar no iPhone / iPad (iOS):</strong>
            <span style="color: var(--text-secondary); font-size: 0.85rem;">Siga os 2 passos rápidos no Safari:</span>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 14px; margin-top: 15px;">
          <div style="display: flex; align-items: flex-start; gap: 14px;">
            <div style="background: var(--accent-primary); color: #fff; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">1</div>
            <div style="color: var(--text-primary); font-size: 0.95rem; line-height: 1.5;">
              Toque no botão de <strong>Compartilhar</strong> 
              <span style="background: rgba(255,255,255,0.15); padding: 2px 8px; border-radius: 6px; font-size: 1.1rem;">⎋</span> ou 
              <span style="background: rgba(255,255,255,0.15); padding: 2px 8px; border-radius: 6px; font-size: 1.1rem;">􀈂</span> 
              na barra inferior do seu navegador Safari.
            </div>
          </div>

          <div style="display: flex; align-items: flex-start; gap: 14px;">
            <div style="background: var(--accent-primary); color: #fff; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">2</div>
            <div style="color: var(--text-primary); font-size: 0.95rem; line-height: 1.5;">
              Role as opções para baixo e selecione <strong>"Adicionar à Tela de Início"</strong> 
              <span style="background: rgba(255,255,255,0.15); padding: 2px 8px; border-radius: 6px;">➕</span>.
            </div>
          </div>
        </div>

        <div style="margin-top: 20px; text-align: center; background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.3); padding: 12px; border-radius: 10px; color: #fbbf24; font-size: 0.85rem;">
          💡 Pronto! O ícone <strong>PhotoMaster</strong> surgirá na sua tela inicial como um app nativo sem barras de navegação!
        </div>
      </div>
    `;
  } else {
    pwaBody.innerHTML = `
      <div style="text-align: center; padding: 15px 5px;">
        <div style="font-size: 2.5rem; margin-bottom: 12px;">📱</div>
        <h4 style="font-size: 1.2rem; color: var(--text-primary); margin-bottom: 10px;">Instalar Photography Masterclass</h4>
        <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.5; margin-bottom: 20px;">
          Instale o aplicativo no seu dispositivo para acesso rápido sem barras de navegador e navegação offline completa!
        </p>
        <button id="pwa-native-trigger-btn" class="btn-interactive-tip" style="padding: 12px 24px; font-size: 1rem; cursor: pointer;">
          ⚡ Instalar Agora
        </button>
      </div>
    `;

    setTimeout(() => {
      const triggerBtn = document.getElementById('pwa-native-trigger-btn');
      if (triggerBtn) {
        triggerBtn.addEventListener('click', () => {
          if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then(() => {
              deferredPrompt = null;
              pwaModal.classList.remove('active');
            });
          } else {
            alert('Para instalar no Android/Chrome: abra o menu do navegador (⋮) e toque em "Instalar Aplicativo" ou "Adicionar à Tela Inicial".');
          }
        });
      }
    }, 100);
  }

  pwaModal.classList.add('active');
}

if (pwaBtn) {
  pwaBtn.addEventListener('click', openPWAModal);
}
if (pwaClose) {
  pwaClose.addEventListener('click', () => pwaModal.classList.remove('active'));
}
if (pwaModal) {
  pwaModal.addEventListener('click', (e) => {
    if (e.target === pwaModal) pwaModal.classList.remove('active');
  });
}

/* ==========================================================================
   Gestos de Swipe para iPhone e Telas Touch (Navegação por Deslize)
   ========================================================================== */

let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
  // Ignora gestos iniciados em modais, caixas de anotações ou inputs
  if (e.target.closest('.app-modal-dialog') || e.target.closest('input') || e.target.closest('textarea') || e.target.closest('select')) {
    return;
  }
  touchStartX = e.changedTouches[0].screenX;
  touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

document.addEventListener('touchend', (e) => {
  if (e.target.closest('.app-modal-dialog') || e.target.closest('input') || e.target.closest('textarea') || e.target.closest('select')) {
    return;
  }
  touchEndX = e.changedTouches[0].screenX;
  touchEndY = e.changedTouches[0].screenY;
  handleSwipeGesture();
}, { passive: true });

function handleSwipeGesture() {
  const deltaX = touchEndX - touchStartX;
  const deltaY = touchEndY - touchStartY;
  
  // Apenas reconhece deslize horizontal se for predominantemente horizontal e longo o suficiente (>60px)
  if (Math.abs(deltaX) > 60 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
    if (deltaX < 0) {
      // Deslize da direita para a esquerda -> Próxima Página
      if (state.currentPage < COURSE_DATA.length) {
        goToPage(state.currentPage + 1);
      }
    } else {
      // Deslize da esquerda para a direita -> Página Anterior
      if (state.currentPage > 1) {
        goToPage(state.currentPage - 1);
      }
    }
  }
}
