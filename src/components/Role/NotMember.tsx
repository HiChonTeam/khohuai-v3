import { ReactChild, ReactChildren, ReactNode } from "react";
import { useAppSelector } from "../../hook";

interface AuxProps {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[] | ReactNode ;
}

const NotMember = ({ children }: AuxProps) => {
  const { loggedIn } = useAppSelector((state) => state.auth);

  if (loggedIn === false) {
    return <div>{children}</div>;
  }
  return <div></div>
};

export default NotMember;