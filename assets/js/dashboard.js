document.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const container = document.getElementById('dashboardData');
  if (!user) {
    window.location.href = 'login.html';
    return;
  }

  const state = JSON.parse(localStorage.getItem('checklist-multi-v1') || '{}');
  const checklists = state.checklists || [];

  if (!checklists.length) {
    container.innerHTML = '<p class="text-neutral-500">Henüz checklist bulunamadı.</p>';
    return;
  }

  let html = '';
  checklists.forEach(c => {
    const total = c.items?.length || 0;
    const rec = c.records || {};
    const done = (c.items || []).filter(it => (rec[it.id]?.status || "") === "Evet").length;
    const pct = total ? Math.round((done/total)*100) : 0;
    html += `
      <div class="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow space-y-2">
        <h3 class="font-semibold text-lg">${c.name}</h3>
        <div class="h-2 rounded-full bg-neutral-200 dark:bg-neutral-700 overflow-hidden">
          <div class="h-full bg-emerald-500" style="width:${pct}%"></div>
        </div>
        <p class="text-sm text-neutral-500">${done} / ${total} tamamlandı (%${pct})</p>
      </div>
    `;
  });

  container.innerHTML = html;
});