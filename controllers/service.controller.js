const db=require('../models');
const moment=require('moment');
const Service=db.Service;
const addService=(req,res)=>{
        const {title,description,phone,service_type,year_of_exp}=req.body;
        Service.create({
            title:title,
            description:description,
            phone:phone,
            year_of_exp:year_of_exp,
            service_type:service_type,
            member_id:req.session.user_id,
        })
        .then(dbData=>{
            res.status(200).send({message:"We have recieved your service. Stay tuned to hear us back soon!"})
        })
        .catch(err=>{
            res.status(500).send({message:"Internal Error"})
        })
}
const getServices=(req,res)=>{
    Service.findAll({
        where:{
            customer_id:req.session.user_id
        }
    })
    .then(ticketData=>{

        let tickets=ticketData.map(ticket=>ticket.get({plain:true}))
        tickets=tickets.map(ticket=>{
            ticket.date=moment(ticket.createdAt).format("MM-DD-YYYY")
            return ticket
        }
        )
        console.log(tickets);
        res.render('my-tickets',{tickets:tickets});
    })
    .catch(err=>{
        console.log(err);
        res.redirect('login')

    })
}
module.exports={
    addService,
    getServices
}