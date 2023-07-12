// import React, { useEffect, useState } from 'react';
// // import Layout from '../components/Layout';
// import Layout from 'antd/es/layout/layout';
// import { Link } from "react-router-dom"
// import {  ListGroup, ListGroupItem } from "reactstrap"
// import appointmentService from '../../components/services/appointmentService'
// // import '../../pages/Doctors.css'

// function Book() {
//   const [appointment, setAppointment] = useState([]);
//   const [username, setUsername] = useState([]);
//   const [time, setTime] = useState([]);

//   useEffect(() => {
//     appointmentService.getAllAppointment()
//       .then((res) => {
//         setAppointment(res.data.data);
//       })
//       .catch(err => console.log(err));
//   }, []);
//   const handleClick = async()=>{
//     const response = await fetch('/appointment' +appointment._id, {
//       method: 'DELETE'
//     } )
//     const json = await response.json()

//     if(response.ok){
//       // dispatch({type: 'DELETE_APPOINTMENT', payload:json})
//     }
//   }

//   const handleadd = (e) => {
//     e.preventDefault();
//     appointmentService.create({ username, time })
//       .then(res => {
//         console.log(res.data);
//         setAppointment(res.data.data);
//         setUsername('');
//         setTime('');
//       })
//       .catch(err => console.log(err));
//   };

//   return (
    
//     <Layout className="doctors-container">
//       <img
      
//         src =
//   'https://thumbs.dreamstime.com/b/calendar-appointment-day-circled-reminder-19147605.jpg'
//         alt="Appointment"
//       />
//       <div>
//         <h2 className={`primary-heading text-uppercase text-center max-w-lg mx-auto`} >List of Appointment</h2>
//         <ListGroup className={`text-center max-w-lg mx-auto home-section-heading home-section-para primary-heading text-uppercase container-fluid menu-item content header btn-custom text-uppercase`}>
//           {appointment.map(appointment => {
//             return (
//               <ListGroupItem className='btn btn-primary w-full justify-center register-form' key={appointment._id}>
//                 <b>{appointment.username} by {appointment.time}</b>
//                 {' '}
//                 {/* <img src={'http://localhost:3000' + doctor.image} alt={doctor.name} /> */}
//                 <span onClick={handleClick}>delete</span>
//                 <span onClick={handleClick}>Edit</span>


//               </ListGroupItem>
              
//             );
            
//           }
//           )
//           }
          
//         </ListGroup>
//       </div>
//     </Layout>
//   )
// }

// export default Book;
