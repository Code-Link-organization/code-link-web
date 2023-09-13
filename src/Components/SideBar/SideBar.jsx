import { Outlet } from 'react-router-dom';

function SideBar({ isFixed }) {
  return (
    <div
      className={`mx-auto w-1/4 ${!isFixed ? '' : 'fixed top-0 right-0 overflow-y-auto custom-scrollbar '} h-full`}
    >
      <div className="w-[408px] mx-auto">
        <div className="px-[35px] pt-[32px] flex flex-wrap justify-between h-fit w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
