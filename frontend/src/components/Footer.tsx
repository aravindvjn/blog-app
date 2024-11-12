import {
  FavoriteBorderOutlined,
  FavoriteOutlined,
  Person2Outlined,
  Search,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];
  const classes = "cursor-pointer flex flex-col justify-center items-center";
  return (
    <div className="h-[56px] fixed bottom-0 left-0 right-0 flex justify-around items-center text-[#7E8A8C] text-[12px] bg-white">
      <div className={`${classes} ${pathname === '' ? "text-[#00B6DF]" : ""}`} onClick={() => navigate("/")}>
        <Search  />
        <p>Search</p>
      </div>

      <div className={`${classes} ${pathname === 'fav' ? "text-[#00B6DF]" : ""}`} onClick={() => navigate("/fav")}>
        {pathname === "fav" ? (
          <FavoriteOutlined  />
        ) : (
          <FavoriteBorderOutlined  />
        )}
        <p>Favorites</p>
      </div>
      <div className={`${classes} ${pathname === 'profile' ? "text-[#00B6DF]" : ""}`}>
        <Person2Outlined  />
        <p>Profile</p>
      </div>
    </div>
  );
};

export default Footer;
