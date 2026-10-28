/* Generator Prompt Karakter Sheet - embed untuk Blogger
   Pemakaian: <div id="karakter-sheet-app"></div>
   <script src="https://cdn.jsdelivr.net/gh/USERNAME/REPO@main/karakter.js"></script>
*/
(function () {
  "use strict";
  var CSS = "#ksh-app * { box-sizing: border-box; }\n#ksh-app {\n    margin: 0;\n    padding: 16px;\n    background: #f6f5f2;\n    color: #23201c;\n    font: 15px/1.5 system-ui, -apple-system, \"Segoe UI\", sans-serif;\n  }\n#ksh-app .wrap { max-width: 780px; margin: 0 auto; }\n#ksh-app h1 { font-size: 20px; margin: 0 0 4px; }\n#ksh-app .sub { color: #6b6459; font-size: 13px; margin-bottom: 18px; }\n#ksh-app fieldset {\n    border: 1px solid #ddd8ce;\n    border-radius: 8px;\n    padding: 14px;\n    margin: 0 0 14px;\n    background: #fff;\n  }\n#ksh-app legend {\n    font-weight: 700;\n    font-size: 13px;\n    letter-spacing: .04em;\n    text-transform: uppercase;\n    color: #7a6a4f;\n    padding: 0 6px;\n  }\n#ksh-app label { display: block; font-size: 13px; margin: 10px 0 3px; color: #4a453c; }\n#ksh-app label:first-of-type { margin-top: 0; }\n#ksh-app input[type=text], #ksh-app textarea, #ksh-app select {\n    width: 100%;\n    padding: 7px 9px;\n    border: 1px solid #cfc9be;\n    border-radius: 5px;\n    font: inherit;\n    background: #fff;\n    color: #23201c;\n  }\n#ksh-app textarea { resize: vertical; min-height: 52px; }\n#ksh-app .row { display: flex; gap: 10px; flex-wrap: wrap; }\n#ksh-app .row > div { flex: 1 1 160px; min-width: 0; }\n#ksh-app .swatches { display: flex; gap: 6px; flex-wrap: wrap; margin: 8px 0 2px; }\n#ksh-app .swatches button {\n    width: 34px; height: 26px;\n    border: 1px solid #b9b2a6;\n    border-radius: 4px;\n    cursor: pointer;\n    padding: 0;\n  }\n#ksh-app .palette-row {\n    display: flex; gap: 8px; align-items: center;\n    margin: 8px 0; flex-wrap: wrap;\n  }\n#ksh-app .palette-row input[type=color] {\n    width: 42px; height: 34px; padding: 0;\n    border: 1px solid #cfc9be; border-radius: 5px;\n    background: #fff; cursor: pointer; flex: 0 0 auto;\n  }\n#ksh-app .palette-row input[type=text] { flex: 1 1 110px; min-width: 0; }\n#ksh-app .palette-row .use { flex: 1 1 150px; font-size: 12px; color: #6b6459; }\n#ksh-app .list-item { display: flex; gap: 8px; margin: 6px 0; align-items: center; }\n#ksh-app .list-item input { flex: 1; min-width: 0; }\n#ksh-app button.act {\n    background: #7a6a4f; color: #fff; border: 0;\n    padding: 8px 14px; border-radius: 5px;\n    font: inherit; cursor: pointer;\n    display: inline-flex; align-items: center; gap: 6px;\n  }\n#ksh-app button.act:hover { background: #655840; }\n#ksh-app button.act.alt { background: #e8e3d9; color: #4a453c; border: 1px solid #cfc9be; }\n#ksh-app button.act.alt:hover { background: #dcd6c9; }\n#ksh-app button.act .ic { font-size: 15px; line-height: 1; opacity: .95; }\n#ksh-app .actions.mid { margin: 12px 0; justify-content: flex-end; }\n#ksh-app .actions.mid button.act { font-size: 13px; padding: 6px 11px; }\n#ksh-app button.small {\n    background: #e8e3d9; color: #4a453c; border: 1px solid #cfc9be;\n    padding: 6px 10px; border-radius: 5px; font-size: 13px; cursor: pointer;\n  }\n#ksh-app button.small:hover { background: #dcd6c9; }\n#ksh-app button.del { background: #f0e2df; color: #8c4237; border: 1px solid #e0c8c2; }\n#ksh-app .actions { display: flex; gap: 10px; flex-wrap: wrap; margin: 16px 0; }\n#ksh-app .msg { font-size: 13px; margin-top: 8px; min-height: 18px; color: #4a6b3f; }\n#ksh-app .msg.err { color: #8c4237; }\n#ksh-app pre {\n    background: #23201c; color: #e8e3d9;\n    padding: 12px; border-radius: 6px;\n    overflow-x: auto; font-size: 12px;\n    max-height: 320px;\n  }\n#ksh-app .hint { font-size: 12px; color: #857d70; margin-top: 4px; }\n#ksh-app { max-width: 780px; margin: 0 auto; padding: 4px; color: #23201c; font: 15px/1.5 system-ui, -apple-system, 'Segoe UI', sans-serif; }\n#ksh-app h1 { font-size: 20px; margin: 0 0 4px; }\n";
  var BODY = "\n  <h1>Generator Prompt Karakter Sheet</h1>\n  <div class=\"sub\">Isi form, lalu generate. Hasilnya prompt JSON siap dipakai di Gemini.</div>\n\n  <fieldset>\n    <legend>1. Setelan sheet</legend>\n    <div class=\"row\">\n      <div>\n        <label for=\"ratio\">Rasio aspek</label>\n        <select id=\"ksh-ratio\">\n          <option value=\"3:2\" selected>3:2 (sheet standar)</option>\n          <option value=\"9:16\">9:16 (video vertikal)</option>\n          <option value=\"16:9\">16:9 (lebar)</option>\n          <option value=\"1:1\">1:1 (kotak)</option>\n        </select>\n      </div>\n      <div>\n        <label for=\"medium\">Gaya render</label>\n        <select id=\"ksh-medium\">\n          <option value=\"3d animation character sheet, pixar style, soft global illumination, clean studio render\" selected>3D animasi, pixar style</option>\n          <option value=\"3d animation character sheet, semi-realistic, soft lighting, clean studio render\">3D animasi, semi-realistik</option>\n          <option value=\"flat vector illustration, clean shapes, solid colour, no shading\">Flat vector, bersih</option>\n          <option value=\"line art sketch, monoline, clean contour, no shading, no colour\">Line art, monoline</option>\n          <option value=\"hand-drawn illustration, pencil texture, slight grain, warm paper feel\">Ilustrasi tangan, pensil</option>\n          <option value=\"semi-realistic painting, soft brush, painterly, muted tone\">Lukis semi-realistik, halus</option>\n          <option value=\"anime cel-shaded, clean line, flat shading, vivid colour\">Anime cel-shaded</option>\n          <option value=\"comic ink style, bold line, halftone shading, high contrast\">Komik tinta, kontras tinggi</option>\n          <option value=\"__custom__\">Kustom, ketik sendiri</option>\n        </select>\n        <div id=\"ksh-mediumCustomWrap\" style=\"display:none;margin-top:6px\">\n          <input type=\"text\" id=\"ksh-mediumCustom\" placeholder=\"ketik gaya render sendiri\">\n        </div>\n      </div>\n    </div>\n  </fieldset>\n\n  <div class=\"actions mid\">\n    <button class=\"act alt\" id=\"ksh-dummy\"><span class=\"ic\">&#9860;</span> Dummy karakter</button>\n    <button class=\"act alt\" id=\"ksh-reset\"><span class=\"ic\">&#10005;</span> Kosongkan</button>\n  </div>\n\n  <fieldset>\n    <legend>2. Karakter</legend>\n    <label for=\"name\">Nama</label>\n    <input type=\"text\" id=\"ksh-name\" placeholder=\"mis. BIMO\">\n    <label for=\"tagline\">Peran</label>\n    <input type=\"text\" id=\"ksh-tagline\" placeholder=\"mis. The Two Word Title\">\n    <label for=\"personality\">Kepribadian</label>\n    <input type=\"text\" id=\"ksh-personality\" placeholder=\"mis. santai, ceroboh, percaya diri\">\n    <label for=\"description\">Deskripsi</label>\n    <textarea id=\"ksh-description\" placeholder=\"2-3 kalimat: sifat, kebiasaan, sumber kelucuannya\"></textarea>\n    <div class=\"row\">\n      <div>\n        <label for=\"usia\">Usia</label>\n        <input type=\"text\" id=\"ksh-usia\" placeholder=\"27 tahun\">\n      </div>\n      <div>\n        <label for=\"tinggi\">Tinggi</label>\n        <input type=\"text\" id=\"ksh-tinggi\" placeholder=\"175 cm\">\n      </div>\n      <div>\n        <label for=\"postur\">Postur</label>\n        <input type=\"text\" id=\"ksh-postur\" placeholder=\"ramping atletis\">\n      </div>\n    </div>\n  </fieldset>\n\n  <fieldset>\n    <legend>3. Kostum</legend>\n    <label for=\"top\">Atasan</label>\n    <input type=\"text\" id=\"ksh-top\" placeholder=\"kaos katun warna utama\">\n    <label for=\"bottom\">Bawahan</label>\n    <input type=\"text\" id=\"ksh-bottom\" placeholder=\"celana pendek warna kedua\">\n    <label for=\"footwear\">Alas kaki</label>\n    <input type=\"text\" id=\"ksh-footwear\" placeholder=\"sandal hitam kasual\">\n    <label for=\"acc\">Aksesoris (pisah koma)</label>\n    <input type=\"text\" id=\"ksh-acc\" placeholder=\"jam tangan, topi\">\n  </fieldset>\n\n  <fieldset>\n    <legend>4. Palet warna</legend>\n    <div class=\"swatches\" id=\"ksh-skema\"></div>\n    <div class=\"hint\">Klik salah satu skema untuk mengisi kelima warna sekaligus.</div>\n    <div id=\"ksh-palette\"></div>\n  </fieldset>\n\n  <fieldset>\n    <legend>5. Detail karakter</legend>\n    <div id=\"ksh-details\"></div>\n  </fieldset>\n\n  <fieldset>\n    <legend>6. Ekspresi, pose, scene</legend>\n    <label>Ekspresi wajah (satu per baris, maks 8)</label>\n    <div id=\"ksh-expr\"></div>\n    <button class=\"small\" id=\"ksh-addExpr\">Tambah ekspresi</button>\n    <label style=\"margin-top:12px\">Pose gestur (satu per baris, maks 8)</label>\n    <div id=\"ksh-poses\"></div>\n    <button class=\"small\" id=\"ksh-addPose\">Tambah pose</button>\n    <label style=\"margin-top:12px\">Contoh scene (satu per baris, maks 6)</label>\n    <div id=\"ksh-scenes\"></div>\n    <button class=\"small\" id=\"ksh-addScene\">Tambah scene</button>\n  </fieldset>\n\n  <div class=\"actions\">\n    <button class=\"act\" id=\"ksh-gen\"><span class=\"ic\">&#9889;</span> Generate prompt</button>\n    <button class=\"act\" id=\"ksh-copy\"><span class=\"ic\">&#128203;</span> Salin</button>\n  </div>\n  <div class=\"msg\" id=\"ksh-msg\"></div>\n\n  <pre id=\"ksh-preview\" tabindex=\"0\">Preview JSON muncul di sini.</pre>\n";
  function el(id) { return document.getElementById(id); }
  function boot() {
    var host = document.getElementById("ksh-app");
    if (!host || document.getElementById("ksh-preview")) return;
    var style = document.createElement("style");
    style.textContent = CSS;
    document.head.appendChild(style);
    host.innerHTML = BODY;

"use strict";

var SLOT_USES = ["pakaian utama", "pakaian kedua", "kulit", "rambut", "mata"];

var DETAIL_LABELS = ["MATA", "RAMBUT", "DETAIL WAJAH", "PAKAIAN", "ALAS KAKI"];

var SKEMA = [
  { name: "Hangat cerah", c: ["#d9a02b", "#1e2a44", "#e8d5b5", "#8b6a4f", "#5a4a3a"],
    n: ["mustard", "navy", "krem tan", "cokelat susu", "cokelat gelap"] },
  { name: "Earthy natural", c: ["#7b6b4a", "#4a4235", "#e2c9a8", "#3b3128", "#6b8e6b"],
    n: ["hijau zaitun", "cokelat tua", "krem gandum", "hitam pekat", "hijau lumut"] },
  { name: "Monokrom", c: ["#2b2b2e", "#7a7a80", "#d8d8dc", "#43434a", "#9a9aa2"],
    n: ["hitam arang", "abu sedang", "putih gading", "abu gelap", "abu muda"] },
  { name: "Pastel", c: ["#f2b8c6", "#b8d8e8", "#f6e2c0", "#cfc3e8", "#e8d5b5"],
    n: ["pink muda", "biru langit", "kuning mentega", "ungu lavender", "krem muda"] },
  { name: "Kontras", c: ["#e8402a", "#12100f", "#f4f1ea", "#2f6fb5", "#f0b429"],
    n: ["merah menyala", "hitam pekat", "putih tulang", "biru kobalt", "kuning terang"] },
  { name: "Laut dingin", c: ["#2f6fb5", "#0f3d5c", "#a9d0e8", "#1b2a38", "#7fb3d5"],
    n: ["biru laut", "biru dongker", "biru es", "biru malam", "biru muda"] },
  { name: "Urban malam", c: ["#333a52", "#8c2f39", "#d9c8b4", "#1a1c23", "#5c6b7a"],
    n: ["biru keabuan", "merah marun", "krem pucat", "hitam tinta", "abu biru"] },
  { name: "Retro bold", c: ["#e07a2f", "#3c6e47", "#f2e8d5", "#8c3b3b", "#4a5a7a"],
    n: ["oranye retro", "hijau hutan", "putih gading", "merah bata", "biru denim"] }
];

var NAMES = ["BIMO", "NAYA", "RAKA", "SARI", "DIMAS", "AYU", "FAJAR", "GITA"];
var ROLES = ["Sang Pemalas", "Si Penasaran", "The Reliable One", "Pembawa Masalah", "Si Cerewet"];
var TRAITS = ["santai dan ceroboh", "serius tapi baik", "cerewet dan lucu", "pendiam tapi tangguh", "percaya diri berlebihan"];
var BODIES = ["ramping atletis", "gemuk bulat", "tinggi kurus", "kekar sedang", "pendek kompak"];
var TOPS = ["kaos katun warna utama", "kemeja flanel lengan panjang", "hoodie warna utama", "jaket bomber warna utama"];
var BOTTOMS = ["celana pendek warna kedua", "jeans panjang warna kedua", "celana bahan warna kedua", "rok span warna kedua"];
var SHOES = ["sandal hitam kasual", "sneaker putih", "sepatu boots cokelat", "flat shoes hitam"];

function normHex(v) {
  var s = String(v || "").trim().toLowerCase();
  if (!s) return "";
  if (s[0] !== "#") s = "#" + s;
  if (/^#[0-9a-f]{3}$/.test(s)) {
    s = "#" + s[1] + s[1] + s[2] + s[2] + s[3] + s[3];
  }
  if (/^#[0-9a-f]{6}$/.test(s)) return s;
  return "";
}

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function el(id) { return document.getElementById(id); }

function readRows(container) {
  var out = [];
  var nodes = container.querySelectorAll("input[type=text]");
  for (var i = 0; i < nodes.length; i++) {
    var v = nodes[i].value.trim();
    if (v) out.push(v);
  }
  return out;
}

function renderRows(container, values, max) {
  container.innerHTML = "";
  for (var i = 0; i < values.length; i++) {
    addRow(container, values[i], max);
  }
}

function addRow(container, value, max) {
  var current = container.querySelectorAll(".list-item").length;
  if (current >= max) {
    msg("Maksimal " + max + " baris.", true);
    return;
  }
  var d = document.createElement("div");
  d.className = "list-item";
  var inp = document.createElement("input");
  inp.type = "text";
  inp.value = value || "";
  var b = document.createElement("button");
  b.className = "small del";
  b.textContent = "Hapus";
  b.onclick = function () { d.remove(); };
  d.appendChild(inp);
  d.appendChild(b);
  container.appendChild(d);
}

function renderPalette() {
  var box = el("ksh-palette");
  box.innerHTML = "";
  for (var i = 0; i < SLOT_USES.length; i++) {
    var row = document.createElement("div");
    row.className = "palette-row";
    var c = document.createElement("input");
    c.type = "color";
    c.value = "#cccccc";
    c.dataset.idx = String(i);
    c.oninput = function () {
      var t = document.querySelectorAll("#ksh-palette input[type=text]")[Number(this.dataset.idx)];
      if (t) t.value = this.value;
    };
    var t = document.createElement("input");
    t.type = "text";
    t.value = "#cccccc";
    t.dataset.idx = String(i);
    t.oninput = function () {
      var h = normHex(this.value);
      if (h) {
        var cc = document.querySelectorAll("#ksh-palette input[type=color]")[Number(this.dataset.idx)];
        if (cc) cc.value = h;
      }
    };
    t.onblur = function () {
      var h = normHex(this.value);
      if (h) {
        this.value = h;
        var cc = document.querySelectorAll("#ksh-palette input[type=color]")[Number(this.dataset.idx)];
        if (cc) cc.value = h;
      } else {
        this.value = "#cccccc";
      }
    };
    var u = document.createElement("div");
    u.className = "use";
    u.textContent = SLOT_USES[i];
    row.appendChild(c);
    row.appendChild(t);
    row.appendChild(u);
    box.appendChild(row);
  }
}

function setPalette(colors) {
  var cs = document.querySelectorAll("#ksh-palette input[type=color]");
  var ts = document.querySelectorAll("#ksh-palette input[type=text]");
  for (var i = 0; i < cs.length; i++) {
    var c = colors[i % colors.length];
    cs[i].value = c;
    ts[i].value = c;
  }
}

function mediumValue() {
  var sel = el("ksh-medium");
  if (sel.value === "__custom__") {
    return el("ksh-mediumCustom").value.trim() || "3d animation character sheet, pixar style, soft global illumination, clean studio render";
  }
  return sel.value;
}

function syncMediumCustom() {
  el("ksh-mediumCustomWrap").style.display = el("ksh-medium").value === "__custom__" ? "block" : "none";
}

function renderSkema() {
  var box = el("ksh-skema");
  box.innerHTML = "";
  SKEMA.forEach(function (s) {
    var b = document.createElement("button");
    b.title = s.name;
    var stop = [];
    for (var i = 0; i < s.c.length; i++) stop.push(s.c[i] + " " + (i + 1) * (100 / s.c.length) + "%");
    b.style.background = "linear-gradient(90deg," + stop.join(",") + ")";
    b.onclick = function () { setPalette(s.c); msg("Skema " + s.name + " diterapkan."); };
    box.appendChild(b);
  });
}

function renderDetails() {
  var box = el("ksh-details");
  box.innerHTML = "";
  DETAIL_LABELS.forEach(function (lb) {
    var lab = document.createElement("label");
    lab.textContent = lb;
    var inp = document.createElement("input");
    inp.type = "text";
    inp.dataset.label = lb;
    inp.placeholder = "satu kalimat";
    box.appendChild(lab);
    box.appendChild(inp);
  });
}

function readDetails() {
  var out = [];
  var nodes = el("ksh-details").querySelectorAll("input[type=text]");
  for (var i = 0; i < nodes.length; i++) {
    out.push({
      label: nodes[i].dataset.label,
      note: nodes[i].value.trim() || "-"
    });
  }
  return out;
}

function msg(text, isErr) {
  var m = el("ksh-msg");
  m.textContent = text || "";
  m.className = isErr ? "msg err" : "msg";
}

function buildJSON() {
  var ts = document.querySelectorAll("#ksh-palette input[type=text]");
  var palette = [];
  for (var i = 0; i < SLOT_USES.length; i++) {
    palette.push({
      hex: normHex(ts[i].value) || "#cccccc",
      use: SLOT_USES[i]
    });
  }

  var accRaw = el("ksh-acc").value.trim();
  var accessories = accRaw ? accRaw.split(",").map(function (s) { return s.trim(); }).filter(Boolean) : [];

  return {
    task: "character_profile_sheet",
    version: "1.0",
    characters: [{
      name: el("ksh-name").value.trim() || "{{NAMA}}",
      tagline: el("ksh-tagline").value.trim() || "{{PERAN}}",
      personality: el("ksh-personality").value.trim() || "{{KEPRIBADIAN}}",
      description: el("ksh-description").value.trim() || "{{DESKRIPSI}}",
      stats: {
        usia: el("ksh-usia").value.trim() || "-",
        tinggi: el("ksh-tinggi").value.trim() || "-",
        postur: el("ksh-postur").value.trim() || "-"
      },
      wardrobe: {
        top: el("ksh-top").value.trim() || "-",
        bottom: el("ksh-bottom").value.trim() || "-",
        footwear: el("ksh-footwear").value.trim() || "-",
        accessories: accessories
      },
      palette: palette,
      details: readDetails(),
      turnaround: ["depan", "tiga per empat", "samping", "belakang"],
      expressions: readRows(el("ksh-expr")),
      poses: readRows(el("ksh-poses")),
      scenes: readRows(el("ksh-scenes"))
    }],
    output: {
      layout: { mode: "single", sheet_count: 1, columns: 1, order: "" },
      sections: [
        "header: nama besar, peran, deskripsi paragraf, tabel data usia/tinggi/postur",
        "portrait: close-up wajah besar di kolom kiri",
        "turnaround: 4 sudut pandang full body, latar polos",
        "palette: 5 swatch berjajar dengan keterangan pemakaian",
        "ekspresi wajah: 8 kepala close-up, tiap panel diberi label",
        "pose dan gestur umum: 8 full body, tiap panel diberi label",
        "detail karakter: 5 close-up crop dengan label dan satu baris keterangan",
        "contoh penggunaan di scene: 4-6 frame adegan ilustratif"
      ],
      medium: mediumValue(),
      typography: "sans serif bersih, judul tebal besar, label panel kecil huruf kapital, teks bahasa Indonesia",
      background: "off-white paper texture, thin light grey dividers between sections, no drop shadows on the sheet",
      consistency: "wajah, proporsi, palet dan pakaian identik di setiap panel dan setiap scene; hanya pose dan ekspresi yang berubah",
      aspect_ratio: el("ksh-ratio").value
    },
    preserve: [
      "identity konsisten di semua panel",
      "palette persis seperti nilai hex di palette[]",
      "satu wardrobe utuh per karakter, tidak ganti kostum antar panel",
      "label di bawah setiap panel terbaca"
    ],
    avoid: [
      "wajah berbeda antar panel",
      "rambut berubah panjang atau warna di tengah sheet",
      "menambah karakter yang tidak diminta",
      "background scenery di panel turnaround dan pose",
      "teks selain label sheet",
      "watermark, signature, logo, border frame",
      "jari lebih atau kurang, tangan menyatu, kaki terpotong",
      "label blur atau salah eja"
    ],
    note: "Satu sheet satu karakter. Pakai hex persis dari palette[]."
  };
}

function dummy() {
  var sk = pick(SKEMA);
  el("ksh-name").value = pick(NAMES);
  el("ksh-tagline").value = pick(ROLES);
  el("ksh-personality").value = pick(TRAITS);
  el("ksh-description").value = "Karakter ini " + pick(TRAITS) + ". Kebiasaannya selalu bikin situasi jadi seru, dan itu sumber kelucuannya.";
  el("ksh-usia").value = (20 + Math.floor(Math.random() * 25)) + " tahun";
  el("ksh-tinggi").value = (150 + Math.floor(Math.random() * 35)) + " cm";
  el("ksh-postur").value = pick(BODIES);
  el("ksh-top").value = pick(TOPS);
  el("ksh-bottom").value = pick(BOTTOMS);
  el("ksh-footwear").value = pick(SHOES);
  el("ksh-acc").value = pick(["jam tangan, topi", "kalung", "gelang, kacamata", ""]);
  setPalette(sk.c);

  var dn = el("ksh-details").querySelectorAll("input[type=text]");
  dn[0].value = "warna " + sk.n[4] + ", bentuk almond, sangat ekspresif";
  dn[1].value = "lurus sebahu, warna " + sk.n[3];
  dn[2].value = "stubble tipis, tahi lalat di pipi kiri";
  dn[3].value = "bahan katun, potongan regular, warna " + sk.n[0];
  dn[4].value = "warna " + sk.n[1] + ", konsisten di semua scene";

  renderRows(el("ksh-expr"), ["senyum", "tertawa", "terkejut", "canggung", "berpikir", "panik", "percaya diri", "mengantuk"], 8);
  renderRows(el("ksh-poses"), ["jempol", "bingung", "bawa belanja", "makan", "ide", "main hp", "minta maaf", "santai"], 8);
  renderRows(el("ksh-scenes"), ["memegang snack di dapur", "membawa belanjaan penuh", "berdiri di jalan outdoor", "duduk makan", "close-up wajah ekspresif"], 6);

  msg("Dummy terisi dengan skema " + sk.name + ".");
}

function resetForm() {
  ["name", "tagline", "personality", "description", "usia", "tinggi", "postur", "top", "bottom", "footwear", "acc"].forEach(function (id) {
    el(id).value = "";
  });
  setPalette(["#cccccc", "#cccccc", "#cccccc", "#cccccc", "#cccccc"]);
  var dn = el("ksh-details").querySelectorAll("input[type=text]");
  for (var i = 0; i < dn.length; i++) dn[i].value = "";
  renderRows(el("ksh-expr"), ["", "", "", "", "", "", "", ""], 8);
  renderRows(el("ksh-poses"), ["", "", "", "", "", "", "", ""], 8);
  renderRows(el("ksh-scenes"), ["", "", "", ""], 6);
  el("ksh-preview").textContent = "Preview JSON muncul di sini.";
  msg("Form dikosongkan.");
}

function download(name, text) {
  var blob = new Blob([text], { type: "application/json" });
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

el("ksh-addExpr").onclick = function () { addRow(el("ksh-expr"), "", 8); };
el("ksh-addPose").onclick = function () { addRow(el("ksh-poses"), "", 8); };
el("ksh-addScene").onclick = function () { addRow(el("ksh-scenes"), "", 6); };
el("ksh-dummy").onclick = dummy;
el("ksh-reset").onclick = resetForm;
el("ksh-gen").onclick = function () {
  var data = buildJSON();
  var text = JSON.stringify(data, null, 2);
  el("ksh-preview").textContent = text;
  var nm = (data.characters[0].name || "karakter").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "karakter";
  download(nm + "-sheet.json", text);
  msg("Prompt dibuat dan diunduh: " + nm + "-sheet.json");
};

el("ksh-copy").onclick = function () {
  var text = el("ksh-preview").textContent;
  if (!text || text.indexOf("{") !== 0) {
    msg("Klik Generate prompt dulu sebelum menyalin.", true);
    return;
  }
  var done = function () { msg("Prompt tersalin ke clipboard."); };
  var fallback = function () {
    var pre = el("ksh-preview");
    var r = document.createRange();
    r.selectNodeContents(pre);
    var s = window.getSelection();
    s.removeAllRanges();
    s.addRange(r);
    pre.focus();
    msg("Clipboard diblokir browser. Teks sudah dipilih, tekan lama lalu pilih Salin.");
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done, fallback);
  } else {
    fallback();
  }
};

el("ksh-medium").onchange = syncMediumCustom;

renderSkema();
renderPalette();
renderDetails();
renderRows(el("ksh-expr"), ["", "", "", "", "", "", "", ""], 8);
renderRows(el("ksh-poses"), ["", "", "", "", "", "", "", ""], 8);
renderRows(el("ksh-scenes"), ["", "", "", ""], 6);

  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
