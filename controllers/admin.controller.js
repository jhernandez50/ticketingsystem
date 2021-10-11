const db=require('../models');
const moment=require('moment');
const Service=db.Service;
const User=db.User;
const Ticket=db.Ticket
const getServices=(req,res)=>{
        Service.findAll({include:db.User})
        .then(dbData=>{
            let services=dbData.map(service=>service.get({plain:true}))
            console.log(services);
            res.render('services',{services:services})
        })
        .catch(err=>{
            res.status(500).send({message:"Internal Error"})
        })
}
const getCustomers=(req,res)=>{
    User.findAll({
        where:{
            user_type:"Customer"
        }
    })
    .then(customerData=>{

        let customers=customerData.map(customer=>customer.get({plain:true}))
        res.render('customers',{customers:customers});
    })
    .catch(err=>{
        console.log(err);
        res.redirect('login')

    })
}
const getMembers=(req,res)=>{
    User.findAll({
        where:{
            user_type:"Member"
        }
    })
    .then(memberData=>{

        let members=memberData.map(member=>member.get({plain:true}))
        res.render('it-members',{members:members});
    })
    .catch(err=>{
        console.log(err);
        res.redirect('login')

    })
}
const getTickets=(req,res)=>{
    Ticket.findAll({})
    .then(ticketData=>{

        let tickets=ticketData.map(ticket=>ticket.get({plain:true}))
        tickets=tickets.map(ticket=>{
            ticket.date=moment(ticket.createdAt).format("MM-DD-YYYY")
            return ticket
        }
        )
        res.render('all-tickets',{tickets:tickets});
    })
    .catch(err=>{
        console.log(err);
        res.redirect('login')

    })
}
const getServiceDetail=(req,res)=>{
    const ticketId=req.params.ticketId;
    Ticket.findAll({where:{
        id:ticketId
    }})
    .then(ticketData=>{
        Service.findAll({include:db.User})
        .then(dbData=>{
            let services=dbData.map(service=>service.get({plain:true}))
            let tickets=ticketData.map(ticket=>ticket.get({plain:true}))
            tickets=tickets.map(ticket=>{
            ticket.date=moment(ticket.createdAt).format("MM-DD-YYYY")
            return ticket})
            const ticket=tickets[0]
            res.render('service-detail',{ticket:ticket,services:services});
    
        })
        .catch(err=>{
            res.status(500).send({message:"Internal Error"})
        })
        })
    .catch(err=>{
        console.log(err);
        res.redirect('login')

    })
}
const assignTicket=(req,res)=>{
    const {memberId,ticketId}=req.body;
    Ticket.update({assigned:true,itmember_id:memberId},{where:{id:ticketId}})
    .then(result=>{
        res.status(200).send({message:"Ticket Assigned Successfuly!"})
    })
    .catch(err=>{
        throw err
    })
    
}

module.exports={
    getCustomers,
    getServices,
    getMembers,
    getTickets,
    getServiceDetail,
    assignTicket
}