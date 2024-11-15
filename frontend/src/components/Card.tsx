type CardType = {
  img?: string;
  title?: string;
  author?: string;
};
import reactPic from "../assets/react.svg";
const Card = ({ img, title = "Title", author = "Unknown" }: CardType) => {
  return (
    <div className="flex gap-4 p-5 bg-white rounded-lg shadow-sm">
      <img
        src={img || reactPic}
        className="bg-black w-20 h-20 object-cover rounded-sm"
        alt=""
      />
      <div className="w-full overflow-hidden">
        <p className="font-bold">
          {title?.length > 30 ? `${title.slice(0, 30)}...` : title}
        </p>
        <p className="text-sm opacity-50 ">
          {author?.length > 15 ? `${author.slice(0, 15)}...` : author}
        </p>
      </div>
    </div>
  );
};

export default Card;
