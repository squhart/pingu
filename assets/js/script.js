$(document).ready(function(){
	
	// input tooltip    
    $("input").tooltip();
    
    // load rightside navbar
	$("#nav-right").load(base_url+'template/aside').hide().fadeIn('slow');

	// AJAX login
	$("#login-submit").click(function(){    
        username=$("#login-username").val();
        password=$("#login-password").val();
        $.ajax({
           type: "POST",
           url: base_url+"account/login_process",
           data: "username="+username+"&password="+password,
           success: function(html){    
        		if(html=='true'){
             		window.location = base_url;
            	}else if(html=='false'){
            		$("#login-alert").hide().html("<h4 class='alert-notif'>Ups, ada yang eror!</h4><p class=suggest>Username atau Password tidak cocok :3.</p>").fadeIn('slow');
            	}else{
            		$("#login-alert").hide().html("<h4 class='alert-notif'>Ups, ada yang eror!</h4><p class=suggest>Username dan Password harus diisi :3.</p>").fadeIn('slow');
            	}
           },
           beforeSend:function()
           {
            $("#login-alert").html("<h4 class='alert-notif'>Loading...</h4>").fadeIn('fast');
           }
          });
        return false;
    });

	// logout
	$("#logout").click(function(){
		$.ajax({
			type: "POST",
			url: base_url+"account/logout"
		})
		$("#nav-right").load(base_url+'template/aside').hide().fadeIn('slow');
	})



  // Parsedown Preview
  $('.nulis').on('keyup || keypress || focus',function(e){
    var tulisan = $('.nulis').val();
    if(tulisan!="") {
      $.post(base_url+'admin/previewpost', {inilah: tulisan} ,function(data) {
        $(".diparse").html(data).show();
      });
    }
  });
  $('.nulis').autogrow();
  var tulisan = $('.nulis').val();
  if(tulisan!="") {
    $.post(base_url+'admin/previewpost', {inilah: tulisan} ,function(data) {
      $(".diparse").html(data).show();
    });
  }
  
});