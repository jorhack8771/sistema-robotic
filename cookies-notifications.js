// Robotic Latam - Professional Cookie Consent & Service Worker Notification Engine (2026)
(function () {
  'use strict';

  const COOKIE_STORAGE_KEY = 'robotic_latam_cookie_consent_v5';
  const NOTIF_STORAGE_KEY = 'robotic_latam_notif_enabled_v5';
  const SEEN_UPDATES_KEY = 'robotic_latam_seen_updates_v1';
  let swRegistration = null;

  // --- 1. COOKIE STATE MANAGEMENT ---
  function getPreferences() {
    try {
      const raw = localStorage.getItem(COOKIE_STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return null;
  }

  function hasAccepted() {
    const prefs = getPreferences();
    return prefs && prefs.accepted === true;
  }

  function areNotificationsEnabled() {
    const prefs = getPreferences();
    if (!prefs) return false;
    return prefs.notifications === true;
  }

  // --- 2. SERVICE WORKER & NOTIFICATIONS ENGINE ---
  // Registers Service Worker for reliable push delivery on platform state changes
  async function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      try {
        const reg = await navigator.serviceWorker.register('./sw.js', { scope: './' });
        swRegistration = reg;
        console.log('[Robotic SW] Service Worker registrado exitosamente con scope:', reg.scope);
      } catch (err) {
        console.warn('[Robotic SW] Error registrando Service Worker:', err);
      }
    }
  }

  async function requestBrowserPermission() {
    if (!('Notification' in window)) return false;
    try {
      let perm = Notification.permission;
      if (perm !== 'granted' && perm !== 'denied') {
        perm = await Notification.requestPermission();
      }
      if (perm === 'granted') {
        localStorage.setItem(NOTIF_STORAGE_KEY, 'true');
        registerServiceWorker();
        return true;
      }
    } catch (e) {}
    return false;
  }

  // Strictly for real platform status updates & system announcements
  // Guaranteed never to trigger on typing, clicks or routine chat messages
  function dispatchUpdateNotification(title, body, url, updateId) {
    if (!areNotificationsEnabled()) return;

    const currentId = updateId || ('update_' + (title || 'general').replace(/\s+/g, '_').toLowerCase());

    // Deduplication check: prevent multiple triggers of the same update
    try {
      const seen = JSON.parse(localStorage.getItem(SEEN_UPDATES_KEY) || '[]');
      if (seen.includes(currentId)) {
        return; // Already notified
      }
      seen.push(currentId);
      if (seen.length > 50) seen.shift();
      localStorage.setItem(SEEN_UPDATES_KEY, JSON.stringify(seen));
    } catch (e) {}

    const options = {
      body: body || 'Tenemos nuevas actualizaciones y funciones disponibles.',
      icon: './bot-avatar-centered.png',
      badge: './favicon.PNG',
      tag: 'robotic-state-update',
      data: {
        url: url || './',
        id: currentId
      }
    };

    if (swRegistration && swRegistration.showNotification) {
      swRegistration.showNotification(title || 'Robotic Latam - Novedades', options);
    } else if ('Notification' in window && Notification.permission === 'granted') {
      try {
        const notif = new Notification(title || 'Robotic Latam - Novedades', options);
        notif.onclick = function () {
          window.focus();
          if (url) window.location.href = url;
          this.close();
        };
      } catch (e) {}
    }
  }

  // --- 3. COOKIE DOCK & PRIVACY MODAL ---
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
      document.cookie = `robotic_latam_cookie_accepted=true; path=/; max-age=${365 * 24 * 60 * 60}; SameSite=Lax`;

      hideCookieBanner();
      hideCookieModal();

      if (payload.notifications) {
        requestBrowserPermission();
      }
      return payload;
    } catch (e) {
      console.error(e);
    }
  }

  function showCookieBanner() {
    const banner = document.getElementById('robotic-cookie-dock');
    if (banner) {
      banner.style.display = 'block';
      requestAnimationFrame(() => {
        banner.style.opacity = '1';
        banner.style.transform = 'translate(-50%, 0)';
      });
    }
  }

  function hideCookieBanner() {
    const banner = document.getElementById('robotic-cookie-dock');
    if (banner) {
      banner.style.opacity = '0';
      banner.style.transform = 'translate(-50%, 20px)';
      setTimeout(() => {
        banner.style.display = 'none';
      }, 300);
    }
  }

  function showCookieModal() {
    const modal = document.getElementById('robotic-cookie-modal');
    if (modal) {
      const current = getPreferences() || { necessary: true, analytics: true, notifications: true };
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

  function injectUIElements() {
    // 3.1 Corporate Slim Bottom Dock (Centered, non-intrusive)
    const banner = document.createElement('div');
    banner.id = 'robotic-cookie-dock';
    banner.style.cssText = 'display:none; position:fixed; bottom:20px; left:50%; transform:translate(-50%, 20px); width:calc(100% - 32px); max-width:860px; z-index:9999999; background:rgba(255, 255, 255, 0.96); backdrop-filter:blur(16px); -webkit-backdrop-filter:blur(16px); border:1px solid rgba(226, 232, 240, 0.95); border-radius:18px; box-shadow:0 20px 45px -10px rgba(10, 62, 98, 0.16), 0 0 0 1px rgba(0,0,0,0.03); padding:14px 20px; opacity:0; transition:all 0.35s cubic-bezier(0.16, 1, 0.3, 1); font-family:inherit;';
    banner.innerHTML = `
      <div style="display:flex; flex-direction:row; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap;">
        <div style="display:flex; align-items:center; gap:12px; flex:1; min-width:280px;">
          <div style="width:38px; height:38px; border-radius:50%; overflow:hidden; border:2px solid #0A3E62; flex-shrink:0; background:#0A3E62; box-shadow:0 2px 6px rgba(10,62,98,0.2);">
            <img src="./bot-avatar-centered.png" style="width:100%; height:100%; object-fit:cover;" alt="Robotic Latam" />
          </div>
          <div>
            <h4 style="margin:0; font-size:13px; font-weight:700; color:#0A3E62; letter-spacing:-0.01em;">Aviso de Privacidad y Cookies</h4>
            <p style="margin:2px 0 0 0; font-size:12px; color:#475569; line-height:1.4;">
              Utilizamos cookies para garantizar la seguridad del sitio y mantenerte al tanto de nuevas actualizaciones y soluciones.
            </p>
          </div>
        </div>
        <div style="display:flex; align-items:center; gap:8px; flex-shrink:0; margin-left:auto;">
          <button id="btn-customize-cookies" style="background:transparent; border:none; color:#64748b; font-size:12px; font-weight:600; padding:8px 12px; cursor:pointer; border-radius:10px; transition:color 0.2s;">
            Personalizar
          </button>
          <button id="btn-accept-necessary-cookies" style="background:#f1f5f9; border:1px solid #e2e8f0; color:#334155; font-size:12px; font-weight:600; padding:8px 14px; border-radius:10px; cursor:pointer; transition:all 0.2s;">
            Solo Necesarias
          </button>
          <button id="btn-accept-all-cookies" style="background:#0A3E62; border:none; color:#ffffff; font-size:12px; font-weight:700; padding:9px 18px; border-radius:10px; cursor:pointer; box-shadow:0 4px 12px rgba(10,62,98,0.22); transition:all 0.2s;">
            Aceptar Todo
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(banner);

    // 3.2 Modal for Detailed Preferences
    const modal = document.createElement('div');
    modal.id = 'robotic-cookie-modal';
    modal.style.cssText = 'display:none; position:fixed; inset:0; z-index:99999999; align-items:center; justify-content:center; padding:16px; background:rgba(15,23,42,0.55); backdrop-filter:blur(6px); font-family:inherit;';
    modal.innerHTML = `
      <div style="background:#ffffff; border-radius:20px; box-shadow:0 25px 50px -12px rgba(0,0,0,0.25); max-width:480px; width:100%; max-height:90vh; display:flex; flex-direction:column; overflow:hidden;" onclick="event.stopPropagation()">
        <div style="display:flex; align-items:center; justify-content:space-between; padding:18px 22px; border-bottom:1px solid #f1f5f9;">
          <div style="display:flex; align-items:center; gap:10px;">
            <div style="width:34px; height:34px; border-radius:50%; overflow:hidden; border:2px solid #0A3E62; flex-shrink:0; background:#0A3E62;">
              <img src="./bot-avatar-centered.png" style="width:100%; height:100%; object-fit:cover;" alt="Robotic Latam" />
            </div>
            <div>
              <h3 style="margin:0; font-size:15px; font-weight:700; color:#0A3E62;">Configuración de Privacidad</h3>
              <p style="margin:1px 0 0 0; font-size:11px; color:#64748b;">Administra tus preferencias de privacidad</p>
            </div>
          </div>
          <button id="btn-close-cookie-modal" style="background:transparent; border:none; color:#94a3b8; cursor:pointer; padding:6px; border-radius:6px;">
            <svg style="width:18px; height:18px;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>

        <div style="flex:1; overflow-y:auto; padding:18px 22px; display:flex; flex-direction:column; gap:12px; font-size:12px; color:#475569;">
          <div style="padding:12px 14px; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0; display:flex; align-items:flex-start; justify-content:space-between; gap:10px;">
            <div>
              <h4 style="margin:0; font-weight:700; color:#1e293b; font-size:12px;">Cookies Técnicas Necesarias</h4>
              <p style="margin:3px 0 0 0; font-size:11px; color:#64748b; line-height:1.4;">
                Garantizan el funcionamiento básico y la seguridad del portal.
              </p>
            </div>
            <input type="checkbox" checked disabled style="margin-top:2px; width:16px; height:16px; accent-color:#0A3E62;" />
          </div>

          <div style="padding:12px 14px; border-radius:12px; background:#ffffff; border:1px solid #e2e8f0; display:flex; align-items:flex-start; justify-content:space-between; gap:10px;">
            <div>
              <h4 style="margin:0; font-weight:700; color:#1e293b; font-size:12px;">Notificaciones de Actualizaciones</h4>
              <p style="margin:3px 0 0 0; font-size:11px; color:#64748b; line-height:1.4;">
                Recibe avisos sobre nuevas publicaciones, actualizaciones de IA y servicios de Robotic Latam.
              </p>
            </div>
            <input type="checkbox" id="cookie-chk-notifications" style="margin-top:2px; width:16px; height:16px; accent-color:#0A3E62; cursor:pointer;" />
          </div>

          <div style="padding:12px 14px; border-radius:12px; background:#ffffff; border:1px solid #e2e8f0; display:flex; align-items:flex-start; justify-content:space-between; gap:10px;">
            <div>
              <h4 style="margin:0; font-weight:700; color:#1e293b; font-size:12px;">Métricas y Rendimiento</h4>
              <p style="margin:3px 0 0 0; font-size:11px; color:#64748b; line-height:1.4;">
                Ayuda a mejorar la velocidad y la experiencia de usuario.
              </p>
            </div>
            <input type="checkbox" id="cookie-chk-analytics" style="margin-top:2px; width:16px; height:16px; accent-color:#0A3E62; cursor:pointer;" />
          </div>
        </div>

        <div style="padding:14px 22px; border-top:1px solid #f1f5f9; display:flex; align-items:center; justify-content:flex-end; gap:8px; background:#f8fafc;">
          <button id="btn-save-cookie-prefs" style="background:#0A3E62; color:#ffffff; font-weight:700; font-size:12px; padding:8px 16px; border-radius:10px; border:none; cursor:pointer;">
            Guardar Preferencias
          </button>
        </div>
      </div>
    `;
    modal.onclick = hideCookieModal;
    document.body.appendChild(modal);

    // Event handlers
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

    if (!hasAccepted()) {
      setTimeout(showCookieBanner, 600);
    }
  }

  // --- 4. INITIALIZATION ---
  function init() {
    injectUIElements();
    if (areNotificationsEnabled()) {
      registerServiceWorker();
    }
  }

  window.RoboticCookies = {
    getPreferences,
    savePreferences: saveCookiePreferences,
    openModal: showCookieModal,
    closeModal: hideCookieModal,
    showBanner: showCookieBanner,
    hideBanner: hideCookieBanner,
    isAccepted: hasAccepted,
    notifyUpdate: dispatchUpdateNotification,
    reset: () => {
      localStorage.removeItem(COOKIE_STORAGE_KEY);
      localStorage.removeItem(NOTIF_STORAGE_KEY);
      localStorage.removeItem(SEEN_UPDATES_KEY);
      document.cookie = 'robotic_latam_cookie_accepted=; Max-Age=0; path=/;';
      showCookieBanner();
    }
  };

  window.openCookieModal = showCookieModal;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
