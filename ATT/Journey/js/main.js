$(function(){
	
	var browserWidth = $(window).width();
	
	if (browserWidth > 768){
		// first icon-grid rain effect
		TweenMax.set(".grid2", {y:-234}); //height of image
		TweenMax.to(".grid1, .grid2", 2, {y:"+=234", repeat:-1, ease:Linear.easeNone});
		
		// signal icon-grid rain effect
		TweenMax.set(".signal-grid2", {y:-65}); //height of image
		TweenMax.to(".signal-grid1, .signal-grid2", 1, {y:"+=65", repeat:-1, ease:Linear.easeNone});
		
		//back and forth
		TweenMax.to(".back-forth", 1, {x:88, yoyo:true, repeat:-1, ease:Linear.easeNone});
		
		//signal group
		TweenMax.set(".group1-2, .group2-2, .group3-2, .group4-2, .group5-2, .group6-2, .group7-2", {y:-54}); //height of image
		TweenMax.to(".group1-1, .group1-2", 1, {y:"+=54", repeat:-1, ease:Linear.easeNone});
		TweenMax.to(".group2-1, .group2-2", 1, {y:"+=54", repeat:-1, ease:Linear.easeNone});
		TweenMax.to(".group3-1, .group3-2", 1, {y:"+=54", repeat:-1, ease:Linear.easeNone});
		TweenMax.to(".group4-1, .group4-2", 1, {y:"+=54", repeat:-1, ease:Linear.easeNone});
		TweenMax.to(".group5-1, .group5-2", 1, {y:"+=54", repeat:-1, ease:Linear.easeNone});
		TweenMax.to(".group6-1, .group6-2", 1, {y:"+=54", repeat:-1, ease:Linear.easeNone});
		TweenMax.to(".group7-1, .group7-2", 1, {y:"+=54", repeat:-1, ease:Linear.easeNone});
		
		//analysis icon-grid rain effect
		TweenMax.set(".analysis-grid2", {y:-87}); //height of image
		TweenMax.to(".analysis-grid1, .analysis-grid2", 1, {y:"+=87", repeat:-1, ease:Linear.easeNone});
		
		//gear 
		TweenMax.set(".triangle", {y:30, x:11});
		TweenMax.set(".circle", {y:2, x:49});
		TweenMax.set(".lines", {y:21, x:65});
		TweenMax.set(".square", {y:37, x:34});

		var trianglePattern = new TimelineMax({repeat:-1});
		trianglePattern
			.to(".triangle", 0.7, {y:20, x:50, ease:Linear.easeNone}, 0)
			.to(".triangle", 0.7, {y:35, x:62, ease:Linear.easeNone}, 0.7)
			.to(".triangle", 0.7, {y:30, x:11, ease:Linear.easeNone}, 1.4)
		;

		var circlePattern = new TimelineMax({repeat:-1});
		circlePattern
			.to(".circle", 0.7, {y:13, x:18, ease:Linear.easeNone}, 0)
			.to(".circle", 0.7, {y:35, x:30, ease:Linear.easeNone}, 0.7)
			.to(".circle", 0.7, {y:2, x:49, ease:Linear.easeNone}, 1.4)
		;

		var linesPattern = new TimelineMax({repeat:-1});
		linesPattern
			.to(".lines", 0.7, {y:35, x:18, ease:Linear.easeNone}, 0)
			.to(".lines", 0.7, {y:35, x:47, ease:Linear.easeNone}, 0.7)
			.to(".lines", 0.7, {y:21, x:65, ease:Linear.easeNone}, 1.4)
		;

		var squarePattern = new TimelineMax({repeat:-1});
		squarePattern
			.to(".square", 0.7, {y:8, x:40, ease:Linear.easeNone}, 0)
			.to(".square", 0.7, {y:20, x:60, ease:Linear.easeNone}, 0.7)
			.to(".square", 0.7, {y:37, x:34, ease:Linear.easeNone}, 1.4)
		;
		
		$(".pulse").hover(function(){ 
			//stop animation once this trigger is clicked
			TweenMax.killTweensOf($(this));
		});
		
		//Truth section 

		$("#Ttrigger1").hover(
			function(){
				$("#Truth .col1 h2 span, #Truth .col1 .info").hide();
				$(".t-trigger1").show();
			}
		);
		$("#Ttrigger2").hover(
			function(){
				$("#Truth .col1 h2 span, #Truth .col1 .info").hide();
				$(".t-trigger2").show();
			}
		);
		$("#Ttrigger3").hover(function(){
			$("#Truth .col1 h2 span, #Truth .col1 .info").hide();
			$(".t-trigger3").show();
		});
		$("#Ttrigger4").hover(function(){
			$("#Truth .col1 h2 span, #Truth .col1 .info").hide();
			$(".t-trigger4").show();
		});

		
		$("#Rtrigger1").hover(function(){
			$(".r-trigger1").show();
		});
		
		//Deployment section
		
		$("#Dtrigger1").hover(
		function(){
			$("#RMD img, #DA img, #RTD img, #ESP img").show();
			//add info message to col 1
			$("#Deployment .col1 h2 span, #Deployment .col1 .info").hide();
			$(".d-trigger1").show();
			//add classes to above sections for activation so subsequent rollovers show info
			$("#RMD, #DA, #RTD, #ESP").addClass("active");
			//line streams down
			//set initial before the rollover
			//check to see if it is already animated
			if (!TweenMax.isTweening(".triangle-stream1")) {
				TweenMax.to(".triangle-stream",0, {opacity:1});
				TweenMax.to(".triangle-stream1, .triangle-stream2", 3, {y:"+=559", repeat:-1, ease:Linear.easeNone});
			}
			
			}
		);

		$("#Dtrigger2").hover(
			function(){
				$("#RMD img, #DA img, #RTD img, #AEM img, #AA img, #AT img").show();
				$("#Deployment .col1 h2 span, #Deployment .col1 .info").hide();
				$(".d-trigger2").show();
				$("#RMD, #DA, #RTD, #AEM, #AA, #AT").addClass("active");
				if (!TweenMax.isTweening(".circle-stream1")) {
					TweenMax.to(".circle-stream",0, {opacity:1});
					TweenMax.to(".circle-stream1, .circle-stream2", 3, {y:"+=520", repeat:-1, ease:Linear.easeNone});
				}
			}
		);

		$("#Dtrigger3, #Dtrigger4").hover(
			function(){
				$("#SC img, #DMP img").show();
				$("#Deployment .col1 h2 span, #Deployment .col1 .info").hide();
				$(".d-trigger3").show();
				$("#SC, #DMP").addClass("active");
				if (!TweenMax.isTweening(".line-stream1")) {
					TweenMax.to(".line-stream",0, {opacity:1});
					TweenMax.to(".line-stream1, .line-stream2", 3, {y:"+=559", repeat:-1, ease:Linear.easeNone});
				}
			}
		);

		$("#Dtrigger5").hover(
			function(){
				$("#DM img").show();
				$("#Deployment .col1 h2 span, #Deployment .col1 .info").hide();
				$(".d-trigger5").show();
				$("#DM").addClass("active");
				if (!TweenMax.isTweening(".square-stream1")) {
					TweenMax.to(".square-stream",0, {opacity:1});
					TweenMax.to(".square-stream1, .square-stream2", 3, {y:"+=597", repeat:-1, ease:Linear.easeNone});
				}
			}
		);
		
			$(".deployment-item").each(function(){
			var thisId = $(this).attr('id');
			var thisClass = $(this).attr('id').toLowerCase();
		
				$("#" + thisId).hover(
					function(){
						if ($("#" + thisId).hasClass("active")) {
							$("#" + thisId).find("img").css("transform", "translateY(-50%)"); //-34px
							$("#Deployment .col1 h2 span, #Deployment .col1 .info").hide();
							$("." + thisClass).show();
						}
					},
					function(){
						if ($("#" + thisId).hasClass("active")) {
							$("#" + thisId).find("img").css("transform", "translateY(0px)");
							$("#Deployment .col1 h2 span, #Deployment .col1 .info").hide();
						}
					}
				);
			});
		
		$(document).scroll(function(){
			var y = $(this).scrollTop();
			if (y > 600) {
				$(".nav-left").fadeIn();
			} else {
				$(".nav-left").fadeOut();
			}
		});
		
	}  //end browser width > 768
	
	
	//begin global
	
	//pulse plus icons
	TweenMax.to(".pulse", 1, {scale:1.1, repeat:-1, yoyo:true,ease: Elastic.easeOut.config(1, 0.3)});
	
	
	
	//headline opacity move up 
	TweenMax.to("h1", 3, {y:"-30", opacity:1});
	
	// signal line rain effect
	TweenMax.set(".signal-line2", {y:-88}); //height of image
	TweenMax.to(".signal-line1, .signal-line2", 1, {y:"+=88", repeat:-1, ease:Linear.easeNone});
	
	//blinks
	TweenMax.to(".blink1", 0.3, {opacity:0, repeat: -1, repeatDelay:1,  yoyo:true});
	TweenMax.to(".blink2", 0.3, {opacity:1, delay:0.5, repeat: -1, repeatDelay:1,  yoyo:true});
	
	//slides
	TweenMax.to(".slide1", 1, {y:25, repeat: -1, repeatDelay:2,  yoyo:true, ease:Linear.easeNone});
	TweenMax.to(".slide2", 1, {y:-25, repeat: -1, repeatDelay:2,  yoyo:true, ease:Linear.easeNone});
	
	//rotate gears
	TweenMax.to(".gear1, .gear2, .gear3", 4, {rotation:360, ease:Linear.easeNone, repeat:-1});
	
	//deployment rollovers
	TweenMax.set(".triangle-stream2", {y:-559});
	TweenMax.set(".circle-stream2", {y:-520});
	TweenMax.set(".line-stream2", {y:-559});
	TweenMax.set(".square-stream2", {y:-597});//height of image plus spacing
	
	 // fix bug of retina.js
  // it will set height = 0 and width = 0 to img
  // which are in a container that is initially not
  // visible
  $img = $('img');
  $img.removeAttr('height');
  $img.removeAttr('width');
	
	//Scrolling from anchors
	$(".nav-right .signals, .nav-left .signals").click(function(){ 
		TweenMax.to(window, 2, {scrollTo:{y:"#Signals", offsetY:40, autoKill:false}});
		$(".bar").stop().animate({y:"0px"}, "slow", "linear");
		if ((browserWidth < 601) || ((browserWidth < 741) && (landscape))){
			$(".nav-right").stop().animate({"right": "-100%"}, "slow", "linear");
		} 
	});
	$(".nav-right .truth, .nav-left .truth").click(function(){ 
		TweenMax.to(window, 2, {scrollTo:{y:"#Truth", autoKill:false}});
		if (browserWidth < 601){
			$(".nav-right").stop().animate({"right": "-100%"}, "slow", "linear");
			$(".bar").stop().animate({y:"87px"}, "slow", "linear");
		} else {
			$(".bar").stop().animate({y:"147px"}, "slow", "linear");
		}
		if ((browserWidth < 741) && (landscape)) {
			$(".nav-right").stop().animate({"right": "-100%"}, "slow", "linear");
		}
	});
	$(".nav-right .rules, .nav-left .rules").click(function(){ 
		TweenMax.to(window, 2, {scrollTo:{y:"#Rules", autoKill:false}});
		if (browserWidth < 601){
			$(".nav-right").stop().animate({"right": "-100%"}, "slow", "linear");
			$(".bar").stop().animate({y:"204px"}, "slow", "linear");
		} else {
			$(".bar").stop().animate({y:"308px"}, "slow", "linear");
		}
		if ((browserWidth < 741) && (landscape)) {
			$(".nav-right").stop().animate({"right": "-100%"}, "slow", "linear");
		}
	});
	$(".nav-right .deployment, .nav-left .deployment").click(function(){ 
		TweenMax.to(window, 2, {scrollTo:{y:"#Deployment", autoKill:false}});
		if (browserWidth < 601){
			$(".nav-right").stop().animate({"right": "-100%"}, "slow", "linear");
			$(".bar").stop().animate({y:"301px"}, "slow", "linear");
		} else {
			$(".bar").stop().animate({y:"447px"}, "slow", "linear");
		}
		if ((browserWidth < 741) && (landscape)) {
			$(".nav-right").stop().animate({"right": "-100%"}, "slow", "linear");
		}
	});
	$(".nav-right .analysis, .nav-left .analysis").click(function(){ 
		if (browserWidth > 600) {
			TweenMax.to(window, 2, {scrollTo:{y:"#Analysis", autoKill:false}});
		}
		if (browserWidth < 601){ 
			TweenMax.to(window, 2, {scrollTo:{y:"#Analysis-Mobile", autoKill:false}});
			$(".nav-right").stop().animate({"right": "-100%"}, "slow", "linear");
			$(".bar").stop().animate({y:"360px"}, "slow","linear");
		} else {
			$(".bar").stop().animate({y:"569px"}, "slow","linear");  
		}
		if ((browserWidth < 741) && (landscape)) {
			$(".nav-right").stop().animate({"right": "-100%"}, "slow", "linear");
		}
	});
	
	
	//dragging scroll for left nav
	
	Draggable.create(".bar", {
		type: "y",  //y axis
		bounds: document.getElementById("leftNav"),
		onDragEnd:function(){
			this.update();
			var barPosition = parseInt(this.y);
			if (browserWidth > 600){
				if (barPosition < 25) {
					$(".nav-right a, .nav-left a").removeClass("active");
					//add delay time
					
					$(".signals").addClass("active");
					//TweenMax.to(window, 2, {scrollTo:"#Signals"});
				} 
				if ((barPosition > 109) && (barPosition < 188)) {
					$(".nav-right a").removeClass("active");
					$(".truth").addClass("active");
					//TweenMax.to(window, 2, {scrollTo:"#Truth"});
				} 
				if ((barPosition > 297) && (barPosition < 344)) {
					$(".nav-right a").removeClass("active");
					$(".truth").addClass("active");
					//TweenMax.to(window, 2, {scrollTo:"#Rules"});
				} 
				if ((barPosition > 432) && (barPosition < 471)) {
					$(".nav-right a").removeClass("active");
					$(".truth").addClass("active");
					//TweenMax.to(window, 2, {scrollTo:"#Deployment"});
				} 
				if (barPosition > 532)  {
					$(".nav-right a").removeClass("active");
					$(".truth").addClass("active");
					//TweenMax.to(window, 2, {scrollTo:"#Analysis"});
				}
			} 
			
			if (browserWidth < 601){
				if (barPosition < 25) {
					$(".nav-right a").removeClass("active");
					$(".signals").addClass("active");
					//TweenMax.to(window, 2, {scrollTo:"#Signals"});
				} 
				if ((barPosition >60) && (barPosition < 134)) {
					$(".nav-right a").removeClass("active");
					$(".truth").addClass("active");
						//TweenMax.to(window, 2, {scrollTo:"#Truth"});
				} 
				if ((barPosition > 135) && (barPosition < 247)) {
					$(".nav-right a").removeClass("active");
					$(".rules").addClass("active");
						//TweenMax.to(window, 2, {scrollTo:"#Rules"});
				} 
				if ((barPosition > 248) && (barPosition < 327)) {
					$(".nav-right a").removeClass("active");
					$(".deployment").addClass("active");
						//TweenMax.to(window, 2, {scrollTo:"#Deployment"});
				} 
				if (barPosition > 328)  {
					$(".nav-right a").removeClass("active");
					$(".analysis").addClass("active");
						//TweenMax.to(window, 2, {scrollTo:"#Analysis-Mobile"});
				}
			}
		}
		
	});
	
	
	//show left nav desktop
	$(document).scroll(function(){
		
		var y = $(this).scrollTop();
		
		//native scrolling 
		if (browserWidth > 1200) {
			if (y < 700) {
				$(".nav-right a").removeClass("active");
			} 
			if ((y > 700) && (y < 1500)) { 
				TweenMax.to(".bar", 1, {y:0});
				$(".nav-right a").removeClass("active");
				$(".signals").addClass("active");
			}
			if ((y > 1500) && (y < 2300)) {
				TweenMax.to(".bar", 1, {y:147});
				$(".nav-right a").removeClass("active");
				$(".truth").addClass("active");
			}
			if ((y > 2300) && (y < 3100)) {
				TweenMax.to(".bar", 1, {y:308});
				$(".nav-right a").removeClass("active");
				$(".rules").addClass("active");
			}
			if ((y > 3100) && (y < 3500)) {
				TweenMax.to(".bar", 1, {y:447});
				$(".nav-right a").removeClass("active");
				$(".deployment").addClass("active");
			}
			if (y > 3500) {
				TweenMax.to(".bar", 1, {y:556});
				$(".nav-right a").removeClass("active");
				$(".analysis").addClass("active");
			}
		} else if ((browserWidth < 1201) && (browserWidth > 601)){
			if (y < 700) {
				$(".nav-right a").removeClass("active");
			} 
			if ((y > 700) && (y < 1300)) { 
				TweenMax.to(".bar", 1, {y:0});
				$(".nav-right a").removeClass("active");
				$(".signals").addClass("active");
			}
			if ((y > 1300) && (y < 2000)) {
				TweenMax.to(".bar", 1, {y:147});
				$(".nav-right a").removeClass("active");
				$(".truth").addClass("active");
			}
			if ((y > 2000) && (y < 2800)) {
				TweenMax.to(".bar", 1, {y:308});
				$(".nav-right a").removeClass("active");
				$(".rules").addClass("active");
			}
			if ((y > 2800) && (y < 3500)) {
				TweenMax.to(".bar", 1, {y:447});
				$(".nav-right a").removeClass("active");
				$(".deployment").addClass("active");
			}
			if (y > 3500) {
				TweenMax.to(".bar", 1, {y:569}); 
				$(".nav-right a").removeClass("active");
				$(".analysis").addClass("active");
			}
		} else {
			if ((y > 500) && (y < 1000)) { 
				TweenMax.to(".bar", 1, {y:0});
				$(".nav-right a").removeClass("active");
				$(".signals").addClass("active");
			}
			if ((y > 1000) && (y < 1800)) {
				TweenMax.to(".bar", 1, {y:87});
				$(".nav-right a").removeClass("active");
				$(".truth").addClass("active");
			}
			if ((y > 1800) && (y < 2500)) {
				TweenMax.to(".bar", 1, {y:204});
				$(".nav-right a").removeClass("active");
				$(".rules").addClass("active");
			}
			if ((y > 2500) && (y < 3100)) {
				TweenMax.to(".bar", 1, {y:301});
				$(".nav-right a").removeClass("active");
				$(".deployment").addClass("active");
			}
			if (y > 3100) {
				TweenMax.to(".bar", 1, {y:360});
				$(".nav-right a").removeClass("active");
				$(".analysis").addClass("active");
			}
		}
			
	});
	
	$("#Ttrigger1, #Ttrigger2, #Ttrigger3, #Ttrigger4").click(function(e){
			e.preventDefault();
		});
	
		$("#Rtrigger1").click(function(e){
			e.preventDefault();
		});
	
	$("#Dtrigger1, #Dtrigger2, #Dtrigger3, #Dtrigger4, #Dtrigger5").click(function(e){
			e.preventDefault();
		});
	
	//end global

	//Tablet
	if (browserWidth < 769){
		// first icon-grid rain effect
		TweenMax.set(".grid2", {y:-176}); //height of image
		TweenMax.to(".grid1, .grid2", 2, {y:"+=176", repeat:-1, ease:Linear.easeNone});
		
		// signal icon-grid rain effect
		TweenMax.set(".signal-grid2", {y:-49}); //height of image
		TweenMax.to(".signal-grid1, .signal-grid2", 1, {y:"+=49", repeat:-1, ease:Linear.easeNone});
		
		//back and forth
		TweenMax.to(".back-forth", 1, {x:58, yoyo:true, repeat:-1, ease:Linear.easeNone});
		
		//signal group
		TweenMax.set(".group1-2, .group2-2, .group3-2, .group4-2, .group5-2, .group6-2, .group7-2", {y:-38}); //height of image
		TweenMax.to(".group1-1, .group1-2", 1, {y:"+=38", repeat:-1, ease:Linear.easeNone});
		TweenMax.to(".group2-1, .group2-2", 1, {y:"+=38", repeat:-1, ease:Linear.easeNone});
		TweenMax.to(".group3-1, .group3-2", 1, {y:"+=38", repeat:-1, ease:Linear.easeNone});
		TweenMax.to(".group4-1, .group4-2", 1, {y:"+=38", repeat:-1, ease:Linear.easeNone});
		TweenMax.to(".group5-1, .group5-2", 1, {y:"+=38", repeat:-1, ease:Linear.easeNone});
		TweenMax.to(".group6-1, .group6-2", 1, {y:"+=38", repeat:-1, ease:Linear.easeNone});
		TweenMax.to(".group7-1, .group7-2", 1, {y:"+=38", repeat:-1, ease:Linear.easeNone});
		
		//analysis icon-grid rain effect
		TweenMax.set(".analysis-grid2", {y:-66}); //height of image
		TweenMax.to(".analysis-grid1, .analysis-grid2", 1, {y:"+=66", repeat:-1, ease:Linear.easeNone});
		
		//gear 
		TweenMax.set(".triangle", {y:30, x:11});
		TweenMax.set(".circle", {y:15, x:38});
		TweenMax.set(".lines", {y:21, x:59});
		TweenMax.set(".square", {y:37, x:34});

		var trianglePattern = new TimelineMax({repeat:-1});
		trianglePattern
			.to(".triangle", 0.7, {y:20, x:50, ease:Linear.easeNone}, 0)
			.to(".triangle", 0.7, {y:35, x:62, ease:Linear.easeNone}, 0.7)
			.to(".triangle", 0.7, {y:30, x:11, ease:Linear.easeNone}, 1.4)
		;

		var circlePattern = new TimelineMax({repeat:-1});
		circlePattern
			.to(".circle", 0.7, {y:27, x:18, ease:Linear.easeNone}, 0)
			.to(".circle", 0.7, {y:35, x:30, ease:Linear.easeNone}, 0.7)
			.to(".circle", 0.7, {y:15, x:38, ease:Linear.easeNone}, 1.4)
		;

		var linesPattern = new TimelineMax({repeat:-1});
		linesPattern
			.to(".lines", 0.7, {y:35, x:18, ease:Linear.easeNone}, 0)
			.to(".lines", 0.7, {y:35, x:47, ease:Linear.easeNone}, 0.7)
			.to(".lines", 0.7, {y:21, x:59, ease:Linear.easeNone}, 1.4)
		;

		var squarePattern = new TimelineMax({repeat:-1});
		squarePattern
			.to(".square", 0.7, {y:16, x:40, ease:Linear.easeNone}, 0)
			.to(".square", 0.7, {y:20, x:60, ease:Linear.easeNone}, 0.7)
			.to(".square", 0.7, {y:37, x:34, ease:Linear.easeNone}, 1.4)
		;
		
		
		$(".close").click(function(){
			$(".col1").animate({"right":"-53%"}, "slow");
		});
		
		$(".pulse").click(function(){ 
		//stop animation once this trigger is clicked
		TweenMax.killTweensOf($(this));
	});
		
		//Truth section

		$("#Ttrigger1").click(
			function(){ 
				$("#Truth .col1 h2 span, #Truth .col1 .info").hide();
				$(".t-trigger1").show();
				if (browserWidth > 599) {
					var posRight = $("#Truth .col1").css('right');
					if (posRight === "0px") { 
						//dont move col
					} else if (browserWidth ){
						$("#Truth .col1").animate({"right":"0"}, "slow");
					}
				}
			}
		);
			$("#Ttrigger2").click(
			function(){ 
				$("#Truth .col1 h2 span, #Truth .col1 .info").hide();
				$(".t-trigger2").show();
				if (browserWidth > 599) {
					var posRight = $("#Truth .col1").css('right');
					if (posRight === "0px") { 
						//dont move col
					} else {
						$("#Truth .col1").animate({"right":"0"}, "slow");
					}
				}
			}
		);
		$("#Ttrigger3").click(function(){
			$("#Truth .col1 h2 span, #Truth .col1 .info").hide();
			$(".t-trigger3").show();
			if (browserWidth > 599) {
				var posRight = $("#Truth .col1").css('right');
					if (posRight === "0px") {
						//dont move col
					} else {
						$("#Truth .col1").animate({"right":"0"}, "slow");
					}
			}
		});
		$("#Ttrigger4").click(function(){
			$("#Truth .col1 h2 span, #Truth .col1 .info").hide();
			$(".t-trigger4").show();
			if (browserWidth > 599) {
				var posRight = $("#Truth .col1").css('right');
					if (posRight === "0px") { 
						//dont move col
					} else {
						$("#Truth .col1").animate({"right":"0"}, "slow");
					}
			}
		});
	
		//Rules section
		$("#Rtrigger1").on("click", 
			function(){
			$(".r-trigger1").show();
			if (browserWidth > 599) {
				var posRight = $("#Rules .col1").css('right');
					if (posRight === "0px") {
						//dont move col
					} else { 
						$("#Rules .col1").animate({right:"0px"}, "slow");
					}
			}
		});
		
		
		//Deployment section
		$("#Dtrigger1").on("click",
			function(){
				$("#RMD img, #DA img, #RTD img, #ESP img").show();
				$("#Deployment .col1 h2 span, #Deployment .col1 .info").hide();
				$(".d-trigger1").show();
				$("#RMD, #DA, #RTD, #ESP").addClass("active");
			
				if (!TweenMax.isTweening(".triangle-stream1")) {
					TweenMax.to(".triangle-stream",0, {opacity:1});
					TweenMax.to(".triangle-stream1, .triangle-stream2", 3, {y:"+=559", repeat:-1, ease:Linear.easeNone});
				}

			  if (browserWidth > 599) {
					var posRight = $("#Deployment .col1").css('right');
						if (posRight === "0px") { 
							//dont move col
						} else {
							$("#Deployment .col1").animate({"right":"0"}, "slow");
						}
				}
			}
		);
	
		$("#Dtrigger2").on("click",
			function(){
				$("#RMD img, #DA img, #RTD img, #AEM img, #AA img, #AT img").show();
				$("#Deployment .col1 h2 span, #Deployment .col1 .info").hide();
				$(".d-trigger2").show();
				$("#RMD, #DA, #RTD, #AEM, #AA, #AT").addClass("active");
				if (!TweenMax.isTweening(".circle-stream1")) {
					TweenMax.to(".circle-stream",0, {opacity:1});
					TweenMax.to(".circle-stream1, .circle-stream2", 3, {y:"+=520", repeat:-1, ease:Linear.easeNone});
				}
				if (browserWidth > 599) {
					var posRight = $("#Deployment .col1").css('right');
						if (posRight === "0px") { 
							//dont move col
						} else {
							$("#Deployment .col1").animate({"right":"0"}, "slow");
						}
				}
			}
		);
	
		$("#Dtrigger3, #Dtrigger4").on("click",
			function(){
				$("#SC img, #DMP img").show();
				$("#Deployment .col1 h2 span, #Deployment .col1 .info").hide();
				$(".d-trigger3").show();
				$("#SC, #DMP").addClass("active");
				if (!TweenMax.isTweening(".line-stream1")) {
					TweenMax.to(".line-stream",0, {opacity:1});
					TweenMax.to(".line-stream1, .line-stream2", 3, {y:"+=559", repeat:-1, ease:Linear.easeNone});
				}
				if (browserWidth > 599) {
					var posRight = $("#Deployment .col1").css('right');
						if (posRight === "0px") { 
							//dont move col
						} else {
							$("#Deployment .col1").animate({"right":"0"}, "slow");
						}
				}
			}
		);
	
		$("#Dtrigger5").on("click",
			function(){
				$("#DM img").show();
				$("#Deployment .col1 h2 span, #Deployment .col1 .info").hide();
				$(".d-trigger5").show();
				$("#DM").addClass("active");
				if (!TweenMax.isTweening(".square-stream1")) {
					TweenMax.to(".square-stream",0, {opacity:1});
					TweenMax.to(".square-stream1, .square-stream2", 3, {y:"+=597", repeat:-1, ease:Linear.easeNone});
				}
				if (browserWidth > 599) {
					var posRight = $("#Deployment .col1").css('right');
						if (posRight === "0px") { 
							//dont move col
						} else {
							$("#Deployment .col1").animate({"right":"0"}, "slow");
						}
				}
			}
		);
		
			$(".deployment-item").each(function(){ 
			var thisId = $(this).attr('id');
			var thisClass = $(this).attr('id').toLowerCase();
			$("#" + thisId).click( 
				function(){ 
					$(".deployment-item img").css("transform", "translateY(0px)");
					if ($("#" + thisId).hasClass("active")) {
						$("#" + thisId).find("img").css("transform", "translateY(-50%)"); 
						$("#Deployment .col1 h2 span, #Deployment .col1 .info").hide();
						$("." + thisClass).show();
						if (browserWidth > 599) {
					var posRight = $("#Deployment .col1").css('right');
						if (posRight === "0px") { 
							//dont move col
						} else {
							$("#Deployment .col1").animate({"right":"0"}, "slow");
						}
				}
					}
				}
			);
		});
		
	}//end browser width < 769
	
	if ((browserWidth < 769) && (browserWidth > 600)) {
		$(document).scroll(function(){
			var y = $(this).scrollTop();
			if (y > 300) {
				$(".nav-left").fadeIn();
			} else {
				$(".nav-left").fadeOut();
			}
		});
	}
	
	//Landscape for Tablet and Mobile
	var landscape = false;
	if ($(window).width() > $(window).height()){
		landscape = true;
	}
	if ((browserWidth < 741) && (landscape)) {
		$(".mobile-nav-open").click(function(){
			$(".nav-right").animate({"right": "0"}, "slow");
		});
		
		$(".mobile-nav-close").click(function(){
			$(".nav-right").animate({"right": "-100%"}, "slow");
		});
	}
	
	
	//Mobile
	if (browserWidth < 601){
		
		$(document).scroll(function(){
			var y = $(this).scrollTop();
			if (y > 400) {
				$(".nav-left").fadeIn();
			} else {
				$(".nav-left").fadeOut();
			}
		});
		
		
		$(".mobile-nav-open").click(function(){
			$(".nav-right").animate({"right": "0"}, "slow");
		});
		
		$(".mobile-nav-close").click(function(){
			$(".nav-right").animate({"right": "-100%"}, "slow");
		});
		
		TweenMax.set(".analysis-mobile-grid2", {y:-68}); //height of image
		TweenMax.to(".analysis-mobile-grid1, .analysis-mobile-grid2", 2, {y:"+=68", repeat:-1, ease:Linear.easeNone});
		
		TweenMax.set(".analysis-grid-mobile2", {y:-35}); //height of image
		TweenMax.to(".analysis-grid-mobile1, .analysis-grid-mobile2", 2, {y:"+=35", repeat:-1, ease:Linear.easeNone});
		
		//back and forth
		TweenMax.to(".back-forth", 1, {x:38, yoyo:true, repeat:-1, ease:Linear.easeNone});
		
		$("#Ttrigger1, #Ttrigger2, #Ttrigger3, #Ttrigger4, #Rtrigger1").magnificPopup({
			type:'inline',
			fixedContentPos: true
		});
		
		$(".deployment-container").magnificPopup({
			delegate: '.init',
			type:'inline',
			fixedContentPos: true
		});
		

		$("#Dtrigger1").click(function(){ 
			$("#RMD, #DA, #RTD, #ESP").attr("href", "#Deployment-popup");
		});
		$("#Dtrigger2").click(function(){ 
			$("#RMD, #DA, #RTD, #AEM, #AA, #AT").attr("href", "#Deployment-popup");
		});
		$("#Dtrigger3, #Dtrigger4").click(function(){ 
			$("#SC, #DMP").attr("href", "#Deployment-popup");
		});
		$("#Dtrigger5").click(function(){ 
			$("#DM").attr("href", "#Deployment-popup");
		});
		
		
		$(".deployment-item").click(function(){
			e.preventDefault();
			var attr = $(this).attr("href");
			if (typeof attr !== typeof undefined && attr !== false) {
				$(this).magnificPopup({
					type:'inline',
					fixedContentPos: true
				});
				$.magnificPopup.open({
					items: {src: '#Deployment-popup', type:'inline', fixedContentPos: true}
				});
			}
		});
		
		
		//gear 
		TweenMax.set(".triangle", {y:22, x:5});
		TweenMax.set(".circle", {y:7, x:19});
		TweenMax.set(".lines", {y:5, x:30});
		TweenMax.set(".square", {y:17, x:20});

		var trianglePattern = new TimelineMax({repeat:-1});
		trianglePattern
			.to(".triangle", 0.7, {y:10, x:25, ease:Linear.easeNone}, 0)
			.to(".triangle", 0.7, {y:17, x:40, ease:Linear.easeNone}, 0.7)
			.to(".triangle", 0.7, {y:22, x:5, ease:Linear.easeNone}, 1.4)
		;

		var circlePattern = new TimelineMax({repeat:-1});
		circlePattern
			.to(".circle", 0.7, {y:14, x:9, ease:Linear.easeNone}, 0)
			.to(".circle", 0.7, {y:22, x:31, ease:Linear.easeNone}, 0.7)
			.to(".circle", 0.7, {y:7, x:19, ease:Linear.easeNone}, 1.4)
		;

		var linesPattern = new TimelineMax({repeat:-1});
		linesPattern
			.to(".lines", 0.7, {y:20, x:5, ease:Linear.easeNone}, 0)
			.to(".lines", 0.7, {y:20, x:20, ease:Linear.easeNone}, 0.7)
			.to(".lines", 0.7, {y:5, x:30, ease:Linear.easeNone}, 1.4)
		;

		var squarePattern = new TimelineMax({repeat:-1});
		squarePattern
			.to(".square", 0.7, {y:8, x:10, ease:Linear.easeNone}, 0)
			.to(".square", 0.7, {y:10, x:40, ease:Linear.easeNone}, 0.7)
			.to(".square", 0.7, {y:17, x:20, ease:Linear.easeNone}, 1.4)
		;
		
	}//end browser width 600
	
	
});  


