document.addEventListener('DOMContentLoaded', function() {
    const timeSlotLinks = document.querySelectorAll('.time-slot');
  
    timeSlotLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault(); 
  
        timeSlotLinks.forEach(function(link) {
          link.classList.remove('selected');
        });
  
        this.classList.add('selected');
      });
    });
  });