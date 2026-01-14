interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

const Button = ({ children, variant = 'primary', onClick, className = '' }: ButtonProps) => {
  const baseStyles = 'relative px-8 py-4 rounded-xl font-black text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden group'
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-brand-red via-red-600 to-red-700 text-white shadow-xl hover:shadow-2xl before:absolute before:inset-0 before:bg-gradient-to-r before:from-red-700 before:to-brand-red before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300',
    secondary: 'bg-white text-brand-black border-2 border-brand-black hover:bg-brand-black hover:text-white shadow-lg hover:shadow-xl'
  }

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </button>
  )
}

export default Button
