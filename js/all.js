function externalLinks(){for(var t=document.getElementsByTagName("a"),n=0;n<t.length;n++){var e=t[n];e.getAttribute("href")&&e.hostname!==location.hostname&&(e.target="_blank")}}!function(t){t.fn.fitText=function(n,e){var i=n||1,o=t.extend({minFontSize:Number.NEGATIVE_INFINITY,maxFontSize:Number.POSITIVE_INFINITY},e);return this.each(function(){var n=t(this),e=function(){n.css("font-size",Math.max(Math.min(n.width()/(10*i),parseFloat(o.maxFontSize)),parseFloat(o.minFontSize)))};e(),t(window).on("resize.fittext orientationchange.fittext",e)})}}(jQuery),$(window).scroll(function(){var t=$(window).scrollTop(),n=0;0>=t?n=1:300>=t&&(n=1-t/300)}),$(document).ready(function(){$(".intro-tag").fitText(1.6,{minFontSize:"40px",maxFontSize:"200px"}),$(".close-ad").click(function(){$("#carbonads-container").animate({opacity:0},200,function(){$(this).hide()})})}),externalLinks();