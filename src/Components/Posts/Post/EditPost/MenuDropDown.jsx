/* eslint-disable react/prop-types */
export function MenuDropdown({ buttons, isOpen }) {
  return isOpen && (
    <div className='absolute top-full left-1/2 transform -translate-x-1/2 mt-2 p-4 rounded-md shadow-2xl bg-white'>
      {buttons.map((button, index) => (
        <button key={index} onClick={button.onClick} className='border-b-dark-primary'>{button.label}</button>
      ))}
    </div>
  );
}