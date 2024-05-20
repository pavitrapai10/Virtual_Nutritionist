const FrameComponent4 = () => {
  return (
    <div className="w-[1857px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-21xl text-black font-paragraph-p2-reg">
      <div className="flex flex-col items-center justify-start gap-[50px] max-w-full mq450:gap-[25px]">
        <div className="h-[55px] relative leading-[55px] inline-block max-w-full mq450:text-5xl mq450:leading-[33px] mq750:text-13xl mq750:leading-[44px]">
          <span className="whitespace-pre-wrap">{`Diet  `}</span>
          <span className="text-41xl tracking-[-0.02em] font-semibold text-primary-red">
            Products
          </span>
        </div>
        <div className="flex flex-col items-start justify-start gap-[35px] max-w-full text-xl text-black-black-700 mq450:gap-[17px]">
          <div className="relative leading-[27px] mq450:text-base mq450:leading-[22px]">
            HealthyBite making it easy for you to get your diet product supply
            from the same platform as well
          </div>
          <div className="flex flex-col items-start justify-start gap-[25px] max-w-full">
            <div className="flex flex-row items-start justify-start gap-[15px]">
              <img
                className="self-stretch w-[35px] relative max-h-full min-h-[27px]"
                alt=""
                src="/tttick.svg"
              />
              <div className="relative leading-[27px] mq450:text-base mq450:leading-[22px]">
                Search from a wide range
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[15px] max-w-full mq750:flex-wrap">
              <img
                className="h-[27px] w-[35px] relative min-h-[27px]"
                alt=""
                src="/tttick.svg"
              />
              <div className="relative leading-[27px] inline-block max-w-full mq450:text-base mq450:leading-[22px]">
                Get the best one recommended from the nutritionist
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
