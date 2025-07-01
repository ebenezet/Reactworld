export default function Painting(props){
    return (
        <div>
            <img src={props.imageUrl} alt={props.altText}/>
        </div>
    )
}