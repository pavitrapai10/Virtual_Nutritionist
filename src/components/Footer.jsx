import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const onAboutUsTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='section3Container']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFeaturesTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='section4Container']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onBlogsTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='section6Container']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFoodTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='section5']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRecipesTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='liStContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onReviewsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSignInTextClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  return (
    <footer className="mr-[-3px] self-stretch flex flex-col items-center justify-start pt-[51px] px-5 pb-5 box-border relative gap-[72.4px] max-w-full text-left text-15xl-3 text-primary-dark-green font-paragraph-p2-reg mq450:gap-[18px] mq750:gap-[36px] mq750:pt-[33px] mq750:box-border">
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-secondary-medium-green" />
      <div className="w-[1240px] flex flex-col items-end justify-start gap-[25px] max-w-full">
        <div className="w-[1192.8px] flex flex-row items-start justify-center pt-0 px-5 pb-[35px] box-border max-w-full font-amita">
          <div className="h-[53px] flex flex-row items-end justify-start py-0 pr-0 pl-[15.3px] box-border z-[1]">
            <div className="mb-[-3.899999999999636px] flex flex-row items-start justify-start">
              <div className="h-[67px] w-[198px] relative inline-block shrink-0 [debug_commit:1de1738] mq450:text-2xl mq750:text-8xl">
                <span className="tracking-[0.04em]">Health</span>
                <span className="tracking-[0.1em]">y</span>
                <span className="tracking-[0.04em]">Bite</span>
              </div>
              <div className="h-[63.1px] w-16 flex flex-col items-start justify-start pt-[10.1px] px-0 pb-0 box-border ml-[-6px]">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full shrink-0 [debug_commit:1de1738] z-[1]"
                  alt=""
                  src="/group-11.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-[5px] pr-7 pl-[27px] box-border max-w-full text-xl text-black">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] z-[1] mq750:flex-wrap">
            <div
              className="relative leading-[27px] inline-block min-w-[84px] cursor-pointer mq450:text-base mq450:leading-[22px]"
              onClick={onAboutUsTextClick}
            >
              About us
            </div>
            <div
              className="relative leading-[27px] inline-block min-w-[82px] cursor-pointer mq450:text-base mq450:leading-[22px]"
              onClick={onFeaturesTextClick}
            >
              Features
            </div>
            <div
              className="relative leading-[27px] inline-block min-w-[51px] cursor-pointer mq450:text-base mq450:leading-[22px]"
              onClick={onBlogsTextClick}
            >
              Blogs
            </div>
            <div
              className="relative leading-[27px] inline-block min-w-[47px] cursor-pointer mq450:text-base mq450:leading-[22px]"
              onClick={onFoodTextClick}
            >
              Food
            </div>
            <div
              className="relative leading-[27px] inline-block min-w-[72px] cursor-pointer mq450:text-base mq450:leading-[22px]"
              onClick={onRecipesTextClick}
            >
              Recipes
            </div>
            <div
              className="relative leading-[27px] inline-block min-w-[75px] cursor-pointer mq450:text-base mq450:leading-[22px]"
              onClick={onReviewsTextClick}
            >
              Reviews
            </div>
            <div
              className="relative leading-[27px] inline-block min-w-[62px] cursor-pointer mq450:text-base mq450:leading-[22px]"
              onClick={onSignInTextClick}
            >
              Sign in
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[15px] box-border max-w-full text-base text-black-black-700">
          <div className="w-[874px] flex flex-row items-start justify-between gap-[20px] max-w-full z-[1] mq750:flex-wrap">
            <div className="relative leading-[22px]">{`Terms & conditions`}</div>
            <div className="relative leading-[22px] inline-block min-w-[101px]">
              Privacy policy
            </div>
            <div className="relative leading-[22px] inline-block min-w-[58px]">
              Contact
            </div>
            <div className="relative leading-[22px] inline-block min-w-[99px]">
              Cookie policy
            </div>
            <div className="relative leading-[22px] inline-block min-w-[61px]">
              Support
            </div>
          </div>
        </div>
        <div className="self-stretch h-1 relative [background:radial-gradient(50%_50%_at_50%_50%,_#32794f,_rgba(50,_121,_79,_0))] z-[1]" />
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full">
          <div className="w-[518.1px] flex flex-row items-start justify-between py-0 pr-px pl-0 box-border gap-[20px] max-w-full z-[1] mq750:flex-wrap mq750:justify-center">
            <img
              className="h-[52.6px] w-[52.6px] relative min-h-[53px]"
              loading="lazy"
              alt=""
              src="/1.svg"
            />
            <img
              className="h-[52.6px] w-[52.6px] relative min-h-[53px]"
              loading="lazy"
              alt=""
              src="/2.svg"
            />
            <img
              className="h-[52.6px] w-[52.6px] relative min-h-[53px]"
              loading="lazy"
              alt=""
              src="/3.svg"
            />
            <img
              className="h-[52.6px] w-[52.6px] relative min-h-[53px]"
              loading="lazy"
              alt=""
              src="/4.svg"
            />
            <img
              className="h-[52.6px] w-[52.6px] relative min-h-[53px]"
              loading="lazy"
              alt=""
              src="/5.svg"
            />
            <img
              className="h-[52.6px] w-[52.6px] relative min-h-[53px]"
              loading="lazy"
              alt=""
              src="/6.svg"
            />
          </div>
        </div>
      </div>
      <div className="w-[1240px] flex flex-row items-start justify-center max-w-full text-xl text-black-black-700 font-headline-h1-regular">
        <div className="w-[456px] relative leading-[24px] font-medium inline-block max-w-full z-[1] mq450:text-base mq450:leading-[19px]">
          © 2023 Cornea clinic PVT. LTD. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
