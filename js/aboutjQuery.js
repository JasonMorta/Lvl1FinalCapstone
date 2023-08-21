$(document).ready(function(){
    $(".box-container-inner > p").hide(1000);
    let isExpanded  = false;
    $("h3").click(function(){
        
        // Find the element containing the testimonial symbol
  const symbolElement = $(this);
  isExpanded = !isExpanded
   // Update the symbol based on the boolean value
   if (isExpanded) {
    symbolElement.text("Testimonial ▾");
  } else {
    symbolElement.text("Testimonial ▴");
  }
      $(".box-container-inner > p").toggle(300);
    });
  });