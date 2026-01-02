const data = {
  office: {
    news: [
      { title: 'Project milestone achieved', body: 'Phase 2 drawings submitted to client.', author: 'Communications', timestamp: 'Today 09:10', priority: 'info' },
      { title: 'Fire drill reminder', body: 'Building-wide drill scheduled Friday 10:00.', author: 'Admin', timestamp: 'Today 08:00', priority: 'warning' }
    ],
    policies: [
      { title: 'Updated QA checklist', body: 'Applies to electrical and HVAC deliverables.', author: 'QA Team', timestamp: 'Yesterday', priority: 'info' },
      { title: 'Hybrid work guidance', body: 'Clarifies on-site expectations for design reviews.', author: 'HR', timestamp: 'Yesterday', priority: 'info' }
    ],
    polls: [
      { title: 'Preferred BIM coordination slot', body: 'Vote for Tuesday or Thursday.', author: 'Coordination', timestamp: 'Open now', priority: 'success' },
      { title: 'Wellbeing townhall topics', body: 'Choose topics for next session.', author: 'Office Ops', timestamp: 'Closes in 2d', priority: 'success' }
    ]
  },
  employee: {
    leave: [
      { title: 'Annual leave', body: '4-8 March', requester: 'A. Nguyen', status: 'Pending', timestamp: 'Submitted 1h ago' },
      { title: 'Study leave', body: '12 April', requester: 'L. Tran', status: 'Approved', timestamp: 'Updated 2d ago' }
    ],
    items: [
      { title: 'Laptop for new hire', body: 'Revit-ready workstation', requester: 'K. Chan', status: 'In progress', timestamp: 'Submitted 3h ago' },
      { title: 'Noise-cancelling headset', body: 'For open office zone', requester: 'M. Rahman', status: 'Pending', timestamp: 'Submitted 1d ago' }
    ],
    defects: [
      { title: 'Plotter jam', body: 'Error 43 on floor 3', requester: 'V. Singh', status: 'Pending', timestamp: 'Submitted 25m ago' },
      { title: 'Lighting issue', body: 'Lux too low in zone B', requester: 'D. Le', status: 'In progress', timestamp: 'Submitted 2d ago' }
    ]
  },
  program: {
    meetings: [
      { title: 'MEP coordination', body: 'Focus on duct-routing conflicts.', tasks: 4, participants: ['EE', 'HVAC', 'FP'], attachments: 3, time: 'Today 14:00' },
      { title: 'Client review', body: 'Package A revisions walkthrough.', tasks: 2, participants: ['PM', 'Lead Engineers'], attachments: 2, time: 'Tomorrow 10:00' }
    ],
    workshops: [
      { title: 'Lighting design QA', body: 'Calcs + photometrics refresh.', tasks: 3, participants: ['Lighting', 'QA'], attachments: 1, time: 'Thu 15:00' }
    ],
    trainings: [
      { title: 'CFD refresher', body: 'Airflow modelling for atriums.', tasks: 5, participants: ['HVAC'], attachments: 2, time: 'Fri 09:00' },
      { title: 'Arc flash updates', body: 'IEEE changes overview.', tasks: 4, participants: ['EE'], attachments: 1, time: 'Next Mon 11:00' }
    ],
    events: [
      { title: 'Wellbeing run', body: 'Community park 5k.', tasks: 1, participants: ['All'], attachments: 0, time: 'Sat 07:00' }
    ]
  },
  knowledge: {
    ee: [
      { title: 'UPS sizing tips', body: 'Checklist for branch panels.', tags: ['files', 'links'], author: 'EE Guild' },
      { title: 'Cable derating', body: 'Ambient corrections reference.', tags: ['files'], author: 'EE Guild' }
    ],
    hvac: [
      { title: 'Cooling load traps', body: 'Common pitfalls for open offices.', tags: ['links'], author: 'HVAC Guild' }
    ],
    sn: [
      { title: 'Low-voltage labelling', body: 'Consistent device IDs.', tags: ['pictures', 'files'], author: 'SN Guild' }
    ],
    fp: [
      { title: 'Pump selection', body: 'Curve matching examples.', tags: ['files'], author: 'FP Guild' }
    ],
    cad: [
      { title: 'Revit shortcuts', body: 'Modelling speed best practices.', tags: ['links'], author: 'CAD Team' }
    ],
    other: [
      { title: 'Specification writing', body: 'Clear notes for clients.', tags: ['files', 'links'], author: 'PMO' }
    ],
    calendar: [
      { day: 'Mon', session: 'EE Lab talk', owner: 'EE', link: 'Room 2' },
      { day: 'Tue', session: 'HVAC Q&A', owner: 'HVAC', link: 'Room 3' },
      { day: 'Wed', session: 'CAD Clinic', owner: 'CAD', link: 'Room 1' },
      { day: 'Thu', session: 'Fire protection huddle', owner: 'FP', link: 'Room 4' },
      { day: 'Fri', session: 'Standards review', owner: 'PMO', link: 'Hybrid' }
    ]
  },
  facilities: {
    rooms: [
      { title: 'Meeting Room 1', body: '8 pax, display', next: 'Booked 11:00-12:00', status: 'Available' },
      { title: 'Meeting Room 2', body: '10 pax, VC ready', next: 'Reserved 15:00-17:00', status: 'Reserved' },
      { title: 'Meeting Room 3', body: '6 pax', next: 'Available', status: 'Available' },
      { title: 'Meeting Room 4', body: '12 pax, board layout', next: 'Cleaning 13:00', status: 'Blocked' }
    ],
    zoom: [
      { title: 'Zoom Account 1', body: 'Shared login', next: 'Held 09:00-09:45', status: 'In use' },
      { title: 'Zoom Account 2', body: 'Backup account', next: 'Free all day', status: 'Available' }
    ],
    myReservations: [
      { title: 'Room 2', body: 'Design sprint', slot: 'Thu 14:00-16:00', status: 'Confirmed' },
      { title: 'Zoom 1', body: 'Client demo', slot: 'Fri 09:30-10:30', status: 'Pending' }
    ],
    allReservations: [
      { title: 'Room 1', body: 'QA sync', slot: 'Today 16:00-17:00', status: 'Confirmed' },
      { title: 'Room 3', body: 'Vendor brief', slot: 'Tomorrow 11:00-12:00', status: 'Confirmed' },
      { title: 'Zoom 2', body: 'Townhall', slot: 'Fri 15:00-17:00', status: 'Hold' }
    ],
    calendar: [
      { day: 'Mon', facility: 'Room 1', usage: 'AM busy' },
      { day: 'Tue', facility: 'Room 2', usage: 'PM busy' },
      { day: 'Wed', facility: 'Room 4', usage: 'Full' },
      { day: 'Thu', facility: 'Room 2', usage: 'PM reserved' },
      { day: 'Fri', facility: 'Zoom 1', usage: 'Townhall' }
    ]
  }
};

const wellbeingFloors = ['2nd floor', '3rd floor', '4th floor', '5th floor'];

const wellbeingState = {
  air: wellbeingFloors.map(floor => ({ floor, pm25: 12, co: 0.4, co2: 720, temp: 24, trend: 'Stable' })),
  noise: wellbeingFloors.map(floor => ({ floor, db: 46, trend: 'Stable' })),
  illumination: wellbeingFloors.map(floor => ({ floor, lux: 420, trend: 'Stable' })),
  power: wellbeingFloors.map(floor => ({ floor, kwh: 320, kw: 75, trend: 'Stable' }))
};

const activities = [
  'New knowledge post added to EE',
  'Room 2 booked for design sprint',
  'Wellbeing readings refreshed',
  'Leave request submitted by A. Nguyen'
];

const statusMap = {
  Pending: 'warning',
  Approved: 'success',
  'In progress': 'info',
  Reserved: 'warning',
  Available: 'success',
  Blocked: 'danger',
  Confirmed: 'success',
  Hold: 'warning',
  'In use': 'warning'
};

function select(selector, scope = document) {
  return scope.querySelector(selector);
}

function selectAll(selector, scope = document) {
  return Array.from(scope.querySelectorAll(selector));
}

function renderCards(items, panel, { extraMeta } = {}) {
  panel.innerHTML = '';
  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'item-card';
    const tagClass = item.priority ? `tag ${priorityClass(item.priority)}` : item.status ? `tag ${statusClass(item.status)}` : 'tag info';
    const tagLabel = item.status || item.priority || 'Info';
    card.innerHTML = `
      <div class="title-row">
        <div>
          <h3>${item.title}</h3>
          <p class="muted">${item.body || ''}</p>
        </div>
        <span class="${tagClass}">${tagLabel}</span>
      </div>
      ${item.author ? `<div class="meta"><span>By ${item.author}</span><span>${item.timestamp || ''}</span></div>` : ''}
      ${item.requester ? `<div class="meta"><span>Requester: ${item.requester}</span><span>${item.timestamp}</span></div>` : ''}
      ${item.participants ? `<div class="meta"><span>Participants: ${item.participants.join(', ')}</span><span>Tasks: ${item.tasks}</span><span>Attachments: ${item.attachments}</span><span>${item.time}</span></div>` : ''}
      ${item.tags ? `<div class="meta">${item.tags.map(tag => `<span class="tag info">${tag}</span>`).join('')}</div>` : ''}
      ${item.next ? `<div class="meta"><span>${item.next}</span></div>` : ''}
      ${item.slot ? `<div class="meta"><span>${item.slot}</span></div>` : ''}
      ${extraMeta ? `<div class="meta">${extraMeta(item)}</div>` : ''}
    `;
    panel.appendChild(card);
  });
}

function priorityClass(priority) {
  if (priority === 'warning') return 'tag warning';
  if (priority === 'success') return 'tag success';
  return 'tag info';
}

function statusClass(status) {
  return `tag ${statusMap[status] || 'info'}`;
}

function bindTabs(sectionId, tabData) {
  const section = document.getElementById(sectionId);
  const tabs = selectAll('.tab', section);
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const targetId = tab.dataset.target;
      selectAll('.tab-panel', section).forEach(panel => panel.classList.remove('active'));
      const panel = document.getElementById(targetId);
      panel.classList.add('active');
      renderForTab(targetId, tabData);
    });
  });
  const activeTab = tabs.find(t => t.classList.contains('active'));
  if (activeTab) renderForTab(activeTab.dataset.target, tabData);
}

function renderForTab(panelId, tabData) {
  const dataset = tabData[panelId];
  if (!dataset) return;
  const panel = document.getElementById(panelId);
  renderCards(dataset.items, panel, dataset.options);
}

function applyViewToggle(sectionId) {
  const section = document.getElementById(sectionId);
  const buttons = selectAll('.view-toggle button', section);
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const view = btn.dataset.view;
      const activePanel = select('.tab-panel.active', section);
      if (activePanel) {
        if (view === 'list') activePanel.classList.add('list-view');
        else activePanel.classList.remove('list-view');
      }
    });
  });
}

function renderHomeStats() {
  const stats = [
    { title: 'Office updates', value: data.office.news.length + data.office.policies.length + data.office.polls.length },
    { title: 'Pending requests', value: data.employee.leave.length + data.employee.items.length + data.employee.defects.length },
    { title: 'Sessions today', value: data.program.meetings.length },
    { title: 'Knowledge posts', value: data.knowledge.ee.length + data.knowledge.hvac.length + data.knowledge.sn.length + data.knowledge.fp.length + data.knowledge.cad.length + data.knowledge.other.length },
    { title: 'Reservations today', value: data.facilities.rooms.length + data.facilities.zoom.length },
    { title: 'Wellbeing index', value: 92 }
  ];

  const container = document.getElementById('homeStats');
  container.innerHTML = '';
  stats.forEach(stat => {
    const div = document.createElement('div');
    div.className = 'stat-card';
    div.innerHTML = `<h3>${stat.title}</h3><div class="stat-value">${stat.value}</div>`;
    container.appendChild(div);
  });
}

function renderActivities() {
  const list = document.getElementById('activityList');
  list.innerHTML = '';
  activities.slice(-6).forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });
}

function renderCalendar(dataSet, targetId) {
  const cal = document.getElementById(targetId);
  cal.innerHTML = '';
  dataSet.forEach(entry => {
    const cell = document.createElement('div');
    cell.className = 'calendar-cell';
    cell.innerHTML = `<strong>${entry.day}</strong><div class="muted">${entry.session || entry.facility}</div><div>${entry.link || entry.usage}</div>`;
    cal.appendChild(cell);
  });
}

function renderWellbeing(panelId, values, renderFn) {
  const panel = document.getElementById(panelId);
  panel.innerHTML = '';
  values.forEach(renderFn(panel));
}

function wellbeingCard(panel) {
  return reading => {
    const card = document.createElement('div');
    card.className = 'item-card';
    const recommendation = wellbeingAdvice(reading);
    card.innerHTML = `
      <div class="title-row">
        <h3>${reading.floor}</h3>
        <span class="tag ${recommendation.level}">${recommendation.label}</span>
      </div>
      <div class="metric-row"><span class="metric-value">PM2.5 ${reading.pm25} µg/m³</span><span>CO ${reading.co} ppm</span><span>CO₂ ${reading.co2} ppm</span><span>${reading.temp}°C</span></div>
      <div class="meta">${recommendation.text}</div>
    `;
    panel.appendChild(card);
  };
}

function noiseCard(panel) {
  return reading => {
    const tag = reading.db > 60 ? 'warning' : 'success';
    const text = reading.db > 60 ? 'Reduce noise sources near workstations.' : 'Noise within comfort range.';
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
      <div class="title-row"><h3>${reading.floor}</h3><span class="tag ${tag}">${reading.db} dB</span></div>
      <div class="meta">${text}</div>
    `;
    panel.appendChild(card);
  };
}

function illuminationCard(panel) {
  return reading => {
    const tag = reading.lux < 300 ? 'warning' : 'success';
    const text = reading.lux < 300 ? 'Increase illumination for tasks requiring precision.' : 'Lighting meets office target range.';
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
      <div class="title-row"><h3>${reading.floor}</h3><span class="tag ${tag}">${reading.lux} lux</span></div>
      <div class="meta">${text}</div>
    `;
    panel.appendChild(card);
  };
}

function powerCard(panel) {
  return reading => {
    const tag = reading.kw > 90 ? 'warning' : 'info';
    const text = reading.kw > 90 ? 'Demand high - review schedule.' : 'Usage within target.';
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
      <div class="title-row"><h3>${reading.floor}</h3><span class="tag ${tag}">${reading.kw} kW</span></div>
      <div class="meta">${reading.kwh} kWh today. ${text}</div>
    `;
    panel.appendChild(card);
  };
}

function wellbeingAdvice(reading) {
  if (reading.co2 > 1000 || reading.pm25 > 35) {
    return { label: 'Attention', level: 'warning', text: 'Increase ventilation and limit occupancy temporarily.' };
  }
  return { label: 'Good', level: 'success', text: 'Indoor air quality is within the target range.' };
}

function refreshWellbeing() {
  wellbeingState.air.forEach(r => {
    r.pm25 = Math.max(8, Math.round(10 + Math.random() * 20));
    r.co = +(0.3 + Math.random() * 0.6).toFixed(2);
    r.co2 = Math.round(620 + Math.random() * 500);
    r.temp = Math.round(23 + Math.random() * 2);
  });
  wellbeingState.noise.forEach(r => { r.db = Math.round(42 + Math.random() * 25); });
  wellbeingState.illumination.forEach(r => { r.lux = Math.round(320 + Math.random() * 220); });
  wellbeingState.power.forEach(r => {
    r.kwh = Math.round(280 + Math.random() * 140);
    r.kw = Math.round(60 + Math.random() * 50);
  });
  renderHomeStats();
  renderWellbeingPanels();
  activities.push('Wellbeing readings refreshed');
  renderActivities();
}

function renderTabs() {
  bindTabs('office-updates', {
    'office-news': { items: data.office.news },
    'office-policies': { items: data.office.policies },
    'office-polls': { items: data.office.polls }
  });
  bindTabs('employee-hub', {
    'leave-requests': { items: data.employee.leave },
    'item-requests': { items: data.employee.items },
    'defect-reports': { items: data.employee.defects }
  });
  bindTabs('program-calendar', {
    'internal-meetings': { items: data.program.meetings },
    'workshops': { items: data.program.workshops },
    'trainings': { items: data.program.trainings },
    'events': { items: data.program.events }
  });
  bindTabs('tech-knowledge', {
    'tech-ee': { items: data.knowledge.ee },
    'tech-hvac': { items: data.knowledge.hvac },
    'tech-sn': { items: data.knowledge.sn },
    'tech-fp': { items: data.knowledge.fp },
    'tech-cad': { items: data.knowledge.cad },
    'tech-other': { items: data.knowledge.other }
  });
  bindTabs('shared-facilities', {
    rooms: { items: data.facilities.rooms, options: { extraMeta: item => `Next: ${item.next}` } },
    zoom: { items: data.facilities.zoom, options: { extraMeta: item => `Next: ${item.next}` } },
    'my-reservations': { items: data.facilities.myReservations, options: { extraMeta: item => `Date: ${item.slot}` } },
    'all-reservations': { items: data.facilities.allReservations, options: { extraMeta: item => `Date: ${item.slot}` } }
  });
  bindTabs('wellbeing', {
    'air-quality': { items: wellbeingState.air },
    noise: { items: wellbeingState.noise },
    illumination: { items: wellbeingState.illumination },
    power: { items: wellbeingState.power }
  });
}

function renderWellbeingPanels() {
  renderWellbeing('air-quality', wellbeingState.air, wellbeingCard);
  renderWellbeing('noise', wellbeingState.noise, noiseCard);
  renderWellbeing('illumination', wellbeingState.illumination, illuminationCard);
  renderWellbeing('power', wellbeingState.power, powerCard);
}

function initNav() {
  selectAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      selectAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  selectAll('.shortcut').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.querySelector(btn.dataset.target);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  const sidebar = document.getElementById('sidebar');
  select('#collapseSidebar').addEventListener('click', () => sidebar.classList.add('collapsed'));
  select('#openSidebar').addEventListener('click', () => sidebar.classList.remove('collapsed'));
}

function initViewToggles() {
  ['office-updates', 'employee-hub', 'program-calendar', 'tech-knowledge', 'shared-facilities', 'wellbeing'].forEach(sectionId => applyViewToggle(sectionId));
}

function initSignin() {
  const modal = select('#signinModal');
  const openButtons = [select('#openSignin'), select('#openSigninTop')];
  openButtons.forEach(btn => btn.addEventListener('click', () => modal.hidden = false));
  select('#closeSignin').addEventListener('click', () => modal.hidden = true);
  select('#cancelSignin').addEventListener('click', () => modal.hidden = true);

  select('#signinForm').addEventListener('submit', event => {
    event.preventDefault();
    const form = new FormData(event.target);
    const role = form.get('role');
    const email = form.get('email');
    select('#signinStatus').textContent = `${role} signed in`;
    select('#roleBadge').textContent = role;
    select('#openSigninTop').textContent = email.split('@')[0];
    activities.push(`${role} signed in: ${email}`);
    renderActivities();
    modal.hidden = true;
  });
}

function initHomeActions() {
  select('#refreshMetrics').addEventListener('click', refreshWellbeing);
  select('#clearActivities').addEventListener('click', () => {
    activities.length = 0;
    renderActivities();
  });
}

function init() {
  initNav();
  initSignin();
  initViewToggles();
  initHomeActions();
  renderHomeStats();
  renderActivities();
  renderTabs();
  renderCalendar(data.knowledge.calendar, 'techCalendar');
  renderCalendar(data.facilities.calendar, 'facilityCalendar');
  renderWellbeingPanels();
  setInterval(refreshWellbeing, 120000);
}

document.addEventListener('DOMContentLoaded', init);
