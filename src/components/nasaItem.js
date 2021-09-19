import React,{useState} from 'react'

export default function NasaItem(props) {
    const style={
        color:"red",
        fontSize:"bold"
    }
    const [buttonData,setButtonData]=useState({value:false})
    const onSubmit=(value)=>{
        setButtonData({value:value})
    }
    console.log(buttonData)
    return (
        <div className={"NasaItem"}>
            <h2>{props.title}</h2>
            {props.mediaType==="image"?<img className={"nasaImage"} src={props.url} alt={props.title}/>:<video className={"nasaVideo"} src={props.url} type="video/mp4"/>}
            <ul>
                <li ><span style={style}>date: </span>{props.date}</li>
                <li ><span style={style}>explanation: </span>{props.explanation}</li>
                {props.copyright?<li ><span style={style}>copyright: </span>{props.copyright}</li>:""}
            </ul>
            <button onSubmit={()=>onSubmit(!buttonData.value)}>{buttonData.value===false?"like":"dislike"}</button>
        </div>
    )
}
