import {FC, ReactNode} from "react";

interface Props {
    children: ReactNode
}



const LoginPage: FC<Props> = ({children}) => {
    return<>
    {children}
    </>
}
export {LoginPage};