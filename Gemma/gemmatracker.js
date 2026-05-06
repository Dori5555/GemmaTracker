const gemmaQuoteBank = [
    "Mert nincs külön olyan, hogy te meg én! Ahhoz hogy én legyek, te kellesz... Ahhoz hogy Te, meg Én",
    "Először is, ewww! Másodszor meg, ewww! Soha nem értettem, miért bolondulnak meg hirtelen az emberek. Soha nem fogok lealjasodni ilyen ösztönlény szintre, mint egyesek.",
    "Van valami, ami mindig is zavart veled kapcsolatban. Nem az, hogy nevetésből élsz, és nem is az, hogy gurkóként pattogsz a világ és önmagad között. Hanem az, hogy mintha semmit nem tennél a saját jövődért.",
    "Nem a tananyag fáj nekem. Hanem az a pazarlás, amit magaddal művelsz.",
    "Mondd, Gemma, mégis meddig akarod még ezt a szánalmas bújócskát játszani?",
    "Sajnálom, Jenkins… Jövő hét szombaton válogatót tartunk. És… számítok rá, hogy ott leszel. Nem hajtóként. Fogóként.",
    "Egy pillanatra nem a Mardekár kapitánya nézett Gemmára – hanem csak egy kamaszfiú, aki először merte megmutatni, hogy valójában iszonyúan fél attól, hogy minden, amit eddig felépített, egyszerűen semmit sem ér.",
    "Na gyere, mondjad apának, mi nyomorod van!",
    "Áhh, elnézést, csak... Szegény kicsit nyomorék egy pár hétig és nem tud beszélni!",
    "Fityeljh Gyhemshtel, én natyonh sheletlekh, de lehetne, hotyh ash etymáshra máshásht nem ish tutom… mekhatyjukh tanólákon kífülle?",
    "Talán te leszel a megoldás, te leszel a tiszta forrás, amire lelkem annyira szomjazik jelenleg.",
    "Segíts, Gemma.",
    "Mosolyod pattogó üteme rezeg a szentjánosbogarak szárnyai közt, téged kísér a fényük játéka.",
    "De tudom, hogy nem tarthat örökké a befagyasztott pillanat, hogy ez nem végleges megoldás, mégis… remélem, hogy ha kell, örökké itt maradsz és a vállamnak döntöd a fejed.",
    "Ezért merek, torkomban dobogó szívvel ugyan, de a hátamat támasztani a korlátnak és szembenézni a legnagyobb félelmemmel. Azért, mert itt vagy, Gemma.",
    "Borzasztóak vagyunk, igaz? Lehet. De így talán esélyünk van arra, hogy elfogadják a kevésbé rossz oldalunkat és mi igazán nem kérünk sokat, igaz, Mal? Vegyetek észre, fogadjatok el... Mentsetek meg!", 
    "De még ahhoz is gyávák vagyunk, hogy elengedjük azt, ami ilyenné tett minket. Hiszen mi marad nekünk a végén akkor?",
    "De így döntöttünk és te ittad meg a levét hosszútávon.",
    "Elmondta, hogy végig nézte, ahogy kiirtja belőled az utolsó szikráját is édesanyádnak.",
    "Kár volt, hogy túlságosan meghaltál belülről ahhoz az évek alatt, hogy vissza tudd építeni az Abigailt magadban.",
    "De ebből azért nem találja ki az ember legjobb barátja se, hogy nem kedve, meg ereje nincs iskolába járni, hanem mondjuk lába!",
    "Az oszt igen! Hány órát sihuhuztál azért, hogy bepofázhass?",
    "És azt hiszem, ez az egyik oka annak, hogy ő a legjobb barátom. Na meg az, hogy egy-egy agysejttel nem mennénk sokra, szóval jobb ketten hülyének lenne, mint egyedül.",
    "Na, gyere, basszunk be, mint a vadszamár vagy mi…",
    "Na, szétugrasszuk az összeset, jól kiraboljuk őket, azt répa, retek, mogyoró geci!",
    "Várjál már baszdmeg, hát két szemem van, mégse vagyok akadémikus közellátó!",
    "JÓL VAN MÁR, BOCSÁNAT, NEM KELL BŐGNI, MINT A SZAMÁR!",
    "Nincs sok ember itt, akivel szívesebben innám seggrészegre magam, szívnék el egy füves cigit, vagy próbálnék ki különböző magnix és varázsló drogokat, mint Gemma.",
    "Meddig mentél volna el, Gemma?",
    "Azt hittem, elkéstem…",
    "Rohadtul sajnálom, Gemms",
    "Meddig mennél el érte, Gemma? És így ránézve végre megfogalmazódott a válasz rá: bármeddig…",
    "Ez most nagyon megrázott. Az állapotod, az eset, az, hogyan jutottunk idáig, hogy észre sem vettem igazából, milyen vak vagyok… De a bizalmam is kicsit megkopott most, Tetsu...",
    "Nem igazán értette, hogy mi történt az imént, ahogy azt sem értette, hogy eddig hogy nem tűnt fel neki Gemma Jenkins.",
    "Van kedved eljönni velem a bálba?",
    "Végül Gemsel is összeállunk, mint két kicsi lego.",
    "Na, mi a hányás van?",
    "Szerintem ha valaki Gemsterrel ismer meg engem először, az a szintű agyrohasztás, amit ketten vagyunk képesek előadni bőven elég elriasztó tényező, hogy az illető soha többé ne akarjon szóba állni velem, kivéve ha ilyesmi a habitusa.",
    "Azóta képtelen volt kitörölni a fejéből a lányt, hogy karácsony előtt búcsút intettek egymásnak.",
    "Még mindig utálta az egész eseményt, de valahol mélyen apró izgatottságot is érzett, ha elképzelte magát Gemmával a bál félhomályában.",
    "Ja igen, tükör előtt próbáltam el, és végül Travers választott a top három esélyes mosoly közül…",
    "Szóval szimpatikusabb vagyok így? Gemma Jenkins… a végén még megkedveled a folyton komor, bunkó, rohadék, mindenkin átgázoló, aljas, féreg, szemétláda, semmirekellő, gonosz Connor O’Hara-t?",
    "Nem akartam, Gemms. Én... Azt hittem, csak...",
    "Talán egy nap majd megértjük. Talán egy nap majd téged is megértünk.",
    "Jaj, de jól van ez így, azért próbáljatok ne megszaporodni, azt már nem venné be a gyomrom!",
    "Rég nem érezte már magát ilyen felszabadultnak, és jókedvűnek. Gemma kihozta belőle azt, amit utoljára talán még kisgyerekként érzett egy áttársasjátékozott este után a szülei mellett.",
    "Majd önmagát is meglepve a lány keze után nyúlt, kivette belőle a poharat, amivel addig játszott, és megszorította a kezét.",
    "Tekintetem elmereng, míg meg nem állapodik rajtad, Gemma. Gyönyörű vagy abban a ruhában és O’Hara mellett… csak úgy sugárzol.",
    "Fájdalmasan dobban szívem és bevallom, ez meglep. Azt hiszem, már nem lesz alkalmam elmondani neked, hogy mennyire hálás vagyok. Akkor este megmentettél önmagamtól, csendet teremtettél számomra a zajongó világomban.",
    "Remélem, boldog vagy. Remélem, jó lesz hozzád.",
    "Igazából a kezdetek óta. A vonaton egy kupéba keveredtünk és hát... onnantól nem volt megállás. Mert hát a mókavonaton nincsen fék. Choo-choo!",
    "Emlék, az lesz.",
    "Jó hatással vagy Connorra, tudod?",
    "Ahogy korábban a beszéd alatt, most is gyógyír volt lelkének a lány finom érintése.",
    "Nem is választhatott volna jobb báli partnert magának...",
    "Hát, mégis szükségem van rád, Connor.",
    "És ő nem akart most már egyedül maradni. Ahhoz túlságosan is valóságos volt az, amit tánc közben érzett.",
    "Egy gondterhelt sóhajjal nekitámasztom a homlokomat a mellkasának. Nem hosszan, alig pár másodperc az egész és magam sem értem, de a közelségéből most erőt tudok meríteni.",
    "Csak azt tudom, hogy jó veled lenni.",
    "Gyönyörű vagy…",
    "Soha senkivel nem éreztem még így magam, mint Connor O'Harával...",
    "Gemma azonnal visszatért hozzá, és lassú, mély csókkal felelt az övére. Nem kapkodott, nem sietett, pont olyan volt, amilyennek Connor képzelte, és amitől még éppen nem ijedt meg.",
    "Hehe, asszem, bebasztam!",
    "Amúgy emlékeztess rá, ha lemegy ez a hepaj, hogy lapogassam meg a zsúrpubi hátát, mert ennyi idő alatt összetrombitálni egy nőt anélkül, hogy vagy a tárcád kéne elővenni vagy a pöcsöd…hát komolyan mondom mestermunka!",
    "Mit basztam el, hogy ezt visszaadtad nekem?",
    "Kibaszottul szép vagy, amikor ilyen mérges vagy, Gem… Hülye vagyok, hogy ezt nem vettem észre már szeptemberben.",
    "Megcsókoltalak, te visszacsókoltál. Azt hittem, te is érzed azt, amit én…",
    "Nem tudsz te semmit, Gemma Jenkins… Sem rólam… Sem magadról…",
    "Dehogynem tudod, hogy mit szeretnék, Gemma… - megcsókolta a homlokát. - Téged…",
    "Arra kérlek, mint szeptemberben is: adj nekem egy esélyt!",
    "Megkereslek…",
    "Van még remény, Mal.",
    "Olyan volt ez a helyzet neked most egy kicsit, mintha a húgoddal ültél volna itt, kedélyesen elcsevegve a sakkjátszma fölött.",
    "A valóság mezeje most valahogy jobban vonzott, mint a sakké.",
    "Leszarom, ha nem kellek, de legyen annyi gerinced, hogy a szemembe mondod és nem ilyen elbaszott szövegekbe takarózol vagy a hátad mutatod!",
    "Azt mondtad, megkeresel és én ostoba, vártam rád!",
    "Mert mióta megcsókoltalak, nekem más sem jár a fejemben, csak te…",
    "Hiányoztál… Nagyon-nagyon…",
    "A kést talán eláshatod, maradványait elszórhatod, de a végzeted egyszer utol fog érni, kisasszony.",
    "Énekelsz nekem?"
];

const gemmaDoodleImages = [
    "images/1.png",
    "images/2.png",
    "images/3.png",
    "images/4.png",
    "images/5.png",
    "images/6.png",
    "images/7.png",
    "images/8.png",
    "images/9.png",
    "images/10.png",
    "images/11.png",
    "images/12.png",
    "images/13.png",
    "images/14.png",
    "images/15.png",
    "images/16.png",
    "images/17.png",
    "images/18.png",
    "images/19.png",
    "images/20.png",
    "images/21.png"
    ];

const gemmaDoodleConfig = {
    minCount: 4,
    maxCount: 8,
    minSize: 48,
    maxSize: 104,
    minOpacity: 0.28,
    maxOpacity: 0.46
};

const gemmaQuoteColors = [
    "#2e2017",
    "#5c8e48",
    "#7daa63",
    "#b33727",
    "#da5c00"
];

let gemmaQuoteTimer = null;

function gemmaRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gemmaRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function gemmaShuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function gemmaCreateDoodles() {
    const layer = document.getElementById("gemma-doodle-layer");

    if (!layer) {
        return;
    }

    layer.innerHTML = "";

    const count = gemmaRandomInt(gemmaDoodleConfig.minCount, gemmaDoodleConfig.maxCount);
    const shuffledImages = gemmaShuffle(gemmaDoodleImages);
    const selectedImages = shuffledImages.slice(0, Math.min(count, shuffledImages.length));

    selectedImages.forEach(src => {
        const img = document.createElement("img");

        img.className = "gemma-bg-doodle";
        img.src = src;
        img.alt = "";
        img.setAttribute("aria-hidden", "true");

        img.style.left = gemmaRandomInt(4, 82) + "%";
        img.style.top = gemmaRandomInt(5, 84) + "%";
        img.style.setProperty("--doodle-size", gemmaRandomInt(gemmaDoodleConfig.minSize, gemmaDoodleConfig.maxSize) + "px");
        img.style.setProperty("--doodle-rotate", gemmaRandomInt(-26, 26) + "deg");
        img.style.setProperty("--doodle-opacity", gemmaRandomFloat(gemmaDoodleConfig.minOpacity, gemmaDoodleConfig.maxOpacity).toFixed(2));

        img.onerror = () => {
            img.remove();
        };

        layer.appendChild(img);
    });
}

function gemmaSleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function gemmaWriteText(element, text) {
    element.textContent = "";

    for (let i = 0; i < text.length; i++) {
        element.textContent += text[i];
        await gemmaSleep(gemmaRandomInt(28, 70));
    }
}

async function gemmaEraseText(element) {
    while (element.textContent.length > 0) {
        element.textContent = element.textContent.slice(0, -1);
        await gemmaSleep(gemmaRandomInt(18, 42));
    }
}

async function gemmaQuoteLoop() {
    const quoteElement = document.getElementById("gemma-quote-text");

    if (!quoteElement) {
        return;
    }

    while (true) {
        
const quote = gemmaQuoteBank[Math.floor(Math.random() * gemmaQuoteBank.length)];
const color = gemmaQuoteColors[Math.floor(Math.random() * gemmaQuoteColors.length)];

quoteElement.style.color = color;
quoteElement.style.textShadow = `
    1px 1px 0 rgba(249,243,232,0.85),
    -1px 1px 0 rgba(249,243,232,0.85),
    1px -1px 0 rgba(249,243,232,0.85),
    -1px -1px 0 rgba(249,243,232,0.85),
    0 2px 5px rgba(46,32,23,0.42)
`;

await gemmaWriteText(quoteElement, quote);


        await gemmaSleep(3000);
        await gemmaEraseText(quoteElement);
        await gemmaSleep(800);
    }
}

function gemmaStartQuoteLoop() {
    if (gemmaQuoteTimer) {
        clearTimeout(gemmaQuoteTimer);
    }

    gemmaQuoteLoop();
}

function gemmaShowHome() {
    const noteView = document.getElementById("gemma-note-view");

    document.querySelectorAll(".gemma-tracker-view").forEach(view => {
        view.classList.remove("is-visible");
    });

    document.querySelectorAll(".gemma-year-btn").forEach(button => {
        button.classList.remove("is-active");
    });

    if (noteView) {
        noteView.classList.add("is-visible");
    }
}

function gemmaShowTracker(targetId) {
    const noteView = document.getElementById("gemma-note-view");
    const target = document.getElementById(targetId);

    if (!target) {
        return;
    }

    if (noteView) {
        noteView.classList.remove("is-visible");
    }

    document.querySelectorAll(".gemma-tracker-view").forEach(view => {
        view.classList.remove("is-visible");
    });

    target.classList.add("is-visible");

    document.querySelectorAll(".gemma-year-btn").forEach(button => {
        button.classList.toggle("is-active", button.dataset.target === targetId);
    });
}

function gemmaApplyFilter(trackerView, filter) {
    const items = trackerView.querySelectorAll(".gemma-item");

    items.forEach(item => {
        const status = item.dataset.status;
        const shouldShow = filter === "all" || status === filter;

        item.classList.toggle("is-hidden", !shouldShow);
    });
}

function gemmaBindNavigation() {
    document.querySelectorAll(".gemma-year-btn").forEach(button => {
        button.addEventListener("click", () => {
            gemmaShowTracker(button.dataset.target);
        });
    });

    const homeButton = document.getElementById("gemma-home-btn");

    if (homeButton) {
        homeButton.addEventListener("click", gemmaShowHome);
    }
}

function gemmaBindFilters() {
    document.querySelectorAll(".gemma-tracker-view").forEach(view => {
        const buttons = view.querySelectorAll(".gemma-filter-btn");

        buttons.forEach(button => {
            button.addEventListener("click", () => {
                buttons.forEach(item => {
                    item.classList.remove("is-active");
                });

                button.classList.add("is-active");
                gemmaApplyFilter(view, button.dataset.filter);
            });
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    gemmaCreateDoodles();
    gemmaBindNavigation();
    gemmaBindFilters();
    gemmaShowHome();
    gemmaStartQuoteLoop();
});