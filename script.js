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
