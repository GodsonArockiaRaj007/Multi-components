
const Footer = () => {
  return (
    <>
    <div className="bg-black h-40">
            <h1 className="text-2xl text-white font-bold text-center">Task-8</h1>
            <Logos/>
    </div>
    </>
  )
}

export default Footer

const Logos=()=>{
    return(
        <>
        <div className=" flex gap-10 mt-10 justify-center">
            <img className="w-10 h-10 rounded-4xl hover:scale-110" src="../../public/facebook.png" alt="" />
            <img className="w-10 h-10 rounded-4xl hover:scale-110" src="../../public/insta.jpg" alt="" />
            <img className="w-10 h-10 rounded-4xl hover:scale-110" src="../../public/X.jpg" alt="" />
            <img className="w-10 h-10 rounded-4xl hover:scale-110" src="../../public/Linkkedin.png" alt="" />
        </div>
        </>
    )
}