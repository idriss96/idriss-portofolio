import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '../../../utils/motion';

function HeroContent() {
  return (
    <motion.div initial="hidden" animate="visible" className="hero-content">
      <div className="text-content">
        <motion.div variants={slideInFromLeft(0.5)} className="title">
          <p>
            Providing <span> the best </span> project experience
          </p>
        </motion.div>

        <motion.p variants={slideInFromLeft(0.8)} className="text">
          Hello there! I&apos;m Idriss Atik, a junior front-end web developer on
          a journey to bring creativity and functionality to the digital world.
          With a passion for crafting visually appealing and user-friendly
          interfaces, I&apos;m excited to share my evolving portfolio with you.
        </motion.p>
      </div>

      <motion.div variants={slideInFromRight(0.8)} className="image-content">
        <img src="/mainIconsdark.svg" alt="work icons" />
      </motion.div>
    </motion.div>
  );
}

export default HeroContent;
