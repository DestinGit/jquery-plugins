/**
 * Created by formation on 21/07/2017.
 * Plugin JQuery pour créer une barre de navigation
 */
(function ($) {
    var settings = {};

    var defaultSettings = {
        css: {
            color: '#F50',
            fontSize: '18px',
            padding: '5px',
            width: '120px',
            textAlign: 'center'
        }
    };
// Création d'un élément representant un lien
    function getLink(index) {
        $link = $('<a>')
            .attr('href', settings.links[index])
            .text(settings.labels[index]).css(settings.css);

        return $link;
    }

    function getLinks(target) {
        var $clone = target.clone().empty();

        settings.links.forEach(function (item, index) {
            var $link = getLink(index);
            $clone.append($link);
        });
        return $clone;
    }

    function navbar(params) {
        console.log($(this));
        if('css' in params) {
            params.css = $.extend(defaultSettings.css, params.css);
        }
        // Exportation des parametres dans le contexte global du plugin
        // settings = params;
        settings = $.extend(defaultSettings, params);

        // Insertion des liens dans la cible du plugin
        this.each(function () {
            $(this).replaceWith(getLinks($(this)));
        });
    }

    $.fn.myCustomNavbar = navbar;
})(jQuery);