import Student from "./Student";

function App(){
  return(
    <>
      <Student name = "Samreen" age ={20} student = {true}></Student>
      <Student name = "Saqib" age = {42} student = {false}></Student>
      <Student name = "Thirumalai" age = {5} student = {false}></Student>
      <Student></Student>
    </>
  );
}
export default App