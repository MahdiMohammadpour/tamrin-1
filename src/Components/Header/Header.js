import logo from "../../Resources/images/logo.gif";
import Dropdown from "../Menu/Menu";
import { BiUserCircle, BiSolidPlane } from "react-icons/bi";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const Header = () => {
  return (
    <div
      className={
        "h-14 w-full flex justify-between text-sm place-items-center shadow font-sans text-gray-500 font-medium"
      }
    >
      <div className="flex mr-[7%] cursor-pointer">
        <div>
          <img src={logo} className="w-36" />
        </div>
        <div className="flex place-items-center mr-10">
          <div className="flex">
            <div className="border-l border-slate-200 px-3">
              <Dropdown
                title="بلیط"
                options={["پرواز داخلی", "پرواز خارجی", "قطار", "اتوبوس"]}
              />
            </div>
            <div className="border-l border-slate-200 px-3">
              <Dropdown title="اقامت" options={["هتل", "ویلا و اقامتگاه"]} />
            </div>
            <div className="border-l border-slate-200 px-3">
              <Dropdown title="تور" options={[]} />
            </div>
            <div className="pr-3">
              <Dropdown
                title="بیشتر"
                options={["علی باباپلاس", "مجله علی بابا", "بیمه مسافرتی"]}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex pl-[10%]">
        <div className="flex hover:bg-slate-50 py-2 px-3 rounded-md cursor-pointer">
          <AiOutlineQuestionCircle className="text-xl ml-1" />
          <p>مرکز پشتیبانی آنلاین</p>
        </div>
        <div className="flex mr-4 hover:bg-slate-50 py-2 px-3 rounded-md cursor-pointer">
          <BiSolidPlane className="text-xl ml-1" />
          <p>سفرهای من</p>
        </div>
        <div className="flex mr-4 hover:bg-slate-50 py-2 px-3 rounded-md cursor-pointer">
          <BiUserCircle className="text-xl ml-1" />
          <p>ورود یا ثبت نام</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
