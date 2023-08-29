export const toFormData=(data)=>{
  const formData=new FormData();
  console.log('hello')
  data.map(dataItem=>{
    console.log(dataItem)
    formData.append(dataItem.name,dataItem.value)
  })
  return formData
}