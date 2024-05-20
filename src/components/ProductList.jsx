import FrameComponent3 from "./FrameComponent3";

const ProductList = () => {
  return (
    <div className="w-[1460px] overflow-x-auto flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[73px] max-w-full text-left text-xl text-black font-paragraph-p2-reg mq450:gap-[18px] mq750:gap-[36px]">
      <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border max-w-full">
        <div className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl bg-black-white flex flex-row items-start justify-start py-0 pr-px pl-[209px] box-border gap-[28px] max-w-full mq450:pl-5 mq450:box-border mq750:flex-wrap mq750:pl-[104px] mq750:box-border">
          <div className="self-stretch w-[563px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl bg-black-white hidden max-w-full" />
          <div className="w-[86px] flex flex-col items-start justify-start pt-[35px] pb-0 pr-[7px] pl-0 box-border">
            <div className="self-stretch flex flex-col items-end justify-start py-0 px-0 gap-[30px]">
              <div className="w-[253px] flex flex-col items-start justify-start gap-[15px]">
                <div className="self-stretch relative leading-[27px] z-[1] mq450:text-base mq450:leading-[22px]">
                  <p className="m-0">Whey protein Bodybuilding</p>
                  <p className="m-0">supplement Nutrition</p>
                </div>
                <div className="w-[114px] h-[25px] relative text-lg leading-[25px] inline-block z-[1]">
                  Net wt : 1.7kg
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[100.8px] pl-0 mq450:pr-5 mq450:box-border">
                <img
                  className="h-7 w-[152.2px] relative shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/stars.svg"
                />
              </div>
            </div>
          </div>
          <div className="h-[207px] flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border">
            <div className="w-px flex-1 relative box-border z-[1] border-r-[1px] border-solid border-black-black-200" />
          </div>
          <img
            className="h-[222px] w-[210px] relative rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/rectangle-27@2x.png"
          />
        </div>
      </div>
      <div className="w-[644.2px] shadow-[0px_6px_15px_rgba(0,_0,_0,_0.25)] rounded-[22.88px] bg-black-white shrink-0 flex flex-row flex-wrap items-end justify-start py-0 pr-[1.2px] pl-10 box-border gap-[32px] max-w-full text-3xl-9 mq750:gap-[16px]">
        <div className="self-stretch w-[644.2px] relative shadow-[0px_6px_15px_rgba(0,_0,_0,_0.25)] rounded-[22.88px] bg-black-white hidden max-w-full" />
        <div className="flex-1 flex flex-col items-start justify-end pt-0 pb-[39.5px] pr-[7.6px] pl-0 box-border min-w-[194px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[34.3px] mq450:gap-[17px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[17.2px]">
              <div className="relative leading-[30.89px] z-[1] mq450:text-lg mq450:leading-[25px]">
                <p className="m-0">Whey protein Bodybuilding</p>
                <p className="m-0">supplement Nutrition</p>
              </div>
              <div className="relative text-xl-6 leading-[29px] z-[1] mq450:text-base mq450:leading-[23px]">
                Net wt : 1.7kg
              </div>
            </div>
            <img
              className="w-[174.1px] h-8 relative z-[1]"
              alt=""
              src="/stars-1.svg"
            />
          </div>
        </div>
        <div className="h-[236.8px] flex flex-col items-start justify-end pt-0 px-0 pb-[17.1px] box-border">
          <div className="w-[1.1px] flex-1 relative box-border z-[1] border-r-[1.1px] border-solid border-black-black-200" />
        </div>
        <img
          className="h-[254px] w-[240.3px] relative rounded-tl-none rounded-tr-[22.88px] rounded-br-[22.88px] rounded-bl-none object-cover z-[1]"
          alt=""
          src="/rectangle-27-1@2x.png"
        />
      </div>
      <FrameComponent3 rectangle27="/rectangle-27-2@2x.png" />
      <FrameComponent3
        rectangle27="/rectangle-27-3@2x.png"
        propDisplay="unset"
        propMinWidth="unset"
      />
    </div>
  );
};

export default ProductList;
