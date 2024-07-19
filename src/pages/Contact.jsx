// import emailjs from "@emailjs/browser";
// import { useRef, useState } from "react";
// import useAlert from "../hooks/useAlert";
// // import Alert from "../Composant/Alert";
// import ParticlesComponent from "../Composant/particles";
// import Nav from "../Composant/Nav";

// const Contact = () => {
//   const formRef = useRef();
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const { alert, showAlert, hideAlert } = useAlert();
//   const [loading, setLoading] = useState(false);

//   const handleChange = ({ target: { name, value } }) => {
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .send(
//         import.meta.env.REACT_APP_EMAILJS_SERVICE_ID,
//         import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID,
//         {
//           from_name: form.name,
//           to_name: "JavaScript Mastery",
//           from_email: form.email,
//           to_email: "sujata@jsmastery.pro",
//           message: form.message,
//         },
//         import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY
//       )
//       .then(
//         () => {
//           setLoading(false);
//           showAlert({
//             show: true,
//             text: "Thank you for your message 😃",
//             type: "success",
//           });

//           setTimeout(() => {
//             hideAlert(false);
//             setForm({
//               name: "",
//               email: "",
//               message: "",
//             });
//           }, 3000);
//         },
//         (error) => {
//           setLoading(false);
//           console.error(error);

//           showAlert({
//             show: true,
//             text: "I didn't receive your message 😢",
//             type: "danger",
//           });
//         }
//       );
//   };

//   return (
//     <section className='relative flex  flex-col max-container z-10'>
//       {alert.show && <Alert {...alert} />}
//       <Nav />

//       <ParticlesComponent id="tsparticles"
//                 options={{
//                     zIndex: -1,
//                     /* other particle options */
//                 }}
                
//             />
          

//       <div className='flex flex-col justify-center items-center  w-full z-10'>
//         <h1 className='head-text text-[#FDFFFF] font-orbitron text-3xl bg-[#15616D] w-[350px] p-4 rounded-3xl text-center'>Contactez-Moi</h1>

//         <form
//           ref={formRef}
//           onSubmit={handleSubmit}
//           className=' flex flex-col  justify-center items-center gap-7  mt-14'
//         >
//           <label className='text-[#FDFFFF] font-mono text-[24px] flex justify-around w-[600px] '>
//             Prenom :      
//             <input
//               type='text'
//               name='name'
//               className='input flex justify-around w-[300px] text-black '
//               placeholder='Pierre'
//               required
//               value={form.name}
//               onChange={handleChange}
//             />
//           </label>
//           <label className='text-[#FDFFFF] font-mono text-[24px] flex justify-around  w-[600px] '>
//             Email  :  
//             <input
//               type='email'
//               name='email'
//               className='input w-[300px] text-black'
//               placeholder='Pierre@gmail.com'
//               required
//               value={form.email}
//               onChange={handleChange}
//             />
//           </label>
//           <label className='text-[#FDFFFF] font-mono text-[24px] flex justify-around w-[600px] ' >
//             votre Message :
//             <textarea
//               name='message'
//               rows='4'
//               className='textarea text-black  w-[350px]'
//               placeholder='écrivez votre message...'
//               value={form.message}
//               onChange={handleChange}
//             />
//           </label>

//           <button
//             type='submit'
//             disabled={loading}
//             className='btn'
//           >
//             {loading ? "Sending..." : "Submit"}
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;
