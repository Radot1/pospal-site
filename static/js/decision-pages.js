(function () {
    var groups = document.querySelectorAll('[data-faq-accordion]');
    if (!groups.length) {
        return;
    }

    groups.forEach(function (group) {
        var items = group.querySelectorAll('details');
        items.forEach(function (item) {
            item.addEventListener('toggle', function () {
                if (!item.open) {
                    return;
                }
                items.forEach(function (other) {
                    if (other !== item) {
                        other.open = false;
                    }
                });
            });
        });
    });
})();
