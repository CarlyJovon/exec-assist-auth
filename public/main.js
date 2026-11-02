var trash = document.getElementsByClassName("delete-task");

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const id = this.dataset.id;

        fetch('/tasks', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'id': id
          })
        }).then(function (response) {
            if (response.ok)
          window.location.reload()
        })
      });
});
