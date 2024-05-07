import { FunctionComponent, useCallback, useEffect } from "react";
import LogicGate from "./LogicGate";
import LogicGatee from "./LogicGatee";
interface FrameComponentProps {
userId: string;


}
const Naav: FunctionComponent<FrameComponentProps> = ({    userId}) => {
  const onLogoPitchini1Click = useCallback(() => {
    // Please sync "Home Page" to the project
  }, []);
  useEffect(() => {
    console.log("nav")
    console.log(userId)
    console.log("nav")
  }, [userId])

  return (
    <header className="absolute left-0 top-[0px] z-[10] w-screen  self-stretch flex flex-row items-start justify-end max-w-full text-center text-base-1 text-gray-200 font-titre-grey">
      <div className="w-screen  flex flex-row items-start justify-start py-0 pr-0 pl-5 box-border relative max-w-full ">
        <img
          className="h-[44.8px] w-[229.6px] absolute !m-[0] top-[12.8px] bottom-[13.6px] left-[-17px] max-h-full object-contain cursor-pointer z-[1]"
          loading="lazy"
          alt=""
          src="/logo-pitchini-1@2x.png"
          onClick={onLogoPitchini1Click}
        />
        <LogicGatee userId={userId} />
      </div>
    </header>
  );
};

export default Naav;
