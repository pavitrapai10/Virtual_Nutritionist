import EmailButton from "../components/EmailButton";
import React, { useState } from 'react';
import { forgetPassword } from '../../backend/api';



const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleForgetPassword = async (e) => {
    e.preventDefault();
    try {
      await forgetPassword(email);
      setMessage('Password reset link sent. Check your email.');
    } catch (error) {
      setError('Failed to send password reset link. Please try again.');
    }
  };

  return (
    <div className="w-full relative bg-black-white overflow-hidden flex flex-col items-end justify-start pt-[29px] pb-[420px] pr-[851px] pl-[34px] box-border gap-[124px] leading-[normal] tracking-[normal] text-left text-9xl text-black font-paragraph-p2-reg mq450:gap-[31px] mq450:pr-5 mq450:box-border mq725:gap-[62px] mq725:pr-[425px] mq725:box-border">
      <main className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <img
          className="absolute h-full top-[0px] bottom-[0px] left-[739px] max-h-full w-[881px] object-contain"
          alt=""
          src="/rectangle-33@2x.png"
        />
        <img
          className="absolute top-[-411px] left-[-206px] w-[1724px] h-[523.5px] z-[1]"
          alt=""
          src="/rectangle-20.svg"
        />
        <img
          className="absolute top-[-356px] left-[-181.5px] w-[2082.5px] h-[463px] z-[2]"
          alt=""
          src="/rectangle-21.svg"
        />
      </main>
      <header className="self-stretch flex flex-row items-start justify-start max-w-full text-left text-xl text-black-black-600 font-paragraph-p2-reg">
        <div className="w-[500px] flex flex-row items-end justify-between gap-[20px] max-w-full">
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[4.2px] text-5xl-9 text-primary-dark-green font-amita">
            <div className="h-[38.5px] flex flex-row items-end justify-start py-0 pr-0 pl-[11.1px] box-border z-[3]">
              <div className="mb-[-2.099999999999966px] flex flex-row items-start justify-start">
                <div className="h-12 relative inline-block shrink-0 [debug_commit:1de1738] whitespace-nowrap">
                  <span className="tracking-[0.04em]">Health</span>
                  <span className="tracking-[0.1em]">y</span>
                  <span className="tracking-[0.04em]">Bite</span>
                </div>
                <div className="flex flex-col items-start justify-start pt-[7.4px] px-0 pb-0 ml-[-4.6px]">
                  <img
                    className="w-[46.5px] h-[38.5px] relative shrink-0 [debug_commit:1de1738] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/group.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start p-2.5 z-[3]">
            <div className="relative leading-[27px] inline-block min-w-[82px]">
              Features
            </div>
          </div>
          <div className="flex flex-row items-start justify-start p-2.5 z-[3]">
            <div className="relative leading-[27px] inline-block min-w-[51px]">
              Blogs
            </div>
          </div>
        </div>
      </header>
      <div className="w-[439px] flex flex-col items-center justify-start gap-[50px] max-w-full mq450:gap-[25px]">
        <div className="flex flex-col items-center justify-start gap-[15px] max-w-full">
          <h3 className="m-0 relative text-inherit leading-[38px] font-bold font-inherit mq450:text-3xl mq450:leading-[30px]">
            Forget password
          </h3>
          <div className="relative text-lg leading-[25px] text-black-black-700">
            Enter an email id associated with your account
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-base text-black-black-600">
          <div className="self-stretch flex flex-col items-start justify-start gap-[50px] mq450:gap-[25px]">
            <EmailButton />
            <button className="cursor-pointer [border:none] py-2.5 px-5 bg-primary-dark-green self-stretch rounded-3xs overflow-hidden flex flex-row items-start justify-center whitespace-nowrap hover:bg-seagreen">
              <div className="relative text-lg leading-[25px] font-paragraph-p2-reg text-black-white text-left">
                Reset password
              </div>
            </button>
          </div>
          <div className="self-stretch relative leading-[22px]">
            You will shortly receive an email with further instructions
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
