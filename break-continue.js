var i = 0;
while (i < 7) {
    console.log(i);
    if (i > 5) {
        break;
    }
    i++;
}

for (var i = 0; i < 7; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}