
var Taobaocommon = {
    taobao: function () {

    },
    stopEventBubble: function (event) {
        var e = event;
        if (e) {
            e.stopPropagation();
        }
    },

    showimglesson: function () {
        $('lessonul1').bind("mouseover", function () {
            var pop = $(this).fine('img-pop');
            $(this).css({border: "2px solid orangered", width: "235px", height: "70px"});
            TweenMax.to(pop, 0.5, {top: 0, ease: Bounce.easeOut});
            taobao.stopEventBubble(e);
        });

        $(document).bind("mouseover", function () {
            $('lessonul1').css({border: "0", width: "235px", height: "400px"});
            var pop = $(this).fine('img-pop');
            TweenMax.to(pop, 0.5, {top: 235, ease: linear.easeNone});
        });
    }
};
$(function(){
   Taobaocommon.taobao();
});