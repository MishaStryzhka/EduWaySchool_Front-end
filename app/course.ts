export const lessonPath = '/uroky/domluvit-si-termin';

export const dialogue = [
  {
    speaker: 'Майстер',
    cs: 'Dobrý den, můžu přijít ve čtvrtek po třetí?',
    uk: 'Добрий день, можу прийти в четвер після третьої?',
  },
  {
    speaker: 'Клієнт',
    cs: 'Ve čtvrtek nejsem doma. Šlo by to v pátek odpoledne v půl čtvrté?',
    uk: 'У четвер мене немає вдома. Чи можна в п’ятницю о пів на четверту дня?',
  },
  {
    speaker: 'Майстер',
    cs: 'Ano, v pátek v půl čtvrté. Pošlete mi prosím adresu?',
    uk: 'Так, у п’ятницю о пів на четверту. Надішлете мені, будь ласка, адресу?',
  },
];

export const questions = [
  {
    prompt: 'На який день і час зрештою домовилися?',
    language: 'uk',
    answers: [
      {
        text: 'У четвер після 15:00',
        feedback:
          'Це перша пропозиція майстра. Послухай, на який день клієнт запропонував перенести візит.',
      },
      {
        text: 'У п’ятницю о 15:30',
        feedback:
          'Так! «V půl čtvrté» — о пів на четверту. Слово «odpoledne» уточнює, що йдеться про 15:30.',
        correct: true,
      },
      {
        text: 'У п’ятницю о 16:30',
        feedback:
          '«Půl čtvrté» означає, що до четвертої залишається пів години. Спробуй ще раз.',
      },
    ],
  },
  {
    prompt:
      'Тобі не підходить п’ятниця. Як ввічливо запропонувати понеділок до обіду?',
    language: 'cs',
    answers: [
      {
        text: 'V pátek bohužel nemůžu. Hodilo by se vám pondělí dopoledne?',
        feedback:
          'Саме так. «Hodilo by se vám…?» — ввічливий спосіб запитати, чи підходить час.',
        correct: true,
      },
      {
        text: 'V pátek můžu. Pošlete mi prosím adresu?',
        feedback:
          'Цією фразою ти підтверджуєш п’ятницю. Знайди репліку, у якій є пропозиція іншого дня.',
      },
      {
        text: 'Hodilo by se vám pondělí odpoledne?',
        feedback:
          'День підходить. Зверни увагу на час: «odpoledne» означає «після обіду», а «dopoledne» — «до обіду».',
      },
    ],
  },
];
