const FrameComponent = () => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[75px] box-border gap-[75px] max-w-full text-left text-81xl text-black-black-100 font-paragraph-p2-reg mq450:gap-[19px] mq1100:pb-[49px] mq1100:box-border mq750:gap-[37px] mq750:pb-8 mq750:box-border">
      <div className="self-stretch flex flex-col items-start justify-start pt-[60px] px-[100px] pb-[50px] box-border relative gap-[40px] max-w-full z-[1] mq1100:pl-[50px] mq1100:pr-[50px] mq1100:box-border mq750:gap-[20px] mq750:pt-[39px] mq750:px-[25px] mq750:pb-8 mq750:box-border">
        <div
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-honeydew"
          data-scroll-to="rectangle"
        />
        <div className="w-[423px] flex flex-row items-start justify-start max-w-full">
          <h1 className="m-0 w-[423px] relative text-inherit font-bold font-inherit inline-block max-w-full z-[1] mq450:text-11xl mq750:text-31xl">
            RESULTS
          </h1>
          <div className="flex flex-col items-start justify-start pt-[46px] px-0 pb-0 box-border max-w-full ml-[-373px] text-13xl text-black">
            <h2 className="m-0 relative text-inherit leading-[44px] font-bold font-inherit z-[2] mq450:text-lgi mq450:leading-[26px] mq750:text-7xl mq750:leading-[35px]">
              HealthyBite reviews
            </h2>
          </div>
        </div>
        <div className="w-[794px] flex flex-row items-start justify-start py-0 px-1 box-border max-w-full text-13xl text-primary-dark-green">
          <div className="flex-1 flex flex-col items-end justify-start gap-[50px] max-w-full mq450:gap-[25px]">
            <div className="self-stretch shadow-[-4px_4px_7px_rgba(0,_0,_0,_0.25)] rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-black-white flex flex-col items-center justify-start py-10 pr-5 pl-[21px] box-border relative gap-[50px] max-w-full z-[1] mq450:pt-[26px] mq450:pb-[26px] mq450:box-border mq750:gap-[25px]">
              <div className="w-[786px] h-[402px] relative shadow-[-4px_4px_7px_rgba(0,_0,_0,_0.25)] rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-black-white hidden max-w-full z-[0]" />
              <div className="w-[605px] flex flex-col items-start justify-start gap-[25px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                  <h2 className="m-0 relative text-inherit leading-[44px] font-bold font-inherit z-[1] mq450:text-lgi mq450:leading-[26px] mq750:text-7xl mq750:leading-[35px]">
                    10 kgs in 3 weeks
                  </h2>
                </div>
                <div className="self-stretch relative text-xl leading-[27px] text-black z-[1] mq450:text-base mq450:leading-[22px]">
                  This platform is like the best thing that has happened to my
                  health. I was shocked how my cravings were gone after only a
                  couple of days and not wanting to eat between meals really
                  helped. Losing 6 kg in only 3 weeks is fantastic, but the best
                  part is the health improvement.
                </div>
              </div>
              <div className="w-[605px] flex flex-row items-start justify-center max-w-full text-9xl text-black">
                <div className="w-[305px] flex flex-col items-start justify-start gap-[5px]">
                  <h3 className="m-0 relative text-inherit leading-[38px] font-bold font-inherit z-[1] mq450:text-3xl mq450:leading-[30px]">
                    Anshuman Khuranna
                  </h3>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-[19px] text-lg">
                    <div className="flex-1 relative leading-[25px] z-[1]">
                      3 week weight loss meal plan
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[454px] h-full absolute !m-[0] top-[0px] right-[-446px] bottom-[0px] rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none max-h-full z-[2] flex items-center justify-center">
                <img
                  className="w-full h-full z-[2] object-contain absolute left-[4px] top-[4px] [transform:scale(1.035)]"
                  loading="lazy"
                  alt=""
                  src="/rectangle-17@2x.png"
                />
              </div>
            </div>
            <div className="w-[334px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <div className="flex flex-row items-start justify-start gap-[10px] z-[1]">
                <div className="h-[15px] w-[15px] relative rounded-[50%] bg-secondary-light-green" />
                <div className="h-[15px] w-[15px] relative rounded-[50%] bg-primary-dark-green" />
                <div className="h-[15px] w-[15px] relative rounded-[50%] bg-secondary-light-green" />
                <div className="h-[15px] w-[15px] relative rounded-[50%] bg-secondary-light-green" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1387px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-13xl text-black">
        <div className="relative mq450:text-lgi mq750:text-7xl">
          <p className="m-0">
            <span className="text-13xl leading-[44px] font-paragraph-p2-reg text-black">{`A whole year of `}</span>
            <b className="text-21xl leading-[55px] font-paragraph-p2-reg text-primary-red">
              HEALTHYBITE
            </b>
            <span className="leading-[44px]"> costs about</span>
          </p>
          <p className="m-0 leading-[44px]">
            the same as 1 hour with a nutrition expert
          </p>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
