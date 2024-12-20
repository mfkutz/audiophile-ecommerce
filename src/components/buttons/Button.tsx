
type ButtonType = {
  background: string
  hover?: string
  action: string
  special?: boolean
}


export default function Button({ background, hover, action, special }: ButtonType) {
  return (
    <button
      className={`${background} hover:${hover} px-[34px] py-[16px] uppercase text-white text-[12px] font-medium tracking-[1.3px] mt-[43px] ${special ? "border border-black-ec text-black font-extrabold hover:text-white-ec hover:bg-black-esp" : ""}`}
    >{action}</button>
  )
}
