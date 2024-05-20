import Component from "./Component";

const FrameComponent1 = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-end pt-0 px-[42px] pb-[100.1px] box-border max-w-full text-left text-13xl text-black font-paragraph-p2-reg mq750:pl-[21px] mq750:pr-[21px] mq750:pb-[65px] mq750:box-border">
      <div className="flex-1 flex flex-col items-start justify-start gap-[50px] max-w-full mq750:gap-[25px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full">
          <div className="w-[975px] flex flex-col items-start justify-start gap-[15px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <h2 className="m-0 relative text-inherit leading-[44px] font-inherit mq450:text-lgi mq450:leading-[26px] mq750:text-7xl mq750:leading-[35px]">
                <span>{`The fresh new `}</span>
                <b className="text-primary-red">Food</b>
                <span>{` `}</span>
                <b className="text-primary-red">stories</b>
              </h2>
            </div>
            <div className="self-stretch relative text-base leading-[22px] text-black-black-700 text-center">
              With the recipes created (and put to the test) by our in-house
              team of professional chefs and nutritionists, we can promise you
              that healthy eating is delicious!
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[3px] max-w-full text-41xl font-odibee-sans">
          <div className="flex flex-col items-start justify-start pt-[179px] px-0 pb-0">
            <h1 className="m-0 relative text-inherit leading-[55px] font-normal font-inherit inline-block min-w-[28px] mq450:text-17xl mq450:leading-[33px] mq750:text-29xl mq750:leading-[44px]">{`<`}</h1>
          </div>
          <div
            className="flex-1 flex flex-row items-start justify-between min-w-[841px] max-w-full gap-[20px] text-center text-sm text-black-white font-paragraph-p2-reg mq1100:min-w-full mq1275:flex-wrap"
            data-scroll-to="liStContainer"
          >
            <Component />
            <div className="h-[480.9px] w-[394px] shadow-[-2.3px_4.6px_6.95px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start pt-0 px-0 pb-[176.1px] box-border min-w-[394px] max-w-full text-base-2 mq1100:flex-1 mq750:pb-[114px] mq750:box-border mq750:min-w-full">
              <div className="self-stretch h-[304.8px] rounded-t-[11.59px] rounded-b-none flex flex-row items-end justify-end pt-3 px-[17.2px] pb-[11.8px] box-border bg-[url('/public/rectangle-12@2x.png')] bg-cover bg-no-repeat bg-[top] shrink-0 [debug_commit:1de1738] max-w-full">
                <img
                  className="h-[304.8px] w-[394px] relative rounded-t-[11.59px] rounded-b-none object-cover hidden max-w-full"
                  alt=""
                  src="/rectangle-12@2x.png"
                />
                <div className="rounded-[11.59px] bg-primary-red overflow-hidden flex flex-row items-start justify-start py-[2.3px] px-[17.4px] whitespace-nowrap z-[1]">
                  <div className="relative leading-[23px] inline-block min-w-[50px]">
                    10 Apr
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-t-none rounded-b-[11.59px] bg-black-black-100 flex flex-col items-start justify-start pt-[11.6px] px-0 pb-[11.1px] box-border gap-[12px] shrink-0 [debug_commit:1de1738] max-w-full z-[1] mt-[-1.2px] text-4xl-2 text-primary-dark-green">
                <div className="self-stretch h-[177.3px] relative rounded-t-none rounded-b-[11.59px] bg-black-black-100 hidden" />
                <div className="self-stretch flex flex-col items-start justify-start gap-[20.8px] max-w-full">
                  <div className="w-[383.7px] flex flex-row items-start justify-start py-0 px-[7px] box-border max-w-full shrink-0">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[11.6px] max-w-full">
                      <b className="relative leading-[32px] z-[1] mq450:text-lgi mq450:leading-[25px]">
                        Diet, Fitness
                      </b>
                      <div className="self-stretch relative text-lg-5 leading-[25.49px] text-black text-left z-[1]">
                        Get all the protein you need on a plant based diet
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[1.2px] relative box-border z-[1] border-t-[1.2px] border-solid border-black-black-200" />
                </div>
                <div className="flex flex-row items-start justify-start py-0 pr-3 pl-[11.6px] text-left text-lg-5 text-black">
                  <div className="flex flex-row items-start justify-start gap-[11.6px]">
                    <div className="relative leading-[26px] inline-block min-w-[95px] z-[1]">
                      Read more
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[12.5px] px-0 pb-0">
                      <img
                        className="w-[19.7px] h-[1.2px] relative z-[1]"
                        alt=""
                        src="/arrow-1-1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Component />
          </div>
          <div className="flex flex-col items-start justify-start pt-[179px] px-0 pb-0">
            <h1 className="m-0 relative text-inherit leading-[55px] font-normal font-inherit [transform:_rotate(-180deg)] mq450:text-17xl mq450:leading-[33px] mq750:text-29xl mq750:leading-[44px]">{`<`}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
