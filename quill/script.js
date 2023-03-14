/* -- Glow effect -- */

const blob = document.getElementById("blob");
const bg = document.getElementById("background");

bg.onpointermove = event => {
    const { clientX, clientY } = event;

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 1000, fill: "forwards" });
}

/* -- Text effect -- */

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

/* the only target */
const h1mnpg = document.getElementById("h1_mainpage");

//Handler
if (typeof (h1mnpg) != 'undefined' && h1mnpg != null) {
    h1mnpg.onmouseover = event => {
        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return event.target.dataset.value[index];
                    }

                    return letters[Math.floor(Math.random() * 26)]
                })
                .join("");

            if (iteration >= event.target.dataset.value.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);
    }
}
const doch2 = document.getElementById("h2doc");

//handler
if (typeof (doch2) != 'undefined' && doch2 != null) {

    doch2.addEventListener("click", docs);

    function docs() {
        window.open('./documentation.html', '_blank');
    }
}

const ytb = document.getElementById("ytb");
if (typeof (ytb) != 'undefined' && ytb != null) {

    ytb.addEventListener("click", youtube);

    function youtube() {
        window.open('https://www.youtube.com/channel/UCpEYiOD5VxkK3iK7JmtbrPQ', '_blank');
    }
}

const gh = document.getElementById("gh");
if (typeof (gh) != 'undefined' && gh != null) {

    gh.addEventListener("click", github);

    function github() {
        window.open('https://github.com/TheDevConnor/Quill', '_blank');
    }
}

const dc = document.getElementById("dc");
if (typeof (dc) != 'undefined' && dc != null) {

    dc.addEventListener("click", discord);

    function discord() {
        window.open('https://discord.com/invite/JvExQpGuXM', '_blank');
    }
}
