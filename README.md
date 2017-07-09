# bootstrap3ex
Some basic knowledge about bootstrap 3 can make your web look so awesome 

Table Of Content:
1. Responsive Pattern
      + Mostly Fluid Pattern: 
        (When we working with web design and we're going From a multi-column layout down to a single column layout,
         How is exactly do we want to stack the columns ?   
            - Using col-*-push/pull-* to Stack the columns
      + Column Drop Pattern:
            - Using -xs -sm -md -lg to layout the columns depend on devices size.
      + Layout Shifter Pattern:
            - Using visible/hidden to show/hide the DOM Elements on specific device (ex: visible-md on tablet)
      + Content Reflow Pattern:
            - Using @media(max-width : 767px) { } to declare some element's css.
      + Same-Sized Columns:
            - Using minimit css to handle the problem of different sized columns.
2. Responsive Navigation
      + navbar-inverse navbar-fixed-top to styling css and fixed menu on top.
      + Animate the Nav Bar with 'animatedHeader LIBRARY' 
            + LIBRARY: 'Animated Header'
            + add class name 'cbp-af-header' in navbar 
            + cbp-af-header-shrink to shrink the nav 
            + Uses Css TRANSITION property for animations.
            + https://caniuse.com/ to verify brower supported
3. Responsive Image And Video
      + Full Screen Background Image:
            + Use window.innerHeight to set img's full height
            + Use 'background-size : cover' to cover the background screen.
      + Full Screen Fixed Image
            + Use 'background-attachment: fixed' to fixed the background image when we scroll down ( Use 'scroll' to resume scroll image)
      + Full Screen Background Video:
            + LIBRARY: 'Form Stone Wall Paper'
            
4. Scrolling Feature
      + Using "ScrollSpy" of Bootstrap and Jquery Easing Plugin
            Take a look on Bootstrap/Javascript/ScrollSpy
      + Smooth Scrolling: 
            Using: http://gsgd.co.uk/sandbox/jquery/easing/
            $('nav a').bind('click', function(){
                $('html, body').stop().animate({
                    scrollTop: $($(this).attr('href')).offset().top
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            })


5. Animated Page Elements

