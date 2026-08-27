// ==========================================
// CẤU HÌNH FIREBASE (Cần thay bằng config thật của bạn)
// ==========================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBKIwyzW6Yu9HRfslh1qIztql7CqSkFvKo",
  authDomain: "luu-submitexam-a05-vl-12.firebaseapp.com",
  databaseURL:
    "https://luu-submitexam-a05-vl-12-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "luu-submitexam-a05-vl-12",
  storageBucket: "luu-submitexam-a05-vl-12.firebasestorage.app",
  messagingSenderId: "499179183740",
  appId: "1:499179183740:web:1966d20cbbbc572314b3f9",
  measurementId: "G-G4EDL71GTK",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ==========================================
// DỮ LIỆU CÂU HỎI (Đề Toán 8 - Đề số 1)
// ==========================================
const examData = {
  part1: [
    {
      id: "p1_1",
      q: "Biểu thức nào sau đây là đơn thức?",
      options: ["$2x + y$", "$3x^2y$", "$x^2 - 1$", "$\\frac{1}{x}$"],
      ans: 1,
    },
    {
      id: "p1_2",
      q: "Bậc của đơn thức $5x^3y^2$ là:",
      options: ["3", "2", "5", "6"],
      ans: 2,
    },
    {
      id: "p1_3",
      q: "Kết quả của phép cộng $3xy + 5xy$ là:",
      options: ["$8xy$", "$8x^2y^2$", "$15xy$", "$2xy$"],
      ans: 0,
    },
    {
      id: "p1_4",
      q: "Đa thức là:",
      options: [
        "Một tổng của những đơn thức.",
        "Một tích của những đơn thức.",
        "Một hiệu của hai số.",
        "Một phân số.",
      ],
      ans: 0,
    },
    {
      id: "p1_5",
      q: "Bậc của đa thức $A = x^4 - 2x^2y^3 + 1$ là:",
      options: ["4", "5", "2", "3"],
      ans: 1,
    },
    {
      id: "p1_6",
      q: "Kết quả của phép nhân đơn thức $2x$ với đa thức $(x - 3)$ là:",
      options: ["$2x^2 - 3$", "$2x^2 - 6x$", "$2x^2 + 6x$", "$x^2 - 6x$"],
      ans: 1,
    },
    {
      id: "p1_7",
      q: "Phép chia đa thức $6x^3y - 9x^2y^2$ cho đơn thức $3x^2y$ được kết quả là:",
      options: ["$2x - 3y$", "$2x + 3y$", "$3x - 3y$", "$2x^2 - 3y^2$"],
      ans: 0,
    },
    {
      id: "p1_8",
      q: "Rút gọn biểu thức $x(x - 2) - x^2$, ta được:",
      options: ["$2x$", "$-2x$", "$2x^2$", "$0$"],
      ans: 1,
    },
    {
      id: "p1_9",
      q: "Đơn thức $-4x^2y^3$ thu gọn có hệ số là bao nhiêu?",
      options: ["4", "-4", "2", "3"],
      ans: 1,
    },
    {
      id: "p1_10",
      q: "Tích của hai đơn thức $(-2x^2y)$ và $(3xy^2)$ là:",
      options: ["$-6x^3y^3$", "$6x^3y^3$", "$-5x^2y^2$", "$-6x^2y^2$"],
      ans: 0,
    },
    {
      id: "p1_11",
      q: "Tổng các góc của một tứ giác bằng:",
      options: ["$180^\\circ$", "$270^\\circ$", "$360^\\circ$", "$100^\\circ$"],
      ans: 2,
    },
    {
      id: "p1_12",
      q: "Tứ giác lồi là tứ giác:",
      options: [
        "Luôn nằm trọn trong một nửa mặt phẳng có bờ là đường thẳng chứa bất kỳ cạnh nào của tứ giác.",
        "Có ít nhất một góc lớn hơn $180^\\circ$.",
        "Có hai đường chéo cắt nhau ngoài tứ giác.",
        "Có 3 cạnh bằng nhau.",
      ],
      ans: 0,
    },
    {
      id: "p1_13",
      q: "Cho tứ giác $ABCD$ có $\\angle A = 90^\\circ, \\angle B = 90^\\circ, \\angle C = 80^\\circ$. Số đo $\\angle D$ là:",
      options: ["$90^\\circ$", "$100^\\circ$", "$80^\\circ$", "$120^\\circ$"],
      ans: 1,
    },
    {
      id: "p1_14",
      q: "Hai góc kề bù có tổng số đo bằng:",
      options: ["$90^\\circ$", "$180^\\circ$", "$270^\\circ$", "$360^\\circ$"],
      ans: 1,
    },
    {
      id: "p1_15",
      q: "Nếu đường thẳng $c$ cắt hai đường thẳng song song $a$ và $b$ thì hai góc so le trong:",
      options: ["Kề bù nhau", "Phụ nhau", "Bằng nhau", "Trái dấu"],
      ans: 2,
    },
    {
      id: "p1_16",
      q: "Cho $\\triangle ABC = \\triangle DEF$. Nếu $AB = 5$ cm thì:",
      options: ["$DE = 5$ cm", "$DF = 5$ cm", "$EF = 5$ cm", "$AC = 5$ cm"],
      ans: 0,
    },
    {
      id: "p1_17",
      q: "Khẳng định nào sau đây là sai khi nói về hai tam giác bằng nhau?",
      options: [
        "Các cạnh tương ứng bằng nhau.",
        "Các góc tương ứng bằng nhau.",
        "Chu vi hai tam giác bằng nhau.",
        "Hai tam giác có cùng các đỉnh.",
      ],
      ans: 3,
    },
    {
      id: "p1_18",
      q: "Quan sát hình vẽ bên (2 tam giác có 2 cạnh bằng nhau và góc xen giữa bằng nhau). Hai tam giác $\\triangle ABC$ và $\\triangle MNP$ bằng nhau theo trường hợp nào?",
      options: [
        "Cạnh - cạnh - cạnh (c.c.c)",
        "Cạnh - góc - cạnh (c.g.c)",
        "Góc - cạnh - góc (g.c.g)",
        "Cạnh huyền - góc nhọn",
      ],
      ans: 1,
    },
    {
      id: "p1_19",
      q: "Quan sát hình vẽ (Gồm 3 đa giác lồi, 1 đa giác lõm hình mũi tên). Đâu là tứ giác lõm?",
      options: ["Hình 1", "Hình 2", "Hình 3", "Hình 4"],
      ans: 3,
    },
    {
      id: "p1_20",
      q: "Nếu $\\triangle ABC$ và $\\triangle MNP$ có $AB = MN$, $AC = MP$ và $BC = NP$ thì:",
      options: [
        "$\\triangle ABC = \\triangle MNP$",
        "$\\triangle ABC = \\triangle PMN$",
        "$\\triangle ABC = \\triangle NPM$",
        "$\\triangle ABC$ không bằng $\\triangle MNP$",
      ],
      ans: 0,
    },
  ],
  part2: [
    {
      id: "p2_1",
      q: "Cho hai đa thức $P(x) = 2x^2 + 3x - 1$ và $Q(x) = x^2 - 3x + 2$.",
      stmts: [
        "$P(x) + Q(x) = 3x^2 + 1$.",
        "$P(x) - Q(x) = x^2 + 6x - 3$.",
        "Bậc của đa thức $P(x) + Q(x)$ là 3.",
        "Hệ số tự do của $Q(x)$ là 2.",
      ],
      ans: [true, true, false, true],
    },
    {
      id: "p2_2",
      q: "Xét biểu thức $A = 3x^2y(x - 2y) - 3x^3y + 6x^2y^2$.",
      stmts: [
        "Đa thức thu được sau khi nhân $3x^2y(x - 2y)$ là $3x^3y - 6x^2y^2$.",
        "Biểu thức $A$ sau khi rút gọn bằng $0$.",
        "Giá trị của $A$ tại $x = 2026, y = -1$ là 1.",
        "Biểu thức $A$ luôn nhận giá trị dương với mọi $x, y$.",
      ],
      ans: [true, true, false, false],
    },
    {
      id: "p2_3",
      q: "Xét tứ giác $ABCD$.",
      stmts: [
        "Tổng 4 góc của tứ giác bằng $360^\\circ$.",
        "Tứ giác $ABCD$ có thể có 4 góc nhọn.",
        "Nếu $\\angle A = \\angle B = \\angle C = 90^\\circ$ thì góc $\\angle D = 90^\\circ$.",
        "Đường chéo của mọi tứ giác luôn cắt nhau tại trung điểm của mỗi đường.",
      ],
      ans: [true, false, true, false],
    },
    {
      id: "p2_4",
      q: "Xét các đường thẳng và tam giác.",
      stmts: [
        "Hai góc kề bù thì có một cạnh chung.",
        "Hai đường thẳng phân biệt cùng vuông góc với đường thẳng thứ ba thì chúng song song.",
        "Hai tam giác có 3 cặp góc bằng nhau thì bằng nhau.",
        "Nếu hai tam giác bằng nhau thì diện tích của chúng bằng nhau.",
      ],
      ans: [true, true, false, true],
    },
  ],
  part3: [
    {
      id: "p3_1",
      q: "Tính giá trị của biểu thức $B = (x - 2)(x^2 + 2x + 4) - x^3$ tại $x = 100$.",
      ans: "-8",
    },
    {
      id: "p3_2",
      q: "Tứ giác $MNPQ$ có $\\angle M = 70^\\circ$, $\\angle N = 110^\\circ$, $\\angle P = 80^\\circ$. Tính số đo $\\angle Q$ (theo độ).",
      ans: "100",
    },
    {
      id: "p3_3",
      q: "Rút gọn đa thức $(2x - y)(2x + y) + y^2$, ta được đa thức có một hạng tử duy nhất. Viết hạng tử đó.",
      ans: "4x^2",
    },
  ],
};

// ==========================================
// BIẾN TOÀN CỤC
// ==========================================
const TOTAL_MINUTES = 45; // Cố định 45 phút
let timeLeft = TOTAL_MINUTES * 60;
let timerInterval;
let cheatCount = 0;
let isExamRunning = false;
let answers = { part1: {}, part2: {}, part3: {} };
let studentInfo = { name: "", class: "" };

// DOM Elements
const screenStart = document.getElementById("screen-start");
const screenExam = document.getElementById("screen-exam");
const screenResults = document.getElementById("screen-results");
const btnStart = document.getElementById("btn-start");
const btnSubmit = document.getElementById("btn-submit");

// ==========================================
// RENDER ĐỀ THI
// ==========================================
function renderExam() {
  // Render Phần 1
  const p1Container = document.getElementById("part1-container");
  p1Container.innerHTML = examData.part1
    .map(
      (q, i) => `
        <div class="qcard">
            <div class="qhead">
                <div class="qnum">${i + 1}</div>
                <div class="qtext">${q.q}</div>
            </div>
            <div class="options">
                ${q.options
                  .map(
                    (opt, j) => `
                    <label class="opt">
                        <input type="radio" name="${q.id}" value="${j}">
                        <span class="lbl">${String.fromCharCode(65 + j)}.</span> ${opt}
                    </label>
                `,
                  )
                  .join("")}
            </div>
        </div>
    `,
    )
    .join("");

  // Render Phần 2
  const p2Container = document.getElementById("part2-container");
  p2Container.innerHTML = examData.part2
    .map(
      (q, i) => `
        <div class="qcard">
            <div class="qhead">
                <div class="qnum">${i + 1}</div>
                <div class="qtext">${q.q}</div>
            </div>
            <div class="tf-row">
                ${q.stmts
                  .map(
                    (stmt, j) => `
                    <div class="tf-item">
                        <div class="stmt"><b>${["a", "b", "c", "d"][j]})</b> ${stmt}</div>
                        <div class="tf-toggle" data-qid="${q.id}" data-stmt="${j}">
                            <button type="button" class="btn-true">Đúng</button>
                            <button type="button" class="btn-false">Sai</button>
                        </div>
                    </div>
                `,
                  )
                  .join("")}
            </div>
        </div>
    `,
    )
    .join("");

  // Render Phần 3
  const p3Container = document.getElementById("part3-container");
  p3Container.innerHTML = examData.part3
    .map(
      (q, i) => `
        <div class="qcard">
            <div class="qhead">
                <div class="qnum">${i + 1}</div>
                <div class="qtext">${q.q}</div>
            </div>
            <div class="short-answer">
                <input type="text" data-qid="${q.id}" placeholder="Nhập đáp án...">
            </div>
        </div>
    `,
    )
    .join("");

  if (window.MathJax) MathJax.typesetPromise();
  attachListeners();
}

// ==========================================
// THEO DÕI & TÍNH TIẾN ĐỘ
// ==========================================
function attachListeners() {
  // P1 (Radio)
  document
    .querySelectorAll('#part1-container input[type="radio"]')
    .forEach((el) => {
      el.addEventListener("change", (e) => {
        answers.part1[e.target.name] = parseInt(e.target.value);
        e.target
          .closest(".options")
          .querySelectorAll(".opt")
          .forEach((opt) => opt.classList.remove("selected"));
        e.target.closest(".opt").classList.add("selected");
        updateProgress();
      });
    });

  // P2 (T/F)
  document
    .querySelectorAll("#part2-container .tf-toggle button")
    .forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const toggleBox = e.target.closest(".tf-toggle");
        const qid = toggleBox.dataset.qid;
        const stmtIdx = toggleBox.dataset.stmt;

        toggleBox
          .querySelectorAll("button")
          .forEach((b) => b.classList.remove("active", "true", "false"));
        const isTrue = e.target.classList.contains("btn-true");
        e.target.classList.add("active", isTrue ? "true" : "false");

        if (!answers.part2[qid]) answers.part2[qid] = [];
        answers.part2[qid][stmtIdx] = isTrue;
        updateProgress();
      });
    });

  // P3 (Text)
  document.querySelectorAll("#part3-container input").forEach((input) => {
    input.addEventListener("input", (e) => {
      answers.part3[e.target.dataset.qid] = e.target.value.trim();
      updateProgress();
    });
  });
}

function updateProgress() {
  const p1Count = Object.keys(answers.part1).length;
  let p2Count = 0;
  Object.values(answers.part2).forEach((arr) => {
    if (arr.filter((v) => v !== undefined).length === 4) p2Count++;
  });
  let p3Count = 0;
  Object.values(answers.part3).forEach((v) => {
    if (v !== "") p3Count++;
  });

  const totalAns = p1Count + p2Count + p3Count;
  document.getElementById("tb-progress").innerText =
    `${totalAns}/27 câu đã làm`;
}

// ==========================================
// ĐỒNG HỒ & ANTI-CHEAT
// ==========================================
function updateClock() {
  const m = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");
  const s = (timeLeft % 60).toString().padStart(2, "0");
  document.getElementById("clock-text").innerText = `${m}:${s}`;

  if (timeLeft <= 300) {
    document.getElementById("clock").classList.add("low");
  }
}

function startTimer() {
  updateClock();
  timerInterval = setInterval(() => {
    timeLeft--;
    updateClock();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert("Đã hết thời gian làm bài! Hệ thống tự động nộp bài.");
      submitExam();
    }
  }, 1000);
}

// Phát hiện chuyển Tab
document.addEventListener("visibilitychange", () => {
  if (document.hidden && isExamRunning) {
    cheatCount++;
    alert(
      `Cảnh báo gian lận! Bạn vừa thoát khỏi màn hình bài thi. (Vi phạm lần ${cheatCount})`,
    );
  }
});

// ==========================================
// LOGIC NỘP BÀI & TÍNH ĐIỂM
// ==========================================
async function submitExam() {
  isExamRunning = false;
  clearInterval(timerInterval);

  let scoreP1 = 0,
    scoreP2 = 0,
    scoreP3 = 0;
  let reviewHTML1 = "",
    reviewHTML2 = "",
    reviewHTML3 = "";

  // Chấm Phần 1 (0.2đ / câu)
  examData.part1.forEach((q, i) => {
    const userAns = answers.part1[q.id];
    const isCorrect = userAns === q.ans;
    if (isCorrect) scoreP1 += 0.2;

    reviewHTML1 += `
            <div class="review-item ${isCorrect ? "correct" : "wrong"}">
                <div class="verdict ${isCorrect ? "correct" : "wrong"}">${isCorrect ? "ĐÚNG" : "SAI"} - Câu ${i + 1}</div>
                <div class="qtext">${q.q}</div>
                <div class="review-detail">
                    Đáp án của bạn: <b>${userAns !== undefined ? q.options[userAns] : "Chưa làm"}</b><br>
                    Đáp án đúng: <b>${q.options[q.ans]}</b>
                </div>
            </div>`;
  });

  // Chấm Phần 2 (1đ/câu nếu đúng 4 ý, 0.5đ/3 ý, 0.25đ/2 ý, 0.1đ/1 ý)
  examData.part2.forEach((q, i) => {
    const userAns = answers.part2[q.id] || [];
    let correctCount = 0;
    let linesHTML = "";

    q.ans.forEach((truth, j) => {
      const uAns = userAns[j];
      const isOk = uAns === truth;
      if (isOk) correctCount++;

      linesHTML += `
                <div class="tf-review-line">
                    <span>${["a", "b", "c", "d"][j]}) ${q.stmts[j]}</span>
                    <span class="${isOk ? "tag-ok" : "tag-bad"}">${uAns === undefined ? "Trống" : uAns ? "Đúng" : "Sai"}</span>
                </div>`;
    });

    let earned = 0;
    if (correctCount === 4) earned = 1.0;
    else if (correctCount === 3) earned = 0.5;
    else if (correctCount === 2) earned = 0.25;
    else if (correctCount === 1) earned = 0.1;

    scoreP2 += earned;
    const verdictClass =
      correctCount === 4 ? "correct" : correctCount > 0 ? "partial" : "wrong";

    reviewHTML2 += `
            <div class="review-item ${verdictClass}">
                <div class="verdict ${verdictClass}">CÂU ${i + 1} - ĐƯỢC ${earned} ĐIỂM (${correctCount}/4)</div>
                <div class="qtext">${q.q}</div>
                <div style="margin-top:10px">${linesHTML}</div>
            </div>`;
  });

  // Chấm Phần 3 (~0.67đ / câu)
  const p3Point = 2.0 / examData.part3.length;
  examData.part3.forEach((q, i) => {
    const userAns = (answers.part3[q.id] || "")
      .toLowerCase()
      .replace(/\\s+/g, "");
    const trueAns = q.ans.toLowerCase().replace(/\\s+/g, "");
    const isCorrect = userAns === trueAns;
    if (isCorrect) scoreP3 += p3Point;

    reviewHTML3 += `
            <div class="review-item ${isCorrect ? "correct" : "wrong"}">
                <div class="verdict ${isCorrect ? "correct" : "wrong"}">${isCorrect ? "ĐÚNG" : "SAI"} - Câu ${i + 1}</div>
                <div class="qtext">${q.q}</div>
                <div class="review-detail">
                    Của bạn: <b>$${answers.part3[q.id] || "Trống"}$</b> &nbsp;&nbsp;|&nbsp;&nbsp; 
                    Đáp án đúng: <b>$${q.ans}$</b>
                </div>
            </div>`;
  });

  const totalScore = (scoreP1 + scoreP2 + scoreP3).toFixed(1);

  // Hiển thị UI
  screenExam.classList.add("hidden");
  screenResults.classList.remove("hidden");

  document.getElementById("res-who").innerText =
    `${studentInfo.name} - Lớp ${studentInfo.class}`;
  document.getElementById("res-score").innerHTML =
    `${totalScore}<span>/10</span>`;
  document.getElementById("res-breakdown").innerHTML =
    `P1: ${scoreP1.toFixed(1)}đ &nbsp;|&nbsp; P2: ${scoreP2.toFixed(1)}đ &nbsp;|&nbsp; P3: ${scoreP3.toFixed(1)}đ<br>
         <i>Số lần vi phạm chuyển Tab: <b>${cheatCount}</b></i>`;

  document.getElementById("review1").innerHTML = reviewHTML1;
  document.getElementById("review2").innerHTML = reviewHTML2;
  document.getElementById("review3").innerHTML = reviewHTML3;

  if (window.MathJax) MathJax.typesetPromise();

  // Lưu vào Firebase
  try {
    document.getElementById("save-note-box").innerHTML =
      `<div class="save-note">⏳ Đang lưu kết quả lên hệ thống...</div>`;
    await addDoc(collection(db, "exam_results"), {
      name: studentInfo.name,
      class: studentInfo.class,
      score: parseFloat(totalScore),
      cheatCount: cheatCount,
      timestamp: serverTimestamp(),
      answers: answers,
    });
    document.getElementById("save-note-box").innerHTML =
      `<div class="save-note ok">✓ Kết quả đã được lưu an toàn trên hệ thống.</div>`;
  } catch (e) {
    console.error("Firebase Error:", e);
    document.getElementById("save-note-box").innerHTML =
      `<div class="save-note err">⚠️ Lỗi: Không thể lưu kết quả. Vui lòng chụp màn hình gửi giáo viên!</div>`;
  }
}

// ==========================================
// KHỞI CHẠY / EVENTS
// ==========================================
btnStart.addEventListener("click", () => {
  studentInfo.name = document.getElementById("student-name").value.trim();
  studentInfo.class = document.getElementById("student-class").value.trim();

  if (!studentInfo.name || !studentInfo.class) {
    alert("Vui lòng điền đủ Họ tên và Lớp!");
    return;
  }

  document.getElementById("tb-name").innerText = studentInfo.name;
  document.getElementById("tb-class").innerText = studentInfo.class;

  screenStart.classList.add("hidden");
  screenExam.classList.remove("hidden");

  timeLeft = TOTAL_MINUTES * 60;
  cheatCount = 0;
  isExamRunning = true;

  renderExam();
  startTimer();
});

btnSubmit.addEventListener("click", () => {
  if (
    confirm("Bạn có chắc chắn muốn nộp bài? Hành động này không thể hoàn tác.")
  ) {
    submitExam();
  }
});

document.getElementById("btn-restart").addEventListener("click", () => {
  location.reload();
});
