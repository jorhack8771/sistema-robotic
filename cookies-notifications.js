// Robotic Latam - Cookie Management & Notification System (2026)
// Strict Privacy: Only active when user accepts Privacy Policy & Cookie consent.
(function () {
  const COOKIE_STORAGE_KEY = 'robotic_cookie_consent_v2';
  const NOTIF_STORAGE_KEY = 'robotic_notif_subscribed';

  // --- 1. PRIVACY & COOKIE STATE CHECK ---
  function getCookiePreferences() {
    try {
      const raw = localStorage.getItem(COOKIE_STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return null;
  }

  function hasUserAcceptedCookies() {
    const prefs = getCookiePreferences();
    if (prefs && prefs.accepted === true) return true;
    if (document.cookie.indexOf('robotic_cookies_accepted=true') !== -1) return true;
    return false;
  }

  function hasUserAllowedNotifications() {
    const prefs = getCookiePreferences();
    return prefs && prefs.accepted === true && prefs.notifications === true;
  }

  // --- 2. AUDIO CHIME ENGINE (Only when allowed) ---
  function playNotificationSound() {
    if (!hasUserAllowedNotifications()) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12); // A5
      
      gain.gain.setValueAtTime(0.10, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } catch (e) {}
  }

  // --- 3. COOKIE ACTIONS ---
  function saveCookiePreferences(prefs) {
    try {
      const payload = {
        accepted: true,
        necessary: true,
        analytics: !!prefs.analytics,
        notifications: !!prefs.notifications,
        timestamp: Date.now()
      };
      localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(payload));
      document.cookie = `robotic_cookies_accepted=true; path=/; max-age=${365 * 24 * 60 * 60}; SameSite=Lax`;
      
      hideCookieBanner();
      hideCookieModal();

      if (payload.notifications) {
        requestNotificationSubscription();
      } else {
        localStorage.setItem(NOTIF_STORAGE_KEY, 'false');
      }

      showToast('Preferencias guardadas', 'Tus preferencias de cookies y privacidad han sido actualizadas.', 'success');
      return payload;
    } catch (e) {
      console.error(e);
    }
  }

  function showCookieBanner() {
    const banner = document.getElementById('robotic-cookie-banner');
    if (banner) banner.style.display = 'block';
  }

  function hideCookieBanner() {
    const banner = document.getElementById('robotic-cookie-banner');
    if (banner) banner.style.display = 'none';
  }

  function showCookieModal() {
    const modal = document.getElementById('robotic-cookie-modal');
    if (modal) {
      const current = getCookiePreferences() || { necessary: true, analytics: true, notifications: true };
      const chkAnalytics = document.getElementById('cookie-chk-analytics');
      const chkNotifications = document.getElementById('cookie-chk-notifications');
      if (chkAnalytics) chkAnalytics.checked = !!current.analytics;
      if (chkNotifications) chkNotifications.checked = !!current.notifications;
      modal.style.display = 'flex';
    }
  }

  function hideCookieModal() {
    const modal = document.getElementById('robotic-cookie-modal');
    if (modal) modal.style.display = 'none';
  }

  // --- 4. TOAST NOTIFICATION (Strictly for accepted users) ---
  function showToast(title, message, type = 'info', onClickAction = null) {
    let container = document.getElementById('robotic-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'robotic-toast-container';
      container.className = 'fixed top-5 right-5 z-[99999] flex flex-col gap-3 max-w-sm w-full pointer-events-none px-4 sm:px-0';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'pointer-events-auto bg-white border border-slate-200/90 rounded-2xl p-4 shadow-xl shadow-slate-900/10 flex items-start gap-3.5 transform transition-all duration-300 translate-y-[-20px] opacity-0 cursor-pointer';
    
    let iconSvg = `
      <div class="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
      </div>`;
    
    if (type === 'agent') {
      iconSvg = `
        <div class="w-10 h-10 rounded-full overflow-hidden border border-blue-400/40 shadow-sm shrink-0">
          <img src="./bot-avatar-centered.png" class="w-full h-full object-cover" alt="LATAM ROBI" />
        </div>`;
    } else if (type === 'success') {
      iconSvg = `
        <div class="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
        </div>`;
    }

    toast.innerHTML = `
      ${iconSvg}
      <div class="flex-1 min-w-0">
        <h4 class="text-sm font-bold text-slate-800 leading-tight">${title}</h4>
        <p class="text-xs text-slate-600 mt-1 leading-relaxed line-clamp-2">${message}</p>
      </div>
      <button class="text-slate-400 hover:text-slate-600 p-1 -mr-1 -mt-1 rounded-lg transition" onclick="event.stopPropagation(); this.closest('.pointer-events-auto').remove();">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    `;

    if (onClickAction) {
      toast.onclick = onClickAction;
    }

    container.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.remove('translate-y-[-20px]', 'opacity-0');
      toast.classList.add('translate-y-0', 'opacity-100');
    });

    setTimeout(() => {
      if (toast.parentNode) {
        toast.classList.add('opacity-0', 'translate-y-[-10px]');
        setTimeout(() => toast.remove(), 300);
      }
    }, 5500);
  }

  // --- 5. NOTIFICATION SUBSCRIPTION ---
  async function requestNotificationSubscription() {
    if (!('Notification' in window)) return false;
    try {
      const perm = await Notification.requestPermission();
      if (perm === 'granted') {
        localStorage.setItem(NOTIF_STORAGE_KEY, 'true');
        playNotificationSound();
        try {
          new Notification('Robotic Latam - Notificaciones Activas', {
            body: '¡Listo! Te avisaremos cuando el agente responda o se agreguen novedades.',
            icon: './bot-avatar-centered.png'
          });
        } catch(e){}
        return true;
      }
    } catch (e) {}
    return false;
  }

  function dispatchAgentNotification(messageText) {
    if (!hasUserAllowedNotifications()) return;

    playNotificationSound();

    if ('Notification' in window && Notification.permission === 'granted') {
      try {
        const notif = new Notification('LATAM ROBI (Asistente Virtual)', {
          body: messageText || 'El agente ha enviado un nuevo mensaje.',
          icon: './bot-avatar-centered.png',
          tag: 'bot-response-' + Date.now()
        });
        notif.onclick = function() {
          window.focus();
          openBuilderBotChat();
          this.close();
        };
      } catch (e) {}
    }

    showToast('LATAM ROBI respondió', messageText || 'Tienes una nueva respuesta en el chat.', 'agent', () => {
      openBuilderBotChat();
    });
  }

  function openBuilderBotChat() {
    const btn = document.querySelector('chat-widget-button');
    if (btn) {
      const buttonElem = btn.shadowRoot ? btn.shadowRoot.querySelector('button') : btn.querySelector('button');
      if (buttonElem) buttonElem.click();
      else btn.click();
    }
  }

  // --- 6. AGENT RESPONSE DETECTOR (Only runs when notifications are accepted) ---
  let seenMessageCount = 0;
  let isInitialLoad = true;

  function initAgentListener() {
    setInterval(() => {
      if (!hasUserAllowedNotifications()) return;

      const messages = document.querySelectorAll('chat-message, [data-builderbot-chat-message], .message-bubble, .bot-message');
      let botMessages = [];

      messages.forEach(msg => {
        const isUser = msg.hasAttribute('is-user') || msg.classList.contains('user-message');
        if (!isUser) {
          botMessages.push(msg);
        }
      });

      if (isInitialLoad) {
        seenMessageCount = botMessages.length;
        isInitialLoad = false;
        return;
      }

      if (botMessages.length > seenMessageCount) {
        const newMsg = botMessages[botMessages.length - 1];
        seenMessageCount = botMessages.length;
        
        let textContent = newMsg.textContent || 'Nuevo mensaje de LATAM ROBI';
        textContent = textContent.replace(/\s+/g, ' ').trim();
        if (textContent.length > 120) {
          textContent = textContent.substring(0, 117) + '...';
        }

        const isChatOpen = document.querySelector('chat-widget-button[is-open]');
        if (document.hidden || !isChatOpen) {
          dispatchAgentNotification(textContent);
        }
      }
    }, 1000);
  }

  // --- 7. CLEAN & NON-INTRUSIVE UI ELEMENTS ---
  function injectUIElements() {
    // 7.1 Clean Bottom Banner (Does NOT obstruct UI or Header)
    const banner = document.createElement('div');
    banner.id = 'robotic-cookie-banner';
    banner.className = 'fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-[99990] bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-4 shadow-2xl shadow-slate-900/15 text-slate-800 transition-all duration-300';
    banner.style.display = 'none';
    banner.innerHTML = `
      <div class="flex items-start gap-3 mb-3">
        <div class="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
        </div>
        <div class="flex-1">
          <h4 class="text-xs font-extrabold text-[#0A3E62] flex items-center gap-1.5">
            Política de Privacidad y Cookies
          </h4>
          <p class="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
            Utilizamos cookies para recordar tus preferencias y notificarte cuando el agente responda o se agreguen novedades al sitio.
          </p>
        </div>
      </div>
      <div class="flex items-center gap-2 pt-2 border-t border-slate-100">
        <button id="btn-accept-all-cookies" class="flex-1 bg-[#0A3E62] hover:bg-[#072c46] text-white text-xs font-bold py-2 px-3 rounded-xl transition duration-200 shadow-sm cursor-pointer text-center">
          Aceptar Todo
        </button>
        <button id="btn-accept-necessary-cookies" class="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium py-2 px-3 rounded-xl transition duration-200 cursor-pointer text-center">
          Solo Necesarias
        </button>
        <button id="btn-customize-cookies" class="text-slate-500 hover:text-slate-800 text-xs font-medium py-2 px-2 transition duration-200 cursor-pointer text-center">
          Ajustes
        </button>
      </div>
    `;
    document.body.appendChild(banner);

    // 7.2 Settings Modal
    const modal = document.createElement('div');
    modal.id = 'robotic-cookie-modal';
    modal.className = 'fixed inset-0 z-[99995] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm';
    modal.style.display = 'none';
    modal.innerHTML = `
      <div class="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] flex flex-col overflow-hidden" onclick="event.stopPropagation()">
        <div class="flex items-center justify-between p-5 border-b border-slate-100">
          <div class="flex items-center gap-2.5">
            <div class="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </div>
            <div>
              <h2 class="text-base font-bold text-slate-800">Privacidad y Cookies</h2>
              <p class="text-xs text-slate-500">Configuración de almacenamiento y alertas</p>
            </div>
          </div>
          <button id="btn-close-cookie-modal" class="text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-50 transition cursor-pointer">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>

        <div class="flex-1 overflow-y-auto p-5 space-y-3.5 text-sm text-slate-600">
          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 flex items-start justify-between gap-3">
            <div>
              <h4 class="font-bold text-slate-800 text-xs">Cookies Técnicas Esenciales</h4>
              <p class="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                Necesarias para la navegación y seguridad básica del sitio.
              </p>
            </div>
            <input type="checkbox" checked disabled class="mt-1 w-4 h-4 text-blue-600 accent-[#0A3E62]" />
          </div>

          <div class="p-3.5 rounded-xl bg-white border border-slate-200/70 flex items-start justify-between gap-3">
            <div>
              <h4 class="font-bold text-slate-800 text-xs">Notificaciones y Alertas del Agente</h4>
              <p class="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                Permite avisos sonoros y notificaciones push cuando el asistente LATAM ROBI responde o se agregan servicios.
              </p>
            </div>
            <input type="checkbox" id="cookie-chk-notifications" class="mt-1 w-4 h-4 text-blue-600 accent-[#0A3E62] cursor-pointer" />
          </div>

          <div class="p-3.5 rounded-xl bg-white border border-slate-200/70 flex items-start justify-between gap-3">
            <div>
              <h4 class="font-bold text-slate-800 text-xs">Rendimiento y Métricas</h4>
              <p class="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                Ayuda a mejorar la fluidez y velocidad de la plataforma.
              </p>
            </div>
            <input type="checkbox" id="cookie-chk-analytics" class="mt-1 w-4 h-4 text-blue-600 accent-[#0A3E62] cursor-pointer" />
          </div>
        </div>

        <div class="p-4 border-t border-slate-100 flex items-center justify-end gap-2 bg-slate-50/50">
          <button id="btn-save-cookie-prefs" class="bg-[#0A3E62] hover:bg-[#072c46] text-white font-bold text-xs px-4 py-2 rounded-xl transition cursor-pointer">
            Guardar Preferencias
          </button>
        </div>
      </div>
    `;
    modal.onclick = hideCookieModal;
    document.body.appendChild(modal);

    // Event listeners
    document.getElementById('btn-accept-all-cookies')?.addEventListener('click', () => {
      saveCookiePreferences({ analytics: true, notifications: true });
    });

    document.getElementById('btn-accept-necessary-cookies')?.addEventListener('click', () => {
      saveCookiePreferences({ analytics: false, notifications: false });
    });

    document.getElementById('btn-customize-cookies')?.addEventListener('click', () => {
      hideCookieBanner();
      showCookieModal();
    });

    document.getElementById('btn-close-cookie-modal')?.addEventListener('click', hideCookieModal);

    document.getElementById('btn-save-cookie-prefs')?.addEventListener('click', () => {
      const chkAnalytics = document.getElementById('cookie-chk-analytics');
      const chkNotifications = document.getElementById('cookie-chk-notifications');
      saveCookiePreferences({
        analytics: chkAnalytics ? chkAnalytics.checked : false,
        notifications: chkNotifications ? chkNotifications.checked : false
      });
    });

    // Check if initial banner should show (only if user hasn't made a choice yet)
    if (!hasUserAcceptedCookies()) {
      setTimeout(showCookieBanner, 800);
    }
  }

  // --- 8. GLOBAL EXPORTS ---
  window.RoboticCookies = {
    getPreferences: getCookiePreferences,
    savePreferences: saveCookiePreferences,
    openModal: showCookieModal,
    closeModal: hideCookieModal,
    isAccepted: hasUserAcceptedCookies
  };

  window.openCookieModal = showCookieModal;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      injectUIElements();
      initAgentListener();
    });
  } else {
    injectUIElements();
    initAgentListener();
  }
})();
