/**
 * jQuery Animated Progressbar
 * Author: shakibdshy<shakibdshy@gmail.com>
 * Author URL: https://github.com/shakibdshy
 * Version: 1.0.0
 */
// console.log("hello");
window.addEventListener("load", () => {

    const skillSection = document.getElementById("skill-section");
    
    // configure observer
    const options = {
        rootMargin: '0px',
        threshold: 1.0
    }

    // establish observer
    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {
            if (entry.isIntersecting)
            {
                (function($) {
                    'use strict'
                
                    $("[progress-bar]").each(function () {
                        $(this)
                            .find(".progress-fill")
                            .animate(
                            {
                                width: $(this).attr("data-percentage"),
                            },
                            2000
                            );
                    
                        $(this)
                            .find(".progress-number-mark")
                            .animate(
                            { left: $(this).attr("data-percentage") },
                            {
                                duration: 2000,
                                step: function (now, fx) {
                                var data = Math.round(now);
                                $(this)
                                    .find(".percent")
                                    .html(data + "%");
                                },
                            }
                            );
                        });
                
                })(jQuery);
            }
            console.log("Intersected !!!");
        })
    }, options);
    observer.observe(skillSection);

});

