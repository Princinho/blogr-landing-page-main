

document.addEventListener("DOMContentLoaded", function (event) {
    console.log("Javascript loaded")
    const openNavImg = document.getElementById('img-open-nav')
    const closeNavImg = document.getElementById('img-close-nav')


    document.addEventListener('click', e => {
        const targetId = e.target.id
        const btnCloseNavIds = ['img-open-nav', 'img-close-nav', 'btn-toggle-nav']
        console.log('clicked')

        if (e.target.dataset.navToggle) {
            console.log('toggled open nav')
            e.target.classList.toggle('opened')
        }

        if (e.target.dataset.navToggle) {
            [...document.querySelectorAll('.sub-nav')]
                .filter(subNav => subNav.id !== e.target.dataset.navToggle)
                .map(subNav => {
                    subNav.classList.remove('visible')
                })
            toggleSubNav(e.target.dataset.navToggle)
        }

        if (btnCloseNavIds.find(e => e === targetId)) {
            if (document.body.classList.contains('open-nav')) {
                openNavImg.classList.remove('hidden-nav-btn')
                closeNavImg.classList.add('hidden-nav-btn')
                console.log('showing open nav icon')
            } else {
                console.log('showing close nav icon')
                openNavImg.classList.add('hidden-nav-btn')
                closeNavImg.classList.remove('hidden-nav-btn')
            }
            document.body.classList.toggle('open-nav')
        }
    })
    function toggleSubNav(id) {
        console.log('toggled open Sub nav')
        const subNav = document.getElementById(id)
        subNav.classList.toggle('visible')

    }
});

