import React from 'react';
import { Button, Image, View } from 'react-native';
import { ImagePicker } from 'expo';
import *as firebase from 'firebase'
export default class ImagePickerExample extends React.Component {
 
  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
       base64:true,
      aspect: [4, 3],
    });
    console.log("result is"); 
     console.log(result.base64); 

    this.uploadimage(result.base64)
    };
    uploadimage(imageUrl){
      var metadata = {
        contentType: 'image/jpg',
      };
      let storageRef = firebase.storage().ref();
      const filename = Math.floor(Date.now() / 1000);
      const imageRef = storageRef.child(`images/${filename}.jpg`);
      console.log("Upload Const ImageRef:" + imageRef);
      alert("you have entered")
      imageRef.putString(imageUrl).then(() => console.log("Image uploaded successfully.")
        ).catch((err) => console.log(err)
      );
       alert("whats going on");
   
    }
  
//old code 
/*try{
  var metadata = {
    contentType: 'image/jpg',
  };
  // var blob = new Blob(result, {type: contentType});
  // return blob;
  // var blob = b64toBlob(result, contentType);
  // var blobUrl = URL.createObjectURL(blob);
  // window.location = blobUrl;

  var storageRef = firebase.storage().ref();
  var uploadTask = storageRef.child('/images/').put(result, metadata);
  // console.log(result.base64);
  
  uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, function (snapshot) {
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');

  }, function (error) {
    console.log( error)
  }, function () {
    var downloadURL = uploadTask.snapshot.downloadURL;
    console.log( uploadTask.snapshot.downloadURL)
  });

} catch (ee) {
  console.log("when trying to load _uploadAsByteArray ", ee)
}
alert("hello");*/


// end old code 
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', top:100}}>
        <Button
          title="Pick an image from camera roll"
          onPress={this.pickImage}
        />
      
      </View>
    );
  }

  
}