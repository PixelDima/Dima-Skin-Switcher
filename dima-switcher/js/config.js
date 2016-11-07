var boxedClass = "boxed", //css class that make your website boxed.
    boxedInto = "body", // where you need to apply boxed class.
    patternsInto = "body", // where you need to apply patterns.
    pgInto = "body", // where you need to apply backgrounds images.

    //true = show false = hide
    multipage = true, // show or hide multi page section
    onepage = true, // show or hide One page section
    fullwidth = true, // show or hide Full width section
    boxedwidth = true, // show or hide boxed section
    skinStyle = true, // show or hide skin style section
    skinColor = true, // show or hide skin color section
    settings = true, // show or hide settings section
    showGrids = true, // show or hide Grids button
    box_image = true, // show or hide small images 
    box_patterns = true, // show or hide small patterns 
    sw_input = true, // show or hide input url 
    floatBox = "left", //where you need to show your switcher {left or right}
    timeout = 10000000, // delete session cookies when time it out 
    
    //List of patterns
    patt_images = [
        "back_pattern.jpg",
        "black_thread.jpg",
        "chalkboard.jpg",
        "classy_fabric.jpg",
        "crossed_stripes.jpg",
        "diagmonds.jpg",
        "graphy.jpg",
        "hodgepodge.png",
        "low_contrast_linen.jpg",
        "retina_wood.jpg",
        "shattered-island.gif",
        "subtlenet2.jpg",
        "triangles.jpg",
        "vichy.jpg",
        "white-wood.jpg",
        "chins.png"
    ],

    //List of images backgrounds
    bg_images = [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.jpg",
        "8.jpg"
    ],

    //List of css styles
    styles_css = [
        ["css/dark.css", "DARK"],
        ["css/light.css", "LIGHT"]
    ],

    //List of favorite colors
    setColor = [
        ["#9b59b6"],
        ["#e74c3c"],
        ["#2c3e50"],
        ["#1abc9c"]
    ],

    //List of elments and classes you want to change colors properties
    elementAndClassColor = "a.dima i,ul.list-style li i,b,strong",

    //List of elments and classes you want to change background properties
    elementAndClassBg = ".dima.button";

    $('ul.list-style li:before').css({'color':'#fff'});