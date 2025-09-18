
import { motion } from "framer-motion";

const Skill = () => {
  const logos = [
    "/assets/img/flutter.svg",
    "/assets/img/react.svg",
    "/assets/img/php.svg",
    "/assets/img/ts.svg",
    "/assets/img/laravel.svg",
    "/assets/img/js.svg",
    "/assets/img/kotlin.svg",
  ];

  // Gandakan list untuk seamless loop
  const images = [...logos, ...logos];

  return (
    <section className="overflow-hidden MyGradient mt-10 mx-10 sm:mx-20 md:mx-40 lg:mx-75">
      <h2 className="text-l text-gray-400 font-medium text-center mb-10">Experienced in a Variety of Skills</h2> {}
      <motion.div
        className="flex w-max"
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {images.map((image, index) => (
          <img
            className="h-8 w-20 mx-6 shrink-0"
            src={image}
            key={index}
            alt={`logo-${index}`}
          />
        ))}
      </motion.div>
    </section>
  );
  
};

export default Skill;
