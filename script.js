

document.addEventListener('DOMContentLoaded', function () {

    const pageloads = [

        { id: 'f1', url: 'AboutMe.html' },
        { id: 'f2', url: 'chs.html' },
        { id: 'f3', url: 'art.html' },
        { id: 'f4', url: 'src/Resume-Jennifer Jung-Sep.24.pdf' },
        // { id: 's1', url: 'jenlio.html' },
        { id: 's2', url: 'my-widdy.html' },
        { id: 's3', url: 'roosroast.html' },
        { id: 's4', url: 'glansis.html' },
        { id: 's5', url: 'vendors.html' },
        { id: 's6', url: 'ife.html' },

    ];

    pageloads.forEach(function (element) {
        const pageload = document.getElementById(element.id);
        if (pageload) {
            console.log('Back element found:', pageload);
            pageload.addEventListener('click', function () {
                console.log('Redirecting to:', element.url);
                window.location.href = element.url;
            });
        } else {
            console.log('Back element not found for ID:', element.id);
        }
    });
});





const bgGroup = document.querySelector('.svg-bg')
const bgPaths = bgGroup.querySelectorAll('path')
bgPaths.forEach((path, i) => {
    const length = path.getTotalLength()
    path.style.setProperty('--length', length)
    path.style.setProperty('--duration', length + 'ms')
    path.style.setProperty('--delay', i * 100 + 'ms')
})

const mainGroup = document.querySelector('.svg-main')
const mainPaths = mainGroup.querySelectorAll('path')
mainPaths.forEach((path, i) => {
    const length = path.getTotalLength()
    path.style.setProperty('--length', length)
    path.style.setProperty('--duration', length + 'ms')
    path.style.setProperty('--delay', i * 100 + 'ms')
})


function paragraph(element) {
    const array = element.innerText.split('')
    const special = ['~', '@', '!', '#', '$', '%', '^', '&', '*']
    const exception = [' ', '\n', '.', ',']
    const random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const numArray = []
    array.forEach(char => {
        const num = random(5, 40)
        numArray.push(num)
    })

    let completeCount
    let newText
    const timer = setInterval(() => {
        completeCount = 0
        newText = ''
        numArray.forEach((num, i) => {
            if (exception.includes(array[i]) || numArray[i] === 0) {
                newText += array[i]
                completeCount += 1
            } else {
                newText += special[numArray[i] % special.length]
                numArray[i] = --num
            }
        })

        element.innerText = newText
        if (completeCount === numArray.length) clearInterval(timer)
    }, 100)
}

const p = document.querySelector('.index-intro')
paragraph(p)















class CardFlipOnScroll {
    constructor(wrapper, sticky) {
        this.wrapper = wrapper
        this.sticky = sticky
        this.cards = sticky.querySelectorAll('.card')
        this.length = this.cards.length

        this.start = 0
        this.end = 0
        this.step = 0
    }

    init() {
        this.start = 0
        this.end = this.wrapper.offsetTop + this.wrapper.offsetHeight - innerHeight * 1.2
        this.step = (this.end - this.start) / (this.length * 2)
    }

    animate() {
        this.cards.forEach((card, i) => {
            const s = this.start + this.step * i
            const e = s + this.step * (this.length + 1)

            if (scrollY <= s) {
                card.style.transform = `
    perspective(100vw)
    translateX(100vw) 
    rotateY(180deg)
  `
            } else if (scrollY > s && scrollY <= e - this.step) {
                card.style.transform = `
    perspective(100vw)
    translateX(${100 + (scrollY - s) / (e - s) * -100}vw)
    rotateY(180deg)
  `
            } else if (scrollY > e - this.step && scrollY <= e) {
                card.style.transform = `
    perspective(100vw)
    translateX(${100 + (scrollY - s) / (e - s) * -100}vw)
    rotateY(${180 + -(scrollY - (e - this.step)) / this.step * 180}deg)
  `
            } else if (scrollY > e) {
                card.style.transform = `
    perspective(100vw)
    translateX(0vw) 
    rotateY(0deg)
  `
            }
        })
    }
}

const mainContent1 = document.querySelector('.card-bg')
const sticky = document.querySelector('.sticky')
const cardFlipOnScroll = new CardFlipOnScroll(mainContent1, sticky)
cardFlipOnScroll.init()

window.addEventListener('scroll', () => {
    cardFlipOnScroll.animate()
})

window.addEventListener('resize', () => {
    cardFlipOnScroll.init()
})



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.3
});



const hiddenDes = document.querySelectorAll('.des-box');
hiddenDes.forEach((el) => observer.observe(el));


const hiddenPj = document.querySelectorAll('.pj');
hiddenPj.forEach((el) => observer.observe(el));

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const contentOverlay = document.getElementById('contentOverlay');

menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.classList.toggle('active');
    navMenu.classList.toggle('open');
    contentOverlay.classList.toggle('active');
    document.body.classList.toggle('menu-open', isOpen);
});

contentOverlay.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navMenu.classList.remove('open');
    contentOverlay.classList.remove('active');
    document.body.classList.remove('menu-open');
});


var link = document.createElement('link');

link.rel = 'icon';
link.type = 'image/x-icon';
link.href = 'src/favicon.ico';
document.head.appendChild(link);

(function (h, o, t, j, a, r) {
    h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
    h._hjSettings = { hjid: 5106440, hjsv: 6 };
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script'); r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');




