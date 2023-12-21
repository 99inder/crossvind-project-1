import Footer from "./Components/Common/Footer/Footer.jsx";
import Header from "./Components/Common/Header/Header.jsx";
import Homepage from "./Pages/Homepage.jsx";

function App() {
  return (
    <div className="font-poppins">
      <Header />
      
      <main>
        <Homepage />
      </main>

      <Footer />
    </div>
  );
}

export default App;
