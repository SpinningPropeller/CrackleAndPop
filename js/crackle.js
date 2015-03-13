//(function(){

    function drawLines(l, lWidth, duration, color, fadeIn, callback){
        if(typeof color === "undefined") color = _defaultColor;

        if(fadeIn) l.attr({opacity:0});

        var paths = l.length;

        for(var i=0; i<paths; i++){
            l[i].attr({
                fillOpacity:0,
                stroke: color,
                strokeWidth: lWidth,
                strokeDasharray: l[i].getTotalLength(),
                strokeDashoffset: l[i].getTotalLength()/lWidth
            });
            l[i].animate({
                strokeDashoffset: 0,
                opacity:1
            },
            duration,
            mina.easeinout,
            function(){
                paths--;
                if(paths==1) callback();
            });
        }

    }

    function undrawLines(l, lWidth, duration, fadeOut, callback){
        if(fadeOut) l.attr({opacity:1});
        var paths = l.length;
        for (var i=0; i<paths; i++){
            l[i].attr({
                strokeWidth:lWidth,
                strokeDasharray: l[i].getTotalLength(),
                strokeDashoffset:0
            });
            l[i].animate({
                strokeDashoffset:0,
                opacity:1
            },
            duration,
            mina.easeinout,
            function(){
                paths--;
                if(paths==1) callback();
            });
        }

    }

//})();
