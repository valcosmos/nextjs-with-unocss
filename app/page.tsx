import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={inter.className} w="100vw" h="100vh">
      <div h-full text-center flex select-none all:transition-400>
        <div ma>
          <div
            text-5xl
            fw100
            animate-bounce-alt
            animate-count-infinite
            animate-duration-1s
            custom-shortcut
          >
            UnoCSS
          </div>
          <div op30 text-lg fw300 m1>
            The instant on-demand Atomic CSS engine.
          </div>
          <div m2 flex justify-center text-2xl op30 hover="op80">
            <a
              className="i-carbon-logo-github"
              text-inherit
              href="https://github.com/unocss/unocss"
              target="_blank"
            ></a>
          </div>
        </div>
      </div>
      <div absolute bottom-5 right-0 left-0 text-center op30 fw300>
        on-demand · instant · fully customizable
      </div>
    </div>
  )
}
