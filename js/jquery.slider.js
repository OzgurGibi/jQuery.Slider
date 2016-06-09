/*
 * jQuery Slider plugin
 * version 1.0
 * Author: Özgür Çivi (www.yubis.com)
 */
(function ($)
{
    $.fn.Slider = function (option, parameters)
    {
        var methods =
            {
                Init: function (options)
                {
                    var self = $(this);

                    $(".tab-content #tab0.tab-pane")
                        .css(
                        {
                            "left": 0,
                            "z-index": 3
                        }).show();

                    self.attr("current", 0);
                    self.attr("max", $(".tab-content .tab-pane").size());

                    $("a[data-toggle='tab']").click(function (e)
                    {
                        var href = $(this).attr("href");
                        var currentTab = $(".tab-content " + href + ".tab-pane");

			self.Slider("GoTo", currentTab.index());

                        e.preventDefault();
                    });
                },
                GoTo: function (sender, index)
                {
                    var self = $(this); // $(sender);
                    var id = "#tab" + index;
                    var tabs = $(".tab-content .tab-pane");
                    var currentTab = $(".tab-content " + id);

                    if (currentTab.css("z-index") != 3)
                    {
                        $.each(tabs, function ()
                        {
                            var $this = $(this);
                            if ($this.css("z-index") == 3)
                                $this.css("z-index", 2);
                            else
                                $this.css("z-index", 1);
                        });

                        currentTab
                            .show()
                            .css(
                            {
                                "left": 650,
                                "z-index": 3
                            })
                            .animate(
                            {
                                "left": 0
                            });

                        //self.attr("current", tabs.index(currentTab));
			self.attr("current", index);
                    }
                },
                Prev: function ()
                {
                    var max = parseInt($(this).attr("max"));
                    var currentIndex = parseInt($(this).attr("current"));

                    if (currentIndex == 0)
                        currentIndex = max;

                    $(this).Slider("GoTo", currentIndex - 1);
                },
                Next: function ()
                {
                    var max = parseInt($(this).attr("max"));
                    var currentIndex = parseInt($(this).attr("current"));

                    if (currentIndex == (max - 1))
                        currentIndex = -1;

                    $(this).Slider("GoTo", currentIndex + 1);
                }
            };

        this.each(function ()
        {
            if (methods[option])
            {
                var p = Array.prototype.slice.call(arguments, 1);
                p.push(parameters);
                return methods[option].apply(this, p);
            }
            else if (typeof (option) === "object" || !option)
            {
                return methods.Init.apply(this, arguments);
            }
            else
            {
                $.error("Method " + option + " does not exist on jQuery.Slider");
            }
        });
    }
})(jQuery);
