// --- Q2の選択に応じてQ3かQ4を表示 ---
function handleQ2Change() {
  const q2Value = document.querySelector('input[name="q2"]:checked').value;
  const q3 = document.getElementById("q3");
  const q4 = document.getElementById("q4");

  if (q2Value === "1") {
    // 「かっこよくなりたい」→ Q4を表示
    q3.style.display = "none";
    q4.style.display = "block";
  } else if (q2Value === "2") {
    // 「肌の悩みを解消したい」→ Q3を表示
    q3.style.display = "block";
    q4.style.display = "none";
  }

  checkAnswers(); // 状態更新
}

// --- 実行ボタンの表示制御 ---
function checkAnswers() {
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const q3Visible = document.getElementById("q3").style.display === "block";
  const q4Visible = document.getElementById("q4").style.display === "block";
  const q3 = q3Visible ? document.querySelector('input[name="q3"]:checked') : null;
  const q4 = q4Visible ? document.querySelector('input[name="q4"]:checked') : null;

  const zikkoBox = document.querySelector(".zikko-box");

  if (q1 && q2 && ((q3Visible && q3) || (q4Visible && q4))) {
    zikkoBox.style.display = "block"; // 条件を満たしたら表示
  } else {
    zikkoBox.style.display = "none"; // 未回答なら非表示
  }
}

// --- 各質問の選択時にチェック ---
document.querySelectorAll('input[name="q1"], input[name="q2"], input[name="q3"], input[name="q4"]').forEach(input => {
  input.addEventListener("change", checkAnswers);
});

// --- 実行ボタンを押したとき ---
document.getElementById("submitBtn").addEventListener("click", function () {
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const q3Visible = document.getElementById("q3").style.display === "block";
  const q4Visible = document.getElementById("q4").style.display === "block";
  const q3 = q3Visible ? document.querySelector('input[name="q3"]:checked') : null;
  const q4 = q4Visible ? document.querySelector('input[name="q4"]:checked') : null;

  // 未回答チェック
  if (!q1 || !q2 || (q3Visible && !q3) || (q4Visible && !q4)) {
    alert("すべての質問に答えてください。");
    return;
  }

  const q1Value = q1.value;
  const q2Value = q2.value;
  const q3Value = q3 ? q3.value : null;
  const q4Value = q4 ? q4.value : null;

  let resultPage = "";

  // ▼ 肌の悩みを解消したい（Q3のパターン）
  if (q2Value === "2") {
    if (q1Value === "1" && q3Value === "1") resultPage = "result_dry_nikibi.html";
    else if (q1Value === "1" && q3Value === "2") resultPage = "result_dry_keana.html";
    else if (q1Value === "1" && q3Value === "3") resultPage = "result_dry_kusumi.html";
    else if (q1Value === "1" && q3Value === "4") resultPage = "result_dry_shiwa.html";

    else if (q1Value === "2" && q3Value === "1") resultPage = "result_normal_nikibi.html";
    else if (q1Value === "2" && q3Value === "2") resultPage = "result_normal_keana.html";
    else if (q1Value === "2" && q3Value === "3") resultPage = "result_normal_kusumi.html";
    else if (q1Value === "2" && q3Value === "4") resultPage = "result_normal_shiwa.html";

    else if (q1Value === "3" && q3Value === "1") resultPage = "result_oily_nikibi.html";
    else if (q1Value === "3" && q3Value === "2") resultPage = "result_oily_keana.html";
    else if (q1Value === "3" && q3Value === "3") resultPage = "result_oily_kusumi.html";
    else if (q1Value === "3" && q3Value === "4") resultPage = "result_oily_shiwa.html";

    else if (q1Value === "4" && q3Value === "1") resultPage = "result_mix_nikibi.html";
    else if (q1Value === "4" && q3Value === "2") resultPage = "result_mix_keana.html";
    else if (q1Value === "4" && q3Value === "3") resultPage = "result_mix_kusumi.html";
    else if (q1Value === "4" && q3Value === "4") resultPage = "result_mix_shiwa.html";
  }

  // ▼ かっこよくなりたい（Q4のパターン）
  else if (q2Value === "1") {
    if (q1Value === "1" && q4Value === "1") resultPage = "result_dry_midashinami.html";
    else if (q1Value === "1" && q4Value === "2") resultPage = "result_dry_korea.html";
    else if (q1Value === "1" && q4Value === "3") resultPage = "result_dry_genderless.html";
    else if (q1Value === "1" && q4Value === "4") resultPage = "result_dry_host.html";
    else if (q1Value === "1" && q4Value === "5") resultPage = "result_dry_sawayaka.html";

    else if (q1Value === "2" && q4Value === "1") resultPage = "result_normal_midashinami.html";
    else if (q1Value === "2" && q4Value === "2") resultPage = "result_normal_korea.html";
    else if (q1Value === "2" && q4Value === "3") resultPage = "result_normal_genderless.html";
    else if (q1Value === "2" && q4Value === "4") resultPage = "result_normal_host.html";
    else if (q1Value === "2" && q4Value === "5") resultPage = "result_normal_sawayaka.html";

    else if (q1Value === "3" && q4Value === "1") resultPage = "result_oily_midashinami.html";
    else if (q1Value === "3" && q4Value === "2") resultPage = "result_oily_korea.html";
    else if (q1Value === "3" && q4Value === "3") resultPage = "result_oily_genderless.html";
    else if (q1Value === "3" && q4Value === "4") resultPage = "result_oily_host.html";
    else if (q1Value === "3" && q4Value === "5") resultPage = "result_oily_sawayaka.html";

    else if (q1Value === "4" && q4Value === "1") resultPage = "result_mix_midashinami.html";
    else if (q1Value === "4" && q4Value === "2") resultPage = "result_mix_korea.html";
    else if (q1Value === "4" && q4Value === "3") resultPage = "result_mix_genderless.html";
    else if (q1Value === "4" && q4Value === "4") resultPage = "result_mix_host.html";
    else if (q1Value === "4" && q4Value === "5") resultPage = "result_mix_sawayaka.html";
  }

  if (!resultPage) {
    alert("診断結果ページがまだ作成されていません。");
    return;
  }

  window.location.href = resultPage;
});