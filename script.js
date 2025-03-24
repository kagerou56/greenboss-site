document.addEventListener("DOMContentLoaded", function () {
  const tokenAddress = "0x0000000000000000000000000000000000000000"; // Replace with real token when ready

  function initUniswap() {
    if (window.Uniswap && window.Uniswap.SwapWidget) {
      window.Uniswap.SwapWidget.init({
        theme: "dark",
        width: "100%",
        defaultInputToken: "NATIVE",
        defaultOutputToken: tokenAddress,
        container: "#swapWidget"
      });
    } else {
      setTimeout(initUniswap, 300);
    }
  }

  initUniswap();
});
