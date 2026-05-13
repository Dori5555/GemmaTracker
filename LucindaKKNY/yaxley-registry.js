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
  background: linear-gradient(to bottom, #f4e8d0 0%, #e8dcc4 100%);
  padding: 30px 40px 24px;
  border-radius: 4px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), inset 0 0 60px rgba(139, 115, 85, 0.1);
  position: relative;
  font-family: 'Libre Baskerville', serif;
  color: #3a2f28;
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
  background: repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(139, 115, 85, 0.03) 1px, rgba(139, 115, 85, 0.03) 2px);
  pointer-events: none;
  border-radius: 4px;
}

.yax-letter-title {
  font-family: 'Italianno', cursive;
  font-size: 32px;
  color: #4b3621;
  text-align: center;
  margin-bottom: 18px;
  letter-spacing: 0.06em;
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
  background: linear-gradient(to right, transparent, rgba(75, 54, 33, 0.3), transparent);
}

.yax-letter-ornament-diamond {
  width: 6px;
  height: 6px;
  border: 1px solid #6b5644;
  transform: rotate(45deg);
}

.yax-letter-body {
  font-size: 11px;
  line-height: 1.8;
  text-align: justify;
  white-space: pre-wrap;
  margin-bottom: 16px;
}

.yax-letter-signature {
  font-family: 'Italianno', cursive;
  font-size: 24px;
  color: #4b3621;
  letter-spacing: 0.06em;
  text-align: right;
  margin-bottom: 20px;
}

.yax-letter-footer {
  text-align: center;
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid rgba(75, 54, 33, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.yax-letter-seal {
  width: 80px;
  height: 80px;
  object-fit: contain;
  opacity: 0.9;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.yax-letter-footer-text {
  font-family: 'Italianno', cursive;
  font-size: 14px;
  color: #6b5644;
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
