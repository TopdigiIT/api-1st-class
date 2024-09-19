// <-------------------Scroll Back to Top Buttop------------------------------>
const backToTopBtn = document.getElementById("backToTopBtn");
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    };

    backToTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    };

