
function NavBar() {
  return (
    <section>
        <div className="mt-3 flex justify-between items-center">
            
            {/* logo */}
            <div className="flex gap-2 items-center">
                <div className="size-12 text-xl bg-linear-60 from-pink-500 to-purple-500 flex justify-center items-center rounded-xl text-white font-bold">
                    <p>DS</p>
                </div>
                <div className="flex items-center justify-center ">
                    <p className="text-3xl font-semibold">Dev</p>
                    <p className="text-3xl font-semibold text-pink-500 ml-1">Stack</p>
                </div>
            </div>

            {/* mentubar */}
            <ul className="flex gap-6 font-semibold text-gray-600  text-md">
                <li className="hover:text-pink-500 cursor-pointer">Home</li>
                <li className="hover:text-pink-500 cursor-pointer">Technologies</li>
                <li className="hover:text-pink-500 cursor-pointer">Projects</li>
                <li className="hover:text-pink-500 cursor-pointer">About</li>
                <li className="hover:text-pink-500 cursor-pointer">Contact</li>
            </ul>

            {/* log in */}
            <div className="flex gap-4">
                <button className="hover:text-pink-500 font-semibold cursor-pointer">Sing In</button>
                <button className="px-4 py-2 rounded-4xl bg-pink-400 text-white font-semibold text-md hover:bg-pink-500 cursor-pointer">Sign Up</button>
            </div>

        </div>

    </section>
  )
}

export default NavBar
