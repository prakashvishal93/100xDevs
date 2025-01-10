import TextComponent from "./TextComponent"

function App() {
  return (
    <>
    <CardWrapper innerComponent={<TextComponent />} />
    <CardWrapper innerComponent={<TextComponent />} />
    <CardWrapper innerComponent={<TextComponent />} />
    <CardWrapper innerComponent={<TextComponent />} />
    </>
  )
}

function CardWrapper({innerComponent}){
  return <div style={{border:"2px solid black", padding: "20px"}}>
    {innerComponent}
  </div>
}



export default App
