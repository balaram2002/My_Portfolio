   //------------- nav bar script ---------------
   var tablinks = document.getElementsByClassName("tab-links");
   var tabcontents = document.getElementsByClassName("tab-contents");
   function opentab(tabname){
       for(tablink of tablinks){
           tablink.classList.remove("active-link");
       }
       for(tabcontent of tabcontents){
           tabcontent.classList.remove("active-tab");
       }
       event.currentTarget.classList.add("active-link");
       document.getElementById(tabname).classList.add("active-tab");
   }

   var sidemenu = document.getElementById("sidemenu");

   function openmenu(){
       sidemenu.style.right = "0";
   }
   function closemenu(){
       sidemenu.style.right = "-200px";
   }

   //------------- scroll reveal script ---------------
   ScrollReveal({
       reset: true,
       distance: '80px',
       duration: 2000,
       delay: 250
   });

   ScrollReveal().reveal('.myheader-text, .sub-title, .mbox2', { origin: 'top'});
   ScrollReveal().reveal('.about-col1, .myheader-text h1, .btn, .lbox1, .lbox4', { origin: 'left'});
   ScrollReveal().reveal('.input-right-animation, .rbox3, .rbox6',{ origin: 'right'});
   ScrollReveal().reveal('.certificate-gallery, .hobbies-container, .mbox5', { origin: 'bottom'});
   ScrollReveal().reveal('.dear' ,{origin: 'left'});


   
   //--------------------- typed script ---------------
   const typed = new Typed('.multiple-text', {
       strings: ['Software Engineer','Software Developer', 'Full-stack Developer', 'Java Developer', 'Frontend Developer'],
       typeSpeed: 80,
       backSpeed: 80,
       backDelay: 800,
       loop: true
   });





   //----------- Google sheet form script -------------
   const scriptURL = 'https://script.google.com/macros/s/AKfycbyZ_QkKfQsDXdMLh3sK00J7neVbBod6Jz4uHVG0bdbb8PqWnWEkvoiCxszWRSVIsh4r/exec'
   const form = document.forms['submit-to-google-sheet']
   const msg = document.getElementById("msg")


   form.addEventListener('submit', e => {
       e.preventDefault()
       fetch(scriptURL, { method: 'POST', body: new FormData(form)})
       .then(response => {
           msg.innerHTML = "Message sent successfully !"
           setTimeout(function(){
               msg.innerHTML = ""
           },5000)
           form.reset()
       })
       .catch(error => console.error('Error!', error.message))
   })

   //----------- eventListener Audio play -------------
    const bodyclick = document.querySelector('body');
   const audio = document.querySelector('audio');

   bodyclick.addEventListener('click', () => {
   const isActive = bodyclick.classList.contains('active');
   if (isActive) {
       bodyclick.classList.remove('active');
       audio.pause();
       gradient.style.opacity = 0;
     } else {
       bodyclick.classList.add('active');
       audio.play();
       gradient.style.opacity = 1;
     }
   });