window.addEventListener("load", () => {
  const tokenAddress = "0x0000000000000000000000000000000000000000"; // Replace later

  function initUniswap() {
    if (window.Uniswap && window.Uniswap.SwapWidget) {
      const swapWidget = window.Uniswap.SwapWidget;
      swapWidget.init({
        theme: "dark",
        width: "100%",
        defaultInputToken: "NATIVE",
        defaultOutputToken: tokenAddress,
        container: "#swapWidget"
      });
    } else {
      setTimeout(initUniswap, 500); // Retry if Uniswap not loaded yet
    }
  }

  initUniswap();
});
