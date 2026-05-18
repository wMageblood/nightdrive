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
            Ascended es una guild formada por players experimentados y consolidados en el raideo mitico latinoamericano, tenemos estrellas de talla internacional (por lo gordo) como Kayn,
             el enano mas marron de bariloche Wizza, el mago de Grump (desaparece cada semana) y por supuesto su chileno favorito con olor a resfriado y cara de mono Over.
            Juntos han logrado domesticar latinos salvajes, peinarlos, bañarlos y enseñarles prender una computadora para poder completar su roster de raideo.
            Contamos con gente de cada rincon de latinoamerica, desde la seca y verdulera bolivia hasta la irrelevante y triste Uruguay, no nos olvidemos de Mexico donde sus raiders viven perdiendo la cabeza (literalmente).
            En Ascended nuestra meta siempre es la misma tratar de llegar al ultimo boss del parche antes de que se nos acaben las neuronas para poder esquivar el fuego y poder hacer la rotacion de 3 botones
             y no perder 300 puestos en el ranking mundial (aun no lo logramos).
            Al final del dia nuestro sueño es poder ser tan felices en el juego como lo somos en la vida real <span className="">(no lo somos)</span>.
        </p>
      </div>
    </div>
  );
};

export default About