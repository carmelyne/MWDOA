// http://github.com/kswedberg/jquery-smooth-scroll
(function($){var g='1.1';var h=filterPath(location.pathname);$.fn.extend({smoothScroll:function(f){this.each(function(){var e=$.extend({},$.fn.smoothScroll.defaults,f);$(this).bind('click',function(a){var b=this,$link=$(this),hostMatch=((location.hostname===b.hostname)||!b.hostname),pathMatch=e.scrollTarget||(filterPath(b.pathname)||h)===h,thisHash=b.hash&&'#'+b.hash.replace('#',''),include=true;if(!e.scrollTarget&&(!hostMatch||!pathMatch||thisHash.length==1)){include=false}else{var c=e.exclude,elCounter=0,el=c.length;while(include&&elCounter<el){if($link.is(c[elCounter++])){include=false}}var d=e.excludeWithin,ewlCounter=0,ewl=d.length;while(include&&ewlCounter<ewl){if($link.parents(d[ewlCounter++]+':first').length){include=false}}}if(include){e.scrollTarget=e.scrollTarget||thisHash;e.link=b;a.preventDefault();$.smoothScroll(e)}})});return this}});$.smoothScroll=function(a,b){var c,scrollTargetOffset,scrollElem=scrollableElement('html','body');if(typeof a==='number'){c=$.fn.smoothScroll.defaults;scrollTargetOffset=a}else{c=$.extend({},$.fn.smoothScroll.defaults,a);scrollTargetOffset=b||$(c.scrollTarget).offset().top}c=$.extend({link:null},c);$(scrollElem).animate({scrollTop:scrollTargetOffset+c.offset},{duration:c.speed,easing:c.easing,complete:function(){if(c.afterScroll&&$.isFunction(c.afterScroll)){c.afterScroll.call(c.link,c)}}})};$.smoothScroll.version=g;$.fn.smoothScroll.defaults={exclude:[],excludeWithin:[],offset:0,scrollTarget:null,afterScroll:null,easing:'swing',speed:400};function scrollableElement(a){for(var i=0,argLength=arguments.length;i<argLength;i++){var b=arguments[i],$scrollElement=$(b);if($scrollElement.scrollTop()>0){return b}else{$scrollElement.scrollTop(1);var c=$scrollElement.scrollTop()>0;$scrollElement.scrollTop(0);if(c){return b}}}return[]}function filterPath(a){return a.replace(/^\//,'').replace(/(index|default).[a-zA-Z]{3,4}$/,'').replace(/\/$/,'')}})(jQuery);