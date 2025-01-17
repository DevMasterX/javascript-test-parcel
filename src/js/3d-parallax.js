document.addEventListener('mousemove', e => {
  Object.assign(document.documentElement, {
    style: `
    --moove-x: ${e.clientX};
    --move-y: ${e.clientY};
    
      `,
  });
});
