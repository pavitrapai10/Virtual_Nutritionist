import { useCallback } from "react";
import Name1 from "./Name1";
import EmailButton from "./EmailButton";
import Passwordbutton from "./Passwordbutton";
import { useNavigate } from "react-router-dom";

const FrameComponent11 = () => {
  const navigate = useNavigate();

  const onSiginContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <form className="m-0 w-[439px] flex flex-col items-start justify-start gap-[50px] max-w-full mq450:gap-[25px]">
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
        <h3 className="m-0 relative text-9xl leading-[38px] font-bold font-paragraph-p2-reg text-black text-left inline-block min-w-[102px] whitespace-nowrap mq450:text-3xl mq450:leading-[30px]">
          Sign up
        </h3>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[30px]">
        <Name1
          email="Name"
          abcgmailcomPlaceholder="ABC"
          group2="/group-2.svg"
        />
        <Name1
          email="Mobile no."
          abcgmailcomPlaceholder="999*******"
          group2="/group-3.svg"
          groupIconMinWidth="89px"
          propWidth="79px"
        />
        <EmailButton />
        <Passwordbutton />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
        <div className="self-stretch relative text-sm leading-[19px] font-paragraph-p2-reg text-center">
          <span className="text-black">{`By signing up you agree with the `}</span>
          <span className="text-primary-dark-green">Privacy policy</span>
          <span className="text-black">{` and `}</span>
          <span className="text-primary-dark-green">Terms</span>
          <span className="text-black"> of Healthybite</span>
        </div>
        <button className="cursor-pointer [border:none] py-[9px] px-5 bg-primary-dark-green self-stretch rounded-3xs overflow-hidden flex flex-row items-start justify-center whitespace-nowrap hover:bg-seagreen">
          <div className="relative text-xl leading-[27px] font-paragraph-p2-reg text-black-white text-left inline-block min-w-[105px]">
            Get started
          </div>
        </button>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[74px] mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[10px]">
          <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[139px]">
            <div className="relative text-lg leading-[25px] font-paragraph-p2-reg text-black-black-600 text-left">
              Already have an account?
            </div>
          </div>
          <div
            className="flex flex-row items-start justify-start py-0 pr-0.5 pl-[3px] cursor-pointer"
            onClick={onSiginContainerClick}
          >
            <div className="relative text-xl leading-[27px] font-paragraph-p2-reg text-primary-dark-green text-left inline-block min-w-[62px] mq450:text-base mq450:leading-[22px]">
              Sign in
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FrameComponent11;
