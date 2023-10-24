import img1 from "./images/FB_IMG_1641075896215.jpg"
import './App.css'

function App() {

  return (
    <div className="container">
      <h2>DEVELOPER'S CARD</h2>
      <section className="card">
      <img src={img1} alt="Tosin" />
      <h3>Ajide Tosin Adebayo</h3>
      <p>Software Engineer, XYZ company</p>
      <button style={{backgroundColor:"#016c19"}}>Download CV</button>
      <button style={{backgroundColor:"#000"}}>HIRE ME</button>
     </section>
    </div>
  );
}

export default App
