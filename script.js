




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

const p = document.querySelector('p')
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
        this.start = this.wrapper.offsetTop - 100
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





// document.addEventListener('scroll', function() {
//     const des2 = document.querySelector('.des-box2');
//     const rect = des2.getBoundingClientRect();
//     const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

//     if (isVisible) {
//         des2.classList.add('visible');
//     }
// });

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
    threshold: 0.1
});


const hiddenElements = document.querySelectorAll('.des-box');
hiddenElements.forEach((el) => observer.observe(el));

