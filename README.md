# liveBgZoom
LiveBgZoom is a low size and simple js library to zoom in and out your elements backgrounds on hover.
[demo](https://livebgzoomdemo.netlify.com/)

# add to webpage

1-download zip file and extract in your webpage directory
2-add jquery and css and js file to html file:
:
  
```
<head>
<link rel="stylesheet" href="css/livebg.css" />
</head>
```
at the end of body:
  
```
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="js/livebg.js"></script>
```
# usage
add 'lbg-container' class to the elements you want to have zoom effect and specify the zoom speed with one of the following classes(the default speed is normal you can set custom speed in livebg.css file and remove zoom-speed class):
* -zoom-speed-slow
* -zoom-speed-normal
* -zoom-speed-fast
* -zoom-speed-none(remove zoom animation)

### you can also set zoom amount in percentages in id tag (more than 0%) the default is 50% if you don't set id:
```
<div class="lbg-container zoom-speed-normal" id="20%"></div>
```
### then override sample background-image








