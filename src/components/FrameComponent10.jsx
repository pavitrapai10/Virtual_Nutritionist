import EmailButton from "./EmailButton";
import Passwordbutton from "./Passwordbutton";

const FrameComponent10 = () => {
  return (
    <form className="m-0 w-[439px] flex flex-col items-start justify-start gap-[40px] max-w-full mq450:gap-[20px]">
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
        <h3 className="m-0 relative text-9xl leading-[38px] font-bold font-paragraph-p2-reg text-black text-left inline-block min-w-[76px] mq450:text-3xl mq450:leading-[30px]">
          Login
        </h3>
      </div>
      <EmailButton />
      <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-2.5 gap-[6px]">
        <Passwordbutton />
        <div className="flex flex-row items-start justify-start py-0 pr-[3px] pl-1">
          <div className="relative text-sm leading-[19px] font-paragraph-p2-reg text-black text-center inline-block min-w-[115px]">
            Forget password?
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[20px] max-w-full">
          <button className="cursor-pointer [border:none] py-[9px] px-[188px] bg-primary-dark-green self-stretch rounded-3xs overflow-hidden flex flex-row items-start justify-center hover:bg-seagreen mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="relative text-xl leading-[27px] font-paragraph-p2-reg text-black-white text-left inline-block min-w-[51px] mq450:text-base mq450:leading-[22px]">
              Login
            </div>
          </button>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <div className="relative text-xl leading-[27px] font-paragraph-p2-reg text-black-black-600 text-left mq450:text-base mq450:leading-[22px]">
              or continue with
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-11 box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap mq450:justify-center">
              <div className="w-[50px] shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-bg-lightest-green box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-2 px-[9px] border-[1px] border-solid border-secondary-light-green">
                <img
                  className="h-[30px] w-[30px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/icons8google-1.svg"
                />
              </div>
              <button className="cursor-pointer py-2 px-[9px] bg-bg-lightest-green w-[50px] shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs box-border overflow-hidden shrink-0 flex flex-row items-start justify-start h-[50px] border-[1px] border-solid border-secondary-light-green">
                <img
                  className="h-[30px] w-[30px] relative"
                  alt=""
                  src="/vector.svg"
                />
              </button>
              <button className="cursor-pointer py-2 px-[9px] bg-bg-lightest-green w-[50px] shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs box-border overflow-hidden shrink-0 flex flex-row items-start justify-start border-[1px] border-solid border-secondary-light-green">
                <img
                  className="h-[30px] w-[30px] relative object-contain"
                  alt=""
                  src="/pngwing-20@2x.png"
                />
              </button>
              <div className="w-[50px] shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-bg-lightest-green box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-2 px-[9px] border-[1px] border-solid border-secondary-light-green">
                <img
                  className="h-[30px] w-[30px] relative object-contain"
                  loading="lazy"
                  alt=""
                  src="/pngwing-21@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
        <div className="flex flex-row items-start justify-start gap-[10px]">
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <div className="relative text-lg leading-[25px] font-paragraph-p2-reg text-black-black-600 text-left">
              Don’t have an account?
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-0 pr-0 pl-[3px] bg-[transparent] flex flex-row items-start justify-start">
            <div className="w-[69px] relative text-xl leading-[27px] font-paragraph-p2-reg text-primary-dark-green text-left inline-block shrink-0 [debug_commit:1de1738] whitespace-nowrap mq450:text-base mq450:leading-[22px]">
              Sign up
            </div>
          </button>
        </div>
      </div>
    </form>
  );
};

export default FrameComponent10;
