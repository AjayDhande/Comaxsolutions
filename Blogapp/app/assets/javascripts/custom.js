$(document).ready(function(){

  if (location.pathname.includes("services")){
    $('.navbar-collapse').find('.active').removeClass("active");
    $('.navbar-collapse').find('.scroll a').each(function(){
      if ( $(this)[0].innerHTML.includes("Service") ){
        $(this).parent().addClass("active");
      }
    })

  }
  else if (location.pathname.includes("about-us")){
    $('.navbar-collapse').find('.active').removeClass("active");
    $('.navbar-collapse').find('.scroll a').each(function(){
      if ( $(this)[0].innerHTML.includes("About Us") ){
        $(this).parent().addClass("active");
      }
    })

  }
  else if (location.pathname.includes("portfolio")){
    $('.navbar-collapse').find('.active').removeClass("active");
    $('.navbar-collapse').find('.scroll a').each(function(){
      if ( $(this)[0].innerHTML.includes("Portfolio") ){
        $(this).parent().addClass("active");
      }
    })

  }
  else if (location.pathname.includes("team")){
    $('.navbar-collapse').find('.active').removeClass("active");
    $('.navbar-collapse').find('.scroll a').each(function(){
      if ( $(this)[0].innerHTML.includes("Team") ){
        $(this).parent().addClass("active");
      }
    })

  }
  else if (location.pathname.includes("blog")){
    $('.navbar-collapse').find('.active').removeClass("active");
    $('.navbar-collapse').find('.scroll a').each(function(){
      if ( $(this)[0].innerHTML.includes("Blog") ){
        $(this).parent().addClass("active");
      }
    })

  }
  else if (location.pathname.includes("contact")){
    $('.navbar-collapse').find('.active').removeClass("active");
    $('.navbar-collapse').find('.scroll a').each(function(){
      if ( $(this)[0].innerHTML.includes("Contact") ){
        $(this).parent().addClass("active");
      }
    })
  }
  else{
    $('.navbar-collapse').find('.active').removeClass("active");
    $('.navbar-collapse').find('.scroll a').each(function(){
      if ( $(this)[0].innerHTML.includes("Home") ){
        $(this).parent().addClass("active");
      }
    })
  }

});

$(document).load(function(){
  var imageHeight = $(".image-height").height();
  $('.text-height').css('height',imageHeight);
});


function validate_captacha(){
  var sub1 = $("#subject1").val();
  if (grecaptcha.getResponse().length === 0){
    return false;
  }
  else if ((grecaptcha.getResponse().length !== 0) && (sub1 == "")){
    return true;
  }
  else {
    return false;
  }
} 

// jQuery(document).ready(function() {
//   $.validator.addMethod(
//     "regex",
//       function(value, element, regexp) {
//         var re = new RegExp(regexp);
//           return this.optional(element) || re.test(value);
//         },
//     "Please check your input."
//   );
//   jQuery('#new_comment').validate({
//     errorElement:'div',
//     rules: {
//       "comment[user_name]":{
//         required:true,
//         regex: "^[a-zA-Z. ]+$",
//         maxlength:255
//       },
      
//       "comment[email]":{
//         required:true,
//         email: true,
//         maxlength:255
//       }
//       ,
//       "comment[message]":{
//         required: true,
//         minlength:25
//       }
//     },
//     messages: {
//       "comment[user_name]":{
//         required:"Name field can't be blank",
//         regex:"Invalid name",
//         maxlength:"Should be less than 256 characters"
//       },
      
//       "comment[email]":{
//         required:"Email field can't be blank",
//         email:"Invalid Email",
//         maxlength:"Should be less than 256 characters"
//       }
//       ,
//       "comment[message]":{
//         required:"Message field can't be blank",
//         minlength: "Message must atleast 25 characters long"
//       } 
//     }
//   });
// });


// Vikash Singh
$("#new_comment").submit(function(event) {
    var flag = true;
    var user_name = $('#comment_user_name').val();
    var email = $('#comment_email').val();
    // var mailformat = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z-.]+$/;
    var message1 = $('#comment_message').val();
    if(user_name == ""){
       var element = $('#comment_user_name')
       var message = "Username Can't be blank"
       addError(element,message)
      flag = false;
    } 
    else if(user_name != ""){
      var element = $('#comment_user_name')
      removeError(element)
    }
    if(email == ""){
      var element = $('#comment_email')
      var message = "Email Can't be blank"
      addError(element,message)
      flag = false;
    } 
    else if(email != ""){
      var element = $('#comment_email')
      removeError(element)
    }
    // if (!email.match(mailformat)) {
    //   var element = $('#comment_email')
    //   var message = "Invalid Email"
    //   addError(element,message)
    //   flag = false;
    // }
    // else if(email.match(mailformat){
    //   var element = $('#comment_email')
    //   removeError(element)
    // }
    if(message1 == ""){
       var element = $('#comment_message')
       var message = "Message Can't be blank"
       addError(element,message)
      flag = false;
    } 
    else if(message1 != ""){
      var element = $('#comment_message')
      removeError(element)
    }
    if (!flag){
        event.preventDefault();
        return false;
    }
    return true;
});


function addError(element,message){
  if(!$(element.parent()).find('div.tag_custom_error').length > 0){
    $(element.parent()).append('<div class="tag_custom_error">'+ message + '</div>');
    $(element.parent()).find('div.tag_custom_error').siblings('div').addClass('set_tag_field');
  }
}

function removeError(element){
  if($(element.parent()).find('div.tag_custom_error').length > 0){
    $(element.parent()).find('div.tag_custom_error').remove();
  }
}

$('#comment_email').keyup(function (e) {
    emailChange();
});

function emailChange (event) {
    var flag = true;
    var mailformat = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    var element = $('#comment_email');
    var email = element.val();
    removeEmailError(element);
    if (email == "") {
        var message = "Email field can't be blank"
        emailError(element,message);
        flag = false;
    }
    else if(email.trim() == "") {
        var message = "Email field can't be blank"
        emailError(element,message);
        flag = false;
    }
    else if(!email.match(mailformat) && email.trim() != "") {
        var message = "Invalid email"
        emailError(element,message);
        flag = false;
    }    
    else if (email.length > 255) {
        var message = "Should be less than 255 characters"
        emailError(element,message);
        flag = false;
    }
    if(flag){
        removeEmailError(element);
    }
    if (!flag && event != undefined){
        event.preventDefault();
        return false;
    }
    return true;
}

function emailError(element,message){
  if(!$(element.parent()).find('div.tag_custom_error').length > 0){
    $(element.parent()).append('<div class="tag_custom_error">'+ message + '</div>');
    $(element.parent()).find('div.tag_custom_error').siblings('div').addClass('set_tag_field');
  }
}
function removeEmailError(element){
  if($(element.parent()).find('div.tag_custom_error').length > 0){
    $(element.parent()).find('div.tag_custom_error').remove();
  }
}

