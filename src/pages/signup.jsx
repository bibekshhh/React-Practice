// import { useRef } from "react";
// import '../style/form.css';

// export const Signup = () => {
//     const emailRef = useRef(null)
//     const passwordRef = useRef(null)

//     function handleSubmit(e){
//         e.preventDefault();

//         console.log({"email": emailRef.current.value, "password": passwordRef.current.value})
//     }
//     return (
//         <>
//         <form onSubmit={e => handleSubmit(e)}>
//             <h2 className="mb2">Login form</h2>
//             <input type="email" placeholder="Enter your mail" ref={emailRef}></input>
//             <input type="password" placeholder="Enter your password" ref={passwordRef}></input>
//             <button type="submit">Submit</button>
//         </form>
//         </>
//     )
// }