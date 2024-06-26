
function App() {

  return (
    <>
   
      <nav className="bg-black flex justify-evenly text-white text-3xl">
        <img className="py-10" src="/logo.png" alt="" />
        <div className="flex justify-between w-2/6 items-center">
          <p>Home</p>
          <p>Sobre</p>
          <p>Como funciona</p>
          <p>Produtos</p>
        </div>
        <button>Contato</button>
      </nav>
      
      <div className="bg-image h-screen bg-no-repeat bg-cover text-white flex items-center w-screen">
          <div className="pl-80">
            <p className="font-thin text-5xl pl-2">Construa com conexões</p>
            <div className="flex">
            <p className="text-8xl -mt-5">Construa com</p>
            <div className="flex items-end">
            <img className="ml-2 w-fit" src="/logo2.png" alt="" />
            </div>
            </div>
            </div>         
      </div>
      
      <div className="pt-16">
      <div className="flex text-8xl justify-center">
        <p className="pr-6 text-orange-500">Sobre</p>
        <p>nós</p>
      </div>
      <div className="flex justify-evenly pt-14">
        <div className="w-2/6">
        <div>
          <h1 className="text-5xl text-orange-500 font-semibold" >O Porquê</h1>
          <p className="text-xl pt-2 pl-1">Na ENGIMART, nosso propósito é transformar a indústria da construção civil através da tecnologia e da conexão humana, tornando mais acessível e eficiente o processo de construir edificações de qualidade</p>
          </div>
          <div className="pt-6">
          <h1 className="text-5xl text-orange-500 font-semibold">Missão da ENGIMART</h1>
          <p className="text-xl pt-2 pl-1">Facilitar e otimizar o processo de construção civil, conectando fornecedores de materiais de qualidade às necessidades específicas das construtoras, proporcionando uma experiência transparente, eficiente e inovadora.</p>
          </div>
        </div>
        <img src="/sobre.png" alt="" />
      </div>
      <div className="pt-14 ">
        <div className="flex justify-center">
          <h1 className="text-5xl text-orange-500 font-semibold">Valores</h1>
        </div>
        <div className="flex justify-evenly pt-10">
        <div className="w-1/4">
          <h1 className="text-3xl font-semibold" >Transparência</h1>
          <p className="text-l pt-2 pl-1">Atuamos com sinceridade e abertura em todas as nossas transações e comunicações.</p>
          </div>
          <div className="w-1/4">
          <h1 className="text-3xl font-semibold" >Excelência</h1>
          <p className="text-l pt-2 pl-1">Buscamos sempre alcançar os mais altos padrões de qualidade em tudo o que fazemos.</p>
          </div>
        </div>
        <div className="flex justify-evenly pt-20">
        <div className="w-1/4">
          <h1 className="text-3xl font-semibold" >Inovação</h1>
          <p className="text-l pt-2 pl-1">Utilizamos tecnologia avançada para oferecer soluções criativas e eficientes aos nossos clientes.</p>
          </div>
          <div className="w-1/4">
          <h1 className="text-3xl font-semibold" >Parceria</h1>
          <p className="text-l pt-2 pl-1">Valorizamos colaborações sólidas e duradouras, promovendo relações de confiança e benefício mútuo.</p>
          </div>
        </div>
      </div>
      </div>

      <footer className="pt-20">
          <div className="w-screen h-10 bg-orange-600"></div>
          <div className="flex justify-evenly pt-14 items-center">
            <img src="/logo3.png" alt="" />
            <div>
              <p className="text-lg font-semibold text-gray-500 pb-4">Siga-nos nas redes socias</p>
              <div className="flex justify-between">
                <img src="/insta.png" alt="" />
                <img src="/face.png" alt="" />
                <img src="/link.png" alt="" />
                <img src="/zap.png" alt="" />
              </div>
            </div>
          </div>
          
          <div className="h-24 flex justify-center items-end text-gray-400">
            <div className="flex-col">
          <div className="flex justify-center">
            <p className="pr-4">Política de Privacidade</p>
            <p>Termos de Uso</p>
          </div>
          <div className="flex justify-center">
            <p className="pr-4">©Engimart. Todos os direitos reservados. 2024 de Privacidade</p>
            <p>Design by ENGIMART</p>
          </div>
          </div>
          </div>
      </footer>
    </>
  )
}

export default App
