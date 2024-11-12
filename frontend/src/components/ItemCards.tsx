import { ChildrenType } from "../global/type"

const ItemCards = ({children}:ChildrenType) => {
  return (
    <div className="flex gap-1.5 justify-center text-[15px] items-center text-gray-600 rounded-lg bg-white px-3 py-2 shadow-sm shadow-gray-300">
      {children}
    </div>
  )
}

export default ItemCards
