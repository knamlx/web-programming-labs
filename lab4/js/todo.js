window.onload = function(){
    document.querySelector('#push').onclick = function(){
        if(document.querySelector('#newtask input').value.length == 0){
            alert("Kindly Enter Task Name!!!!")
        }
        else{
            document.querySelector('#tasks').innerHTML += `
                <div class="task">
                    <span id="taskname">
                        ${document.querySelector('#newtask input').value}
                    </span>
                    <button class="delete" aria-label="Удалить задачу">
                        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 10v7M14 10v7"/></svg>
                    </button>
                </div>
            `;
            var current_tasks = document.querySelectorAll(".delete");
            for(var i=0; i<current_tasks.length; i++){
                current_tasks[i].onclick = function(){
                    this.parentNode.remove();
                }
            }
        }
    }
}
