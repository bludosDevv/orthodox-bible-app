// ============================================
// ORTHODOX BIBLE APP - MAIN SCRIPT
// ============================================

// Global State
let bibleData = null;
let currentBook = 'Genesis';
let currentChapter = 1;
let currentCatechismBook = 1;
let currentTestament = 'all';
let isDarkMode = localStorage.getItem('darkMode') === 'true';
let dailyStreak = parseInt(localStorage.getItem('dailyStreak')) || 0;

// Church Father Interpretations
const patristicInterpretations = {
    'John 1:1': 'Saint John Chrysostom: "The Word is the Son of God, eternally begotten of the Father. In Him all things were made, and without Him nothing was made that has been made."',
    'Genesis 1:1': 'Saint Basil the Great: "In the beginning God created the heavens and the earth. This beginning is not a beginning of time, but of creation itself. God is beyond time, eternal and unchanging."',
    'John 3:16': 'Saint Athanasius: "God became man so that man might become god. This is the great mystery of the Incarnation - God\'s infinite love for His creation."',
    'Matthew 5:8': 'Saint Gregory of Nazianzus: "Blessed are the pure in heart, for they shall see God. Purity of heart is achieved through prayer, fasting, and the grace of God."'
};

// Daily Quotes from Church Fathers
const dailyQuotes = [
    { text: '"God became man so that man might become god."', author: 'Saint Athanasius of Alexandria' },
    { text: '"Prayer is the raising of the mind and heart to God."', author: 'Saint John of Damascus' },
    { text: '"The fear of God is the beginning of wisdom."', author: 'Saint Basil the Great' },
    { text: '"Love covers a multitude of sins."', author: 'Saint Peter the Apostle' },
    { text: '"Through the prayers of the Mother of God, save us."', author: 'Orthodox Liturgy' },
    { text: '"The kingdom of God is within you."', author: 'Jesus Christ' }
];

// Orthodox Saints
const orthodoxSaints = [
    {
        name: 'Saint John Chrysostom',
        title: 'Archbishop of Constantinople',
        icon: '✨',
        bio: 'Known as the "Golden-Mouthed" for his eloquent preaching. One of the greatest Church Fathers and theologians of the Eastern Orthodox Church.',
        period: '347-407 AD'
    },
    {
        name: 'Saint Basil the Great',
        title: 'Bishop of Caesarea',
        icon: '📖',
        bio: 'One of the Cappadocian Fathers. Established monastic traditions and wrote extensively on theology and the Holy Spirit.',
        period: '329-379 AD'
    },
    {
        name: 'Saint Gregory of Nazianzus',
        title: 'Theologian',
        icon: '✝️',
        bio: 'One of the Cappadocian Fathers. Defended the Orthodox faith against heresy and wrote profound theological works.',
        period: '329-390 AD'
    },
    {
        name: 'Saint Athanasius',
        title: 'Patriarch of Alexandria',
        icon: '⛪',
        bio: 'Defender of Orthodoxy against Arianism. His theological works shaped Eastern Orthodox Christology.',
        period: '296-373 AD'
    },
    {
        name: 'Saint John of Damascus',
        title: 'Church Father',
        icon: '🙏',
        bio: 'Last of the Greek Church Fathers. Systematized Orthodox theology and defended the veneration of icons.',
        period: '676-749 AD'
    },
    {
        name: 'Saint Maximus the Confessor',
        title: 'Theologian',
        icon: '📚',
        bio: 'Great mystical theologian. His works on theosis (deification) are foundational to Orthodox spirituality.',
        period: '580-662 AD'
    }
];

// Catechism Books
const catechismBooks = [
    {
        id: 1,
        title: 'Orthodox Dogmatic Theology',
        author: 'Metropolitan Macarius',
        category: 'Theology'
    },
    {
        id: 2,
        title: 'On the Incarnation',
        author: 'Saint Athanasius',
        category: 'Christology'
    },
    {
        id: 3,
        title: 'On the Holy Spirit',
        author: 'Saint Basil the Great',
        category: 'Pneumatology'
    },
    {
        id: 4,
        title: 'Exact Exposition of the Orthodox Faith',
        author: 'Saint John of Damascus',
        category: 'Dogmatics'
    }
];

const catechismContent = {
    1: `
        <h3>Orthodox Dogmatic Theology</h3>
        <p><strong>By Metropolitan Macarius</strong></p>
        <h4>Introduction to Orthodox Theology</h4>
        <p>Orthodox theology is the systematic presentation of the truths revealed by God through Jesus Christ and preserved in the Church. It is based on Sacred Scripture, Sacred Tradition, and the teachings of the Church Fathers.</p>
        <h4>The Nature of God</h4>
        <p>God is infinite, eternal, almighty, and perfect. He is the Creator of all things visible and invisible. God exists in three persons: the Father, the Son, and the Holy Spirit, yet there is only one God. This is the mystery of the Holy Trinity.</p>
        <h4>The Trinity</h4>
        <p>The Trinity is the central mystery of Orthodox Christianity. Each person of the Trinity is fully God, yet they are one God. The Father is God, the Son is God, and the Holy Spirit is God, but they are not three gods.</p>
    `,
    2: `
        <h3>On the Incarnation</h3>
        <p><strong>By Saint Athanasius</strong></p>
        <h4>The Mystery of the Incarnation</h4>
        <p>God the Word became man so that man might become god. This is the great exchange - the infinite became finite, the eternal entered time, the invisible became visible.</p>
        <h4>The Purpose of the Incarnation</h4>
        <p>The Son of God became man to save us from sin and death. Through His incarnation, life and immortality have been brought to light. The Word assumed human nature so that we might be deified.</p>
        <h4>The Virgin Mary</h4>
        <p>The Holy Virgin Mary, the Theotokos (Mother of God), was chosen by God to bear His Son. She remained a virgin before, during, and after the birth of Christ. She is honored as the greatest of all saints.</p>
    `,
    3: `
        <h3>On the Holy Spirit</h3>
        <p><strong>By Saint Basil the Great</strong></p>
        <h4>The Nature of the Holy Spirit</h4>
        <p>The Holy Spirit is the third person of the Trinity, proceeding from the Father. He is God, equal in substance and honor with the Father and the Son. He is the Lord and giver of life.</p>
        <h4>The Work of the Holy Spirit</h4>
        <p>The Holy Spirit sanctifies all things. He dwells in the Church and in the hearts of believers. Through the Holy Spirit, we are born again and transformed into the image of Christ.</p>
        <h4>The Gifts of the Holy Spirit</h4>
        <p>The Holy Spirit distributes various gifts to believers for the edification of the Church. These gifts include wisdom, knowledge, faith, healing, miracles, prophecy, and many others.</p>
    `,
    4: `
        <h3>Exact Exposition of the Orthodox Faith</h3>
        <p><strong>By Saint John of Damascus</strong></p>
        <h4>Part I: Concerning God and Creation</h4>
        <p>God is infinite, eternal, and unchangeable. He is the source of all being and goodness. All creation depends upon God for its existence and sustenance.</p>
        <h4>Part II: Concerning the Trinity</h4>
        <p>The Trinity is the central mystery of Orthodox Christianity. There are three persons in one God: the Father, the Son, and the Holy Spirit. Each person is fully God, yet there is only one God.</p>
        <h4>Part III: Concerning Icons</h4>
        <p>Icons are not idols but windows to the divine. The veneration of icons is the veneration of what they represent. Through icons, we commune with the saints and with God Himself.</p>
    `
};

// Initialize App
document.addEventListener('DOMContentLoaded', async function() {
    await initializeApp();
});

async function initializeApp() {
    // Load Bible Data
    try {
        const response = await fetch('bible-data.json');
        bibleData = await response.json();
        console.log('Bible data loaded:', bibleData.books.length, 'books');
    } catch (error) {
        console.error('Error loading Bible data:', error);
    }

    // Set dark mode
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }

    // Initialize Pages
    renderBibleBooks();
    renderBibleChapter(currentBook, currentChapter);
    renderCatechismBooks();
    renderCatechismContent(currentCatechismBook);
    renderSaints();
    setDailyVerse();
    setDailyQuote();
    updateStreak();

    // Setup Event Listeners
    setupEventListeners();
}

// ============================================
// EVENT LISTENERS
// ============================================

function setupEventListeners() {
    // Bottom Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            const pageId = this.dataset.page;
            switchPage(pageId);
        });
    });

    // Bible Controls
    document.getElementById('prevBtn').addEventListener('click', previousChapter);
    document.getElementById('nextBtn').addEventListener('click', nextChapter);
    document.getElementById('chapterSelect').addEventListener('change', function(e) {
        currentChapter = parseInt(e.target.value);
        renderBibleChapter(currentBook, currentChapter);
    });

    // Testament Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentTestament = this.dataset.testament;
            renderBibleBooks();
        });
    });

    // Search
    document.getElementById('bibleSearch').addEventListener('input', function(e) {
        searchBible(e.target.value);
    });

    // Modal Close
    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.getElementById('verseModal').addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });
}

// ============================================
// PAGE NAVIGATION
// ============================================

function switchPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    document.getElementById(pageId).classList.add('active');

    // Update nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.page === pageId) {
            item.classList.add('active');
        }
    });

    // Scroll to top
    window.scrollTo(0, 0);
}

// ============================================
// BIBLE FUNCTIONS
// ============================================

function renderBibleBooks() {
    if (!bibleData) return;

    const booksList = document.getElementById('booksList');
    booksList.innerHTML = '';

    let filteredBooks = bibleData.books;

    filteredBooks.forEach(book => {
        const bookItem = document.createElement('button');
        bookItem.className = `book-item ${book.name === currentBook ? 'active' : ''}`;
        bookItem.textContent = book.name;
        bookItem.addEventListener('click', () => {
            currentBook = book.name;
            currentChapter = 1;
            renderBibleBooks();
            renderBibleChapter(currentBook, currentChapter);
        });
        booksList.appendChild(bookItem);
    });
}

function renderBibleChapter(bookName, chapter) {
    if (!bibleData) return;

    const bookData = bibleData.verses[bookName];
    if (!bookData) return;

    // Update header
    document.getElementById('currentBook').textContent = `${bookName} ${chapter}`;

    // Update chapter select
    const chapterSelect = document.getElementById('chapterSelect');
    chapterSelect.innerHTML = '';
    const chapterCount = Object.keys(bookData.chapters).length;
    for (let i = 1; i <= chapterCount; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `Chapter ${i}`;
        if (i === chapter) option.selected = true;
        chapterSelect.appendChild(option);
    }

    // Render verses
    const versesContainer = document.getElementById('versesContainer');
    versesContainer.innerHTML = '';

    const verses = bookData.chapters[chapter] || [];
    verses.forEach(verse => {
        const verseDiv = document.createElement('div');
        verseDiv.className = 'verse';
        verseDiv.innerHTML = `
            <span class="verse-number">${verse.verse}</span>
            <span class="verse-text">${verse.text}</span>
        `;
        verseDiv.addEventListener('click', () => {
            openVerseModal(`${bookName} ${chapter}:${verse.verse}`, verse.text);
        });
        versesContainer.appendChild(verseDiv);
    });

    // Update nav buttons
    updateChapterNavigation();
}

function updateChapterNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    const bookData = bibleData.verses[currentBook];
    const chapterCount = Object.keys(bookData.chapters).length;

    const isFirstBook = currentBook === bibleData.books[0].name;
    const isLastBook = currentBook === bibleData.books[bibleData.books.length - 1].name;

    prevBtn.disabled = currentChapter === 1 && isFirstBook;
    nextBtn.disabled = currentChapter === chapterCount && isLastBook;
}

function previousChapter() {
    const bookData = bibleData.verses[currentBook];
    const chapterCount = Object.keys(bookData.chapters).length;

    if (currentChapter > 1) {
        currentChapter--;
    } else {
        const currentIndex = bibleData.books.findIndex(b => b.name === currentBook);
        if (currentIndex > 0) {
            currentBook = bibleData.books[currentIndex - 1].name;
            const prevBookData = bibleData.verses[currentBook];
            currentChapter = Object.keys(prevBookData.chapters).length;
        }
    }
    renderBibleBooks();
    renderBibleChapter(currentBook, currentChapter);
}

function nextChapter() {
    const bookData = bibleData.verses[currentBook];
    const chapterCount = Object.keys(bookData.chapters).length;

    if (currentChapter < chapterCount) {
        currentChapter++;
    } else {
        const currentIndex = bibleData.books.findIndex(b => b.name === currentBook);
        if (currentIndex < bibleData.books.length - 1) {
            currentBook = bibleData.books[currentIndex + 1].name;
            currentChapter = 1;
        }
    }
    renderBibleBooks();
    renderBibleChapter(currentBook, currentChapter);
}

function searchBible(query) {
    if (!query.trim() || !bibleData) {
        renderBibleChapter(currentBook, currentChapter);
        return;
    }

    const versesContainer = document.getElementById('versesContainer');
    versesContainer.innerHTML = '';

    let results = 0;
    for (const bookName in bibleData.verses) {
        const bookData = bibleData.verses[bookName];
        for (const chapterNum in bookData.chapters) {
            const verses = bookData.chapters[chapterNum];
            verses.forEach(verse => {
                if (verse.text.toLowerCase().includes(query.toLowerCase())) {
                    const verseDiv = document.createElement('div');
                    verseDiv.className = 'verse';
                    verseDiv.innerHTML = `
                        <span class="verse-number">${verse.verse}</span>
                        <span class="verse-text">${verse.text}</span>
                    `;
                    verseDiv.addEventListener('click', () => {
                        openVerseModal(`${bookName} ${chapterNum}:${verse.verse}`, verse.text);
                    });
                    versesContainer.appendChild(verseDiv);
                    results++;
                }
            });
        }
    }

    if (results === 0) {
        versesContainer.innerHTML = '<p style="text-align: center; color: var(--text-muted); padding: 40px;">No verses found matching your search.</p>';
    }
}

// ============================================
// VERSE MODAL
// ============================================

function openVerseModal(reference, text) {
    const modal = document.getElementById('verseModal');
    document.getElementById('modalVerseRef').textContent = reference;
    document.getElementById('modalVerseText').textContent = text;

    const patristicContent = document.getElementById('patristicContent');
    const commentary = patristicInterpretations[reference] || 'Church Father commentary not available for this verse.';
    patristicContent.innerHTML = `<p>${commentary}</p>`;

    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('verseModal').classList.remove('active');
}

// ============================================
// CATECHISM FUNCTIONS
// ============================================

function renderCatechismBooks() {
    const catechismBooksDiv = document.getElementById('catechismBooks');
    catechismBooksDiv.innerHTML = '';

    catechismBooks.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.className = `catechism-book ${book.id === currentCatechismBook ? 'active' : ''}`;
        bookDiv.innerHTML = `
            <strong>${book.title}</strong>
            <p>${book.author}</p>
        `;
        bookDiv.addEventListener('click', () => {
            currentCatechismBook = book.id;
            renderCatechismBooks();
            renderCatechismContent(book.id);
        });
        catechismBooksDiv.appendChild(bookDiv);
    });
}

function renderCatechismContent(bookId) {
    const contentDiv = document.getElementById('catechismContent');
    contentDiv.innerHTML = catechismContent[bookId] || '<p>Content not available.</p>';
}

// ============================================
// SAINTS FUNCTIONS
// ============================================

function renderSaints() {
    const saintsGrid = document.getElementById('saintsGrid');
    saintsGrid.innerHTML = '';

    orthodoxSaints.forEach((saint, index) => {
        const saintCard = document.createElement('div');
        saintCard.className = 'saint-card glass-effect';
        saintCard.style.animationDelay = `${index * 0.1}s`;
        saintCard.innerHTML = `
            <div class="saint-icon">${saint.icon}</div>
            <div class="saint-name">${saint.name}</div>
            <div class="saint-title">${saint.title}</div>
            <div class="saint-bio">${saint.bio}</div>
            <p class="saint-period">${saint.period}</p>
        `;
        saintsGrid.appendChild(saintCard);
    });
}

// ============================================
// HOME PAGE FUNCTIONS
// ============================================

function setDailyVerse() {
    const verses = [
        { ref: 'John 1:1', text: '"In the beginning was the Word, and the Word was with God, and the Word was God."' },
        { ref: 'John 3:16', text: '"For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life."' },
        { ref: 'Matthew 5:8', text: '"Blessed are the pure in heart, for they shall see God."' },
        { ref: 'Psalm 23:1', text: '"The LORD is my shepherd; I shall not want."' },
        { ref: 'Romans 8:28', text: '"And we know that all things work together for good to those who love God."' }
    ];

    const today = new Date().getDate();
    const verse = verses[today % verses.length];

    document.getElementById('dailyVerseText').textContent = `"${verse.text}" - ${verse.ref}`;
    document.getElementById('dailyVerseRef').textContent = verse.ref;
}

function setDailyQuote() {
    const today = new Date().getDate();
    const quote = dailyQuotes[today % dailyQuotes.length];

    document.getElementById('dailyQuoteText').textContent = quote.text;
    document.getElementById('dailyQuoteAuthor').textContent = '— ' + quote.author;
}

function updateStreak() {
    const lastDate = localStorage.getItem('lastVisitDate');
    const today = new Date().toDateString();

    if (lastDate !== today) {
        dailyStreak++;
        localStorage.setItem('dailyStreak', dailyStreak);
        localStorage.setItem('lastVisitDate', today);
    }

    document.getElementById('streakCount').textContent = dailyStreak;
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});
