(function(){

/* ================= KAPCSOLATOK ================= */
var tessaRelations = {
  friend:{
    color:"#f69f09", glow:"rgba(246,159,9,.3)",
    icon:'<svg viewBox="0 0 24 24"><circle cx="9" cy="12" r="6"></circle><circle cx="15" cy="12" r="6"></circle></svg>',
    text:"A barátság nálam olyan, mint egy jól hangolt duett — nem kell minden hangot leírni hozzá, elég, ha tudjuk, mikor jön be a másik szólam."
  },
  family:{
    color:"#2f6b3f", glow:"rgba(47,107,63,.32)",
    icon:'<svg viewBox="0 0 24 24"><path d="M12 2 L7 9 H9.5 L5 15 H19 L14.5 9 H17 Z"></path><path d="M11 15 V20"></path><path d="M13 15 V20"></path><path d="M9 20 H15"></path></svg>',
    text:"A családom nekem az alaphang — az a hang, amihez minden más dallamot visszahangolok, ha elvesztem az irányt."
  },
  enemy:{
    color:"#e1382a", glow:"rgba(225,56,42,.3)",
    icon:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"></circle><path d="M12 4 L10 10 L14 12 L9 20"></path></svg>',
    text:"Vannak disszonanciák, amiket sosem oldok fel — nem mert nem tudnám, hanem mert néhány feszültségre szükség van, hogy halljam, ki vagyok."
  },
  love:{
    color:"#7a2748", glow:"rgba(122,39,72,.32)",
    icon:'<svg viewBox="0 0 24 24"><path d="M12 20 C4 14 3 8 8 6 C10.5 5 12 7 12 8 C12 7 13.5 5 16 6 C21 8 20 14 12 20 Z"></path></svg>',
    text:"Ha valakit szeretek, a dallam magától jön — nem kell hozzá papír, csak idő, hogy elhiggyem, ez nem fog megint kicsúszni a kezemből."
  },
  other:{
    color:"#9fd1e8", glow:"rgba(159,209,232,.3)",
    icon:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"></circle><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"></circle></svg>',
    text:"Nem minden kapcsolatnak kell címkét adni. Néhányat inkább rögtönzésnek hívok — még nem tudom, merre tart, de szívesen followolom tovább."
  }
};

var tabsWrap = document.getElementById("tessaTabs");
var relationBox = document.getElementById("tessaRelationBox");

function tessaLoadRelation(key){
  var d = tessaRelations[key];
  relationBox.classList.remove("tessaActive");
  setTimeout(function(){
    relationBox.innerHTML =
      '<div class="tessaEmblem" style="--em-color:' + d.color + ';--em-glow:' + d.glow + '">' + d.icon + '</div>' +
      '<div class="tessaRelationText">' + d.text + '</div>';
    relationBox.classList.add("tessaActive");
  }, 10);
}

tabsWrap.querySelectorAll(".tessaTab").forEach(function(btn){
  btn.addEventListener("click", function(){
    tabsWrap.querySelectorAll(".tessaTab").forEach(function(b){ b.classList.remove("tessaActive"); });
    btn.classList.add("tessaActive");
    tessaLoadRelation(btn.dataset.cat);
  });
});
tessaLoadRelation("friend");

/* ================= ZENEDARABOK ================= */
var tessaPieces = [
  { key:"nocturne", name:"Nocturne a hallgatás óráiban",      mood:"calm",       notes:["whole","half","quarter"] },
  { key:"etud1",    name:"Etűd a szavak között",              mood:"anxious",    notes:["eighth","eighth","quarter"] },
  { key:"keringo",  name:"Keringő kölcsönfényben",            mood:"romantic",   notes:["quarter","eighth","half"] },
  { key:"elegia",   name:"Elégia a ki nem mondott névért",    mood:"mourning",   notes:["whole","whole","half"] },
  { key:"prelud",   name:"Prelúdium a megbocsátáshoz",        mood:"hopeful",    notes:["quarter","eighth","quarter"] },
  { key:"altato",   name:"Altató egy nyugtalan szívnek",      mood:"comfort",    notes:["half","whole","half"] },
  { key:"fanfar",   name:"Fanfár egy váratlan szövetségesnek",mood:"triumphant", notes:["eighth","eighth","eighth"] },
  { key:"etud2",    name:"Etűd a csendben",                   mood:"distant",    notes:["whole","half","whole"] },
  { key:"duett",    name:"Duett két árnyéknak",                mood:"nostalgic", notes:["half","quarter","half"] }
];

function tessaNoteClass(value){
  return value === "quarter" ? "" : " tessa" + value.charAt(0).toUpperCase() + value.slice(1);
}

function tessaStaffHTML(mood, notes){
  notes = notes || ["quarter","quarter","quarter"];
  return '<div class="tessaStaff tessaMood-' + mood + '">' +
    '<span class="tessaStaffLine"></span><span class="tessaStaffLine"></span><span class="tessaStaffLine"></span><span class="tessaStaffLine"></span>' +
    '<span class="tessaNote tessaNote1' + tessaNoteClass(notes[0]) + '"></span>' +
    '<span class="tessaNote tessaNote2' + tessaNoteClass(notes[1]) + '"></span>' +
    '<span class="tessaNote tessaNote3' + tessaNoteClass(notes[2]) + '"></span>' +
    '</div>';
}

var shelf = document.getElementById("tessaShelf");
var selectedPiece = null;

tessaPieces.forEach(function(p){
  var el = document.createElement("div");
  el.className = "tessaPiece";
  el.innerHTML = tessaStaffHTML(p.mood, p.notes) + '<div class="tessaPieceName">' + p.name + '</div>';
  el.addEventListener("click", function(){
    shelf.querySelectorAll(".tessaPiece").forEach(function(c){ c.classList.remove("tessaSelected"); });
    el.classList.add("tessaSelected");
    selectedPiece = p;
    document.getElementById("tessaPreviewIcon").innerHTML = tessaStaffHTML(p.mood, p.notes);
    document.getElementById("tessaPreviewPiece").textContent = p.name;
    document.getElementById("tessaError").classList.remove("tessaShow");
  });
  shelf.appendChild(el);
});

/* ================= ELŐNÉZET + GENERÁLÁS ================= */
var titleInput = document.getElementById("tessaTitleInput");
var textInput  = document.getElementById("tessaTextInput");
var previewTitle = document.getElementById("tessaPreviewTitle");
var previewBody  = document.getElementById("tessaPreviewBody");
var errorBox = document.getElementById("tessaError");
var output = document.getElementById("tessaOutput");

titleInput.addEventListener("input", function(){
  previewTitle.textContent = titleInput.value || "Cím";
});
textInput.addEventListener("input", function(){
  previewBody.textContent = textInput.value || "Az üzenet itt fog megjelenni.";
});

document.getElementById("tessaGenerateBtn").addEventListener("click", function(){
  var title = titleInput.value.trim();
  var text  = textInput.value.trim();

  if(!selectedPiece || !title || !text){
    errorBox.classList.add("tessaShow");
    output.value = "";
    return;
  }
  errorBox.classList.remove("tessaShow");

  output.value = "[center][html]\n" +
'<link href="https://fonts.googleapis.com/css2?family=Lavishly+Yours&family=Cormorant+Garamond:wght@400;500;600&display=swap" rel="stylesheet">\n' +
"<style>\n" +
".tessaGift{display:flex;gap:12px;align-items:flex-start;text-align:left;max-width:300px;width:100%;box-sizing:border-box;background:#0a0c0e;border:1px solid rgba(246,159,9,.4);border-radius:12px 12px 16px 16px;padding:14px;box-shadow:0 0 0 1px rgba(246,159,9,.15),0 12px 26px rgba(0,0,0,.55);font-family:'Cormorant Garamond',Georgia,serif;color:#ece6da;overflow:hidden}\n" +
".tessaGiftLeft{flex:0 0 auto;width:60px;display:flex;flex-direction:column;align-items:center;gap:4px}\n" +
".tessaGiftPiece{font-family:'Lavishly Yours',cursive;font-size:11px;line-height:1.2;color:#b8945d;text-align:center;overflow-wrap:break-word;word-break:break-word}\n" +
".tessaGiftText{min-width:0;flex:1}\n" +
".tessaGift h4{margin:0 0 4px;font-family:'Lavishly Yours',cursive;font-size:21px;font-weight:400;color:#f69f09;overflow-wrap:break-word;word-break:break-word;max-width:100%}\n" +
".tessaGift p{margin:0;font-size:14px;line-height:1.55;color:#ed6721;white-space:pre-line;overflow-wrap:break-word;word-break:break-word;max-width:100%}\n" +
".tessaGiftIcon{width:56px}\n" +
".tessaStaff{position:relative;height:42px}\n" +
".tessaStaffLine{position:absolute;left:6%;right:6%;height:1px;background:rgba(184,148,93,.3)}\n" +
".tessaStaffLine:nth-child(1){top:12%}.tessaStaffLine:nth-child(2){top:34%}.tessaStaffLine:nth-child(3){top:56%}.tessaStaffLine:nth-child(4){top:78%}\n" +
".tessaNote{position:absolute;width:6px;height:5px;border-radius:50%;bottom:14px;background:var(--note-color,#f69f09);transform:rotate(-18deg)}\n" +
".tessaNote::after{content:'';position:absolute;right:-1px;bottom:2px;width:1.4px;height:13px;background:var(--note-color,#f69f09);border-radius:1px}\n" +
".tessaNote1{left:22%}.tessaNote2{left:48%;animation-delay:.35s!important}.tessaNote3{left:74%;animation-delay:.7s!important}\n" +
".tessaNote.tessaWhole{background:transparent;border:1.2px solid var(--note-color,#f69f09)}.tessaNote.tessaWhole::after{content:none}\n" +
".tessaNote.tessaHalf{background:transparent;border:1.2px solid var(--note-color,#f69f09)}\n" +
".tessaNote.tessaEighth::before{content:'';position:absolute;top:-13px;right:-3px;width:5px;height:7px;border-radius:0 70% 40% 0;background:var(--note-color,#f69f09);transform:rotate(10deg)}\n" +
"@keyframes tessaDrift{0%{transform:translateY(0) translateX(0) rotate(-18deg);opacity:.5}50%{transform:translateY(-8px) translateX(3px) rotate(-14deg);opacity:1}100%{transform:translateY(0) translateX(0) rotate(-18deg);opacity:.5}}\n" +
"@keyframes tessaRise{0%{transform:translateY(6px);opacity:0}45%{opacity:1}100%{transform:translateY(-14px);opacity:0}}\n" +
"@keyframes tessaJitter{0%,100%{transform:translate(0,0) rotate(-18deg)}20%{transform:translate(-2px,-3px) rotate(-25deg)}40%{transform:translate(2px,2px) rotate(-9deg)}60%{transform:translate(-1px,-2px) rotate(-21deg)}80%{transform:translate(1px,3px) rotate(-13deg)}}\n" +
"@keyframes tessaFall{0%{transform:translateY(-8px);opacity:0}30%{opacity:1}100%{transform:translateY(12px);opacity:0}}\n" +
"@keyframes tessaSway{0%,100%{transform:translateX(-4px) rotate(-24deg)}50%{transform:translateX(4px) rotate(-10deg)}}\n" +
"@keyframes tessaMarch{0%{transform:translate(0,5px);opacity:0}30%{opacity:1}65%{transform:translate(6px,-8px);opacity:1}100%{transform:translate(11px,-15px);opacity:0}}\n" +
"@keyframes tessaFade{0%,100%{opacity:.15}50%{opacity:.75}}\n" +
"@keyframes tessaFlicker{0%,100%{opacity:1}45%{opacity:.25}60%{opacity:.85}75%{opacity:.35}}\n" +
"@keyframes tessaWaltz{0%{transform:translate(0,0) rotate(-18deg)}33%{transform:translate(5px,-7px) rotate(2deg)}66%{transform:translate(-4px,-3px) rotate(12deg)}100%{transform:translate(0,0) rotate(-18deg)}}\n" +
"@keyframes tessaEcho{0%{transform:translate(0,0);opacity:.4}25%{transform:translate(5px,-5px);opacity:1}50%{transform:translate(0,0);opacity:.4}75%{transform:translate(-5px,5px);opacity:1}100%{transform:translate(0,0);opacity:.4}}\n" +
".tessaMood-calm .tessaNote{animation:tessaDrift 6s ease-in-out infinite;--note-color:#9fd1e8}\n" +
".tessaMood-anxious .tessaNote{animation:tessaJitter 1.9s ease-in-out infinite,tessaFlicker 1.4s ease-in-out infinite;--note-color:#e1382a}\n" +
".tessaMood-romantic .tessaNote{animation:tessaWaltz 3.2s ease-in-out infinite;--note-color:#7a2748}\n" +
".tessaMood-mourning .tessaNote{animation:tessaFall 5s linear infinite;--note-color:#8f9dc9}\n" +
".tessaMood-hopeful .tessaNote{animation:tessaRise 4s ease-in-out infinite;--note-color:#ffe6ac}\n" +
".tessaMood-comfort .tessaNote{animation:tessaSway 5.4s ease-in-out infinite;--note-color:#e8b979}\n" +
".tessaMood-triumphant .tessaNote{animation:tessaMarch 2.6s ease-in-out infinite;--note-color:#f6c453}\n" +
".tessaMood-distant .tessaNote{animation:tessaFade 4s ease-in-out infinite;--note-color:#9a958d}\n" +
".tessaMood-nostalgic{filter:sepia(.55)}.tessaMood-nostalgic .tessaNote{animation:tessaEcho 6s ease-in-out infinite;--note-color:#c99a5b}\n" +
"</style>\n" +
'<div class="tessaGift">' +
  '<div class="tessaGiftLeft"><div class="tessaGiftIcon">' + tessaStaffHTML(selectedPiece.mood, selectedPiece.notes) + '</div><div class="tessaGiftPiece">' + selectedPiece.name + '</div></div>' +
  '<div class="tessaGiftText"><h4>' + title + '</h4><p>' + text + '</p></div>' +
"</div>\n" +
"[/html][/center]";
});

})();
