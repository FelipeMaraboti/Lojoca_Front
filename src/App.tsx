import { Menu } from "lucide-react"

function App() {

  return (
    <div className="w-full max-w-md md:max-w-7xl mx-auto p-4 md:p-5">
      <div className="rounded-2xl py-8 px-10 bg-section1">
        <header className="flex items-center justify-between">
          <h1 className="rock-salt text-xl">Lojoca</h1>
          <nav className="hidden lg:block">
            <ul className="flex gap-10 justify-center items-center">
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
          <div>
            <Menu className="block lg:hidden" />
          </div>
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
      <div className="flex flex-col gap-10">
        <h2 className="w-[320px] lg:w-[520px] ml-10 mt-12 md:mt-20 text-xl md:text-4xl montserrat-extrabold">Uma maneira inteligente de gerir sua empresa</h2>
        <div className="relative">
          <img src="/dashboard.svg" alt="dashboard" className="" />
        </div>
      </div>
      <div className="rounded-2xl px-5 bg-section3 mt-10">
        <div className="flex flex-col md:flex-row">
          <h2 className="w-[400px] lg:w-[655px] mt-10 text-xl md:text-4xl montserrat-extrabold">Organize tudo de forma moderna, sem depender de planilhas ou anotações</h2>
          <p className="ml-5 mt-4 text-sm montserrat-regular w-[300px] flex md:items-end md:ml-50">Temos os melhores, serviços de estoque e de gerenciamento e controle de finanças para o seu negócio</p>
        </div>
        <div className="mt-10 pb-10 flex flex-col md:flex-row gap-5 items-center justify-center">
          <div className="w-[350px] h-[350px] md:w-[645px] md:h-[470px] p-4 bg-white rounded-xl flex flex-col">
            <img src="card1.svg" alt="" />
            <div className="p-2 my-2">
              <h3 className="inter text-[16px]">Faça a precificação de seus produtos automaticamente</h3>
              <p className="text-sm">Economize tempo e reduza erros com um sistema que calcula custos, lucros e preços ideais de forma automática e precisa.</p>
            </div>
          </div>
          <div className="w-[350px] h-[420px] md:w-[450px] md:h-[470px] p-4 bg-white rounded-xl flex flex-col">
            <img src="card2.png" alt="" />
            <div className="p-2 my-2">
              <h3 className="inter text-[16px]">Faça a precificação de seus produtos automaticamente</h3>
              <p className="text-sm">Economize tempo e reduza erros com um sistema que calcula custos, lucros e preços ideais de forma automática e precisa.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-section4 rounded-2xl mt-10 p-20 flex items-center justify-center">
        <div className="flex flex-col gap-10 items-center justify-center">
          <h3 className="montserrat-extrabold text-3xl w-[450px] text-center">Quer conhecer a <span className="rock-salt">Lojoca?</span>Teste gratis por 14 dias</h3>
          <p className="montserrat-regular text-sm w-[350px] text-center">Após aproveitar os 14 dias de teste gratuito, você poderá continuar utilizando todos os recursos do sistema por apenas R$29,99 mensais.</p>
          <button className="px-26 py-2 bg-black text-white montserrat-regular text-sm rounded-md">Começar agora</button>
        </div>
      </div>
      <footer className="bg-[#2D2D2D] rounded-2xl mt-10">
        <div className="flex flex-col md:flex-row gap-6 px-10 py-10 justify-between">
          <h2 className="rock-salt text-white flex items-center justify-center md:justify-normal mb-10 md:mb-0">Lojoca</h2>
          <div className=" flex gap-14">
            <ul className="montserrat-medium text-white text-sm">
              Produtos
              <li className="mt-5">
                <a href="#" className="montserrat-thin">Produto</a>
              </li>
            </ul>
            <ul className="montserrat-medium text-white text-sm">
              Suporte
              <li className="mt-5">
                <a href="#" className="montserrat-thin">Email</a>
              </li>
            </ul>
            <ul className="montserrat-medium text-white text-sm">
              Legal
              <li className="mt-5">
                <a href="#" className="montserrat-thin">Termos de serviço</a>
              </li>
              <li className="mt-2">
                <a href="#" className="montserrat-thin">Politica de privacidade</a>
              </li>
            </ul>
          </div>
          <span/>
        </div>
        <p className="text-[10px] montserrat-thin text-white flex items-center justify-center">© 2025 Lojoca Inc. - Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default App
