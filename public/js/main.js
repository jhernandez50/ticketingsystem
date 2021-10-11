$('#form-add-ticket').submit(function(e){
    e.preventDefault();
    const data={
        title:$('input[name=title]').val(),
        description:$('input[name=description]').val(),
        phone:$('input[name=phone]').val(),
        ticket_type:$('input[name=ticket-type]:checked').val()
    }
    axios.post('/ticket/add',data)
    .then(({data})=>{
        $('#span-message').removeClass('d-none');
        $('#span-message').addClass('green');
        $('#span-message').text(data.message);
        $('.btn-message').removeClass('d-none');
    })
    .catch(err=>{
        console.log(err);
    })
})

$('#form-add-service').submit(function(e){
    e.preventDefault();
    const data={
        title:$('input[name=title]').val(),
        description:$('input[name=description]').val(),
        phone:$('input[name=phone]').val(),
        service_type:$('input[name=service-type]:checked').val(),
        year_of_exp:$('input[name=year-o-ex]').val()
    }
    axios.post('/service/add',data)
    .then(({data})=>{
        $('#span-message').removeClass('d-none');
        $('#span-message').addClass('green');
        $('#span-message').text(data.message);
        $('.btn-message').removeClass('d-none');
    })
    .catch(err=>{
        console.log(err);
    })
})

$('.clickable').on('click',function(){
    const serviceId=$(this).attr('id')
    window.location.replace(`/service-detail/${serviceId}`)
})
$('.btn-assign').on('click',function(){
    const memberId=$(this).attr('id');
    const ticketId=$('.detail-card').attr('id');
    const data={
        memberId:memberId,
        ticketId:ticketId
    }
    axios.post('/ticket/assign',data)
    .then(({data})=>{
        $("#services").addClass("d-none");
        $('#span-message').removeClass('d-none');
        $('#span-message').addClass('green');
        $('#span-message').text(data.message);
          
    })
    .catch(err=>{console.log(err)})
})