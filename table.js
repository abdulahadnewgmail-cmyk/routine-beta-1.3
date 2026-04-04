let routine;
  
  function getUserGroup() {
    let userRoutine;
    let usergroup3 = localStorage.getItem('user')
    let usergroup2 = JSON.parse(usergroup3)
    let usergroup = usergroup2.group
    
    if (usergroup === 'SCIENCE') {
      userRoutine = SCIENCE;
    }
    else if (usergroup === 'ARTS') {
      userRoutine = ARTS;
    }
    else if (usergroup === 'COMMERCE') {
      userRoutine = COMMERCE;
    }
    else{userRoutine = SCIENCE;}
    return userRoutine;
  }
  
  function declareRoutine() {
    routine = JSON.parse(localStorage.getItem('savedRoutine')) || SCIENCE
  }
  
  function createTable(current_routine_array) {
    
    function minToHm(minute_format_time) {
      let hr = String(Math.floor((minute_format_time / 60) % 12))
      if(Number(hr) < 1) hr = String(Number(hr) + 12);
      let min = String(minute_format_time % 60)
       
      return `${hr.padStart(2, '0')} : ${min.padStart(2, '0')}`
    }
    
    function getWeekday() {
      const date = new Date()
      weekDay = date.getDay()
      return weekDay;
    }
    
    function createAllRows() {
      function createHeaderCells() {
        let headerCells = '<th class="cornerCell"></th>';
        for (let i = 550; i <= 830; i += 40) {
          headerCells += `
                  <th>${minToHm(i)}</th>
                `
        }
        return headerCells;
      }
      function createRows() {
        
        let rows = `<tr>${headerCells}</tr>`
        for (var index = 0; index < current_routine_array.length; index++) {
          let name = String(days[index])
          let value = name.slice(0,name.length - 3)
          let cells = ` <td class='tableDayNames'>
            ${value}
            </td>`
            
          for (let i = 550; i <= 830; i += 40) {
            cells += `
              <td><input value="${current_routine_array[index][i]}"></td>
            `
          }
          rows += `<tr>
            ${cells}
          </tr>`
        }
        return rows;
      }
      
      let headerCells = createHeaderCells()
      let allRows = createRows()
      return allRows;
    }
    
    function updateUi() {
      const cont = document.querySelector('.tableContainer');
      cont.innerHTML = `<table class='tableContainer'>
        ${allrows}
      </table>`
      return 'done';
    }
    
    let weekday = getWeekday()
    let allrows = createAllRows()
    let updateui = updateUi()
  }
  
  function saveRoutine() {
    const tbody = document.querySelector('tbody')
    const tbodyC = tbody.childElementCount
    
    for (var i = 1; i < tbodyC; i++) {
      const selectedRow = tbody.children[i]
      const selectedObject = routine[i - 1]
      
      const selectedRowC = selectedRow.childElementCount;
      let selectedKey = 550;
      for (var j = 1; j < selectedRowC; j++) {
        const selectedCellValue = selectedRow.children[j].children[0].value || 'নাই';
        selectedObject[selectedKey] = selectedCellValue;
        selectedKey += 40;
      }
    }
    alert('ROUTINE SAVED')
    createTable(routine)
    localStorage.setItem('savedRoutine', JSON.stringify(routine))
  }
  
  function resetRoutine() {
    if(!confirm(' তুমি কি সমস্ত রুটিন রিসেট করতে চাও ?')) return ;
    localStorage.setItem('savedRoutine', JSON.stringify(getUserGroup()))
    createTable(getUserGroup())
    
  }


  declareRoutine()
  createTable(routine)
  updateUserName()
