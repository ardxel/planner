import {Normalize} from "styled-normalize";
import {Outlet} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";

const AppLayout = () => (
  <>
    <Normalize/>
    <Provider store={ store }>
      <Outlet/>
    </Provider>
  </>
)

export default AppLayout;