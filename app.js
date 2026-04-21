// ===== MAKTABATY - BOOK LIBRARY SYSTEM =====

const SUPABASE_URL  = 'https://unjbytljocengnbedpwr.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVuamJ5dGxqb2NlbmduYmVkcHdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3Njg1MjEsImV4cCI6MjA5MjM0NDUyMX0.2uf83L6YyWx7MUQufTU38HmmFuFhNl0YJ6fD0C2TZ-E';
// ----- BOOK DATA -----
const defaultBooks = [
  {
    id: 1,
    titleEn: "Messages from the Prophet",
    titleAr: "رسائل من النبي",
    authorEn: "Adham Sharqawi",
    authorAr: "أدهم الشرقاوي",
    category: "religion",
    year: 2020,
    pages: 250,
    rating: 4.8,
    color: "#1a5c3a",
    pdfData: null,
    wallpaper: "",
    descEn: "Spiritual reflections inspired by the life of the Prophet.",
    descAr: "تأملات روحية مستوحاة من سيرة النبي.",
    content: [],
    },   
  {
    id: 2,
    titleEn: "On the Path of Prophethood",
    titleAr: "على منهاج النبوة",
    authorEn: "Adham Sharqawi",
    authorAr: "أدهم الشرقاوي",
    category: "religion",
    year: 2020,
    pages: 220,
    rating: 4.7,
    color: "#1a5c3a",
    pdfData: "https://unjbytljocengnbedpwr.supabase.co/storage/v1/object/public/books/ala-minhaj-alnobowa.pdf.pdf",
    wallpaper: "",
    descEn: "Lessons from prophetic guidance.",
    descAr: "دروس من منهج النبوة.",
    content: [{ titleEn: "Chapter 1", titleAr: "الفصل الأول", textEn: "Open PDF to read the full book.", textAr: "افتح PDF لقراءة الكتاب الكامل." }]
  },
  {
    id: 3,
    titleEn: "They Deceived You",
    titleAr: "خدعوك فقالوا",
    authorEn: "Mostafa Hosny",
    authorAr: "مصطفى حسني",
    category: "religion",
    year: 2018,
    pages: 200,
    rating: 4.6,
    color: "#1a5c3a",
    pdfData: "https://unjbytljocengnbedpwr.supabase.co/storage/v1/object/public/books/khadaook-faqaloo.pdf.pdf",
    wallpaper: "",
    descEn: "Correcting misconceptions about religion.",
    descAr: "تصحيح مفاهيم خاطئة عن الدين.",
    content: [{ titleEn: "Chapter 1", titleAr: "الفصل الأول", textEn: "Open PDF to read the full book.", textAr: "افتح PDF لقراءة الكتاب الكامل." }]
  },
  {
    id: 4,
    titleEn: "An Idea from Every Verse",
    titleAr: "من كل آية فكرة",
    authorEn: "Tariq Al-Suqair",
    authorAr: "طارق الصقير",
    category: "religion",
    year: 2019,
    pages: 180,
    rating: 4.5,
    color: "#1a5c3a",
    pdfData: null,
    wallpaper: "",
    descEn: "Reflections on Quranic verses.",
    descAr: "تأملات في آيات القرآن.",
    content: []
  },
  {
    id: 5,
    titleEn: "Messages from Ali ibn Abi Talib",
    titleAr: "رسائل من علي بن أبي طالب",
    authorEn: "Unknown",
    authorAr: "مجهول",
    category: "religion",
    year: 0,
    pages: 150,
    rating: 4.7,
    color: "#1a5c3a",
    pdfData: null,
    wallpaper: "",
    descEn: "Wisdom and sayings of Ali ibn Abi Talib.",
    descAr: "حكم وأقوال علي بن أبي طالب.",
    content: []
  },
  {
    id: 6,
    titleEn: "Messages from Umar ibn Al-Khattab",
    titleAr: "رسائل من عمر بن الخطاب",
    authorEn: "Unknown",
    authorAr: "مجهول",
    category: "religion",
    year: 0,
    pages: 150,
    rating: 4.7,
    color: "#1a5c3a",
    pdfData: null,
    wallpaper: "",
    descEn: "Wisdom and sayings of Umar ibn Al-Khattab.",
    descAr: "حكم وأقوال عمر بن الخطاب.",
    content: []
  },

  // روايات
  {
    id: 7,
    titleEn: "Kalila and Dimna",
    titleAr: "كليلة ودمنة",
    authorEn: "Heritage",
    authorAr: "تراث",
    category: "fiction",
    year: 0,
    pages: 300,
    rating: 4.8,
    color: "#2c5f7c",
    pdfData: null,
    wallpaper: "",
    descEn: "Ancient moral stories.",
    descAr: "قصص تراثية تحمل حكم وأمثال.",
    content: []
  },
  {
    id: 8,
    titleEn: "The Brothers",
    titleAr: "الأخوان",
    authorEn: "Beeza",
    authorAr: "بيزا",
    category: "fiction",
    year: 2020,
    pages: 200,
    rating: 4.3,
    color: "#2c5f7c",
    pdfData: null,
    wallpaper: "",
    descEn: "A narrative novel.",
    descAr: "رواية تعتمد السرد القصصي.",
    content: []
  },

  // علوم
  {
    id: 9,
    titleEn: "Reflections",
    titleAr: "وقفات",
    authorEn: "Abdul Karim Bakkar",
    authorAr: "عبد الكريم بكار",
    category: "science",
    year: 2015,
    pages: 180,
    rating: 4.6,
    color: "#4a7c59",
    pdfData: null,
    wallpaper: "",
    descEn: "Thoughts on education and life.",
    descAr: "أفكار في التربية والحياة.",
    content: []
  },
  {
    id: 10,
    titleEn: "My Daughter",
    titleAr: "يابنتي",
    authorEn: "Ali Al-Tantawi",
    authorAr: "علي الطنطاوي",
    category: "science",
    year: 1990,
    pages: 160,
    rating: 4.7,
    color: "#4a7c59",
    pdfData: null,
    wallpaper: "",
    descEn: "Advice on life and society.",
    descAr: "نصائح اجتماعية وتربوية.",
    content: []
  },

  // تاريخ
  {
    id: 11,
    titleEn: "And Those Days",
    titleAr: "وتلك الأيام",
    authorEn: "Adham Sharqawi",
    authorAr: "أدهم الشرقاوي",
    category: "history",
    year: 2021,
    pages: 220,
    rating: 4.6,
    color: "#8B4513",
    pdfData: null,
    wallpaper: "",
    descEn: "Stories inspired by historical events.",
    descAr: "قصص مستوحاة من أحداث تاريخية.",
    content: []
  },

  // شعر
  {
    id: 12,
    titleEn: "Morning Talks",
    titleAr: "حديث الصباح",
    authorEn: "Unknown",
    authorAr: "مجهول",
    category: "poetry",
    year: 0,
    pages: 120,
    rating: 4.5,
    color: "#8B1A3A",
    pdfData: null,
    wallpaper: "",
    descEn: "Literary poetic reflections.",
    descAr: "نصوص أدبية بروح شعرية.",
    content: []
  }
];
// const defaultBooks = [
//   {
//     id: 1, titleEn: "One Thousand and One Nights", titleAr: "ألف ليلة وليلة",
//     authorEn: "Anonymous", authorAr: "مجهول",
//     category: "fiction", year: 850, pages: 820, rating: 4.8,
//     color: "#2c5f7c", pdfData: null,
//     wallpaper: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&h=400&fit=crop",
//     authorDescEn: "A collection compiled over many centuries by various authors, translators, and scholars across the Middle East and Central Asia during the Islamic Golden Age.",
//     authorDescAr: "مجموعة جُمعت على مدى قرون عديدة من قبل مؤلفين ومترجمين وعلماء مختلفين من الشرق الأوسط خلال العصر الذهبي الإسلامي.",
//     descEn: "A collection of Middle Eastern folk tales compiled during the Islamic Golden Age.",
//     descAr: "مجموعة من الحكايات الشعبية الشرق أوسطية التي جمعت خلال العصر الذهبي الإسلامي.",
//     content: [
//       { titleEn: "The Merchant and the Genie", titleAr: "التاجر والجني", textEn: "In the name of God, the Compassionate, the Merciful. There was once a wealthy merchant who traveled frequently. One hot day, he sat under a tree to rest and eat some dates. As he tossed a date pit aside, a fearsome genie appeared before him, sword drawn, claiming the pit had killed his invisible son.\n\nThe merchant fell to his knees and begged for mercy. The genie gave him one year to set his affairs in order before returning to face his fate.", textAr: "بسم الله الرحمن الرحيم. كان ياما كان تاجر ثري يسافر كثيرًا. في يوم حار، جلس تحت شجرة ليستريح ويأكل بعض التمر. وعندما رمى نواة تمرة، ظهر أمامه مارد مخيف." },
//       { titleEn: "The Fisherman and the Jinni", titleAr: "الصياد والجني", textEn: "A poor fisherman cast his net four times into the sea. The first three times yielded only rubbish, but the fourth time brought forth a sealed copper jar. When he opened it, a great column of smoke rose and formed into a massive jinni who declared he would kill the fisherman.\n\nThe clever fisherman challenged the jinni, saying he could not believe such a vast creature had fit within the tiny jar.", textAr: "صياد فقير ألقى شبكته أربع مرات في البحر. في المرات الثلاث الأولى لم يحصل إلا على قمامة." }
//     ]
//   },
//   {
//     id: 2, titleEn: "The Muqaddimah", titleAr: "المقدمة",
//     authorEn: "Ibn Khaldun", authorAr: "ابن خلدون",
//     category: "history", year: 1377, pages: 1475, rating: 4.9,
//     color: "#8B4513", pdfData: null,
//     wallpaper: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&h=400&fit=crop",
//     authorDescEn: "Abu Zayd Abd al-Rahman ibn Muhammad ibn Khaldun (1332\u20131406) was a North African Arab historian, sociologist, and philosopher, widely regarded as the father of modern sociology and historiography.",
//     authorDescAr: "أبو زيد عبد الرحمن بن محمد بن خلدون (1332-1406) مؤرخ وعالم اجتماع وفيلسوف عربي، يُعتبر أب علم الاجتماع والتأريخ الحديث.",
//     descEn: "A masterwork on the philosophy of history and sociology by the great Arab historian Ibn Khaldun.",
//     descAr: "تحفة في فلسفة التاريخ وعلم الاجتماع للمؤرخ العربي الكبير ابن خلدون.",
//     content: [
//       { titleEn: "On Human Civilization", titleAr: "في العمران البشري", textEn: "Human social organization is something necessary. The philosophers expressed this fact by saying: Man is political by nature. That is, he cannot do without the social organization for which the philosophers use the technical term polis.\n\nThe reason for this is that God created man in a form that can live and subsist only with the help of food.", textAr: "الاجتماع الإنساني ضروري. وعبر الفلاسفة عن ذلك بقولهم: الإنسان مدني بالطبع." }
//     ]
//   },
//   {
//     id: 3, titleEn: "The Prophet", titleAr: "النبي",
//     authorEn: "Kahlil Gibran", authorAr: "جبران خليل جبران",
//     category: "philosophy", year: 1923, pages: 107, rating: 4.7,
//     color: "#6b3a5d", pdfData: null,
//     wallpaper: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop",
//     authorDescEn: "Gibran Khalil Gibran (1883\u20131931) was a Lebanese-American writer, poet, and visual artist. Best known for 'The Prophet,' one of the most translated books in history.",
//     authorDescAr: "جبران خليل جبران (1883-1931) كاتب وشاعر وفنان تشكيلي لبناني أمريكي. اشتهر بكتابه 'النبي' وهو من أكثر الكتب ترجمة في التاريخ.",
//     descEn: "A collection of 26 prose poetry fables on love, freedom, and the human spirit.",
//     descAr: "مجموعة من 26 خرافة شعرية نثرية عن الحب والحرية والروح الإنسانية.",
//     content: [
//       { titleEn: "On Love", titleAr: "في الحب", textEn: "When love beckons to you, follow him, though his ways are hard and steep. And when his wings enfold you yield to him, though the sword hidden among his pinions may wound you.\n\nFor even as love crowns you so shall he crucify you. Even as he is for your growth so is he for your pruning.", textAr: "حين يناديك الحب فاتبعه وإن كانت طرقه صعبة ووعرة." }
//     ]
//   },
//   {
//     id: 4, titleEn: "The Algebra of Al-Khwarizmi", titleAr: "الجبر والمقابلة",
//     authorEn: "Al-Khwarizmi", authorAr: "الخوارزمي",
//     category: "science", year: 820, pages: 320, rating: 4.6,
//     color: "#4a7c59", pdfData: null,
//     wallpaper: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
//     authorDescEn: "Muhammad ibn Musa al-Khwarizmi (c. 780\u2013850) was a Persian polymath who produced vastly influential works in mathematics, astronomy, and geography. His name gave us the word 'algorithm.'",
//     authorDescAr: "محمد بن موسى الخوارزمي (780-850 تقريباً) عالم موسوعي فارسي أنتج أعمالاً مؤثرة في الرياضيات والفلك. من اسمه اشتُقت كلمة 'خوارزمية'.",
//     descEn: "The foundational text of algebra by the Persian mathematician Muhammad ibn Musa al-Khwarizmi.",
//     descAr: "النص التأسيسي للجبر كتبه عالم الرياضيات محمد بن موسى الخوارزمي.",
//     content: [
//       { titleEn: "The Six Standard Forms", titleAr: "الأنواع الستة المعيارية", textEn: "In the Name of God, gracious and merciful. This is the book of Algebra and Almucabola, concerning arithmetical and geometrical problems.\n\nI discovered that the numbers which are required in calculation by Restoration and Comparison are of three kinds: roots, squares, and simple numbers.", textAr: "بسم الله الرحمن الرحيم. هذا كتاب الجبر والمقابلة في الحساب والهندسة." }
//     ]
//   },
//   {
//     id: 5, titleEn: "Diwan of Al-Mutanabbi", titleAr: "ديوان المتنبي",
//     authorEn: "Al-Mutanabbi", authorAr: "المتنبي",
//     category: "poetry", year: 965, pages: 450, rating: 4.8,
//     color: "#8B1A3A", pdfData: null,
//     wallpaper: "https://images.unsplash.com/photo-1472457897821-70d241adcdc9?w=600&h=400&fit=crop",
//     authorDescEn: "Abu al-Tayyib Ahmad ibn al-Husayn al-Mutanabbi (915\u2013965) is widely regarded as the greatest poet in the Arabic language. His verses on courage and ambition echo through the centuries.",
//     authorDescAr: "أبو الطيب أحمد بن الحسين المتنبي (915-965) يُعتبر أعظم شاعر في اللغة العربية. تردد أبياته عن الشجاعة والطموح عبر القرون.",
//     descEn: "The collected poems of Abu al-Tayyib al-Mutanabbi, the greatest poet in the Arabic language.",
//     descAr: "ديوان أبو الطيب المتنبي، أعظم شاعر في اللغة العربية.",
//     content: [
//       { titleEn: "On Ambition", titleAr: "في الطموح", textEn: "The great poet al-Mutanabbi wrote verses that have echoed through the centuries. Among his most famous lines he placed himself among the immortals of Arabic literature.\n\nHis verses on courage and determination remain a source of inspiration across generations.", textAr: "كتب أبو الطيب المتنبي أبياتًا ردد صداها عبر القرون." }
//     ]
//   },
//   {
//     id: 6, titleEn: "Revival of Religious Sciences", titleAr: "إحياء علوم الدين",
//     authorEn: "Al-Ghazali", authorAr: "الإمام الغزالي",
//     category: "religion", year: 1096, pages: 2000, rating: 4.9,
//     color: "#1a5c3a", pdfData: null,
//     wallpaper: "https://images.unsplash.com/photo-1585036156171-384164a8c696?w=600&h=400&fit=crop",
//     authorDescEn: "Abu Hamid Muhammad ibn Muhammad al-Ghazali (1058\u20131111) was a Persian theologian, jurist, philosopher, and mystic \u2014 one of the most influential Muslim thinkers in history.",
//     authorDescAr: "أبو حامد محمد بن محمد الغزالي (1058-1111) عالم دين وفقيه وفيلسوف ومتصوف فارسي \u2014 يُعد من أكثر المفكرين المسلمين تأثيراً في التاريخ.",
//     descEn: "A comprehensive guide to Islamic spirituality and ethics by Abu Hamid al-Ghazali.",
//     descAr: "دليل شامل للروحانية والأخلاق الإسلامية لأبو حامد الغزالي.",
//     content: [
//       { titleEn: "The Book of Knowledge", titleAr: "كتاب العلم", textEn: "In the Name of God, the Merciful, the Compassionate. Know that knowledge is the foundation of all action, and action without knowledge is like a building without a foundation.\n\nThe excellence of knowledge over wealth is clear, for knowledge guards you while you must guard wealth.", textAr: "بسم الله الرحمن الرحيم. اعلم أن العلم أساس كل عمل." }
//     ]
//   }
// ];

// ----- STATE -----
let books = [];
let favorites = JSON.parse(localStorage.getItem('maktabaty_favorites')) || [];
let currentLang = localStorage.getItem('maktabaty_lang') || 'en';
let currentTheme = localStorage.getItem('maktabaty_theme') || 'dark';
let isAdminLoggedIn = false;
let currentPage = 'library';
let deleteTargetId = null;
let deleteCategoryTargetId = null;

// Custom categories (persisted in localStorage)
let customCategories = [];

// Built-in categories (fixed)
const BUILTIN_CATEGORIES = [
  { id: 'fiction',    icon: '📖', color: '#2c5f7c', en: 'Fiction',    ar: 'روايات' },
  { id: 'science',    icon: '🔬', color: '#4a7c59', en: 'Science',    ar: 'علوم' },
  { id: 'history',    icon: '🏛️', color: '#8B4513', en: 'History',    ar: 'تاريخ' },
  { id: 'poetry',     icon: '✨', color: '#8B1A3A', en: 'Poetry',     ar: 'شعر' },
  { id: 'religion',   icon: '🕌', color: '#1a5c3a', en: 'Religion',   ar: 'دين' },
  { id: 'philosophy', icon: '💭', color: '#6b3a5d', en: 'Philosophy', ar: 'فلسفة' },
];

function getAllCategories() {
  return [...BUILTIN_CATEGORIES, ...customCategories];
}

// Reader state
let currentReaderBook = null;
let currentChapter = 0;
let readerThemeMode = 0;

// PDF state
let pdfDoc = null;
let pdfCurrentPage = 1;
let pdfTotalPages = 0;
let pdfScale = 1.2;
let pdfRendering = false;
let pendingPdfPage = null;

// Pending PDF file for form
let pendingPdfFile = null;
let pendingPdfDataUrl = null;

// Load books with PDF data from localStorage
async function loadBooks() {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/books?order=id.asc&select=*`,
      {
        headers: {
          'apikey': SUPABASE_ANON,
          'Authorization': `Bearer ${SUPABASE_ANON}`
        }
      }
    );
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    books = data.map(b => ({
      id:            b.id,
      titleEn:       b.title_en,
      titleAr:       b.title_ar || b.title_en,
      authorEn:      b.author_en,
      authorAr:      b.author_ar || b.author_en,
      authorDescEn:  b.author_desc_en || '',
      authorDescAr:  b.author_desc_ar || '',
      category:      b.category || 'fiction',
      year:          b.year || 2024,
      pages:         b.pages || 100,
      rating:        parseFloat(b.rating) || 4.0,
      descEn:        b.desc_en || 'No description available.',
      descAr:        b.desc_ar || 'لا يوجد وصف متاح.',
      color:         b.color || '#8B1A3A',
      wallpaper:     b.wallpaper || null,
      pdfData:       b.has_pdf
                       ? `${SUPABASE_URL}/storage/v1/object/public/books/${b.id}.pdf`
                       : null,
      content: [{ titleEn: 'Chapter 1', titleAr: 'الفصل الأول',
                  textEn: 'Open PDF to read.', textAr: 'افتح PDF للقراءة.' }]
    }));
  } catch (err) {
    console.error('Supabase load error:', err);
    books = [...defaultBooks]; // fallback to sample books
  }
  renderBooks();
  renderCategories();
  updateStats();
}
// function loadBooks() {
//   const stored = localStorage.getItem('maktabaty_books');
//   if (stored) {
//     try {
//       books = JSON.parse(stored);
//       // Ensure all books have pdfData field
//       books.forEach(b => { if (b.pdfData === undefined) b.pdfData = null; });
//     } catch(e) {
//       books = [...defaultBooks];
//     }
//   } else {
//     books = [...defaultBooks];
//   }
// }

// ----- INIT -----
document.addEventListener('DOMContentLoaded', () => {
  loadBooks();
  loadCustomCategories();
  applyTheme(currentTheme);
  applyLanguage(currentLang);
  renderBooks();
  renderCategories();
  updateStats();
  initParticles();
  initEventListeners();
  animateCounters();
  setupPdfUpload();
});

// ----- THEME -----
function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  document.getElementById('themeIcon').textContent = theme === 'dark' ? 'light_mode' : 'dark_mode';
  localStorage.setItem('maktabaty_theme', theme);
}

// ----- LANGUAGE -----
function applyLanguage(lang) {
  currentLang = lang;
  const isAr = lang === 'ar';
  document.documentElement.lang = lang;
  document.documentElement.dir = isAr ? 'rtl' : 'ltr';
  document.getElementById('langLabel').textContent = isAr ? 'EN' : 'عربي';
  document.querySelectorAll('[data-en]').forEach(el => { el.textContent = isAr ? el.dataset.ar : el.dataset.en; });
  document.querySelectorAll('[data-placeholder-en]').forEach(el => { el.placeholder = isAr ? el.dataset.placeholderAr : el.dataset.placeholderEn; });
  localStorage.setItem('maktabaty_lang', lang);
  renderBooks();
  renderCategories();
  renderFavorites();
  if (isAdminLoggedIn) renderAdminTable();
}

// ----- EVENTS -----
function initEventListeners() {
  document.getElementById('themeToggle').addEventListener('click', () => applyTheme(currentTheme === 'dark' ? 'light' : 'dark'));
  document.getElementById('langToggle').addEventListener('click', () => applyLanguage(currentLang === 'en' ? 'ar' : 'en'));

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => { e.preventDefault(); switchPage(link.dataset.page); });
  });

  document.getElementById('searchToggle').addEventListener('click', () => {
    document.getElementById('searchOverlay').classList.add('active');
    document.getElementById('searchInput').focus();
  });
  document.getElementById('searchClose').addEventListener('click', () => document.getElementById('searchOverlay').classList.remove('active'));
  document.getElementById('searchOverlay').addEventListener('click', e => { if (e.target === e.currentTarget) document.getElementById('searchOverlay').classList.remove('active'); });
  document.getElementById('searchInput').addEventListener('input', handleSearch);

  document.getElementById('filterChips').addEventListener('click', e => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    renderBooks(chip.dataset.filter);
  });

  document.getElementById('gridView').addEventListener('click', () => {
    document.getElementById('gridView').classList.add('active');
    document.getElementById('listView').classList.remove('active');
    document.getElementById('booksGrid').classList.remove('list-view');
  });
  document.getElementById('listView').addEventListener('click', () => {
    document.getElementById('listView').classList.add('active');
    document.getElementById('gridView').classList.remove('active');
    document.getElementById('booksGrid').classList.add('list-view');
  });

  document.getElementById('loginForm').addEventListener('submit', handleLogin);
  document.getElementById('passwordToggle').addEventListener('click', () => {
    const input = document.getElementById('loginPassword');
    const icon = document.getElementById('passwordToggle').querySelector('.material-icons-round');
    input.type = input.type === 'password' ? 'text' : 'password';
    icon.textContent = input.type === 'password' ? 'visibility' : 'visibility_off';
  });

  document.getElementById('logoutBtn')?.addEventListener('click', handleLogout);
  document.getElementById('addBookBtn')?.addEventListener('click', () => openBookForm());
  document.getElementById('addCategoryBtn')?.addEventListener('click', openCategoryForm);
  document.getElementById('adminSearch')?.addEventListener('input', e => renderAdminTable(e.target.value));

  document.getElementById('formClose').addEventListener('click', closeBookForm);
  document.getElementById('formCancel').addEventListener('click', closeBookForm);
  document.getElementById('bookForm').addEventListener('submit', handleBookSubmit);
  document.getElementById('bookFormModal').addEventListener('click', e => { if (e.target === e.currentTarget) closeBookForm(); });

  document.querySelectorAll('.color-preset').forEach(btn => {
    btn.addEventListener('click', () => { document.getElementById('bookColor').value = btn.dataset.color; });
  });

  document.getElementById('deleteCancelBtn').addEventListener('click', closeDeleteModal);
  document.getElementById('deleteConfirmBtn').addEventListener('click', confirmDelete);
  document.getElementById('deleteModal').addEventListener('click', e => { if (e.target === e.currentTarget) closeDeleteModal(); });

  // Category modal events
  document.getElementById('categoryFormClose').addEventListener('click', closeCategoryForm);
  document.getElementById('categoryFormCancel').addEventListener('click', closeCategoryForm);
  document.getElementById('categoryFormModal').addEventListener('click', e => { if (e.target === e.currentTarget) closeCategoryForm(); });
  document.getElementById('categoryForm').addEventListener('submit', handleCategorySubmit);

  // Icon picker
  document.getElementById('iconPickerGrid').addEventListener('click', e => {
    const btn = e.target.closest('.icon-pick');
    if (!btn) return;
    document.querySelectorAll('.icon-pick').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    updateCategoryPreview();
  });

  // Category color presets
  document.getElementById('catPresetColors').addEventListener('click', e => {
    const btn = e.target.closest('.color-preset');
    if (!btn) return;
    document.getElementById('catColor').value = btn.dataset.color;
    updateCategoryPreview();
  });
  document.getElementById('catColor').addEventListener('input', updateCategoryPreview);
  document.getElementById('catNameEn').addEventListener('input', updateCategoryPreview);

  // Delete category modal
  document.getElementById('deleteCatCancelBtn').addEventListener('click', closeDeleteCategoryModal);
  document.getElementById('deleteCatConfirmBtn').addEventListener('click', confirmDeleteCategory);
  document.getElementById('deleteCategoryModal').addEventListener('click', e => { if (e.target === e.currentTarget) closeDeleteCategoryModal(); });

  document.getElementById('detailClose').addEventListener('click', closeDetailModal);
  document.getElementById('bookDetailModal').addEventListener('click', e => { if (e.target === e.currentTarget) closeDetailModal(); });
  document.getElementById('detailReadBtn').addEventListener('click', () => {
    closeDetailModal();
    openReader(parseInt(document.getElementById('detailReadBtn').dataset.bookId));
  });
  document.getElementById('detailFavBtn').addEventListener('click', () => {
    const bookId = parseInt(document.getElementById('detailReadBtn').dataset.bookId);
    toggleFavorite(bookId);
    updateDetailFavIcon(bookId);
  });

  // Reader controls
  document.getElementById('readerClose').addEventListener('click', closeReader);
  document.getElementById('prevPage').addEventListener('click', () => navigatePage(-1));
  document.getElementById('nextPage').addEventListener('click', () => navigatePage(1));
  document.getElementById('readerThemeToggle').addEventListener('click', toggleReaderTheme);
  document.getElementById('zoomIn').addEventListener('click', () => adjustZoom(0.2));
  document.getElementById('zoomOut').addEventListener('click', () => adjustZoom(-0.2));
  document.getElementById('downloadPdfBtn').addEventListener('click', downloadCurrentPdf);
  document.getElementById('pageJumpBtn').addEventListener('click', jumpToPage);
  document.getElementById('pageJumpInput').addEventListener('keydown', e => { if (e.key === 'Enter') jumpToPage(); });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.getElementById('searchOverlay').classList.remove('active');
      closeDetailModal(); closeBookForm(); closeDeleteModal(); closeReader();
    }
    if (e.key === 'ArrowLeft' && document.getElementById('readerOverlay').classList.contains('active')) {
      navigatePage(document.documentElement.dir === 'rtl' ? 1 : -1);
    }
    if (e.key === 'ArrowRight' && document.getElementById('readerOverlay').classList.contains('active')) {
      navigatePage(document.documentElement.dir === 'rtl' ? -1 : 1);
    }
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      document.getElementById('searchOverlay').classList.add('active');
      document.getElementById('searchInput').focus();
    }
  });

  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    navbar.style.boxShadow = window.scrollY > 100 ? '0 2px 20px rgba(0,0,0,0.15)' : 'none';
  });
}

// ----- PDF UPLOAD SETUP -----
function setupPdfUpload() {
  const dropZone = document.getElementById('pdfDropZone');
  const fileInput = document.getElementById('bookPdfFile');

  dropZone.addEventListener('click', () => fileInput.click());

  dropZone.addEventListener('dragover', e => { e.preventDefault(); dropZone.classList.add('drag-over'); });
  dropZone.addEventListener('dragleave', () => dropZone.classList.remove('drag-over'));
  dropZone.addEventListener('drop', e => {
    e.preventDefault();
    dropZone.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (file && file.type === 'application/pdf') handlePdfFileSelect(file);
    else showToast('Please upload a PDF file', 'error');
  });

  fileInput.addEventListener('change', e => {
    const file = e.target.files[0];
    if (file) handlePdfFileSelect(file);
  });

  document.getElementById('removePdfBtn').addEventListener('click', () => {
    pendingPdfFile = null;
    pendingPdfDataUrl = null;
    fileInput.value = '';
    document.getElementById('pdfFileInfo').style.display = 'none';
    document.getElementById('pdfDropZone').style.display = 'flex';
  });
}

function handlePdfFileSelect(file) {
  if (file.size > 52428800) { // 50MB
    showToast('PDF file too large (max 50MB)', 'error');
    return;
  }
  pendingPdfFile = file;
  const reader = new FileReader();
  reader.onload = e => {
    pendingPdfDataUrl = e.target.result;
    document.getElementById('pdfFileName').textContent = file.name + ' (' + (file.size / 1024 / 1024).toFixed(1) + ' MB)';
    document.getElementById('pdfFileInfo').style.display = 'flex';
    document.getElementById('pdfDropZone').style.display = 'none';
    showToast('PDF ready to upload', 'success');
  };
  reader.readAsDataURL(file);
}

// ----- PAGE NAVIGATION -----
function switchPage(page) {
  currentPage = page;
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  document.querySelector('.nav-link[data-page="' + page + '"]').classList.add('active');
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(page + 'Page').classList.add('active');
  if (page === 'favorites') renderFavorites();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ----- RENDER BOOKS -----
function renderBooks(filter) {
  if (!filter) filter = document.querySelector('.chip.active')?.dataset.filter || 'all';
  const grid = document.getElementById('booksGrid');
  const isAr = currentLang === 'ar';
  const filtered = filter === 'all' ? books : books.filter(b => b.category === filter);

  grid.innerHTML = filtered.map((book, i) => {
    const hasPdf = !!book.pdfData;
    return '<div class="book-card" style="animation-delay:' + (i * 0.05) + 's" data-id="' + book.id + '">' +
      '<button class="book-fav-btn ' + (favorites.includes(book.id) ? 'active' : '') + '" onclick="event.stopPropagation();toggleFavorite(' + book.id + ')">' +
        '<span class="material-icons-round">' + (favorites.includes(book.id) ? 'favorite' : 'favorite_border') + '</span>' +
      '</button>' +
      (hasPdf ? '<div class="book-pdf-badge"><span class="material-icons-round">picture_as_pdf</span>PDF</div>' : '') +
      '<div class="book-cover" style="' + (book.wallpaper ? 'background-image:linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.15)), url(' + book.wallpaper + ');background-size:cover;background-position:center' : 'background:linear-gradient(135deg,' + book.color + ',' + adjustColor(book.color, -30) + ')') + '" onclick="openDetail(' + book.id + ')">' +
        '<div class="book-cover-decoration"></div>' +
        '<div class="book-cover-title">' + (isAr ? book.titleAr : book.titleEn) + '</div>' +
        '<div class="book-cover-author">' + (isAr ? book.authorAr : book.authorEn) + '</div>' +
      '</div>' +
      '<div class="book-card-body" onclick="openDetail(' + book.id + ')">' +
        '<div class="book-card-title">' + (isAr ? book.titleAr : book.titleEn) + '</div>' +
        '<div class="book-card-author">' + (isAr ? book.authorAr : book.authorEn) + '</div>' +
        '<div class="book-card-meta">' +
          '<div class="book-card-rating">★ ' + book.rating + '</div>' +
          '<span class="book-card-category">' + getCategoryLabel(book.category) + '</span>' +
        '</div>' +
      '</div>' +
      '<div class="book-card-actions">' +
        '<button onclick="event.stopPropagation();openReader(' + book.id + ')">' +
          '<span class="material-icons-round">menu_book</span>' + (isAr ? 'اقرأ' : 'Read') +
        '</button>' +
        '<button onclick="event.stopPropagation();openDetail(' + book.id + ')">' +
          '<span class="material-icons-round">info</span>' + (isAr ? 'تفاصيل' : 'Details') +
        '</button>' +
      '</div>' +
    '</div>';
  }).join('');

  updateStats();
}

// ----- RENDER CATEGORIES -----
function renderCategories() {
  const grid = document.getElementById('categoriesGrid');
  const isAr = currentLang === 'ar';
  const cats = [
    { id: 'fiction', icon: '📖', color: '#2c5f7c', en: 'Fiction', ar: 'روايات' },
    { id: 'science', icon: '🔬', color: '#4a7c59', en: 'Science', ar: 'علوم' },
    { id: 'history', icon: '🏛️', color: '#8B4513', en: 'History', ar: 'تاريخ' },
    { id: 'poetry', icon: '✨', color: '#8B1A3A', en: 'Poetry', ar: 'شعر' },
    { id: 'religion', icon: '🕌', color: '#1a5c3a', en: 'Religion', ar: 'دين' },
    { id: 'philosophy', icon: '💭', color: '#6b3a5d', en: 'Philosophy', ar: 'فلسفة' },
  ];

  grid.innerHTML = cats.map((cat, i) => {
    const count = books.filter(b => b.category === cat.id).length;
    return '<div class="category-card" style="animation-delay:' + (i * 0.1) + 's" onclick="filterByCategory(\'' + cat.id + '\')">' +
      '<div class="category-icon" style="background:' + cat.color + '20;color:' + cat.color + '">' + cat.icon + '</div>' +
      '<div class="category-info"><h3>' + (isAr ? cat.ar : cat.en) + '</h3><p>' + count + ' ' + (isAr ? 'كتاب' : 'books') + '</p></div>' +
    '</div>';
  }).join('');
}

function filterByCategory(cat) {
  switchPage('library');
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  const chip = document.querySelector('.chip[data-filter="' + cat + '"]');
  if (chip) chip.classList.add('active');
  renderBooks(cat);
}

// ----- FAVORITES -----
function toggleFavorite(bookId) {
  const idx = favorites.indexOf(bookId);
  if (idx > -1) favorites.splice(idx, 1); else favorites.push(bookId);
  localStorage.setItem('maktabaty_favorites', JSON.stringify(favorites));
  renderBooks();
  showToast(idx > -1 ? (currentLang === 'ar' ? 'تمت الإزالة' : 'Removed from favorites') : (currentLang === 'ar' ? 'تمت الإضافة' : 'Added to favorites'), 'success');
}

function renderFavorites() {
  const grid = document.getElementById('favoritesGrid');
  const empty = document.getElementById('emptyFavorites');
  const isAr = currentLang === 'ar';
  const favBooks = books.filter(b => favorites.includes(b.id));

  if (favBooks.length === 0) { grid.innerHTML = ''; empty.style.display = 'block'; return; }
  empty.style.display = 'none';
  grid.innerHTML = favBooks.map((book, i) => {
    const hasPdf = !!book.pdfData;
    return '<div class="book-card" style="animation-delay:' + (i * 0.05) + 's">' +
      '<button class="book-fav-btn active" onclick="event.stopPropagation();toggleFavorite(' + book.id + ');renderFavorites();">' +
        '<span class="material-icons-round">favorite</span>' +
      '</button>' +
      (hasPdf ? '<div class="book-pdf-badge"><span class="material-icons-round">picture_as_pdf</span>PDF</div>' : '') +
      '<div class="book-cover" style="' + (book.wallpaper ? 'background-image:linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.15)), url(' + book.wallpaper + ');background-size:cover;background-position:center' : 'background:linear-gradient(135deg,' + book.color + ',' + adjustColor(book.color, -30) + ')') + '" onclick="openDetail(' + book.id + ')">' +
        '<div class="book-cover-title">' + (isAr ? book.titleAr : book.titleEn) + '</div>' +
        '<div class="book-cover-author">' + (isAr ? book.authorAr : book.authorEn) + '</div>' +
      '</div>' +
      '<div class="book-card-body" onclick="openDetail(' + book.id + ')">' +
        '<div class="book-card-title">' + (isAr ? book.titleAr : book.titleEn) + '</div>' +
        '<div class="book-card-author">' + (isAr ? book.authorAr : book.authorEn) + '</div>' +
        '<div class="book-card-meta"><div class="book-card-rating">★ ' + book.rating + '</div><span class="book-card-category">' + getCategoryLabel(book.category) + '</span></div>' +
      '</div>' +
      '<div class="book-card-actions"><button onclick="event.stopPropagation();openReader(' + book.id + ')"><span class="material-icons-round">menu_book</span>' + (isAr ? 'اقرأ' : 'Read') + '</button></div>' +
    '</div>';
  }).join('');
}

// ----- SEARCH -----
function handleSearch(e) {
  const query = e.target.value.toLowerCase().trim();
  const results = document.getElementById('searchResults');
  const isAr = currentLang === 'ar';
  if (!query) { results.innerHTML = ''; return; }
  const matches = books.filter(b =>
    b.titleEn.toLowerCase().includes(query) || b.titleAr.includes(query) ||
    b.authorEn.toLowerCase().includes(query) || b.authorAr.includes(query)
  );
  results.innerHTML = matches.map(b =>
    '<div class="search-result-item" onclick="document.getElementById(\'searchOverlay\').classList.remove(\'active\');openDetail(' + b.id + ')">' +
      '<div class="search-result-cover" style="background:' + b.color + '">' + (isAr ? b.titleAr : b.titleEn).charAt(0) + '</div>' +
      '<div class="search-result-info"><h4>' + (isAr ? b.titleAr : b.titleEn) + '</h4><p>' + (isAr ? b.authorAr : b.authorEn) + (b.pdfData ? ' · PDF' : '') + '</p></div>' +
    '</div>'
  ).join('') || '<div style="padding:20px;text-align:center;color:var(--text-muted)">' + (isAr ? 'لا توجد نتائج' : 'No results found') + '</div>';
}

// ----- BOOK DETAIL -----
function openDetail(bookId) {
  const book = books.find(b => b.id === bookId);
  if (!book) return;
  const isAr = currentLang === 'ar';

  const detailCover = document.getElementById('detailCover');
  if (book.wallpaper) {
    detailCover.style.background = 'linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.15)), url(' + book.wallpaper + ')';
    detailCover.style.backgroundSize = 'cover';
    detailCover.style.backgroundPosition = 'center';
  } else {
    detailCover.style.background = 'linear-gradient(135deg,' + book.color + ',' + adjustColor(book.color, -30) + ')';
    detailCover.style.backgroundSize = '';
    detailCover.style.backgroundPosition = '';
  }
  detailCover.innerHTML = '<h3>' + (isAr ? book.titleAr : book.titleEn) + '</h3><p>' + (isAr ? book.authorAr : book.authorEn) + '</p>';
  document.getElementById('detailTitle').textContent = isAr ? book.titleAr : book.titleEn;
  document.getElementById('detailAuthor').textContent = isAr ? book.authorAr : book.authorEn;
  document.getElementById('detailAuthorDesc').textContent = isAr ? (book.authorDescAr || '') : (book.authorDescEn || '');
  document.getElementById('detailRating').innerHTML = '★'.repeat(Math.round(book.rating)) + ' ' + book.rating;
  document.getElementById('detailCategory').textContent = getCategoryLabel(book.category);
  document.getElementById('detailDescription').textContent = isAr ? book.descAr : book.descEn;
  document.getElementById('detailYear').textContent = book.year;
  document.getElementById('detailPages').textContent = book.pages + ' ' + (isAr ? 'صفحة' : 'pages');
  document.getElementById('detailLang').textContent = isAr ? 'عربي / إنجليزي' : 'Arabic / English';
  document.getElementById('detailReadBtn').dataset.bookId = bookId;
  
  const pdfBadge = document.getElementById('detailPdfBadge');
  if (book.pdfData) {
    pdfBadge.style.display = 'flex';
    pdfBadge.querySelector('span:last-child').textContent = isAr ? 'PDF متاح' : 'PDF Available';
  } else {
    pdfBadge.style.display = 'none';
  }
  
  updateDetailFavIcon(bookId);
  document.getElementById('bookDetailModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function updateDetailFavIcon(bookId) {
  document.getElementById('detailFavIcon').textContent = favorites.includes(bookId) ? 'favorite' : 'favorite_border';
}

function closeDetailModal() {
  document.getElementById('bookDetailModal').classList.remove('active');
  document.body.style.overflow = '';
}

// ----- READER -----
function openReader(bookId) {
  const book = books.find(b => b.id === bookId);
  if (!book) return;
  currentReaderBook = book;
  const isAr = currentLang === 'ar';

  document.getElementById('readerTitle').textContent = isAr ? book.titleAr : book.titleEn;
  document.getElementById('readerAuthor').textContent = isAr ? book.authorAr : book.authorEn;

  // Reset state
  pdfDoc = null;
  pdfCurrentPage = 1;
  currentChapter = 0;

  if (book.pdfData) {
    openPdfReader(book.pdfData);
  } else {
    openTextReader();
  }

  document.getElementById('readerOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

// ---- TEXT READER ----
function openTextReader() {
  document.getElementById('pdfViewer').style.display = 'none';
  document.getElementById('readerPage').style.display = 'block';
  document.getElementById('pdfLoading').style.display = 'none';
  document.getElementById('zoomIn').style.display = 'none';
  document.getElementById('zoomOut').style.display = 'none';
  document.getElementById('zoomLabel').style.display = 'none';
  document.getElementById('downloadPdfBtn').style.display = 'none';
  document.getElementById('pageJump').style.display = 'none';
  renderTextChapter();
}

function renderTextChapter() {
  if (!currentReaderBook || !currentReaderBook.content) return;
  const isAr = currentLang === 'ar';
  const chapter = currentReaderBook.content[currentChapter];
  const total = currentReaderBook.content.length;
  const title = isAr ? chapter.titleAr : chapter.titleEn;
  const text = isAr ? chapter.textAr : chapter.textEn;
  const paragraphs = text.split('\n\n');
  const chapterLabel = isAr ? 'الفصل' : 'Chapter';

  document.getElementById('readerPage').innerHTML =
    '<div class="reader-chapter-header">' +
      '<span class="reader-chapter-number">' + chapterLabel + ' ' + (currentChapter + 1) + '</span>' +
      '<h2 class="chapter-title">' + title + '</h2>' +
      '<div class="reader-ornament">✦ ✦ ✦</div>' +
    '</div>' +
    paragraphs.map((p, i) => '<p class="' + (i === 0 ? 'drop-cap' : '') + '">' + p + '</p>').join('') +
    '<div class="reader-chapter-footer">' +
      '<div class="reader-ornament">— ✦ —</div>' +
    '</div>';

  document.getElementById('pageIndicator').textContent = (currentChapter + 1) + ' / ' + total;
  document.getElementById('readerProgress').style.width = (((currentChapter + 1) / total) * 100) + '%';
  document.getElementById('readerBody').scrollTop = 0;
}

// ---- PDF READER ----
function openPdfReader(pdfDataUrl) {
  document.getElementById('pdfViewer').style.display = 'flex';
  document.getElementById('readerPage').style.display = 'none';
  document.getElementById('pdfLoading').style.display = 'flex';
  document.getElementById('zoomIn').style.display = 'flex';
  document.getElementById('zoomOut').style.display = 'flex';
  document.getElementById('zoomLabel').style.display = 'block';
  document.getElementById('downloadPdfBtn').style.display = 'flex';
  document.getElementById('pageJump').style.display = 'flex';

  if (typeof pdfjsLib === 'undefined') {
    showToast('PDF.js not loaded', 'error');
    document.getElementById('pdfLoading').style.display = 'none';
    openTextReader();
    return;
  }

  // Determine if pdfDataUrl is a remote URL or a base64 data URL
  let loadingTask;
  if (pdfDataUrl.startsWith('http://') || pdfDataUrl.startsWith('https://')) {
    // Remote URL — pass directly to PDF.js
    loadingTask = pdfjsLib.getDocument(pdfDataUrl);
  } else {
    // Base64 data URL — decode and pass raw bytes
    loadingTask = pdfjsLib.getDocument({ data: atob(pdfDataUrl.split(',')[1]) });
  }

  loadingTask.promise.then(pdf => {
    pdfDoc = pdf;
    pdfTotalPages = pdf.numPages;
    pdfCurrentPage = 1;
    document.getElementById('pdfLoading').style.display = 'none';
    renderPdfPage(pdfCurrentPage);
  }).catch(err => {
    console.error('PDF load error:', err);
    showToast('Error loading PDF', 'error');
    document.getElementById('pdfLoading').style.display = 'none';
    openTextReader();
  });
}

function renderPdfPage(pageNum) {
  if (!pdfDoc) return;
  if (pdfRendering) { pendingPdfPage = pageNum; return; }
  pdfRendering = true;

  pdfDoc.getPage(pageNum).then(page => {
    const canvas = document.getElementById('pdfCanvas');
    const ctx = canvas.getContext('2d');

    // Responsive scale
    const readerBody = document.getElementById('readerBody');
    const containerWidth = readerBody.clientWidth - 48;
    const viewport = page.getViewport({ scale: 1 });
    const autoScale = containerWidth / viewport.width;
    const finalScale = autoScale * pdfScale;
    const scaledViewport = page.getViewport({ scale: finalScale });

    canvas.width = scaledViewport.width;
    canvas.height = scaledViewport.height;

    const renderCtx = { canvasContext: ctx, viewport: scaledViewport };
    const renderTask = page.render(renderCtx);

    renderTask.promise.then(() => {
      pdfRendering = false;
      if (pendingPdfPage !== null) {
        renderPdfPage(pendingPdfPage);
        pendingPdfPage = null;
      }
    });

    pdfCurrentPage = pageNum;
    document.getElementById('pageIndicator').textContent = pageNum + ' / ' + pdfTotalPages;
    document.getElementById('pageJumpInput').value = pageNum;
    document.getElementById('readerProgress').style.width = ((pageNum / pdfTotalPages) * 100) + '%';
    document.getElementById('readerBody').scrollTop = 0;
    document.getElementById('zoomLabel').textContent = Math.round(pdfScale * 100) + '%';
  });
}

function navigatePage(dir) {
  if (pdfDoc) {
    const newPage = pdfCurrentPage + dir;
    if (newPage >= 1 && newPage <= pdfTotalPages) renderPdfPage(newPage);
  } else {
    if (!currentReaderBook) return;
    const newIdx = currentChapter + dir;
    if (newIdx >= 0 && newIdx < currentReaderBook.content.length) {
      currentChapter = newIdx;
      renderTextChapter();
    }
  }
}

function adjustZoom(delta) {
  pdfScale = Math.max(0.5, Math.min(3.0, pdfScale + delta));
  document.getElementById('zoomLabel').textContent = Math.round(pdfScale * 100) + '%';
  if (pdfDoc) renderPdfPage(pdfCurrentPage);
}

function jumpToPage() {
  const val = parseInt(document.getElementById('pageJumpInput').value);
  if (pdfDoc && val >= 1 && val <= pdfTotalPages) renderPdfPage(val);
}

function toggleReaderTheme() {
  const container = document.querySelector('.reader-container');
  readerThemeMode = (readerThemeMode + 1) % 2;
  container.classList.toggle('reader-sepia', readerThemeMode === 1);
  if (pdfDoc) renderPdfPage(pdfCurrentPage);
}

function downloadCurrentPdf() {
  if (!currentReaderBook || !currentReaderBook.pdfData) return;
  const link = document.createElement('a');
  link.href = currentReaderBook.pdfData;
  link.download = (currentReaderBook.titleEn || 'book') + '.pdf';
  link.click();
}

function closeReader() {
  document.getElementById('readerOverlay').classList.remove('active');
  document.body.style.overflow = '';
  currentReaderBook = null;
  pdfDoc = null;
  pdfRendering = false;
  pendingPdfPage = null;
}

// ----- ADMIN LOGIN -----
function handleLogin(e) {
  e.preventDefault();
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  if (username === 'Asma Ragab' && password === 'Asma@1981') {
    isAdminLoggedIn = true;
    document.getElementById('adminLogin').style.display = 'none';
    document.getElementById('adminDashboard').style.display = 'block';
    document.getElementById('loginError').style.display = 'none';
    renderAdminTable();
    updateDashboardStats();
    renderAdminCategories();
    showToast(currentLang === 'ar' ? 'مرحباً، أسماء رجب!' : 'Welcome, Asma Ragab!', 'success');
  } else {
    document.getElementById('loginError').style.display = 'flex';
  }
}

function handleLogout() {
  isAdminLoggedIn = false;
  document.getElementById('adminLogin').style.display = 'flex';
  document.getElementById('adminDashboard').style.display = 'none';
  document.getElementById('loginUsername').value = '';
  document.getElementById('loginPassword').value = '';
  showToast(currentLang === 'ar' ? 'تم تسجيل الخروج' : 'Logged out', 'info');
}

// ----- ADMIN TABLE -----
function renderAdminTable(search) {
  search = search || '';
  const tbody = document.getElementById('adminTableBody');
  const isAr = currentLang === 'ar';
  let filtered = books;

  if (search) {
    const q = search.toLowerCase();
    filtered = books.filter(b => b.titleEn.toLowerCase().includes(q) || b.titleAr.includes(q) || b.authorEn.toLowerCase().includes(q) || b.authorAr.includes(q));
  }

  tbody.innerHTML = filtered.map(book =>
    '<tr>' +
      '<td><div class="table-cover" style="background:' + book.color + '">' + (isAr ? book.titleAr : book.titleEn).charAt(0) + '</div></td>' +
      '<td><strong>' + (isAr ? book.titleAr : book.titleEn) + '</strong></td>' +
      '<td>' + (isAr ? book.authorAr : book.authorEn) + '</td>' +
      '<td><span class="book-card-category">' + getCategoryLabel(book.category) + '</span></td>' +
      '<td><span class="pdf-status ' + (book.pdfData ? 'has-pdf' : 'no-pdf') + '">' +
        '<span class="material-icons-round">picture_as_pdf</span>' +
        (book.pdfData ? 'Yes' : 'No') +
      '</span></td>' +
      '<td>★ ' + book.rating + '</td>' +
      '<td><div class="table-actions">' +
        '<button class="table-action-btn" onclick="openBookForm(' + book.id + ')" title="Edit"><span class="material-icons-round">edit</span></button>' +
        '<button class="table-action-btn delete" onclick="openDeleteModal(' + book.id + ')" title="Delete"><span class="material-icons-round">delete</span></button>' +
      '</div></td>' +
    '</tr>'
  ).join('');

  updateDashboardStats();
}

function updateDashboardStats() {
  document.getElementById('dashTotalBooks').textContent = books.length;
  document.getElementById('dashTotalCats').textContent = getAllCategories().length;
  document.getElementById('dashTotalPdfs').textContent = books.filter(b => b.pdfData).length;
  const avg = books.length ? (books.reduce((s, b) => s + b.rating, 0) / books.length).toFixed(1) : '0';
  document.getElementById('dashAvgRating').textContent = avg;
  renderAdminCategories();
}

// ----- BOOK FORM (CRUD) -----
function openBookForm(editId) {
  editId = editId || null;
  const modal = document.getElementById('bookFormModal');
  const isAr = currentLang === 'ar';

  pendingPdfFile = null;
  pendingPdfDataUrl = null;
  document.getElementById('bookPdfFile').value = '';
  document.getElementById('pdfFileInfo').style.display = 'none';
  document.getElementById('pdfDropZone').style.display = 'flex';
  document.getElementById('pdfDropText').textContent = 'Drag & drop a PDF here, or click to browse';

  if (editId) {
    const book = books.find(b => b.id === editId);
    if (!book) return;
    document.getElementById('formTitle').textContent = isAr ? 'تعديل الكتاب' : 'Edit Book';
    document.getElementById('formSubmit').textContent = isAr ? 'حفظ التعديلات' : 'Save Changes';
    document.getElementById('editBookId').value = editId;
    document.getElementById('bookTitleEn').value = book.titleEn;
    document.getElementById('bookTitleAr').value = book.titleAr;
    document.getElementById('bookAuthorEn').value = book.authorEn;
    document.getElementById('bookAuthorAr').value = book.authorAr;
    document.getElementById('bookCategory').value = book.category;
    document.getElementById('bookYear').value = book.year;
    document.getElementById('bookPages').value = book.pages;
    document.getElementById('bookRating').value = book.rating;
    document.getElementById('bookDescEn').value = book.descEn;
    document.getElementById('bookDescAr').value = book.descAr;
    document.getElementById('bookColor').value = book.color;
    document.getElementById('bookWallpaper').value = book.wallpaper || '';
    document.getElementById('bookAuthorDescEn').value = book.authorDescEn || '';
    document.getElementById('bookAuthorDescAr').value = book.authorDescAr || '';

    if (book.pdfData) {
      document.getElementById('pdfDropText').textContent = 'Current PDF will be kept. Upload new to replace.';
    }
  } else {
    document.getElementById('formTitle').textContent = isAr ? 'إضافة كتاب جديد' : 'Add New Book';
    document.getElementById('formSubmit').textContent = isAr ? 'إضافة كتاب' : 'Add Book';
    document.getElementById('editBookId').value = '';
    document.getElementById('bookForm').reset();
    document.getElementById('bookColor').value = '#8B1A3A';
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeBookForm() {
  document.getElementById('bookFormModal').classList.remove('active');
  document.body.style.overflow = '';
  pendingPdfFile = null;
  pendingPdfDataUrl = null;
}

function handleBookSubmit(e) {
  e.preventDefault();
  const editId = document.getElementById('editBookId').value;
  const isAr = currentLang === 'ar';

  const bookData = {
    titleEn: document.getElementById('bookTitleEn').value,
    titleAr: document.getElementById('bookTitleAr').value || document.getElementById('bookTitleEn').value,
    authorEn: document.getElementById('bookAuthorEn').value,
    authorAr: document.getElementById('bookAuthorAr').value || document.getElementById('bookAuthorEn').value,
    category: document.getElementById('bookCategory').value,
    year: parseInt(document.getElementById('bookYear').value) || 2024,
    pages: parseInt(document.getElementById('bookPages').value) || 100,
    rating: parseFloat(document.getElementById('bookRating').value) || 4.0,
    descEn: document.getElementById('bookDescEn').value || 'No description available.',
    descAr: document.getElementById('bookDescAr').value || 'لا يوجد وصف متاح.',
    color: document.getElementById('bookColor').value,
    wallpaper: document.getElementById('bookWallpaper').value || null,
    authorDescEn: document.getElementById('bookAuthorDescEn').value || '',
    authorDescAr: document.getElementById('bookAuthorDescAr').value || '',
    content: [{ titleEn: "Chapter 1", titleAr: "الفصل الأول", textEn: "Content available as PDF. Please click Read to open the full book.", textAr: "المحتوى متاح كـ PDF. انقر على اقرأ لفتح الكتاب الكامل." }]
  };

  if (editId) {
    const idx = books.findIndex(b => b.id === parseInt(editId));
    if (idx > -1) {
      bookData.id = parseInt(editId);
      bookData.content = books[idx].content;
      // Keep existing PDF unless new one uploaded
      bookData.pdfData = pendingPdfDataUrl || books[idx].pdfData;
      books[idx] = bookData;
    }
    showToast(isAr ? 'تم تحديث الكتاب بنجاح' : 'Book updated successfully', 'success');
  } else {
    bookData.id = Date.now();
    bookData.pdfData = pendingPdfDataUrl || null;
    books.push(bookData);
    showToast(isAr ? 'تم إضافة الكتاب بنجاح' : 'Book added successfully', 'success');
  }

  saveBooks();
  // Collapse animation before closing
  const formEl = document.querySelector('#bookFormModal .modal-container');
  if (formEl) {
    formEl.classList.add('collapsing');
    setTimeout(() => {
      formEl.classList.remove('collapsing');
      closeBookForm();
      renderBooks();
      renderAdminTable();
    }, 380);
  } else {
    closeBookForm();
    renderBooks();
    renderAdminTable();
  }
}

// ----- DELETE -----
function openDeleteModal(bookId) { deleteTargetId = bookId; document.getElementById('deleteModal').classList.add('active'); }
function closeDeleteModal() { document.getElementById('deleteModal').classList.remove('active'); deleteTargetId = null; }

function confirmDelete() {
  if (deleteTargetId === null) return;
  books = books.filter(b => b.id !== deleteTargetId);
  favorites = favorites.filter(id => id !== deleteTargetId);
  saveBooks();
  localStorage.setItem('maktabaty_favorites', JSON.stringify(favorites));
  // Collapse animation before closing
  const delEl = document.querySelector('#deleteModal .modal-container');
  if (delEl) {
    delEl.classList.add('collapsing');
    setTimeout(() => {
      delEl.classList.remove('collapsing');
      closeDeleteModal();
      renderBooks();
      renderAdminTable();
      showToast(currentLang === 'ar' ? 'تم حذف الكتاب' : 'Book deleted', 'success');
    }, 380);
  } else {
    closeDeleteModal();
    renderBooks();
    renderAdminTable();
    showToast(currentLang === 'ar' ? 'تم حذف الكتاب' : 'Book deleted', 'success');
  }
}

// ----- HELPERS -----
function saveBooks() { localStorage.setItem('maktabaty_books', JSON.stringify(books)); }

function loadCustomCategories() {
  try {
    customCategories = JSON.parse(localStorage.getItem('maktabaty_custom_categories')) || [];
  } catch(e) {
    customCategories = [];
  }
  updateFilterChips();
}

function saveCustomCategories() {
  localStorage.setItem('maktabaty_custom_categories', JSON.stringify(customCategories));
}

// Add custom filter chips to the library filter bar dynamically
function updateFilterChips() {
  const container = document.getElementById('filterChips');
  if (!container) return;
  // Remove old custom chips
  container.querySelectorAll('.chip[data-custom]').forEach(c => c.remove());
  // Add new custom chips
  customCategories.forEach(cat => {
    const isAr = currentLang === 'ar';
    const btn = document.createElement('button');
    btn.className = 'chip';
    btn.dataset.filter = cat.id;
    btn.dataset.en = cat.en;
    btn.dataset.ar = cat.ar || cat.en;
    btn.dataset.custom = '1';
    btn.textContent = isAr ? (cat.ar || cat.en) : cat.en;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      renderBooks(cat.id);
    });
    container.appendChild(btn);
  });
  // Update book category dropdown
  updateBookCategorySelect();
}

function updateBookCategorySelect() {
  const select = document.getElementById('bookCategory');
  if (!select) return;
  // Remove old custom options
  select.querySelectorAll('option[data-custom]').forEach(o => o.remove());
  // Add custom categories
  customCategories.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat.id;
    opt.textContent = cat.en + (cat.ar ? ' / ' + cat.ar : '');
    opt.dataset.custom = '1';
    select.appendChild(opt);
  });
}

// ----- ADMIN CATEGORIES GRID -----
function renderAdminCategories() {
  const grid = document.getElementById('adminCategoriesGrid');
  if (!grid) return;
  const isAr = currentLang === 'ar';
  const all = getAllCategories();

  document.getElementById('adminCatCount').textContent = all.length;

  grid.innerHTML = all.map((cat, i) => {
    const isBuiltin = BUILTIN_CATEGORIES.some(b => b.id === cat.id);
    const count = books.filter(b => b.category === cat.id).length;
    const label = isAr ? (cat.ar || cat.en) : cat.en;
    return '<div class="admin-cat-chip ' + (isBuiltin ? 'builtin' : 'custom') + '" style="animation-delay:' + (i * 0.04) + 's">' +
      '<div class="admin-cat-chip-icon" style="background:' + cat.color + '20;color:' + cat.color + '">' + cat.icon + '</div>' +
      '<div class="admin-cat-chip-info">' +
        '<div class="admin-cat-chip-name">' + label +
          (isBuiltin ? '' : '<span class="admin-cat-chip-custom">Custom</span>') +
        '</div>' +
        '<div class="admin-cat-chip-meta">' + count + ' ' + (isAr ? 'كتاب' : 'books') + '</div>' +
      '</div>' +
      '<div class="admin-cat-chip-actions">' +
        (isBuiltin
          ? '' // built-in categories cannot be deleted
          : '<button class="admin-cat-chip-btn" onclick="openDeleteCategoryModal(\'' + cat.id + '\')" title="Delete"><span class="material-icons-round">delete</span></button>'
        ) +
      '</div>' +
    '</div>';
  }).join('');
}

// ----- CATEGORY FORM -----
function openCategoryForm() {
  // Reset form
  document.getElementById('categoryForm').reset();
  document.getElementById('catColor').value = '#2c7a5c';
  document.querySelectorAll('.icon-pick').forEach(b => b.classList.remove('active'));
  document.querySelector('.icon-pick[data-icon="📚"]').classList.add('active');
  updateCategoryPreview();
  document.getElementById('categoryFormModal').classList.add('active');
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('catNameEn').focus(), 200);
}

function closeCategoryForm() {
  document.getElementById('categoryFormModal').classList.remove('active');
  document.body.style.overflow = '';
}

function updateCategoryPreview() {
  const name = document.getElementById('catNameEn').value.trim() || 'Category Name';
  const color = document.getElementById('catColor').value;
  const icon = document.querySelector('.icon-pick.active')?.dataset.icon || '📚';
  document.getElementById('catPreviewIcon').textContent = icon;
  document.getElementById('catPreviewIcon').style.background = color + '20';
  document.getElementById('catPreviewIcon').style.color = color;
  document.getElementById('catPreviewName').textContent = name;
}

function handleCategorySubmit(e) {
  e.preventDefault();
  const nameEn = document.getElementById('catNameEn').value.trim();
  const nameAr = document.getElementById('catNameAr').value.trim();
  const color  = document.getElementById('catColor').value;
  const icon   = document.querySelector('.icon-pick.active')?.dataset.icon || '📚';

  if (!nameEn) { showToast('Please enter a category name', 'error'); return; }

  // Build a slug id from the English name
  const id = nameEn.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  // Check for duplicates
  if (getAllCategories().some(c => c.id === id)) {
    showToast(currentLang === 'ar' ? 'التصنيف موجود بالفعل' : 'Category already exists', 'error');
    return;
  }

  customCategories.push({ id, icon, color, en: nameEn, ar: nameAr || nameEn });
  saveCustomCategories();
  updateFilterChips();
  renderCategories();
  renderAdminCategories();
  updateDashboardStats();

  // Collapse animation
  const formEl = document.querySelector('#categoryFormModal .modal-container');
  if (formEl) {
    formEl.classList.add('collapsing');
    setTimeout(() => {
      formEl.classList.remove('collapsing');
      closeCategoryForm();
      showToast(currentLang === 'ar' ? 'تم إضافة التصنيف بنجاح' : 'Category added successfully', 'success');
    }, 380);
  } else {
    closeCategoryForm();
    showToast(currentLang === 'ar' ? 'تم إضافة التصنيف بنجاح' : 'Category added successfully', 'success');
  }
}

// ----- DELETE CATEGORY -----
function openDeleteCategoryModal(catId) {
  deleteCategoryTargetId = catId;
  document.getElementById('deleteCategoryModal').classList.add('active');
}
function closeDeleteCategoryModal() {
  document.getElementById('deleteCategoryModal').classList.remove('active');
  deleteCategoryTargetId = null;
}

function confirmDeleteCategory() {
  if (!deleteCategoryTargetId) return;
  // Move books in this category to 'other'
  books.forEach(b => { if (b.category === deleteCategoryTargetId) b.category = 'other'; });
  // Check if 'other' category should be added to builtins shown
  customCategories = customCategories.filter(c => c.id !== deleteCategoryTargetId);
  saveCustomCategories();
  saveBooks();
  updateFilterChips();
  renderBooks();
  renderCategories();

  const delEl = document.querySelector('#deleteCategoryModal .modal-container');
  if (delEl) {
    delEl.classList.add('collapsing');
    setTimeout(() => {
      delEl.classList.remove('collapsing');
      closeDeleteCategoryModal();
      renderAdminCategories();
      updateDashboardStats();
      showToast(currentLang === 'ar' ? 'تم حذف التصنيف' : 'Category deleted', 'success');
    }, 380);
  } else {
    closeDeleteCategoryModal();
    renderAdminCategories();
    updateDashboardStats();
    showToast(currentLang === 'ar' ? 'تم حذف التصنيف' : 'Category deleted', 'success');
  }
}

// ----- HELPERS -----
function saveBooks() { localStorage.setItem('maktabaty_books', JSON.stringify(books)); }

function getCategoryLabel(cat) {
  const all = getAllCategories();
  const found = all.find(c => c.id === cat);
  if (found) return currentLang === 'ar' ? (found.ar || found.en) : found.en;
  return cat;
}

function adjustColor(hex, amount) {
  let r = parseInt(hex.slice(1,3), 16) + amount;
  let g = parseInt(hex.slice(3,5), 16) + amount;
  let b = parseInt(hex.slice(5,7), 16) + amount;
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));
  return '#' + [r,g,b].map(v => v.toString(16).padStart(2,'0')).join('');
}

function updateStats() {
  const totalEl = document.getElementById('totalBooks');
  const catsEl = document.getElementById('totalCategories');
  const authorsEl = document.getElementById('totalAuthors');
  if (totalEl) totalEl.textContent = books.length;
  if (catsEl) catsEl.textContent = new Set(books.map(b => b.category)).size;
  if (authorsEl) authorsEl.textContent = new Set(books.map(b => b.authorEn)).size;
}

function animateCounters() {
  document.querySelectorAll('.stat-number').forEach(el => {
    const target = parseInt(el.textContent);
    let current = 0;
    const step = Math.ceil(target / 30);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = current;
    }, 40);
  });
}

// ----- TOAST -----
function showToast(message, type) {
  type = type || 'info';
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast ' + type;
  const icons = { success: 'check_circle', error: 'error', info: 'info' };
  toast.innerHTML = '<span class="material-icons-round">' + (icons[type] || 'info') + '</span><span class="toast-message">' + message + '</span>';
  container.appendChild(toast);
  setTimeout(() => { toast.classList.add('toast-exit'); setTimeout(() => toast.remove(), 300); }, 3000);
}

// ----- PARTICLES -----
function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < 35; i++) {
    particles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, size: Math.random() * 2 + 0.5, speedX: (Math.random() - 0.5) * 0.25, speedY: (Math.random() - 0.5) * 0.25, opacity: Math.random() * 0.25 + 0.05 });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const isDark = currentTheme === 'dark';
    particles.forEach(p => {
      p.x += p.speedX; p.y += p.speedY;
      if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
      if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = isDark ? 'rgba(201,168,76,' + p.opacity + ')' : 'rgba(139,26,58,' + (p.opacity * 0.4) + ')';
      ctx.fill();
    });
    requestAnimationFrame(animate);
  }
  animate();
}
