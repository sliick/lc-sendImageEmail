({ 
    
    handleFilesChange: function(component, event)
    {
        
        
    },
    onDrop: function(component, event, helper) { 
        
        event.stopPropagation(); 
        event.preventDefault(); 
        
        var file = event.dataTransfer.files[0];
        
        helper.readFile(component, helper, file);
        
    }, 
    
    onDragOver: function(component, event) { 
    	event.preventDefault(); 
    }, 
})