const Button = (props) => {
  const { value, disabled, onClick } = props
  console.log(disabled);
  return (
    <div class="m-3">
      <input type="button"
        value={value}
        className="shadow-lg px-2 py-1  bg-blue-400 text-lg text-white font-semibold rounded click:bg-red-500 hover:bg-blue-200 disabled:bg-red-500 w-1/5 h-10 my-10 mx-40 "
        disabled={disabled}
        onClick={onClick}
      />
    </div>
  )
}

export default Button


