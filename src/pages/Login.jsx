import React, { useState } from 'react'
import { Link, useNavigate,  } from 'react-router-dom'
import Helmet from '../component/Helmet/Helmet'
import CommonSection from '../component/UI/CommonSection'

import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase.config'
import { toast } from 'react-toastify'

function Login() {

  const [email ,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const signIn = async (e) => {
    e.preventDefault()
    setLoading(true)

    try{
      const userCredential = await signInWithEmailAndPassword(auth, email, password)

      const user = userCredential.user

      console.log(user)
      setLoading(false)
      toast.success('Login Success')
      navigate('/home')

    }catch (error){
      setLoading(false)
      toast.error(error.message)
    }
  }
  return (
    <Helmet title='login'>
      <CommonSection title='Login'/>

      <section className='mt-20'>
        <div className='mt-20 flex justify-center'>
          {
            loading? (
              <div className='text-xl font-bold'>Loading ......</div>
            ) : (
              <div className='bg-headingText w-1/2 lg:w-1/4 rounded-xl'>
            <form className='mx-10 my-10' onSubmit={signIn}>
              <input 
              value={email} onChange={e=> setEmail(e.target.value)}
              type="email" id='email-address' autoComplete='email' required placeholder="Your Email" className="input input-bordered w-full my-2 " />
              <input
              value={password} onChange={e=> setPassword(e.target.value)} 
              id='password' name='password' autoComplete='current-password' required type="password" placeholder="Your Password" className="input input-bordered w-full my-2 " />
              <div className='flex justify-center'>
              <button type='submit' className="btn  mt-2 flex bg-white text-headingText hover:bg-headingText hover:text-white ">Login</button>
              </div>
              <div className='mt-10 flex justify-between'>
                  <p className='text-white '>Don't have an account?</p>
                <Link to='/singup'>
                  <div className='text-white hover:underline'>Create Accoout</div>
                </Link>
              </div>
             
            </form>
           
          </div>
            )
          }
          

        </div>


      </section>

    </Helmet>
  )
}

export default Login
