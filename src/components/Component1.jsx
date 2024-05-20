const Component1 = ({ ellipse1, apple1, loosingWeight }) => {
  return (
    <div className="flex flex-row items-start justify-start gap-[10px] text-left text-5xl text-black font-paragraph-p2-reg">
      <div className="h-[60px] w-[60px] flex flex-row items-start justify-start relative">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src={ellipse1}
          />
          <img
            className="absolute top-[7px] left-[8px] w-[45px] h-[45px] object-contain z-[1]"
            loading="lazy"
            alt=""
            src={apple1}
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[13.5px] px-0 pb-0">
        <div className="relative leading-[33px] mq450:text-lgi mq450:leading-[26px]">
          {loosingWeight}
        </div>
      </div>
    </div>
  );
};

export default Component1;
