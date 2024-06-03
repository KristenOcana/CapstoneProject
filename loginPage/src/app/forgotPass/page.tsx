'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import '../styles/forgotPass.css'

const ForgotPass = () => {
    const [code, setCode] = useState(['', '', '', '']);

    const handleCodeChange = (index: number, value: string) => {
      const updatedCode = [...code];
      updatedCode[index] = value;
      setCode(updatedCode);
    };
    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        const fourDigitCode = code.join('');

        console.log('Submitted 4-digit code:', fourDigitCode);
      };
  return (
    <div className='container z-1'>
        <div className="logo p-2 lg:w-full lg:pl-40 lg:pt-24">
            <Image
            src={"/dnhsLogo.png"}
            alt='logo'
            width={70}
            height={70}
            className='lg:w-fit'
            />
        </div>

        <div className="form h-full bg-white p-6 mt-32 lg:mt-24 justify-center content-center text-center rounded-2xl z-3">
            <div className="heading mb-16">
                <h1 className='text-blue-950 font-bold pb-4'>Verify Your Email</h1>
                <p className='text-xs'>Please enter the 4 Digit Code sent to <span className='text-blue-400 font-medium underline'>johndoe@example.com</span>
                </p>
            </div>

            <div className="flex flex-rows gap-4 justify-center items-center mb-16">
                {code.map((_, index) => (
                <input
                    key={index}
                    type="text"
                    value={code[index]}
                    onChange={(e) => handleCodeChange(index, e.target.value)}
                    maxLength={1}
                    className="w-6 border-2 rounded text-center"
                />
                ))}
            </div>

            <div className=''>
            <button type="submit" className='bg-blue-950 text-white p-2 w-full rounded-2xl text-xs hover:opacity-80'>Next</button>
            </div>
        </div>
    </div>
  )
}

export default ForgotPass