type CallBack = (status:string) => void

function sendDoneStatus(callback:CallBack):void {
  callback("done");
}

sendDoneStatus((status) => {
    console.log(status);
});
