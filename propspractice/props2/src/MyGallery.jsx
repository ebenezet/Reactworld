
import ImageFrame from "./ImageFrame"

export default function MyGallery(){
    return (
    <div>
   <ImageFrame src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Fort_Hall_Reservation._Shoshone_Indian_Sun_Dance_-_NARA_-_298649.tif/lossy-page1-1200px-Fort_Hall_Reservation._Shoshone_Indian_Sun_Dance_-_NARA_-_298649.tif.jpg"
  alt="cheyenne sun dance"
  caption="Cheyenne sun dance!"
  />
     <ImageFrame src="https://i.pinimg.com/474x/be/42/e7/be42e745ea72c5af0fcdc73e13bd6901.jpg"
  alt="Medcine Man  "
  caption="Cheyenne Medecine Man"
  />
    <ImageFrame src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Porcupine%2C_head_and_shoulders.png"
  alt="Two members of Cheyenne tribe"
  caption="Two Cheyenne chiefs!"
  />
 
  </div>
    )
}