'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { dialogue, questions } from '../../course';

type Step = 0 | 1 | 2 | 3;
const storageKey = 'eduway:domluvit-si-termin:v1';
const stepNames = ['Слухання', 'Відповідь', 'Практика'];

export default function Lesson() {
  const [step, setStep] = useState<Step>(0);
  const [ready, setReady] = useState(false);
  const [choice, setChoice] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [reply, setReply] = useState('');
  const [showSample, setShowSample] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const shouldFocus = useRef(false);

  useEffect(() => {
    try {
      const value = localStorage.getItem(storageKey);
      if (value === '1' || value === '2' || value === '3')
        setStep(Number(value) as Step);
    } catch {
      /* Storage is optional for guests. */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (shouldFocus.current) heading.current?.focus();
  }, [step]);

  function go(next: Step) {
    shouldFocus.current = true;
    setChoice(null);
    setChecked(false);
    setShowSample(false);
    setReply('');
    setStep(next);
    try {
      localStorage.setItem(storageKey, String(next));
    } catch {
      /* The lesson still works. */
    }
  }

  const q = step < 2 ? questions[step] : null;
  const answer = choice === null ? undefined : q?.answers[choice];
  const correct = checked && !!answer?.correct;

  return (
    <div className="workbook" aria-busy={!ready}>
      {step < 3 && (
        <div className="progress">
          <span>
            Крок {step + 1} із 3 · {stepNames[step]}
          </span>
          <div aria-hidden="true">
            {stepNames.map((name, i) => (
              <i key={name} className={i <= step ? 'on' : ''} />
            ))}
          </div>
        </div>
      )}
      {step === 0 && (
        <>
          <h2 ref={heading} tabIndex={-1}>
            Послухай розмову
          </h2>
          <p>Майстер телефонує клієнту, щоб домовитися про візит.</p>
          <audio
            controls
            preload="metadata"
            aria-label="Чеський діалог про час візиту"
            src="/audio/domluvit-si-termin.mp3"
          />
          <details className="transcript">
            <summary>Текст діалогу та переклад</summary>
            {dialogue.map((line) => (
              <div key={line.cs}>
                <small>{line.speaker}</small>
                <p lang="cs">{line.cs}</p>
                <p>{line.uk}</p>
              </div>
            ))}
          </details>
        </>
      )}
      {step === 1 && (
        <h2 ref={heading} tabIndex={-1}>
          Продовж розмову
        </h2>
      )}
      {q && (
        <div className="practice">
          <fieldset>
            <legend>{q.prompt}</legend>
            {q.answers.map((option, i) => (
              <label
                className={'answer' + (choice === i ? ' selected' : '')}
                key={option.text}
              >
                <input
                  type="radio"
                  name="answer"
                  checked={choice === i}
                  onChange={() => {
                    setChoice(i);
                    setChecked(false);
                  }}
                />
                <span lang={q.language}>{option.text}</span>
              </label>
            ))}
          </fieldset>
          <div aria-live="polite">
            {checked && answer && (
              <p className={'feedback ' + (correct ? 'success' : 'retry')}>
                {answer.feedback}
              </p>
            )}
          </div>
          {correct ? (
            <button className="action" onClick={() => go(step === 0 ? 1 : 2)}>
              Далі <span aria-hidden="true">→</span>
            </button>
          ) : (
            <button
              className="action"
              disabled={choice === null || !ready}
              onClick={() => setChecked(true)}
            >
              Перевірити
            </button>
          )}
        </div>
      )}
      {step === 2 && (
        <>
          <h2 ref={heading} tabIndex={-1}>
            Твоя репліка
          </h2>
          <p>
            У п’ятницю ти зайнятий або зайнята. Напиши клієнту чеською й
            запропонуй прийти у вівторок о десятій.
          </p>
          <label className="reply-label" htmlFor="reply">
            Повідомлення клієнту
          </label>
          <textarea
            id="reply"
            lang="cs"
            value={reply}
            onChange={(e) => {
              setReply(e.target.value);
              setShowSample(false);
            }}
            placeholder="Dobrý den, …"
            rows={3}
            maxLength={800}
          />
          {showSample ? (
            <div className="sample">
              <strong>Зразок для самоперевірки</strong>
              <p lang="cs">
                Dobrý den, v pátek bohužel nemůžu. Můžu přijít v úterý v deset
                hodin?
              </p>
              <p>
                У повідомленні має бути зрозуміло, що п’ятниця не підходить, а
                зручний час — вівторок о десятій. Формулювання може бути іншим.
              </p>
              <button className="action" onClick={() => go(3)}>
                Завершити урок <span aria-hidden="true">✓</span>
              </button>
            </div>
          ) : (
            <button
              className="action"
              disabled={!reply.trim()}
              onClick={() => setShowSample(true)}
            >
              Звірити зі зразком
            </button>
          )}
        </>
      )}
      {step === 3 && (
        <div className="completion">
          <span className="checkmark" aria-hidden="true">
            ✓
          </span>
          <h2 ref={heading} tabIndex={-1}>
            Урок завершено!
          </h2>
          <p>
            Тепер ти можеш запропонувати клієнту інший час. Збережи в пам’яті цю
            фразу.
          </p>
          <blockquote lang="cs">Hodilo by se vám úterý v deset?</blockquote>
          <p>Чи підходить вам вівторок о десятій?</p>
          <button className="action" onClick={() => go(0)}>
            Пройти ще раз <span aria-hidden="true">↻</span>
          </button>
          <Link className="text-link" href="/">
            На головну
          </Link>
        </div>
      )}
      {(step === 1 || step === 2) && (
        <button className="back-step" onClick={() => go(step === 1 ? 0 : 1)}>
          ← Попередній крок
        </button>
      )}
    </div>
  );
}
