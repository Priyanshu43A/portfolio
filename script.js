

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

let mobskills = [
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


mobskills.forEach((skill) => {
    const skillCont = document.querySelector('.mobskills');
    const name = skill.name;
    const value = skill.value;
    const mobskilldiv = document.createElement('div');
    mobskilldiv.classList.add('mobskill');
    mobskilldiv.innerHTML = ` <div class="w-full h-12">
    <div style="width: ${value}%;" class="bg-purple-600 h-full text-xl p-4 flex items-center font-bold">${name}</div>
</div>`;

    skillCont.appendChild(mobskilldiv);


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


skillsAnimations();

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
//document.querySelector('body').addEventListener('mousemove', updateCursor);



const proImg = document.querySelectorAll(".proImg");

proImg.forEach((img)=>{
    img.addEventListener('mouseenter',()=>{
        
        showProAnimation(img)
    })
})


proImg.forEach((img)=>{
    img.addEventListener('mouseleave',()=>{
        hideProAnimation(img)
    })
})



const showProAnimation = (img)=>{

    const viewPro = img.querySelector('.viewpro');
    const aTag = img.querySelector('.viewpro div a');
    const spanTag = img.querySelector('.viewpro div span');



    const tl = gsap.timeline();


    tl.to(viewPro,{
        opacity: 1,
        display: "flex",
        duration: 0.3,
        ease: 'power3.out'
        
    })

    
    tl.to(aTag, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: 'power3.out'
        
    })

    tl.to(spanTag, {
        opacity: 1,
        y: 0,
        duration: 0.2,
        ease: 'power3.out'
        
    })

}



const hideProAnimation = (img)=>{

    const viewPro = img.querySelector('.viewpro');
    const aTag = img.querySelector('.viewpro div a');
    const spanTag = img.querySelector('.viewpro div span');


    const tl = gsap.timeline();

    tl.to(aTag,{
        opacity: 0,
        y: 100,
        duration: 0.2,
        stagger: 0.1,
        ease: 'power3.out'
        
    })

    tl.to(spanTag,{
        opacity: 0,
        y: 100,
        duration: 0.2,
        stagger: 0.1,
        ease: 'power3.out'
        
    })



    tl.to(viewPro,{
        opacity: 0,
        display: "none",
        duration: 0.3,
        ease: 'power3.in'
        
    })

    
}


// Function to show the mobile navigation with animation
function showMobNav() {
    gsap.fromTo(".expandedNav", 
        { x: 1000 }, // Start position
        { x: 0, duration: 0.5, ease: 'power3.out' } // End position
    );
}

// Function to hide the mobile navigation with animation
function hideMobNav() {
    gsap.to(".expandedNav", {
        x: 1000, // End position
        duration: 0.5,
        ease: 'power3.in', // Ease for the hide animation
        onComplete: () => {
            expandedNav.classList.remove('active'); // Remove the active class after animation
        }
    });
}

const menu = document.querySelector('.menu');
const expandedNav = document.querySelector('.expandedNav');
const close = document.querySelector('.closeNav');

menu.addEventListener('click', () => {
    expandedNav.classList.add('active'); // Add the active class before animation
    showMobNav();
});

close.addEventListener('click', () => {
    hideMobNav();
});


