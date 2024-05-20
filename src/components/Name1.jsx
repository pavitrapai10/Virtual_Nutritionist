import { useMemo } from "react";

const Name1 = ({
  email,
  abcgmailcomPlaceholder,
  group2,
  groupIconMinWidth,
  propWidth,
}) => {
  const emailStyle = useMemo(() => {
    return {
      minWidth: groupIconMinWidth,
    };
  }, [groupIconMinWidth]);

  const abcgmailcomStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[5px] text-left text-lg text-black font-paragraph-p2-reg">
      <div
        className="relative leading-[25px] inline-block min-w-[51px]"
        style={emailStyle}
      >
        {email}
      </div>
      <div className="self-stretch rounded-3xs bg-black-white overflow-hidden flex flex-col items-start justify-start py-[11px] px-3.5 border-[1px] border-solid border-black-black-200">
        <div className="self-stretch flex flex-row items-start justify-between py-0 pr-px pl-0 gap-[20px]">
          <input
            className="w-[27px] [border:none] [outline:none] font-paragraph-p2-reg text-sm bg-[transparent] h-[19px] relative leading-[19px] text-black-black-200 text-left inline-block p-0"
            placeholder={abcgmailcomPlaceholder}
            type="text"
            style={abcgmailcomStyle}
          />
          <img
            className="h-[19px] w-[19px] relative min-h-[19px]"
            alt=""
            src={group2}
          />
        </div>
      </div>
    </div>
  );
};

export default Name1;
