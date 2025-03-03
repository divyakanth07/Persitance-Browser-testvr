import { useEffect } from 'react';

function App() {
  useEffect(() => {
    function initializeUrmom() {
      window.emulator = new window.V86({
        wasm_path: '/v86.wasm',
        screen_container: document.getElementById("screen_container"),
        bios: {
          url: "/bios/seabios.bin",
        },
        vga_bios: {
          url: "/bios/vgabios.bin",
        },
        hda: { 
          url: "/images/fd12-base.img",
          async: true,
          size: 419430400,
        },
        autostart: true,
      });
    }

    initializeUrmom();
  }, []);

  return (
    <div id="screen_container">
      <div id="screen" style={{ overflow: 'hidden' }}>Initializing Hack on CBI and Connecting to their Server on port 6969…</div>
      <canvas style={{ display: 'none' }}></canvas>
    </div>
  );
}

export default App;
