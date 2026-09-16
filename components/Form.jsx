// 'use client'
// import React, {useState} from 'react'
// import axios from 'axios'

// import { Button } from "./ui/button"
// import { Input } from "./ui/input"
// import { Textarea } from "./ui/textarea"
// import {User, MailIcon, ArrowRightIcon, MessageSquare} from 'lucide-react'

// const Form = () => {
//     const [name,setName] = useState('');
//     const [email,setEmail] = useState('');
//     const [message, setMessage] = useState('');
//     const handleSubmit= async (e)=> {
//         e.preventDefault();
//         console.log(name,email,message);
//         if(name==='' || email==='' || message===''){
//             alert("Fill all the fields");
//             return;
//         }
//         try {
//             const config = {
//                 headers:{
//                     "Content-type":"application/json"
//                 },
//             }
//             const {data} = await axios.post("/api/mail", {name:name,email:email,message:message}, config);
//             console.log(data);
//         } catch (error) {
//             console.log(error);
//         }

//     }
//   return (
//     <form className="flex flex-col gap-y-4">
//       <div className="relative flex items-center">
//         <Input onChange={(e)=>setName(e.target.value)} value={name} type='name' id='name' placeholder="Name" />
//         <User className="absolute right-6" size={20} />
//       </div>
//       <div className="relative flex items-center">
//         <Input onChange={(e)=>setEmail(e.target.value)} value={email} type='email' id='email' placeholder="Email" />
//         <MailIcon className="absolute right-6" size={20} />
//       </div>
//       <div className="relative flex items-center">
//         <Textarea onChange={(e)=>setMessage(e.target.value)} value={message} placeholder="Type Your Message Here." />
//         <MessageSquare className="absolute top-4 right-6" size={20} />
//       </div>
//       <Button onClick={handleSubmit} className='flex items-center max-w-[166px]'>Let's Talk <ArrowRightIcon size={20}/> </Button>
//     </form>
//   )
// }

// export default Form

'use client'
import React, { useState } from 'react'
import axios from 'axios'

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react'

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null); // success / error messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null); // reset status on new submit

    if (name === '' || email === '' || message === '') {
      setStatus({ type: "error", text: "⚠️ Please fill all the fields." });
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json"
        },
      }
      const { data } = await axios.post("/api/mail", { name, email, message }, config);
      console.log("This One");
      console.log(data);

      setStatus({ type: "success", text: "✅ Your message has been sent successfully!" });

      // Clear form fields
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.log(error);
      setStatus({ type: "error", text: "❌ Failed to send message. Please try again later." });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
      <div className="relative flex items-center">
        <Input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type='text'
          id='name'
          placeholder="Name"
        />
        <User className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type='email'
          id='email'
          placeholder="Email"
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder="Type Your Message Here."
        />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button type="submit" className='flex items-center max-w-[166px]'>
        Let's Talk <ArrowRightIcon size={20} />
      </Button>

      {/* Status message */}
      {status && (
        <p className={`text-sm mt-2 ${status.type === "success" ? "text-green-600" : "text-red-600"}`}>
          {status.text}
        </p>
      )}
    </form>
  )
}

export default Form
