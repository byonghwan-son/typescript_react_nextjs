import React, {useEffect, useLayoutEffect, useState} from 'react';

const UPDATE_CYCLE = 1000

const KEY_LOCALE = 'KEY_LOCALE'

enum Locale {
  US = 'en-US',
  KR = 'ko-KR',
}

function getLocaleFromString(text: string): Locale {
  switch(text) {
    case Locale.US:
      return Locale.US;
    case Locale.KR:
      return Locale.KR;
    default:
      return Locale.KR;
  }
}

function Clock() {
  const [timestamp, setTimestamp] = useState<Date>(new Date());
  const [locale, setLocale] = useState<Locale>(Locale.US)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimestamp(new Date())
    }, UPDATE_CYCLE)

    return () => {
      clearInterval(timer)
    }
  }, []);

  useEffect(() => {
    const savedLocale = localStorage.getItem(KEY_LOCALE)
    if(savedLocale !== null) {
      setLocale(() => getLocaleFromString(savedLocale))
      console.log(locale)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY_LOCALE, locale);
    console.log(locale);
  }, [locale])

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) =>  {
    setLocale((prev) => {
      return getLocaleFromString(e.target.value)
    })
  }

  return (
    <div>
      <p>
        <span id={`current-time-label`}>현재 시각</span>
        <span>:{timestamp.toLocaleString()}</span>
        <select value={locale}
                onChange={onChange}>
          <option value={`en-US`}>en-US</option>
          <option value={`ko-KR`}>ko-KR</option>
        </select>
      </p>
    </div>
  );
}

export default Clock;