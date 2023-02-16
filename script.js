const cards = document.querySelectorAll('.card')


const observer = new IntersectionObserver((entries) => {
    console.log('hello', entries)
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        // if (entry.isIntersecting) observer.unobserve(entry.target)
    })
}, {
    rootMargin: '-100px'
})
cards.forEach(card => {
    observer.observe(card)
})

const lastCardOvserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

    })
}, {

})
lastCardOvserver.observe(document.querySelector('.card:last-child'))