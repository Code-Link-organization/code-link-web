import { Outlet } from 'react-router-dom';

function HomeSideBar({ isFixed }) {
  return (
    <div
      className={`mx-auto w-1/4 ${isFixed ? 'fixed top-0 right-0' : ''} scroll-y overflow-y-auto custom-scrollbar h-screen`}
    >
      <div className="w-[408px] mx-auto">
        <div className="px-[35px] pt-[32px] flex flex-wrap justify-between h-fit w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default HomeSideBar;
