var VisibleSlidesOptions={
	OneMainTwoThumbs:3,
	OneMainFourThumbs:5,
	OneMainSixThumbs:7
};

var GalleryOrientation={
	HORIZONTAL:0,
	VERTICAL:1
};

var Slide={
	top:0,
	left:0,
	width:0,
	height:0,
	caption:"",
	imgSource:""
};

var Gallery={
	_slides:[],
	_top:0,
	_left:0,
	_width:0,
	_height:0,
	_currentSlide:null,
	_inAnimationMode:false,
	_targetElement:null,
	_options:{
		direction:'rtl',
		orientation:GalleryOrientation.HORIZONTAL,
		circular:true,
		showPrevNextButtons:true,
		showCaptions:true,
		captionPosition:'bottom',
		visibleSlides: VisibleSlidesOptions.OneMainTwoThumbs ,
		speed:'slow'
	},
	_updateUI:function() {}
};

(function( $ ){

  var methods = {
    init:function(options){},
    next:function(slidesCount) {},
    prev:function(slidesCount) {},
    render:function() {}
  };

  $.fn.tooltip = function( method ) {
    
    // Method calling logic
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
    }    
  
  };

})( jQuery );
