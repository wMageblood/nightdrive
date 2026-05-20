import Navbar from "../components/Navbar";
import { AboutTitle } from "../components/svg/AboutTitle";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center mb-10 mt-25">
        <AboutTitle />
      </div>

      <div className="*:text-center *:text-title *:font-600 w-3/4 mx-auto">
        <p className="my-5">
          Ascended es una guild formada por players experimentados y consolidados en el raideo mítico latinoamericano. <br/>
          Tenemos estrellas de talla internacional (por lo gordo) como Kayn; el enano más marrón de Bariloche, Wizza; el mago de Grump (desaparece cada semana) y, por supuesto, su chileno favorito con olor a resfriado y cara de mono, Over. <br/>
        </p>
        <p className="my-5">
          Juntos han logrado domesticar latinos salvajes, peinarlos, bañarlos y enseñarles a prender una computadora para poder completar su roster de raideo.
        </p>
        <p className="my-5 mb-10">
          Contamos con gente de cada rincón de Latinoamérica, desde la seca y verdulera Bolivia hasta la irrelevante y triste Uruguay; no nos olvidemos de México, donde sus raiders viven perdiendo la cabeza (literalmente). <br/>
          En Ascended, nuestra meta siempre es la misma: tratar de llegar al último boss del parche antes de que se nos acaben las neuronas para poder esquivar el fuego, hacer la rotación de 3 botones y no perder 300 puestos en el ranking mundial (aún no lo logramos). <br/>
          Al final del día, nuestro sueño es poder ser tan felices en el juego como lo somos en la vida real (no lo somos).
        </p>
      </div>
    </div>
  );
};

export default About