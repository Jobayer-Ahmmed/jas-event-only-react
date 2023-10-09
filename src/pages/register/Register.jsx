import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { MyAuthContext } from "../../contextApi/MyAuthProvider"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";
import myAuth from "../../firebase/firebase.config";


const Register = () => {
  const [message, setMessage] = useState('')
  const {myCreateUser} = useContext(MyAuthContext)

  const handleRegister=(e)=>{
    e.preventDefault()
    const myForm = new FormData(e.currentTarget)
    const myEmail = myForm.get("email")
    const myPassword = myForm.get("password")
    const myPhoto = myForm.get("photo")
    const myName = myForm.get("name")
    const myConfirmPassword = myForm.get("confirm_password")

    console.log(myName, myPhoto)

    setMessage('')

    if(myPassword.length>=6){
        if(/(?=.*[A-Z])/.test(myPassword)){
          if(/(?=.*[a-z])/.test(myPassword)){
            if(myPassword===myConfirmPassword){
              myCreateUser(myEmail, myPassword)
              .then((res1)=>{


                updateProfile(myAuth.currentUser, {
                  displayName: myName, 
                  photoURL: myPhoto
                  })
                  .then((res2) => {
                    console.log(res1)
                    console.log(res2)
                    toast.success("Congratulations! Registration successfull")
                  })
                .catch((err) => {
                    console.log(err.messsage)
                });
              })
              .catch(err=>setMessage(err.message))
            }
            else{
              setMessage("Confirm password did not match") 
            }

          }
          else{
            setMessage("Password must have at least one lowercase")             
          }

        }
        else{
          setMessage("Password must have at least one uppercase")          
        }

    }
    else{
      setMessage("Password must be 6 characters or, more")
    }

  }

  return (
    <div className="w-[90%] md:w-2/3 lg:w-1/3 mx-auto bg-gray-100 rounded-md my-10 p-10">
      <p className="text-red-700 font-bold my-8">{message}</p>
      <div>
      <h2 className="text-3xl font-bold text-center mb-3">Register Now!</h2>
      <div className="w-full h-[2px] bg-priColor"></div>
      <form onSubmit={handleRegister} className="mt-4 text-xl w-[90%] mx-auto">
        <label htmlFor="">Username</label><br />
        <input type="text" name="name" placeholder="Username" className="w-full h-10 pl-4 mt-1 mb-3 rounded text-[16px]" /><br />

        <label htmlFor="">Enter Email</label><br />
        <input type="email" name="email" placeholder="Email" className="w-full h-10 pl-4 mt-1 mb-3 rounded text-[16px]"/> <br />

        <label htmlFor="">Enter Password</label><br />
        <input type="password" name="password" placeholder="Password" className="w-full h-10 pl-4 mt-1 mb-3 rounded text-[16px]" /> <br />

        <label htmlFor="">Confirm Password</label><br />
        <input type="password" name="confirm_password" placeholder="Confirm Password" className="w-full h-10 pl-4 mt-1 mb-3 rounded text-[16px]" /><br />
       
        <label htmlFor="">Insert URL of Your Photo</label><br />
        <input type="text" name="photo" placeholder="Photo URL" className="w-full h-10 pl-4 mt-1 mb-3 rounded text-[16px]" /><br />

        <input type="submit" value="Register" className="px-6 py-2 text-xl text-white bg-priColor rounded"/>
      </form>
      <p className="text-center mt-5">Already have an account? <Link to="/login" className="underline text-blue-400">Login Now!</Link></p>
    </div>

    <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
      />

    </div>
  )
}

export default Register


