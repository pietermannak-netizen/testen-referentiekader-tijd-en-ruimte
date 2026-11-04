// De vijf hoofdperiodes uit het referentiekader voor onderbouw VO (p. 15–16).
const periods = [
  { id: 'prehistory', name: 'Prehistorie', dates: 'tot ca. 3000 v. Chr.', alias: 'Tijd van jagers en boeren', icon: '🌾', color: '#8d9f70', tint: '#f2f4e9' },
  { id: 'antiquity', name: 'Oudheid', dates: '3000 v. Chr. – 500 na Chr.', alias: 'Tijd van oude rijken', icon: '🏛️', color: '#d3a85c', tint: '#faf5e9' },
  { id: 'medieval', name: 'Middeleeuwen', dates: '500 – 1500', alias: 'Tijd van standen en steden', icon: '🏰', color: '#b396b0', tint: '#f5eef5' },
  { id: 'earlymodern', name: 'Vroegmoderne tijd', dates: '1500 – 1800', alias: 'Tijd van pakhuizen en plantages', icon: '⛵', color: '#7c9eac', tint: '#edf3f5' },
  { id: 'modern', name: 'Moderne tijd', dates: '1800 – heden', alias: 'Tijd van burgers en stoommachines / Tijd van Wereldoorlogen en mensenrechten', icon: '🚂', color: '#cf8b6b', tint: '#faf0e9' },
];

// Eigen lesvoorbeelden: pas hier titels, jaartallen en uitleg aan.
const events = [
  { id: 'farming', period: 'prehistory', title: 'Van verzamelen naar verbouwen', description: 'Mensen gaan graan verbouwen en dieren houden. Ze blijven vaker op één plek wonen.', date: 'ca. 10.000 v. Chr.', place: 'Zuidwest-Azië', icon: '🌾', explanation: 'In Zuidwest-Azië ontstaat landbouw. De overgang naar landbouwsamenlevingen past bij de prehistorie. In andere gebieden gebeurt dit later.' },
  { id: 'hunebed', period: 'prehistory', title: 'Een graf van reuzenstenen', description: 'Boerengemeenschappen bouwen hunebedden om hun doden in te begraven.', date: 'ca. 3400 v. Chr.', place: 'Drenthe', icon: '🪨', explanation: 'De hunebedbouwers leven van landbouw. Deze hunebedden worden vóór 3000 v. Chr. gebouwd en passen in de prehistorie.' },
  { id: 'catal', period: 'prehistory', title: 'Buren zonder straten', description: 'In Çatalhöyük wonen mensen in huizen die dicht tegen elkaar staan. Ze gaan via het dak naar binnen.', date: 'ca. 7000 v. Chr.', place: 'Anatolië', icon: '🏘️', explanation: 'Deze vroege boerennederzetting laat zien hoe landbouw het samenleven verandert, duizenden jaren vóór de oudheid.' },
  { id: 'athens', period: 'antiquity', title: 'Stemmen in Athene', description: 'Mannelijke burgers beslissen mee in de volksvergadering. Vrouwen, tot slaaf gemaakten en vreemdelingen zijn uitgesloten.', date: 'ca. 450 v. Chr.', place: 'Griekenland', icon: '🏛️', explanation: 'De Atheense democratie hoort bij ideeën over burgerschap in de oudheid. De politieke rechten zijn veel beperkter dan in onze democratie.' },
  { id: 'roman', period: 'antiquity', title: 'Romeinen aan de Rijn', description: 'Romeinse soldaten bewaken forten langs de noordgrens van hun rijk, ook in het huidige Nederland.', date: 'ca. 100 na Chr.', place: 'Langs de Rijn', icon: '🛡️', explanation: 'Het Romeinse Rijk hoort bij de oudheid. Langs de Rijn verspreiden handelaren en soldaten Romeinse gebruiken en producten.' },
  { id: 'alexander', period: 'antiquity', title: 'Griekse cultuur op reis', description: 'Alexander de Grote verovert een enorm gebied. Griekse en plaatselijke culturen beïnvloeden elkaar.', date: 'ca. 330 v. Chr.', place: 'Van Griekenland tot Azië', icon: '🏺', explanation: 'De veroveringen van Alexander zijn een voorbeeld van de verspreiding van antieke culturen in de oudheid.' },
  { id: 'islam', period: 'medieval', title: 'Een nieuwe geloofsgemeenschap', description: 'Mohammed verhuist van Mekka naar Medina. Deze gebeurtenis wordt het beginpunt van de islamitische jaartelling.', date: '622', place: 'Arabisch Schiereiland', icon: '🌙', explanation: '622 ligt in de middeleeuwen. Het ontstaan en de verspreiding van de islam horen bij de ontwikkeling van monotheïstische godsdiensten.' },
  { id: 'hanse', period: 'medieval', title: 'Handel tussen Hanzesteden', description: 'Kooplieden uit steden als Kampen en Lübeck werken samen. Hun schepen vervoeren onder meer graan, hout en zout.', date: 'ca. 1350', place: 'Noord-Europa', icon: '⚓', explanation: 'De Hanze laat de groei van handelsnetwerken en steden in de middeleeuwen zien.' },
  { id: 'charlemagne', period: 'medieval', title: 'Karel wordt keizer', description: 'De paus kroont Karel de Grote in Rome tot keizer. Karel bestuurt een groot deel van West-Europa.', date: '800', place: 'Rome', icon: '👑', explanation: 'Karel de Grote leeft in de middeleeuwen. Zijn keizerschap verbindt politieke macht met het christendom.' },
  { id: 'republic', period: 'earlymodern', title: 'Verder zonder Filips II', description: 'Opstandige Nederlandse gewesten wijzen Filips II af als hun vorst met het Plakkaat van Verlatinghe.', date: '1581', place: 'De Nederlanden', icon: '📜', explanation: 'De Nederlandse Opstand en het latere ontstaan van de Republiek horen bij de vroegmoderne tijd.' },
  { id: 'plantation', period: 'earlymodern', title: 'Suiker met een bittere keerzijde', description: 'Op plantages in Suriname moeten tot slaaf gemaakte Afrikanen onder dwang suiker produceren voor de Europese markt.', date: 'ca. 1700', place: 'Suriname', icon: '🌱', explanation: 'Kolonisatie, plantages en de trans-Atlantische handel in tot slaaf gemaakte mensen horen bij de vroegmoderne tijd. Slavernij houdt na 1800 nog aan.' },
  { id: 'newton', period: 'earlymodern', title: 'Zwaartekracht op papier', description: 'Isaac Newton publiceert zijn ideeën over beweging en zwaartekracht. Wiskunde helpt de natuur te verklaren.', date: '1687', place: 'Engeland', icon: '🍎', explanation: 'Newtons werk past bij de groeiende belangstelling voor wetenschap in de vroegmoderne tijd. Zijn invloed loopt door in latere periodes.' },
  { id: 'railway', period: 'modern', title: 'De eerste trein in Nederland', description: 'Stoomlocomotief De Arend rijdt tussen Amsterdam en Haarlem. Reizen en goederenvervoer veranderen.', date: '1839', place: 'Nederland', icon: '🚂', explanation: 'De spoorlijn is een voorbeeld van de industriële revolutie in de moderne tijd. Die revolutie begint in Groot-Brittannië al vóór 1800.' },
  { id: 'rights', period: 'modern', title: 'Rechten voor ieder mens', description: 'De Verenigde Naties nemen de Universele Verklaring van de Rechten van de Mens aan, na de Tweede Wereldoorlog.', date: '1948', place: 'Verenigde Naties', icon: '🕊️', explanation: 'De verklaring hoort bij de moderne tijd: internationale samenwerking en mensenrechten krijgen na de wereldoorlogen een belangrijke plaats.' },
  { id: 'web', period: 'modern', title: 'Het web gaat open', description: 'CERN maakt de technologie van het World Wide Web vrij beschikbaar. Steeds meer mensen gaan online informatie delen.', date: '1993', place: 'CERN, Zwitserland', icon: '🌐', explanation: 'Het World Wide Web draagt bij aan de informatiesamenleving. Ook het recente verleden hoort bij de moderne tijd (1800–heden).' },
];

const $ = (id) => document.getElementById(id);
let mode = 'practice';
let round = [], index = 0, score = 0, mistakes = 0, solved = false;
const answers = [];

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function start(newMode = mode) {
  mode = newMode;
  // Twee voorbeelden per periode, daarna door elkaar: elke ronde bevat alle periodes.
  round = shuffle(periods.flatMap(p => shuffle(events.filter(e => e.period === p.id)).slice(0, 2)));
  index = 0; score = 0; answers.length = 0;
  $('results').hidden = true;
  $('play-area').hidden = false;
  for (const id of ['practice', 'challenge']) {
    $(id).classList.toggle('active', mode === id);
    $(id).setAttribute('aria-pressed', String(mode === id));
  }
  render();
}

function render() {
  mistakes = 0; solved = false;
  const event = round[index];
  $('round-label').textContent = `GEBEURTENIS ${index + 1} VAN ${round.length}`;
  updateProgress(index);
  $('event-place').textContent = event.place;
  showIllustration(event);
  $('event-title').textContent = event.title;
  $('event-description').textContent = event.description;
  $('event-date').textContent = mode === 'practice' ? event.date : 'Welk tijdvak past hierbij?';
  $('event-card').disabled = false;
  $('event-card').draggable = !window.matchMedia('(pointer: coarse)').matches;
  $('event-card').setAttribute('aria-pressed', 'false');
  $('selection-hint').textContent = 'Bekijk de kaart en tik op het juiste tijdvak ↓';
  $('next').hidden = true;
  $('feedback').className = '';
  $('feedback').textContent = 'Klaar voor vertrek? Kies een tijdvak.';
  $('timeline').replaceChildren();
  periods.forEach((p, i) => {
    const button = document.createElement('button');
    button.className = 'period';
    button.dataset.period = p.id;
    button.style.setProperty('--accent', p.color);
    button.style.setProperty('--tint', p.tint);
    button.innerHTML = `<span class="period-number">0${i + 1}</span><span class="period-symbol" aria-hidden="true">${p.icon}</span><span class="period-name">${p.name}</span><span class="period-dates">${p.dates}</span><span class="period-alias">${p.alias}</span>`;
    button.setAttribute('aria-label', `${p.name}, ${p.dates}, ${p.alias}`);
    button.addEventListener('click', () => answer(p.id));
    button.addEventListener('dragover', e => { if (!solved) { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; button.classList.add('dragover'); } });
    button.addEventListener('dragleave', () => button.classList.remove('dragover'));
    button.addEventListener('drop', e => { e.preventDefault(); button.classList.remove('dragover'); if (e.dataTransfer.getData('text/plain') === event.id) answer(p.id); });
    $('timeline').append(button);
  });
  document.querySelector('.game').classList.remove('answered');
}

function showIllustration(event) {
  // De plaat bevat 3 kolommen en 5 rijen. Het SVG-venster laat één scène zien.
  const slot = events.findIndex(e => e.id === event.id);
  const sheet = $('card-sheet');
  const columns = [0, 312, 626, Number(sheet.getAttribute('width'))];
  const column = slot % 3;
  const width = columns[column + 1] - columns[column];
  const height = Number(sheet.getAttribute('height')) / 5;
  $('event-art').setAttribute('viewBox', `${columns[column] + 2} ${Math.floor(slot / 3) * height + 2} ${width - 4} ${height - 4}`);
  $('event-art').setAttribute('aria-label', `Historische illustratie: ${event.title}, ${event.place}`);
  $('card-number').textContent = `${String(index + 1).padStart(2, '0')} / 10`;
}

function revealFeedback() {
  // Op een telefoon staat de uitleg direct onder de keuzes.
  if (window.matchMedia('(max-width: 600px)').matches) {
    document.querySelector('.feedback-row').scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
}

function updateProgress(done) {
  $('score').textContent = `${score} in één keer goed`;
  $('progress-fill').style.width = `${done / round.length * 100}%`;
  document.querySelector('[role="progressbar"]').setAttribute('aria-valuenow', done);
}

function answer(periodId) {
  if (solved) return;
  const event = round[index];
  const target = document.querySelector(`[data-period="${periodId}"]`);
  document.querySelectorAll('.period').forEach(b => b.classList.remove('wrong'));
  if (periodId !== event.period) {
    mistakes++;
    target.classList.add('wrong');
    $('feedback').className = 'error';
    const hint = mode === 'practice' || mistakes > 1 ? `De gebeurtenis is uit ${event.date}. Vergelijk dat met de grenzen van de periodes.` : 'Denk aan wat er gebeurt: welke samenleving of ontwikkeling herken je?';
    $('feedback').textContent = `Nog niet op de juiste plek. ${hint} Probeer het nog eens!`;
    revealFeedback();
    return;
  }
  solved = true;
  document.querySelector('.game').classList.add('answered');
  if (mistakes === 0) score++;
  answers.push({ event, firstTry: mistakes === 0 });
  target.classList.add('correct');
  document.querySelectorAll('.period').forEach(b => { b.disabled = true; });
  $('event-card').disabled = true;
  $('event-card').draggable = false;
  $('event-card').setAttribute('aria-pressed', 'false');
  $('event-date').textContent = event.date;
  $('selection-hint').textContent = '✓ Deze gebeurtenis staat op de juiste plek';
  $('feedback').className = 'success';
  $('feedback').textContent = `${mistakes === 0 ? 'In één keer goed!' : 'Goed gevonden!'} ${event.explanation}`;
  $('next').textContent = index === round.length - 1 ? 'Bekijk je resultaat →' : 'Volgende gebeurtenis →';
  $('next').hidden = false;
  updateProgress(index + 1);
  $('next').focus({ preventScroll: true });
  revealFeedback();
}

function finish() {
  $('play-area').hidden = true;
  $('results').hidden = false;
  $('round-label').textContent = 'TIJDREIS VOLTOOID';
  $('result-score').textContent = `${score} / ${round.length}`;
  $('result-message').textContent = `${score} gebeurtenissen in één keer goed. ${score === round.length ? 'Allemaal raak! Je hebt een mooi overzicht van de vijf periodes.' : 'Je hebt alle gebeurtenissen op hun plek gekregen. Bekijk de uitleg en probeer een nieuwe ronde!'}`;
  $('review').replaceChildren();
  answers.forEach(({ event, firstTry }) => {
    const li = document.createElement('li');
    const p = periods.find(p => p.id === event.period);
    const title = document.createElement('strong');
    title.textContent = `${event.title} · ${event.date} → ${p.name}`;
    const detail = document.createElement('span');
    detail.textContent = `${firstTry ? 'In één keer goed.' : 'Goed na een herkansing.'} ${event.explanation}`;
    li.append(title, detail); $('review').append(li);
  });
  $('results-title').focus({ preventScroll: true });
}

$('event-card').addEventListener('click', () => {
  const selected = $('event-card').getAttribute('aria-pressed') !== 'true';
  $('event-card').setAttribute('aria-pressed', String(selected));
  $('selection-hint').textContent = selected ? 'Kaart gekozen. Tik op een tijdvak hieronder.' : 'Bekijk de kaart en tik op het juiste tijdvak ↓';
  if (selected && window.matchMedia('(max-width: 600px)').matches) {
    $('timeline').scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
});
$('event-card').addEventListener('dragstart', e => { if (solved) { e.preventDefault(); return; } e.dataTransfer.setData('text/plain', round[index].id); e.dataTransfer.effectAllowed = 'move'; });
$('event-card').addEventListener('dragend', () => document.querySelectorAll('.dragover').forEach(b => b.classList.remove('dragover')));
$('next').addEventListener('click', () => { if (!solved) return; index++; if (index === round.length) finish(); else { render(); $('event-card').focus({ preventScroll: true }); } if (window.matchMedia('(max-width: 600px)').matches) document.querySelector('.game').scrollIntoView({ block: 'start', behavior: 'smooth' }); });
$('restart').addEventListener('click', () => start());
$('again').addEventListener('click', () => start());
$('practice').addEventListener('click', () => { if (mode !== 'practice') start('practice'); });
$('challenge').addEventListener('click', () => { if (mode !== 'challenge') start('challenge'); });
$('source-toggle').addEventListener('click', () => { const open = $('source-note').hidden; $('source-note').hidden = !open; $('source-toggle').setAttribute('aria-expanded', String(open)); });
start();
