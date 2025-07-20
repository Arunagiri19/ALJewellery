import { motion } from "framer-motion";

const MainPage = () => {
  return (
    <>
      <motion.div
        className="bg-gradient-to-r from-[#2d0b00] via-[#3b1d0d] to-[#2d0b00] w-full py-2 px-4 flex flex-col md:flex-row items-center justify-between shadow-md shadow-yellow-800/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        
        <div className="w-full overflow-hidden whitespace-nowrap">
          <motion.div
            animate={{ x: ["100%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="text-amber-400 font-medium text-sm md:text-base"
          >
            🚚 Complimentary Shipping on Orders Over ₹2000 — Because You Deserve the Best 🚚 Complimentary Shipping on Orders Over ₹2000 — Because You Deserve the Best
          </motion.div>
        </div>

        <div className="w-full md:w-auto flex justify-center md:justify-end items-center gap-4 mt-2 md:mt-0">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 transition duration-300"
          >
            <span className="pi pi-instagram text-xl"></span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-400 transition duration-300"
          >
            <span className="pi pi-whatsapp text-xl"></span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-600 transition duration-300"
          >
            <span className="pi pi-youtube text-xl"></span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition duration-300"
          >
            <span className="pi pi-facebook text-xl"></span>
          </motion.a>
        </div>
      </motion.div>
    </>
  );
};

export default MainPage;
