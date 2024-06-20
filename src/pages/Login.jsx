import FrameComponent10 from "../components/FrameComponent10";
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../../backend/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      navigate('/');
    } catch (error) {
      setError('Login failed. Please try again.');
    }
  };


  return (
    <div className="w-full relative bg-black-white overflow-hidden flex flex-col items-end justify-start pt-[29px] pb-[238px] pr-[850px] pl-[34px] box-border gap-[74px] leading-[normal] tracking-[normal] mq450:gap-[18px] mq450:pr-5 mq450:box-border mq725:gap-[37px] mq725:pr-[425px] mq725:box-border">
      <main className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <img
          className="absolute h-full top-[0px] bottom-[0px] left-[740px] max-h-full w-[881px] object-contain"
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
      <div className="self-stretch flex flex-row items-start justify-start max-w-full">
        <nav className="m-0 w-[500px] flex flex-row items-end justify-between gap-[20px] max-w-full text-left text-xl text-black-black-600 font-paragraph-p2-reg">
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[4.2px] text-5xl-9 text-primary-dark-green font-amita">
            <div className="h-[38.5px] flex flex-row items-end justify-start py-0 pr-0 pl-[11.1px] box-border z-[3]">
              <div className="mb-[-2.099999999999966px] flex flex-row items-start justify-start">
                <div className="h-12 relative inline-block whitespace-nowrap">
                  <span className="tracking-[0.04em]">Health</span>
                  <span className="tracking-[0.1em]">y</span>
                  <span className="tracking-[0.04em]">Bite</span>
                </div>
                <div className="flex flex-col items-start justify-start pt-[7.4px] px-0 pb-0 ml-[-4.6px]">
                  <img
                    className="w-[46.5px] h-[38.5px] relative z-[1]"
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
        </nav>
      </div>
      <FrameComponent10 />
    </div>
  );
};

export default Login;
