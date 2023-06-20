import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Portfolio from "./components/Portfolio";
import './App.css';

const siteProps = {
  name: "Aekangi Patel",
  title: "Software Developer",
  email: "aekangi82@gmail.com",
  gitHub: "Aekangi",
  instagram: "",
  linkedIn: "aekangipatel",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";
const App = () => {

  return (
    <div>
    <Header />
    <Home name={siteProps.name} title={siteProps.title} />
    <About />
    <Portfolio />
    </div>
  )
}
export default App;
