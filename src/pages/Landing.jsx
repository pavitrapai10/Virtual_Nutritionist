import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent7 from "../components/FrameComponent7";
import Section from "../components/Section";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import ProductList from "../components/ProductList";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import Box from "../components/Box";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import React from 'react';

const Landing = () => {
  return (
    <div className="w-full relative bg-black-white overflow-hidden flex flex-col items-end justify-start pt-10 px-0 pb-0 box-border leading-[normal] tracking-[normal]">
      <FrameComponent9 />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[58px] pr-[391px] pl-5 box-border max-w-full text-left text-[150px] text-black-black-100 font-paragraph-p2-reg mq450:pr-5 mq450:box-border mq1275:pr-[195px] mq1275:box-border mq750:pr-[97px] mq750:box-border">
        <div className="w-[733px] flex flex-row items-start justify-start max-w-full">
          <h1 className="m-0 w-[733px] relative text-inherit font-bold font-inherit inline-block max-w-full z-[1] mq450:text-[37px] mq750:text-41xl">
            LIFESTYLE
          </h1>
          <div className="flex flex-col items-start justify-start pt-[74px] px-0 pb-0 ml-[-482px] text-21xl text-black">
            <h1 className="m-0 relative text-inherit leading-[55px] font-bold font-inherit z-[2] mq450:text-5xl mq450:leading-[33px] mq750:text-13xl mq750:leading-[44px]">
              Why healthy
            </h1>
          </div>
        </div>
      </section>
      <FrameComponent8 />
      <section className="w-[1360px] flex flex-col items-start justify-start pt-0 pb-[220px] pr-0 pl-5 box-border gap-[71px] max-w-full text-left text-21xl text-black font-paragraph-p2-reg mq450:gap-[18px] mq1100:pb-[93px] mq1100:box-border mq1275:pb-[143px] mq1275:box-border mq750:gap-[35px] mq750:pb-[60px] mq750:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[100px] max-w-full mq450:gap-[25px] mq750:gap-[50px]">
          <FrameComponent7 />
          <Section />
        </div>
        <FrameComponent5 />
        <div
          className="w-[987px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[62px] max-w-full mq1100:gap-[31px] mq750:gap-[15px]"
          data-scroll-to="section4Container"
        >
          <div className="relative leading-[59px] inline-block max-w-full mq450:text-5xl mq450:leading-[33px] mq750:text-13xl mq750:leading-[44px]">
            <span>
              <span>What is a</span>
            </span>
            <b className="text-31xl text-primary-red">
              <span>{` `}</span>
              <span>HealthyBite</span>
            </b>
            <span> for you ?</span>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-xl mq1100:flex-wrap">
            <div className="h-[331.8px] w-[433px] flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border min-w-[433px] max-w-full mq1100:flex-1 mq750:min-w-full">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover mq1100:self-stretch mq1100:w-auto"
                loading="lazy"
                alt=""
                src="/pngwing-9@2x.png"
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-[35px] min-w-[315px] mq450:gap-[17px] mq1100:flex-1">
              <div className="flex flex-row items-start justify-start gap-[25px]">
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <div className="w-[25px] h-[25px] relative shadow-[0px_1px_5px_rgba(0,_0,_0,_0.25)] rounded-[50%] [background:linear-gradient(180deg,_#dc2f39,_#d26e67_44.06%,_#c7b198_71.15%,_#beebc2)]" />
                </div>
                <div className="relative leading-[27px] inline-block min-w-[110px] mq450:text-base mq450:leading-[22px]">
                  Diet tracker
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[25px]">
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <div className="w-[25px] h-[25px] relative shadow-[0px_1px_5px_rgba(0,_0,_0,_0.25)] rounded-[50%] [background:linear-gradient(180deg,_#dc2f39,_#d26e67_44.06%,_#c7b198_71.15%,_#beebc2)]" />
                </div>
                <div className="relative leading-[27px] mq450:text-base mq450:leading-[22px]">
                  Best nutrition advice
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[25px]">
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <div className="w-[25px] h-[25px] relative shadow-[0px_1px_5px_rgba(0,_0,_0,_0.25)] rounded-[50%] [background:linear-gradient(180deg,_#dc2f39,_#d26e67_44.06%,_#c7b198_71.15%,_#beebc2)]" />
                </div>
                <div className="relative leading-[27px] mq450:text-base mq450:leading-[22px]">
                  Exercise portal
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[25px]">
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <div className="w-[25px] h-[25px] relative shadow-[0px_1px_5px_rgba(0,_0,_0,_0.25)] rounded-[50%] [background:linear-gradient(180deg,_#dc2f39,_#d26e67_44.06%,_#c7b198_71.15%,_#beebc2)]" />
                </div>
                <div className="relative leading-[27px] inline-block min-w-[123px] mq450:text-base mq450:leading-[22px]">
                  Meal planner
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[25px]">
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <div className="flex flex-col items-start justify-start gap-[37px]">
                    <div className="w-[25px] h-[25px] relative shadow-[0px_1px_5px_rgba(0,_0,_0,_0.25)] rounded-[50%] [background:linear-gradient(180deg,_#dc2f39,_#d26e67_44.06%,_#c7b198_71.15%,_#beebc2)]" />
                    <div className="w-[25px] h-[25px] relative shadow-[0px_1px_5px_rgba(0,_0,_0,_0.25)] rounded-[50%] [background:linear-gradient(180deg,_#dc2f39,_#d26e67_44.06%,_#c7b198_71.15%,_#beebc2)]" />
                    <div className="w-[25px] h-[25px] relative shadow-[0px_1px_5px_rgba(0,_0,_0,_0.25)] rounded-[50%] [background:linear-gradient(180deg,_#dc2f39,_#d26e67_44.06%,_#c7b198_71.15%,_#beebc2)]" />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[35px] mq450:gap-[17px]">
                  <div className="relative leading-[27px] mq450:text-base mq450:leading-[22px]">
                    Recipes database
                  </div>
                  <div className="relative leading-[27px] mq450:text-base mq450:leading-[22px]">
                    One stop shop for nutritions
                  </div>
                  <div className="relative leading-[27px] inline-block min-w-[109px] mq450:text-base mq450:leading-[22px]">
                    Community
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-[798.5px] absolute !m-[0] top-[-37px] right-[0px] left-[0px] max-w-full shrink-0 flex items-center justify-center z-[4]">
        <img
          className="w-full h-full overflow-hidden shrink-0 object-contain absolute left-[0px] top-[3px] [transform:scale(1.025)]"
          alt=""
          src="/rectangle-3.svg"
        />
      </div>
      <div className="w-[1571px] h-[850.5px] absolute !m-[0] top-[-59px] left-[-89px] z-[2] flex items-center justify-center">
        <img
          className="w-full h-full z-[2] object-contain absolute left-[0px] top-[3px] [transform:scale(1.024)]"
          alt=""
          src="/rectangle-4-1.svg"
        />
      </div>
      <section
        className="mr-[-903.1999999999998px] mb-[150px] w-[2552.2px] flex flex-col items-start justify-start gap-[100px] max-w-[178%] shrink-0 z-[4] mq450:gap-[25px] mq750:gap-[50px]"
        data-scroll-to="section5"
      >
        <FrameComponent4 />
        <ProductList />
      </section>
      <section className="self-stretch h-[154px] flex flex-row items-start justify-end pt-0 pb-[150px] pr-[51px] pl-[49px] box-border max-w-full mq750:pl-6 mq750:pr-[25px] mq750:box-border">
        <div className="self-stretch flex-1 relative [background:radial-gradient(50%_50%_at_50%_50%,_#32794f,_rgba(50,_121,_79,_0))] max-w-full z-[4]" />
      </section>
      <section className="w-full h-[2622px] absolute !m-[0] right-[0px] bottom-[2710px] left-[0px]">
        <img
          className="absolute top-[0px] left-[965px] w-[753.1px] h-[897.9px] object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/oranges@2x.png"
        />
        <div className="absolute top-[712px] left-[-19px] w-[1475px] h-[1885px] z-[2] flex items-center justify-center">
          <img
            className="w-full h-full z-[2] object-contain absolute left-[0px] top-[0px] [transform:scale(1.009)]"
            alt=""
            src="/rectangle-24.svg"
          />
        </div>
        <div className="absolute top-[767px] left-[-17px] w-[1548px] h-[1855px] z-[3] flex items-center justify-center">
          <img
            className="w-full h-full z-[3] object-contain absolute left-[0px] top-[0px] [transform:scale(1.009)]"
            alt=""
            src="/rectangle-25.svg"
          />
        </div>
      </section>
      <FrameComponent2 />
      <FrameComponent1 />
      <Box />
      <FrameComponent />
      <Footer />
    </div>
  );
};

export default Landing;
