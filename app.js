/**
 * SVGEditor - Main Application
 * Orange Creative Style SVG Editor with Live Preview
 */

// ============================================
// Translations
// ============================================

const i18n = {
    zh: {
        download: '下载',
        shapes: '形状',
        actions: '操作',
        view: '视图',
        grid: '网格',
        code: '代码',
        preview: '预览',
        templates: '模板',
        star: '星形',
        heart: '心形',
        arrow: '箭头',
        cloud: '云朵',
        bolt: '闪电',
        moon: '月亮',
        tagline: '让创意自由飞翔',
        copied: '已复制!',
        saved: '已保存!',
        error: '错误'
    },
    en: {
        download: 'Download',
        shapes: 'Shapes',
        actions: 'Actions',
        view: 'View',
        grid: 'Grid',
        code: 'Code',
        preview: 'Preview',
        templates: 'Templates',
        star: 'Star',
        heart: 'Heart',
        arrow: 'Arrow',
        cloud: 'Cloud',
        bolt: 'Bolt',
        moon: 'Moon',
        tagline: 'Let creativity soar',
        copied: 'Copied!',
        saved: 'Saved!',
        error: 'Error'
    },
    es: {
        download: 'Descargar',
        shapes: 'Formas',
        actions: 'Acciones',
        view: 'Vista',
        grid: 'Cuadrícula',
        code: 'Código',
        preview: 'Vista previa',
        templates: 'Plantillas',
        star: 'Estrella',
        heart: 'Corazón',
        arrow: 'Flecha',
        cloud: 'Nube',
        bolt: 'Rayo',
        moon: 'Luna',
        tagline: 'Deja volar la creatividad',
        copied: '¡Copiado!',
        saved: '¡Guardado!',
        error: 'Error'
    },
    ja: {
        download: 'ダウンロード',
        shapes: '図形',
        actions: '操作',
        view: '表示',
        grid: 'グリッド',
        code: 'コード',
        preview: 'プレビュー',
        templates: 'テンプレート',
        star: '星',
        heart: 'ハート',
        arrow: '矢印',
        cloud: '雲',
        bolt: '稲妻',
        moon: '月',
        tagline: '創造性を解き放とう',
        copied: 'コピーしました!',
        saved: '保存しました!',
        error: 'エラー'
    },
    ko: {
        download: '다운로드',
        shapes: '도형',
        actions: '동작',
        view: '보기',
        grid: '그리드',
        code: '코드',
        preview: '미리보기',
        templates: '템플릿',
        star: '별',
        heart: '하트',
        arrow: '화살표',
        cloud: '구름',
        bolt: '번개',
        moon: '달',
        tagline: '창의력을 날개 달자',
        copied: '복사됨!',
        saved: '저장됨!',
        error: '오류'
    }
};

// ============================================
// Default SVG Templates
// ============================================

const defaultSVG = `\x3csvg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"\x3e
  \x3c!-- Background --\x3e
  \x3crect width="400" height="300" fill="#FFF8F3" rx="12"/\x3e
  
  \x3c!-- Decorative Circle --\x3e
  \x3ccircle cx="320" cy="80" r="50" fill="#FF8C42" opacity="0.8"/\x3e
  
  \x3c!-- Main Shape --\x3e
  \x3crect x="100" y="90" width="120" height="120" fill="#4ECDC4" rx="16" transform="rotate(15 160 150)"/\x3e
  
  \x3c!-- Accent Shape --\x3e
  \x3ccircle cx="160" cy="150" r="30" fill="#FFD93D"/\x3e
  
  \x3c!-- Text --\x3e
  \x3ctext x="200" y="240" font-family="Nunito, sans-serif" font-size="24" font-weight="700" fill="#2D3436" text-anchor="middle"\x3eSVGEditor\x3c/text\x3e
  
  \x3c!-- Small decorative elements --\x3e
  \x3ccircle cx="60" cy="250" r="8" fill="#FF6B6B"/\x3e
  \x3ccircle cx="340" cy="240" r="12" fill="#FF8C42" opacity="0.6"/\x3e
\x3c/svg\x3e`;

const shapeTemplates = {
    rect: `\x3crect x="50" y="50" width="100" height="80" fill="#FF8C42" rx="8"/\x3e`,
    circle: `\x3ccircle cx="100" cy="100" r="50" fill="#4ECDC4"/\x3e`,
    ellipse: `\x3cellipse cx="100" cy="100" rx="70" ry="45" fill="#FFD93D"/\x3e`,
    line: `\x3cline x1="50" y1="150" x2="350" y2="50" stroke="#FF6B6B" stroke-width="4" stroke-linecap="round"/\x3e`,
    polygon: `\x3cpolygon points="200,30 240,100 200,170 160,100" fill="#6C5CE7"/\x3e`,
    path: `\x3cpath d="M50 150 Q125 50 200 150 T350 150" fill="none" stroke="#FF8C42" stroke-width="4" stroke-linecap="round"/\x3e`,
    text: `\x3ctext x="200" y="150" font-family="Nunito, sans-serif" font-size="32" font-weight="700" fill="#2D3436" text-anchor="middle"\x3eHello SVG\x3c/text\x3e`
};

const templates = {
    star: `\x3csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"\x3e
  \x3cpolygon points="100,20 120,80 180,80 130,120 150,180 100,140 50,180 70,120 20,80 80,80" fill="#FF8C42" stroke="#E87E3A" stroke-width="2"/\x3e
\x3c/svg\x3e`,
    heart: `\x3csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"\x3e
  \x3cpath d="M100 180 C100 180, 20 120, 20 70 C20 40, 45 20, 70 20 C85 20, 95 30, 100 40 C105 30, 115 20, 130 20 C155 20, 180 40, 180 70 C180 120, 100 180, 100 180 Z" fill="#FF6B6B" stroke="#E85555" stroke-width="2"/\x3e
\x3c/svg\x3e`,
    arrow: `\x3csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"\x3e
  \x3cpath d="M100 20 L160 80 L130 80 L130 180 L70 180 L70 80 L40 80 Z" fill="#4ECDC4" stroke="#3DBDB4" stroke-width="2"/\x3e
\x3c/svg\x3e`,
    cloud: `\x3csvg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg"\x3e
  \x3cpath d="M50 100 Q40 80 60 70 Q60 40 90 40 Q100 20 130 30 Q160 25 170 55 Q190 60 180 90 Q185 110 160 110 L60 110 Q40 110 50 100" fill="#95E1D3" stroke="#7DD3C0" stroke-width="2"/\x3e
\x3c/svg\x3e`,
    bolt: `\x3csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"\x3e
  \x3cpath d="M110 10 L80 90 L110 90 L90 190 L140 80 L110 80 L130 10 Z" fill="#FFD93D" stroke="#E5C42F" stroke-width="2"/\x3e
\x3c/svg\x3e`,
    moon: `\x3csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"\x3e
  \x3cpath d="M80 20 Q140 20 140 100 Q140 180 80 180 Q110 140 110 100 Q110 60 80 20" fill="#6C5CE7" stroke="#5B4BC4" stroke-width="2"/\x3e
  \x3cstars\x3e
    \x3ccircle cx="160" cy="40" r="3" fill="#FFD93D"/\x3e
    \x3ccircle cx="170" cy="100" r="2" fill="#FFD93D"/\x3e
    \x3ccircle cx="150" cy="150" r="4" fill="#FFD93D"/\x3e
  \x3c/stars\x3e
\x3c/svg\x3e`
};

// ============================================
// Application State
// ============================================

let currentLang = 'zh';
let history = [];
let historyIndex = -1;
let gridVisible = true;

// ============================================
// DOM Elements
// ============================================

const elements = {
    codeEditor: document.getElementById('codeEditor'),
    preview: document.getElementById('preview'),
    previewContainer: document.getElementById('previewContainer'),
    gridOverlay: document.getElementById('gridOverlay'),
    dimensions: document.getElementById('dimensions'),
    codeStatus: document.getElementById('codeStatus'),
    languageSelect: document.getElementById('languageSelect'),
    downloadBtn: document.getElementById('downloadBtn'),
    gridBtn: document.getElementById('gridBtn'),
    clearBtn: document.getElementById('clearBtn'),
    undoBtn: document.getElementById('undoBtn'),
    formatBtn: document.getElementById('formatBtn'),
    bgColor: document.getElementById('bgColor')
};

// ============================================
// Initialization
// ============================================

function init() {
    // Load default SVG
    elements.codeEditor.value = defaultSVG;
    updatePreview();
    saveState();
    
    // Setup event listeners
    setupEventListeners();
    
    // Initial translation
    updateLanguage();
}

function setupEventListeners() {
    // Editor input
    elements.codeEditor.addEventListener('input', debounce(() => {
        updatePreview();
    }, 300));
    
    elements.codeEditor.addEventListener('keydown', handleKeyDown);
    
    // Language selector
    elements.languageSelect.addEventListener('change', (e) => {
        currentLang = e.target.value;
        updateLanguage();
    });
    
    // Download button
    elements.downloadBtn.addEventListener('click', downloadSVG);
    
    // Grid toggle
    elements.gridBtn.addEventListener('click', toggleGrid);
    
    // Clear button
    elements.clearBtn.addEventListener('click', clearEditor);
    
    // Undo button
    elements.undoBtn.addEventListener('click', undo);
    
    // Format button
    elements.formatBtn.addEventListener('click', formatCode);
    
    // Background color
    elements.bgColor.addEventListener('input', (e) => {
        elements.previewContainer.style.background = e.target.value;
    });
    
    // Shape buttons
    document.querySelectorAll('.shape-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            insertShape(btn.dataset.shape);
        });
    });
    
    // Template buttons
    document.querySelectorAll('.template-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            loadTemplate(btn.dataset.template);
        });
    });
}

// ============================================
// Core Functions
// ============================================

function updatePreview() {
    const code = elements.codeEditor.value;
    
    try {
        elements.preview.innerHTML = code;
        
        // Update dimensions display
        const svg = elements.preview.querySelector('svg');
        if (svg) {
            const viewBox = svg.getAttribute('viewBox');
            if (viewBox) {
                const parts = viewBox.split(' ');
                elements.dimensions.textContent = `${parts[2]} x ${parts[3]}`;
            } else {
                const width = svg.getAttribute('width') || '400';
                const height = svg.getAttribute('height') || '300';
                elements.dimensions.textContent = `${width} x ${height}`;
            }
        }
        
        showStatus(i18n[currentLang].saved, false);
    } catch (error) {
        showStatus(i18n[currentLang].error, true);
        console.error('Preview error:', error);
    }
}

function updateLanguage() {
    const t = i18n[currentLang];
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key]) {
            el.textContent = t[key];
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLang;
}

function showStatus(message, isError) {
    elements.codeStatus.textContent = message;
    elements.codeStatus.className = 'code-status show' + (isError ? ' error' : '');
    
    setTimeout(() => {
        elements.codeStatus.classList.remove('show');
    }, 2000);
}

// ============================================
// Shape Insertion
// ============================================

function insertShape(shapeType) {
    const shape = shapeTemplates[shapeType];
    if (!shape) return;
    
    const code = elements.codeEditor.value;
    
    // Find position to insert (before closing </svg> tag)
    const svgEndMatch = code.match(/\x3c\/svg\x3e\s*$/i);
    
    if (svgEndMatch) {
        const insertPos = svgEndMatch.index;
        const newCode = code.slice(0, insertPos) + '  ' + shape + '\n' + code.slice(insertPos);
        elements.codeEditor.value = newCode;
    } else {
        // No </svg> tag found, wrap in svg
        elements.codeEditor.value = `\x3csvg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"\x3e\n  ${shape}\n\x3c/svg\x3e`;
    }
    
    updatePreview();
    saveState();
}

function loadTemplate(templateName) {
    const template = templates[templateName];
    if (template) {
        elements.codeEditor.value = template;
        updatePreview();
        saveState();
    }
}

// ============================================
// Actions
// ============================================

function clearEditor() {
    if (confirm('确定要清空编辑器吗？/ Are you sure you want to clear?')) {
        elements.codeEditor.value = defaultSVG;
        updatePreview();
        saveState();
    }
}

function downloadSVG() {
    const code = elements.codeEditor.value;
    const blob = new Blob([code], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'design.svg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    URL.revokeObjectURL(url);
    showStatus(i18n[currentLang].saved, false);
}

function toggleGrid() {
    gridVisible = !gridVisible;
    elements.gridOverlay.classList.toggle('hidden', !gridVisible);
    elements.gridBtn.classList.toggle('active', gridVisible);
}

function formatCode() {
    const code = elements.codeEditor.value;
    
    // Simple formatting
    let formatted = code
        .replace(/\x3e\s*\x3c/g, '\x3e\n\x3c')
        .replace(/\n\s*\n/g, '\n')
        .trim();
    
    // Add indentation
    let indent = 0;
    const lines = formatted.split('\n');
    const indented = lines.map(line => {
        const trimmed = line.trim();
        
        if (trimmed.startsWith('\x3c/') || trimmed.startsWith('\x3c!--/')) {
            indent = Math.max(0, indent - 1);
        }
        
        const result = '  '.repeat(indent) + trimmed;
        
        if (trimmed.startsWith('\x3c') && !trimmed.startsWith('\x3c/') && 
            !trimmed.endsWith('//\x3e') && !trimmed.endsWith('--\x3e')) {
            indent++;
        }
        
        return result;
    });
    
    elements.codeEditor.value = indented.join('\n');
    saveState();
}

// ============================================
// History (Undo)
// ============================================

function saveState() {
    const code = elements.codeEditor.value;
    
    // Remove future states if we're not at the end
    if (historyIndex < history.length - 1) {
        history = history.slice(0, historyIndex + 1);
    }
    
    history.push(code);
    historyIndex++;
    
    // Limit history size
    if (history.length > 50) {
        history.shift();
        historyIndex--;
    }
}

function undo() {
    if (historyIndex > 0) {
        historyIndex--;
        elements.codeEditor.value = history[historyIndex];
        updatePreview();
    }
}

// ============================================
// Keyboard Handler
// ============================================

function handleKeyDown(e) {
    // Tab indentation
    if (e.key === 'Tab') {
        e.preventDefault();
        const start = elements.codeEditor.selectionStart;
        const end = elements.codeEditor.selectionEnd;
        
        elements.codeEditor.value = 
            elements.codeEditor.value.substring(0, start) + 
            '  ' + 
            elements.codeEditor.value.substring(end);
        
        elements.codeEditor.selectionStart = start + 2;
        elements.codeEditor.selectionEnd = start + 2;
    }
    
    // Ctrl/Cmd + S to save/download
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        downloadSVG();
    }
    
    // Ctrl/Cmd + Z to undo
    if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) {
        e.preventDefault();
        undo();
    }
    
    // Save state on certain keys
    if (e.key === 'Enter' || e.key === '}' || e.key === '>') {
        saveState();
    }
}

// ============================================
// Utility Functions
// ============================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// Start the app
// ============================================

document.addEventListener('DOMContentLoaded', init);
