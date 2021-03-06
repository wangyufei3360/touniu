/*
* @description: 首页JS模块 
* @author: wyf  
* @email: 707366656@qq.com
* @time: 2015-08-29
*/

define(function(require, exports, module){

	require("jquery");
	require("kinmaxshow");
	

	//初始化方法
	function _init(){
		var li = $(".ui-direct").find('.list').find('li');
		removeMr(li,4);
		$("#kinMaxShow").kinMaxShow();
		GetRTime();
	}

	//去除margin-right
	function removeMr(elem,column){
		elem.each(function(index, el) {
			if (($(this).index()+1)% column == 0) {
				$(this).css("margin-right","0px");
			};		
		});
	}

	//倒计时
	function GetRTime(){
		$(".btn-forward").each(function(c) {
            var that = $(this);
            var day = parseInt($(this).find(".day").text(), 10);
            var hours = parseInt($(this).find(".hours").text(), 10);
            var minute = parseInt($(this).find(".minute").text(), 10);
            var second = parseInt($(this).find(".second").text(), 10);
            var time = setInterval(function() {
                if (day == 0 && hours == 0 && minute == 0 && second == 0) {
                    clearInterval(time);
                    that.hide();
                    that.siblings('.jindu').show();
                    that.siblings('.btn-box').find('a').addClass('ui-button-red').removeClass("ui-button-orange").text("立即投资");
                    return false
                }

                if (second == 0) {
                    second = 60;
                }

                if (second == 60) {
                    minute -= 1;

                    if (minute <= 0 && hours > 0) {
                        hours -= 1;
                        minute = 59;
                        second = 60
                    }

                    if(hours <= 0 && day > 0){
                        day -= 1;
                        hours = 23;
                        minute = 59;
                        second = 60
                    }
                }
                second -= 1;

                var d = day;
                var s = second;
                var m = minute;
                var h = hours;
                if (s < 10) {
                    s = "0" + s
                }
                if (m < 10) {
                    m = "0" + m
                }
                if (h < 10) {
                    h = "0" + h
                }
                if(d < 10){
                    d = "0" + d;
                }
                that.find(".day").text(d);
                that.find(".hours").text(h);
                that.find(".minute").text(m);
                that.find(".second").text(s);
            },
            1000)
        })
	}

	$(function(){
		_init();
	})

	exports.GetRTime = GetRTime;
})

//倒计时
/*
function GetRTime() {
    var nMS = lefttime * 1000 - runtimes * 1000;
    if (nMS >= 0) {
        var nD = Math.floor(nMS / (1000 * 60 * 60 * 24)) % 24;
        var nH = Math.floor(nMS / (1000 * 60 * 60)) % 24;
        var nM = Math.floor(nMS / (1000 * 60)) % 60;
        var nS = Math.floor(nMS / 1000) % 60;
        $('.day').html(nD);
        $('.hour').html(nH);
        $('.minute').html(nM);
        $('.second').html(nS);
        runtimes++;
        setTimeout(GetRTime, 1000);
    }
}*/