/* ============================================================
   مدونتي — بيانات الموقع + المنطق المشترك
   عدّل POSTS و AUTHORS لتغيير المحتوى.
   ============================================================ */

var POSTS = [
  { id:1, title:"كيف تبني مدونة احترافية على استضافتك الخاصة", tag:"تقنية", date:"8 شتنبر 2026", author:"أحمد", read:"٦ دقائق قراءة", img:"images/tech.webp",
    excerpt:"دليل عملي خطوة بخطوة لتحويل قالب Blogger إلى موقع مستقل يعمل على أي استضافة، مع نصائح لتحسين السرعة والأمان.",
    body:"<p>لا يزال الكثيرون يعتقدون أن إنشاء مدونة احترافية يتطلب مهارات برمجية متقدمة أو ميزانية كبيرة، لكن الحقيقة أبسط من ذلك بكثير. سواء كنت تخطط لتدوين شخصي أو مجلة رقمية، فكل ما تحتاجه هو استضافة جيدة، نطاق خاص، ونظام إدارة محتوى مناسب.</p><h2>اختر الاستضافة المناسبة</h2><p>ابدأ باختيار استضافة موثوقة تمنحك تحكماً كاملاً في ملفاتك. الاستضافة المشتركة تكفي للمبتدئين، بينما تناسب الخوادم الافتراضية المواقع الأكبر حجماً.</p><blockquote>النطاق الخاص بك هو هويتك الرقمية — اختره بعناية وسجّله باسمك.</blockquote><h2>ثبّت منصة التدوين</h2><p>ووردبريس هو الخيار الأكثر شيوعاً بفضل مرونته ومكتبة الإضافات الضخمة، لكن هناك بدائل خفيفة وسريعة مثل Ghost إذا كنت تفضّل البساطة.</p><h2>أبرز النصائح العملية</h2><ul><li>فعّل شهادة SSL لتأمين موقعك وتحسين ترتيبه في البحث.</li><li>استخدم قالباً سريعاً ومتجاوباً مع جميع الأجهزة.</li><li>فعّل التخزين المؤقت وضغط الصور لتسريع التحميل.</li><li>أنشئ نسخاً احتياطية منتظمة لحماية محتواك.</li><li>أضف أدوات تحليل لقياس أداء موقعك باستمرار.</li></ul><h2>استمر بالتعلّم</h2><p>التدوين رحلة طويلة، لكن المثابرة والانتظام في النشر هما سر النجاح. ابدأ الآن بخطوة صغيرة وواصل التطوير.</p>" },
  { id:2, title:"أفضل 12 أداة لصناعة الموسيقى الإلكترونية", tag:"موسيقى", date:"7 شتنبر 2026", author:"زُهير رياض", read:"٥ دقائق قراءة", img:"images/music.webp",
    excerpt:"مقارنة شاملة لأقوى البرامج والأجهزة المستعملة في إنتاج الموسيقى الإلكترونية، من الاستوديو المنزلي إلى المستوى الاحترافي.",
    body:"<p>تطوّر عالم إنتاج الموسيقى الإلكترونية بشكل مذهل خلال السنوات الأخيرة، وأصبح بمقدور أي موهوب أن يبنى استوديو رقمي كامل داخل حاسوبه الشخصي.</p><h2>محطات العمل الصوتية (DAW)</h2><p>تُعد محطة العمل الصوتية قلب الاستوديو الرقمي. من أشهرها Ableton Live وFL Studio وLogic Pro، ولكل منها جمهوره الخاص وطابعٍ مميز في سير العمل.</p><blockquote>الأداة لا تصنع الموسيقي — لكن الخيار الصحيح يطلق العنان لإبداعك.</blockquote><h2>الأدوات الأساسية للمبتدئين</h2><ul><li>بطاقة صوت خارجية لتحسين جودة التسجيل.</li><li>سماعات مراقبة أو هيدفونات استوديو دقيقة.</li><li>لوحة مفاتيح MIDI للتحكم في الأصوات.</li><li>مجموعة من الـ VST والإضافات المجانية للبدء.</li></ul><h2>نصيحة أخيرة</h2><p>لا تنشغل بجمع المعدات على حساب التعلّم والممارسة. ابدأ بالمجاني، وأضف المعدات تدريجياً كلما تطوّر مستواك.</p>" },
  { id:3, title:"أحدث أخبار عالم التقنية هذا الأسبوع", tag:"أخبار", date:"6 شتنبر 2026", author:"أحمد", read:"٤ دقائق قراءة", img:"images/news.webp",
    excerpt:"أبرز المستجدات والإطلاقات في قطاع التكنولوجيا خلال الأيام الماضية، من الذكاء الاصطناعي إلى الهواتف الذكية.",
    body:"<p>يشهد قطاع التكنولوجيا تسارعاً غير مسبوق، وتتوالى الإعلانات والإطلاقات بشكل شبه يومي. إليك أبرز ما حدث هذا الأسبوع.</p><h2>الذكاء الاصطناعي</h2><p>تواصل الشركات الكبرى سباقها في تطوير نماذج لغوية أكثر ذكاءً وكفاءة، مع تركيز متزايد على التطبيقات العملية التي تسهّل حياة المستخدمين.</p><h2>الأجهزة الجديدة</h2><p>أُعلن هذا الأسبوع عن جيل جديد من الهواتف الذكية المزوّدة بمعالجات أسرع وكاميرات محسّنة تعتمد على خوارزميات معالجة الصور.</p><blockquote>من يراقب الاتجاهات اليوم، يستبق فرص الغد.</blockquote><h2>الأمن والخصوصية</h2><p>تتزايد أهمية حماية البيانات مع تصاعد الهجمات الإلكترونية، لذا تنصح الجهات المختصة بتفعيل المصادقة الثنائية وتحديث الأنظمة بانتظام.</p>" },
  { id:4, title:"نصائح ذهبية لتحسين سرعة موقعك", tag:"تقنية", date:"5 شتنبر 2026", author:"أحمد", read:"٣ دقائق قراءة", img:"images/speed.webp",
    excerpt:"طرق فعالة لتسريع تحميل صفحات موقعك وتحسين تجربة الزوار، وهو ما ينعكس إيجاباً على ترتيبك في محركات البحث.",
    body:"<p>سرعة الموقع ليست مجرد رفاهية، بل عامل حاسم في تجربة المستخدم وترتيب النتائج. فحتى تأخير ثانية واحدة قد يرفع معدل الارتداد بشكل ملحوظ.</p><h2>قلّل حجم الصفحة</h2><p>ضغط الصور هو أسرع مكسب يمكنك تحقيقه. استخدم صيغاً حديثة مثل WebP واحرص على تحميل الصور بشكل كسول (Lazy Load).</p><h2>فعّل التخزين المؤقت</h2><p>يحفظ التخزين المؤقت نسخة جاهزة من صفحاتك لتُعرض بسرعة بدل توليدها من جديد مع كل زيارة.</p><blockquote>كل جزء من الثانية يُختصر، هو زائر إضافي قد يبقى معك.</blockquote><ul><li>استخدم شبكة توصيل محتوى (CDN) لتقريب المحتوى من الزائر.</li><li>قلّل عدد طلبات HTTP بدمج الملفات.</li><li>اختر استضافة سريعة ومناسبة لحجم موقعك.</li></ul>" },
  { id:5, title:"دليلك الكامل للتخطيط لرحلة سفر لا تُنسى", tag:"سفر", date:"3 شتنبر 2026", author:"زُهير رياض", read:"٧ دقائق قراءة", img:"images/travel.webp",
    excerpt:"من اختيار الوجهة إلى حجز الإقامة وتنظيم الميزانية — خطوات عملية تجعل رحلتك المقبلة سلسة وممتعة من البداية للنهاية.",
    body:"<p>السفر من أجمل التجارب التي يمكن أن يعيشها الإنسان، لكنه يحتاج إلى تخطيط ذكي ليكون متعة حقيقية لا عبئاً مرهقاً.</p><h2>اختر وجهتك بحكمة</h2><p>حدد ميزانيتك أولاً، ثم الموسم المناسب، ثم اختر وجهة تناسب ذوقك واهتماماتك وعدد أيام راحتك.</p><h2>نظّم خط سير مرناً</h2><p>اترك مساحة للمفاجآت والتجوال الحر. أفضل اللحظات غالباً ما تحدث خارج الخطط الصارمة.</p><blockquote>أجمل الرحلات ليست إلى أماكن بعيدة، بل إلى تجارب تبقى في الذاكرة.</blockquote><ul><li>احجز الطيران والإقامة مبكراً لتحصل على أفضل الأسعار.</li><li>احمل نسخاً رقمية من وثائقك المهمة.</li><li>أضف تأمين سفر لتجنب المفاجآت المكلفة.</li></ul>" },
  { id:6, title:"أفضل 15 وجهة ساحلية تستحق الزيارة هذا الصيف", tag:"سفر", date:"1 شتنبر 2026", author:"أحمد", read:"٨ دقائق قراءة", img:"images/beach.webp",
    excerpt:"من شواطئ البحر الأبيض المتوسط إلى جزر المحيط — قائمة من أجمل الوجهات الساحلية لهواة الشمس والبحر والاسترخاء.",
    body:"<p>مع حلول الصيف، يتطلّع المسافرون إلى الشواطئ الرملية والمياه الفيروزية. جمعنا لك قائمة من أجمل الوجهات الساحلية حول العالم.</p><h2>البحر الأبيض المتوسط</h2><p>من الساحل الجنوبي لإسبانيا إلى الجزر اليونانية وسواحل المغرب، يبقى المتوسط وجهة مثالية بمياهه الصافية وثقافته الغنية.</p><h2>جزر خارجة عن المألوف</h2><p>ابحث عن الجزر الأقل ازدحاماً لتجربة أكثر هدوءاً وخصوصية، بعيداً عن صخب الوجهات الشهيرة.</p><blockquote>الشاطئ الجميل لا يُقاس بمساحته، بل بما يمنحك من طمأنينة.</blockquote><h2>نصائح للتخطيط</h2><ul><li>احجز موسمياً وتجنّب ذروة الازدحام.</li><li>لا تنسَ الحماية من الشمس.</li><li>استكشف المطاعم المحلية للتعرف على ثقافة المكان.</li></ul>" }
];

var CATEGORIES = ["تقنية", "موسيقى", "أخبار", "سفر"];

var CAT_ICONS = {
  "تقنية": "cpu",
  "موسيقى": "music",
  "أخبار": "newspaper",
  "سفر": "plane"
};

var AUTHORS = {
  "أحمد": { role:"محرّر تقني", bio:"أحمد يكتب عن التقنية والإنتاجية والتطورات الرقمية بلغة مبسطة ومباشرة." },
  "زُهير رياض": { role:"كاتب سفر وموسيقى", bio:"زُهير يشارك شغفه بالسفر والموسيقى الإلكترونية من خلال تجارب وقصص ملهمة." }
};

/* ===== حالة التطبيق ===== */
var q = new URLSearchParams(location.search);

/* ===== إعداد أيقونات Lucide ===== */
function initIcons(){
  if(window.lucide){ lucide.createIcons(); }
}
document.addEventListener('DOMContentLoaded', initIcons);

/* ===== الوضع الليلي ===== */
function initTheme(){
  var html = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem('madwanti-theme'); } catch(e){}
  if(saved === 'dark') html.classList.add('is-dark');
  document.querySelectorAll('.darkmode-toggle').forEach(function(btn){
    btn.addEventListener('click', function(){
      html.classList.toggle('is-dark');
      try { localStorage.setItem('madwanti-theme', html.classList.contains('is-dark') ? 'dark' : 'light'); } catch(e){}
    });
  });
}

/* ===== القائمة الجانبية ===== */
function initMobileMenu(){
  var open = document.getElementById('open-menu');
  var close = document.getElementById('close-menu');
  var overlay = document.getElementById('overlay');
  if(open) open.addEventListener('click', function(){ document.body.classList.add('nav-active'); });
  if(close) close.addEventListener('click', function(){ document.body.classList.remove('nav-active'); });
  if(overlay) overlay.addEventListener('click', function(){ document.body.classList.remove('nav-active'); });
}

/* ===== العودة للأعلى ===== */
function initBackTop(){
  var b = document.getElementById('back-top');
  if(!b) return;
  window.addEventListener('scroll', function(){ if(window.scrollY>=300) b.classList.add('show'); else b.classList.remove('show'); });
  b.addEventListener('click', function(){ window.scrollTo({top:0,behavior:'smooth'}); });
}

/* ===== البحث ===== */
function initSearch(){
  var toggle = document.getElementById('search-toggle');
  var overlay = document.getElementById('search-overlay');
  if(!toggle || !overlay) return;
  var input = overlay.querySelector('input');
  var results = overlay.querySelector('.search-results');
  var close = overlay.querySelector('.close-search');

  toggle.addEventListener('click', function(){
    overlay.classList.add('open');
    setTimeout(function(){ input.focus(); }, 100);
  });
  close.addEventListener('click', function(){ overlay.classList.remove('open'); });
  overlay.addEventListener('click', function(e){ if(e.target === overlay) overlay.classList.remove('open'); });
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') overlay.classList.remove('open'); });

  input.addEventListener('input', function(){
    var term = input.value.trim();
    if(!term){ results.innerHTML = ''; return; }
    var match = POSTS.filter(function(p){
      var hay = (p.title + ' ' + p.excerpt + ' ' + p.tag + ' ' + p.author).toLowerCase();
      return hay.indexOf(term.toLowerCase()) > -1;
    });
    if(!match.length){
      results.innerHTML = '<div class="r-empty">لا توجد نتائج مطابقة لبحثك.</div>';
      return;
    }
    results.innerHTML = match.map(function(p){
      return '<a href="post.html?id='+p.id+'">'
        + '<img src="'+p.img+'" alt="" />'
        + '<div><div class="r-title">'+p.title+'</div>'
        + '<div class="r-meta">'+p.tag+' • '+p.date+'</div></div></a>';
    }).join('');
  });
}

/* ===== أدوات مساعدة ===== */
function makeIcon(name, cls){
  cls = cls || 'lc';
  return '<i data-lucide="'+name+'" class="'+cls+'"></i>';
}

/* ===== الفوتر المشترك ===== */
function renderFooter(){
  var el = document.querySelector('[data-include-footer]');
  if(!el) return;
  el.innerHTML = '<div class="container row-x1"><div class="footer-widgets">'
    + '<div class="footer-sec">'
    +   '<div class="brand"><span class="logo-mark">'+makeIcon('compass')+'</span><span class="t">مدونتي<em>.</em></span></div>'
    +   '<p class="text">مجلة عربية للقصص الملهمة في السفر والتقنية والموسيقى والأخبار. محتوى منسّق بعناية يُحدّث كل أسبوع.</p>'
    +   '<ul class="social-icons">'
    +     '<li><a href="#" title="Facebook">'+makeIcon('facebook')+'</a></li>'
    +     '<li><a href="#" title="Instagram">'+makeIcon('instagram')+'</a></li>'
    +     '<li><a href="#" title="Twitter">'+makeIcon('twitter')+'</a></li>'
    +     '<li><a href="#" title="YouTube">'+makeIcon('youtube')+'</a></li>'
    +   '</ul>'
    + '</div>'
    + '<div class="footer-sec">'
    +   '<div class="widget-title"><h3 class="title">روابط مهمة</h3></div>'
    +   '<ul class="link-list">'
    +     '<li><a href="index.html">'+makeIcon('chevron-left')+'الرئيسية</a></li>'
    +     '<li><a href="page.html">'+makeIcon('chevron-left')+'من نحن</a></li>'
    +     '<li><a href="page.html#contact">'+makeIcon('chevron-left')+'اتصل بنا</a></li>'
    +     '<li><a href="category.html">'+makeIcon('chevron-left')+'جميع التصنيفات</a></li>'
    +   '</ul>'
    + '</div>'
    + '<div class="footer-sec">'
    +   '<div class="widget-title"><h3 class="title">التصنيفات</h3></div>'
    +   '<ul class="link-list">'
    +     '<li><a href="category.html?c=%D8%AA%D9%82%D9%86%D9%8A%D8%A9">'+makeIcon('chevron-left')+'تقنية</a></li>'
    +     '<li><a href="category.html?c=%D9%85%D9%88%D8%B3%D9%8A%D9%82%D9%89">'+makeIcon('chevron-left')+'موسيقى</a></li>'
    +     '<li><a href="category.html?c=%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1">'+makeIcon('chevron-left')+'أخبار</a></li>'
    +     '<li><a href="category.html?c=%D8%B3%D9%81%D8%B1">'+makeIcon('chevron-left')+'سفر</a></li>'
    +   '</ul>'
    + '</div>'
    + '<div class="footer-sec">'
    +   '<div class="widget-title"><h3 class="title">سياسات</h3></div>'
    +   '<ul class="link-list">'
    +     '<li><a href="page.html">'+makeIcon('chevron-left')+'سياسة الخصوصية</a></li>'
    +     '<li><a href="page.html">'+makeIcon('chevron-left')+'شروط الاستخدام</a></li>'
    +     '<li><a href="page.html">'+makeIcon('chevron-left')+'ملفات الارتباط</a></li>'
    +   '</ul>'
    + '</div>'
    + '</div></div>'
    + '<div class="footer-bar"><div class="container row-x1">'
    +   '<div class="footer-copyright">'+makeIcon('heart')+'© 2026 <a href="index.html">مدونتي</a> — جميع الحقوق محفوظة</div>'
    +   '<nav class="footer-menu"><ul>'
    +     '<li><a href="index.html">الرئيسية</a></li>'
    +     '<li><a href="page.html">من نحن</a></li>'
    +     '<li><a href="page.html#contact">اتصل بنا</a></li>'
    +   '</ul></nav>'
    + '</div></div>';
  initIcons();
}
function makeHTML(s){ return s; /* تعطيل حقن غير مقصود — نثق بالبيانات */ }

/* تشغيل السلوكيات المشتركة في كل الصفحات */
initTheme();
initMobileMenu();
initBackTop();
initSearch();
renderFooter();
