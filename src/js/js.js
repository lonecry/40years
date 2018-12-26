import "../css/swiper.min.css"
import "../css/style.css"
import $ from "jquery"
import {fenxiang} from "../js/fenxiang.js"
import Swiper from 'swiper'

var videoslist = [
    "http://v3.cztv.com/cztv/vod/2018/12/21/67defdcbb5534ceb958635980002e6b7/9f966af57d4a4f5f870305a14cdda07b_H264_1500K_MP4.mp4",
    "http://v3.cztv.com/cztv/vod/2018/12/21/cbe19ee994a04a1bb5debbc8aa27a609/74b54f18504f452c9552c36778cd6fe4_H264_1500K_MP4.mp4",
    "http://v3.cztv.com/cztv/vod/2018/12/21/566d05b61b434093a60a3e16fab2f86f/8cce8cf6a7454ca9a127b9e01dfa797d_H264_1500K_MP4.mp4",
    "http://v3.cztv.com/cztv/vod/2018/12/21/3bcbc8d9e0094066992dfd081d1d7de3/b92ee971084144e59cb75b016d29641c_H264_1500K_MP4.mp4",
    "",
    "http://v3.cztv.com/cztv/vod/2018/12/21/0d119380939042cea89ca4a32541e0b9/a4f9199ba5844998b9a5fb7307072cb8_H264_1500K_MP4.mp4",
    "",
    "http://v3.cztv.com/cztv/vod/2018/12/21/9ded428d987e48d8a6abe6810a994b84/4c83add33f5b407f81c8e2dc5917b518_H264_1500K_MP4.mp4",
    "http://v3.cztv.com/cztv/vod/2018/12/21/0b1c447071a64620887916f90fc0e5b4/bd31abfaaec949ba8a576f3c235890ac_H264_1500K_MP4.mp4",
]
setTimeout(function(){
    $(".loading_gif").show()
    var firstinied = false;
    var videoid = 0
},100)
var play_now = true;
var music_now = true;
var playused = true;
var change = false
var index = 0;
var scrolled = false;
var type = ''
var rem = document.body.clientWidth;
// fenxiang("快来体验一把全世界最先进的地信技术", "联合国都来浙江德清开大会 看看它有多牛", "快来体验一把全世界最先进的地信技术", ' ', "https://o.cztvcloud.com/181/4984956/images/fenxiang.jpg")
$(function(){
    window.onload = function(ev){
        setTimeout(function(){
            $(".loading_gif").hide()
            $(".loading").hide();
        },600);
        setTimeout(function(){
            $(".loading").hide();
            $(".p1titlebox,.part1").fadeIn()
        },700);
    }

    init();
    fenxiang('40年记忆 有故事的你','让我们一起寻找“浙”里，是否有你的记忆？','40年记忆 有故事的你','','http://o.cztvcloud.com/181/5031847/images/fenxiang.jpg')
    document.addEventListener("WeixinJSBridgeReady",function(){
        document.getElementById('musics').load();
        document.getElementById('musics').play();
    },false);
    document.getElementById('musics').play();
    $(window).bind("orientationchange",function(e){//用户变化屏幕方向时调用
        orient();
    });
    var swiper = new Swiper('.swiper-container',{
        centeredSlides : true,
        autoplay       : {
            delay                : 2500,
            disableOnInteraction : false,
        },
        pagination     : {
            el        : '.swiper-pagination',
            clickable : true,
        },
        navigation     : {
            nextEl : '.swiper-button-next',
            prevEl : '.swiper-button-prev',
        },
    });

    $('.element1,.part1').fadeIn()
    $(".music_play").click(function(){
        if(play_now){
            $(".music_play").removeClass("music_pause");
            $(".music_play").addClass("music_pause");
            play_now = false;
            playused = false;
            $(".bgMusic")[0].pause();
            $(".music").attr("src","http://o.cztvcloud.com/181/5031847/images/musicoff.png")
        } else {
            $(".music_play").removeClass("music_pause");
            play_now = true;
            playused = false;
            $(".bgMusic")[0].play();
            $(".music").attr("src","http://o.cztvcloud.com/181/5031847/images/musicon.png")
        }
    });
    setTimeout(function(){
        // $('.part1').addClass('loadhide')
        // setTimeout(() => $('.part1').hide(), 1000)
        // $('.part2').show()
    },2500)
    $('.hasvideo').click(function(){
        var videoid = $(this).attr('class').split('hasvideo')[1].split("itemmian")[1]
        videoplay(videoid)
        console.log(videoid)
    })
    $('.goback').click(function(){
        var video = document.getElementById('video')
        video.pause()
    })
    $('.imglogswrapper,.hanbox').click(function(){
        var id = $(this).attr('srcid')
        if(!(id == 5 || id == 7)){
            videoplay(id)
        }
    })
    $('.close').click(function(){
        $('video').attr('src','')
        musicreturn()
    })
    $('.gofor').click(function(){
        $('.part1').remove()
        $('.part2').show()
    })
    $('.ggg').click(function(){
        $('.share').fadeIn()
    })
    var p2show = false;
    var p3show = false
    var scroller = $(document),starty,
        touchUp,movey,distancey
    scroller.bind('touchstart',window,touchstart)
    scroller.bind('touchmove',window,touchmove)
    scroller.bind('touchend',window,touchend)

    function touchstart(e){
        touchUp = false
        var touch = e.originalEvent.targetTouches[0];
        starty = touch.pageY;			//起始点
    }

    function touchmove(e){
        var touch = e.originalEvent.targetTouches[0];
        var nowy = touch.pageY;		    //坐标移动终点
        movey = (nowy - starty);   		//y方向上移动的距离


    }

    function touchend(e){
        console.log(movey)
        if(movey < -150){

            if(!p2show){//在第二页滑动
                if(!p3show){//第三页没显示
                    $('.part2').hide()
                    $('.part3').fadeIn()
                    p2show = true
                    p3show = true
                    scroller.unbind('touchstart',window,touchstart)
                    scroller.unbind('touchmove',window,touchmove)
                    scroller.unbind('touchend',window,touchend)

                }

            }
        }
    }

})

function init(){
    if(IsPC()){
        var height = window.innerHeight
        var width = height * 414 / 799
        console.log(width,height);
        w = 414;
        h = 666;
        // w = width;
        // h = height;
        var pcw = 750 * (w / 750);//rem
        var pch = 1334 * (w / 750);//
        $("html").css({
            "width"      : w,
            "margin"     : "0 auto",
            "marginTop"  : "0",
            "height"     : h,
            "background" : "#fff"
        });
        $("html").css({fontSize : w / 750 * 100 + "px"});
        $("html").css({minHeight : h});
        $('.part2').height(h)
        $('body').height(h)
    } else {
        var w = $(window).width();
        var h = $(window).height();
        var rem = w / 750 * 100
        $("html").css({fontSize : w / 750 * 100});
        h = 14.48 * rem
        $('.part2').height(h)
        $('body').height(h)
        // $("#swiper-container").height(h)
    }
}

function IsPC(){
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod");
    var flag = true;
    for(var v = 0 ; v < Agents.length ; v++){
        if(userAgentInfo.indexOf(Agents[v]) > 0){
            flag = false;
            break;
        }
    }
    return flag;
}

function GetQueryString(name){
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r != null) return unescape(r[2]);
    return null;
}

function orient(){
    if(window.orientation == 0 || window.orientation == 180){//竖屏;//ipad、iphone竖屏；Andriod横屏
        $(".loading").hide().removeClass("hp");
        return false;
    } else if(window.orientation == 90 || window.orientation == -90){//横屏;//ipad、iphone横屏；Andriod竖屏
        $(".loading").show().addClass("hp");
        var video = document.getElementById("video");
        video.ended();
        video.addEventListener("ended",function(){
            $("#video,.mask").hide()
        })
        $("#video").hide()
        return false;
    } else {
        $(".loading").fadeOut();
    }
}

function isAndroid(){
    var u = navigator.userAgent;
    var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
    return isAndroid
}

function videoplay(id){
    console.log("Hello" + id)
    $('.videobox,#video').show()
    $('video').attr('src',videoslist[id - 1])
    var video = document.getElementById('video')
    video.play()
    if(play_now){
        $(".music").attr("src","http://o.cztvcloud.com/181/5031847/images/musicoff.png")
        $(".music_play").removeClass("music_pause");
        $(".music_play").addClass("music_pause");
        playused = true;
        $(".bgMusic")[0].pause();
    }
    video.addEventListener('ended',function(){
        $('.videobox').hide()
        musicreturn(id)
    })
}

function musicreturn(id){
    if(id == 9){
        $('.share').fadeIn()
    }
    $('.goback').hide()
    $(".videobox").hide()
    $("#video").hide()
    // document.getElementById("video").style.display = "none"
    if(playused){
        $(".music_play").removeClass("music_pause");
        play_now = true;
        playused = false;
        $(".bgMusic")[0].play();
        $(".music").attr("src","http://o.cztvcloud.com/181/5031847/images/musicon.png")
    }
}

//点击量
$.ajax({
    url      : 'http://d.cztvcloud.com/media/news?data_id=5031847&terminal=web&channel_id=181',/*url     :'http://d.cztvcloud.com/media/news?data_id=764588&terminal=web&channel_id=192',*/
    type     : 'get',
    dataType : 'jsonp',
    success  : function(rlt){
        var hints = rlt.data.hits
        console.log(hints);
        var analysisurl = "http://d.cztvcloud.com/visit/ie";
        var channelId = '181';
        var itemId = '5031847';
        var title = 'read';
        var editorId = '';
        var type = '';
        analysis(analysisurl,channelId,itemId,title,editorId,1,type);

        function analysis(url,channelId,itemId,title,editorId,terminal,type){
            var data = {
                channel_id : channelId,
                item_id    : itemId,
                title      : title,
                editor_id  : editorId,
                terminal   : terminal,
                type       : type
            }
            $.ajax({
                type : "GET",url : url,data : data,dataType : "jsonp",success : function(data){
                    console.log(data);
                }
            });
        }
    }
})
