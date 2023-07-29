export default function Navbar(){
    return <div className="w-full flex backdrop-blur sticky top-2 left-0 right-0 z-40  text-xl bg-transparent text-white rounded-lg">
        <span className=" bg-slate-950  opacity-40 absolute w-full h-full z-40 rounded-lg "></span>
        <a href="#home" className="px-4 hover:bg-slate-950 p-2 z-50 relative text-lg rounded-l-lg">Home</a>
        <a href="#projects" className="px-4 hover:bg-slate-950 p-2 z-50 relative text-lg ">Projects</a>
        <a href="#blogs" className="px-4 hover:bg-slate-950 p-2 z-50 relative text-lg ">Posts</a>
        <a href="#contact" className="px-4 hover:bg-slate-950 p-2 z-50 relative text-lg ">Contact</a>
        </div>
}