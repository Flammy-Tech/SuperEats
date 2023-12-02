document.addEventListener('DOMContentLoaded', function () {

    //Categories section
    const categoriesLinks = document.querySelectorAll('.categories ul li')

    for (const link of categoriesLinks) {
        link.addEventListener('click', function () {
            if (link.classList.contains('active')) {
                link.classList.toggle('inactive');
                
            } else {
                link.classList.toggle('active');
            }

        });
    }


    //parallax scrolling
    const hero = document.getElementById("hero");

    window.addEventListener('scroll', function(){
        let offset = window.scrollY;
        let offsetDivision = offset/5;


        if (offset > 40) {
            hero.style.height = (90-offsetDivision) + 'vh';
        }else{
            hero.style.height = 95 + 'vh';
        }


        

    });



});