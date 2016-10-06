$(function() {
  
  // Trigger alert when this file is executed
  alert('Javascript executed.');
  
  // Setup PJAX
  //*
  $(document).pjax('a:not(.pjax-disabled)', '#pjax-container', {
    fragment: '#pjax-container' // Set the fragment we want from the whole page
  });
  //*/
});