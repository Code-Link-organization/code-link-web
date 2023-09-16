import PropTypes from 'prop-types';
import searchIcon from '../../assets/images/global/searchIcon.svg';

function SearchField({ setKeyWord, getSearch, setCurrent, type }) {
  const changeHandler = async (e) => {
    setKeyWord(e.target.value);
    const resData = await getSearch();
    if (resData.ok) {
      if (type === 'users') {
        setCurrent(resData.data.users);
      } else if (type === 'teams') {
        setCurrent(resData.data.teams);
      }
    }
  };

  return (
    <div className="relative w-full bg-white rounded-2xl shadow-[0px_6px_20px_0px_rgba(218,218,218,0.3)]">
      <input
        onChange={changeHandler}
        type="text"
        placeholder="Search..."
        className="py-4 pl-10 pr-8 border w-full rounded-2xl outline-none border-none focus:outline-none focus:ring focus:border-blue-500"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-2">
        <img src={searchIcon} alt="Search Icon" />
      </div>
    </div>
  );
}

SearchField.propTypes = {
  setKeyWord: PropTypes.func.isRequired,
  getSearch: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default SearchField;
