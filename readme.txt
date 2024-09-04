1.html
<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title>Pure CSS Rain with Strom</title>
	<link rel="stylesheet" href="style.css" />
</head>
<body>
	<div class="container" id="background">	
		<div class="cloud1"></div>
		<div class="cloud2"> </div>
		<div class="cloud3"> </div>
	</div>

</body>
</html>

2.css

/* General Reset and Font Settings */
html, body {
    margin: 0;
    height: 100%;
    overflow: hidden;
    font-family: sans-serif;
    background-color: #000; /* Added a dark background for better contrast */
}

/* Title Styling */
.title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 150px;
    opacity: 0.15;
    z-index: 100;
}

/* Frequency Element (if needed) */
#frequency {
    position: relative;
    z-index: 1000;
    display: block;
    margin: 0 auto;
}

/* Background Image */
#background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("waves.jpg") center center no-repeat;
    background-size: cover;
    user-select: none;
    z-index: 1;
    overflow: hidden;
}

/* Thunder Effect - Flash */
#background:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: '';
    -webkit-animation: flash 5s ease-in infinite;
            animation: flash 5s ease-in infinite;
    z-index: 50;
}
#background:before {
    position: absolute;
    top:-150px;
    right:100px;
    bottom: 0;
    left:0px;
    content: '';
    -webkit-animation: strome 5s ease-in infinite;
            animation: strome 5s ease-in infinite;
    z-index: 9999;
}

/* Thunder Flash Animation */
@-webkit-keyframes strome{
    0% {
        background-image:url('thunder.png');
        background-repeat: no-repeat;
        opacity:0;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
   }
    1% {
        background-image:url('thunder.png');
        background-repeat: no-repeat;
        opacity:0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
   }
    2% {
        background-image:url('thunder.png');
        background-repeat: no-repeat;
        opacity:0;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
   }
    3% {
        background-image:url('thunder.png');
        background-repeat: no-repeat;
        opacity:0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
   }
    4% {
        background-image:url('thunder.png');
        background-repeat: no-repeat;
        opacity:1;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
   }
    5% {
        background-image:url('thunder.png');
        background-repeat: no-repeat;
        opacity:1;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
   }
    6% {
        background-image:url('thunder.png');
        background-repeat: no-repeat;
        opacity:0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
   }
    7% {
        background-image:url('thunder.png');
        background-repeat: no-repeat;
        opacity:0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
   }
    8% {
        background-image:url('thunder.png');
        background-repeat: no-repeat;
        opacity:0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
   }
    9% {
        background-image:url('thunder.png');
        background-repeat: no-repeat;
        opacity:1;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
   }
    10%, 100% {
        background-image:url('thunder.png');
        background-repeat: no-repeat;
        opacity:0;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
   }
}
@keyframes strome{
    0% {
        background-image:url('thunder.png');
        background-repeat: no-repeat;
        opacity:0;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
   }
    1% {
        background-image:url('thunder.png');
        background-repeat: no-repeat;
        opacity:0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
   }
    2% {
        background-image:url('thunder.png');
        background-repeat: no-repeat;
        opacity:0;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
   }
    3% {
        background-image:url('thunder.png');
        background-repeat: no-repeat;
        opacity:0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
   }
    4% {
        background-image:url('thunder.png');
        background-repeat: no-repeat;
        opacity:1;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
   }
    5% {
        background-image:url('thunder.png');
        background-repeat: no-repeat;
        opacity:1;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
   }
    6% {
        background-image:url('thunder.png');
        background-repeat: no-repeat;
        opacity:0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
   }
    7% {
        background-image:url('thunder.png');
        background-repeat: no-repeat;
        opacity:0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
   }
    8% {
        background-image:url('thunder.png');
        background-repeat: no-repeat;
        opacity:0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
   }
    9% {
        background-image:url('thunder.png');
        background-repeat: no-repeat;
        opacity:1;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
   }
    10%, 100% {
        background-image:url('thunder.png');
        background-repeat: no-repeat;
        opacity:0;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
   }
}
@-webkit-keyframes flash {
    0% {
        background: transparent;
   }
    1% {
        background:rgba(255,255,255,.1);
   }
    2% {
        background: transparent;
   }
    3% {
        background:rgba( 255, 255, 255,.2);
   }
    4% {
        background:rgba( 255, 255, 255,.2);
   }
    5% {
        background:rgba( 255, 255, 255,.2);
   }
    6% {
        background:rgba( 255, 255, 255,.1);
   }
    7% {
        background:rgba( 255, 255, 255,.2);
   }
    8% {
        background:rgba( 255, 255, 255,.1);
   }
    9% {
        background:rgba( 255, 255, 255,.2);
   }
    10%, 100% {
        background: transparent;
   }
}
@keyframes flash {
    0% {
        background: transparent;
   }
    1% {
        background:rgba(255,255,255,.1);
   }
    2% {
        background: transparent;
   }
    3% {
        background:rgba( 255, 255, 255,.2);
   }
    4% {
        background:rgba( 255, 255, 255,.2);
   }
    5% {
        background:rgba( 255, 255, 255,.2);
   }
    6% {
        background:rgba( 255, 255, 255,.1);
   }
    7% {
        background:rgba( 255, 255, 255,.2);
   }
    8% {
        background:rgba( 255, 255, 255,.1);
   }
    9% {
        background:rgba( 255, 255, 255,.2);
   }
    10%, 100% {
        background: transparent;
   }
}
/* Rain Layers */
.cloud1, .cloud2, .cloud3 {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("rain.png");
    background-repeat: repeat;
    pointer-events: none;
    z-index: 5;
    opacity: 0.5;
}

/* Individual Rain Layer Animations */
.cloud1 {
    background-size: 200px 200px;
    animation: rainAnim1 8s linear infinite;
    opacity: 0.2;
}

.cloud2 {
    background-size: 150px 150px;
    animation: rainAnim2 4s linear infinite;
    opacity: 0.15;
}

.cloud3 {
    background-size: 100px 100px;
    animation: rainAnim3 6s linear infinite;
    opacity: 0.1;
}

/* Rain Animation Keyframes */
@keyframes rainAnim1 {
    0% { background-position: 0 0; }
    100% { background-position: -200px 1000px; }
}

@keyframes rainAnim2 {
    0% { background-position: 0 0; }
    100% { background-position: -150px 1000px; }
}

@keyframes rainAnim3 {
    0% { background-position: 0 0; }
    100% { background-position: -100px 1000px; }
}
