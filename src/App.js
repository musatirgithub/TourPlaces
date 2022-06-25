import Card from "./components/cards/Card";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import {data} from "./helper/data";
import appStyle from "./App.module.scss";


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <main className={appStyle['cards']} >
      {
        data.map((item)=>{
          const {id, title, desc, image} = item;
          return(
            <Card key={id} title={title} desc={desc} image={image} />
          )
          
        })
      }
      </main>
    </div>
  );
}

export default App;
