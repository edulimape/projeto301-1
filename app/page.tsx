import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 dark:bg-black font-sans">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-center px-8 py-20 bg-white dark:bg-black">
        
        {/* Logo */}
        <Image
          src="/github-mark.png"
          alt="GitHub logo"
          width={80}
          height={80}
          className="mb-6 dark:invert"
        />

        {/* Conteúdo */}
        <div className="flex flex-col items-center text-center gap-6">
          <h1 className="text-4xl font-bold text-black dark:text-white">
            O que é o GitHub?
          </h1>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
            O GitHub é uma plataforma online usada para armazenar e gerenciar
            códigos de projetos. Ele funciona como uma rede social para
            desenvolvedores, permitindo compartilhar, colaborar e acompanhar
            mudanças em projetos de software.
          </p>

          <h2 className="text-2xl font-semibold text-black dark:text-white mt-6">
            Para que serve?
          </h2>

          <ul className="text-left text-zinc-600 dark:text-zinc-400 max-w-xl list-disc list-inside space-y-2">
            <li>Guardar projetos de programação na nuvem</li>
            <li>Controlar versões do código (histórico de alterações)</li>
            <li>Trabalhar em equipe no mesmo projeto</li>
            <li>Compartilhar códigos com outras pessoas</li>
            <li>Contribuir em projetos open source</li>
          </ul>
        </div>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-12 px-6 rounded-full bg-black text-white hover:bg-zinc-800 transition"
          >
            Acessar GitHub
          </a>

          <a
            href="https://docs.github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-12 px-6 rounded-full border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition"
          >
            Documentação
          </a>
        </div>
      </main>
    </div>
  );
}