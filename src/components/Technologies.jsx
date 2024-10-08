import { FaJava, FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress, SiMongodb, SiRedux } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";
import Icon from "./Icon";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <Icon duration={1.5}>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </Icon>
        <Icon duration={3}>
          <TbBrandNextjs className="text-7xl" />
        </Icon>
        <Icon duration={5}>
          <SiMongodb className="text-7xl text-green-500" />
        </Icon>
        <Icon duration={4}>
          <SiRedux className="text-7xl text-purple-400" />
        </Icon>
        <Icon duration={2}>
          <FaNodeJs className="text-7xl text-green-700" />
        </Icon>
        <Icon duration={2.5}>
          <FaJava className="text-7xl text-sky-700" />
        </Icon>
        <Icon duration={2}>
          <SiExpress className="text-7xl text-slate-400" />
        </Icon>
      </motion.div>
    </div>
  );
};

export default Technologies;
