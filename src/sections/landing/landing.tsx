"use client";
import Layout from "@/layouts/layout";

export default function Landing() {
  const chooseData = [
    { icon: "assets/landing/icon1.png", content: "Cost-<br/>Effectiveness" },
    {
      icon: "assets/landing/icon2.png",
      content: "Investing in Your Startup's<br/> Success",
    },
    {
      icon: "assets/landing/icon3.png",
      content: "Multilingual Support-<br/> Overcoming Language Barriers",
    },
  ];

  const offerData = [
    {
      photo: "assets/landing/offer1.png",
      content:
        "Continuous Delivery With<br/> Dedicated UX/UI<br/> Designers and Exceptional<br/> Software Developers",
    },
    {
      photo: "assets/landing/offer2.png",
      content: "Free Consultation With<br/> Our CTO",
    },
    {
      photo: "assets/landing/offer3.png",
      content: "Result-Driven<br/> Attitude",
    },
    {
      photo: "assets/landing/offer4.png",
      content: "nvesting In Your<br/> Startup's Success",
    },
    {
      photo: "assets/landing/offer5.png",
      content: "Solid Infrastructure<br> & Robust Backend",
    },
    {
      photo: "assets/landing/offer6.png",
      content:
        "Dedicated New<br/> Technologies Like<br/> Generative AI, Machine<br/> Learning, And Blockchain",
    },
  ];
  return (
    <Layout>
      <div className="h-[940px] bg-[#F8FBFF] mt-[-100px]">
        <img
          src="assets/landing/Vector37.png"
          alt="Global Wolves Logo"
          className="sm:w-[238px] sm:h-[418px] absolute sm:top-[522px] top-[780px] left-[-69px] w-24 h-40"
        />
        <img
          src="assets/landing/Vector31.png"
          alt="Global Wolves Logo"
          className="w-[74px] h-[34px] absolute top-[710px] left-[-37px]"
        />
        <img
          src="assets/landing/Vector34.png"
          alt="Global Wolves Logo"
          className="w-[56px] h-[41px] absolute top-[720px] md:left-[330px] left-40"
        />
        <img
          src="assets/landing/Vector33.png"
          alt="Global Wolves Logo"
          className="w-[62px] h-[45px] absolute top-[500px] md:left-[430px] let-[200px]"
        />
        <img
          src="assets/landing/Vector36.png"
          alt="Global Wolves Logo"
          className="sm:w-[181px] sm:h-[59px] absolute top-[800px] right-[-10px] w-[90px] h-[30px]"
        />
        <img
          src="assets/landing/Vector32.png"
          alt="Global Wolves Logo"
          className="w-[50px] h-[52px] absolute top-[410px] md:right-[420px] right-52"
        />
        <img
          src="assets/landing/man.png"
          alt="Global Wolves Logo"
          className="w-[74px] h-20 absolute top-[530px] md:right-[220px] right-28"
        />
        <img
          src="assets/landing/Vector35.png"
          alt="Global Wolves Logo"
          className="w-[83px] h-[76px] absolute top-[198px] right-0"
        />
        <div className="absolute top-[786px] flex flex-wrap w-full items-center justify-center ">
          <div className="w-[308px] h-[308px] rounded-full border-4 border-white">
            <p className="text-center mt-6 text-[#545454]">
              Scroll to Discover
            </p>
            <img
              src="assets/landing/arrow_down.png"
              alt="Global Wolves Logo"
              className="w-[40px] h-[47px] ml-[134px] mt-5"
            />
          </div>
        </div>

        <div className="absolute top-0 flex flex-wrap w-full h-[940px] mt-[-11px] items-center justify-center ">
          <div className="max-w-[1300px] mr-14 opacity-10">
            <h1 className="outline-text text-center font-extrabold text-customBlue-dark border-1 leading-[144px] sm:text-[90px] text-6xl">
              TRANSFROM YOUR IDEAS INTO REALITY
            </h1>
            <div className="flex justify-center">
              <span className="outline-text text-center font-extrabold text-customBlue-dark border-1 leading-[144px] sm:text-[90px] text-6xl px-4">
                MVP IN JUST 3 WEEKS!
              </span>
            </div>
          </div>
        </div>

        <div className="absolute top-0 flex flex-wrap w-full h-[940px] mt-[11px] items-center justify-center ">
          <div className="max-w-[1300px] ml-14">
            <h1 className="text-center sm:text-[90px] text-6xl font-extrabold text-[#191919] leading-[144px]">
              TRANSFROM YOUR IDEAS INTO REALITY
            </h1>
            <div className="flex justify-center">
              <span className="text-center sm:text-[90px] text-6xl font-extrabold text-customBlue-dark leading-[144px] bg-[#DBEDFF]/20 px-4">
                MVP IN JUST 3 WEEKS!
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-40">
        <div className="flex justify-center">
          <div className=" w-40 h-[6px] bg-customBlue-light" />
        </div>
        <div className="flex justify-center text-center mt-8 text-[56px] text-[#191919] leading-[68px] font-extrabold ">
          Why Choose Us?
        </div>

        <div className="flex justify-center mt-[34px]">
          <div className="max-w-[1283px] text-center font-normal text-[22px] leading-10 text-[#454545]">
            We understand the importance of cost-effective and fast MVP
            development to stand out in the market. Our services offer
            reasonable pricing and a complimentary program tailored to your idea
            for future growth. We support four <br />
            languages:
            <span className="font-semibold">
              English, Spanish, Japanese, and Korean.
            </span>
          </div>
        </div>

        <div className="mt-[60px] flex justify-center">
          <div className="grid xl:grid-cols-3 gap-4 grid-cols-1">
            {chooseData.map((item, key) => (
              <div
                key={key}
                className="max-w-[440px] max-h-[394px] rounded-md border border-[#EBDCD6] mx-[33px]"
              >
                <div className="mt-[60px]  flex justify-center">
                  <img src={item.icon} alt="icon" className="w-28 h-28" />
                </div>

                <div className="mt-[92px]  flex justify-center">
                  <p
                    className="text-center font-semibold text-2xl leading-[38px] text-[#363636]"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  ></p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-40 xl:mr-[195px] mr-0">
          <div className=" h-[674px] rounded-lg bg-[#F8FBFF]  relative">
            <div className="float-right">
              <div className="mt-[100px]">
                <div className="w-20 h-[6px] bg-customBlue-light" />
                <p className="mt-8 text-[56px] text-[#191919] font-extrabold leading-[76px] mr-[66px]">
                  We Value Your Startup Ideas
                </p>
                <p className="max-w-[850px] font-normal leading-10 text-[22px] text-[#454545] mr-[66px]">
                  We're here to transform your business idea into reality. Let's
                  bring your vision to life and make the world a better place
                  together.
                </p>
              </div>
              <div className="absolute bottom-0 right-0">
                <div className="w-[47.8px] h-[47px] bg-[#EBF5FF] mr-[47.8px] rounded-tl-[4px] rounded-tr-[4px] rounded-bl-[4px]" />
                <div className="w-[47.8px] h-[47px] bg-[#EBF5FF] ml-[47.8px] rounded-tr-[4px] rounded-br-lg rounded-bl-[4px]" />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="assets/landing/photo1.png"
              alt="discuss photo"
              className="xl:mx-60 mx-0 xl:w-[1240px] md:w-[700px] w-[400px] xl:h-[600px] md:h-[350px] h-[200px] xl:mt-[-300px] md:mt-[-175px] mt-[-100px] z-[99] "
            />
          </div>
        </div>
      </div>

      <div className="mt-[150px]">
        <p className="text-center font-extrabold text-[56px] leading-[68px] text-[#191919]">
          What We Offer
        </p>

        <div className="mt-[60px] flex justify-center relative">
          <div className="grid xl:grid-cols-2 gap-4 grid-cols-1">
            {offerData.map((item, key) => (
              <div
                key={key}
                className={`md:flex block items-center mx-[57px] ${
                  key % 2 !== 0 ? "xl:mt-[180px]" : ""
                }`}
              >
                <img src={item.photo} alt="photo" />
                <p
                  className="font-semibold text-[26px] leading-[50px] ml-[42px] text-[#1F1F1F]"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                ></p>
              </div>
            ))}
          </div>

          <div className="hidden absolute h-full xl:grid place-content-center mr-14">
            <img src="assets/landing/dotted-line.png" alt=""></img>
          </div>
        </div>
      </div>

      <div className="mt-40 xl:ml-[195px] ml-0">
        <div className="">
          <p className="font-extrabold text-[56px] leading-[68px] text-[#191919]">
            What Our Clients Says
          </p>
          <div className="float-right w-40 h-[6px] bg-customBlue-light mt-[-34px] xl:mr-[195px] mr-0"></div>
        </div>

        <div className="mt-[60px] py-20 min-h-[702px] bg-[#F8FBFF] flex">
          <div className="ml-[57px] bg-white max-w-[1270px] min-h-[542px] p-20">
            <img src="assets/landing/mark.png" alt="" />
            <div className="max-w-[1050px] mt-10">
              <p className="font-medium text-[28px] leading-[52px] text-[#363636]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 These are usually used when a text is required purely to fill a
                space.
              </p>
            </div>
            <div className="mt-14 md:flex items-center">
              <img
                src="assets/landing/avatar.png"
                alt=""
                className="h-[94px] w-[94px] rounded-full"
              />
              <div className="ml-8">
                <p className="font-bold text-[30px] text-[#1F1F1F] leading-[36px]">
                  Jhon Jacob
                </p>
                <p className="mt-2 font-normal text-[18px] leading-[30px] text-[#454545]">
                  Software & E-commerce Startups
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="ml-20 w-[66px] h-[69px] bg-customBlue-dark pt-[29px]">
              <img
                src="assets/landing/up_arrow.png"
                alt=""
                className="w-10 h-10 ml-[13px]"
              />
            </div>
            <div className="ml-20 w-[66px] h-[69px] hover:bg-customBlue-dark pt-[29px]">
              <img
                src="assets/landing/down_arrow.png"
                alt=""
                className="w-10 h-10 ml-[13px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="my-40">
        <p className="text-center font-extrabold text-[56px] leading-[68px] text-[#191919]">
          watching our process
        </p>
        <div className="mt-[60px] flex justify-center">
          <img
            src="assets/landing/video.png"
            alt=""
            className="xl:w-[1220px] xl:h-[580px] md:w-[915px] md:h-[435px] w-[400px] h-[205px]"
          ></img>
        </div>
      </div>
    </Layout>
  );
}
