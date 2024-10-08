import { motion } from "framer-motion";
import { HERO_CONTENT, SLIDES, TITLE } from "./../../constants/index";
import profilePic from "./../../assets/NxLogo.png";
import Typewriter from "typewriter-effect";
import Carousel from "react-bootstrap/Carousel";

const variants = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col item-center lg:items-start">
            <motion.h1
              variants={variants(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
            >
              Navdeep Sokhal
            </motion.h1>
            <motion.span
              variants={variants(0.5)}
              initial="hidden"
              animate="visible"
              className="mb-4 bg-gradient-to-r from-pink-300 via-slate-600 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              <Typewriter
                options={{
                  strings: TITLE,
                  autoStart: true,
                  loop: true,
                  delay: 35,
                  deleteSpeed: 35,
                }}
              />
            </motion.span>
            <motion.p variants={variants(1)} initial="hidden" animate="visible">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <Carousel
                className="rounded-xl overflow-hidden"
                controls={false}
                indicators
                interval={2500}
                pause={false}
              >
                {SLIDES.map((slide, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100 custom-img "
                      src={slide}
                      alt="background slide"
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
