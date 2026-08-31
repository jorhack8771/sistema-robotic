// Robotic Latam - Professional Cookie Consent & Presence-Aware Notification Engine (2026)
(function () {
  'use strict';

  const COOKIE_STORAGE_KEY = 'robotic_latam_cookie_consent_v4';
  const NOTIF_STORAGE_KEY = 'robotic_latam_notif_enabled_v4';
  const ORIGINAL_TITLE = document.title || 'Robotic Latam - Soluciones con IA para WhatsApp';

  let titleInterval = null;
  let isFlashingTitle = false;
  let audioContext = null;
  let lastNotificationTime = 0;
  const NOTIF_COOLDOWN_MS = 6000; // Cooldown to avoid multi-bubble spam

  // --- 1. AUDIO ENGINE (UNLOCKED ON FIRST INTERACTION) ---
  function getAudioContext() {
    if (!audioContext) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        audioContext = new AudioCtx();
      }
    }
    if (audioContext && audioContext.state === 'suspended') {
      audioContext.resume().catch(() => {});
    }
    return audioContext;
  }

  function unlockAudio() {
    getAudioContext();
    document.removeEventListener('click', unlockAudio);
    document.removeEventListener('touchstart', unlockAudio);
    document.removeEventListener('keydown', unlockAudio);
  }
  document.addEventListener('click', unlockAudio, { once: true });
  document.addEventListener('touchstart', unlockAudio, { once: true });
  document.addEventListener('keydown', unlockAudio, { once: true });

  // --- 2. PREFERENCES & STATUS ---
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
    if (!prefs) return true;
    return prefs.notifications !== false;
  }

  // --- 3. REFINED AUDITORY CHIME ---
  function playNotificationChime() {
    if (!areNotificationsEnabled()) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;

      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(783.99, now); // G5
      gain1.gain.setValueAtTime(0.18, now);
      gain1.gain.exponentialRampToValueAtTime(0.0001, now + 0.30);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.30);

      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(1046.50, now + 0.08); // C6
      gain2.gain.setValueAtTime(0.20, now + 0.08);
      gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.50);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(now + 0.08);
      osc2.stop(now + 0.50);
    } catch (e) {}
  }

  // --- 4. BROWSER TAB FLASHING (ONLY WHEN ABSENT/IN ANOTHER TAB) ---
  function startTitleFlash(previewText) {
    if (isFlashingTitle) return;
    isFlashingTitle = true;
    let step = 0;
    const alertTitle = '💬 (1) ¡LATAM ROBI te respondió!';

    if (titleInterval) clearInterval(titleInterval);
    titleInterval = setInterval(() => {
      if (!document.hidden) {
        stopTitleFlash();
        return;
      }
      document.title = (step % 2 === 0) ? alertTitle : (ORIGINAL_TITLE || 'Robotic Latam');
      step++;
    }, 900);
  }

  function stopTitleFlash() {
    if (titleInterval) {
      clearInterval(titleInterval);
      titleInterval = null;
    }
    isFlashingTitle = false;
    document.title = ORIGINAL_TITLE || 'Robotic Latam - Soluciones con IA para WhatsApp';
  }

  window.addEventListener('focus', stopTitleFlash);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      stopTitleFlash();
    }
  });

  // --- 5. DISCREET IN-PAGE TOAST (ONLY WHEN USER IS BROWSING WITH CHAT CLOSED) ---
  function showToast(title, message, type, onClickAction) {
    let container = document.getElementById('robotic-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'robotic-toast-container';
      container.style.cssText = 'position:fixed; bottom:96px; right:24px; z-index:9999999; display:flex; flex-direction:column; gap:10px; max-width:340px; width:calc(100% - 48px); pointer-events:none; font-family:inherit;';
      document.body.appendChild(container);
    }

    // Remove existing toast if any to avoid stacking
    const oldToast = container.querySelector('.robotic-toast-item');
    if (oldToast) oldToast.remove();

    const toast = document.createElement('div');
    toast.className = 'robotic-toast-item';
    toast.style.cssText = 'pointer-events:auto; background:#ffffff; border:1px solid #e2e8f0; border-radius:16px; padding:14px 16px; box-shadow:0 16px 36px -8px rgba(10,62,98,0.18), 0 0 1px 1px rgba(0,0,0,0.03); display:flex; align-items:flex-start; gap:12px; transform:translateY(16px); opacity:0; transition:all 0.3s cubic-bezier(0.16, 1, 0.3, 1); cursor:pointer;';
    
    let iconHtml = `
      <div style="width:38px; height:38px; border-radius:50%; overflow:hidden; border:2px solid #0A3E62; flex-shrink:0; background:#0A3E62;">
        <img src="./bot-avatar-centered.png" style="width:100%; height:100%; object-fit:cover;" alt="LATAM ROBI" />
      </div>`;

    toast.innerHTML = `
      ${iconHtml}
      <div style="flex:1; min-width:0;">
        <div style="display:flex; align-items:center; gap:6px;">
          <span style="display:inline-block; width:6px; height:6px; border-radius:50%; background:#10b981;"></span>
          <h4 style="margin:0; font-size:13px; font-weight:700; color:#0A3E62; line-height:1.2;">${title}</h4>
        </div>
        <p style="margin:4px 0 0 0; font-size:12px; color:#475569; line-height:1.4; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">${message}</p>
        <span style="display:inline-block; font-size:11px; font-weight:700; color:#0A3E62; margin-top:6px;">Ver mensaje en chat →</span>
      </div>
      <button style="background:transparent; border:none; color:#94a3b8; padding:4px; margin:-4px -4px 0 0; cursor:pointer; border-radius:6px; display:flex; align-items:center; justify-content:center;">
        <svg style="width:16px; height:16px;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    `;

    const closeBtn = toast.querySelector('button');
    if (closeBtn) {
      closeBtn.onclick = (e) => {
        e.stopPropagation();
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 250);
      };
    }

    toast.onclick = () => {
      if (onClickAction) onClickAction();
      else openBuilderBotChat();
      toast.remove();
    };

    container.appendChild(toast);

    requestAnimationFrame(() => {
      toast.style.transform = 'translateY(0)';
      toast.style.opacity = '1';
    });

    setTimeout(() => {
      if (toast.parentNode) {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 250);
      }
    }, 6500);
  }

  // --- 6. PRESENCE & CHAT OPEN STATUS DETECTOR ---
  function isChatWindowOpen() {
    try {
      // 1. Direct tag checks
      const chatWin = document.querySelector('chat-window, .chat-window, [data-chat-window]');
      if (chatWin) {
        const style = window.getComputedStyle(chatWin);
        if (style.display !== 'none' && style.visibility !== 'hidden' && chatWin.offsetHeight > 40) {
          return true;
        }
      }

      // 2. Check shadow roots in custom elements
      const allCustomElements = document.querySelectorAll('chat-widget, chat-widget-button, chat-container');
      for (const el of allCustomElements) {
        if (el.shadowRoot) {
          const win = el.shadowRoot.querySelector('chat-window, .chat-window, .window, .chat-box');
          if (win) {
            const style = window.getComputedStyle(win);
            if (style.display !== 'none' && style.visibility !== 'hidden' && win.offsetHeight > 40) {
              return true;
            }
          }
        }
      }

      // 3. Check active aria-expanded on widget button
      const btn = document.querySelector('chat-widget-button');
      if (btn) {
        if (btn.getAttribute('aria-expanded') === 'true') return true;
        if (btn.shadowRoot) {
          const innerBtn = btn.shadowRoot.querySelector('button[aria-expanded="true"]');
          if (innerBtn) return true;
        }
      }
    } catch (e) {}
    return false;
  }

  function isUserPresentAndViewingChat() {
    const isTabActive = !document.hidden && (document.hasFocus ? document.hasFocus() : true);
    const chatOpen = isChatWindowOpen();
    // User is active and looking right at the open chat window
    return isTabActive && chatOpen;
  }

  // --- 7. SMART NOTIFICATION ROUTER (ONLY WHEN ABSENT OR CHAT CLOSED) ---
  function dispatchAgentNotification(messageText) {
    if (!areNotificationsEnabled()) return;

    // RULE 1: If user is actively present and has the chat window open, DO NOT interrupt!
    if (isUserPresentAndViewingChat()) {
      return;
    }

    // RULE 2: Enforce cooldown to prevent spam on multi-bubble answers
    const now = Date.now();
    if (now - lastNotificationTime < NOTIF_COOLDOWN_MS) {
      return;
    }
    lastNotificationTime = now;

    const isTabActive = !document.hidden && (document.hasFocus ? document.hasFocus() : true);
    const chatOpen = isChatWindowOpen();

    // CASE A: User is in another tab or minimized -> Flash title, Push desktop, play sound
    if (!isTabActive) {
      startTitleFlash(messageText);
      playNotificationChime();

      if ('Notification' in window && Notification.permission === 'granted') {
        try {
          const notif = new Notification('LATAM ROBI (Asistente Virtual)', {
            body: messageText || 'Tienes una nueva respuesta en el chat.',
            icon: './bot-avatar-centered.png',
            tag: 'latam-robi-msg',
            requireInteraction: false
          });
          notif.onclick = function () {
            window.focus();
            openBuilderBotChat();
            this.close();
          };
        } catch (e) {}
      }
      return;
    }

    // CASE B: User is on the page, but chat is CLOSED -> Show bottom toast + sound
    if (!chatOpen) {
      playNotificationChime();
      showToast('LATAM ROBI respondió', messageText || 'Tienes una nueva respuesta en el chat.', 'agent', () => {
        openBuilderBotChat();
      });
    }
  }

  function openBuilderBotChat() {
    const btn = document.querySelector('chat-widget-button');
    if (btn) {
      const buttonElem = btn.shadowRoot ? btn.shadowRoot.querySelector('button') : btn.querySelector('button');
      if (buttonElem) buttonElem.click();
      else btn.click();
    }
  }

  // --- 8. SCAN BOT MESSAGES (SHADOW DOM + DEEP RECURSION) ---
  let seenMessageTexts = new Set();
  let isInitialScan = true;

  function extractAllTextNodes(root) {
    let result = [];
    if (!root) return result;
    result.push(root);

    if (root.shadowRoot) {
      result.push(...extractAllTextNodes(root.shadowRoot));
    }
    if (root.children) {
      for (let i = 0; i < root.children.length; i++) {
        result.push(...extractAllTextNodes(root.children[i]));
      }
    }
    return result;
  }

  function scanForBotMessages() {
    try {
      const allElements = extractAllTextNodes(document.body);
      let foundMessages = [];

      allElements.forEach(el => {
        if (!el || el.nodeType !== Node.ELEMENT_NODE) return;
        const tag = el.tagName ? el.tagName.toLowerCase() : '';

        const isMessage = tag === 'chat-message' || 
                          el.hasAttribute('data-builderbot-chat-message') ||
                          el.classList.contains('chat-message') ||
                          el.classList.contains('message-bubble') ||
                          el.classList.contains('agent-message');

        if (isMessage) {
          const isUser = el.hasAttribute('is-user') ||
                         el.getAttribute('data-is-user') === 'true' ||
                         el.classList.contains('user-message') ||
                         el.classList.contains('is-user');

          if (!isUser) {
            const rawText = (el.textContent || '').trim();
            if (rawText.length > 0) {
              foundMessages.push(rawText);
            }
          }
        }
      });

      if (isInitialScan) {
        foundMessages.forEach(t => seenMessageTexts.add(t));
        isInitialScan = false;
        return;
      }

      foundMessages.forEach(text => {
        if (!seenMessageTexts.has(text)) {
          seenMessageTexts.add(text);
          let preview = text.replace(/\s+/g, ' ').trim();
          if (preview.length > 110) {
            preview = preview.substring(0, 107) + '...';
          }
          dispatchAgentNotification(preview);
        }
      });
    } catch (e) {}
  }

  // --- 9. COOKIE DOCK & PRIVACY MODAL ---
  async function requestBrowserPermission() {
    if (!('Notification' in window)) return false;
    try {
      if (Notification.permission === 'granted') {
        localStorage.setItem(NOTIF_STORAGE_KEY, 'true');
        return true;
      }
      const perm = await Notification.requestPermission();
      if (perm === 'granted') {
        localStorage.setItem(NOTIF_STORAGE_KEY, 'true');
        return true;
      }
    } catch (e) {}
    return false;
  }

  function saveCookiePreferences(prefs) {
    try {
      const payload = {
        accepted: true,
        necessary: true,
        analytics: !!prefs.analytics,
        notifications: prefs.notifications !== false,
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
      if (chkNotifications) chkNotifications.checked = current.notifications !== false;
      modal.style.display = 'flex';
    }
  }

  function hideCookieModal() {
    const modal = document.getElementById('robotic-cookie-modal');
    if (modal) modal.style.display = 'none';
  }

  function injectUIElements() {
    // 9.1 Corporate Slim Bottom Dock (Centered, clean, elegant)
    const banner = document.createElement('div');
    banner.id = 'robotic-cookie-dock';
    banner.style.cssText = 'display:none; position:fixed; bottom:20px; left:50%; transform:translate(-50%, 20px); width:calc(100% - 32px); max-width:860px; z-index:9999999; background:rgba(255, 255, 255, 0.96); backdrop-filter:blur(16px); -webkit-backdrop-filter:blur(16px); border:1px solid rgba(226, 232, 240, 0.95); border-radius:18px; box-shadow:0 20px 45px -10px rgba(10, 62, 98, 0.16), 0 0 0 1px rgba(0,0,0,0.03); padding:14px 20px; opacity:0; transition:all 0.35s cubic-bezier(0.16, 1, 0.3, 1); font-family:inherit;';
    banner.innerHTML = `
      <div style="display:flex; flex-direction:row; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap;">
        <div style="display:flex; align-items:center; gap:12px; flex:1; min-width:280px;">
          <div style="width:38px; height:38px; border-radius:50%; overflow:hidden; border:2px solid #0A3E62; flex-shrink:0; background:#0A3E62; box-shadow:0 2px 6px rgba(10,62,98,0.2);">
            <img src="./bot-avatar-centered.png" style="width:100%; height:100%; object-fit:cover;" alt="LATAM ROBI" />
          </div>
          <div>
            <h4 style="margin:0; font-size:13px; font-weight:700; color:#0A3E62; letter-spacing:-0.01em;">Aviso de Privacidad y Cookies</h4>
            <p style="margin:2px 0 0 0; font-size:12px; color:#475569; line-height:1.4;">
              Usamos cookies para el correcto funcionamiento del portal y avisarte si LATAM ROBI responde mientras estás en otra pestaña.
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

    // 9.2 Minimalist Modal for Advanced Settings
    const modal = document.createElement('div');
    modal.id = 'robotic-cookie-modal';
    modal.style.cssText = 'display:none; position:fixed; inset:0; z-index:99999999; align-items:center; justify-content:center; padding:16px; background:rgba(15,23,42,0.55); backdrop-filter:blur(6px); font-family:inherit;';
    modal.innerHTML = `
      <div style="background:#ffffff; border-radius:20px; box-shadow:0 25px 50px -12px rgba(0,0,0,0.25); max-width:480px; width:100%; max-height:90vh; display:flex; flex-direction:column; overflow:hidden;" onclick="event.stopPropagation()">
        <div style="display:flex; align-items:center; justify-content:space-between; padding:18px 22px; border-bottom:1px solid #f1f5f9;">
          <div style="display:flex; align-items:center; gap:10px;">
            <div style="width:34px; height:34px; border-radius:50%; overflow:hidden; border:2px solid #0A3E62; flex-shrink:0; background:#0A3E62;">
              <img src="./bot-avatar-centered.png" style="width:100%; height:100%; object-fit:cover;" alt="LATAM ROBI" />
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
                Garantizan la seguridad del sitio y almacenamiento de sesión.
              </p>
            </div>
            <input type="checkbox" checked disabled style="margin-top:2px; width:16px; height:16px; accent-color:#0A3E62;" />
          </div>

          <div style="padding:12px 14px; border-radius:12px; background:#ffffff; border:1px solid #e2e8f0; display:flex; align-items:flex-start; justify-content:space-between; gap:10px;">
            <div>
              <h4 style="margin:0; font-weight:700; color:#1e293b; font-size:12px;">Alertas cuando estás ausente</h4>
              <p style="margin:3px 0 0 0; font-size:11px; color:#64748b; line-height:1.4;">
                Permite avisos sonoros o en la pestaña cuando no estés viendo el chat y el asistente te responda.
              </p>
            </div>
            <input type="checkbox" id="cookie-chk-notifications" style="margin-top:2px; width:16px; height:16px; accent-color:#0A3E62; cursor:pointer;" />
          </div>

          <div style="padding:12px 14px; border-radius:12px; background:#ffffff; border:1px solid #e2e8f0; display:flex; align-items:flex-start; justify-content:space-between; gap:10px;">
            <div>
              <h4 style="margin:0; font-weight:700; color:#1e293b; font-size:12px;">Métricas y Rendimiento</h4>
              <p style="margin:3px 0 0 0; font-size:11px; color:#64748b; line-height:1.4;">
                Ayuda a mejorar la velocidad y fluidez de la plataforma de forma anónima.
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

  // --- 10. INITIALIZATION ---
  function init() {
    injectUIElements();
    setInterval(scanForBotMessages, 750);

    const observer = new MutationObserver(() => {
      scanForBotMessages();
    });
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });

    document.addEventListener('click', (e) => {
      const target = e.target;
      if (target && (target.closest('chat-widget-button') || target.closest('chat-window') || target.tagName?.toLowerCase().includes('chat-'))) {
        getAudioContext();
        if ('Notification' in window && Notification.permission === 'default') {
          Notification.requestPermission().then(perm => {
            if (perm === 'granted') {
              localStorage.setItem(NOTIF_STORAGE_KEY, 'true');
            }
          });
        }
      }
    }, true);
  }

  window.RoboticCookies = {
    getPreferences,
    savePreferences: saveCookiePreferences,
    openModal: showCookieModal,
    closeModal: hideCookieModal,
    showBanner: showCookieBanner,
    hideBanner: hideCookieBanner,
    isAccepted: hasAccepted,
    triggerTest: () => {
      dispatchAgentNotification('¡Hola! Soy LATAM ROBI. ¿En qué puedo ayudarte hoy?');
    },
    reset: () => {
      localStorage.removeItem(COOKIE_STORAGE_KEY);
      localStorage.removeItem(NOTIF_STORAGE_KEY);
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
