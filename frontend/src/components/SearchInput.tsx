import { Search } from "@mui/icons-material"

const SearchInput = () => {
  return (
    <div className="w-full relative">
        <Search className="absolute text-[#7E8A8C] top-[6px] left-3" />
       <input type="text" className="w-full pl-10 py-1.5 bg-[#EBEDED] placeholder:font-light placeholder:text-[14px] rounded-md"  placeholder="Search for books, authors, or subjects"/>
    </div>
  )
}

export default SearchInput
