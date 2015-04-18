;(function($) {
    // source: https://github.com/mrmrs/colors
    var colors = ["#7FDBFF","#0074D9","#01FF70","#001F3F","#39CCCC","#3D9970","#2ECC40","#FF4136","#85144B","#FF851B","#B10DC9","#FFDC00","#F012BE","#aaa","#111","#ddd"];

    $.fn.wordThumbnail = function(options) {
        options = $.extend({
            'bkg_color': colors,
            'font_size': '40px',
            'width': '80px',
            'shape': 'rounded'
        }, options);

        var $self = $(this);
        var color_num = options.bkg_color.length;

        $self.each(function(i, v) {
            // change background color
            var $this = $(this),
                word = $this.attr("data-content"),
                color_i = i % color_num,
                bkg_color = options.bkg_color[color_i];

            $this.addClass('word-thumb');
            $this.append('<p class="word">'+word+'</p>')

            if ($this.attr("data-color")) {
                bkg_color = $this.attr("data-color")
            }

            // change shape
            switch (options.shape) {
                case ('circle'):
                    $this.css('background-color', bkg_color);
                    $this.addClass('circle');
                    break;
                case ('square'):
                    $this.css('background-color', bkg_color);
                    $this.addClass('square');
                    break;
                case ('rounded'):
                    $this.css('background-color', bkg_color);
                    $this.addClass('rounded');
                    break;
                case ('hexagon'):
                    $this.css('background-color', bkg_color);
                    $this.css('color', bkg_color);
                    $this.addClass('hexagon');
                    break;
                case ('heart'):
                    $this.css('color', bkg_color);
                    $this.addClass('heart');
                    break;
                default:
                    throw('Wrong parameter');
            }
        })
        // edit text size
        $self.find(".word").css("font-size", options.font_size)
        // edit shape attribute
        shape($self, options)
    }

    function shape(self, options) {
        if (options.shape === "rounded" || options.shape === "square" || options.shape == "circle") {
            self.css({
                "width": options.width,
                "height": options.width
            });
        }
    }
})(jQuery);
