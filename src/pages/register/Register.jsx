

const Register = () => {
  return (
    <div className="w-1/3 mx-auto bg-gray-100 rounded-md p-10">
      <div>
      <h2 className="text-3xl font-bold text-center mb-3">Register Now!</h2>
      <div className="w-full h-[2px] bg-priColor"></div>
      <form className="mt-4 text-xl w-[90%] mx-auto">
        <label htmlFor="">Enter Email</label><br />
        <input type="email" name="email" placeholder="Email" className="w-full h-10 pl-5 mt-1 mb-3 rounded"/> <br />

        <label htmlFor="">Enter Password</label><br />
        <input type="password" name="password" placeholder="Password" className="w-full h-10 pl-5 mt-1 mb-3 rounded" /> <br />

        <label htmlFor="">Confirm Password</label><br />
        <input type="password" name="confirm_password" placeholder="Confirm Password" className="w-full h-10 pl-5 mt-1 mb-3 rounded" /><br />

        <input type="submit" value="Register" className="px-6 py-2 text-xl text-white bg-priColor rounded"/>
      </form>
    </div>
    </div>
  )
}

export default Register