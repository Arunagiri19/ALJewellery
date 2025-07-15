import { motion } from "framer-motion";

const MainPage = () => {
  return (
    <>


      {/* Top Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />



      {/* Top Bar */}
      <motion.div
        className="bg-gradient-to-r from-[#2d0b00] via-[#3b1d0d] to-[#2d0b00] w-full h-[7%] flex flex-col md:flex-row shadow-md shadow-yellow-800/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {/* Shipping Notice */}
        <div className="w-full overflow-hidden whitespace-nowrap py-2">
          <motion.div
            animate={{ x: ["100%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="text-amber-400 font-medium text-sm md:text-base"
          >
            🚚 Complimentary Shipping on Orders Over ₹2000 — Because You Deserve the Best 🚚 Complimentary Shipping on Orders Over ₹2000 — Because You Deserve the Best
          </motion.div>
        </div>


        {/* Social Media Links */}
        <div className="w-full md:w-[15%] h-full text-white flex justify-center md:justify-end items-center px-3 gap-6 py-2">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.instagram.com/_.aroon._a?igsh=MWc3MDdmMGp3NjIxeg=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition duration-300"
          >
            <span className="pi pi-instagram text-xl"></span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://wa.me/917010336171"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition duration-300"
          >
            <span className="pi pi-whatsapp text-xl"></span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://youtube.com/@arunagiri02?si=fidlw3NSHTlBMSen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition duration-300"
          >
            <span className="pi pi-youtube text-xl"></span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.facebook.com/share/1Vx8tKbvuE/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
          >
            <span className="pi pi-facebook text-xl"></span>
          </motion.a>
        </div>
      </motion.div>
    </>
  );
};

export default MainPage;
