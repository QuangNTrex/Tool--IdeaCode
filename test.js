const delay = (ms) => new Promise((res) => setTimeout(res, ms));
(async () => {
  while (true) {
    console.log(
      $('[class="style-scope ytd-rich-grid-renderer"][hidden]').length
    );
    await delay(200);
  }
})();
