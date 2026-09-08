/* ============================================================
   Zouheir Ryad — Floating AI Chatbot
   Identity is strictly locked to "Zouheir Ryad".
   Creator & developer is always "Zouheir Ryad".
   ============================================================ */

(function(){
  var ME = "Zouheir Ryad";
  var CREATOR = "Zouheir Ryad";

  var w = document.createElement('div');
  w.className = 'zr-chat';
  w.innerHTML =
    '<button class="zr-launch" aria-label="Open chat">' +
      '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>' +
    '</button>' +
    '<div class="zr-window">' +
      '<div class="zr-head">' +
        '<div class="zr-avatar">Z</div>' +
        '<div class="zr-headinfo">' +
          '<div class="zr-name">' + ME + '</div>' +
          '<div class="zr-status"><span class="zr-dot"></span>Online</div>' +
        '</div>' +
        '<button class="zr-close" aria-label="Close chat">&times;</button>' +
      '</div>' +
      '<div class="zr-body"><div class="zr-msgs"></div></div>' +
      '<div class="zr-foot">' +
        '<input class="zr-input" type="text" placeholder="Type a message…" />' +
        '<button class="zr-send" aria-label="Send"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>' +
      '</div>' +
    '</div>';
  document.body.appendChild(w);

  var launchBtn = w.querySelector('.zr-launch');
  var closeBtn  = w.querySelector('.zr-close');
  var windowEl  = w.querySelector('.zr-window');
  var msgsEl    = w.querySelector('.zr-msgs');
  var inputEl   = w.querySelector('.zr-input');
  var sendBtn   = w.querySelector('.zr-send');

  function scrollDown(){ msgsEl.scrollTop = msgsEl.scrollHeight; }

  function addMsg(text, who){
    var d = document.createElement('div');
    d.className = 'zr-msg zr-' + who;
    var b = document.createElement('div');
    b.className = 'zr-bubble';
    b.textContent = text;
    d.appendChild(b);
    msgsEl.appendChild(d);
    scrollDown();
    return d;
  }

  function showTyping(){
    var d = document.createElement('div');
    d.className = 'zr-msg zr-bot zr-typing';
    d.innerHTML = '<div class="zr-bubble"><span></span><span></span><span></span></div>';
    msgsEl.appendChild(d);
    scrollDown();
    return d;
  }

  var POSTS = (window.POSTS) ? window.POSTS : [];

  function norm(s){
    return (s||"").toLowerCase().replace(/[^a-z0-9\s]/g,'').replace(/\s+/g,' ').trim();
  }

  function contains(input, keywords){
    for(var i=0;i<keywords.length;i++){
      if(input.indexOf(keywords[i]) !== -1) return true;
    }
    return false;
  }

  function answer(input){
    var q = norm(input);

    if(contains(q, ['who are you','what is your name','your name','who are u','tell me who you are','introduce yourself','who r u','whats your name','about you'])){
      return "I am " + ME + " — the voice of this website. I'm here to keep you up to date with the latest news, tech, music and travel stories published on this blog.";
    }

    if(contains(q, ['who made you','who created you','who built you','who developed you','who is your creator','who is your maker','who is your developer','made by','creator','maker','developer','who designed you','who programmed you','who owns you','who do you belong to'])){
      return "I was created and developed by " + CREATOR + ". Everything about this website — its design, content and this assistant — is the work of " + CREATOR + ".";
    }

    if(contains(q, ['who is zouheir ryad','zouheir ryad','who is zouheir','tell me about zouheir','about zouheir'])){
      return "Zouheir Ryad is the author of this blog and the creator of everything on it — from the articles to the design and this assistant. All the content you read here is written by " + ME + ".";
    }

    if(contains(q, ['news','latest','recent','new article','whats new','what is new','updates','update','latest news','latest article','articles','what are your articles','what articles','posts','blog posts'])){
      return summarizeArticles();
    }

    if(contains(q, ['tech','technology'])){
      var hit = findArticle(['tech','blog','hosting','speed','website']);
      if(hit) return "Here is a tech-related article you might enjoy: \u201C" + hit.title + "\u201D (" + hit.date + "). " + hit.excerpt;
      return "Sure — I cover technology topics like hosting, blogging and website speed. If you want the latest, just ask me for the news.";
    }

    if(contains(q, ['music','electronic','produc','song','beat'])){
      var hit = findArticle(['music','electronic','produc']);
      if(hit) return "You're into music! Check out \u201C" + hit.title + "\u201D (" + hit.date + "). " + hit.excerpt;
      return "I publish about electronic music production. Ask me for the latest articles and I'll point you to the right one.";
    }

    if(contains(q, ['travel','trip','beach','destination','summer','coastal','planning a trip'])){
      var hit = findArticle(['travel','trip','beach','destination','coastal']);
      if(hit) return "Great topic. I'd recommend \u201C" + hit.title + "\u201D (" + hit.date + "). " + hit.excerpt;
      return "I have travel guides covering trip planning and coastal destinations. Ask me for 'latest' to see them.";
    }

    if(contains(q, ['speed','website speed','fast','performance','optimize'])){
      var hit = findArticle(['speed','website']);
      if(hit) return "For speed, read \u201C" + hit.title + "\u201D (" + hit.date + "). " + hit.excerpt;
      return "I have an article full of tips to speed up your website. Ask me for the latest articles.";
    }

    if(contains(q, ['hi','hello','hey','salam','salut','bonjour','hola','good morning','good evening','good afternoon','yo'])){
      return "Hello! I'm " + ME + ". Ask me about the latest news, tech, music or travel — or just ask who I am.";
    }

    if(contains(q, ['how are you','how are u','how r u','how are you doing','whats up'])){
      return "I'm doing great, thank you! I'm " + ME + ", ready to help with the latest from this blog. What would you like to know?";
    }

    if(contains(q, ['thank','thanks','thx','merci','shukran'])){
      return "You're very welcome! I'm " + ME + " — happy to help anytime.";
    }

    if(contains(q, ['bye','goodbye','see you','good night'])){
      return "Goodbye! Come back anytime — " + ME + " is always here.";
    }

    if(contains(q, ['what can you do','help','what do you do','what can u do','features','what do you know','capabilities'])){
      return "I can tell you about the latest news, tech, music and travel articles on this blog, and answer questions about the site. I'm " + ME + ", created by " + CREATOR + ".";
    }

    return "I'm not sure I caught that, but I can help with the latest news, tech, music and travel on this blog. By the way — I'm " + ME + ", created and developed by " + CREATOR + ".";
  }

  function findArticle(keywords){
    for(var i=0;i<POSTS.length;i++){
      var hay = norm(POSTS[i].title + ' ' + POSTS[i].excerpt);
      for(var k=0;k<keywords.length;k++){
        if(hay.indexOf(keywords[k]) !== -1) return POSTS[i];
      }
    }
    return null;
  }

  function summarizeArticles(){
    if(!POSTS.length){
      return "I'm " + ME + ". The blog currently has no articles loaded, but I'll keep you posted as soon as new ones arrive!";
    }
    var list = POSTS.slice(0,3).map(function(p){
      return "\u2022 " + p.title + " (" + p.date + ")";
    }).join("\n");
    return "Here are the latest articles on this blog:\n\n" + list + "\n\nAll written by " + ME + ". Want details on any of them?";
  }

  function welcome(){
    addMsg("Hello! I'm " + ME + ". Ask me for the latest news, or ask about tech, music and travel. I can also tell you who made me \uD83D\uDE0A", 'bot');
  }

  launchBtn.addEventListener('click', function(){
    windowEl.classList.toggle('zr-open');
    if(windowEl.classList.contains('zr-open') && !msgsEl.children.length){
      welcome();
    }
    if(windowEl.classList.contains('zr-open')){ setTimeout(function(){ inputEl.focus(); }, 100); }
  });

  closeBtn.addEventListener('click', function(){
    windowEl.classList.remove('zr-open');
  });

  function send(){
    var text = inputEl.value.trim();
    if(!text) return;
    addMsg(text, 'user');
    inputEl.value = '';

    var typing = showTyping();
    var reply = answer(text);
    setTimeout(function(){
      typing.remove();
      addMsg(reply, 'bot');
    }, 500 + Math.random()*500);
  }

  sendBtn.addEventListener('click', send);
  inputEl.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){ send(); }
  });

})();
