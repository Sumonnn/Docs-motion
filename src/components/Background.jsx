import Navbar from "./Navbar"

function Background() {
    return (
        <>
            <div className="fixed w-full h-screen z-[2]">
                <Navbar />
                <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  text-[12vw] leading-none tracking-tighter font-semibold text-zinc-900">Docs.</h1>
            </div>
        </>
    )
}

export default Background