/* ============================================================
   Zouheir Ryad — Site data + shared logic
   Simple: slider + articles only (author name and date)
   ============================================================ */

var POSTS = [
  { id:1, title:"How to Build a Professional Blog on Your Own Hosting", date:"September 8, 2026", author:"Zouheir Ryad", img:"images/tech.webp",
    excerpt:"A practical step-by-step guide to turning a Blogger template into an independent site that runs on any hosting, with tips to boost speed and security.",
    body:"<p>Many people still believe that building a professional blog requires advanced coding skills or a big budget, but the truth is far simpler. Whether you plan a personal blog or a digital magazine, all you need is good hosting, your own domain, and a suitable content management system.</p><h2>Choose the right hosting</h2><p>Start by picking a reliable host that gives you full control over your files. Shared hosting is enough for beginners, while virtual servers suit larger sites.</p><blockquote>Your domain is your digital identity — choose it carefully and register it in your own name.</blockquote><h2>Install a blogging platform</h2><p>WordPress is the most popular choice thanks to its flexibility and huge plugin library, but there are lighter, faster alternatives like Ghost if you prefer simplicity.</p><h2>Key practical tips</h2><ul><li>Enable an SSL certificate to secure your site and improve its search ranking.</li><li>Use a fast, responsive theme that works on all devices.</li><li>Enable caching and compress images to speed up loading.</li><li>Create regular backups to protect your content.</li><li>Add analytics tools to measure your site's performance continuously.</li></ul><h2>Keep learning</h2><p>Blogging is a long journey, but persistence and consistency in publishing are the secret to success. Start now with a small step and keep improving.</p>" },
  { id:2, title:"The 12 Best Tools for Making Electronic Music", date:"September 7, 2026", author:"Zouheir Ryad", img:"images/music.webp",
    excerpt:"A comprehensive comparison of the most powerful software and hardware used in electronic music production, from home studio to professional level.",
    body:"<p>The world of electronic music production has evolved remarkably in recent years, and any talented creator can now build a complete digital studio inside their own computer.</p><h2>Digital Audio Workstations (DAW)</h2><p>The DAW is the heart of the digital studio. Among the most popular are Ableton Live, FL Studio and Logic Pro, each with its own community and a distinct workflow character.</p><blockquote>The tool doesn't make the musician — but the right choice unleashes your creativity.</blockquote><h2>Essential gear for beginners</h2><ul><li>An external audio interface to improve recording quality.</li><li>Studio monitors or accurate studio headphones.</li><li>A MIDI keyboard to control your sounds.</li><li>A set of free VSTs and plugins to get started.</li></ul><h2>A final tip</h2><p>Don't get caught up in collecting gear at the expense of learning and practice. Start with free tools, and add equipment gradually as your skills grow.</p>" },
  { id:3, title:"This Week's Latest Tech News", date:"September 6, 2026", author:"Zouheir Ryad", img:"images/news.webp",
    excerpt:"The biggest updates and launches in tech over the past few days, from AI to smartphones.",
    body:"<p>The tech sector is accelerating at an unprecedented pace, with announcements and launches rolling out almost daily. Here are the highlights from this week.</p><h2>Artificial Intelligence</h2><p>Major companies continue their race to develop smarter, more efficient language models, with growing focus on practical applications that make users' lives easier.</p><h2>New devices</h2><p>A new generation of smartphones was announced this week, featuring faster processors and improved cameras powered by image-processing algorithms.</p><blockquote>Whoever watches the trends today grabs tomorrow's opportunities.</blockquote><h2>Security and privacy</h2><p>Data protection is increasingly important as cyberattacks rise, which is why experts recommend enabling two-factor authentication and updating systems regularly.</p>" },
  { id:4, title:"Golden Tips to Improve Your Website Speed", date:"September 5, 2026", author:"Zouheir Ryad", img:"images/speed.webp",
    excerpt:"Effective ways to speed up your pages and improve visitor experience, which positively reflects on your search engine ranking.",
    body:"<p>Website speed is not just a luxury — it's a decisive factor in user experience and search rankings. Even a one-second delay can noticeably raise your bounce rate.</p><h2>Reduce page size</h2><p>Image compression is the fastest win you can achieve. Use modern formats like WebP and make sure to lazy-load your images.</p><h2>Enable caching</h2><p>Caching stores a ready-made copy of your pages so they load quickly instead of being regenerated on every visit.</p><blockquote>Every fraction of a second you shave off is one more visitor who may stay with you.</blockquote><ul><li>Use a Content Delivery Network (CDN) to bring content closer to visitors.</li><li>Reduce the number of HTTP requests by combining files.</li><li>Choose fast hosting suited to the size of your site.</li></ul>" },
  { id:5, title:"Your Complete Guide to Planning an Unforgettable Trip", date:"September 3, 2026", author:"Zouheir Ryad", img:"images/travel.webp",
    excerpt:"From choosing a destination to booking accommodation and organizing your budget — practical steps that make your next trip smooth and enjoyable from start to finish.",
    body:"<p>Traveling is one of the most beautiful experiences a person can live, but it needs smart planning to become a true pleasure rather than a tiring burden.</p><h2>Choose your destination wisely</h2><p>Set your budget first, then the right season, then pick a destination that suits your taste, interests and number of days off.</p><h2>Plan a flexible itinerary</h2><p>Leave room for surprises and free wandering. The best moments often happen outside strict plans.</p><blockquote>The most beautiful trips aren't to faraway places, but to experiences that stay in your memory.</blockquote><ul><li>Book flights and accommodation early to get the best prices.</li><li>Keep digital copies of your important documents.</li><li>Add travel insurance to avoid costly surprises.</li></ul>" },
  { id:6, title:"15 Best Coastal Destinations to Visit This Summer", date:"September 1, 2026", author:"Zouheir Ryad", img:"images/beach.webp",
    excerpt:"From Mediterranean shores to ocean islands — a list of the most beautiful coastal destinations for lovers of sun, sea and relaxation.",
    body:"<p>As summer arrives, travelers long for sandy beaches and turquoise waters. We've gathered a list of the most beautiful coastal destinations around the world.</p><h2>The Mediterranean</h2><p>From Spain's southern coast to the Greek islands and the shores of Morocco, the Mediterranean remains an ideal destination with its clear waters and rich culture.</p><h2>Off-the-beaten-path islands</h2><p>Look for less crowded islands for a calmer, more private experience, away from the hustle of famous destinations.</p><blockquote>A beautiful beach isn't measured by its size, but by the peace of mind it gives you.</blockquote><h2>Planning tips</h2><ul><li>Book seasonally and avoid peak crowds.</li><li>Don't forget sun protection.</li><li>Explore local restaurants to get to know the culture of the place.</li></ul>" }
];

/* ===== Lucide icons setup ===== */
function initIcons(){
  if(window.lucide){ lucide.createIcons(); }
}
document.addEventListener('DOMContentLoaded', initIcons);

/* ===== Dark mode ===== */
function initTheme(){
  var html = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem('madwanti-theme'); } catch(e){}
  if(saved === 'dark') html.classList.add('is-dark');
  document.querySelectorAll('.darkmode-toggle').forEach(function(btn){
    btn.setAttribute('aria-pressed', html.classList.contains('is-dark') ? 'true' : 'false');
    btn.addEventListener('click', function(){
      html.classList.toggle('is-dark');
      var dark = html.classList.contains('is-dark');
      btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
      try { localStorage.setItem('madwanti-theme', dark ? 'dark' : 'light'); } catch(e){}
    });
  });
}

/* ===== Helpers ===== */
function makeIcon(name, cls){
  cls = cls || 'lc';
  return '<i data-lucide="'+name+'" class="'+cls+'"></i>';
}

/* Run shared behaviors across all pages */
initTheme();
