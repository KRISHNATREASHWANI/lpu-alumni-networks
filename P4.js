const INDUSTRIES = ['Software', 'Core Engg', 'Finance', 'Higher Studies'];

const MENTORS = [
  { id:'m1', name:'Priya Nandakumar', batch:2014, industry:'Software', jobTitle:'Staff Software Engineer', company:'Voltframe Systems',
    linkedin:'https://linkedin.com/in/priya-nandakumar-demo',
    domainExpertise:['Distributed systems','Backend APIs'],
    mentoringTopics:['Interview prep','Career pivots to staff engineer','Resume review'],
    slots:[
      {id:'s1', date:'Sat, Sep 19', time:'10:00 AM', taken:false},
      {id:'s2', date:'Sat, Sep 19', time:'4:00 PM', taken:true},
      {id:'s3', date:'Sun, Sep 27', time:'11:00 AM', taken:false},
    ]},
  { id:'m2', name:'Aarav Deshmukh', batch:2019, industry:'Software', jobTitle:'SDE II', company:'Nimbus Cloud',
    linkedin:'https://linkedin.com/in/aarav-deshmukh-demo',
    domainExpertise:['Cloud infrastructure','Kubernetes'],
    mentoringTopics:['System design interviews','Open source contributions'],
    slots:[
      {id:'s4', date:'Sun, Sep 20', time:'3:00 PM', taken:false},
      {id:'s5', date:'Sat, Sep 26', time:'10:00 AM', taken:false},
    ]},
  { id:'m3', name:'Marcus Whitfield', batch:2016, industry:'Software', jobTitle:'Machine Learning Engineer', company:'Corvid Analytics',
    linkedin:'https://linkedin.com/in/marcus-whitfield-demo',
    domainExpertise:['Machine learning','Fraud detection models'],
    mentoringTopics:['ML fundamentals','Portfolio review','Grad school vs. industry'],
    slots:[
      {id:'s6', date:'Sat, Sep 19', time:'6:00 PM', taken:false},
      {id:'s7', date:'Sun, Sep 20', time:'11:00 AM', taken:true},
    ]},
  { id:'m4', name:'Sanjay Rathore', batch:2010, industry:'Core Engg', jobTitle:'Design Engineer', company:'Trident Motors',
    linkedin:'https://linkedin.com/in/sanjay-rathore-demo',
    domainExpertise:['Automotive design','CAD / CAM'],
    mentoringTopics:['Core vs. software career choice','PSU exam prep'],
    slots:[
      {id:'s8', date:'Sat, Sep 26', time:'11:00 AM', taken:false},
      {id:'s9', date:'Sun, Sep 27', time:'2:00 PM', taken:false},
    ]},
  { id:'m5', name:'Meera Kulkarni', batch:2013, industry:'Core Engg', jobTitle:'Site Engineer', company:'Ashland Infrastructure',
    linkedin:'https://linkedin.com/in/meera-kulkarni-demo',
    domainExpertise:['Structural engineering','Project execution'],
    mentoringTopics:['On-site vs. desk roles','GATE preparation'],
    slots:[
      {id:'s10', date:'Sun, Sep 20', time:'10:00 AM', taken:true},
    ]},
  { id:'m6', name:'Devika Rao', batch:2015, industry:'Core Engg', jobTitle:'Process Engineer', company:'Bellweather Chemicals',
    linkedin:'https://linkedin.com/in/devika-rao-demo',
    domainExpertise:['Process design','Plant operations'],
    mentoringTopics:['Core engineering interviews','Working in PSUs'],
    slots:[
      {id:'s11', date:'Sat, Sep 19', time:'1:00 PM', taken:false},
      {id:'s12', date:'Sat, Sep 26', time:'1:00 PM', taken:false},
    ]},
  { id:'m7', name:'Daniel Osei', batch:2009, industry:'Finance', jobTitle:'VP, Equity Research', company:'Marlow & Finch',
    linkedin:'https://linkedin.com/in/daniel-osei-demo',
    domainExpertise:['Equity research','Industrials coverage'],
    mentoringTopics:['Breaking into research','Resume review','Networking'],
    slots:[
      {id:'s13', date:'Sun, Sep 20', time:'12:00 PM', taken:false},
      {id:'s14', date:'Sun, Sep 27', time:'5:00 PM', taken:false},
    ]},
  { id:'m8', name:'Ishaan Chatterjee', batch:2017, industry:'Finance', jobTitle:'Associate', company:'Falkridge Capital',
    linkedin:'https://linkedin.com/in/ishaan-chatterjee-demo',
    domainExpertise:['Investment banking','Mergers & acquisitions'],
    mentoringTopics:['IB recruiting','Networking on campus'],
    slots:[
      {id:'s15', date:'Sat, Sep 19', time:'9:00 AM', taken:false},
    ]},
  { id:'m9', name:'Sofia Marchetti', batch:2015, industry:'Higher Studies', jobTitle:'PhD Candidate, Applied Physics', company:'Lindberg Institute of Technology',
    linkedin:'https://linkedin.com/in/sofia-marchetti-demo',
    domainExpertise:['Applied physics research','Grant writing'],
    mentoringTopics:['PhD applications','Statement of purpose review','Gap years'],
    slots:[
      {id:'s16', date:'Sun, Sep 20', time:'9:00 AM', taken:false},
      {id:'s17', date:'Sun, Sep 27', time:'9:00 AM', taken:false},
    ]},
  { id:'m10', name:'Karan Vora', batch:2021, industry:'Higher Studies', jobTitle:'MS Student, Computer Science', company:'Redwater University',
    linkedin:'https://linkedin.com/in/karan-vora-demo',
    domainExpertise:['Computer science research','Teaching assistantships'],
    mentoringTopics:['GRE strategy','MS applications abroad','Funding & assistantships'],
    slots:[
      {id:'s18', date:'Sat, Sep 26', time:'3:00 PM', taken:false},
      {id:'s19', date:'Sat, Sep 26', time:'5:00 PM', taken:true},
    ]},
];

/* ---------------------------------------------------------
   Mentor photos — add yours here.
   Use a file path next to this HTML file (e.g. 'images/priya.jpg'),
   a full image URL, or a base64 data URI. Leave '' to show initials.
   You can also upload a photo from inside the app (open a mentor
   and press "Add photo"), but uploads reset when the page refreshes.
--------------------------------------------------------- */
const MENTOR_PHOTOS = {
  m1:'',  // Priya Nandakumar
  m2:'',  // Aarav Deshmukh
  m3:'',  // Marcus Whitfield
  m4:'',  // Sanjay Rathore
  m5:'',  // Meera Kulkarni
  m6:'',  // Devika Rao
  m7:'',  // Daniel Osei
  m8:'',  // Ishaan Chatterjee
  m9:'',  // Sofia Marchetti
  m10:'', // Karan Vora
};
/* ---------------------------------------------------------
   Mentor descriptions — dummy text, replace with the real ones.
--------------------------------------------------------- */
const MENTOR_DESCRIPTIONS = {
  m1:'Priya has spent over a decade building backend platforms that serve millions of users. She enjoys helping students move from coursework to real engineering and prepare for tough technical interviews.',
  m2:'Aarav works on cloud infrastructure and loves explaining how large systems stay reliable. He mentors students on system design, open source, and landing a first software role.',
  m3:'Marcus builds machine learning models that catch fraud in real time. He is happy to talk through ML fundamentals, portfolio projects, and the choice between grad school and industry.',
  m4:'Sanjay designs vehicle components and has worked on the shop floor and in the design office. He guides students weighing a core engineering career against software, and those preparing for PSU exams.',
  m5:'Meera manages structural work on large construction sites. She can tell you what a day on site really looks like and how to prepare for GATE alongside a job.',
  m6:'Devika works on chemical process design and plant operations. She helps students understand core engineering interviews and what working in a PSU is like.',
  m7:'Daniel covers industrial companies as an equity research analyst. He mentors students who want to break into finance, from resume reviews to building a network.',
  m8:'Ishaan works in investment banking on mergers and acquisitions deals. He shares how campus recruiting works and how to stand out in a competitive finance process.',
  m9:'Sofia is completing her PhD in applied physics and has reviewed many applications. She supports students with statements of purpose, research fit, and deciding whether to take a gap year.',
  m10:'Karan moved straight from his undergraduate degree to a computer science master\'s abroad. He helps with GRE planning, shortlisting universities, and finding funding.',
};
MENTORS.forEach(m => {
  m.photo = MENTOR_PHOTOS[m.id] || '';
  m.description = MENTOR_DESCRIPTIONS[m.id] || '';
});

const COMPANIES = [...new Set(MENTORS.map(m => m.company))].sort();

const RESOURCES = [
  { id:'r1', cat:'Applications', title:'Writing a resume alumni will actually read', detail:'Lead with outcomes, not duties. Cut anything from before your current degree unless it changes the story. One page, always, before your first full-time role.' },
  { id:'r2', cat:'Networking', title:'How to ask for a mentor conversation without sounding transactional', detail:'Name one specific thing about their path before asking for time. Propose a length (20 minutes) and let them choose the slot from what you offer.' },
  { id:'r3', cat:'Interviews', title:'What to do in the 48 hours before a case interview', detail:'Redo two frameworks from memory rather than reading five new ones. Sleep matters more than one extra practice case.' },
  { id:'r4', cat:'Core vs. software', title:'Deciding between a core engineering role and a software role', detail:'Look at what you did in your best internship, not your best exam. The work you kept doing after the deadline passed is the signal.' },
  { id:'r5', cat:'Higher studies', title:'Deciding between grad school now or after a few years working', detail:'If you cannot name what the degree unlocks that experience alone would not, working first usually sharpens the answer.' },
];

/* ---------------------------------------------------------
   State
--------------------------------------------------------- */
const state = {
  view: 'home',
  user: null,                 // {name, email, role} when logged in
  accounts: [],               // {name, email, role, salt, hash}; saved in this browser
  requestStore: {},           // each user's requests, saved while they are logged out
  authMode: 'login',
  afterLogin: null,           // mentor id to reopen after logging in
  filters: { industries: [], company: 'all', batchFrom: '', batchTo: '', query: '' },
  requests: [],   // {id, mentorId, topic, question, resumeLink, slotId|null, status, sentAt}
  panelMentorId: null,
  selectedSlotId: null,
};

/* ---------------------------------------------------------
   Helpers
--------------------------------------------------------- */
function initials(name){ return name.split(' ').map(p => p[0]).slice(0,2).join(''); }
function avatarHtml(m, sizeClass){
  const ini = initials(m.name);
  if (m.photo){
    return `<div class="avatar ${sizeClass}"><img src="${m.photo}" alt="${escapeHtml(m.name)}" onerror="this.parentNode.textContent='${ini}'"></div>`;
  }
  return `<div class="avatar ${sizeClass}" aria-hidden="true">${ini}</div>`;
}
function mentorById(id){ return MENTORS.find(m => m.id === id); }
function slotById(mentor, slotId){ return mentor.slots.find(s => s.id === slotId); }
function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => t.classList.remove('show'), 2800);
}

function filteredMentors(){
  return MENTORS.filter(m => {
    if (state.filters.industries.length && !state.filters.industries.includes(m.industry)) return false;
    if (state.filters.company !== 'all' && m.company !== state.filters.company) return false;
    if (state.filters.batchFrom && m.batch < Number(state.filters.batchFrom)) return false;
    if (state.filters.batchTo && m.batch > Number(state.filters.batchTo)) return false;
    const q = state.filters.query.trim().toLowerCase();
    if (q){
      const hay = (m.name + ' ' + m.jobTitle + ' ' + m.company + ' ' + m.domainExpertise.join(' ') + ' ' + m.mentoringTopics.join(' ')).toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

/* ---------------------------------------------------------
   Nav
--------------------------------------------------------- */
function renderNav(){
  const tabs = [
    { id:'directory', label:'Directory' },
    { id:'mentorship', label:'My mentorship' },
    { id:'resources', label:'Resources' },
  ];
  const top = document.getElementById('topNav');
  top.innerHTML = tabs.map(t => `<button data-view="${t.id}" class="${state.view===t.id?'active':''}">${t.label}</button>`).join('');
  top.querySelectorAll('button').forEach(b => b.addEventListener('click', () => setView(b.dataset.view)));

  const bottom = document.getElementById('bottomNav');
  bottom.innerHTML = tabs.map(t => `<button data-view="${t.id}" class="${state.view===t.id?'active':''}">${t.label}</button>`).join('');
  bottom.querySelectorAll('button').forEach(b => b.addEventListener('click', () => setView(b.dataset.view)));
}
function setView(v){ state.view = v; render(); window.scrollTo({top:0, behavior:'auto'}); }

/* ---------------------------------------------------------
   Directory
--------------------------------------------------------- */
function renderDirectory(){
  const list = filteredMentors();

  return `
    <div class="view-head">
      <h2>Find a mentor from the registry</h2>
      <p>Filter by industry, company, or graduation batch, then look at open weekend slots before you write in.</p>
    </div>

    <button class="btn btn-ghost filters-toggle" id="openFilters">Filters</button>

    <div class="directory-grid">
      <div class="filter-rail" id="filterRail">
        <div class="filter-group">
          <h4>Search</h4>
          <input class="search-box" id="searchInput" type="text" placeholder="Name, topic, or company" value="${escapeHtml(state.filters.query)}">
        </div>
        <div class="filter-group">
          <h4>Industry</h4>
          ${INDUSTRIES.map(ind => `
            <label class="filter-option">
              <input type="checkbox" data-industry="${ind}" ${state.filters.industries.includes(ind) ? 'checked' : ''}>
              ${ind}
            </label>
          `).join('')}
        </div>
        <div class="filter-group">
          <h4>Company</h4>
          <select class="search-box" id="companySelect">
            <option value="all" ${state.filters.company==='all'?'selected':''}>All companies</option>
            ${COMPANIES.map(c => `<option value="${c}" ${state.filters.company===c?'selected':''}>${c}</option>`).join('')}
          </select>
        </div>
        <div class="filter-group">
          <h4>Graduation batch</h4>
          <div class="batch-range">
            <input type="number" id="batchFrom" placeholder="From" value="${state.filters.batchFrom}">
            <span>–</span>
            <input type="number" id="batchTo" placeholder="To" value="${state.filters.batchTo}">
          </div>
        </div>
        <button class="clear-filters" id="clearFilters">Clear filters</button>
      </div>

      <div>
        <p class="results-count">${list.length} mentor${list.length===1?'':'s'} match${list.length===1?'es':''}</p>
        ${list.length === 0 ? `
          <div class="empty-state">
            <p>No mentors match these filters yet. Try widening your search.</p>
            <button class="btn btn-ghost" id="emptyClear">Clear filters</button>
          </div>
        ` : `
          <div class="mentor-list">
            ${list.map(m => {
              const openSlots = m.slots.filter(s => !s.taken).length;
              const already = state.requests.some(r => r.mentorId === m.id);
              return `
              <div class="mentor-card">
                <div class="mentor-tab"><span>Batch of ${m.batch}</span></div>
                <div class="card-avatar">${avatarHtml(m, 'avatar-md')}</div>
                <div class="mentor-body">
                  <div class="mentor-top">
                    <h3>${m.name}</h3>
                    <span class="mentor-role">${m.jobTitle}, ${m.company}</span>
                  </div>
                  <p class="mentor-industry-line">${m.industry}</p>
                  ${m.description ? `<p class="mentor-desc">${escapeHtml(m.description)}</p>` : ''}
                  <p class="mentor-tags"><b>Domain:</b> ${m.domainExpertise.join(', ')}</p>
                  <p class="mentor-tags"><b>Can mentor on:</b> ${m.mentoringTopics.join(', ')}</p>
                  <div class="mentor-actions">
                    <button class="btn btn-primary" data-open="${m.id}">${already ? 'View request' : 'Request mentorship'}</button>
                    <a class="linkedin-link" href="${m.linkedin}" target="_blank" rel="noopener">View LinkedIn</a>
                    <span class="slots-hint ${openSlots===0?'full':''}">${openSlots===0 ? 'No open weekend slots' : openSlots + ' open weekend slot' + (openSlots===1?'':'s')}</span>
                  </div>
                </div>
              </div>`;
            }).join('')}
          </div>
        `}
      </div>
    </div>
  `;
}

function wireDirectory(){
  const search = document.getElementById('searchInput');
  if (search) search.addEventListener('input', (e) => {
    state.filters.query = e.target.value;
    renderMain();
    const s2 = document.getElementById('searchInput');
    if (s2){ s2.focus(); s2.setSelectionRange(s2.value.length, s2.value.length); }
  });

  document.querySelectorAll('[data-industry]').forEach(cb => {
    cb.addEventListener('change', (e) => {
      const ind = e.target.dataset.industry;
      if (e.target.checked) state.filters.industries.push(ind);
      else state.filters.industries = state.filters.industries.filter(i => i !== ind);
      renderMain();
    });
  });

  const companySelect = document.getElementById('companySelect');
  if (companySelect) companySelect.addEventListener('change', (e) => { state.filters.company = e.target.value; renderMain(); });

  const batchFrom = document.getElementById('batchFrom');
  const batchTo = document.getElementById('batchTo');
  if (batchFrom) batchFrom.addEventListener('input', (e) => { state.filters.batchFrom = e.target.value; renderMain(); document.getElementById('batchFrom').focus(); });
  if (batchTo) batchTo.addEventListener('input', (e) => { state.filters.batchTo = e.target.value; renderMain(); document.getElementById('batchTo').focus(); });

  const clear = document.getElementById('clearFilters');
  if (clear) clear.addEventListener('click', () => { state.filters = {industries:[], company:'all', batchFrom:'', batchTo:'', query:''}; renderMain(); });
  const emptyClear = document.getElementById('emptyClear');
  if (emptyClear) emptyClear.addEventListener('click', () => { state.filters = {industries:[], company:'all', batchFrom:'', batchTo:'', query:''}; renderMain(); });

  document.querySelectorAll('[data-open]').forEach(btn => btn.addEventListener('click', () => openPanel(btn.dataset.open)));

  const openFilters = document.getElementById('openFilters');
  if (openFilters) openFilters.addEventListener('click', () => {
    document.getElementById('filterRail').classList.add('open');
    ensureScrim(true, closeFilterRail);
  });
}
function closeFilterRail(){
  const rail = document.getElementById('filterRail');
  if (rail) rail.classList.remove('open');
  ensureScrim(false);
}

/* ---------------------------------------------------------
   Detail panel + booking calendar
--------------------------------------------------------- */
function buildCalendar(mentor){
  const dates = [...new Set(mentor.slots.map(s => s.date))];
  const times = [...new Set(mentor.slots.map(s => s.time))].sort((a,b) => {
    // rough chronological sort by parsing "H:MM AM/PM"
    const toMin = t => {
      const [_, h, m, ap] = t.match(/(\d+):(\d+)\s?(AM|PM)/);
      let hh = parseInt(h) % 12; if (ap === 'PM') hh += 12;
      return hh*60 + parseInt(m);
    };
    return toMin(a) - toMin(b);
  });

  let rows = times.map(time => {
    const cells = dates.map(date => {
      const slot = mentor.slots.find(s => s.date === date && s.time === time);
      if (!slot) return `<td class="slot-cell-none">—</td>`;
      if (slot.taken) return `<td><span class="slot-cell-taken">Booked</span></td>`;
      const selected = state.selectedSlotId === slot.id;
      return `<td><button type="button" class="slot-cell-btn ${selected?'selected':''}" data-slot="${slot.id}">${selected ? 'Selected' : 'Select'}</button></td>`;
    }).join('');
    return `<tr><td class="rowlabel">${time}</td>${cells}</tr>`;
  }).join('');

  const header = dates.map(d => {
    const [day, rest] = d.split(', ');
    return `<th><span class="day-name">${day}</span><span class="day-date">${rest}</span></th>`;
  }).join('');

  return `
    <div class="calendar-wrap">
      <table class="calendar-table">
        <thead><tr><th></th>${header}</tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
    <p class="calendar-legend">All sessions run on weekends, 30 minutes, over video call.</p>
  `;
}

function openPanel(mentorId){
  state.panelMentorId = mentorId;
  state.selectedSlotId = null;
  const mentor = mentorById(mentorId);
  const existingReq = state.requests.find(r => r.mentorId === mentorId);
  renderPanel(mentor, existingReq);

  const panel = document.getElementById('panel');
  panel.classList.add('open');
  panel.setAttribute('aria-hidden', 'false');
  ensureScrim(true, closePanel);
}

function renderPanel(mentor, existingReq){
  const panel = document.getElementById('panel');

  panel.innerHTML = `
    <div class="panel-head">
      <div>
        <div class="avatar-row">
          ${avatarHtml(mentor, 'avatar-lg')}
          <div class="photo-actions">
            <button type="button" class="btn btn-ghost photo-btn" id="photoBtn">${mentor.photo ? 'Change photo' : 'Add photo'}</button>
            ${mentor.photo ? '<button type="button" class="photo-remove" id="photoRemove">Remove</button>' : ''}
            <input type="file" id="photoInput" accept="image/*" hidden>
          </div>
        </div>
        <h3>${mentor.name}</h3>
        <p class="panel-meta">Batch of ${mentor.batch} · ${mentor.industry}</p>
        <p class="panel-meta">${mentor.jobTitle}, ${mentor.company}</p>
        <a class="panel-linkedin" href="${mentor.linkedin}" target="_blank" rel="noopener">View LinkedIn profile</a>
      </div>
      <button class="panel-close" id="closePanel" aria-label="Close">&times;</button>
    </div>
    <div class="panel-body">
      ${mentor.description ? `
      <div class="panel-section">
        <h4>About</h4>
        <p>${escapeHtml(mentor.description)}</p>
      </div>` : ''}
      <div class="panel-section">
        <h4>Domain expertise</h4>
        <div class="tag-row">${mentor.domainExpertise.map(t => `<span class="tag-pill">${t}</span>`).join('')}</div>
      </div>
      <div class="panel-section">
        <h4>Available mentoring topics</h4>
        <div class="tag-row">${mentor.mentoringTopics.map(t => `<span class="tag-pill topic">${t}</span>`).join('')}</div>
      </div>

      ${existingReq ? `
        <div class="panel-section">
          <h4>Your request</h4>
          <p>Sent ${existingReq.sentAt} on "${escapeHtml(existingReq.topic)}".${existingReq.slotId ? ' Booked for ' + slotById(mentor, existingReq.slotId).date + ', ' + slotById(mentor, existingReq.slotId).time + '.' : ' Waiting on a time from ' + mentor.name.split(' ')[0] + '.'}</p>
          <p class="request-resume">Resume shared: <a href="${existingReq.resumeLink}" target="_blank" rel="noopener">${existingReq.resumeLink}</a></p>
          <p class="request-msg">"${escapeHtml(existingReq.question)}"</p>
          <p class="panel-meta" style="margin-top:10px;">Status: ${existingReq.status}</p>
        </div>
      ` : `
        <div class="panel-section">
          <h4>Session booking calendar — open weekend slots</h4>
          ${mentor.slots.length ? buildCalendar(mentor) : '<p>No weekend slots posted right now. You can still send a request and ask for a time.</p>'}
          <div class="calendar-none-option">
            <input type="radio" name="slotChoice" id="slot-none" ${state.selectedSlotId ? '' : 'checked'}>
            <label for="slot-none">No fixed slot — ask ${mentor.name.split(' ')[0]} to suggest a time</label>
          </div>
        </div>
        <div class="panel-section">
          <label class="field-label" for="topicSelect">Topic you'd like to discuss</label>
          <select class="form-input" id="topicSelect">
            ${mentor.mentoringTopics.map(t => `<option value="${t}">${t}</option>`).join('')}
          </select>
        </div>
        <div class="panel-section">
          <label class="field-label" for="reqQuestion">Your career question</label>
          <textarea id="reqQuestion" placeholder="What specifically would you like ${mentor.name.split(' ')[0]}'s take on?"></textarea>
        </div>
        <div class="panel-section">
          <label class="field-label" for="resumeLink">Resume link</label>
          <input type="url" class="form-input" id="resumeLink" placeholder="https://drive.google.com/... or similar">
          <p class="form-error" id="formError" style="display:none;"></p>
        </div>
      `}
    </div>
    ${existingReq ? `
      <div class="panel-footer">
        <button class="btn btn-ghost" id="cancelFromPanel" style="width:100%; justify-content:center; padding:11px; font-size:14.5px;">Cancel this request</button>
      </div>
    ` : `
      <div class="panel-footer">
        ${state.user
          ? '<button class="btn btn-primary" id="sendRequest">Send request</button>'
          : '<button class="btn btn-primary" id="loginToRequest">Log in to send request</button>'}
        <p class="form-note">Alumni typically confirm within a few days. Booking a slot below reserves it right away.</p>
      </div>
    `}
  `;

  document.getElementById('closePanel').addEventListener('click', closePanel);

  const photoBtn = document.getElementById('photoBtn');
  const photoInput = document.getElementById('photoInput');
  photoBtn.addEventListener('click', () => photoInput.click());
  photoInput.addEventListener('change', () => {
    const file = photoInput.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')){ showToast('Please choose an image file.'); return; }
    if (file.size > 3 * 1024 * 1024){ showToast('Please choose an image under 3 MB.'); return; }
    const reader = new FileReader();
    reader.onload = () => {
      mentor.photo = reader.result;
      renderPanel(mentor, existingReq);
      renderMain();
      showToast('Photo added.');
    };
    reader.readAsDataURL(file);
  });
  const photoRemove = document.getElementById('photoRemove');
  if (photoRemove) photoRemove.addEventListener('click', () => {
    mentor.photo = '';
    renderPanel(mentor, existingReq);
    renderMain();
  });

  document.querySelectorAll('[data-slot]').forEach(btn => {
    btn.addEventListener('click', () => {
      const slotId = btn.dataset.slot;
      state.selectedSlotId = state.selectedSlotId === slotId ? null : slotId;
      renderPanel(mentor, existingReq);
    });
  });

  const sendBtn = document.getElementById('sendRequest');
  if (sendBtn) sendBtn.addEventListener('click', () => submitRequest(mentor));

  const loginBtn = document.getElementById('loginToRequest');
  if (loginBtn) loginBtn.addEventListener('click', () => {
    state.afterLogin = mentor.id;
    closePanel();
    goAuth('login');
  });

  const cancelBtn = document.getElementById('cancelFromPanel');
  if (cancelBtn) cancelBtn.addEventListener('click', () => { cancelRequest(existingReq.id); closePanel(); });
}

function closePanel(){
  const panel = document.getElementById('panel');
  panel.classList.remove('open');
  panel.setAttribute('aria-hidden', 'true');
  ensureScrim(false);
  state.panelMentorId = null;
  state.selectedSlotId = null;
}

function ensureScrim(open, onClick){
  const scrim = document.getElementById('scrim');
  scrim.classList.toggle('open', open);
  scrim.onclick = open ? (onClick || (() => { closePanel(); closeFilterRail(); })) : null;
}

function submitRequest(mentor){
  const question = document.getElementById('reqQuestion').value.trim();
  const resumeLink = document.getElementById('resumeLink').value.trim();
  const topic = document.getElementById('topicSelect').value;
  const errorEl = document.getElementById('formError');

  if (!question || !resumeLink){
    errorEl.textContent = 'Add both a career question and a resume link before sending.';
    errorEl.style.display = 'block';
    return;
  }

  const slotId = state.selectedSlotId;
  if (slotId){
    const slot = slotById(mentor, slotId);
    slot.taken = true;
  }

  state.requests.unshift({
    id: 'req-' + Date.now(),
    mentorId: mentor.id,
    topic, question, resumeLink,
    slotId,
    status: slotId ? 'confirmed' : 'pending',
    sentAt: 'just now',
  });

  closePanel();
  render();
  showToast(slotId ? 'Session booked — added to My mentorship.' : 'Request sent — you\'ll see it under My mentorship.');
}

function cancelRequest(reqId){
  const req = state.requests.find(r => r.id === reqId);
  if (req && req.slotId){
    const mentor = mentorById(req.mentorId);
    const slot = slotById(mentor, req.slotId);
    if (slot) slot.taken = false;
  }
  state.requests = state.requests.filter(r => r.id !== reqId);
  render();
  showToast('Request cancelled.');
}

/* ---------------------------------------------------------
   My mentorship
--------------------------------------------------------- */
function renderMentorship(){
  if (!state.user){
    return `
      <div class="view-head">
        <h2>My mentorship</h2>
        <p>Log in to see and manage your mentorship requests.</p>
      </div>
      <div class="empty-state">
        <p>You're not logged in.</p>
        <button class="btn btn-primary" data-auth="login">Log in</button>
        <button class="btn btn-ghost" data-auth="signup">Create account</button>
      </div>
    `;
  }
  if (state.requests.length === 0){
    return `
      <div class="view-head">
        <h2>My mentorship</h2>
        <p>Requests you've sent to alumni will collect here, along with the resume link and question you shared.</p>
      </div>
      <div class="empty-state">
        <p>You haven't reached out to any mentors yet. Browse the directory to get started.</p>
        <button class="btn btn-primary" id="goDirectory">Browse the directory</button>
      </div>
    `;
  }

  return `
    <div class="view-head">
      <h2>My mentorship</h2>
      <p>${state.requests.length} request${state.requests.length===1?'':'s'} on file.</p>
    </div>
    ${state.requests.map(r => {
      const mentor = mentorById(r.mentorId);
      const slot = r.slotId ? slotById(mentor, r.slotId) : null;
      return `
        <div class="request-row">
          <div class="request-main">
            <h3>${mentor.name}</h3>
            <p class="request-meta">${mentor.jobTitle}, ${mentor.company} · Batch of ${mentor.batch} · ${mentor.industry}</p>
            <p class="request-meta">Topic: ${escapeHtml(r.topic)}</p>
            ${slot ? `<p class="request-meta">Scheduled: ${slot.date}, ${slot.time}</p>` : `<p class="request-meta">No fixed slot yet</p>`}
            <p class="request-msg">"${escapeHtml(r.question)}"</p>
            <p class="request-resume">Resume: <a href="${r.resumeLink}" target="_blank" rel="noopener">${escapeHtml(r.resumeLink)}</a></p>
          </div>
          <span class="stamp ${r.status}">${r.status === 'pending' ? 'Pending review' : r.status === 'confirmed' ? 'Confirmed' : 'Declined'}</span>
          <button class="request-cancel" data-cancel="${r.id}">Cancel</button>
        </div>
      `;
    }).join('')}
  `;
}
function wireMentorship(){
  const go = document.getElementById('goDirectory');
  if (go) go.addEventListener('click', () => setView('directory'));
  document.querySelectorAll('[data-cancel]').forEach(btn => btn.addEventListener('click', () => cancelRequest(btn.dataset.cancel)));
}

/* ---------------------------------------------------------
   Resources
--------------------------------------------------------- */
let expandedResource = null;
function renderResources(){
  return `
    <div class="view-head">
      <h2>Career guidance notes</h2>
      <p>Short, specific advice contributed by alumni over the years. Not a substitute for a real conversation — a place to start one.</p>
    </div>
    ${RESOURCES.map(r => `
      <div class="resource-row ${expandedResource===r.id?'expanded':''}" data-res="${r.id}">
        <div class="resource-top">
          <div>
            <p class="resource-cat mono">${r.cat}</p>
            <h3>${r.title}</h3>
          </div>
          <button class="resource-toggle" aria-label="Expand">+</button>
        </div>
        <p class="resource-detail">${r.detail}</p>
      </div>
    `).join('')}
  `;
}
function wireResources(){
  document.querySelectorAll('[data-res]').forEach(row => {
    row.addEventListener('click', () => {
      const id = row.dataset.res;
      expandedResource = expandedResource === id ? null : id;
      renderMain();
    });
  });
}


function goAuth(mode){ state.authMode = mode; setView('auth'); }

function renderAuthActions(){
  const el = document.getElementById('authActions');
  if (state.user){
    el.innerHTML = `<span class="auth-user">Hi, ${escapeHtml(state.user.name.split(' ')[0])}</span><button type="button" class="auth-link" id="logoutBtn">Log out</button>`;
    document.getElementById('logoutBtn').addEventListener('click', logout);
  } else {
    el.innerHTML = `<button type="button" class="auth-link" data-auth="login">Log in</button><button type="button" class="btn btn-primary auth-signup" data-auth="signup">Sign up</button>`;
  }
}

function loginUser(account){
  state.user = { name: account.name, email: account.email, role: account.role };
  state.requests = state.requestStore[account.email] || [];
  const reopen = state.afterLogin;
  state.afterLogin = null;
  setView('directory');
  showToast('Welcome, ' + account.name.split(' ')[0] + '.');
  if (reopen) openPanel(reopen);
}

function logout(){
  state.requestStore[state.user.email] = state.requests;
  state.requests = [];
  state.user = null;
  setView('home');
  showToast('You have been logged out.');
}

function renderAuth(){
  const login = state.authMode === 'login';
  return `
    <div class="auth-wrap">
      <div class="auth-card">
        <h2>${login ? 'Welcome back' : 'Create your account'}</h2>
        <p class="auth-sub">${login ? 'Log in to request sessions and track your mentorship.' : 'Join Aluminite as a student or an alumnus.'}</p>
        <div class="auth-switch">
          <button type="button" data-auth="login" class="${login ? 'active' : ''}">Log in</button>
          <button type="button" data-auth="signup" class="${login ? '' : 'active'}">Sign up</button>
        </div>
        <form id="authForm" novalidate>
          ${login ? '' : `
          <div class="auth-field">
            <label class="field-label" for="authName">Full name</label>
            <input id="authName" type="text" autocomplete="name">
          </div>`}
          <div class="auth-field">
            <label class="field-label" for="authEmail">Email</label>
            <input id="authEmail" type="email" autocomplete="email">
          </div>
          ${login ? '' : `
          <div class="auth-field">
            <label class="field-label" for="authRole">I am joining as</label>
            <select id="authRole"><option>Student</option><option>Alumnus</option></select>
          </div>`}
          <div class="auth-field">
            <label class="field-label" for="authPassword">Password</label>
            <input id="authPassword" type="password" autocomplete="${login ? 'current-password' : 'new-password'}">
          </div>
          ${login ? '' : `
          <div class="auth-field">
            <label class="field-label" for="authConfirm">Confirm password</label>
            <input id="authConfirm" type="password" autocomplete="new-password">
          </div>`}
          <p class="form-error" id="authError" style="display:none;"></p>
          <button type="submit" class="btn btn-primary auth-submit">${login ? 'Log in' : 'Create account'}</button>
        </form>
        <p class="auth-foot">${login ? 'Try the demo account: student@kestrel.edu with password password123.' : 'Use at least 8 characters for your password.'}</p>
        <p class="auth-foot">Accounts are saved in this browser only. There is no server, so this is a convenience login, not real security.</p>
      </div>
    </div>
  `;
}

/* ----- storage + hashing helpers ----- */
const STORE_KEY = 'aluminite-v1';

function loadStore(){
  try {
    const raw = localStorage.getItem(STORE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) { return null; }   // storage blocked: fall back to in-memory only
}
function saveStore(){
  try {
    if (state.user) state.requestStore[state.user.email] = state.requests;
    localStorage.setItem(STORE_KEY, JSON.stringify({
      accounts: state.accounts,
      requestStore: state.requestStore,
      session: state.user ? state.user.email : null,
    }));
  } catch (e) { /* storage blocked: data stays in memory for this tab */ }
}

function newSalt(){
  const a = new Uint8Array(8);
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) crypto.getRandomValues(a);
  else for (let i = 0; i < a.length; i++) a[i] = Math.floor(Math.random() * 256);
  return Array.from(a).map(b => b.toString(16).padStart(2, '0')).join('');
}
async function hashPassword(password, salt){
  const text = salt + ':' + password;
  if (typeof crypto !== 'undefined' && crypto.subtle){
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
  }
  // Fallback when the browser blocks secure hashing (not cryptographically strong)
  let h = 5381;
  for (const ch of text) h = ((h * 33) ^ ch.charCodeAt(0)) >>> 0;
  return 'weak-' + h.toString(16);
}

function wireAuth(){
  document.getElementById('authForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const err = document.getElementById('authError');
    const fail = (msg) => { err.textContent = msg; err.style.display = 'block'; };
    const email = document.getElementById('authEmail').value.trim().toLowerCase();
    const password = document.getElementById('authPassword').value;

    if (state.authMode === 'login'){
      const acct = state.accounts.find(a => a.email === email);
      const ok = acct && (await hashPassword(password, acct.salt)) === acct.hash;
      if (!ok) return fail('That email and password do not match an account.');
      loginUser(acct);
      return;
    }

    const name = document.getElementById('authName').value.trim();
    const role = document.getElementById('authRole').value;
    const confirm = document.getElementById('authConfirm').value;
    if (!name) return fail('Enter your full name.');
    if (!/^\S+@\S+\.\S+$/.test(email)) return fail('Enter a valid email address.');
    if (password.length < 8) return fail('Password must be at least 8 characters.');
    if (password !== confirm) return fail('The two passwords do not match.');
    if (state.accounts.some(a => a.email === email)) return fail('An account with this email already exists. Try logging in.');
    const salt = newSalt();
    const acct = { name, email, role, salt, hash: await hashPassword(password, salt) };
    state.accounts.push(acct);
    loginUser(acct);
  });
}

async function init(){
  const saved = loadStore();
  if (saved){
    state.accounts = saved.accounts || [];
    state.requestStore = saved.requestStore || {};
    // re-mark booked slots from saved requests
    Object.values(state.requestStore).forEach(list => list.forEach(r => {
      const mentor = mentorById(r.mentorId);
      const slot = mentor && r.slotId ? slotById(mentor, r.slotId) : null;
      if (slot) slot.taken = true;
    }));
    const acct = state.accounts.find(a => a.email === saved.session);
    if (acct){
      state.user = { name: acct.name, email: acct.email, role: acct.role };
      state.requests = state.requestStore[acct.email] || [];
    }
  }
  if (!state.accounts.some(a => a.email === 'student@kestrel.edu')){
    const salt = newSalt();
    state.accounts.push({ name:'Demo Student', email:'student@kestrel.edu', role:'Student', salt, hash: await hashPassword('password123', salt) });
  }
  render();
}

function renderHome(){
  const featured = ['m1','m4','m7'].map(mentorById);
  const openSlots = MENTORS.reduce((n, m) => n + m.slots.filter(s => !s.taken).length, 0);

  return `
    <section class="hero">
      <div>
        <h2 class="brand">Alumin<em>ite</em></h2>
        <p class="hero-tag">Ask the people who sat where you're sitting now.</p>
        <p class="lead">Aluminite connects Kestrel College students with alumni in software, core engineering, finance, and higher studies. Find someone whose path looks like yours, send your question and resume, and book a weekend session.</p>
        <div class="hero-actions">
          <button class="btn btn-primary btn-lg" id="heroBrowse">Browse mentors</button>
          <button class="btn btn-ghost btn-lg" id="heroHow">How it works</button>
        </div>
      </div>
      <div class="card-stack" aria-hidden="true">
        ${featured.map(m => `
          <div class="stack-card">
            <div class="mentor-tab"><span>Batch of ${m.batch}</span></div>
            <div class="card-avatar">${avatarHtml(m, 'avatar-sm')}</div>
            <div class="stack-body">
              <h3>${m.name}</h3>
              <p>${m.jobTitle}, ${m.company}</p>
              <p class="ind">${m.industry}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <div class="stats-band">
      <div class="stat"><div class="num">${MENTORS.length}</div><div class="lbl">Alumni mentors on the registry</div></div>
      <div class="stat"><div class="num">${INDUSTRIES.length}</div><div class="lbl">Industries to choose from</div></div>
      <div class="stat"><div class="num">${openSlots}</div><div class="lbl">Open weekend slots right now</div></div>
    </div>

    <section class="home-section" id="how">
      <h3>How it works</h3>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <h4>Find a mentor</h4>
          <p>Filter by industry, company, or graduation batch, and read what each alumnus can mentor on.</p>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <h4>Share your question</h4>
          <p>Write the career question you want answered and attach a link to your resume.</p>
        </div>
        <div class="step">
          <div class="step-num">3</div>
          <h4>Book a weekend slot</h4>
          <p>Pick an open Saturday or Sunday time from the mentor's calendar, or ask them to suggest one.</p>
        </div>
      </div>
    </section>

    <section class="home-section">
      <h3>Browse by industry</h3>
      <div class="industry-list">
        ${INDUSTRIES.map(ind => `
          <button class="industry-row" data-home-industry="${ind}">
            <span>${ind}</span>
            <span class="count">${MENTORS.filter(m => m.industry === ind).length} mentors</span>
          </button>
        `).join('')}
      </div>
    </section>

    <p class="home-foot">Aluminite is a working demo. Mentors and slots are sample data, and your requests reset when you refresh the page.</p>
  `;
}

function wireHome(){
  document.getElementById('heroBrowse').addEventListener('click', () => setView('directory'));
  document.getElementById('heroHow').addEventListener('click', () => {
    document.getElementById('how').scrollIntoView({behavior:'smooth', block:'start'});
  });
  document.querySelectorAll('[data-home-industry]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.filters = { industries:[btn.dataset.homeIndustry], company:'all', batchFrom:'', batchTo:'', query:'' };
      setView('directory');
    });
  });
}

function renderMain(){
  const main = document.getElementById('mainContent');
  if (state.view === 'home'){ main.innerHTML = renderHome(); wireHome(); }
  else if (state.view === 'directory'){ main.innerHTML = renderDirectory(); wireDirectory(); }
  else if (state.view === 'mentorship'){ main.innerHTML = renderMentorship(); wireMentorship(); }
  else if (state.view === 'auth'){ main.innerHTML = renderAuth(); wireAuth(); }
  else { main.innerHTML = renderResources(); wireResources(); }
}
function render(){ renderNav(); renderAuthActions(); renderMain(); saveStore(); }
document.getElementById('homeLink').addEventListener('click', () => setView('home'));
document.addEventListener('click', (e) => {
  const trigger = e.target.closest('[data-auth]');
  if (trigger) goAuth(trigger.dataset.auth);
});
init();
