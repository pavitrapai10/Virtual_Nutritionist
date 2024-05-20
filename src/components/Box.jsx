import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Box = () => {
  const navigate = useNavigate();

  const onSIGNINClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  return (
    <section className="self-stretch bg-secondary-light-green overflow-hidden flex flex-col items-center justify-start py-[50px] px-5 box-border gap-[60px] max-w-full text-center text-9xl text-black font-paragraph-p2-reg mq450:pt-8 mq450:pb-8 mq450:box-border mq750:gap-[30px]">
      <div className="w-[1240px] flex flex-row items-start justify-center py-0 pr-2.5 pl-0 box-border max-w-full">
        <div className="w-[702px] flex flex-col items-end justify-start gap-[52px] max-w-full mq750:gap-[26px]">
          <div className="self-stretch relative mq450:text-3xl">
            <p className="m-0">
              <span>
                <span>
                  <span className="leading-[38px]">Invest in yourself and</span>
                </span>
              </span>
            </p>
            <p className="m-0">
              <span>
                <span>
                  <span className="text-21xl leading-[55px]">{` `}</span>
                  <span className="leading-[38px]">boost your</span>
                </span>
                <b className="text-21xl leading-[55px] font-paragraph-p2-reg">{` `}</b>
              </span>
              <b className="text-21xl leading-[55px] font-paragraph-p2-reg">
                <span className="text-primary-dark-green">health</span>
                <span className="text-black">{`, `}</span>
                <span className="text-primary-dark-green">body</span>
                <span className="text-black">{` `}</span>
              </b>
              <span className="text-black">
                <span className="text-9xl leading-[38px] font-paragraph-p2-reg">
                  and
                </span>
              </span>
              <b className="text-21xl leading-[55px] font-paragraph-p2-reg">
                <span className="text-black">{` `}</span>
                <span className="text-primary-dark-green">confidence</span>
              </b>
            </p>
          </div>
          <div className="w-[653px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <button
              className="cursor-pointer [border:none] py-[15px] px-[60px] bg-[transparent] shadow-[-2px_3px_6px_rgba(0,_0,_0,_0.25)] rounded-3xs [background:linear-gradient(180deg,_#32794f,_rgba(50,_121,_79,_0.69)_36.59%,_rgba(50,_121,_79,_0.5))] overflow-hidden flex flex-row items-start justify-start whitespace-nowrap"
              onClick={onSIGNINClick}
            >
              <div className="relative text-5xl leading-[33px] font-paragraph-p2-reg text-black text-center inline-block min-w-[123px]">
                Start today
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="w-[1240px] flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-lg mq1100:flex-wrap mq1100:justify-center">
        <div className="flex flex-row items-start justify-start gap-[10px]">
          <img
            className="self-stretch w-[35px] relative max-h-full min-h-[27px]"
            alt=""
            src="/tttick.svg"
          />
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <div className="relative leading-[25px]">
              Quick account creation
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[10px] max-w-full mq450:flex-wrap">
          <img
            className="self-stretch w-[35px] relative max-h-full min-h-[27px]"
            alt=""
            src="/tttick.svg"
          />
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <div className="relative leading-[25px]">
              No commitment — cancel at any time
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[10px]">
          <img
            className="self-stretch w-[35px] relative max-h-full min-h-[27px]"
            alt=""
            src="/tttick.svg"
          />
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <div className="relative leading-[25px]">
              Join over 45 million other users
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Box;
