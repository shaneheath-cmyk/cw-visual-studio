import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CW Visual Studio',
  description: 'Collective Writings — Creative Production Command Centre',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-obsidian text-ecru">
        <header className="border-b border-aurum/30 px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="font-bebas text-2xl tracking-widest text-aurum">CW VISUAL STUDIO</span>
            <span className="text-ecru/40 text-sm font-cormorant">Collective Writings · Production Command Centre</span>
          </div>
          <nav className="flex gap-6 text-sm font-bebas tracking-widest text-ecru/60">
            <a href="/" className="hover:text-aurum transition-colors">DASHBOARD</a>
            <a href="/prompts" className="hover:text-aurum transition-colors">PROMPTS</a>
            <a href="/assets" className="hover:text-aurum transition-colors">ASSETS</a>
            <a href="/shotboard" className="hover:text-aurum transition-colors">SHOT BOARD</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="border-t border-aurum/20 px-8 py-3 text-xs text-ecru/30 font-cormorant flex justify-between">
          <span>Collective Writings · Phalanx Prime Ecosystem</span>
          <span>CW Visual Studio v1.0</span>
        </footer>
      </body>
    </html>
  )
}
