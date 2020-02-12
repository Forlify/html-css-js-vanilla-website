const $sectionMeals = $('.meal-photo__container');
let $opinionsPhotos;
let $opinionsRemove;
const $opinionPerson = $('.opinion h3');
const $opinionText = $('.opinion p');
const $opinionContainer = $('.opinion');
const $form = $('form');
const $formName = $('#name');
const $formPhoto = $('#photo');
const $formOpinion = $('#opinion');

let size = 8;
let people = ['Monika Pszczoła', 'Blazej Kustra', 'Dominik Burgał', 'Zuza Marszał', 'Aleksandra Ormianiec', 'Jakub Sól', 'Mateusz Benecki', 'Dominik Grajło']
let opinions = [
    'Co dzień, wciąż się do niej wracam, bo ciężko się nią znudzić. Posiłki składają się z kilku dań: antipasti, primi piatti, secondi piatti, dolci, i trwają bardzo długo. Najlepsza pizza w mieście!',
    'Kocham Pizze ale makarony są te całkiem dobre',
    'Desery najlepsze!',
    'Czasem chodzę tylko po to, zeby popatrzeć',
    'Zakochałem się w kelnerce, jedzenie tez spoko',
    'To co cenie w restauracjach to spokój na sali',
    'Moim zdaniem to nie ma tak, że dobrze albo że nie dobrze. Gdybym miał powiedzieć, co cenię w życiu najbardziej, powiedziałbym, że kelnerów. Ekhm... kelnerów, którzy podali mi pomocną dłoń, kiedy byłem głodny, kiedy byłem sam. I co ciekawe, to właśnie celowe spotkania wpływają na nasze życie. Chodzi o to, że kiedy wyznaje się pewne wartości, nawet pozornie uniwersalne, bywa, że nie znajduje się zrozumienia, które by tak rzec, które pomaga się nam rozwijać. Ja miałem szczęście, by tak rzec, ponieważ je znalazłem. I dziękuję życiu. Dziękuję mu, życie to śpiew, życie to taniec, życie to pizza w Nolio. Wielu ludzi pyta mnie o to samo, ale jak ty to robisz?, skąd czerpiesz tę radość? A ja odpowiadam, że to proste, to umiłowanie życia, to właśnie ono sprawia, że dzisiaj jadłem pizze, a jutro... kto wie, dlaczego by nie, oddam się pracy społecznej i będę ot, choćby sadzić... znaczy... marchew.',
    'Uwialbiam wszytsko w tej restauracji!'
]
$opinionText.text(opinions[0]);
$opinionPerson.text(people[0]);

function StartObserving(StartIndex, EndIndex) {
    $opinionsPhotos = $('.meal-photo');
    $opinionsRemove = $('.meal-photo i');

    for (let i = StartIndex; i < EndIndex; i++) {
        $opinionsPhotos.eq(i).hover(() => {
            $opinionContainer.removeClass('fadeOut');

            $opinionText.text(opinions[i]);
            $opinionPerson.text(people[i]);

            $opinionContainer.addClass('fadeIn');
        })

        $opinionsPhotos.eq(i).mouseleave(() => {
            $opinionContainer.removeClass('fadeIn');
            $opinionContainer.addClass('fadeOut');
        })

        if (i >= 8) $opinionsRemove.eq(i - 8).click(() => {
            $opinionsPhotos.eq(i).css("display", "none")
        })
    }
}

StartObserving(0, size);

$opinionContainer.on('animationend', function () {
    const classNames = document.querySelector('.opinion').className

    if (classNames.includes("fadeOut")) {
        $opinionText.text(opinions[1]);
        $opinionPerson.text(people[1]);
    }
})

$form.submit((e) => {
    e.preventDefault();

    const formName = $formName.val();
    const formPhoto = $formPhoto.val();
    const formOpinion = $formOpinion.val();

    // $formName.val('');
    // $formPhoto.val('');
    // $formOpinion.val('');

    $sectionMeals.append(`<figure class="meal-photo"><i class="ion-close"></i><img src="${formPhoto}" alt="Korean bibimbap with egg and vegetables"></figure>`);

    people.push(formName);
    opinions.push(formOpinion);

    StartObserving(size, size + 1)
    size++;
})