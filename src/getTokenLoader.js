export default async function tokenLoader() {
  const token = await JSON.stringify(localStorage.getItem('token'))
  if (!token) {
    return null;
  }
  return token;
}