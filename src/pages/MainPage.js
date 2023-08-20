import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import TextField from "../components/TextField";
import Boxes from "../components/Boxes";
import StylePreview from "../components/StylePreview";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <TextField />
      <Boxes />
      <StylePreview />
    </div>
  );
};

export default MainPage;
