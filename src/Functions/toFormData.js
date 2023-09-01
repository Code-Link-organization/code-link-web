export const toFormData=(data)=>{
  const formData=new FormData();
  data.map(dataItem=>{
    formData.append(dataItem.name,dataItem.value)
  })
  return formData
}