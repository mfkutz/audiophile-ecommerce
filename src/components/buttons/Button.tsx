
type ButtonType = {
  background: string
  hover: string
  action: string
}


export default function Button({ background, hover, action }: ButtonType) {
  return (
    <button
      className={`${background} hover:${hover} px-[34px] py-[16px] uppercase text-white text-[12px] font-semibold tracking-[1.3px] mt-[43px]`}
    >{action}</button>
  )
}
