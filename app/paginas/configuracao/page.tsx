export default function Configuracao() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-slate-50 min-h-screen font-sans text-slate-800">
      <header className="mb-10 border-b pb-4">
        <h1 className="text-3xl font-bold text-slate-900">Configuração do GitHub</h1>
        <p className="text-slate-600 mt-2">Guia rápido para preparar o ambiente no Visual Studio Code.</p>
      </header>

      <div className="space-y-8">
        {/* Passo 1 */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
            Instalar o Git via Terminal
          </h2>
          <p className="mb-3 text-slate-600">Execute o comando abaixo no terminal do VS Code para instalar o Git no Windows:</p>
          <pre className="bg-slate-900 text-slate-50 p-4 rounded-md overflow-x-auto">
            <code>winget install --id Git.Git -e --source winget</code>
          </pre>
        </section>

        {/* Passo 2 */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
            Configurar Identidade
          </h2>
          <p className="mb-3 text-slate-600">Informe ao Git quem é você para assinar os seus commits:</p>
          <div className="space-y-3">
            <pre className="bg-slate-900 text-slate-50 p-4 rounded-md overflow-x-auto">
              <code>git config --global user.email {"seu-email@exemplo.com"}</code>
            </pre>
            <pre className="bg-slate-900 text-slate-50 p-4 rounded-md overflow-x-auto">
                <code>git config --global user.name {"SeuUsuario"}</code>
            </pre>
          </div>
        </section>

        {/* Passo 3 */}
        <section className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h2 className="text-xl font-semibold mb-2 text-blue-900 flex items-center">
            <span className="mr-2">🔑</span> Autorização
          </h2>
          <p className="text-blue-800">
            Ao realizar o primeiro <strong>push</strong> ou tentar conectar ao repositório, uma janela do navegador será aberta. 
            Clique em <strong>{"Authorize Git Ecosystem"}</strong> para liberar o acesso.
          </p>
        </section>
      </div>

      <footer className="mt-12 text-center text-slate-400 text-sm">
        Configuração recomendada para projetos Next.js e Tailwind CSS.
      </footer>
    </div>
  );
}