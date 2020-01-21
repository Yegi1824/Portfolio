new WOW().init();


var $page = $('html, body');           
$('a[href*="#_"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

 
// $('#bt_send').on('click', get_val);

// if(document.getElementById('inp_name').value == null && document.getElementById('inp_email').value == null && document.getElementById('inp_subject').value == null && document.getElementById('inp_text').value == null){

//     $('.name').css('color: red');
// }else{

  


        $('#bt_send').on('click',function(){
            
            var name_info = document.getElementById('inp_name').value;
            var email_info = document.getElementById('inp_email').value;
            var subject_info = document.getElementById('inp_subject').value;
            var text_info = document.getElementById('inp_text').value;
            var sum74 = document.getElementById('sum74').value;

            if(name_info.length >= 1 && email_info.length >= 1 && subject_info.length >= 1 && text_info.length >= 1 && sum74 == '11') {     
                var contactme = [name_info, email_info, subject_info, text_info];
                $('.name').css('color', '#313131')
                alert('sent');
            }else {
                alert('Fill all the parametrs');
                $('.name').css('color', 'red');
                $('.sum74').css('color', 'red');
            }
            console.log(contactme);
          });
       
         
          $(document).ready(function() {
            $("body").css("display", "none");
        
            $("body").fadeIn(2000);
        
            $("a.transition").click(function(event){
                event.preventDefault();
                linkLocation = this.href;
                $("body").fadeOut(1000, redirectPage);
            });
        
            function redirectPage() {
                window.location = linkLocation;
            }
        });






