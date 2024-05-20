const Passwordbutton = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[5px] text-left text-lg text-black font-paragraph-p2-reg">
      <div className="relative leading-[25px] inline-block min-w-[82px]">
        Password
      </div>
      <div className="self-stretch rounded-3xs bg-black-white overflow-hidden flex flex-col items-start justify-start py-[11px] px-3.5 border-[1px] border-solid border-black-black-200">
        <div className="self-stretch h-[19px] flex flex-row items-end justify-between py-0 px-0 box-border gap-[20px]">
          <input
            className="w-[104px] [border:none] [outline:none] inline-block font-paragraph-p2-reg text-9xl bg-[transparent] h-[38px] relative leading-[38px] font-bold text-black-black-200 text-left p-0 mq450:text-3xl mq450:leading-[30px]"
            placeholder="............."
            type="text"
          />
          <img
            className="h-[16.8px] w-[26px] relative"
            alt=""
            src="/password-icon.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Passwordbutton;
