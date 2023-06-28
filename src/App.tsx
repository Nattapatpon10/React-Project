import { FC } from "react";
import { LoginPage } from "./page/LoginPage";
import { LoginForm } from "./component/LoginForm";


const App:FC = () => {
  return(<>
  <LoginPage>
    <LoginForm />
  </LoginPage>
  </>
  );
}
export { App };
