function showPage(page){

  document.getElementById('credit-page').classList.add('hidden');
  document.getElementById('services-page').classList.add('hidden');
  document.getElementById('setting-page').classList.add('hidden');

  document.getElementById(page + '-page').classList.remove('hidden');

}