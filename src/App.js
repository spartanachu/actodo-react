import Header from "./Components/Header";
import Card from "./Components/Card";
import TodoContainer from "./Components/TodoContainer";

function App() {
  return (
    <>
    <div className="bg-black p-16">
      <div className="bg-[#efefef] p-10 border rounded-md ">
        <Header/>
        <div className="flex justify-between gap-7 my-5 flex-wrap">
          <Card bgcolor={"#685BAE"} title={"23"} subtitle={"Chennai"}/>
          <Card bgcolor={"#CA524E"} title={"20 December"} subtitle={"14:02:34"}/>
          <Card bgcolor={"#CA8201"} title={"Built Using"} subtitle={"React"}/>
        
        </div>
        <TodoContainer/>
      </div>
      </div>
    </>  );
}

export default App;
