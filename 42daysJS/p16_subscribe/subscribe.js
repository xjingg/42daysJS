//for interview question
scope=()=>{
    let events={};
    return{
        //Subscribe to the news
        on: function (name, handler) {
            let index;
            if(events[name]){
                index = events[name].push(handler)-1;
            }else{
                events[name] = [handler];
                index = 0;
            }
            return function () {
                events[name].splice(index,1);
            }
        },
        //Turn off the news
        off:function (name) {
            if(!events[name]) return;
            delete events[name];
        },
        //publish the news
        emit: function (name, msg) {
            if(!events[name]){
                return;
            }
            //if the news exist, handle the news in the queue
            events[name].forEach(function(v,i){
                v(msg);
            })
        }
    }
};
scope();
let remove = scope.on('refreshList', function (msg){
    //handle logic
});

//add data
let addItem = function () {
    scope.emit('refreshList')
};

//delete data
let removeItem= function () {
    scope.emit('refreshList')
};

let destroy = function () {
    remove(); //remove the event
    scope.off('refreshList'); //remove the refreshList
};