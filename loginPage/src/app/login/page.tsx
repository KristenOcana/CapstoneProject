import React from 'react'
import '../styles/login.css'
import Image from 'next/image'

const Login = () => {
  return (
    <div className='container z-1'>

{/* dnhsLogo */}
        <div className='logo p-2 lg:w-full lg:pl-52 lg:pt-24'>
            <Image
            src={"/dnhsLogo.png"}
            width={70}
            height={70}
            alt='logo'
            className='lg:w-fit'
            />
        </div>

{/* loginForm */}
        <div className='form-container h-full bg-white p-6 mt-32 lg:mt-24 justify-center content-center text-center rounded-2xl z-2'>
            <div className='pb-4 mb-4 border-b border-blue-950'>
                <h1 className='text-black lg:text-3xl lg:font-medium'>Log in</h1>
            </div>

            <div className='mb-8'>
                <p className='text-xs'>If you don`t have an account yet, please <a href="#" id='#' className='text-blue-400 hover:opacity-50'>request one</a>.</p>
            </div>

                <input type="email" name='email' placeholder='Email' className='border-black border text-xs p-4 w-full rounded-xl mb-4'></input>
            
      
                <input type="password" name='password' placeholder='Password' className='border-black border text-xs p-4 w-full rounded-xl mb-4'></input>
    
           
                <button type="submit" className='bg-blue-950 text-white p-4 w-full rounded-xl text-xs hover:opacity-90 mb-8'>Submit</button>
     
            <div className='flex flex-row text-xs justify-between mb-10'>
                <div className='flex flex-row gap-2'>
                    <input type="checkbox" name="remember" id="remember" />
                    <p>Remember me</p>
                </div>
                <div>
                    <a href="#" className='text-blue-400 hover:opacity-40'>Forgot Password?</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login;