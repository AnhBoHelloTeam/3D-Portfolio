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

// Không disable DevTools để bạn có thể debug khi cần
// Chỉ cảnh báo khi mở DevTools, không block

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
    detectDevTools = true,
    addCopyrightWatermark = true 
  } = options;

  if (detectDevTools) {
    detectDevToolsOpen();
  }

  if (addCopyrightWatermark) {
    addWatermark();
  }

  // Show warning on page load
  consoleWarning();
};

