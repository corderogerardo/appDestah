//Images.JS
import { FilesCollection } from 'meteor/ostrio:files';

this.Images = new FilesCollection({
    collectionName: 'Images',
    allowClientCode: false, // Disallow remove files from Client,
    onBeforeUpload: function (file) {
        if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.ext)) {
            return true;
        } else {
            return 'Please upload image, with size equal or less than 10MB';
        }
    }
});
export default Images;
