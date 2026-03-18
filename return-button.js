// RETURN BUTTON FOR GAMES - Updated for same-tab navigation
(function() {
  console.log('🔍 Return button script loaded');
  console.log('Current path:', window.location.pathname);
  
  // Don't show on main page
  if (window.location.pathname === '/' || 
      window.location.pathname === '/index.html' ||
      window.location.pathname.endsWith('bricknova/')) {
    console.log('📌 On main page - not showing button');
    return;
  }
  
  // Wait for page to load
  window.addEventListener('load', function() {
    console.log('✅ Adding return button to page');
    
    // Create button element
    const returnButton = document.createElement('a');
    
    // Style the button
    returnButton.innerHTML = '⬅ BACK TO BRICKNOVA';
    returnButton.href = '/';
    
    // CHANGED: Ensure it opens in same tab (remove target="_blank" if it was there)
    // returnButton.target = '_self'; // _self is default, so we don't need to set it
    
    // Apply styles directly
    returnButton.style.position = 'fixed';
    returnButton.style.bottom = '20px';
    returnButton.style.right = '20px';
    returnButton.style.backgroundColor = '#ff8c42';
    returnButton.style.color = '#1e3a5f';
    returnButton.style.fontFamily = "'Courier New', monospace";
    returnButton.style.fontWeight = '900';
    returnButton.style.fontSize = '1rem';
    returnButton.style.padding = '12px 20px';
    returnButton.style.border = '4px solid #1e3a5f';
    returnButton.style.boxShadow = '6px 6px 0 #2c4c6b';
    returnButton.style.textDecoration = 'none';
    returnButton.style.textTransform = 'uppercase';
    returnButton.style.zIndex = '9999';
    returnButton.style.transition = 'all 0.1s ease';
    returnButton.style.cursor = 'pointer';
    
    // Hover effect
    returnButton.onmouseover = function() {
      this.style.transform = 'translate(-2px, -2px)';
      this.style.boxShadow = '8px 8px 0 #1e3a5f';
    };
    
    returnButton.onmouseout = function() {
      this.style.transform = 'translate(0, 0)';
      this.style.boxShadow = '6px 6px 0 #2c4c6b';
    };
    
    // Active (click) effect
    returnButton.onmousedown = function() {
      this.style.transform = 'translate(2px, 2px)';
      this.style.boxShadow = '3px 3px 0 #2c4c6b';
    };
    
    // Add to page
    document.body.appendChild(returnButton);
    console.log('✅ Button added!');
  });
})();