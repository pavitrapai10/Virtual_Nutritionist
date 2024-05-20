const EmailButton = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[5px] text-left text-lg text-black font-paragraph-p2-reg">
      <div className="relative leading-[25px] inline-block min-w-[46px]">
        Email
      </div>
      <div className="self-stretch rounded-3xs bg-black-white overflow-hidden flex flex-col items-start justify-start py-[11px] px-3.5 border-[1px] border-solid border-black-black-200">
        <div className="self-stretch flex flex-row items-end justify-between gap-[20px]">
          <input
            className="w-[103px] [border:none] [outline:none] font-paragraph-p2-reg text-sm bg-[transparent] h-[19px] relative leading-[19px] text-black-black-200 text-left inline-block whitespace-nowrap p-0"
            placeholder="abc@gmail.com"
            type="text"
          />
          <img
            className="h-[15.9px] w-[26px] relative"
            alt=""
            src="/group-1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default EmailButton;
