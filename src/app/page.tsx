export default function Dashboard() {
  const series = [
    { code: 'GCC', name: 'Guy Clements Chronicles', books: 11, wordsTarget: 605000, wordsCurrent: 56406, stage: 'LPA-01 Complete — WRI-01 Required' },
    { code: 'MULW', name: 'Mulwaree Echoes', books: 3, wordsTarget: 240000, wordsCurrent: 12000, stage: 'LPA-01 Complete' },
    { code: 'GHOST', name: 'Ghost Series', books: 1, wordsTarget: 80000, wordsCurrent: 8000, stage: 'Production Active' },
    { code: 'HK', name: 'Hollow King of Goulburn', books: 1, wordsTarget: 55000, wordsCurrent: 4000, stage: 'Development' },
  ]

  const recentAssets = [
    { label: 'GEN_B1_ASSET_01_v1.png', project: 'Ghost Series', type: 'Scene Render', status: 'Ready' },
    { label: 'GEN_B1_ASSET_02_v1.png', project: 'Ghost Series', type: 'Scene Render', status: 'Ready' },
    { label: 'Giles_Portrait_Full_v1.png', project: 'Phalanx Agents', type: 'Character', status: 'Locked' },
    { label: 'Xylos_Kor_Manifestation_v1.png', project: 'Ghost Series', type: 'Character', status: 'Locked' },
  ]

  return (
    <div className="p-8 space-y-10">
      {/* Header */}
      <div>
        <h1 className="font-bebas text-5xl tracking-widest text-aurum">PRODUCTION DASHBOARD</h1>
        <p className="text-ecru/50 font-cormorant text-lg mt-1">Collective Writings · All Active Series</p>
      </div>

      {/* Series Status */}
      <section>
        <h2 className="font-bebas text-xl tracking-widest text-ecru/60 mb-4 border-b border-aurum/20 pb-2">SERIES STATUS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {series.map((s) => {
            const pct = Math.round((s.wordsCurrent / s.wordsTarget) * 100)
            return (
              <div key={s.code} className="bg-charcoal border border-aurum/20 rounded p-5 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-bebas text-xs tracking-widest text-aurum">{s.code}</span>
                    <h3 className="font-cormorant text-xl font-semibold">{s.name}</h3>
                  </div>
                  <span className="text-xs text-ecru/40 border border-ecru/20 rounded px-2 py-1">{s.books} {s.books === 1 ? 'book' : 'books'}</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-ecru/50">
                    <span>{s.wordsCurrent.toLocaleString()} words</span>
                    <span>{pct}% of {s.wordsTarget.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-deepblack rounded-full h-1.5">
                    <div className="bg-aurum h-1.5 rounded-full" style={{ width: `${Math.min(pct, 100)}%` }} />
                  </div>
                </div>
                <p className="text-xs text-ecru/40 font-cormorant">{s.stage}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Quick Links */}
      <section>
        <h2 className="font-bebas text-xl tracking-widest text-ecru/60 mb-4 border-b border-aurum/20 pb-2">PRODUCTION MODULES</h2>
        <div className="grid grid-cols-3 gap-4">
          {[
            { href: '/prompts', label: 'PROMPT LIBRARY', desc: 'Image · Video · Audio scene prompts' },
            { href: '/assets', label: 'ASSET LIBRARY', desc: 'All rendered frames, covers, characters' },
            { href: '/shotboard', label: 'SHOT BOARD', desc: 'GCC production tracking by scene' },
          ].map((m) => (
            <a key={m.href} href={m.href} className="bg-charcoal border border-aurum/20 hover:border-aurum/60 rounded p-5 transition-all group">
              <div className="font-bebas text-lg tracking-widest text-aurum group-hover:text-ecru transition-colors">{m.label}</div>
              <div className="text-xs text-ecru/40 font-cormorant mt-1">{m.desc}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Recent Assets */}
      <section>
        <h2 className="font-bebas text-xl tracking-widest text-ecru/60 mb-4 border-b border-aurum/20 pb-2">RECENT ASSETS</h2>
        <table className="w-full text-sm font-cormorant">
          <thead>
            <tr className="text-ecru/40 text-xs font-bebas tracking-widest border-b border-ecru/10">
              <th className="text-left py-2">LABEL</th>
              <th className="text-left py-2">PROJECT</th>
              <th className="text-left py-2">TYPE</th>
              <th className="text-left py-2">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {recentAssets.map((a, i) => (
              <tr key={i} className="border-b border-ecru/5 hover:bg-charcoal/50 transition-colors">
                <td className="py-2 text-ecru/80">{a.label}</td>
                <td className="py-2 text-ecru/50">{a.project}</td>
                <td className="py-2 text-ecru/50">{a.type}</td>
                <td className="py-2">
                  <span className={`px-2 py-0.5 rounded text-xs ${a.status === 'Locked' ? 'bg-aurum/20 text-aurum' : 'bg-green-900/30 text-green-400'}`}>
                    {a.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}
