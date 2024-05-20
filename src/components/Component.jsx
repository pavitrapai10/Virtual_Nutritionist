const Component = () => {
  return (
    <div className="h-[415px] w-[340px] shadow-[-2px_4px_6px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start min-w-[340px] max-w-full text-center text-sm text-black-white font-paragraph-p2-reg mq450:min-w-full mq1100:flex-1">
      <div className="self-stretch flex-1 rounded-t-3xs rounded-b-none flex flex-row items-end justify-end py-[11px] px-[15px] box-border bg-[url('/public/rectangle-12@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
        <img
          className="h-[263px] w-[340px] relative rounded-t-3xs rounded-b-none object-cover hidden max-w-full"
          alt=""
          src="/rectangle-12@2x.png"
        />
        <div className="rounded-3xs bg-primary-red overflow-hidden flex flex-row items-start justify-start py-0.5 px-[15px] whitespace-nowrap z-[1]">
          <div className="relative leading-[19px] inline-block min-w-[43px]">
            10 Apr
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-t-none rounded-b-3xs bg-black-black-100 flex flex-col items-start justify-start py-2.5 px-0 gap-[10.4px] z-[1] mt-[-1px] text-xl text-primary-dark-green">
        <div className="self-stretch h-[153px] relative rounded-t-none rounded-b-3xs bg-black-black-100 hidden" />
        <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[8.2px] pr-[15px] pl-1.5">
          <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
            <b className="relative leading-[27px] inline-block min-w-[123px] z-[1] mq450:text-base mq450:leading-[22px]">
              Diet, Fitness
            </b>
            <div className="self-stretch relative text-base leading-[22px] text-black text-left z-[1]">
              Get all the protein you need on a plant based diet
            </div>
          </div>
        </div>
        <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-black-black-200" />
        <div className="flex flex-row items-start justify-start py-0 px-2.5 text-left text-base text-black">
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <div className="relative leading-[22px] inline-block min-w-[82px] z-[1]">
              Read more
            </div>
            <div className="flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0">
              <img
                className="w-[17px] h-px relative z-[1]"
                loading="lazy"
                alt=""
                src="/arrow-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
