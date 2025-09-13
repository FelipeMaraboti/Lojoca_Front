import { Menu } from "lucide-react"

function App() {

  return (
    <div className="w-full max-w-md md:max-w-7xl mx-auto p-4 md:p-5">
      <div className="rounded-2xl py-8 px-10 bg-header">
        <header className="flex items-center justify-between">
          <h1 className="rock-salt text-xl">Lojoca</h1>
          <nav className="hidden lg:block">
            <ul className="flex gap-6 justify-center items-center">
              <li>
                <a className="text-[16px] montserrat-medium" href="#">História</a>
              </li>
              <li>
                <a className="text-[16px] montserrat-medium" href="#">Soluções</a>
              </li>
              <li>
                <a className="text-[16px] montserrat-medium" href="#">Preços</a>
              </li>
            </ul>
          </nav>
          <Menu />
        </header>
        <div className="w-full max-w-sm md:max-w-6xl flex flex-col justify-center items-center md:items-start gap-5 md:gap-6 mt-20">
          <h2 className="w-full lg:w-[750px] text-xl md:text-5xl montserrat-extrabold">Centralize suas finanças e estoque em um único lugar</h2>
          <p className="w-full md:w-[555px] text-sm md:text-[16px] montserrat-regular">A Lojoca surgiu para simplificar a vida de pequenos empreendedores e acelerar o crescimento das suas lojas</p>
        </div>
        <div className="mt-16 mb-16 md:mt-6 md:mb-28 flex items-center justify-center md:justify-normal gap-2 md:gap-6">
          <a className="px-8 py-2 rounded-full bg-[#355E44] montserrat-regular text-[10px] md:text-sm text-white" href="#">Testar gratis</a>
          <a className="px-8 py-2 rounded-full bg-[#FFFFFF75] montserrat-regular text-[10px] md:text-sm" href="#">Ver preços</a>
        </div>
      </div>
      <div className="">
        <h2></h2>
        <div className="bg-dashboard w-80 h-96"></div>
      </div>
    </div>
  )
}

export default App
