import { useMemo } from "react";

const FrameComponent3 = ({ rectangle27, propDisplay, propMinWidth }) => {
  const netWtStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className="w-[563px] shrink-0 flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border max-w-full text-left text-xl text-black font-paragraph-p2-reg">
      <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl bg-black-white flex flex-row flex-wrap items-start justify-start py-0 pr-px pl-[35px] box-border gap-[28px] max-w-full">
        <div className="self-stretch w-[563px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl bg-black-white hidden max-w-full" />
        <div className="flex-1 flex flex-col items-start justify-start pt-[35px] pb-0 pr-[7px] pl-0 box-border min-w-[169px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[30px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
              <div className="relative leading-[27px] z-[1] mq450:text-base mq450:leading-[22px]">
                <p className="m-0">Whey protein Bodybuilding</p>
                <p className="m-0">supplement Nutrition</p>
              </div>
              <div
                className="relative text-lg leading-[25px] inline-block min-w-[114px] z-[1]"
                style={netWtStyle}
              >
                Net wt : 1.7kg
              </div>
            </div>
            <img
              className="w-[152.2px] h-7 relative z-[1]"
              alt=""
              src="/stars.svg"
            />
          </div>
        </div>
        <div className="h-[207px] flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border">
          <div className="w-px flex-1 relative box-border z-[1] border-r-[1px] border-solid border-black-black-200" />
        </div>
        <img
          className="h-[222px] w-[210px] relative rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none object-cover z-[1]"
          alt=""
          src={rectangle27}
        />
      </div>
    </div>
  );
};

export default FrameComponent3;
