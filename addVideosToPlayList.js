// cách sử dụng:
var jq = document.createElement("script");
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
document.getElementsByTagName("head")[0].appendChild(jq);
// ... give time for script to load, then type (or see below for non wait option)
jQuery.noConflict();

// cần phải điền vào các biến sau
let nameOfPlayList = "Vlog No Copyright Music";
let limitOfVideo = 207;

// khai báo nè
let prevHeight = 0;
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// lấy toàn bộ btn 3 chấm ở mỗi video
const btns = $('[aria-label="Menu tác vụ"]');

(async () => {
  // load toàn bộ video ytb
  while ($("#content").height() !== prevHeight) {
    prevHeight = $("#content").height();
    window.scrollTo(0, $("#content").height());
    await delay(2000);
  }
  console.log("End!");

  // lặp qua từng phần tử
  for (let i = 0; i < limit; i++) {
    btns[i].click();
    // chờ hiện ra tùy chọn
    while (
      !!$(
        '[horizontal-align="auto"][vertical-align="top"][aria-disabled="false"][class="style-scope ytd-popup-container"][prevent-autonav="true"]'
      ).attr("aria-hidden")
    )
      await delay(50);

    $(".style-scope ytd-menu-service-item-renderer")[2].click();

    // chờ để hiện checkbox của chọn playlist
    while (
      !!$(
        '[style-target="host"][role="dialog"][tabindex="-1"][class="style-scope ytd-popup-container"][prevent-autonav="true"][modern]'
      ).attr("aria-hidden")
    )
      await delay(50);
    await $(
      `[class="checkbox-height style-scope ytd-playlist-add-to-option-renderer"][title="${nameOfPlayList}"]`
    ).click(() => {
      $('[aria-label="Hủy"]')[2].click();
    });
  }
  console.log("oke rồi bro");
})();

// $('[class="style-scope ytd-popup-container"][style="display: none;"]');
