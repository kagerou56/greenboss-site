body {
  margin: 0;
  font-family: 'Orbitron', sans-serif;
  background: linear-gradient(145deg, #101024, #180030);
  background-attachment: fixed;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  overflow-x: hidden;
}

.hero {
  padding: 40px 20px;
  max-width: 700px;
  background: rgba(0, 0, 0, 0.5);
  border: 2px solid #00ff88;
  border-radius: 16px;
  box-shadow: 0 0 40px rgba(0, 255, 136, 0.2);
}

h1 {
  font-size: 2.8rem;
  color: #00ff88;
  margin-top: 20px;
}

.tagline {
  font-size: 1.2rem;
  margin: 10px 0 30px;
  color: #b0fce1;
}

.boss-img {
  width: 220px;
  height: auto;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 0 20px rgba(0, 255, 136, 0.4);
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
}

.btn, .btn-secondary, .btn-outline {
  padding: 12px 20px;
  font-size: 1rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: all 0.2s ease-in-out;
}

.btn {
  background: #00ff88;
  color: #000;
}

.btn-secondary {
  background: #7f00ff;
  color: #fff;
}

.btn-outline {
  border: 2px solid #00ff88;
  color: #00ff88;
  background: transparent;
}

.btn:hover, .btn-secondary:hover, .btn-outline:hover {
  transform: scale(1.05);
}

window.addEventListener("load", () => {
  // ✅ Replace this with your real $GBC token address
  const tokenAddress = "0x0000000000000000000000000000000000000000";

  // Wait for the Uniswap Widget to load
  const initUniswap = () => {
    if (window.Uniswap) {
      const swapWidget = window.Uniswap.SwapWidget;
      swapWidget.init({
        theme: "dark",                     // Style: dark mode for meme boss vibes
        width: "100%",                     // Full width inside container
        defaultInputToken: "NATIVE",       // ETH
        defaultOutputToken: tokenAddress,  // Your token
        container: "#swapWidget"           // HTML container to inject the widget
      });
    } else {
      // Try again after a short delay if Uniswap hasn't loaded yet
      setTimeout(initUniswap, 500);
    }
  };

  // Initialize the widget
  initUniswap();
});
