import { ChildrenType } from "../global/type";
import Footer from "./Footer";

const FooterWrapper = ({ children }: ChildrenType) => {
  return (
    <div className="p-5 bg-[#f6f6f6] min-h-screen pb-[60px]">
      {children}
      <Footer />
    </div>
  );
};

export default FooterWrapper;
