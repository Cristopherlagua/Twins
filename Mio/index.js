const btn2 = document.querySelector('#2');

btn2.addEventListener('mouseover',function () {

    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.randomY()*100);
    btn2.style.setProperty('top',randomY+'%');
    btn2.style.setProperty('left',randomX+'%');
    btn2.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
