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


    

});