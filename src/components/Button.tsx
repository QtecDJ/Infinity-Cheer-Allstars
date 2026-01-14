import { motion } from 'framer-motion'

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

const Button = ({ children, variant = 'primary', onClick, className = '' }: ButtonProps) => {
  const baseStyles = 'relative px-8 py-4 rounded-xl font-black text-lg overflow-hidden cursor-pointer'
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-brand-red via-red-600 to-red-700 text-white shadow-2xl',
    secondary: 'bg-white text-brand-black border-2 border-brand-black shadow-lg'
  }

  return (
    <motion.button 
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      whileHover={{ 
        scale: 1.05,
        boxShadow: variant === 'primary' 
          ? '0 20px 40px rgba(220, 38, 38, 0.4)' 
          : '0 20px 40px rgba(0, 0, 0, 0.2)'
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <motion.span 
        className="relative z-10"
        initial={{ y: 0 }}
        whileHover={{ y: -2 }}
      >
        {children}
      </motion.span>
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-red-700 to-brand-red"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  )
}

export default Button
