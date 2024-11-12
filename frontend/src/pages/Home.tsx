import {
  CategoryOutlined,
  Menu,
  Person2Outlined,
  Title,
} from "@mui/icons-material";
import FooterWrapper from "../components/FooterWrapper";
import SearchInput from "../components/SearchInput";
import ItemCards from "../components/ItemCards";

const Home = () => {
  return (
    <FooterWrapper>
      <Menu className="text-[#7E8A8C]" />
      <p className="text-[25px] font-thin py-2">Book Search</p>
      <SearchInput />
      <div className="flex gap-3 py-3 px-0.5 overflow-x-scroll">
        <ItemCards>
          <Title fontSize="small" /> <p>Title</p>
        </ItemCards>
        <ItemCards>
          <Person2Outlined fontSize="small" /> <p>Author</p>
        </ItemCards>
        <ItemCards>
          <CategoryOutlined fontSize="small" /> <p>Subject</p>
        </ItemCards>
      </div>
    </FooterWrapper>
  );
};

export default Home;
