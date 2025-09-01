import jalaali from 'jalaali-js';

const convertToShamsi = (miladi) => {
  const date = new Date(miladi);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const { jy, jm, jd } = jalaali.toJalaali(year, month, day);

  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');

  return {
    shamsiDate: `${jd.toString().padStart(2, '0')} / ${jm.toString().padStart(2, '0')} / ${jy}`,
    shamsiTime: `${hour}:${minute}`
  };
};

export default convertToShamsi;
