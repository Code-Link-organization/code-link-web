/* eslint-disable react/prop-types */
function Input({placeholder,value,setFormData,formData,type}) {
  const changeHandler =(e)=>{
    setFormData({...formData,[value]:e.target.value})
  }
  console.log(type)

  return (
    <input type={!type?'text':type} lang="en"  placeholder={placeholder} onChange={changeHandler} value={formData[value]} className={`w-[350px] max-w-full pl-8  rounded-2xl mb-5
     shadow-[0px_6px_20px_0px_rgba(218,_218,_218,_0.3)] outline-none py-5 transition-all duration-300 bg-white text-sm h-[60px] `}/>
  )
}

export default Input