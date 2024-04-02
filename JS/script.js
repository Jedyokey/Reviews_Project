// local reviews data
const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job: "UX Designer",
        img: "https://i.pinimg.com/564x/9a/e1/7b/9ae17b0bdc9a5f4e4a189fd97c322f94.jpg",
        text: "Meet Susan, a passionate UX designer with an eye for detail and a flair for creativity. With a background in graphic design and psychology, she brings a unique blend of aesthetics and user-centered thinking to her work. She is on a mission to create meaningful connections."
    },
    {
        id: 2,
        name: "Thomas Andrew",
        job: "Web Developer",
        img: "https://i.pinimg.com/564x/ec/53/d8/ec53d826cc3db2051b8363da69111679.jpg",
        text: "Thomas is a passionate web developer with a flair for crafting elegant and functional digital experiences. Armed with a degree in computer science and a keen eye for design, David is a master at turning ideas into beautifully coded websites and applications."
    },
    {
        id: 3,
        name: "Clara Davis",
        job: "Project Manager",
        img: "https://i.pinimg.com/564x/de/60/98/de6098385b9acdd18df88638fffad65f.jpg",
        text: "Introducing Clara, a dynamic project manager with a knack for bringing order to chaos and turning ideas into reality. Armed with a degree in business administration and years of experience in project coordination, Sarah is a natural leader who thrives in fast-paced environments"
    },
    {
        id: 4,
        name: "Michael Anderson",
        job: "Network Admin",
        img: "https://i.pinimg.com/564x/5b/1b/1c/5b1b1c6017a30b125fe063ca9e04c65e.jpg",
        text: "Michael thrives on the thrill of solving technical puzzles and takes pride in ensuring that networks are optimized for peak performance. When he's not knee-deep in cables and configurations, you'll find him tinkering with his home lab setup,"
    }
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn"); 
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", () => {
    // console.log("collect five!");
    showPerson();
});

// show person based on item
function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person

nextBtn.addEventListener("click", () => {
    currentItem++;
    if (currentItem >= reviews.length) {
        currentItem = 0;
    }
    showPerson();
});

// show prev button
prevBtn.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
    currentItem = reviews.length - 1;
    }
    showPerson();
});

// show random person
randomBtn.addEventListener("click", () => {
    currentItem = Math.floor(Math.random() * reviews.length);
    // console.log(currentItem);
    showPerson();
});