
const FooterNav = ({ title, options }) => {
  return (
    <div className="flex flex-col p-[0.5rem]">
      <h2 className="font-semibold text-[0.9rem] mb-[0.2rem]">{title}</h2>
      {options.map((option) => {
        return <p className="mt-[0.4rem]  text-[0.8rem]">{option}</p>;
      })}
    </div>
  );
};

export default FooterNav;
