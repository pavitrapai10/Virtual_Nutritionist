import { useMemo } from "react";

const FrameComponent6 = ({
  pngwing7,
  findADietYouLove,
  findANutritiousDietThatFi,
  propPadding,
}) => {
  const sortingFunctionStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="w-[546px] flex flex-row items-start justify-start gap-[10px] max-w-full text-left text-xl text-black font-paragraph-p2-reg mq750:flex-wrap">
      <img
        className="h-52 w-52 relative object-cover mq750:flex-1"
        loading="lazy"
        alt=""
        src={pngwing7}
      />
      <div
        className="flex-1 flex flex-col items-start justify-start pt-7 px-0 pb-0 box-border min-w-[213px] max-w-full"
        style={sortingFunctionStyle}
      >
        <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
          <div className="relative leading-[27px] mq450:text-base mq450:leading-[22px]">
            {findADietYouLove}
          </div>
          <div className="self-stretch relative text-base leading-[22px] text-black-black-700">
            {findANutritiousDietThatFi}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
