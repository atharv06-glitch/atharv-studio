import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-bgc text-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">
         <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent rounded-full mix-blend-multiply filter blur-[128px] opacity-40"></div>
         <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary rounded-full mix-blend-multiply filter blur-[128px] opacity-40"></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-2xl"
      >
        <h1 className="font-display font-extrabold text-[8rem] lg:text-[12rem] leading-none text-transparent text-ghost">
          404
        </h1>
        <h2 className="font-display font-bold text-3xl lg:text-4xl text-ink mt-4 mb-6">
          Lost in the void.
        </h2>
        <p className="text-muted text-lg mb-10 max-w-md mx-auto">
          The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
        </p>
        <Link 
          to="/"
          className="inline-block bg-accent text-white font-semibold px-8 py-4 rounded-full hover:bg-accent-dark transition-colors duration-300"
        >
          Return Home
        </Link>
      </motion.div>
    </main>
  )
}
