import { Outlet } from "react-router";
import './root.scss';

export default function Root() {
  return (
    <>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}