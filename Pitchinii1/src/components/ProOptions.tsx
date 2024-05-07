import { FunctionComponent, useCallback } from "react";

const ProOptions: FunctionComponent = () => {
  const onFrameButton2Click = useCallback(() => {
    // Please sync "Job Fiche1" to the project
  }, []);

  return (
    <section className="flex-1 flex flex-col items-start justify-start pt-[53px] px-0 pb-0 box-border max-w-[calc(100%_-_269px)] text-left text-13xl text-gray-1700 font-titre-grey mq850:pt-[34px] mq850:box-border mq850:max-w-full mq450:pt-[22px] mq450:box-border">
     
          <footer className="self-stretch flex-1 flex flex-col items-start justify-start shrink-0 [debug_commit:1de1738] max-w-full text-left text-sm-3 text-blue font-titre-grey">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start relative gap-[8.3px] max-w-full">
              <img
                className="self-stretch flex-1 relative rounded-3xl-8 max-w-full overflow-hidden max-h-full"
                alt=""
                src="/rectangle-3184.svg"
              />
              <div className="w-[624.3px] !m-[0] absolute top-[48.1px] left-[38.2px] flex flex-col items-center justify-start max-w-full z-[1]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[48.2px] max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[24.9px] max-w-full text-mini-9">
                    <div className="w-[549.7px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-w-full shrink-0">
                      <div className="self-stretch h-[29.1px] relative leading-[113%] font-semibold flex items-center shrink-0">
                        Create a editable template flyer
                      </div>
                      <div className="self-stretch h-[40.1px] relative text-sm-3 tracking-[-0.01em] leading-[145.45%] font-light text-dimgray-800 flex items-center shrink-0">
                        Price per hour : $25-$50 | Profil : Expert | Time : Less
                        than 1 mouth
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[5px] shrink-0 text-sm-3">
                      <div className="w-[181.8px] relative tracking-[-0.01em] leading-[22.4px] font-medium flex items-center">{`Description project : `}</div>
                      <div className="self-stretch relative text-xs-6 tracking-[-0.01em] leading-[145.45%] font-light text-gray-600 text-justify">
                        Edit a flyer that’s been started and allow it to be
                        editable.
                      </div>
                    </div>
                  </div>
                  <div className="w-[471.6px] flex flex-row flex-wrap items-start justify-start gap-[42.3px] max-w-full text-xs-6">
                    <div className="flex flex-row items-center justify-start gap-[12.5px]">
                      <img
                        className="h-[29.1px] w-[29.9px] relative object-contain"
                        loading="lazy"
                        alt=""
                        src="/pricetag-1@2x.png"
                      />
                      <div className="w-[54px] flex flex-col items-start justify-start py-0 px-0 box-border">
                        <div className="h-[22.2px] relative tracking-[-0.01em] leading-[145.45%] flex items-center shrink-0 min-w-[29px] whitespace-nowrap">
                          400$
                        </div>
                        <div className="w-[109.6px] relative text-3xs-1 tracking-[-0.01em] leading-[145.45%] font-light text-dimgray-800 flex items-center mt-[-2.5px]">
                          Fixed-price
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-start justify-start gap-[13.3px] min-w-[216px] max-w-full">
                      <img
                        className="h-[29.1px] w-[29.9px] relative object-contain"
                        loading="lazy"
                        alt=""
                        src="/expert-1@2x.png"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start gap-[3.3px]">
                        <div className="w-[94.6px] relative tracking-[-0.01em] leading-[11.6px] flex items-center">
                          Expert
                        </div>
                        <div className="self-stretch relative text-3xs-1 tracking-[-0.01em] leading-[145.45%] font-light text-dimgray-800 text-justify">{`I am willing to pay higher rates for the most experienced freelancers. `}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] box-border gap-[5px] max-w-full">
                    <div className="w-[181.8px] h-[24.1px] relative tracking-[-0.01em] leading-[145.45%] font-medium flex items-center shrink-0">
                      Skills and Expertise
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[14.1px]">
                      <button className="cursor-pointer py-1.5 px-5 bg-[transparent] rounded-[4.31px] overflow-hidden flex flex-row items-center justify-center border-[1.2px] border-solid border-dimgray-200 hover:bg-gray-1800 hover:box-border hover:border-[1.2px] hover:border-solid hover:border-gray-300">
                        <div className="relative text-sm-3 tracking-[-0.01em] font-medium font-montserrat text-dimgray-200 text-center inline-block min-w-[120px]">
                          Adobe Photoshop
                        </div>
                      </button>
                      <button className="cursor-pointer py-1.5 px-[17px] bg-[transparent] rounded-[4.31px] overflow-hidden flex flex-row items-center justify-center border-[1.2px] border-solid border-dimgray-200 hover:bg-gray-1800 hover:box-border hover:border-[1.2px] hover:border-solid hover:border-gray-300">
                        <div className="relative text-sm-3 tracking-[-0.01em] font-medium font-montserrat text-dimgray-200 text-center inline-block min-w-[119px]">
                          Adobe Illustrateur
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="w-[339.6px] flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] box-border gap-[9.1px] max-w-full">
                    <div className="w-[181.8px] relative tracking-[-0.01em] leading-[145.45%] font-medium flex items-center">
                      About the client
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-3xs-1 text-dimgray-800">
                      <div className="flex flex-row items-center justify-start py-0 px-0 gap-[6.2px]">
                        <img
                          className="h-[23.2px] w-[17.4px] relative object-cover"
                          loading="lazy"
                          alt=""
                          src="/verifiedbadge02-1@2x.png"
                        />
                        <div className="relative tracking-[-0.01em] leading-[145.45%] font-light inline-block min-w-[76px]">
                          Payment Verified
                        </div>
                      </div>
                      <img
                        className="h-[18.3px] w-[48.2px] relative object-contain"
                        loading="lazy"
                        alt=""
                        src="/103-1@2x.png"
                      />
                     
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] w-[114.2px] !m-[0] absolute bottom-[61.7px] left-[313px] flex flex-row items-start justify-start z-[2]"
                onClick={onFrameButton2Click}
              >
                <div className="flex-1 overflow-hidden flex flex-row items-start justify-start py-[11px] pr-[13px] pl-4 border-[1.8px] border-solid border-dgrad-color">
                  <div className="relative text-mini-9 tracking-[-0.01em] leading-[18.4px] font-medium font-montserrat text-orange text-center inline-block min-w-[82px]">
                    Apply Now
                  </div>
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[142px] !m-[0] absolute right-[312.5px] bottom-[61.5px] flex flex-row items-start justify-start z-[2]">
                <div className="flex-1 overflow-hidden flex flex-row items-end justify-start pt-0.5 pb-[11px] pr-[15px] pl-[18.3px] gap-[8.3px] border-[1.8px] border-solid border-blue">
                  <img
                    className="h-[27.7px] w-[27.7px] relative object-contain z-[1]"
                    alt=""
                    src="/heart@2x.png"
                  />
                  <div className="w-[68.9px] flex flex-col items-start justify-end pt-0 px-0 pb-[2.2px] box-border">
                    <div className="self-stretch relative text-mini-9 tracking-[-0.01em] font-medium font-montserrat text-blue text-center inline-block min-w-[68.9px] z-[1]">
                      Save Job
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </footer>
       
    </section>
  );
};

export default ProOptions;
