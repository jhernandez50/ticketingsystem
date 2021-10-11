$('#form-register').submit(function(e){
    e.preventDefault();
    const data={
        firstName:$('input[name=firstName]').val(),
        lastName:$('input[name=lastName]').val(),
        email:$('input[name=email]').val(),
        password:$('input[name=password]').val(),
        user:$('input[name=user-type]:checked').val()
    }
    axios.post("/user/signup",data)
    .then(({data})=>{
        $('#span-message').removeClass('d-none');
        $('#span-message').addClass('blue');
        $('#span-message').text(data.message);
        console.log(data.message);
    })
    .catch(err=>{
        $('#span-message').removeClass('d-none');
        $('#span-message').addClass('red');
        $('#span-message').text(err.response.data.message);
    })
})

$('#form-login').submit(function(e){
    e.preventDefault();
    const data={
        email:$('input[name=email]').val(),
        password:$('input[name=password]').val()
    }
    axios.post("/user/signin",data)
    .then(({data})=>{
       if(data.user_type=="Member"||data.user_type=="Customer"){
           window.location.replace('/');
       }
       else{
           window.location.replace('/dashboard')
       }
    })
    .catch(err=>{
        $('#span-message').removeClass('d-none');
        $('#span-message').addClass('red');
        $('#span-message').text(err.response.data.message);
    })
    
})

$('.btn-logout').click(function(){
    axios.get('/user/logout')
    .then(({data})=>{
        window.location.replace('/');
    })
    .catch(err=>console.log(err))
})
