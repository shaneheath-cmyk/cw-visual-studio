const assets = [
  { label: 'GEN_B1_ASSET_01_v1.png', project: 'Ghost Series', character: 'Xylos Kor', type: 'Scene Render', format: 'PNG', status: 'Ready' },
  { label: 'GEN_B1_ASSET_02_v1.png', project: 'Ghost Series', character: 'Xylos Kor', type: 'Scene Render', format: 'PNG', status: 'Ready' },
  { label: 'GEN_B1_ASSET_10_v1.png', project: 'Ghost Series', character: 'Orion Alpha', type: 'Identity Shot', format: 'PNG', status: 'Locked' },
  { label: 'Giles_Portrait_Full_v1.png', project: 'Phalanx Agents', character: 'Giles', type: 'Character', format: 'PNG', status: 'Locked' },
  { label: 'Varro_Portrait_Full_v1.png', project: 'Phalanx Agents', character: 'Varro', type: 'Character', format: 'PNG', status: 'Locked' },
  { label: 'Pecunia_Avatar_v1.png', project: 'Phalanx Agents', character: 'Pecunia', type: 'Avatar', format: 'PNG', status: 'Locked' },
  { label: 'Xylos_Kor_Manifestation_v1.png', project: 'Ghost Series', character: 'Xylos Kor', type: 'Character', format: 'PNG', status: 'Locked' },
  { label: 'Orion_Alpha_Units_v1.png', project: 'Ghost Series', character: 'Orion Alpha', type: 'Character', format: 'PNG', status: 'Locked' },
  { label: 'Cal_Clements_Anchor_frame_0096.jpg', project: 'GCC Animated', character: 'Cal Clements', type: 'Sora Anchor', format: 'JPG', status: 'Locked' },
  { label: 'QE2_Anchor_frame_0144.jpg', project: 'GCC Animated', character: 'QE2 Ship', type: 'Sora Anchor', format: 'JPG', status: 'Locked' },
]

const statusColor: Record<string, string> = {
  Locked: 'bg-aurum/20 text-aurum',
  Ready: 'bg-green-900/30 text-green-400',
  Draft: 'bg-blue-900/30 text-blue-400',
}

export default function AssetsPage() {
  const locked = assets.filter(a => a.status === 'Locked').length
  const ready = assets.filter(a => a.status === 'Ready').length

  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="font-bebas text-5xl tracking-widest text-aurum">ASSET LIBRARY</h1>
          <p className="text-ecru/50 font-cormorant text-lg mt-1">All rendered frames, covers, and character plates</p>
        </div>
        <div className="flex gap-4 text-xs font-cormorant text-ecru/40">
          <span>{assets.length} total</span>
          <span className="text-aurum">{locked} locked</span>
          <span className="text-green-400">{ready} ready</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {assets.map((a, i) => (
          <div key={i} className="bg-charcoal border border-aurum/10 hover:border-aurum/30 rounded p-4 flex justify-between items-start transition-all">
            <div className="space-y-1">
              <div className="font-cormorant text-sm font-semibold text-ecru/90">{a.label}</div>
              <div className="text-xs text-ecru/40">{a.project} · {a.character}</div>
              <div className="text-xs text-ecru/30">{a.type} · {a.format}</div>
            </div>
            <span className={`px-2 py-0.5 rounded text-xs shrink-0 ml-4 ${statusColor[a.status] || 'bg-ecru/10 text-ecru/40'}`}>
              {a.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
