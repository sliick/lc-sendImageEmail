({
    
	readFile : function(component, helper, file) {
        
        if (!file) return;
        
		var reader = new FileReader();
        reader.onloadend = function() {
            var dataURL = reader.result;
            console.log(dataURL);
            component.set("v.ImgSrc", dataURL.match(/,(.*)$/)[1]);
            helper.upload(component, file, dataURL.match(/,(.*)$/)[1]);
            //component.set("v.ImgSrc", dataURL);
            //helper.upload(component, file, dataURL);
        };
        reader.readAsDataURL(file);
	},
    
    upload: function(component, file, base64Data) {
        var action = component.get("c.processFile"); 
        action.setParams({
            
            fileName: file.name,
            base64Data: base64Data, 
            contentType: file.name
        });
        action.setCallback(component, function(result) {
            component.set("v.message","Successfully Completed");
        });
        component.set("v.message", "Uploading...");
        
        $A.run(function(){
            $A.enqueueAction(action); 
        })
        
		
	}
})