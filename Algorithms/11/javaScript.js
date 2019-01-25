var list =  [1,2,3];
listElement = querySelector('ul');
 function insert(event) {
    if(event.keyCode == 13) {
        list.push(event.target.value);
        render();
    }
 }
 function remove(index) {
    list.splice(index, 1);
    render();
 }
 function render() {
    listElement.innerHTML = list.map

 }