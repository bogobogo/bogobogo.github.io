const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
export default function(unixTime) {
    console.log(unixTime)
    const jsDate = new Date(Number(unixTime));
    console.log(jsDate)
    return `${months[jsDate.getMonth()]} ${jsDate.getDate()}, ${jsDate.getFullYear()}`
}