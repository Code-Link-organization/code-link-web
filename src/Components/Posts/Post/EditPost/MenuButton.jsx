/* eslint-disable react/prop-types */
import menuImg from '../../../../assets/images/posts/icons8-menu-vertical-50 1.svg';

export function MenuButton({ onClick }) {
  return (
    <button className="profile-button" onClick={onClick}>
      <img src={menuImg} alt="menu icon" />
    </button>
  );
}