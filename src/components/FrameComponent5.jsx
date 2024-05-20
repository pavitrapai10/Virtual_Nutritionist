import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent5 = () => {
  const navigate = useNavigate();

  const onSIGNINClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  return (
    <div className="w-[1224px] flex flex-row items-start justify-center pt-0 px-5 pb-[30px] box-border max-w-full text-left text-9xl text-black font-paragraph-p2-reg">
      <div className="shadow-[-4px_-4px_7px_rgba(190,_235,_194,_0.5),_4px_4px_7px_rgba(190,_235,_194,_0.5)] rounded-xl bg-bg-lightest-green overflow-hidden flex flex-row items-start justify-start py-[34px] px-[61px] box-border gap-[40px] max-w-full z-[2] mq450:gap-[20px] mq1100:flex-wrap mq750:pl-[30px] mq750:pr-[30px] mq750:box-border">
        <div className="flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
          <h3 className="m-0 relative text-inherit leading-[38px] font-normal font-inherit mq450:text-3xl mq450:leading-[30px]">
            <p className="m-0">Don’t know what’s the right meal plan or</p>
            <p className="m-0">the diet for you</p>
          </h3>
          <button
            className="cursor-pointer [border:none] py-[15px] px-[60px] bg-[transparent] shadow-[-2px_3px_6px_rgba(0,_0,_0,_0.25)] rounded-3xs [background:linear-gradient(180deg,_#beebc2_40.02%,_rgba(190,_235,_194,_0.5))] overflow-hidden flex flex-row items-start justify-start whitespace-nowrap mq450:pl-5 mq450:pr-5 mq450:box-border"
            onClick={onSIGNINClick}
          >
            <div className="relative text-5xl leading-[33px] font-paragraph-p2-reg text-black text-center">
              Sign in today
            </div>
          </button>
        </div>
        <div className="h-[149px] w-[91px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src="/ques-mark.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
