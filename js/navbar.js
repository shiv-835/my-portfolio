document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.nav-item a');

    navItems.forEach(item => {
        item.addEventListener('click', function () {
            document.querySelector('.nav-item.active').classList.remove('active');
            this.parentElement.classList.add('active');
        });
    });

    window.addEventListener('scroll', function () {
        const sections = document.querySelectorAll('section');
        let scrollPos = window.scrollY || document.documentElement.scrollTop;

        sections.forEach(section => {
            if (scrollPos >= section.offsetTop - 50 && scrollPos < section.offsetTop + section.offsetHeight) {
                const currentId = section.getAttribute('id');
                document.querySelector('.nav-item.active').classList.remove('active');
                document.querySelector(`.nav-item a[href="#${currentId}"]`).parentElement.classList.add('active');
            }
        });
    });
});


