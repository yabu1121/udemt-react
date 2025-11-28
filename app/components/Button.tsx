
interface Props {
  color : string;
  handleClick : any;
  ope : string;
}

const Button = (props: Props) => {
  const {color, handleClick, ope} = props
  return (
    <button className={`text-white p-2 bg-${color}-500 rounded`} onClick={handleClick}>{ope}</button>
  )
}

export default Button
