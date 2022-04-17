import { ReactChild, ReactChildren, ReactNode, useEffect } from "react";
import { useAppSelector } from "../../hook";

interface AuxProps {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[] | ReactNode ;
}

const MemberOnly = ({ children }: AuxProps) => {

  const authState = useAppSelector((state) => state.auth);

  useEffect(() => {
    
  }, [authState])
  

  if (authState.loggedIn && authState.role === "member") {
    return <div>{children}</div>;
  }
  return <div></div>
};

export default MemberOnly;
