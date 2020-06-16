var currentItems = 0;
$(document).ready(function () {
    $(".accordion-heading").click(function () {
        if ($(".accordion-body").is(':visible')) {
            /* check the condition accordion-body is visible or not */
            $(".accordion-body").slideUp(200); /*if content is visible then close accordion-body with specific time duration */
            $(".plusminus").text('+') /* add plus sign */
        } else {
            $(this).next(".accordion-body").slideDown(200);
            /*if content not visible then 
                                                                                                                      show the accordion-body */
            $(this).children(".plusminus").text('-'); /* add minus sign */
        }
    });
    $(".add-to-cart").click(function () {
        currentItems++;
        $(".cart-badge").text(currentItems);
    });
})

(function () {
    'use strict'
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation')

        // Loop over them and prevent submission
        Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
    }, false)
}())