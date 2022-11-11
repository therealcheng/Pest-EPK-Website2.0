import '../styles/Hero.css';
import { motion } from 'framer-motion';

const Hero = () => {
  const preSave = () => {
    window.open('https://distrokid.com/hyperfollow/pest4/in-purgatory');
  };
  const photoReel = () => {
    console.log('works');
  };
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0.1 }}
      transition={{ duration: 4 }}
      className='hero-main lg:p-96'
    >
      <div className='lg:block lg:max-w-md'>
        <h1 className='text-2xl flex lg:block pr-12 justify-end p-48 lg:mb-10 lg:text-6xl lg:font-bold lg:pr-0 lg:pl-96'>
          IN PURGATORY
        </h1>
      </div>
      <div className='flex justify-center pb-4'>
        <motion.button
          whileHover={{ scale: 1.1, opacity: 0.9 }}
          transition={{ duration: 0.3 }}
          onClick={preSave}
          className='btn btn-active btn-accent alight-center'
        >
          Presave
        </motion.button>
      </div>
      <h1 className='flex lg:justify-end justify-center text-2xl lg:mb-10 lg:text-xl font-bold'>
        RELEASE DATE: 03/12/2022
      </h1>
    </motion.div>
  );
};

export default Hero;
