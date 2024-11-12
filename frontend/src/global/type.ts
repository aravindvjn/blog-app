import React from "react";

export type UserDataType = {
    id: string;
    name: string;
    created_at: string;
}
export type ContextType = {
    user: UserDataType | null;
    setUser: React.Dispatch<React.SetStateAction<UserDataType | null>>
}
export type ChildrenType = {
    children?: React.ReactNode | undefined;
}