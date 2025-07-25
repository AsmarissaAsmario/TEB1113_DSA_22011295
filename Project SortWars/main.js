const canvas = document.querySelector('.stars');
const ctx = canvas.getContext('2d');
let w, h, stars = [];
function resize() {
    w = window.innerWidth; h = window.innerHeight;
    canvas.width = w; canvas.height = h;
}
resize();
window.addEventListener('resize', resize);

function Star() {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.radius = Math.random() * 1.3 + 0.2;
    this.alpha = Math.random() * 0.8 + 0.2;
    this.speed = Math.random() * 0.4 + 0.1;
}
function createStars(n) {
    stars = [];
    for (let i = 0; i < n; i++) stars.push(new Star());
}
function animateStars() {
    ctx.clearRect(0,0,w,h);
    for (let s of stars) {
        ctx.save();
        ctx.globalAlpha = s.alpha;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, 2*Math.PI);
        ctx.fillStyle = '#ffe81f';
        ctx.shadowColor = '#ffe81f';
        ctx.shadowBlur = 5;
        ctx.fill();
        ctx.restore();
        s.y += s.speed;
        if (s.y > h) {
            s.x = Math.random() * w;
            s.y = 0;
            s.radius = Math.random() * 1.3 + 0.2;
            s.alpha = Math.random() * 0.8 + 0.2;
            s.speed = Math.random() * 0.4 + 0.1;
        }
    }
    requestAnimationFrame(animateStars);
}
createStars(170);
animateStars();

// --- MOVIE DATA ---
const movieList = [
    { title:"The Shawshank Redemption", director:"Frank Darabont", dateReleased:"1994-09-23", rating:9.3 },
    { title:"The Godfather", director:"Francis Ford Coppola", dateReleased:"1972-03-24", rating:9.2 },
    { title:"The Dark Knight", director:"Christopher Nolan", dateReleased:"2008-07-18", rating:9.0 },
    { title:"12 Angry Men", director:"Sidney Lumet", dateReleased:"1957-04-10", rating:8.9 },
    { title:"Schindler's List", director:"Steven Spielberg", dateReleased:"1993-12-15", rating:8.9 },
    { title:"The Lord of the Rings: The Return of the King", director:"Peter Jackson", dateReleased:"2003-12-17", rating:8.9 },
    { title:"Pulp Fiction", director:"Quentin Tarantino", dateReleased:"1994-10-14", rating:8.9 },
    { title:"Fight Club", director:"David Fincher", dateReleased:"1999-10-15", rating:8.8 },
    { title:"Forrest Gump", director:"Robert Zemeckis", dateReleased:"1994-07-06", rating:8.8 },
    { title:"Inception", director:"Christopher Nolan", dateReleased:"2010-07-16", rating:8.8 },
    { title:"The Matrix", director:"The Wachowskis", dateReleased:"1999-03-31", rating:8.7 },
    { title:"Goodfellas", director:"Martin Scorsese", dateReleased:"1990-09-19", rating:8.7 },
    { title:"The Empire Strikes Back", director:"Irvin Kershner", dateReleased:"1980-05-21", rating:8.7 },
    { title:"One Flew Over the Cuckoo's Nest", director:"Milos Forman", dateReleased:"1975-11-19", rating:8.7 },
    { title:"Se7en", director:"David Fincher", dateReleased:"1995-09-22", rating:8.6 },
    { title:"Interstellar", director:"Christopher Nolan", dateReleased:"2014-11-07", rating:8.6 },
    { title:"City of God", director:"Fernando Meirelles", dateReleased:"2002-08-30", rating:8.6 },
    { title:"Spirited Away", director:"Hayao Miyazaki", dateReleased:"2001-07-20", rating:8.6 },
    { title:"The Green Mile", director:"Frank Darabont", dateReleased:"1999-12-10", rating:8.6 },
    { title:"Parasite", director:"Bong Joon-ho", dateReleased:"2019-05-30", rating:8.6 },
    { title:"Saving Private Ryan", director:"Steven Spielberg", dateReleased:"1998-07-24", rating:8.6 },
    { title:"The Silence of the Lambs", director:"Jonathan Demme", dateReleased:"1991-02-14", rating:8.6 },
    { title:"The Usual Suspects", director:"Bryan Singer", dateReleased:"1995-08-16", rating:8.5 },
    { title:"Léon: The Professional", director:"Luc Besson", dateReleased:"1994-11-18", rating:8.5 },
    { title:"The Pianist", director:"Roman Polanski", dateReleased:"2002-09-25", rating:8.5 },
    { title:"Terminator 2: Judgment Day", director:"James Cameron", dateReleased:"1991-07-03", rating:8.5 },
    { title:"Back to the Future", director:"Robert Zemeckis", dateReleased:"1985-07-03", rating:8.5 },
    { title:"Whiplash", director:"Damien Chazelle", dateReleased:"2014-10-10", rating:8.5 },
    { title:"Gladiator", director:"Ridley Scott", dateReleased:"2000-05-05", rating:8.5 },
    { title:"The Prestige", director:"Christopher Nolan", dateReleased:"2006-10-20", rating:8.5 },
    { title:"The Departed", director:"Martin Scorsese", dateReleased:"2006-10-06", rating:8.5 },
    { title:"Alien", director:"Ridley Scott", dateReleased:"1979-05-25", rating:8.4 },
    { title:"The Lives of Others", director:"Florian Henckel von Donnersmarck", dateReleased:"2006-03-23", rating:8.4 },
    { title:"Paths of Glory", director:"Stanley Kubrick", dateReleased:"1957-10-25", rating:8.4 },
    { title:"Memento", director:"Christopher Nolan", dateReleased:"2000-10-11", rating:8.4 },
    { title:"Oldboy", director:"Park Chan-wook", dateReleased:"2003-11-21", rating:8.4 },
    { title:"Once Upon a Time in the West", director:"Sergio Leone", dateReleased:"1968-12-21", rating:8.5 },
    { title:"Avengers: Infinity War", director:"Anthony and Joe Russo", dateReleased:"2018-04-27", rating:8.4 },
    { title:"Avengers: Endgame", director:"Anthony and Joe Russo", dateReleased:"2019-04-26", rating:8.4 },
    { title:"Coco", director:"Lee Unkrich", dateReleased:"2017-10-27", rating:8.4 },
    { title:"American History X", director:"Tony Kaye", dateReleased:"1998-10-30", rating:8.5 },
    { title:"The Great Dictator", director:"Charlie Chaplin", dateReleased:"1940-10-15", rating:8.4 },
    { title:"The Hunt", director:"Thomas Vinterberg", dateReleased:"2012-09-20", rating:8.3 },
    { title:"Django Unchained", director:"Quentin Tarantino", dateReleased:"2012-12-25", rating:8.4 },
    { title:"The Shining", director:"Stanley Kubrick", dateReleased:"1980-05-23", rating:8.4 },
    { title:"WALL·E", director:"Andrew Stanton", dateReleased:"2008-06-27", rating:8.4 },
    { title:"Toy Story 3", director:"Lee Unkrich", dateReleased:"2010-06-18", rating:8.3 },
    { title:"Braveheart", director:"Mel Gibson", dateReleased:"1995-05-24", rating:8.3 },
    { title:"Mononoke-hime", director:"Hayao Miyazaki", dateReleased:"1997-07-12", rating:8.4 },
    { title:"Joker", director:"Todd Phillips", dateReleased:"2019-10-04", rating:8.4 },
    { title:"The Wolf of Wall Street", director:"Martin Scorsese", dateReleased:"2013-12-25", rating:8.2 }
];

let selectedIndexes = [];
let selectedMovies = [];

// --- CUSTOM MOVIE ADDITION ---
function showAddMovieForm() {
    document.getElementById('addMovieForm').style.display = '';
    document.getElementById('addMovieError').textContent = '';
}
function hideAddMovieForm() {
    document.getElementById('addMovieForm').style.display = 'none';
    document.getElementById('addMovieError').textContent = '';
    document.getElementById('customTitle').value = '';
    document.getElementById('customDirector').value = '';
    document.getElementById('customDate').value = '';
    document.getElementById('customRating').value = '';
}

function addCustomMovie() {
    const title = document.getElementById('customTitle').value.trim();
    const director = document.getElementById('customDirector').value.trim();
    const dateReleased = document.getElementById('customDate').value;
    const ratingStr = document.getElementById('customRating').value;

    // Validate
    if (!title || !director || !dateReleased || !ratingStr) {
        document.getElementById('addMovieError').textContent = "All fields are required.";
        return;
    }
    const rating = parseFloat(ratingStr);
    if (isNaN(rating) || rating < 0 || rating > 10) {
        document.getElementById('addMovieError').textContent = "Rating must be between 0 and 10.";
        return;
    }
    // Check for duplicate movie (by title + director)
    if (movieList.some(m => m.title.toLowerCase() === title.toLowerCase() && m.director.toLowerCase() === director.toLowerCase())) {
        document.getElementById('addMovieError').textContent = "This movie already exists.";
        return;
    }
    // Add movie
    movieList.push({
        title: title,
        director: director,
        dateReleased: dateReleased,
        rating: rating
    });
    // Select the newly added one
    selectedIndexes.push(movieList.length - 1);

    hideAddMovieForm();
    renderMovieSelection();
    updateSelectedDisplay();
}

function renderMovieSelection() {
    const container = document.getElementById('movieSelectList');
    container.innerHTML = '';
    movieList.forEach((m, i) => {
        const checked = selectedIndexes.includes(i) ? 'checked' : '';
        container.innerHTML += `<div class="movie-select-item">
            <input type="checkbox" id="movie_${i}" value="${i}" ${checked}
                onchange="onMovieSelectChange(this, ${i})" />
            <label for="movie_${i}">
                <b>${m.title}</b><br>
                <span style="color:#ffe81f99;font-size:0.96em">${m.director}</span>
            </label>
        </div>`;
    });
}

function onMovieSelectChange(box, idx) {
    if (box.checked) {
        if (!selectedIndexes.includes(idx)) selectedIndexes.push(idx);
    } else {
        selectedIndexes = selectedIndexes.filter(x => x !== idx);
    }
    updateSelectedDisplay();
}

function selectAll(val) {
    if (val) {
        selectedIndexes = Array.from({length: movieList.length}, (_, i) => i);
    } else {
        selectedIndexes = [];
    }
    renderMovieSelection();
    updateSelectedDisplay();
}

function updateSelectedDisplay() {
    selectedMovies = selectedIndexes.map(i => movieList[i]);
    const displayDiv = document.getElementById('displaySelectedBox');
    if (selectedMovies.length > 0) {
        displayDiv.style.display = "";
        document.getElementById("selectedCount").textContent = `(${selectedMovies.length} selected)`;
        displayMovies(selectedMovies, "selectedMovieTable");
    } else {
        displayDiv.style.display = "none";
        document.getElementById("selectedMovieTable").innerHTML = "";
    }
    // Hide sort results if selection changes
    document.getElementById('sortResultRow').style.display = "none";
}

function shuffleSelected() {
    for (let i = selectedMovies.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [selectedMovies[i], selectedMovies[j]] = [selectedMovies[j], selectedMovies[i]];
    }
    displayMovies(selectedMovies, "selectedMovieTable");
    document.getElementById('sortResultRow').style.display = "none";
}

function compareMovies(a, b, choice) {
    switch (choice) {
        case 1: return a.title.localeCompare(b.title) < 0;
        case 2: return a.director.localeCompare(b.director) < 0;
        case 3: return a.dateReleased < b.dateReleased;
        case 4: return a.rating > b.rating;
        default: return false;
    }
}
function bubbleSort(arr, choice, stepsObj) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            stepsObj.steps++;
            let shouldSwap = false;
            switch (choice) {
                case 1: shouldSwap = arr[j].title > arr[j+1].title; break;
                case 2: shouldSwap = arr[j].director > arr[j+1].director; break;
                case 3: shouldSwap = arr[j].dateReleased > arr[j+1].dateReleased; break;
                case 4: shouldSwap = arr[j].rating < arr[j+1].rating; break;
            }
            if (shouldSwap) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
}
function merge(arr, l, m, r, choice, stepsObj) {
    let n1 = m - l + 1, n2 = r - m;
    let L = arr.slice(l, m + 1), R = arr.slice(m + 1, r + 1);
    let i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        if (compareMovies(L[i], R[j], choice)) {
            arr[k++] = L[i++];
        } else {
            arr[k++] = R[j++];
        }
        stepsObj.steps++;
    }
    while (i < n1) { arr[k++] = L[i++]; stepsObj.steps++; }
    while (j < n2) { arr[k++] = R[j++]; stepsObj.steps++; }
}
function mergeSort(arr, l, r, choice, stepsObj) {
    if (l < r) {
        let m = Math.floor((l + r) / 2);
        mergeSort(arr, l, m, choice, stepsObj);
        mergeSort(arr, m + 1, r, choice, stepsObj);
        merge(arr, l, m, r, choice, stepsObj);
    }
}
function runSorts() {
    if (selectedMovies.length === 0) {
        alert("Please select at least one movie!");
        return;
    }
    let choice = +document.getElementById('sortChoice').value;
    // Bubble Sort
    let arrBubble = selectedMovies.map(m => ({...m}));
    let bSteps = {steps: 0};
    let t1 = performance.now();
    bubbleSort(arrBubble, choice, bSteps);
    let t2 = performance.now();

    // Merge Sort
    let arrMerge = selectedMovies.map(m => ({...m}));
    let mSteps = {steps: 0};
    let t3 = performance.now();
    mergeSort(arrMerge, 0, arrMerge.length-1, choice, mSteps);
    let t4 = performance.now();

    // Convert ms to microseconds for display
    let bubbleMicro = Math.round((t2 - t1) * 1000);
    let mergeMicro = Math.round((t4 - t3) * 1000);

    document.getElementById("bubbleStats").innerHTML =
        `Steps: <b>${bSteps.steps}</b>, Time: <b>${bubbleMicro} µs</b>`;
    document.getElementById("mergeStats").innerHTML =
        `Steps: <b>${mSteps.steps}</b>, Time: <b>${mergeMicro} µs</b>`;

    displayMovies(arrBubble, 'bubbleTable');
    displayMovies(arrMerge, 'mergeTable');
    document.getElementById('sortResultRow').style.display = "";
}

function displayMovies(arr, id) {
    let html = `<table>
        <tr>
            <th>Title</th>
            <th>Director</th>
            <th>Release Date</th>
            <th>Rating</th>
        </tr>`;
    for (const m of arr) {
        html += `<tr>
            <td>${m.title}</td>
            <td>${m.director}</td>
            <td>${m.dateReleased}</td>
            <td>${m.rating}</td>
        </tr>`;
    }
    html += `</table>`;
    document.getElementById(id).innerHTML = html;
}

// On load: show movie selection
window.onload = () => {
    selectedIndexes = [];
    renderMovieSelection();
    updateSelectedDisplay();
};