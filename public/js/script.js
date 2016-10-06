$(function() {
  
  // Trigger alert when this file is executed
  console.log('Main js file executed.');
  
  // Setup PJAX
  //*
  $(document).pjax('a:not(.pjax-disabled)', '#pjax-container', {
    fragment: '#pjax-container' // Set the fragment we want from the whole page
  });
  //*/
});