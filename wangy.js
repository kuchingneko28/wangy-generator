// Lib
const readline = require("readline");
const fs = require("fs");

// Input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Run
menu();

// First letter capital
function capitalLetter(nama) {
  return nama.charAt(0).toUpperCase() + nama.slice(1);
}

// Menu
function menu() {
  console.log("Wangy stresss generator");
  console.log("Create with : node & javascript");
  console.log("\n");
  console.log("[1] Wangi-wangy stress");
  console.log("[2] Gemeteran stress");
  console.log("[3] Nenen stress ");
  console.log("[4] Claim waifu baku hantam");
  console.log("\n");

  rl.question("Silahkan pilih tingkan stress : ", (stress) => {
    console.log(stress);
    if (stress == 1) {
      wangy();
    } else if (stress == 2) {
      gemeter();
    } else if (stress == 3) {
      simp();
    } else if (stress == 4) {
      nenen();
    } else if (stress == 5) {
      claim();
    } else {
      console.log("Yang kamu masukan salah !");
    }
  });
}

// Wangy Function
function wangy() {
  rl.question("Masukin nama waifu lo : ", (waifu) => {
    waifu = capitalLetter(waifu);
    console.log("\n");

    const wangy1 =
      waifu +
      " " +
      waifu +
      " " +
      waifu +
      " WANGI WANGI WANGI WANGI HU HA HU HA HU HA, aaaah baunya rambut " +
      waifu +
      " wangi aku mau nyiumin aroma wanginya " +
      waifu +
      " AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH" +
      "\n";
    const wangy2 =
      waifu +
      " keluar pertama kali di anime juga manis banget AAAAAAAAH " +
      waifu +
      " AAAAA LUCCUUUUUUUUUUUUUUU............ " +
      "\n";
    const wangy3 =
      waifu +
      " AAAAAAAAAAAAAAAAAAAAGH apa ? " +
      waifu +
      " itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI." +
      "\n";
    const wangy4 =
      waifu +
      " gw ... " +
      waifu +
      " di laptop ngeliatin gw, " +
      waifu +
      ".. kamu percaya sama aku ? aaaaaaaaaaah syukur" +
      "\n";
    const wangy5 =
      waifu +
      " aku gak mau merelakan " +
      waifu +
      " aaaaaah YEAAAAAAAAAAAH GUA MASIH PUNYA " +
      waifu +
      " SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH" +
      "\n";

    const gabung = wangy1 + wangy2 + wangy3 + wangy4 + wangy5;

    console.log(gabung);
    rl.close();
    fs.writeFile("wangy.txt", gabung, (err) => {
      if (err) {
        return console.log(err);
      }
      console.log("Saved to wangy.txt");
    });
  });
}

function gemeter() {
  rl.question("Masukin nama waifu lo : ", (waifu) => {
    waifu = capitalLetter(waifu);
    console.log("\n");

    const gemeter1 =
      "Bro, gue gemeteran. GUE GEMETERAN ANJING Gue gak pernah mau berkembang biak dengan siapapun lebih daripada seorang " +
      waifu +
      "\n";
    const gemeter2 =
      "Badannya yang cakep, TETE GEDE, pinggul seksi dari seorang BIDADARI. Jujur aja, sakit hati kalau tau KENYATAANNYA gue GAK AKAN PERNAH BISA BUAT KAWIN SAMA DIA, ngewarisin gen gue lewat dia, dan ngebiarin dia ngelahirin anak yang simppurna dari gue." +
      "\n";
    const gemeter3 =
      "Gue rela ngelakuin APAPUN demi kesimppatan buat bikin " +
      waifu +
      " hamil. A P A P U N. Dan gue bener-bener gk bisa terima kenyataan." +
      "\n";
    const gemeter4 =
      "Kenapa Authornya rela bikin suatu hal yang simppurna kyk dia? Buat ngegoda kita? NGETAWAIN KITA DI DEPAN MUKA? SUMPAH BRO, GUE UDAH BENER BENER GAK TAHAN. ANJING." +
      "\n";

    const gabung = gemeter1 + gemeter2 + gemeter3 + gemeter4;

    console.log(gabung);
    rl.close();
    fs.writeFile("gemetar.txt", gabung, (err) => {
      if (err) {
        return console.log(err);
      }
      console.log("Saved to gemetar.txt");
    });
  });
}

function simp() {
  rl.question("Masukin nama waifu lo : ", (waifu) => {
    waifu = capitalLetter(waifu);
    console.log("\n");

    const simp1 =
      "Buruan, panggil gue SIMP, ato BAPERAN. ini MURNI PERASAAN GUE. Gue pengen genjot bareng " +
      waifu +
      ". Ini seriusan, suaranya yang imut, mukanya yang cantik, apalagi badannya yang aduhai ningkatin gairah gue buat genjot " +
      waifu +
      "." +
      "\n";
    const simp2 =
      "Setiap lapisan kulitnya pengen gue jilat. Saat gue mau crot, gue bakal moncrot sepenuh hati, bisa di perut, muka, badan, teteknya, sampai lubang burit pun bakal gue crot sampai puncak klimaks." +
      "\n";
    const simp3 =
      "Gue bakal meluk dia abis gue moncrot, lalu nanya gimana kabarnya, ngrasain enggas bareng saat telanjang." + "\n";
    const simp4 =
      "Dia bakal bilang kalau genjotan gue mantep dan nyatain perasaannya ke gue, bilang kalo dia cinta ama gue. Gue bakal bilang balik seberapa gue cinta ama dia, dan dia bakal kecup gue di pipi." +
      "\n";
    const simp5 =
      "Terus kita ganti pakaian dan ngabisin waktu nonton film, sambil pelukan ama makan hidangan favorit. Gue mau " +
      waifu +
      " jadi pacar, pasangan, istri, dan idup gue. Gue cinta dia dan ingin dia jadi bagian tubuh gue." +
      "\n";
    const simp6 =
      "Lo kira ini copypasta? Kagak cok. Gue ngetik tiap kata nyatain prasaan gue. Setiap kali elo nanya dia siapa, denger ini baik-baik : DIA ISTRI GUE." +
      "\n";
    const simp7 = "Gue sayang " + waifu + ", dan INI MURNI PIKIRAN DAN PERASAAN GUE. " + "\n";

    const gabung = simp1 + simp2 + simp3 + simp4 + simp5 + simp6 + simp7;

    console.log(gabung);
    rl.close();
    fs.writeFile("simp.txt", gabung, (err) => {
      if (err) {
        return console.log(err);
      }
      console.log("Saved to simp.txt");
    });
  });
}

function nenen() {
  rl.question("Masukin nama waifu lo : ", (waifu) => {
    waifu = capitalLetter(waifu);
    console.log("\n");

    const nenen1 =
      "NENEN NENEN KEPENGEN NENEN SAMA " +
      waifu +
      ". TETEK GEDE NAN KENCANG MILIK " +
      waifu +
      " MEMBUATKU KEPENGEN NENEN. DIBALUT PAKAIAN KETAT YANG ADUHAI CROOOOTOTOTOTOTOT ANJING SANGE GUA BANGSAT." +
      "\n";
    const nenen2 =
      waifu +
      ", PLIS DENGERIN BAIK BAIK. TOLONG BUKA BAJU SEBENTAR SAJA PLISSS TOLOOONG BANGET, BIARKAN MULUT KERINGKU BISA MENGECAP NENEN " +
      waifu +
      ". BIARKAN AKU MENGENYOT NENENMU " +
      waifu +
      "." +
      "\n";
    const nenen3 = "AKU RELA NGASIH SESEMBAHAN APA AJA BERAPAPUN ITU DUIT YANG AKU BAKAR KHUSUS TERKHUSUS BUATMU." + "\n";
    const nenen4 = "TAPI TOLOOOONG BANGET BUKA BAJUMU AKU MAU NENEN. NENEN NENEEEEN NENEN " + waifu + " WANGIIII" + "\n";

    const gabung = nenen1 + nenen2 + nenen3 + nenen4;

    console.log(gabung);
    rl.close();
    fs.writeFile("nenen.txt", gabung, (err) => {
      if (err) {
        return console.log(err);
      }
      console.log("Saved to nenen.txt");
    });
  });
}

function claim() {
  rl.question("Masukin nama waifu lo : ", (waifu) => {
    waifu = capitalLetter(waifu);
    console.log("\n");

    const claim1 =
      "Sejujurnya gw ga nyangka ama tindakan lo yg ga dewasa begini Kita udh temenan dri kecil ,melalui berbagai kenangan ,tapi sikaplo begini ke gw ,ga habis pikir." +
      "\n";
    const claim2 =
      "Padahal sudah berjanji tidak mengusik hubungan satu sama lain lagi ,tapi maksud tindakan mu sekarang ini apa? Tiba tiba di pagi bangun tidur lu make Pp " +
      chara +
      "." +
      "\n";
    const claim3 =
      "Lu kira lucu begitu anjing? Make waifu pp org seenaknya? Ngeklaim pula bangsad maksudnya apa apaan coba." + "\n";
    const claim4 = "Pertemanan dari kecil kita ga dihargai sama sekali. Gw tunggu klarifikasi lo" + "\n";

    const gabung = claim1 + claim2 + claim3 + claim4;

    console.log(gabung);
    rl.close();
    fs.writeFile("claim.txt", gabung, (err) => {
      if (err) {
        return console.log(err);
      }
      console.log("Saved to claim.txt");
    });
  });
}
