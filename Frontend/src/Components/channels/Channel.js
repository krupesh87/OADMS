import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import moment from 'moment';
import ChannelSlot from '../slot/ChannelSlot'
import { getSlots } from '../../Services/api';
// import { useHistory } from 'react-router'
import './channel.css'

const Channel = (props) => {

    const params = useParams();

    // let history = useHistory();

    let date = moment()

    let Date1 = date.clone().add(1, 'days')
    let Date2 = date.clone().add(2, 'days')
    let Date3 = date.clone().add(3, 'days')
    let Date4 = date.clone().add(4, 'days')
    let Date5 = date.clone().add(5, 'days')
    let Date6 = date.clone().add(6, 'days')
    let Date7 = date.clone().add(7, 'days')

    let D1 = new Date(Date1).getDate() + "-" + (new Date(Date1).getMonth() + 1) + "-" + new Date(Date1).getFullYear()
    console.log(Date1)
    let D2 = new Date(Date2).getDate() + "-" + (new Date(Date2).getMonth() + 1) + "-" + new Date(Date2).getFullYear()
    let D3 = new Date(Date3).getDate() + "-" + (new Date(Date3).getMonth() + 1) + "-" + new Date(Date3).getFullYear()
    let D4 = new Date(Date4).getDate() + "-" + (new Date(Date4).getMonth() + 1) + "-" + new Date(Date4).getFullYear()
    let D5 = new Date(Date5).getDate() + "-" + (new Date(Date5).getMonth() + 1) + "-" + new Date(Date5).getFullYear()
    let D6 = new Date(Date6).getDate() + "-" + (new Date(Date6).getMonth() + 1) + "-" + new Date(Date6).getFullYear()
    let D7 = new Date(Date7).getDate() + "-" + (new Date(Date7).getMonth() + 1) + "-" + new Date(Date7).getFullYear()

    const [slots, setslots] = useState({});
    // const [toggle, settoggle] = useState(false)
    const [empty] = useState(false)
    const [requestdate, setrequestdate] = useState("")
    const [requestday, setrequestday] = useState("")

    const channelSlots = async () => {
        let data = await getSlots(params.channelname, D1)
        setslots(data);
        setrequestdate(D1)
        setrequestday(Date1)
        document.getElementById("d1").style.backgroundColor = "#ffffff";
        document.getElementById("d1").style.color = "#000000";
        document.getElementById("d2").style.backgroundColor = "#080808da";
        document.getElementById("d2").style.color = "#71f0f0";
        document.getElementById("d3").style.backgroundColor = "#080808da";
        document.getElementById("d3").style.color = "#71f0f0";
        document.getElementById("d4").style.backgroundColor = "#080808da";
        document.getElementById("d4").style.color = "#71f0f0";
        document.getElementById("d5").style.backgroundColor = "#080808da";
        document.getElementById("d5").style.color = "#71f0f0";
        document.getElementById("d6").style.backgroundColor = "#080808da";
        document.getElementById("d6").style.color = "#71f0f0";
        document.getElementById("d7").style.backgroundColor = "#080808da";
        document.getElementById("d7").style.color = "#71f0f0";
        // settoggle(prev => !prev);
        console.log(slots)
    }

    const channelSlotsD2 = async () => {
        let data = await getSlots(params.channelname, D2)
        setslots(data)
        setrequestdate(D2)
        setrequestday(Date2)
        document.getElementById("d1").style.backgroundColor = "#080808da";
        document.getElementById("d1").style.color = "#71f0f0";
        document.getElementById("d2").style.backgroundColor = "#ffffff";
        document.getElementById("d2").style.color = "#000000";
        document.getElementById("d3").style.backgroundColor = "#080808da";
        document.getElementById("d3").style.color = "#71f0f0";
        document.getElementById("d4").style.backgroundColor = "#080808da";
        document.getElementById("d4").style.color = "#71f0f0";
        document.getElementById("d5").style.backgroundColor = "#080808da";
        document.getElementById("d5").style.color = "#71f0f0";
        document.getElementById("d6").style.backgroundColor = "#080808da";
        document.getElementById("d6").style.color = "#71f0f0";
        document.getElementById("d7").style.backgroundColor = "#080808da";
        document.getElementById("d7").style.color = "#71f0f0";
    }
    const channelSlotsD3 = async () => {
        let data = await getSlots(params.channelname, D3)
        setslots(data)
        setrequestdate(D3)
        setrequestday(Date3)
        document.getElementById("d1").style.backgroundColor = "#080808da";
        document.getElementById("d1").style.color = "#71f0f0";
        document.getElementById("d2").style.backgroundColor = "#080808da";
        document.getElementById("d2").style.color = "#71f0f0";
        document.getElementById("d3").style.backgroundColor = "#ffffff";
        document.getElementById("d3").style.color = "#000000";
        document.getElementById("d4").style.backgroundColor = "#080808da";
        document.getElementById("d4").style.color = "#71f0f0";
        document.getElementById("d5").style.backgroundColor = "#080808da";
        document.getElementById("d5").style.color = "#71f0f0";
        document.getElementById("d6").style.backgroundColor = "#080808da";
        document.getElementById("d6").style.color = "#71f0f0";
        document.getElementById("d7").style.backgroundColor = "#080808da";
        document.getElementById("d7").style.color = "#71f0f0";
    }
    const channelSlotsD4 = async () => {
        let data = await getSlots(params.channelname, D4)
        setslots(data)
        setrequestdate(D4)
        setrequestday(Date4)
        document.getElementById("d1").style.backgroundColor = "#080808da";
        document.getElementById("d1").style.color = "#71f0f0";
        document.getElementById("d2").style.backgroundColor = "#080808da";
        document.getElementById("d2").style.color = "#71f0f0";
        document.getElementById("d3").style.backgroundColor = "#080808da";
        document.getElementById("d3").style.color = "#71f0f0";
        document.getElementById("d4").style.backgroundColor = "#ffffff";
        document.getElementById("d4").style.color = "#000000";
        document.getElementById("d5").style.backgroundColor = "#080808da";
        document.getElementById("d5").style.color = "#71f0f0";
        document.getElementById("d6").style.backgroundColor = "#080808da";
        document.getElementById("d6").style.color = "#71f0f0";
        document.getElementById("d7").style.backgroundColor = "#080808da";
        document.getElementById("d7").style.color = "#71f0f0";
    }

    const channelSlotsD5 = async () => {
        let data = await getSlots(params.channelname, D5)
        setslots(data)
        setrequestdate(D5)
        setrequestday(Date5)
        document.getElementById("d1").style.backgroundColor = "#080808da";
        document.getElementById("d1").style.color = "#71f0f0";
        document.getElementById("d2").style.backgroundColor = "#080808da";
        document.getElementById("d2").style.color = "#71f0f0";
        document.getElementById("d3").style.backgroundColor = "#080808da";
        document.getElementById("d3").style.color = "#71f0f0";
        document.getElementById("d4").style.backgroundColor = "#080808da";
        document.getElementById("d4").style.color = "#71f0f0";
        document.getElementById("d5").style.backgroundColor = "#ffffff";
        document.getElementById("d5").style.color = "#000000";
        document.getElementById("d6").style.backgroundColor = "#080808da";
        document.getElementById("d6").style.color = "#71f0f0";
        document.getElementById("d7").style.backgroundColor = "#080808da";
        document.getElementById("d7").style.color = "#71f0f0";
    }

    const channelSlotsD6 = async () => {
        let data = await getSlots(params.channelname, D6)
        setslots(data)
        setrequestdate(D6)
        setrequestday(Date6)
        document.getElementById("d1").style.backgroundColor = "#080808da";
        document.getElementById("d1").style.color = "#71f0f0";
        document.getElementById("d2").style.backgroundColor = "#080808da";
        document.getElementById("d2").style.color = "#71f0f0";
        document.getElementById("d3").style.backgroundColor = "#080808da";
        document.getElementById("d3").style.color = "#71f0f0";
        document.getElementById("d4").style.backgroundColor = "#080808da";
        document.getElementById("d4").style.color = "#71f0f0";
        document.getElementById("d5").style.backgroundColor = "#080808da";
        document.getElementById("d5").style.color = "#71f0f0";
        document.getElementById("d6").style.backgroundColor = "#ffffff";
        document.getElementById("d6").style.color = "#000000";
        document.getElementById("d7").style.backgroundColor = "#080808da";
        document.getElementById("d7").style.color = "#71f0f0";
    }

    const channelSlotsD7 = async () => {
        let data = await getSlots(params.channelname, D7)
        setslots(data)
        setrequestdate(D7)
        setrequestday(Date7)
        document.getElementById("d1").style.backgroundColor = "#080808da";
        document.getElementById("d1").style.color = "#71f0f0";
        document.getElementById("d2").style.backgroundColor = "#080808da";
        document.getElementById("d2").style.color = "#71f0f0";
        document.getElementById("d3").style.backgroundColor = "#080808da";
        document.getElementById("d3").style.color = "#71f0f0";
        document.getElementById("d4").style.backgroundColor = "#080808da";
        document.getElementById("d4").style.color = "#71f0f0";
        document.getElementById("d5").style.backgroundColor = "#080808da";
        document.getElementById("d5").style.color = "#71f0f0";
        document.getElementById("d6").style.backgroundColor = "#ffffff";
        document.getElementById("d6").style.color = "#000000";
        document.getElementById("d7").style.backgroundColor = "#ffffff";
        document.getElementById("d7").style.color = "#000000";
    }


    useEffect(() => {
        channelSlots()
        props.getUser();
        console.log(props.username)
        console.log(slots._id)
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className="container-fluid "> <br />
                <h1 className="text-center mt-3 p-3 text-white" style={{fontSize:"50px"}} >{params.channelname}</h1><br />
                <div hidden >{slots && slots._id}</div>
                <div hidden style={{ color: "white" }}>{props.username}</div>
            </div>

            <ul class="nav nav-tabs ml-3 nav nav-pills ">
                <li class="nav-item">
                    <button type="button" id="d1" data-toggle="pill" className="nav-link active" data-bs-toggle="tab" onClick={channelSlots}>{D1}</button>
                </li>
                <li class="nav-item">
                    <button type="button" id="d2" data-toggle="pill" className="nav-link " onClick={channelSlotsD2}>{D2}</button>
                </li>
                <li class="nav-item">
                    <button type="button" id="d3" data-toggle="pill" className="nav-link" onClick={channelSlotsD3}>{D3}</button>
                </li>
                <li class="nav-item">
                    <button type="button" id="d4" data-toggle="pill" className="nav-link" onClick={channelSlotsD4}>{D4}</button>
                </li>
                <li class="nav-item">
                    <button type="button" id="d5" data-toggle="pill" className="nav-link" onClick={channelSlotsD5}>{D5}</button>
                </li>
                <li class="nav-item">
                    <button type="button" id="d6" data-toggle="pill" className="nav-link" onClick={channelSlotsD6}>{D6}</button>
                </li>
                <li class="nav-item">
                    <button type="button" id="d7" data-toggle="pill" className="nav-link" onClick={channelSlotsD7}>{D7}</button>
                </li>

            </ul>
            <div class="tab-content mt-3 p-3">
                <ChannelSlot slots={slots} username={props.username} email={props.email} requestdate={requestdate} requestday={requestday} channel={params.channelname} empty={empty} />
            </div>

        </>
    )
}
export default Channel
