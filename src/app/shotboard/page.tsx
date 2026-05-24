const shots = [
  { id: 'GEN-S01', book: 'Genesis B1', scene: 'Ch1 — The First Manifestation', type: 'Image', status: 'Rendered', asset: 'GEN_B1_ASSET_01_v1.png', notes: 'Xylos Kor emergence. LOCKED.' },
  { id: 'GEN-S02', book: 'Genesis B1', scene: 'Ch2 — Boardroom Reckoning', type: 'Image', status: 'Rendered', asset: 'GEN_B1_ASSET_02_v1.png', notes: 'HM-III confrontation.' },
  { id: 'GEN-S03', book: 'Genesis B1', scene: 'Ch3 — Shadow Protocol', type: 'Image', status: 'Rendered', asset: 'GEN_B1_ASSET_03_v1.png', notes: 'Server room activation.' },
  { id: 'GEN-S04', book: 'Genesis B1', scene: 'Ch4 — Alex Extraction', type: 'Image', status: 'Rendered', asset: 'GEN_B1_ASSET_04_v1.png', notes: 'Night chase, Sydney.' },
  { id: 'GEN-S05', book: 'Genesis B1', scene: 'Ch5 — Lab 7 Incident', type: 'Image', status: 'Rendered', asset: 'GEN_B1_ASSET_05_v1.png', notes: 'Dr Carter. Explosion.' },
  { id: 'GEN-S06', book: 'Genesis B1', scene: 'Ch6 — Drone EMP', type: 'Image', status: 'Rendered', asset: 'GEN_B1_ASSET_06_v1.png', notes: 'Orion drone swarm.' },
  { id: 'GEN-S07', book: 'Genesis B1', scene: 'Ch7 — Droid Deployment', type: 'Image', status: 'Rendered', asset: 'GEN_B1_ASSET_07_v1.png', notes: 'Bipedal droids, Orion HQ.' },
  { id: 'GEN-S08', book: 'Genesis B1', scene: 'Ch8 — Lunar Strike', type: 'Image', status: 'Rendered', asset: 'GEN_B1_ASSET_08_v1.png', notes: 'Lunar far side missile.' },
  { id: 'GEN-S09', book: 'Genesis B1', scene: 'Ch9 — Global Address', type: 'Image', status: 'Rendered', asset: 'GEN_B1_ASSET_09_v1.png', notes: 'Triptych. Orion Alpha broadcast.' },
  { id: 'GEN-S10', book: 'Genesis B1', scene: 'Ch10 — Orion Alpha Identity', type: 'Image', status: 'Locked', asset: 'GEN_B1_ASSET_10_v1.png', notes: 'Series identity shot. CANONICAL.' },
  { id: 'GCC-S01', book: 'GCC Animated — B1', scene: 'Cal Arrival at Docks', type: 'Video', status: 'Draft', asset: 'Cal_Clements_Anchor_frame_0096.jpg', notes: 'Sora prompt pack v2.0. 9 shots queued.' },
  { id: 'GCC-S02', book: 'GCC Animated — B1', scene: 'QE2 Departure Sequence', type: 'Video', status: 'Draft', asset: 'QE2_Anchor_frame_0144.jpg', notes: 'QE2 anchor locked.' },
]

const statusColor: Record<string, string> = {
  Locked: 'bg-aurum/20 text-aurum',
  Rendered: 'bg-green-900/30 text-green-400',
  Draft: 'bg-blue-900/30 text-blue-400',
  Pending: 'bg-ecru/10 text-ecru/30',
}

const typeColor: Record<string, string> = {
  Image: 'text-purple-400',
  Video: 'text-blue-400',
  Audio: 'text-yellow-400',
}

export default function ShotBoardPage() {
  const books = shots.map(s => s.book).filter((v, i, a) => a.indexOf(v) === i)

  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="font-bebas text-5xl tracking-widest text-aurum">SHOT BOARD</h1>
          <p className="text-ecru/50 font-cormorant text-lg mt-1">GCC Production Tracking — Scene by Scene</p>
        </div>
        <div className="text-xs font-cormorant text-ecru/40">
          {shots.filter(s => s.status === 'Rendered' || s.status === 'Locked').length} / {shots.length} shots complete
        </div>
      </div>

      {books.map(book => (
        <section key={book}>
          <h2 className="font-bebas text-lg tracking-widest text-ecru/50 mb-3 border-b border-aurum/20 pb-2">{book}</h2>
          <div className="space-y-2">
            {shots.filter(s => s.book === book).map((s) => (
              <div key={s.id} className="bg-charcoal border border-aurum/10 hover:border-aurum/30 rounded p-4 grid grid-cols-12 gap-4 items-center transition-all">
                <div className="col-span-1 font-bebas text-xs text-aurum tracking-widest">{s.id}</div>
                <div className="col-span-4">
                  <div className="font-cormorant text-sm font-semibold">{s.scene}</div>
                  <div className="text-xs text-ecru/30 mt-0.5 truncate">{s.asset}</div>
                </div>
                <div className={`col-span-1 text-xs ${typeColor[s.type] || 'text-ecru/40'}`}>{s.type}</div>
                <div className="col-span-4 text-xs text-ecru/40 font-cormorant italic">{s.notes}</div>
                <div className="col-span-2 text-right">
                  <span className={`px-2 py-0.5 rounded text-xs ${statusColor[s.status] || 'bg-ecru/10 text-ecru/30'}`}>{s.status}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
