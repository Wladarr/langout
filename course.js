function Course(){
  let lang = document.getElementById('course').value;
  let Form = document.getElementById('form').value;
  let info;
  let form;

  switch (Form){
    case 'Online':
    form = 1;
    break;
    default:
    form = 0;
    break;
  }

  switch(lang){
    case 'Английский':
    info = 1;
    break;

    case 'Немецкий':
    info = 2;
    break;

    case 'Испанский':
    info = 3;
    break;

    case 'Французский':
    info = 4;
    break;

    case 'Польский':
    info = 5;
    break;

    case 'Португальский':
    info = 6;
    break;

    default:
    info = 0;
    break;
  }

  if (form == 0) {
    alert ('Выберите форму обучения');
  }
  else if (info == 1) {
    alert ('Вы приобрели курс по английскому языку. Его оформили 6970 человек. Уведомление Пришло вам на почту.');
  }
  else if (info == 2) {
    alert ('Вы приобрели курс по немецкому языку. Его оформили 5780 человек. Уведомление Пришло вам на почту.');
  }
  else if (info == 3) {
    alert ('Вы приобрели курс по испанскому языку. Его оформили 6763 человек. Уведомление Пришло вам на почту.');
  }
  else if (info == 4) {
    alert ('Вы приобрели курс по французскому языку. Его оформили 6290 человек. Уведомление Пришло вам на почту.');
  }
  else if (info == 5) {
    alert ('Вы приобрели курс по польскому языку. Его оформили 3818 человек. Уведомление Пришло вам на почту.');
  }
  else if (info == 6) {
    alert ('Вы приобрели курс по португальскому языку. Его оформили 6462 человек. Уведомление Пришло вам на почту.');
  }
  else if (info == 0) {
    alert ('Выберите язык');
  }
}