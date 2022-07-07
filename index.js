const moon = document.querySelector('.dark');
const sun = document.querySelector('.light');

sun.addEventListener('click', () => themeMode('light'));
moon.addEventListener('click', () => themeMode('dark'));

const themeMode = (themeState) => {
    if(themeState === 'light'){
        sun.style.display = 'none';
        moon.style.display = 'block';
    }
    else if(themeState === 'dark'){
        sun.style.display = 'block';
        moon.style.display = 'none';
    }
}



const btnBars = document.querySelector('.bars');
const btnTimes = document.querySelector('.times');
const SideNav = document.querySelector('.aside');


btnBars.addEventListener('click', () => myFunc('open'));
btnTimes.addEventListener('click', () => myFunc('close'));

const myFunc = (navCondition) => {
    if(navCondition === 'open'){
        SideNav.classList.add('show-nav');
        btnTimes.style.display = "block";
        btnBars.style.display = "none";
    }
    else if(navCondition === 'close'){
            SideNav.classList.remove('show-nav');
            btnTimes.style.display = "none";
            btnBars.style.display = "block";
    }
}