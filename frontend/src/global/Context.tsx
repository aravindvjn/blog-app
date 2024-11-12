import { createContext, useState } from "react";
import { ChildrenType, ContextType, UserDataType } from "./type";

const UserContext = createContext<ContextType | null>(null);

const UserProvider = ({ children }: ChildrenType) => {
  const [user, setUser] = useState<UserDataType | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
