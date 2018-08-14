function appear(){
  
    var elms = document.querySelectorAll("[id='nav']");

    for(var i = 0; i < elms.length; i++) 
    {
      elms[i].style.color='white'; 
      elms[i].style.visibility = 'visible';
      elms[i].style.transition = 'all 2s';
    }
}
    
