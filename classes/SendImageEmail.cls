public class SendImageEmail {

    
    @AuraEnabled
    public static String processFile(String fileName, String base64Data, String contentType){
        //base64Data = EncodingUtil.urlDecode(base64Data, 'UTF-8');
        Blob theBlob = EncodingUtil.base64Decode(base64Data);
        
       String base64 = EncodingUtil.base64Encode(theBlob);
        //system.debug(base64);
        //
        Messaging.SingleEmailMessage theEmail = new Messaging.SingleEmailMessage();
        Messaging.EmailFileAttachment attach = new Messaging.EmailFileAttachment();

		attach.setFileName(filename);
		attach.setBody(theBlob);
		theEmail.setSubject('Image');
		String[] sendTo = new String[]{'testemail@example.com'};
		theEmail.setToAddresses(sendTo);
		theEmail.setPlainTextBody('Please find the attached image');
		theEmail.setFileAttachments(new Messaging.EmailFileAttachment[]{attach});
		Messaging.sendEmail(new Messaging.SingleEmailMessage[]{theEmail});
        
        return 'success';
    }
}