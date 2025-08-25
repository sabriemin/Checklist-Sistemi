const { useEffect, useMemo, useState } = React;

// --- GÖMÜLEN VERİ ---
window.DEFAULT_DATA = { checklists: [] };

const STORAGE_KEY = "checklist-multi-v1";
function loadState() {
  try { const raw = localStorage.getItem(STORAGE_KEY); return raw ? JSON.parse(raw) : null; } catch { return null; }
}
function saveState(state) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
}
function percent(n, d) { if (!d) return 0; return Math.round((n / d) * 100); }
function uid() { return (crypto.randomUUID ? crypto.randomUUID() : ("id_" + Math.random().toString(36).slice(2))); }

function ChecklistApp() {
  const loaded = loadState();
  const [checklists, setChecklists] = useState(loaded?.checklists || (window.DEFAULT_DATA?.checklists || []));
  const [selectedId, setSelectedId] = useState(loaded?.selectedId || (checklists[0]?.id || null));
  const [search, setSearch] = useState("");
  const [showEditor, setShowEditor] = useState(false);

  const user = JSON.parse(localStorage.getItem('user') || "{}");
  const isAdmin = user.role === "admin";

  useEffect(() => { saveState({ checklists, selectedId }); }, [checklists, selectedId]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return checklists;
    return checklists.filter(c => c.name.toLowerCase().includes(q));
  }, [search, checklists]);

  const selected = useMemo(() => checklists.find(c => c.id === selectedId) || null, [checklists, selectedId]);

  const progress = useMemo(() => {
    if (!selected) return { done: 0, total: 0, pct: 0 };
    const rec = selected.records || {};
    const total = selected.items?.length || 0;
    const done = (selected.items || []).filter(it => (rec[it.id]?.status || "") === "Evet").length;
    return { done, total, pct: percent(done, total) };
  }, [selected]);

  function addChecklist() {
    const name = prompt("Yeni checklist adı?");
    if (!name) return;
    const id = uid();
    const c = { id, name, items: [], records: {} };
    setChecklists(arr => [...arr, c]);
    setSelectedId(id);
  }
  function removeChecklist(id) {
    if (!confirm("Bu checklist silinsin mi?")) return;
    setChecklists(arr => arr.filter(c => c.id !== id));
    if (selectedId === id) {
      const next = checklists.find(c => c.id !== id);
      setSelectedId(next ? next.id : null);
    }
  }
  function upsertRecord(itemId, patch) {
    setChecklists(arr => arr.map(c => {
      if (c.id !== selectedId) return c;
      return {
        ...c,
        records: { ...c.records, [itemId]: { ...(c.records?.[itemId] || {}), ...patch } }
      };
    }));
  }
  function resetSelected() {
    if (!selected) return;
    setChecklists(arr => arr.map(c => c.id === selectedId ? { ...c, records: {} } : c));
  }
  function exportJSON() {
    const blob = new Blob([ JSON.stringify({ checklists }, null, 2) ], { type: "application/json" });
    const url = URL.createObjectURL(blob); const a = document.createElement("a"); a.href = url; a.download = "checklists.json"; a.click(); URL.revokeObjectURL(url);
  }
  async function importJSON() {
    const inp = document.createElement('input'); inp.type = 'file'; inp.accept = '.json,application/json';
    inp.onchange = async () => {
      const file = inp.files?.[0]; if (!file) return;
      const text = await file.text();
      try {
        const data = JSON.parse(text);
        if (!Array.isArray(data.checklists)) throw new Error('Geçersiz biçim');
        setChecklists(data.checklists);
        setSelectedId(data.checklists[0]?.id || null);
      } catch(e) { alert('İçe aktarma hatası: ' + e.message); }
    };
    inp.click();
  }

  function addItem() {
    if (!selected) return;
    const label = prompt('Yeni madde?'); if (!label) return;
    const item = { id: uid(), label, required: false };
    setChecklists(arr => arr.map(c => c.id === selectedId ? { ...c, items: [...c.items, item] } : c));
  }
  function updateItem(itemId, patch) {
    setChecklists(arr => arr.map(c => {
      if (c.id !== selectedId) return c;
      return { ...c, items: c.items.map(it => it.id === itemId ? { ...it, ...patch } : it) };
    }));
  }
  function removeItem(itemId) {
    setChecklists(arr => arr.map(c => c.id === selectedId ? { ...c, items: c.items.filter(it => it.id !== itemId) } : c));
  }

  return (
    <div>
      <header className="sticky top-0 z-20 bg-white/80 dark:bg-neutral-900/80 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
          <div className="font-bold text-lg">Checklist Merkezi</div>
          <div className="ml-auto flex items-center gap-2">
            {isAdmin && (
              <button onClick={() => setShowEditor(s => !s)} className="px-3 py-2 rounded-xl text-sm border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800">Maddeleri Düzenle</button>
            )}
            {isAdmin && (
              <button onClick={exportJSON} className="px-3 py-2 rounded-xl text-sm border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800">Dışa Aktar</button>
            )}
            {isAdmin && (
              <button onClick={importJSON} className="px-3 py-2 rounded-xl text-sm border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800">İçe Aktar</button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-4 grid grid-cols-1 md:grid-cols-12 gap-4">
        <aside className="md:col-span-4 lg:col-span-3">
          <div className="hidden md:block sticky top-[64px] max-h-[calc(100vh-80px)] overflow-auto p-3 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <div className="flex items-center gap-2 mb-2">
              <input placeholder="Checklist ara" value={search} onChange={(e) => setSearch(e.target.value)} className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2" />
              {isAdmin && (
                <button onClick={addChecklist} className="px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800">+ Ekle</button>
              )}
            </div>
            <ul className="space-y-1">
              {filtered.map((c) => (
                <li key={c.id} className={\`group flex items-center gap-2 p-2 rounded-xl cursor-pointer \${selectedId===c.id?"bg-neutral-100 dark:bg-neutral-800":"hover:bg-neutral-50 dark:hover:bg-neutral-800/60"}\`} onClick={() => setSelectedId(c.id)}>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{c.name}</div>
                    <ProgressBar pct={(() => { const rec=c.records||{}; const t=c.items?.length||0; const d=(c.items||[]).filter(it => (rec[it.id]?.status||"")==="Evet").length; return percent(d,t); })()} />
                  </div>
                  {isAdmin && (
                    <button onClick={(e) => { e.stopPropagation(); removeChecklist(c.id); }} className="opacity-0 group-hover:opacity-100 transition px-2 py-1 text-xs rounded-lg border border-red-300 text-red-600 hover:bg-red-50">Sil</button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <section className="md:col-span-8 lg:col-span-9">
          {!selected ? (
            <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">Checklist seçiniz.</div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-semibold flex-1">{selected.name}</h2>
                {isAdmin && (
                  <div className="hidden md:flex items-center gap-2">
                    <button onClick={resetSelected} className="px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700">Sıfırla</button>
                  </div>
                )}
              </div>

              <Card>
                <div className="flex items-center gap-3">
                  <ProgressCircle pct={progress.pct} />
                  <div>
                    <div className="text-sm text-neutral-500">Tamamlanan</div>
                    <div className="font-semibold">{progress.done} / {progress.total} (%{progress.pct})</div>
                  </div>
                </div>
              </Card>

              <div className="space-y-2">
                {(selected.items || []).map((item) => (
                  <Card key={item.id}>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-3">
                      <div className="flex-1">
                        <div className="font-medium">{item.label} {item.required && (<span className="ml-2 inline-block text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 align-middle">Zorunlu</span>)}</div>
                        <div className="text-xs text-neutral-500">Madde ID: {item.id.slice(0,8)}…</div>
                      </div>
                      <div className="flex flex-wrap gap-2 items-center">
                        <Select value={(selected.records?.[item.id]?.status) || ""} onChange={(v) => upsertRecord(item.id, { status: v })} options={["", "Evet", "Hayır", "Uygulanmaz"]} />
                        <input placeholder="Not" value={(selected.records?.[item.id]?.note) || ""} onChange={(e) => upsertRecord(item.id, { note: e.target.value })} className="flex-1 min-w-[160px] rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2" />
                        <input placeholder="Fotoğraf URL" value={(selected.records?.[item.id]?.photo) || ""} onChange={(e) => upsertRecord(item.id, { photo: e.target.value })} className="w-[180px] rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2" />
                      </div>
                    </div>
                    {(selected.records?.[item.id]?.photo) ? (
                      <div className="mt-3">
                        <img src={selected.records[item.id].photo} alt="Fotoğraf" className="max-h-48 rounded-xl border border-neutral-200 dark:border-neutral-800 object-contain" />
                      </div>
                    ) : null}
                  </Card>
                ))}
              </div>
            </div>
          )}
        </section>
      </main>

      {isAdmin && showEditor && selected && (
        <Modal onClose={() => setShowEditor(false)} title={\`Maddeleri Düzenle — \${selected.name}\`}>
          <div className="space-y-3">
            {(selected.items || []).map((it) => (
              <div key={it.id} className="flex items-center gap-2">
                <input value={it.label} onChange={(e) => updateItem(it.id, { label: e.target.value })} className="flex-1 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2" />
                <label className="text-sm flex items-center gap-2"><input type="checkbox" checked={!!it.required} onChange={(e) => updateItem(it.id, { required: e.target.checked })} /> Zorunlu</label>
                <button onClick={() => removeItem(it.id)} className="px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800">Sil</button>
              </div>
            ))}
            <div className="flex items-center justify-between">
              <button onClick={addItem} className="px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700">+ Madde</button>
              <button onClick={() => setShowEditor(false)} className="px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700">Kapat</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

function Card({ children }) { return (<div className="p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm">{children}</div>); }
function Modal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full sm:max-w-2xl sm:w-[640px] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-t-2xl sm:rounded-2xl p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="text-lg font-semibold flex-1">{title}</div>
          <button onClick={onClose} className="px-3 py-1.5 rounded-xl border border-neutral-300 dark:border-neutral-700">Kapat</button>
        </div>
        {children}
      </div>
    </div>
  );
}
function ProgressBar({ pct }) { return (<div className="mt-1 h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden"><div className="h-full bg-emerald-500" style={{ width: pct + "%" }} /></div>); }
function ProgressCircle({ pct }) {
  const size = 54, stroke = 7, r = (size - stroke) / 2, c = 2 * Math.PI * r, dash = (pct / 100) * c;
  return (
    <svg width={size} height={size} viewBox={\`0 0 \${size} \${size}\`}>
      <circle cx={size/2} cy={size/2} r={r} strokeWidth={stroke} stroke="#e5e7eb" fill="none" />
      <circle cx={size/2} cy={size/2} r={r} strokeWidth={stroke} strokeLinecap="round" stroke="#10b981" fill="none" strokeDasharray={\`\${dash} \${c}\`} transform={\`rotate(-90 \${size/2} \${size/2})\`} />
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="12" className="fill-neutral-700 dark:fill-neutral-200">{pct}%</text>
    </svg>
  );
}
function Select({ value, onChange, options }) { return (<select value={value} onChange={(e) => onChange(e.target.value)} className="rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2">{options.map(o => (<option key={o} value={o}>{o || "Seçin"}</option>))}</select>); }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ChecklistApp />);
