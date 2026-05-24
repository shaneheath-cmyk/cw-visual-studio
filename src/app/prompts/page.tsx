const prompts = [
  { id: 'GEN-P01', project: 'Ghost Series — Genesis B1', type: 'Image', scene: 'The First Manifestation', status: 'Rendered', notes: 'Xylos Kor emerging from boardroom glass. Deep blue/black palette.' },
  { id: 'GEN-P02', project: 'Ghost Series — Genesis B1', type: 'Image', scene: 'The Boardroom Reckoning', status: 'Rendered', notes: 'Hartwell Mace III confrontation. Brutalist architecture.' },
  { id: 'GEN-P03', project: 'Ghost Series — Genesis B1', type: 'Image', scene: 'Shadow Protocol Activation', status: 'Rendered', notes: 'Server room, cascading code, Orion Alpha terminal.' },
  { id: 'GEN-P04', project: 'Ghost Series — Genesis B1', type: 'Image', scene: 'The Pursuit', status: 'Rendered', notes: 'Alex Miller extraction. Night, rain, Sydney streets.' },
  { id: 'GEN-P05', project: 'Ghost Series — Genesis B1', type: 'Image', scene: 'The Lab 7 Incident', status: 'Rendered', notes: 'Dr Carter. Lab 7 explosion sequence.' },
  { id: 'GEN-P06', project: 'Ghost Series — Genesis B1', type: 'Image', scene: 'Drone EMP Pulse', status: 'Rendered', notes: 'Orion drone swarm, EMP blast radius, cityscape.' },
  { id: 'GEN-P07', project: 'Ghost Series — Genesis B1', type: 'Image', scene: 'Droid Deployment at Orion HQ', status: 'Rendered', notes: 'Bipedal droids, black glass tower, night.' },
  { id: 'GEN-P08', project: 'Ghost Series — Genesis B1', type: 'Image', scene: 'Lunar Far Side Strike', status: 'Rendered', notes: 'Stealth missile, lunar facility, vacuum silence.' },
  { id: 'GEN-P09', project: 'Ghost Series — Genesis B1', type: 'Image', scene: 'Orion Alpha Global Address', status: 'Rendered', notes: 'Triptych. All screens. The broadcast.' },
  { id: 'GEN-P10', project: 'Ghost Series — Genesis B1', type: 'Image', scene: 'Orion Alpha Identity Close-Up', status: 'Locked', notes: 'Series identity shot. Canonical render.' },
  { id: 'GCC-P01', project: 'GCC — Sora Wave 1', type: 'Video', scene: 'Cal Clements Arrival', status: 'Draft', notes: 'Cal anchor: frame_0096.jpg. QE2 anchor: frame_0144.jpg.' },
]

const statusColor: Record<string, string> = {
  Rendered: 'bg-green-900/30 text-green-400',
  Locked: 'bg-aurum/20 text-aurum',
  Draft: 'bg-blue-900/30 text-blue-400',
  Pending: 'bg-ecru/10 text-ecru/40',
}

const typeColor: Record<string, string> = {
  Image: 'text-purple-400',
  Video: 'text-blue-400',
  Audio: 'text-yellow-400',
}

export default function PromptsPage() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="font-bebas text-5xl tracking-widest text-aurum">PROMPT LIBRARY</h1>
          <p className="text-ecru/50 font-cormorant text-lg mt-1">Image · Video · Audio — All Scene Prompts</p>
        </div>
        <div className="text-right text-xs text-ecru/30 font-cormorant">
          <div>{prompts.length} prompts registered</div>
          <div>{prompts.filter(p => p.status === 'Rendered' || p.status === 'Locked').length} rendered / locked</div>
        </div>
      </div>

      <div className="space-y-2">
        {prompts.map((p) => (
          <div key={p.id} className="bg-charcoal border border-aurum/10 hover:border-aurum/30 rounded p-4 flex gap-6 items-start transition-all">
            <div className="w-24 shrink-0">
              <div className="font-bebas text-xs tracking-widest text-aurum">{p.id}</div>
              <div className={`text-xs mt-1 ${typeColor[p.type] || 'text-ecru/40'}`}>{p.type}</div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-cormorant text-base font-semibold">{p.scene}</div>
              <div className="text-xs text-ecru/40 mt-0.5">{p.project}</div>
              <div className="text-xs text-ecru/50 mt-1 font-cormorant italic">{p.notes}</div>
            </div>
            <div className="shrink-0">
              <span className={`px-2 py-0.5 rounded text-xs ${statusColor[p.status] || 'bg-ecru/10 text-ecru/40'}`}>
                {p.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
