function loadSelectBox () {
  const selected_text = "Highlighted text appears here." 
  const bg = document.createElement('div');
  const div = document.createElement('div');
  const attrib = document.createElement('div');
  const text = document.createElement('p');
  

  bg.style.padding = '10px';
  bg.style.borderRadius = '10px';
  bg.style.backgroundColor = '#f2f3f8';
  bg.style.display = 'flex';
  bg.style.flexDirection = 'column';
  bg.style.top = '50%';
  bg.style.right = '5vw';
  bg.style.transform = 'translate(0, -50%)';
  bg.style.width = '20vw';
  bg.style.height = 'fit-content';
  bg.style.minWidth = '300px';
  bg.style.minHeight = '300px'
  bg.style.position = 'fixed';
  

  // input box definition 
  div.className = 'select-box';
  div.style.backgroundColor = 'white';
  div.style.borderRadius = '10px'
  div.style.boxShadow = '0 .125rem .25rem 0 #282e3e1f'
  div.style.width = '100%';
  div.style.height = '100%';
  div.style.flex = '1';

  // attribution string
  attrib.textContent = 'Powered by Quizlet Anon';
  attrib.style.fontSize = 'small';
  attrib.style.alignSelf = 'center';


  text.className = 'select-text';
  text.id = 'select-box-id';
  text.textContent = selected_text;
  text.style.padding = '10px';
  
  div.appendChild(text);
  bg.appendChild(div);
  bg.appendChild(attrib);
  document.body.appendChild(bg);
}

function updateSelected () {
  const selected = window.getSelection().toString().trim()
  document.getElementById('select-box-id').textContent = (selected) ? selected : "Highlighted text appears here.";
}

loadSelectBox();

document.addEventListener('mouseup', updateSelected);
