

function loadingAnimation(params) {
    var tl = gsap.timeline();

    tl.from('nav div div *', {
        opacity: 0,
        y: 100,
        delay: 0.5,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out'
    })


    tl.from('.purple-lines', {
        opacity: 0,
        x: -100,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out'
    }, "saathi")

    tl.from('.socials a', {
        opacity: 0,
        x: 100,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out'
    }, "saathi")

    tl.from('#proffesion', {
        duration: 0.5,
        y: 200,
        opacity: 0,
        ease: 'power3.out'
    })

    tl.from('#name p', {
        duration: 0.5,
        y: 200,
        opacity: 0,
        ease: 'power3.out'
    }, "bhai")

    tl.from('.pfp-img', {
        duration: 0.5,
        scale: 0,
        opacity: 0,
        ease: 'power3.out'
    }, "bhai")

    tl.from('.pfp span', {
        duration: 0.1,
        delay: 0.4,
        opacity: 0,
        ease: 'power3.out'
    }, "bhai")

    tl.from('#desc', {
        duration: 0.1,
        opacity: 0,
        ease: 'power3.out'
    })

    tl.from('#desc p', {
        duration: 0.5,
        delay: 0.2,
        x: -200,
        opacity: 0,
        ease: 'power3.out'
    })
}


//loadingAnimation();


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true // Enable smooth scrolling
    // Add more options as needed
});




let skills = [
    {
        name: 'HTML',
        value: 100
    },
    {
        name: 'CSS',
        value: 90
    },
    {
        name: 'JavaScript',
        value: 100
    },
    {
        name: 'tailwind',
        value: 100
    },
    {
        name: 'React',
        value: 50
    },
    {
        name: 'Node js',
        value: 80
    },
    {
        name: 'Express js',
        value: 70
    },
    {
        name: 'MongoDB',
        value: 80
    },
]

skills.forEach((skill) => {
    const skillCont = document.querySelector('.skills');
    const name = skill.name;
    const value = skill.value;
    const skilldiv = document.createElement('div');
    skilldiv.classList.add('skill');
    skilldiv.innerHTML = `<p>${name}</p>
    <div class="progress rounded-full">
        <div class="progress-bar" style="width: ${value}%"><span>${value}%</span></div>
</div>`;

    skillCont.appendChild(skilldiv);


})



function skillsAnimations() {
    document.querySelector('.skillsPage').addEventListener('mouseenter', () => {
        gsap.from(".progress-bar", {
            width: 0,
            duration: 0.3,
            delay: 0.1,
            ease: 'power3.out',
            stagger: 0.1,
        })
    })
}


//skillsAnimations();

const cursor = document.querySelector('.cursor');

// Function to update cursor position
function updateCursor(e) {
    const scrollPosition = scroll.scroll.instance.scroll;
    const cursorX = e.clientX;
    const cursorY = e.clientY + scrollPosition.y;

    gsap.to(cursor, {
        x: cursorX,
        y: cursorY,
        duration: 0.5,
        ease: 'powe1.in'
    });
}

// Attach event listener
document.querySelector('body').addEventListener('mousemove', updateCursor);