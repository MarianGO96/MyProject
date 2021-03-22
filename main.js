jQuery(document).ready(function(){
     
    $('#exampleModal').on('show.bs.modal', 
        function (event) {
  
            // Button that triggered the modal
            var li = $(event.relatedTarget)
  
            // Extract info from data attributes 
            var recipient = li.data('whatever')
              
            // Updating the modal content using 
            // jQuery query selectors
            var modal = $(this)
  
            modal.find('.modal-title')
                .text('New message to ' + recipient)
                  
            modal.find('.modal-body p')
                .text('Welcome to ' + recipient)
        })
        

