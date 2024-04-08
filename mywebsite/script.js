function onClick(type, icon) {
    const ele = document.getElementById(type);
    console.log(ele.classList);
    if (ele.classList.contains('visible')) {
        ele.classList.remove('visible');
        icon.style.transform = 'rotate(0deg)';
    } else {
        ele.classList.add('visible');
        icon.style.transform = 'rotate(180deg)';
    }
}

// type is the content to display, for example about-en
function handleNavigation(type, navlink) {
    document.querySelectorAll('.nav-link').forEach(navlink => {
            navlink.classList.remove('active');
        }
    );
    if (type !== 'home-en' && type !== 'home-de' && type !== 'home-vn') {
        navlink.classList.add('active');
    }

    document.querySelectorAll('.col').forEach(div => {
        if (div.id !== type) {
            div.style.display = 'none';
        }
    })
    document.getElementById(type).style.display = 'block';
}

function handleLang(type) {
    document.querySelectorAll('.navigation').forEach(nav => {
        nav.style.display = 'none';
    })
    document.getElementById('navigation-' + type).style.display = 'block';
    

    let target = '';
    document.querySelectorAll('.home').forEach(home => {
        if (home.style.display !== 'none') {
            target = 'home';
        }
        home.style.display = 'none';
    })

    if(target === ''){
        document.querySelectorAll('.about').forEach(about => {
            if (about.style.display !== 'none') {
                target = 'about';
            }
            about.style.display = 'none';
        })
    }

    if(target === ''){
        document.querySelectorAll('.projects').forEach(projects => {
            if (projects.style.display !== 'none') {
                target = 'projects';
            }
            projects.style.display = 'none';
        })
    }
    document.getElementById(target + '-' + type).style.display = 'block';
    document.getElementById('nav-' + target + '-' + type).classList.add('active');
}