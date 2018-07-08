
<script type="text/javascript"> 
// Create namespace to avoid global conflicts 
var FOTI = window.FOTI ¦¦ {}; 
FOTI.imageSizer = function() { 
 return { 
 /** 
  * Array that stores the images and their original sizes 
  */ 
 imgList : [], 
 /** 
  * Initialize 
  */ 
 init : function() { 
  // Get all images 
  var imgElList = document.getElementsByTagName('img'); 
  for( var i = 0; i < imgElList.length; i++ ) { 
  // Store the images 
  FOTI.imageSizer.addImg(imgElList[i]); 
  // Attach the onclick handlers for the images 
  imgElList[i].onclick = function() { 
   FOTI.imageSizer.shrinkimages(); 
   FOTI.imageSizer.restoreimage(this); 
  } 
  } 
  // Shrink 'em 
  FOTI.imageSizer.shrinkimages(); 
 }, 
 /** 
  * Store an image 
  * @param {htmlElement} el The image element to store 
  */ 
 addImg : function(el) { 
  FOTI.imageSizer.imgList[FOTI.imageSizer.imgList.length] = { 
  img : el, 
  origWidth : el.width, 
  origHeight : el.height 
  } 
 }, 
 /** 
  * Shrink all images 
  */ 
 shrinkimages : function() { 
  for( var i = 0; i < FOTI.imageSizer.imgList.length; i++ ) { 
  // If the current width is the same as the original width, resize it 
  if( FOTI.imageSizer.imgList[i].img.width == FOTI.imageSizer.imgList[i].origWidth ) { 
   FOTI.imageSizer.imgList[i].img.width = FOTI.imageSizer.imgList[i].origWidth / 2; 
   FOTI.imageSizer.imgList[i].img.height = FOTI.imageSizer.imgList[i].origHeight / 2; 
  } 
  } 
 }, 
 /** 
  * Restore an image to its original size 
  * @param {htmlElement} el The image element to restore 
  */ 
 restoreimage : function(el) { 
  for( var i = 0; i < FOTI.imageSizer.imgList.length; i++ ) { 
  // Find the image in the stored list so we can get its orig width/height 
  if( FOTI.imageSizer.imgList[i].img == el ) { 
   el.width = FOTI.imageSizer.imgList[i].origWidth; 
   el.height = FOTI.imageSizer.imgList[i].origHeight; 
  } 
  } 
 } 
 }; 
}(); 
window.onload = function() { 
 FOTI.imageSizer.init();  
} 
</script> 