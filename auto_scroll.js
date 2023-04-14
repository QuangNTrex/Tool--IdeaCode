const delay = (ms) => new Promise((res) => setTimeout(res, ms));
let nameOfPlayList = "Vlog No Copyright Music";
let prevHeight = 0;
let skip = false;

(async () => {
  while ($("#content").height() !== prevHeight && skip) {
    prevHeight = $("#content").height();
    window.scrollTo(0, $("#content").height());

    await delay(1000);
    if (
      $('[class="style-scope ytd-rich-grid-renderer"][hidden]').length !== 2
    ) {
      console("break");
      break;
    }

    while (
      $('[class="style-scope ytd-rich-grid-renderer"][hidden]').length === 2
    )
      await delay(1000);
  }
  console.log("End!");
})();

// id="label"][class="checkbox-height][style-scope ytd-playlist-add-to-option-renderer" ellipsis-truncate="" ellipsis-truncate-styling=""
