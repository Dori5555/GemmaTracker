const yaxSealImage = 'https://i.imgur.com/34iDx9G.png';

const yaxContacts = {
  friends: {
    img: 'https://i.pinimg.com/736x/62/3c/75/623c7552f562b9aa51d81327b8f4b3f2.jpg',
    alt: 'Friend',
    name: 'Solace Barbon',
    desc: 'Childhood acquaintance, fellow Wampus student with shared interests in ancient runes.'
  },
  enemies: {
    img: 'https://i.pinimg.com/736x/15/84/1d/15841d2133a5533c300eceb9cb7e21d3.jpg',
    alt: 'Enemy',
    name: 'Example Enemy',
    desc: 'A rival from an opposing house with conflicting ideologies.'
  },
  loves: {
    img: 'https://i.pinimg.com/736x/0a/0c/c8/0a0cc8eb2942193b5cd548684d75e723.jpg',
    alt: 'Love',
    name: 'Example Love',
    desc: 'A complicated relationship marked by unspoken feelings and shared secrets.'
  },
  other: {
    img: 'https://i.pinimg.com/1200x/1b/fa/6d/1bfa6d8e4fd71b9be8e901d6d8255748.jpg',
    alt: 'Other',
    name: 'Example Other',
    desc: 'A mentor figure who provides guidance in times of uncertainty.'
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
  max-width: 500px;
  min-height: 700px;
  margin: 0 auto;
  padding: 42px 42px 20px;
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  background:
    radial-gradient(circle at 50% 16%, rgba(131, 173, 181, 0.08), transparent 34%),
    radial-gradient(circle at 50% 92%, rgba(75, 126, 138, 0.10), transparent 30%),
    linear-gradient(180deg, #141a1d 0%, #0e1214 100%);
  border: 1px solid rgba(131, 173, 181, 0.26);
  box-shadow:
    0 18px 45px rgba(0, 0, 0, 0.48),
    inset 0 0 42px rgba(131, 173, 181, 0.05),
    inset 0 0 90px rgba(0, 0, 0, 0.5);
  font-family: 'Libre Baskerville', Georgia, serif;
  color: #83adb5;
}

.yax-letter::before {
  content: '';
  position: absolute;
  inset: 12px;
  border: 1px solid rgba(75, 126, 138, 0.45);
  box-shadow:
    inset 0 0 24px rgba(75, 126, 138, 0.12),
    0 0 18px rgba(75, 126, 138, 0.08);
  pointer-events: none;
  border-radius: 4px;
}

.yax-letter::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(131, 173, 181, 0.018) 2px, rgba(131, 173, 181, 0.018) 3px),
    radial-gradient(circle at 14% 18%, rgba(255, 255, 255, 0.035), transparent 13%),
    radial-gradient(circle at 84% 78%, rgba(255, 255, 255, 0.025), transparent 15%);
  pointer-events: none;
  mix-blend-mode: screen;
}

.yax-letter-title {
  position: relative;
  z-index: 1;
  font-family: 'Italianno', cursive;
  font-size: 42px;
  color: #4b7e8a;
  text-align: center;
  margin-bottom: 18px;
  letter-spacing: 0.08em;
  text-shadow: 0 0 20px rgba(75, 126, 138, 0.35);
}

.yax-letter-ornament {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 16px 0 24px;
}

.yax-letter-ornament:last-of-type {
  margin: 22px 0 10px;
}

.yax-letter-ornament-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(75, 126, 138, 0.85), transparent);
}

.yax-letter-ornament-diamond {
  width: 7px;
  height: 7px;
  border: 1px solid #4b7e8a;
  transform: rotate(45deg);
  box-shadow: 0 0 8px rgba(75, 126, 138, 0.45);
}

.yax-letter-body {
  position: relative;
  z-index: 1;
  min-height: 360px;
  font-size: 12px;
  line-height: 1.9;
  text-align: justify;
  white-space: pre-wrap;
  color: #83adb5;
  margin-bottom: 0;
  text-shadow: 0 0 10px rgba(131, 173, 181, 0.12);
}

.yax-letter-signature {
  position: relative;
  z-index: 1;
  font-family: 'Italianno', cursive;
  font-size: 30px;
  color: #83adb5;
  letter-spacing: 0.06em;
  text-align: center;
  line-height: 1;
  margin: 0 0 4px;
  text-shadow: 0 0 14px rgba(131, 173, 181, 0.2);
}

.yax-letter-footer {
  position: relative;
  z-index: 1;
  text-align: center;
  margin-top: 4px;
  padding-top: 4px;
  border-top: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.yax-letter-seal {
  width: 128px;
  height: 128px;
  object-fit: contain;
  opacity: 0.68;
  mix-blend-mode: screen;
  filter:
    sepia(1)
    hue-rotate(140deg)
    saturate(1.2)
    brightness(0.82)
    contrast(1.25)
    drop-shadow(0 0 10px rgba(75, 126, 138, 0.2));
}

.yax-letter-footer-text {
  font-family: 'Italianno', cursive;
  font-size: 14px;
  color: #4b7e8a;
  letter-spacing: 0.08em;
  line-height: 1;
  margin-top: -4px;
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

  <div class="yax-letter-ornament">
    <div class="yax-letter-ornament-line"></div>
    <div class="yax-letter-ornament-diamond"></div>
    <div class="yax-letter-ornament-line"></div>
  </div>

  <div class="yax-letter-signature">${safeSignature}</div>

  <div class="yax-letter-footer">
    <img class="yax-letter-seal" src="${yaxSealImage}" alt="Yaxley Seal">
    <div class="yax-letter-footer-text">Yaxley · est. 1620</div>
  </div>
</div>`;

  document.getElementById('yaxOutputCode').textContent = letterHTML;
  document.getElementById('yaxInlineOutput').classList.add('active');
}
