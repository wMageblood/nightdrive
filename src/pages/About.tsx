import Navbar from "../components/Navbar";
import { AboutTitle } from "../components/svg/AboutTitle";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center mb-10 mt-25">
        <AboutTitle />
      </div>

      <div className="flex items-center justify-center mx-auto w-1/2">
        <p className="text-center text-title font-600">
          Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut
          sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat
          dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt
          ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur
          enim.
        </p>
      </div>
    </div>
  );
};

export default About