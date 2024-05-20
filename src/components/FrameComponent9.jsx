import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent9 = () => {
  const navigate = useNavigate();

  const onSIGNINClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  return (
    <section className="w-[1360px] flex flex-col items-start justify-start pt-0 pb-[102px] pr-0 pl-5 box-border gap-[53px] max-w-full text-left text-21xl text-black font-paragraph-p2-reg mq750:gap-[26px] mq750:pb-[66px] mq750:box-border">
      <header className="w-[1236px] flex flex-row items-start justify-between py-0 pr-5 pl-0 box-border gap-[20px] max-w-full z-[3] text-left text-xl text-black-black-600 font-paragraph-p2-reg">
        <div className="flex flex-row items-end justify-start gap-[50px] max-w-full mq750:gap-[25px]">
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[4.2px] text-5xl-9 text-primary-dark-green font-amita">
            <div className="h-[38.5px] flex flex-row items-end justify-start py-0 pr-0 pl-[11.1px] box-border">
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
                    src="/group1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start p-2.5">
            <div className="relative leading-[27px] inline-block min-w-[82px] whitespace-nowrap">
              Features
            </div>
          </div>
          <div className="flex flex-row items-start justify-start p-2.5">
            <div className="relative leading-[27px] inline-block min-w-[51px] whitespace-nowrap">
              Blogs
            </div>
          </div>
        </div>
        <div className="w-[238px] flex flex-row items-start justify-start gap-[50px]">
          <div className="shadow-[-2px_2px_4px_rgba(0,_0,_0,_0.25)] rounded-[8.06px] overflow-hidden flex flex-col items-start justify-start py-2.5 px-5">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-end justify-start">
              <div className="relative text-lg leading-[25px] font-paragraph-p2-reg text-black-black-700 text-left inline-block min-w-[46px]">
                Login
              </div>
            </button>
          </div>
          <div className="shadow-[-2px_2px_4px_rgba(0,_0,_0,_0.25)] rounded-[8.06px] overflow-hidden flex flex-col items-start justify-start py-[9px] px-[19px] border-[0.8px] border-solid border-primary-dark-green">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-end justify-start">
              <div className="relative text-lg leading-[25px] font-paragraph-p2-reg text-black-black-700 text-left inline-block min-w-[62px] whitespace-nowrap">
                Sign up
              </div>
            </button>
          </div>
        </div>
      </header>
      <div className="w-[1471.5px] flex flex-row items-center justify-between max-w-[110%] shrink-0 gap-[20px] z-[3] mq1275:flex-wrap">
        <div className="w-[378px] flex flex-col items-start justify-start py-5 px-0 box-border gap-[55px] min-w-[378px] max-w-full mq450:gap-[27px] mq450:min-w-full mq1275:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[35px] mq450:gap-[17px]">
            <div className="self-stretch h-[137px] relative leading-[55px] inline-block mq450:text-5xl mq450:leading-[33px] mq750:text-13xl mq750:leading-[44px]">
              <p className="[margin-block-start:0] [margin-block-end:15px]">
                <b className="font-paragraph-p2-reg whitespace-pre-wrap">
                  <span className="text-51xl text-primary-red">Healthy</span>
                </b>
                <span>
                  <b className="font-paragraph-p2-reg whitespace-pre-wrap">
                    <span className="text-31xl">{` `}</span>
                  </b>
                  <span className="font-light whitespace-pre-wrap">living</span>
                </span>
              </p>
              <p className="m-0">
                <span>
                  <span className="font-light whitespace-pre-wrap">
                    made easy!!
                  </span>
                </span>
              </p>
            </div>
            <div className="self-stretch relative text-xl leading-[27px] text-black-black-800 pr-4 mq450:text-base mq450:leading-[22px]">
              <p className="m-0">{`Get your custom plans &`}</p>
              <p className="m-0">one-on-one guidance from our experts</p>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 text-center text-sm text-black-black-600 mq450:gap-[19px]">
            <div className="flex flex-col items-start justify-start gap-[5px]">
              <button
                className="cursor-pointer [border:none] py-2.5 px-20 bg-[transparent] shadow-[-2px_3px_6px_rgba(0,_0,_0,_0.25)] rounded-3xs [background:linear-gradient(180deg,_#beebc2_40.02%,_rgba(190,_235,_194,_0.5))] overflow-hidden flex flex-row items-start justify-start whitespace-nowrap"
                onClick={onSIGNINClick}
              >
                <div className="w-[75px] relative text-5xl leading-[33px] font-paragraph-p2-reg text-black text-center inline-block min-w-[75px]">
                  Sign in
                </div>
              </button>
              <div className="relative leading-[19px]">{`Sign in & get started today`}</div>
            </div>
          </div>
        </div>
        <img
          className="w-[845.5px] relative max-h-full object-cover max-w-full mq1275:flex-1"
          loading="lazy"
          alt=""
          src="/pngwing-2@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent9;
