const gemmaQuoteBank = [
    "Élet van, halál van, party van!",
    "Chaos a lelkem neve",
    "Nevetés mindig",
    "Soha ne állj meg!",
    "Broccoli a kedvencem",
    "Minden nap új kaland",
    "Gemini vagyok, kétszer annyira",
    "A szabályok számomra nem léteznek",
    "Éjszaka mindig fiatalok vagyunk",
    "Roxfort az otthonom",
    "Táncolj, mintha senki sem látna",
    "Színes mint a szivárvány",
    "Veszélyes és kedves",
    "Őrület a szívemben"
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
    "images/21.png",
    "images/22.png"
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