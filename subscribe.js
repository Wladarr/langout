function Subscribe(){
  let sublang = document.getElementById('subscribe').value;

  let subeng = 4238;
  let subde = 2751;
  let subsp = 3187;
  let subfr = 3597;
  let subpl = 3166;
  let subprt = 2897;

  switch(sublang){
    case 'Английский':
    subeng = subeng + 1;
    alert('Вы оформили подписку на английский язык. Ее оформили ' + subeng + ' человек. Уведомление Пришло вам на почту.');
    break;

    case 'Немецкий':
    subde = subde + 1;
    alert('Вы оформили подписку на немецкий язык. Ее оформили ' + subde + ' человек. Уведомление Пришло вам на почту.');
    break;

    case 'Испанский':
    subsp = subsp +  1;
    alert('Вы оформили подписку на испанский язык. Ее оформили ' + subsp + ' человек. Уведомление Пришло вам на почту.');
    break;

    case 'Французский':
    subfr = subfr +  1;
    alert('Вы оформили подписку на французский язык. Ее оформили ' + subfr + ' человек. Уведомление Пришло вам на почту.');
    break;

    case 'Польский':
    subpl = subpl +  1;
    alert('Вы оформили подписку на польский язык. Ее оформили ' + subpl + ' человек. Уведомление Пришло вам на почту.');
    break;

    case 'Португальский':
    subprt = subprt +  1;
    alert('Вы оформили подписку на португальский язык. Ее оформили ' + subprt + ' человек. Уведомление Пришло вам на почту.');
    break;

    default:
    alert('Вы не выбрали язык');
    break;
  }
}