const db=require('../models');
const moment=require('moment');
const Ticket=db.Ticket;
const createTicket=(req,res)=>{
        const {title,description,phone,ticket_type}=req.body;
        Ticket.create({
            title:title,
            description:description,
            phone:phone,
            ticket_type:ticket_type,
            assigned:false,
            customer_id:req.session.user_id,
        })
        .then(dbData=>{
            res.status(200).send({message:"Your Ticket added successfully"})
        })
        .catch(err=>{
            res.status(500).send({message:"Internal Error"})
        })
}
const getTickets=(req,res)=>{
    Ticket.findAll({
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
    createTicket,
    getTickets
}