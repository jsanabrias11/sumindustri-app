

export const Layout = ({ children, className }) => {
  return (
    <div className={ `w-full p-8 mx-auto inline-block ${ className }`} >
        {children}
    </div>
  )
}
