let s = 0;
let cardplay = 0;
let sk = 3;
let k1 = -1;
let k2 = -1;
let k3 = -1;
let k4 = -1;
let k5 = -1;
let k6 = -1;
let k7 = -1;
let cards1 = document.getElementById("c1");
let cards2 = document.getElementById("c2");
let cards3 = document.getElementById("c3");
let cards4 = document.getElementById("c4");
let cards5 = document.getElementById("c5");
let cards6 = document.getElementById("c6");
let cards7 = document.getElementById("c7");
let card1 = 1;
let card2 = 1;
let card3 = 1;
let card4 = 1;
let card5 = 1;
let card6 = 1;
let card7 = 1;
let score = 0;
let cd3 = 0;
let cd4 = 0;
document.getElementById('cd1').textContent = cd3;
document.getElementById('cd2').textContent = cd4;
document.getElementById('scor').textContent = score;
function checkwin() {
    if (score>100) {
        c1.classList.remove("vcard0");
        c1.classList.remove("vcard1");
        c1.classList.remove("vcard2");
        c1.classList.remove("vcard3");
        c1.classList.remove("vcard4");
        c1.classList.remove("vcard5");
        c1.classList.remove("vcard6");
        c1.classList.remove("vcard7");
        c1.classList.remove("vcard8");
        c1.classList.remove("vcard9");
        c1.classList.remove("vcard10");
        c2.classList.remove("vcard0");
        c2.classList.remove("vcard1");
        c2.classList.remove("vcard2");
        c2.classList.remove("vcard3");
        c2.classList.remove("vcard4");
        c2.classList.remove("vcard5");
        c2.classList.remove("vcard6");
        c2.classList.remove("vcard7");
        c2.classList.remove("vcard8");
        c2.classList.remove("vcard9");
        c2.classList.remove("vcard10");
        c3.classList.remove("vcard0");
        c3.classList.remove("vcard1");
        c3.classList.remove("vcard2");
        c3.classList.remove("vcard3");
        c3.classList.remove("vcard4");
        c3.classList.remove("vcard5");
        c3.classList.remove("vcard6");
        c3.classList.remove("vcard7");
        c3.classList.remove("vcard8");
        c3.classList.remove("vcard9");
        c3.classList.remove("vcard10");
        c4.classList.remove("vcard0");
        c4.classList.remove("vcard1");
        c4.classList.remove("vcard2");
        c4.classList.remove("vcard3");
        c4.classList.remove("vcard4");
        c4.classList.remove("vcard5");
        c4.classList.remove("vcard6");
        c4.classList.remove("vcard7");
        c4.classList.remove("vcard8");
        c4.classList.remove("vcard9");
        c4.classList.remove("vcard10");
        c5.classList.remove("vcard0");
        c5.classList.remove("vcard1");
        c5.classList.remove("vcard2");
        c5.classList.remove("vcard3");
        c5.classList.remove("vcard4");
        c5.classList.remove("vcard5");
        c5.classList.remove("vcard6");
        c5.classList.remove("vcard7");
        c5.classList.remove("vcard8");
        c5.classList.remove("vcard9");
        c5.classList.remove("vcard10");
        c6.classList.remove("vcard0");
        c6.classList.remove("vcard1");
        c6.classList.remove("vcard2");
        c6.classList.remove("vcard3");
        c6.classList.remove("vcard4");
        c6.classList.remove("vcard5");
        c6.classList.remove("vcard6");
        c6.classList.remove("vcard7");
        c6.classList.remove("vcard8");
        c6.classList.remove("vcard9");
        c6.classList.remove("vcard10");
        c7.classList.remove("vcard0");
        c7.classList.remove("vcard1");
        c7.classList.remove("vcard2");
        c7.classList.remove("vcard3");
        c7.classList.remove("vcard4");
        c7.classList.remove("vcard5");
        c7.classList.remove("vcard6");
        c7.classList.remove("vcard7");
        c7.classList.remove("vcard8");
        c7.classList.remove("vcard9");
        c7.classList.remove("vcard10");
        c1.classList.add("yc");
        c2.classList.add("oc");
        c3.classList.add("uc");
        c4.classList.add("wc");
        c5.classList.add("ic");
        c6.classList.add("nc");
        c7.classList.add("qc");
        k1=1;
        k2=1;
        k3=1;
        k4=1;
        k5=1;
        k6=1;
        k7=1;
    }
}
refresh.addEventListener('click', function () {
    card1 = Math.random() * 10;
    card1 = Math.round(card1);
    card2 = Math.random() * 10;
    card2 = Math.round(card2);
    card3 = Math.random() * 10;
    card3 = Math.round(card3);
    card4 = Math.random() * 10;
    card4 = Math.round(card4);
    card5 = Math.random() * 10;
    card5 = Math.round(card5);
    card6 = Math.random() * 10;
    card6 = Math.round(card6);
    card7 = Math.random() * 10;
    card7 = Math.round(card7);
    c1.classList.remove("backcard");
    c2.classList.remove("backcard");
    c3.classList.remove("backcard");
    c4.classList.remove("backcard");
    c5.classList.remove("backcard");
    c6.classList.remove("backcard");
    c7.classList.remove("backcard");

    if (card1 == 0) {
        c1.classList.add("vcard0");
    }
    if (card1 == 1) {
        c1.classList.add("vcard1");
    }
    if (card1 == 2) {
        c1.classList.add("vcard2");
    }
    if (card1 == 3) {
        c1.classList.add("vcard3");
    }
    if (card1 == 4) {
        c1.classList.add("vcard4");
    }
    if (card1 == 5) {
        c1.classList.add("vcard5");
    }
    if (card1 == 6) {
        c1.classList.add("vcard6");
    }
    if (card1 == 7) {
        c1.classList.add("vcard7");
    }
    if (card1 == 8) {
        c1.classList.add("vcard8");
    }
    if (card1 == 9) {
        c1.classList.add("vcard9");
    }
    if (card1 == 10) {
        c1.classList.add("vcard10");
    }
    if (card2 == 0) {
        c2.classList.add("vcard0");
    }
    if (card2 == 1) {
        c2.classList.add("vcard1");
    }
    if (card2 == 2) {
        c2.classList.add("vcard2");
    }
    if (card2 == 3) {
        c2.classList.add("vcard3");
    }
    if (card2 == 4) {
        c2.classList.add("vcard4");
    }
    if (card2 == 5) {
        c2.classList.add("vcard5");
    }
    if (card2 == 6) {
        c2.classList.add("vcard6");
    }
    if (card2 == 7) {
        c2.classList.add("vcard7");
    }
    if (card2 == 8) {
        c2.classList.add("vcard8");
    }
    if (card2 == 9) {
        c2.classList.add("vcard9");
    }
    if (card2 == 10) {
        c2.classList.add("vcard10");
    }
    if (card3 == 0) {
        c3.classList.add("vcard0");
    }
    if (card3 == 1) {
        c3.classList.add("vcard1");
    }
    if (card3 == 2) {
        c3.classList.add("vcard2");
    }
    if (card3 == 3) {
        c3.classList.add("vcard3");
    }
    if (card3 == 4) {
        c3.classList.add("vcard4");
    }
    if (card3 == 5) {
        c3.classList.add("vcard5");
    }
    if (card3 == 6) {
        c3.classList.add("vcard6");
    }
    if (card3 == 7) {
        c3.classList.add("vcard7");
    }
    if (card3 == 8) {
        c3.classList.add("vcard8");
    }
    if (card3 == 9) {
        c3.classList.add("vcard9");
    }
    if (card3 == 10) {
        c3.classList.add("vcard10");
    }
    if (card4 == 0) {
        c4.classList.add("vcard0");
    }
    if (card4 == 1) {
        c4.classList.add("vcard1");
    }
    if (card4 == 2) {
        c4.classList.add("vcard2");
    }
    if (card4 == 3) {
        c4.classList.add("vcard3");
    }
    if (card4 == 4) {
        c4.classList.add("vcard4");
    }
    if (card4 == 5) {
        c4.classList.add("vcard5");
    }
    if (card4 == 6) {
        c4.classList.add("vcard6");
    }
    if (card4 == 7) {
        c4.classList.add("vcard7");
    }
    if (card4 == 8) {
        c4.classList.add("vcard8");
    }
    if (card4 == 9) {
        c4.classList.add("vcard9");
    }
    if (card4 == 10) {
        c4.classList.add("vcard10");
    }
    if (card5 == 0) {
        c5.classList.add("vcard0");
    }
    if (card5 == 1) {
        c5.classList.add("vcard1");
    }
    if (card5 == 2) {
        c5.classList.add("vcard2");
    }
    if (card5 == 3) {
        c5.classList.add("vcard3");
    }
    if (card5 == 4) {
        c5.classList.add("vcard4");
    }
    if (card5 == 5) {
        c5.classList.add("vcard5");
    }
    if (card5 == 6) {
        c5.classList.add("vcard6");
    }
    if (card5 == 7) {
        c5.classList.add("vcard7");
    }
    if (card5 == 8) {
        c5.classList.add("vcard8");
    }
    if (card5 == 9) {
        c5.classList.add("vcard9");
    }
    if (card5 == 10) {
        c5.classList.add("vcard10");
    }
    if (card6 == 0) {
        c6.classList.add("vcard0");
    }
    if (card6 == 1) {
        c6.classList.add("vcard1");
    }
    if (card6 == 2) {
        c6.classList.add("vcard2");
    }
    if (card6 == 3) {
        c6.classList.add("vcard3");
    }
    if (card6 == 4) {
        c6.classList.add("vcard4");
    }
    if (card6 == 5) {
        c6.classList.add("vcard5");
    }
    if (card6 == 6) {
        c6.classList.add("vcard6");
    }
    if (card6 == 7) {
        c6.classList.add("vcard7");
    }
    if (card6 == 8) {
        c6.classList.add("vcard8");
    }
    if (card6 == 9) {
        c6.classList.add("vcard9");
    }
    if (card6 == 10) {
        c6.classList.add("vcard10");
    }
    if (card7 == 0) {
        c7.classList.add("vcard0");
    }
    if (card7 == 1) {
        c7.classList.add("vcard1");
    }
    if (card7 == 2) {
        c7.classList.add("vcard2");
    }
    if (card7 == 3) {
        c7.classList.add("vcard3");
    }
    if (card7 == 4) {
        c7.classList.add("vcard4");
    }
    if (card7 == 5) {
        c7.classList.add("vcard5");
    }
    if (card7 == 6) {
        c7.classList.add("vcard6");
    }
    if (card7 == 7) {
        c7.classList.add("vcard7");
    }
    if (card7 == 8) {
        c7.classList.add("vcard8");
    }
    if (card7 == 9) {
        c7.classList.add("vcard9");
    }
    if (card7 == 10) {
        c7.classList.add("vcard10");
    }
});
function cardcheck() {
    if (k1 <= 0 && c1.classList.contains("backcard")) {
        card1 = Math.round(Math.random() * 10);
        c1.classList.remove("backcard");
        if (card1 == 0) {
            c1.classList.add("vcard0");
        }
        if (card1 == 1) {
            c1.classList.add("vcard1");
        }
        if (card1 == 2) {
            c1.classList.add("vcard2");
        }
        if (card1 == 3) {
            c1.classList.add("vcard3");
        }
        if (card1 == 4) {
            c1.classList.add("vcard4");
        }
        if (card1 == 5) {
            c1.classList.add("vcard5");
        }
        if (card1 == 6) {
            c1.classList.add("vcard6");
        }
        if (card1 == 7) {
            c1.classList.add("vcard7");
        }
        if (card1 == 8) {
            c1.classList.add("vcard8");
        }
        if (card1 == 9) {
            c1.classList.add("vcard9");
        }
        if (card1 == 10) {
            c1.classList.add("vcard10");
        }
    }
    if (k2 <= 0 && c2.classList.contains("backcard")) {
        card2 = Math.round(Math.random() * 10);
        c2.classList.remove("backcard");
        if (card2 == 0) {
            c2.classList.add("vcard0");
        }
        if (card2 == 1) {
            c2.classList.add("vcard1");
        }
        if (card2 == 2) {
            c2.classList.add("vcard2");
        }
        if (card2 == 3) {
            c2.classList.add("vcard3");
        }
        if (card2 == 4) {
            c2.classList.add("vcard4");
        }
        if (card2 == 5) {
            c2.classList.add("vcard5");
        }
        if (card2 == 6) {
            c2.classList.add("vcard6");
        }
        if (card2 == 7) {
            c2.classList.add("vcard7");
        }
        if (card2 == 8) {
            c2.classList.add("vcard8");
        }
        if (card2 == 9) {
            c2.classList.add("vcard9");
        }
        if (card2 == 10) {
            c2.classList.add("vcard10");
        }
    }
    if (k3 <= 0 && c3.classList.contains("backcard")) {
        card3 = Math.round(Math.random() * 10);
        c3.classList.remove("backcard");
        if (card3 == 0) {
            c3.classList.add("vcard0");
        }
        if (card3 == 1) {
            c3.classList.add("vcard1");
        }
        if (card3 == 2) {
            c3.classList.add("vcard2");
        }
        if (card3 == 3) {
            c3.classList.add("vcard3");
        }
        if (card3 == 4) {
            c3.classList.add("vcard4");
        }
        if (card3 == 5) {
            c3.classList.add("vcard5");
        }
        if (card3 == 6) {
            c3.classList.add("vcard6");
        }
        if (card3 == 7) {
            c3.classList.add("vcard7");
        }
        if (card3 == 8) {
            c3.classList.add("vcard8");
        }
        if (card3 == 9) {
            c3.classList.add("vcard9");
        }
        if (card3 == 10) {
            c3.classList.add("vcard10");
        }
    }
    if (k4 <= 0 && c4.classList.contains("backcard")) {
        card4 = Math.round(Math.random() * 10);
        c4.classList.remove("backcard");
        if (card4 == 0) {
            c4.classList.add("vcard0");
        }
        if (card4 == 1) {
            c4.classList.add("vcard1");
        }
        if (card4 == 2) {
            c4.classList.add("vcard2");
        }
        if (card4 == 3) {
            c4.classList.add("vcard3");
        }
        if (card4 == 4) {
            c4.classList.add("vcard4");
        }
        if (card4 == 5) {
            c4.classList.add("vcard5");
        }
        if (card4 == 6) {
            c4.classList.add("vcard6");
        }
        if (card4 == 7) {
            c4.classList.add("vcard7");
        }
        if (card4 == 8) {
            c4.classList.add("vcard8");
        }
        if (card4 == 9) {
            c4.classList.add("vcard9");
        }
        if (card4 == 10) {
            c4.classList.add("vcard10");
        }
    }
    if (k5 <= 0 && c5.classList.contains("backcard")) {
        card5 = Math.round(Math.random() * 10);
        c5.classList.remove("backcard");
        if (card5 == 0) {
            c5.classList.add("vcard0");
        }
        if (card5 == 1) {
            c5.classList.add("vcard1");
        }
        if (card5 == 2) {
            c5.classList.add("vcard2");
        }
        if (card5 == 3) {
            c5.classList.add("vcard3");
        }
        if (card5 == 4) {
            c5.classList.add("vcard4");
        }
        if (card5 == 5) {
            c5.classList.add("vcard5");
        }
        if (card5 == 6) {
            c5.classList.add("vcard6");
        }
        if (card5 == 7) {
            c5.classList.add("vcard7");
        }
        if (card5 == 8) {
            c5.classList.add("vcard8");
        }
        if (card5 == 9) {
            c5.classList.add("vcard9");
        }
        if (card5 == 10) {
            c5.classList.add("vcard10");
        }
    }
    if (k6 <= 0 && c6.classList.contains("backcard")) {
        card6 = Math.round(Math.random() * 10);
        c6.classList.remove("backcard");
        if (card6 == 0) {
            c6.classList.add("vcard0");
        }
        if (card6 == 1) {
            c6.classList.add("vcard1");
        }
        if (card6 == 2) {
            c6.classList.add("vcard2");
        }
        if (card6 == 3) {
            c6.classList.add("vcard3");
        }
        if (card6 == 4) {
            c6.classList.add("vcard4");
        }
        if (card6 == 5) {
            c6.classList.add("vcard5");
        }
        if (card6 == 6) {
            c6.classList.add("vcard6");
        }
        if (card6 == 7) {
            c6.classList.add("vcard7");
        }
        if (card6 == 8) {
            c6.classList.add("vcard8");
        }
        if (card6 == 9) {
            c6.classList.add("vcard9");
        }
        if (card6 == 10) {
            c6.classList.add("vcard10");
        }
    }
    if (k7 <= 0 && c7.classList.contains("backcard")) {
        card7 = Math.round(Math.random() * 10);
        c7.classList.remove("backcard");
        if (card7 == 0) {
            c7.classList.add("vcard0");
        }
        if (card7 == 1) {
            c7.classList.add("vcard1");
        }
        if (card7 == 2) {
            c7.classList.add("vcard2");
        }
        if (card7 == 3) {
            c7.classList.add("vcard3");
        }
        if (card7 == 4) {
            c7.classList.add("vcard4");
        }
        if (card7 == 5) {
            c7.classList.add("vcard5");
        }
        if (card7 == 6) {
            c7.classList.add("vcard6");
        }
        if (card7 == 7) {
            c7.classList.add("vcard7");
        }
        if (card7 == 8) {
            c7.classList.add("vcard8");
        }
        if (card7 == 9) {
            c7.classList.add("vcard9");
        }
        if (card7 == 10) {
            c7.classList.add("vcard10");
        }
    }
    checkwin(); 
}
c1.addEventListener('click', function () {
    if (k1 <= 0) {
        if (s == 1) {
            cd3 = card1 * 2;
            s = 0;
            sk = 0;
            double.classList.remove("doub");
            double.classList.add("backcard");
        }
        else {
            cd3 = card1;
            sk++;
            if (sk >= 3) {
                double.classList.remove("backcard");
                double.classList.add("doubi");
            }
        }
        document.getElementById('cd1').textContent = cd3;
        cd4 = Math.round(Math.random() * 10);
        document.getElementById('cd2').textContent = cd4;
        if (cd3 >= cd4) {
            score = score + (cd3 - cd4);
        }
        else {
            score = score - (cd4 - cd3);
        }
        cardplay++;
        document.getElementById('turn').textContent = cardplay;
        document.getElementById('scor').textContent = score;
        c1.classList.remove("vcard0");
        c1.classList.remove("vcard1");
        c1.classList.remove("vcard2");
        c1.classList.remove("vcard3");
        c1.classList.remove("vcard4");
        c1.classList.remove("vcard5");
        c1.classList.remove("vcard6");
        c1.classList.remove("vcard7");
        c1.classList.remove("vcard8");
        c1.classList.remove("vcard9");
        c1.classList.remove("vcard10");
        c1.classList.add("backcard");
        k1--;
        k2--;
        k3--;
        k4--;
        k5--;
        k6--;
        k7--;
        k1 = 3;
        cardcheck();

    }
});
c2.addEventListener('click', function () {
    if (k2 <= 0) {
        if (s == 1) {
            cd3 = card2 * 2;
            s = 0;
            sk = 0;
            double.classList.remove("doub");
            double.classList.add("backcard");
        }
        else {
            cd3 = card2;
            sk++;
            if (sk >= 3) {
                double.classList.remove("backcard");
                double.classList.add("doubi");
            }
        }
        document.getElementById('cd1').textContent = cd3;
        cd4 = Math.round(Math.random() * 10);
        document.getElementById('cd2').textContent = cd4;
        if (cd3 >= cd4) {
            score = score + (cd3 - cd4);
        }
        else {
            score = score - (cd4 - cd3);
        }
        cardplay++;
        document.getElementById('turn').textContent = cardplay;
        document.getElementById('scor').textContent = score;
        c2.classList.remove("vcard0");
        c2.classList.remove("vcard1");
        c2.classList.remove("vcard2");
        c2.classList.remove("vcard3");
        c2.classList.remove("vcard4");
        c2.classList.remove("vcard5");
        c2.classList.remove("vcard6");
        c2.classList.remove("vcard7");
        c2.classList.remove("vcard8");
        c2.classList.remove("vcard9");
        c2.classList.remove("vcard10");
        c2.classList.add("backcard");
        k1--;
        k2--;
        k3--;
        k4--;
        k5--;
        k6--;
        k7--;
        k2 = 3;
        cardcheck();

    }
});
c3.addEventListener('click', function () {
    if (k3 <= 0) {
        if (s == 1) {
            cd3 = card3 * 2;
            s = 0;
            sk = 0;
            double.classList.remove("doub");
            double.classList.add("backcard");
        }
        else {
            cd3 = card3;
            sk++;
            if (sk >= 3) {
                double.classList.remove("backcard");
                double.classList.add("doubi");
            }
        }
        document.getElementById('cd1').textContent = cd3;
        cd4 = Math.round(Math.random() * 10);
        document.getElementById('cd2').textContent = cd4;
        if (cd3 >= cd4) {
            score = score + (cd3 - cd4);
        }
        else {
            score = score - (cd4 - cd3);
        }
        cardplay++;
        document.getElementById('turn').textContent = cardplay;
        document.getElementById('scor').textContent = score;
        c3.classList.remove("vcard0");
        c3.classList.remove("vcard1");
        c3.classList.remove("vcard2");
        c3.classList.remove("vcard3");
        c3.classList.remove("vcard4");
        c3.classList.remove("vcard5");
        c3.classList.remove("vcard6");
        c3.classList.remove("vcard7");
        c3.classList.remove("vcard8");
        c3.classList.remove("vcard9");
        c3.classList.remove("vcard10");
        c3.classList.add("backcard");
        k1--;
        k2--;
        k3--;
        k4--;
        k5--;
        k6--;
        k7--;
        k3 = 3;
        cardcheck();


    }
});
c4.addEventListener('click', function () {
    if (k4 <= 0) {
        if (s == 1) {
            cd3 = card4 * 2;
            s = 0;
            sk = 0;
            double.classList.remove("doub");
            double.classList.add("backcard");
        }
        else {
            cd3 = card4;
            sk++;
            if (sk >= 3) {
                double.classList.remove("backcard");
                double.classList.add("doubi");
            }
        }
        document.getElementById('cd1').textContent = cd3;
        cd4 = Math.round(Math.random() * 10);
        document.getElementById('cd2').textContent = cd4;
        if (cd3 >= cd4) {
            score = score + (cd3 - cd4);
        }
        else {
            score = score - (cd4 - cd3);
        }
        cardplay++;
        document.getElementById('turn').textContent = cardplay;
        document.getElementById('scor').textContent = score;
        c4.classList.remove("vcard0");
        c4.classList.remove("vcard1");
        c4.classList.remove("vcard2");
        c4.classList.remove("vcard3");
        c4.classList.remove("vcard4");
        c4.classList.remove("vcard5");
        c4.classList.remove("vcard6");
        c4.classList.remove("vcard7");
        c4.classList.remove("vcard8");
        c4.classList.remove("vcard9");
        c4.classList.remove("vcard10");
        c4.classList.add("backcard");
        k1--;
        k2--;
        k3--;
        k4--;
        k5--;
        k6--;
        k7--;
        k4 = 3;
        cardcheck();
    }
});
c5.addEventListener('click', function () {
    if (k5 <= 0) {
        if (s == 1) {
            cd3 = card5 * 2;
            s = 0;
            sk = 0;
            double.classList.remove("doub");
            double.classList.add("backcard");
        }
        else {
            cd3 = card5;
            sk++;
            if (sk >= 3) {
                double.classList.remove("backcard");
                double.classList.add("doubi");
            }
        }
        document.getElementById('cd1').textContent = cd3;
        cd4 = Math.round(Math.random() * 10);
        document.getElementById('cd2').textContent = cd4;
        if (cd3 >= cd4) {
            score = score + (cd3 - cd4);
        }
        else {
            score = score - (cd4 - cd3);
        }
        cardplay++;
        document.getElementById('turn').textContent = cardplay;
        document.getElementById('scor').textContent = score;
        c5.classList.remove("vcard0");
        c5.classList.remove("vcard1");
        c5.classList.remove("vcard2");
        c5.classList.remove("vcard3");
        c5.classList.remove("vcard4");
        c5.classList.remove("vcard5");
        c5.classList.remove("vcard6");
        c5.classList.remove("vcard7");
        c5.classList.remove("vcard8");
        c5.classList.remove("vcard9");
        c5.classList.remove("vcard10");
        c5.classList.add("backcard");
        k1--;
        k2--;
        k3--;
        k4--;
        k5--;
        k6--;
        k7--;
        k5 = 3;

        cardcheck();

    }
});
c6.addEventListener('click', function () {
    if (k6 <= 0) {
        if (s == 1) {
            cd3 = card6 * 2;
            s = 0;
            sk = 0;
            double.classList.remove("doub");
            double.classList.add("backcard");
        }
        else {
            cd3 = card6;
            sk++;
            if (sk >= 3) {
                double.classList.remove("backcard");
                double.classList.add("doubi");
            }
        }
        document.getElementById('cd1').textContent = cd3;
        cd4 = Math.round(Math.random() * 10);
        document.getElementById('cd2').textContent = cd4;
        if (cd3 >= cd4) {
            score = score + (cd3 - cd4);
        }
        else {
            score = score - (cd4 - cd3);
        }
        cardplay++;
        document.getElementById('turn').textContent = cardplay;
        document.getElementById('scor').textContent = score;
        c6.classList.remove("vcard0");
        c6.classList.remove("vcard1");
        c6.classList.remove("vcard2");
        c6.classList.remove("vcard3");
        c6.classList.remove("vcard4");
        c6.classList.remove("vcard5");
        c6.classList.remove("vcard6");
        c6.classList.remove("vcard7");
        c6.classList.remove("vcard8");
        c6.classList.remove("vcard9");
        c6.classList.remove("vcard10");
        c6.classList.add("backcard");
        k1--;
        k2--;
        k3--;
        k4--;
        k5--;
        k6--;
        k7--;
        k6 = 3;
        cardcheck();
    }
});
c7.addEventListener('click', function () {
    if (k7 <= 0) {
        if (s == 1) {
            cd3 = card7 * 2;
            s = 0;
            sk = 0;
            double.classList.remove("doub");
            double.classList.add("backcard");
        }
        else {
            cd3 = card7;
            sk++;
            if (sk >= 3) {
                double.classList.remove("backcard");
                double.classList.add("doubi");
            }
        }
        document.getElementById('cd1').textContent = cd3;
        cd4 = Math.round(Math.random() * 10);
        document.getElementById('cd2').textContent = cd4;
        if (cd3 >= cd4) {
            score = score + (cd3 - cd4);
        }
        else {
            score = score - (cd4 - cd3);
        }
        cardplay++;
        document.getElementById('turn').textContent = cardplay;
        document.getElementById('scor').textContent = score;
        c7.classList.remove("vcard0");
        c7.classList.remove("vcard1");
        c7.classList.remove("vcard2");
        c7.classList.remove("vcard3");
        c7.classList.remove("vcard4");
        c7.classList.remove("vcard5");
        c7.classList.remove("vcard6");
        c7.classList.remove("vcard7");
        c7.classList.remove("vcard8");
        c7.classList.remove("vcard9");
        c7.classList.remove("vcard10");
        c7.classList.add("backcard");
        k1--;
        k2--;
        k3--;
        k4--;
        k5--;
        k6--;
        k7--;
        k7 = 3;
        cardcheck();

    }
});
double.addEventListener('click', function () {
    if (sk >= 3) {
        if (s == 0) {
            double.classList.remove("doubi");
            double.classList.add("doub");
            s = 1;
        }
    }
});