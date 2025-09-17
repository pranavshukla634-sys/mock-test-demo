// Simple mock-test engine. Questions array के साथ एडिट करें।
d.addEventListener('click', ()=> selectOption(d, idx));
d.addEventListener('keydown', (e)=>{ if(e.key === 'Enter') selectOption(d, idx)});
optionsDiv.appendChild(d);
});
}


function selectOption(elem, idx){
// visual
Array.from(optionsDiv.children).forEach(c=>c.classList.remove('selected'));
elem.classList.add('selected');
selected = idx;
nextBtn.disabled = false;
}


startBtn.addEventListener('click', ()=>{
startScreen.classList.add('hidden');
quiz.classList.remove('hidden');
current = 0; score = 0;
showQuestion(current);
});


nextBtn.addEventListener('click', ()=>{
if(selected === null) return;
if(selected === questions[current].answer) score++;
current++;
if(current < questions.length){
showQuestion(current);
} else {
// finish
quiz.classList.add('hidden');
result.classList.remove('hidden');
scoreSpan.textContent = score;
}
});


retryBtn.addEventListener('click', ()=>{
result.classList.add('hidden');
startScreen.classList.remove('hidden');
});


quitBtn.addEventListener('click', ()=>{
quiz.classList.add('hidden');
startScreen.classList.remove('hidden');
});


shareBtn.addEventListener('click', ()=>{
// copy current page url (works when hosted)
if(navigator.clipboard){
navigator.clipboard.writeText(location.href).then(()=>{
alert('Link clipboard में कॉपी हो गया — अब आप इसे अपने दोस्तों को भेज सकते हैं।');
}).catch(()=>{ alert('क्लिपबोर्ड एक्सेस नहीं हुआ, पेज URL कॉपी कर लें: ' + location.href)});
} else {
prompt('Copy this URL', location.href);
}
});


init();