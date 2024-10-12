import { motion } from "framer-motion";
import { CONTACT } from "../../constants";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get In Touch
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="text-center tracking-tighter"
      >
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>
        <div className="flex justify-center text-center">
          <a href="https://www.linkedin.com/in/navdeep-sokhal-2a7379133/">
            <FaLinkedin className="m-2 h-[30px] w-[30px] rounded" />
          </a>
          <a href="https://github.com/navodits">
            <FaGithub className="m-2 h-[30px] w-[30px] rounded" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
