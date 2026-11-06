/* Wspólne skrypty strony – bez zewnętrznych bibliotek i bez śledzenia */
(function () {
    'use strict';

    /* Powrót na górę */
    var backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        var toggle = function () {
            backToTop.classList.toggle('is-visible', window.scrollY > 300);
        };
        window.addEventListener('scroll', toggle, { passive: true });
        toggle();
        backToTop.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* Okna dialogowe (klauzula RODO, powiększenie dyplomu) */
    function closeOnBackdrop(dialog) {
        dialog.addEventListener('click', function (e) {
            if (e.target === dialog) dialog.close();
        });
    }

    document.querySelectorAll('[data-open-dialog]').forEach(function (btn) {
        var dialog = document.getElementById(btn.getAttribute('data-open-dialog'));
        if (!dialog) return;
        btn.addEventListener('click', function () { dialog.showModal(); });
    });

    document.querySelectorAll('dialog').forEach(function (dialog) {
        closeOnBackdrop(dialog);
        dialog.querySelectorAll('[data-close-dialog]').forEach(function (btn) {
            btn.addEventListener('click', function () { dialog.close(); });
        });
    });

    /* Galeria kwalifikacji */
    var lightbox = document.getElementById('lightbox');
    if (lightbox) {
        var lbImg = lightbox.querySelector('img');
        var lbCaption = lightbox.querySelector('figcaption');
        document.querySelectorAll('[data-lightbox-src]').forEach(function (btn) {
            btn.addEventListener('click', function () {
                lbImg.src = btn.getAttribute('data-lightbox-src');
                lbImg.alt = btn.getAttribute('data-lightbox-alt') || '';
                lbCaption.textContent = btn.getAttribute('data-lightbox-alt') || '';
                lightbox.showModal();
            });
        });
        lightbox.addEventListener('close', function () { lbImg.removeAttribute('src'); });
    }
})();
