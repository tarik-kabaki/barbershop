import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import mainIntro from "../intro/assets/main.jpg";
import Navbar from "../navbar";
import "./intro.css";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from "dayjs";
import { MdDoneAll } from "react-icons/md";

const setps = ["step_1","step_2","step_3","step_4"];

const hours = [
  "08:00 AM",
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM"
];

const Intro = () => {

  const [selectedDate , setSelectedDate] = useState();
  const [currentStep , setCurrentStep] = useState(setps[0]);
  const [currentTime , setCurrentTime] = useState(null);
  const [name , setName] = useState("");
  const [phone , setPhone] = useState(null);
  const [email , setEmail] = useState("");

  // insted we should make an API POST req to the backend for the bookingAppointments
  const [bookingAppointment , setBookingAppointment] = useState([]);

  const handleSelectedDate = () => {
    if(selectedDate){
     setCurrentStep('step_2'); 
    }
  };

  const handleSelectedTime = () => {
    if(currentTime){
     setCurrentStep('step_3'); 
    }
  };

  const handleSelectedData = () => {
    if(name && phone && email){

      setBookingAppointment((prev)=> [...prev ,{
        "fullname": name,
        "phone":phone,
        "email":email,
        "date":selectedDate,
        "time":currentTime,
      }])
     *
     setCurrentStep('step_4'); 
     
    }
  };

  const handleBackAction = () => {
    setSelectedDate("");
    setName("");
    setPhone(null);
    setEmail("");
    setCurrentStep("step_1");
    setCurrentTime(null);
  };

  const handleFinished = () => {
    if(currentStep === "step_3"){
     setCurrentStep('step_2'); 
    } else if(currentStep === "step_2"){
      setCurrentStep('step_1'); 
     }
  };

  useEffect(()=>{
    console.log(bookingAppointment);
  },[bookingAppointment]);


  return (
    <div className="w-full relative overflow-hidden">
      <img src={mainIntro} className=" absolute top-0 left-0 z-[-1] w-full h-screen object-cover opacity-20"/>
      <Container maxWidth="lg">
      <Navbar />
        <div className="lg:flex lg:h-[550px] h-auto items-center lg:mb-16">
          <section className="flex-1 lg:mb-0 mb-14 lg:text-start text-center">
            <h1 className="lg:text-[80px] text-[50px] font-[700] text-slate-200 mb-5">
            LATEST <br/>
            HAIRSTYLES
            </h1>
         
            <div className="lg:flex lg:items-center lg:justify-start flex justify-center gap-5">
              <button className="w-[200px] h-[50px] rounded-full  text-xs text-gray-800 font-[700] button-bg">
                BOOK NOW
              </button>
              <FaArrowRightLong className="text-[45px] text-gray-300 lg:flex hidden" />
            </div>
          </section>

          <section className="flex-1 flex justify-center lg:p-0 p-5">
            {currentStep === "step_1" ? 
            
            <div className="lg:w-[400px] lg:h-auto w-[350px] h-auto rounded-lg border-opacity-30 border-black overflow-hidden bg-slate-50 lg:p-10 p-5">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
               <DateCalendar onChange={(newValue) => setSelectedDate(newValue.$d)}/>
            </LocalizationProvider>
            <div className="flex items-center justify-between">
              {currentStep === "step_1" ? <div></div> : 
               <button onClick={handleBackAction} className="w-[100px] h-[50px] rounded-full  text-md text-red-500 font-[700]">
               Back
             </button>
              }
              <button onClick={handleSelectedDate} disabled={selectedDate ? false : true} className="w-[100px] h-[50px] rounded-full text-dm text-blue-500 font-[700] disabled:text-gray-400">
                Next
              </button>
            </div>
            </div> 
            
            : currentStep === "step_2" ? 

            <div className="lg:w-[400px] lg:h-auto w-[350px] h-auto min-h-[450px] rounded-lg border-opacity-30 border-black overflow-hidden bg-slate-50 lg:p-10 p-5">
            <div>
             <div className="flex items-center mb-5">
               <span>Date Selected : <span className="text-blue-500">{dayjs(selectedDate).format('DD/MM/YYYY')}</span></span>
             </div>
          
          <div>
            <span>Select your time :</span>
            <div className="w-full h-full flex flex-wrap gap-2 p-5 items-center justify-start mb-5">
            {hours.map((item,index)=>(
              <div onClick={()=>setCurrentTime(item)} className={`w-[80px] h-[40px] rounded-md border-[1px] border-gray-500 text-xs flex items-center justify-center cursor-pointer ${currentTime === item ? "text-white font-semibold bg-blue-500 border-none" : ""}`}>
                {item}
               </div>
            ))}
            </div>
          </div>
               
            </div>
 
 
             <div className="flex items-center justify-between">
               {currentStep === "step_1" ? <div></div> : 
                <button onClick={handleBackAction} className="w-[100px] h-[50px] rounded-full  text-md text-red-500 font-[700]">
                Back
              </button>
               }
              
               <button onClick={handleSelectedTime} disabled={currentTime ? false : true} className="w-[100px] h-[50px] rounded-full text-dm text-blue-500 font-[700] disabled:text-gray-400">
                 Next
               </button>
             </div>
             </div>

            : currentStep === "step_3" ?
            
            <div className="lg:w-[400px] lg:h-auto w-[350px] h-auto min-h-[450px] rounded-lg border-opacity-30 border-black overflow-hidden bg-slate-50 lg:p-10 p-5">
           <div>
            <div className="flex items-center mb-5">
              <span>Date Selected : <span className="text-blue-500">{dayjs(selectedDate).format('DD/MM/YYYY')}</span></span>
            </div>
            <div className="flex items-center mb-5">
              <span>Date Time : <span className="text-blue-500">{currentTime}</span></span>
            </div>
            <div>Full Name:</div>
            <section className="lg:w-[80%] w-full flex items-center gap-5 mb-8">
                <input
                  onChange={(e)=> setName(e.target.value)}
                  value={name}
                  placeholder="Tarik Kabaki"
                  className="w-full h-[40px] text-gray-800 bg-transparent placeholder:text-gray-300 border-b-2 border-gray-500 focus:outline-none text-[14px]"
                />
              </section>

              <div>Phone Number:</div>
            <section className="lg:w-[80%] w-full flex items-center gap-5 mb-8">
                <input
                value={phone}
                 onChange={(e)=> setPhone(e.target.value)}
                  placeholder="+212 06 ...."
                  className="w-full h-[40px] text-gray-800 bg-transparent placeholder:text-gray-300 border-b-2 border-gray-500 focus:outline-none text-[14px]"
                />
              </section>

              <div>Email Address:</div>
            <section className="lg:w-[80%] w-full flex items-center gap-5 mb-8">
                <input
                 value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                  placeholder="tarik.exemple@..."
                  className="w-full h-[40px] text-gray-800 bg-transparent placeholder:text-gray-300 border-b-2 border-gray-500 focus:outline-none text-[14px]"
                />
              </section>
           </div>


            <div className="flex items-center justify-between">
              {currentStep === "step_1" ? <div></div> : 
               <button onClick={handleFinished} className="w-[100px] h-[50px] rounded-full  text-md text-red-500 font-[700]">
               Back
             </button>
              }
             
              <button onClick={handleSelectedData} disabled={name && email && phone ? false : true} className="w-[100px] h-[50px] rounded-full text-dm text-blue-500 font-[700] disabled:text-gray-400">
                BOOK
              </button>
            </div>
            </div>
            : currentStep === "step_4" ?

          <div className="lg:w-[400px] lg:h-auto w-[350px] h-auto min-h-[450px] rounded-lg border-opacity-30 border-black overflow-hidden bg-slate-50 lg:p-10 p-5">
         
          <div className="mb-5">
              <div className="w-full flex items-center justify-center flex-col mb-10">
                <div className="w-[80px] h-[80px] bg-green-500 flex items-center justify-center rounded-full">
                  <MdDoneAll className="text-white text-[36px]"/>
                </div>
                <div className="text-green-500 font-semibold">Booking Successful</div>
          </div>
            <div className="text-2xl mb-5">Booking Details :</div>
            <div className="flex flex-col gap-2 mb-3">
            <div>FullName : <span className="text-blue-500">{name}</span></div>
            <div>Phone Number : <span className="text-blue-500">{phone}</span></div>
            <div>Email : <span className="text-blue-500">{email}</span></div>
           <div>Date : <span className="text-blue-500">{dayjs(selectedDate).format('DD/MM/YYYY')}</span></div>
            <div>Time : <span className="text-blue-500">{currentTime}</span></div>
            </div>

            
          </div>
            <div className="w-full ">
       
              <button onClick={handleBackAction} disabled={selectedDate ? false : true} className="w-full h-[50px] flex justify-start rounded-full text-dm text-blue-500 text-lg disabled:text-gray-400">
                Book Another Appointment !!
              </button>
            </div>
            </div>
           : 
            null }
          </section>
        </div>
      </Container>
    </div>
  );
};

export default Intro;
