jQuery('#frm').validate({
    rules:{
        name:"required",
        email:{
            required:true,
            email:true
        },
        pswrd:{
            required:true,
            minlength:5,
            visible:true,
        },
        
        
    },messages:{
        name:"Please Enter Name",
        email:{
            required:"Please Enter Email",
            email:"Enter Valid Email",
        },
        pswrd:{
            required:"Please Enter Password",
            minlength:"Enter Atleast 5",
        },
        
       
        
    },
   
});


