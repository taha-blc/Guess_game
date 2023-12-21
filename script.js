let again = document.querySelector('.again')
let button = document.querySelector('.btn')
let mesaj = document.querySelector('.masage')
let secretNumber = Math.trunc(Math.random() * 20) + 1
let denemesayisi = 20




button.addEventListener("click", function () {
    const guess = Number(document.querySelector('.guess').value)

    console.log(guess)
    console.log(secretNumber)

    if (!isNaN(guess)) {

        if (denemesayisi > 0) {
            /* eşit olma durumu*/
            if (guess == secretNumber) {
                document.querySelector('.masage').textContent = "congratulations on correct guess"
                document.querySelector('.number').textContent = secretNumber;
                document.querySelector('body').style.backgroundColor = "#60b374";
                document.querySelector('.number').style.width = "30rem";
                document.querySelector('.score').textContent = 'skor : ' + denemesayisi
                document.querySelector('h1').textContent = "Right Guess"
                document.querySelector('h1').style.backgroundColor = "red"
                document.querySelector('h1').style.borderRadius = "10px"
            }
            else if (guess > secretNumber) {
                document.querySelector('.masage').textContent = "your guess is too big"
                document.querySelector('.score').textContent = 'skor : ' + denemesayisi
                denemesayisi -= 1;
            }
            else if (guess < secretNumber) {
                document.querySelector('.masage').textContent = "your guess is too small"
                document.querySelector('.score').textContent = 'skor : ' + denemesayisi
                denemesayisi -= 1;
            }
        }

        else {

            alert("Game Over")
            document.querySelector('body').style.backgroundColor = "red";
            document.querySelector('h1').textContent = "Secret Number Is:"
            document.querySelector('h1').style.backgroundColor = "red"
            document.querySelector('h1').style.borderRadius = "10px"
            document.querySelector('.number').textContent = secretNumber;
        }

    }
    else {
        alert("Plase Enter a Number");
        document.querySelector('.masage').textContent = "Please Enter a Number!!"
    }
})


document.querySelector('.again').addEventListener('click', function () {

    let secretNumber = Math.trunc(Math.random() * 20) + 1;
    let denemesayisi = 20
    console.log(denemesayisi)
    document.querySelector('.masage').textContent = "It is estimated...."
    document.querySelector('.score').textContent = "score : " + denemesayisi;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
})
