import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Helmet from '../component/Helmet/Helmet'
import CommonSection from '../component/UI/CommonSection'

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'
import { setDoc, doc } from 'firebase/firestore';

import {auth} from '../firebase.config'
import { storage } from '../firebase.config';
import { db } from '../firebase.config';

import {toast} from 'react-toastify'

import { useNavigate} from 'react-router-dom'



function Singup() {
  const [username ,setUsername] = useState('')
  const [email ,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [file, setFile] = useState('')
  const [loading, setLoading ] = useState(false)

  const navigate = useNavigate()

  const signup = async (e) =>{
    e.preventDefault();
    setLoading(true);

    try{
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      const user = userCredential.user
      const storageref = ref(storage, `iamge/ ${Date.now() + username}`)
      const uploadTask = uploadBytesResumable(storageref, file)

      uploadTask.on(
        (err) => {
          console.log(err.message)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            await updateProfile(user,{
              displayName: username,
              photoURL: downloadURL
            })
            await setDoc(doc(db, "users", user.uid),{
              uid : user.uid,
              displayName: username,
              email,
              photoURL: downloadURL,
            })
          })
        }
      );
      setLoading(false)
      toast.success('Created account success')
      navigate('/login')
    } catch (erorr){
      console.log(erorr)
      setLoading(false)
      toast.error('something wrong')
    }

    // try {
    //   const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    //   const user =  userCredential.user
    //   const storageref = ref(storage, `images/ ${Date.now() + username }`)
    //   const uploadTask = uploadBytesResumable(storageref, file )
      

    //   uploadTask.on(
    //     (err) =>{
    //       console.log(err.message)
    //     },
    //     () =>{
    //       getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) =>{
    //         await updateProfile(user,{
    //           displayName: username,
    //           photoURL: downloadURL
    //         });
    //         await setDoc(doc(db, "users" ,user.uid),{
    //           uid: user.uid,
    //           displayName : username,
    //           email,
    //           photoURL: downloadURL,
    //         })
    //       })
    //     }
    //   )
    //   setLoading(false)
    //   toast.success('Account Created Success')
    //   navigate('/login')
    // }catch (error){
    //   setLoading(false)
    //   toast.error('something wrong')

    // }
  }
  return (
    <Helmet title='SingUp'>
      <CommonSection title='SingUp'/>

      <section className='mt-20'>
        <div className='mt-20 flex justify-center' >
          {
            loading? (<div className='text-xl font-bold'>
              Loading.....</div>
            ):(
              <form className='bg-headingText w-1/2 lg:w-1/4 rounded-xl' onSubmit={signup}>
            <div className='mx-10 my-10' >
              <input 
              value={username} onChange={e=> setUsername(e.target.value)}
              type="text" placeholder="Username" className="input input-bordered w-full my-2 " />
              <input id='email' autoComplete="email" name="email"
              value={email} onChange={e=> setEmail(e.target.value)}
              type="email" placeholder="Your Email" className="input input-bordered w-full my-2 " />
              <input 
              value={password} onChange={e=> setPassword(e.target.value)} 
                 type="password" placeholder="Your Password" className="input input-bordered w-full my-2 " />
              <input type="file" id='avatar'name='avatar' accept='image/png, image/jpeg'  placeholder='choose file' className='file-input' 
              value={file} onChange={e=> setFile(e.target.files(0))}/>
              
              <div className='flex justify-center mt-10'>
                <button type='submit' className="btn  mt-2 flex bg-white text-headingText hover:bg-headingText hover:text-white ">Create an Account</button>
              </div>
              <div className='mt-10 flex justify-between'>
                  <p className='text-white '>Already have an account?</p>
                <Link to='/login'>
                  <div className='text-white hover:underline'>Logint</div>
                </Link>
              </div>
            </div>
          </form>
            )
          }
          

        </div>


      </section>

    </Helmet>
  )
}

export default Singup
