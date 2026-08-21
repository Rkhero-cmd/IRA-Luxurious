document.addEventListener('DOMContentLoaded', function(){
  var burger = document.querySelector('.burger');
  var navlinks = document.querySelector('.navlinks');
  if(burger && navlinks){
    burger.addEventListener('click', function(){
      navlinks.classList.toggle('open');
    });
    navlinks.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ navlinks.classList.remove('open'); });
    });
  }

  var form = document.querySelector('#bookingForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var name = document.querySelector('#name').value || 'Guest';
      var phone = document.querySelector('#phone').value || '';
      var service = document.querySelector('#service').value || '';
      var date = document.querySelector('#date').value || '';
      var time = document.querySelector('#time').value || '';
      var msg = "Hi IRA Luxurious Spa, main " + name + " booking karna chahta/chahti hoon.\nService: " + service + "\nDate: " + date + "\nTime: " + time + "\nContact: " + phone;
      window.open("https://wa.me/917567699595?text=" + encodeURIComponent(msg), "_blank");
    });
  }

  var cform = document.querySelector('#contactForm');
  if(cform){
    cform.addEventListener('submit', function(e){
      e.preventDefault();
      var name = document.querySelector('#cname').value || 'Guest';
      var msg = document.querySelector('#cmessage').value || '';
      var text = "Hi IRA Luxurious Spa, main " + name + " hoon.\n" + msg;
      window.open("https://wa.me/917567699595?text=" + encodeURIComponent(text), "_blank");
    });
  }
});
