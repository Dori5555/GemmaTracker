const yaxSealImage = 'https://i.imgur.com/34iDx9G.png';

const yaxContacts = {
  friends: {
    img: 'https://i.pinimg.com/736x/eb/08/92/eb08927869dff3a572cdd9a9d892861d.jpg',
    alt: 'Barát',
    name: 'Közel a távolsághoz',
    desc: 'Sosem tagadtam, hogy nem könnyű velem a barátság, nincs is sok belőle. Nehezen nyílok meg és ritkán lelkesedem látványosan, ráadásul leginkább a saját céljaim vezérelnek. Viszont különösen jól látom az emberekben a potenciált, a tehetséget és azokat az értékeket, amik elsőre nem mindenkinek tűnnek fel. Ha mégis elnyernéd a bizalmamat, barátságom csendes, visszafogott tele rengeteg elvárással, de cserébe mindent az eszembe vések.'
  },
  enemies: {
    img: 'https://i.pinimg.com/736x/78/7b/93/787b93d186a80ba110f6b98f050b6866.jpg',
    alt: 'Ellenség',
    name: 'Penge a csend mögött',
    desc: 'Ellenségemnek lenned olyan, mintha valaki csendben figyelné minden hibádat és évekkel később is pontosan emlékezne rájuk. Nem dühből pusztítok, hanem hideg fejjel, számító pontossággal, és sosem teszek felesleges lépést. A legijesztőbb talán az, hogy amikor átgázolok rajtad, azt úgy teszem, mintha már rég eldőlt volna, hogy ez elkerülhetetlen. És ez így is van.'
  },
  loves: {
    img: 'https://i.pinimg.com/1200x/34/7e/0a/347e0ae7706276ee4a0aea2c11ec4bd0.jpg',
    alt: 'Szerelem',
    name: 'Kegyetlen világból megőrzött gyengédség',
    desc: 'Lassan, évek alatt engedlek be egy gondosan őrzött világba, ahol az érzelmek ritkán hangosak és talán nem is annyira mélyek, amennyire szeretném. Nehéz lenyűgözni, magasak az elvárásaim, és ugyanúgy számon tartom a hibáidat, mint bárki másnál. Viszont ha valóban eljutsz odáig, hogy a bizalmamat és a gyengédségemet megkapda, érted csendben, kérdés nélkül mennék el a legtovább. Bár egyetlen ilyen ember van, aki eddig eljutott erre a szintre...'
  },
  other: {
    img: 'https://i.pinimg.com/1200x/8c/81/ff/8c81ff72f50f7b181d38fd9b6b6fcb20.jpg',
    alt: 'Egyéb',
    name: 'A céljai mögött eltűnő ember',
    desc: 'Úgy látsz te is engem, mint valakit, aki hideg, kegyetlen és túl könnyen lép át másokon, mintha minden ember csak akadály lenne az úton, igaz? Ne aggódj, sokan vannak így. Távolságtartásom gyakran felsőbbrendűségnek vagy gonoszságnak hiszed, pedig sokszor egyszerűen csak annyira a céljaimra figyelek, hogy nincs időm és ingerenciám mindenkinek megfelelni vagy mindenkit észrevenni, meg nem is akarok. Kívülről keménynek és ridegnek tűnök, miközben belül inkább egy állandóan előre néző ember vagyok, aki ritkán áll meg magyarázkodni.'
  }
};

function showYaxContact(type, button) {
  const contact = yaxContacts[type];

  document.getElementById('yaxContactImg').src = contact.img;
  document.getElementById('yaxContactImg').alt = contact.alt;
  document.getElementById('yaxContactName').textContent = contact.name;
  document.getElementById('yaxContactDesc').textContent = contact.desc;

  document.querySelectorAll('.yax-contact-tab').forEach(tab => tab.classList.remove('active'));
  button.classList.add('active');
}

function escapeYaxleyHTML(text) {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function generateYaxleyLetter() {
  const title = document.getElementById('yaxLetterTitle').value.trim();
  const message = document.getElementById('yaxLetterMessage').value.trim();
  const signature = document.getElementById('yaxLetterSignature').value.trim();

  if (!title || !message || !signature) {
    alert('Kérlek, töltsd ki az összes mezőt!');
    return;
  }

  const safeTitle = escapeYaxleyHTML(title);
  const safeMessage = escapeYaxleyHTML(message);
  const safeSignature = escapeYaxleyHTML(signature);

  const letterHTML = `<style>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Italianno&display=swap');

.yax-letter {
  background: radial-gradient(circle at 50% 18%, rgba(131, 173, 181, 0.08), transparent 32%), radial-gradient(circle at 50% 88%, rgba(75, 126, 138, 0.1), transparent 28%), linear-gradient(180deg, #141a1d 0%, #0e1214 100%);
  border: 1px solid rgba(131, 173, 181, 0.26);
  padding: 30px 40px 24px;
  border-radius: 4px;
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.48), inset 0 0 42px rgba(131, 173, 181, 0.05), inset 0 0 90px rgba(0, 0, 0, 0.5);
  position: relative;
  font-family: 'Libre Baskerville', Georgia, serif;
  color: #83adb5;
  max-width: 600px;
  margin: 0 auto;
}

.yax-letter::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid rgba(75, 126, 138, 0.45);
  box-shadow: inset 0 0 24px rgba(75, 126, 138, 0.12), 0 0 18px rgba(75, 126, 138, 0.08);
  pointer-events: none;
  border-radius: 4px;
}

.yax-letter-title {
  font-family: 'Italianno', cursive;
  font-size: 32px;
  color: #4b7e8a;
  text-align: center;
  margin-bottom: 18px;
  letter-spacing: 0.06em;
  text-shadow: 0 0 20px rgba(75, 126, 138, 0.35);
}

.yax-letter-ornament {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 16px 0;
}

.yax-letter-ornament-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(75, 126, 138, 0.85), transparent);
}

.yax-letter-ornament-diamond {
  width: 6px;
  height: 6px;
  border: 1px solid #4b7e8a;
  transform: rotate(45deg);
  box-shadow: 0 0 8px rgba(75, 126, 138, 0.45);
}

.yax-letter-body {
  font-size: 11px;
  line-height: 1.8;
  text-align: justify;
  white-space: pre-wrap;
  margin-bottom: 16px;
  color: #83adb5;
  text-shadow: 0 0 10px rgba(131, 173, 181, 0.12);
}

.yax-letter-signature {
  font-family: 'Italianno', cursive;
  font-size: 24px;
  color: #83adb5;
  letter-spacing: 0.06em;
  text-align: right;
  margin-bottom: 20px;
  text-shadow: 0 0 14px rgba(131, 173, 181, 0.2);
}

.yax-letter-footer {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  }

.yax-letter-seal {
  width: 120px;
  height: 120px;
  object-fit: contain;
  opacity: 0.9;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.yax-letter-footer-text {
  font-family: 'Italianno', cursive;
  font-size: 14px;
  color: #4b7e8a;
  border-top: 1px solid rgba(75, 126, 138, 0.42);
  letter-spacing: 0.06em;
}
</style>

<div class="yax-letter">
  <div class="yax-letter-title">${safeTitle}</div>

  <div class="yax-letter-ornament">
    <div class="yax-letter-ornament-line"></div>
    <div class="yax-letter-ornament-diamond"></div>
    <div class="yax-letter-ornament-line"></div>
  </div>

  <div class="yax-letter-body">${safeMessage}</div>

  <div class="yax-letter-signature">${safeSignature}</div>

<div class="yax-letter-ornament">
    <div class="yax-letter-ornament-line"></div>
    <div class="yax-letter-ornament-diamond"></div>
    <div class="yax-letter-ornament-line"></div>
  </div>

  <div class="yax-letter-footer">
    <img class="yax-letter-seal" src="${yaxSealImage}" alt="Yaxley Seal">
    <div class="yax-letter-footer-text">Yaxley · est. 1620</div>
  </div>
</div>`;

  document.getElementById('yaxOutputCode').textContent = letterHTML;
  document.getElementById('yaxInlineOutput').classList.add('active');
}
