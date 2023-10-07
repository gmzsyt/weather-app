import React from 'react';

function Weather({ info }) {
  // info nesnesi var mı kontrolü
  if (!info) {
    return <div>Yükleniyor...</div>; // veya başka bir yükleme durumu göstergesi
  }

  // info.sys ve info.sys.country var mı kontrolü
  if (!info.sys || !info.sys.country) {
    return <div>Ülke bilgisi bulunamadı.</div>;
  }

  // info.main var mı kontrolü
  if (!info.main) {
    return <div>Sıcaklık bilgisi bulunamadı.</div>;
  }

  return (
    <div className='info'>
      <p id="sehir">{info.name}, {info.sys.country}</p>
      <div className="genelDeger">
        <p id="sicaklik">{info.main.temp}</p>
      </div>
      <p id="havaDurumu">{info.weather[0].main}</p>
      <div className="his">
        <p id="hissedilen">Hissedilen: {info.main.feels_like}</p>
      </div>
    </div>
  );
}

export default Weather;
