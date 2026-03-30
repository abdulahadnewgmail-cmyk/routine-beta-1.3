  
  const hr = document.querySelector('hr');
  const routine_h1 = document.querySelector('.routine_h1');
  routine_h1.style.top = (hr.getBoundingClientRect().top - routine_h1.offsetHeight / 1.5) + 'px'
  const routine_subject = document.querySelectorAll('.routine_subject')
  const clock = document.querySelector('.clock')
  routine = JSON.parse(localStorage.getItem('savedRoutine')) || prevRoutine;
  
  let firstTime = localStorage.getItem('user')? false: true;
  let subjectNowIndex;
  let currentHour;
  let currentMinute;
  let currentSecond;
  let currentDay;
  let weekday;
  let time;
  
  function updateClock() {
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    
    weekday = date.getDay()
    currentHour = hour.toString().padStart(2, '0')
    currentMinute = minute.toString().padStart(2, '0')
    currentSecond = second.toString().padStart(2, '0')
    time = hour * 60 + minute
    
    clock.textContent = 
    currentHour + ' : ' + currentMinute + ' : ' + currentSecond
    
    setInterval(() => {
      let date = new Date()
      let hour = date.getHours()
      let minute = date.getMinutes()
      let second = date.getSeconds()
      
      weekday = date.getDay()
      
      currentHour = hour.toString().padStart(2, '0')
      currentMinute = minute.toString().padStart(2, '0')
      currentSecond = second.toString().padStart(2, '0')
      
      time = hour * 60 + minute
      
      clock.textContent = 
      currentHour +' : ' +currentMinute+' : '+currentSecond
      
    }, 1000)
  }
  
  function updateSubList() {
    let currentDayRoutine = routine[weekday]
    let index = 550
    routine_subject.forEach((eachCell, i) =>  {
     
      eachCell.textContent = currentDayRoutine[index]? currentDayRoutine[index] : 'নাই'
      
      if(time >= index && time <= index +40)subjectNowIndex = i;

      index += 40
    })
  }
  
  function scrollSubList() {
    const routine_section = document.querySelector('.routine_section')
    const routine_subject = routine_section.children[0]
    
    routine_section.scrollBy({
      left: routine_subject.offsetWidth * subjectNowIndex -        routine_section.offsetWidth / 2 + routine_subject.offsetWidth/2
      ,behavior: 'smooth'
    })
  }
  
  function styleSubList(){
    if (subjectNowIndex + 1)
      {
        let selectedCell = routine_subject[subjectNowIndex].parentElement
        
        let child = selectedCell.children[1]
        //console.log(subjectNowIndex)
        //console.log(selectedCell)
         selectedCell.style.cssText = `
            
            background: linear-gradient(45deg, pink, magenta);
            border: 1px solid gold
          `
        child.style.cssText = `
          color: gold;
          -webkit-text-stroke:  1px #2D2D2D;
          font-size: 1.7rem;
          fonth-weight: bolder
        `
      }
  }
  
  function redirect(url) {
   window.location.href = url
 } 

  function greet() {
    if (!firstTime) return;
    
    const greeting = document.querySelector('.greeting');
    greeting.style.display = 'grid'
    greeting.innerHTML = `
    <h1 class="ht">
      এই অ্যাপ এ স্বাগতম
    </h1>
    <P class="wt">
      আসসালামুআলাইকুম । তুমি বর্তমানে যে অ্যাপ এ আছো সেটা এক ধরনের PWA & স্টুডেন্ট নির্মিত ওয়েব অ্যাপ । <br><br> এই অ্যাপ এর মাধ্যমে তুমি তোমার কলেজ এর সাময়িক ক্লাস রুটিন দেখতে পারবে । <br><br> অ্যাপটি এখনো অসম্পূর্ণ । আরো ফিচার ভবিষ্যতে আসতে যাচ্ছে । যেমন : রিডিং টাইম ট্র্যাকার,
      সাবজেক্ট ওয়াইজ ক্যালকুলেটর, ডিটেইলড প্রোফাইল এবং লিডারবোর্ড,      চ্যাট সিষ্টেম ইত্যাদি। 
      <span class="bt">
        সবচেয়ে ইম্পর্ট্যান্ট AI CHATBOT
      </span> <br>
      <span class="dev"><br>তৈরি করেছেন:<br> আব্দুল আহাদ <sub>intermediate 1st year <br> 
        DR. Azhar Uddin College, Gazaria</sub> </span>
    </P>
    <button class="createAccountBtn accountBtn" onclick="toLoginPage()"> অ্যাকাউন্ট তৈরি করতে এখানে চাপুন</button>  
    `
  }
  
  function toLoginPage() {
    /*
        <h1 class="ht">
      অ্যাকাউন্ট তৈরি.......
    </h1>
    <P class="wt">
      আসসালামুআলাইকুম । তুমি বর্তমানে যে অ্যাপ এ আছো সেটা এক ধরনের PWA & স্টুডেন্ট নির্মিত ওয়েব অ্যাপ । <br><br> এই অ্যাপ এর মাধ্যমে তুমি তোমার কলেজ এর সাময়িক ক্লাস রুটিন দেখতে পারব । <br><br> অ্যাপটি এখনো অসম্পূর্ণ । আরো ফিচার ভবিষ্যতে আসতে যাচ্ছে । যেমন : রিডিং টাইম ট্র্যাকার,
      সাবজেক্ট ওয়াইজ ক্যালকুলেটর, ডিটেইলড প্রোফাইল এবং লিডারবোর্ড,      চ্যাট সিষ্টেম ইত্যাদি। 
      <span class="bt">
        সবচেয়ে ইম্পর্ট্যান্ট AI CHATBOT
      </span> <br>
      <span class="dev"><br>তৈরি করেছেন:<br> আব্দুল আহাদ <sub>intermediate 1st year <br> 
        DR. Azhar Uddin College, Gazaria</sub> </span>
    </P>
    <button class="createAccountBtn" onclick="toLoginPage()"> অ্যাকাউন্ট তৈরি করতে এখানে চাপুন</button>
    
    */
    
    let greeting = document.querySelector('.greeting');
    greeting.style.display = 'grid';
    greeting.innerHTML = `
    <h1 class="ht">
      অ্যাকাউন্ট তৈরি.......
    </h1>
    
    <input type="text" class="nameInput accInput" placeholder="তোমার নাম">
    <input type="text" class="clgNameInput accInput"  placeholder="তোমার কলেজ" list="clgList">
    <input  placeholder="বিভাগ" class="accInput groupNameInput" list="groupLists">
    
    <button class="accountBtn" onclick="login()"> লগইন করতে এখানে চাপুন</button>
    
    <datalist id="clgList">
  <option value="ড. আজহার উদ্দিন কলেজ">ড. আজহার উদ্দিন কলেজ</option>
</datalist>
<datalist id="groupLists">
  <option value="ARTS">ARTS</option>
  <option value="COMMERCE">COMMERCE</option>
  <option value="SCIENCE">SCIENCE</option>
</datalist>
    `
  }
  
  function login() {
    
    const userName = document.querySelector('.nameInput').value;
    const clgName = document.querySelector('.clgNameInput').value;
    const groupName = document.querySelector('.groupNameInput').value;
    
    
    if (!(userName &&  clgName && groupName)) {
      alert(' সকল শূন্যস্থান ভরাট করা বাধ্যতামূলক ')
      return;
    }
    const userData = {
      'user': userName,
      'clg': clgName,
      'group': groupName,
    }    
    localStorage.setItem('user', JSON.stringify(userData))
    document.querySelector('.greeting').style.display = 'none'
    
    firstTime = false;
    user = userData
    document.querySelector('.uid').textContent = userName
    alert('DONE. তবে মনে রাখতে হবে অ্যাপ টি এখনো খুবই ছোট । so, Dont underestimate')
  }
  
  // due to having less time to develop this part of the code generated with AI
  function initReadingTracker() {
    const resetBtn = document.querySelector('.tik'); // Your renamed button
    const endBtn = document.querySelector('.end');
    const timeInput = document.querySelector('.time_input');
    const todayDisplay = document.querySelector('.today_time');
    const totalDisplay = document.querySelector('.total_time');
  
    // Load existing data
    let data = JSON.parse(localStorage.getItem('study_stats')) || { 
      today: 0, 
      total: 0, 
      date: new Date().toDateString(),
      lastFinishedTime: 0 
    };
  
    // Reset "today" if it's a new day
    if (data.date !== new Date().toDateString()) {
      data.today = 0;
      data.date = new Date().toDateString();
      data.lastFinishedTime = 0;
      localStorage.setItem('study_stats', JSON.stringify(data));
    }
  
    const updateUI = () => {
      const format = (m) => {
        const h = Math.floor(m / 60);
        const mins = m % 60;
        return `${h.toString().padStart(2, '0')} hours ${mins.toString().padStart(2, '0')} minutes`;
      };
      todayDisplay.textContent = format(data.today);
      totalDisplay.textContent = format(data.total);
    };
  
    // 1. Reset Logic (The old Tick button)
    resetBtn.onclick = () => {
      const confirmReset = confirm("তুমি কি নিশ্চিত যে তুমি সব জমানো তথ্য মুছে ফেলতে চাও?");
      
      if (confirmReset) {
        // Clear LocalStorage
        localStorage.removeItem('study_stats');
        localStorage.removeItem('reading_start_time');
  
        // Clear local variables
        data = { 
          today: 0, 
          total: 0, 
          date: new Date().toDateString(),
          lastFinishedTime: 0 
        };
  
        updateUI();
        alert("সব তথ্য রিসেট করা হয়েছে!");
      }
    };
  
    // 2. End Reading 
    endBtn.onclick = () => {
      let savedStart = localStorage.getItem('reading_start_time');
      const now = new Date().getTime();
  
      // If no session started yet, use the input value
      if (!savedStart && timeInput.value) {
          const [hrs, mins] = timeInput.value.split(':');
          const startTime = new Date();
          startTime.setHours(parseInt(hrs), parseInt(mins), 0);
          savedStart = startTime.getTime();
      }
  
      if (!savedStart) {
          alert("ভুল! আগে শুরুর সময় ইনপুট বক্সে দাও।");
          return;
      }
  
      const startTimestamp = parseInt(savedStart);
  
      // Block double-counting
      if (startTimestamp < data.lastFinishedTime) {
          alert("এই সময়ের হিসাব তুমি আগেই যোগ করেছো!");
          return;
      }
  
      const diffMins = Math.round((now - startTimestamp) / 60000);
  
      if (diffMins < 0) {
          alert("ভবিষ্যতের সময় সেট করেছো!");
          return;
      }
  
      // Update Stats
      data.today += diffMins;
      data.total += diffMins;
      data.lastFinishedTime = now;
      
      localStorage.setItem('study_stats', JSON.stringify(data));
      localStorage.removeItem('reading_start_time');
      
      updateUI();
      alert(`অসাধারণ! তুমি ${diffMins} মিনিট পড়লে।`);
    };
  
    updateUI();
}
  
  initReadingTracker();


  greet()
  updateClock()
  updateSubList()
  scrollSubList()
  styleSubList()
