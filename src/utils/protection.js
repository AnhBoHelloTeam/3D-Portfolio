// Simple protection against easy cloning/copying
// Note: Không thể 100% ngăn copy code, nhưng làm khó hơn

// Console warning khi mở DevTools
const consoleWarning = () => {
  const style = "font-size: 20px; font-weight: bold; color: #ff0000; padding: 10px;";
  console.log("%c⚠️ STOP!", style);
  console.log("%cThis is a protected portfolio website. Unauthorized copying or cloning is prohibited.", "font-size: 14px; color: #ff9900;");
  console.log("%cIf you're interested in using this code, please contact the owner for permission.", "font-size: 12px; color: #666;");
  console.log("%c© 2025 NhanNG Portfolio. All rights reserved.", "font-size: 12px; color: #999;");
};

// Detect DevTools mở
const detectDevToolsOpen = () => {
  let devtoolsOpen = false;
  const threshold = 160;
  
  setInterval(() => {
    if (window.outerHeight - window.innerHeight > threshold || 
        window.outerWidth - window.innerWidth > threshold) {
      if (!devtoolsOpen) {
        devtoolsOpen = true;
        consoleWarning();
      }
    } else {
      devtoolsOpen = false;
    }
  }, 500);
};

// Disable right-click context menu (optional)
const disableRightClick = () => {
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
  });
  
  // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
  document.addEventListener('keydown', (e) => {
    // F12
    if (e.keyCode === 123) {
      e.preventDefault();
      return false;
    }
    // Ctrl+Shift+I (DevTools)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
      e.preventDefault();
      return false;
    }
    // Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
      e.preventDefault();
      return false;
    }
    // Ctrl+U (View Source)
    if (e.ctrlKey && e.keyCode === 85) {
      e.preventDefault();
      return false;
    }
  });
};

// Thêm copyright watermark (subtle)
const addWatermark = () => {
  const watermark = document.createElement('div');
  watermark.innerHTML = '© NhanNG 2025';
  watermark.style.cssText = `
    position: fixed;
    bottom: 10px;
    right: 10px;
    font-size: 10px;
    color: rgba(255,255,255,0.1);
    pointer-events: none;
    z-index: 9999;
    user-select: none;
  `;
  document.body.appendChild(watermark);
};

// Initialize protection
export const initProtection = (options = {}) => {
  const { 
    disableRightClickMenu = true, 
    detectDevTools = true,
    addCopyrightWatermark = true 
  } = options;

  if (disableRightClickMenu) {
    disableRightClick();
  }

  if (detectDevTools) {
    detectDevToolsOpen();
  }

  if (addCopyrightWatermark) {
    addWatermark();
  }

  // Show warning on page load
  consoleWarning();
};

