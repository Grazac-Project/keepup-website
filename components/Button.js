const Button = ({ children }) => {
  return (
    <button
      className={`outline-none items-center text-white rounded-md px-8 py-4 text-base bg-primary 
      font-secondary w-full sm:w-max font-semibold sm:font-medium`}
    >
      <span className="block text-center">{children}</span>
    </button>
  )
}

export default Button
