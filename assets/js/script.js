var wallpapers = document.getElementById('wallpapers');
var logos = document.getElementById('logos');
var business = document.getElementById('business');
var stationary = document.getElementById('stationary');
var websites = document.getElementById('websites');
var mobile = document.getElementById('mobile');
var all = document.getElementById('all');
var images = document.querySelectorAll('.all-items');

wallpapers.addEventListener('click', function () { showImg('wallpapers') });
logos.addEventListener('click', function () { showImg('logos') });
business.addEventListener('click', function () { showImg('business') });
stationary.addEventListener('click', function () { showImg('stationary') });
websites.addEventListener('click', function () { showImg('websites') });
mobile.addEventListener('click', function () { showImg('mobile') });
all.addEventListener('click', function () { showImg('all-items') });

function showImg(category) {
    Array.from(images).forEach(element => {
        if (!element.classList.contains(category)) {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';
        }
    });
}

var modal = document.querySelector('.modal-image');
var imgs = document.querySelectorAll('.all-img');
var modalImg = document.querySelector('.img');
var close = document.querySelector('.close');
var html = document.querySelector('html');

console.log(modalImg);

Array.from(imgs).forEach(element => {
    var imgSource = element.getAttribute('src');
    element.addEventListener('click', function () {
        html.classList.add('no-scroll');
        modalImg.setAttribute('src', imgSource);
        modal.style.display = 'block';
        console.log(imgSource);
    });
});

modal.addEventListener('blur', function (element) {
    element.style.display = 'none';
});

close.addEventListener('click', function () {
    modal.style.display = 'none';
    html.classList.remove('no-scroll');
})


