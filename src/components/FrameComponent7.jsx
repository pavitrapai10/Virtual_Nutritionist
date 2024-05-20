import Component1 from "./Component1";

const FrameComponent7 = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-end max-w-full text-left text-9xl text-black font-paragraph-p2-reg">
      <div className="w-[1260px] shadow-[5px_-5px_4px_rgba(190,_235,_194,_0.5),_-5px_5px_7px_rgba(190,_235,_194,_0.5)] rounded-tl-31xl rounded-tr-none rounded-br-none rounded-bl-31xl bg-bg-lightest-green overflow-hidden shrink-0 flex flex-col items-start justify-start py-[30px] px-[95px] box-border gap-[40px] max-w-full mq1275:pl-[47px] mq1275:pr-[47px] mq1275:box-border mq750:gap-[20px] mq750:pl-[23px] mq750:pr-[23px] mq750:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full">
          <div className="w-[989px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="w-[399px] flex flex-col items-start justify-start gap-[10px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                <h3 className="m-0 relative text-inherit leading-[38px] font-normal font-inherit mq450:text-3xl mq450:leading-[30px]">
                  We have plans for
                </h3>
              </div>
              <div className="relative text-lg leading-[25px] text-black-black-600">
                Build healthier habits with personalized lessons
              </div>
            </div>
          </div>
          <div className="self-stretch h-[5px] relative [background:radial-gradient(50%_50%_at_50%_50%,_#599c68,_rgba(89,_156,_104,_0))]" />
        </div>
        <div className="w-[1058px] flex flex-row items-start justify-between gap-[20px] max-w-full text-5xl mq1100:flex-wrap">
          <Component1
            ellipse1="/ellipse-1.svg"
            apple1="/apple-1@2x.png"
            loosingWeight="Loosing weight"
          />
          <Component1
            ellipse1="/ellipse-1.svg"
            apple1="/banana-1@2x.png"
            loosingWeight="Gaining weight"
          />
          <Component1
            ellipse1="/ellipse-3.svg"
            apple1="/avocado-1@2x.png"
            loosingWeight="Maintaining weight"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent7;
