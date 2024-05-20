import FrameComponent6 from "./FrameComponent6";

const Section = () => {
  return (
    <div
      className="w-[1260px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[28px] max-w-full text-left text-9xl text-black font-paragraph-p2-reg"
      data-scroll-to="section3Container"
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[22px] box-border max-w-full">
        <div className="w-[508px] relative leading-[97px] inline-block max-w-full mq450:text-lgi">
          <span>
            <span>Have a</span>
            <span className="text-5xl whitespace-pre-wrap">{`  `}</span>
          </span>
          <b className="text-41xl text-primary-red">HealthyBite</b>
          <span>
            <span className="text-5xl whitespace-pre-wrap">{`  `}</span>
            <span>for</span>
          </span>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-8 box-border gap-[15px] max-w-full text-xl">
        <div className="w-[1217px] flex flex-row items-start justify-between max-w-full gap-[20px] mq1275:flex-wrap mq1275:justify-center">
          <FrameComponent6
            pngwing7="/pngwing-7@2x.png"
            findADietYouLove="Find a diet you love"
            findANutritiousDietThatFi="Find a nutritious Diet that fits your lifestyle and food preferences. Take charge of your daily habits with one of the many ongoing Diets including Clean Eating and High Protein"
          />
          <FrameComponent6
            pngwing7="/pngwing-7-1@2x.png"
            findADietYouLove="Start a simplified meal plan"
            findANutritiousDietThatFi="Follow a 7-21 day Meal Plan and get four pre-planned recipes a day. Depending on your health goals, there are many Meal Plans to choose from including Keto Burn and Vegan for a week."
            propPadding="28px 0px 0px"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1275:flex-wrap">
          <div className="h-1 w-[569px] relative [background:radial-gradient(50%_50%_at_50%_50%,_#599c68,_rgba(89,_156,_104,_0))] max-w-full" />
          <div className="h-1 w-[569px] relative [background:radial-gradient(50%_50%_at_50%_50%,_#599c68,_rgba(89,_156,_104,_0))] max-w-full" />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-end justify-start gap-[15px] max-w-full">
        <div className="w-[1217px] flex flex-row items-start justify-between max-w-full gap-[20px] mq1275:flex-wrap">
          <FrameComponent6
            pngwing7="/pngwing-7-2@2x.png"
            findADietYouLove="Track your way to success"
            findANutritiousDietThatFi="Track your activities and what you eat with the help of our food-, exercise- and water trackers to maintain a balanced everyday life."
            propPadding="39px 0px 0px"
          />
          <FrameComponent6
            pngwing7="/pngwing-7-3@2x.png"
            findADietYouLove="Start your own healthy journey"
            findANutritiousDietThatFi="To help you reach your goals and customize your health journey you can add your favorite meals, food items, recipes and exercises to your Favorites."
            propPadding="39px 0px 0px"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1275:flex-wrap">
          <div className="h-1 w-[569px] relative [background:radial-gradient(50%_50%_at_50%_50%,_#599c68,_rgba(89,_156,_104,_0))] max-w-full" />
          <div className="h-1 w-[569px] relative [background:radial-gradient(50%_50%_at_50%_50%,_#599c68,_rgba(89,_156,_104,_0))] max-w-full" />
        </div>
      </div>
    </div>
  );
};

export default Section;
