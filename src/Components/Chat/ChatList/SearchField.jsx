import searchIcon from '../../../assets/images/global/searchIcon.svg'

function SearchField() {
  return (
    <div className='input-form h-8 bg-white rounded-md shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] mb-6'>
        <img src={searchIcon} alt='placeholder icon' className='absolute left-4 top-1/2 -translate-y-1/2'/>
        <input type='text' placeholder='Search' className='input-field rounded-md' />
    </div>
  )
}

export default SearchField