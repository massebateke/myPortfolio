
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
window.addEventListener('scroll', () => {
    const fromTop = window.scrollY;
    document.querySelectorAll('header nav a').forEach(link => {
        const sectionId = link.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
        if (section.offsetTop - 100 <= fromTop && section.offsetTop + section.offsetHeight - 100 > fromTop) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

