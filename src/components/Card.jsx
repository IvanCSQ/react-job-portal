// chidren is a special prop in React
// that is used to render whatever you include between the opening and closing tags
// when invoking a component.
// In this case, the children prop is used to render the content of the Card component.
// This allows you to reuse the Card component and pass in different content as needed.
const Card = ({ children, bg='bg-gray-100' }) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
      {children}
    </div>
  )
};
export default Card
