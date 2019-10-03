export function addToShelf(list) {
    console.log(list,'addddddd');
    list.push({
        id:-1,
        type:3
    });
    return list
}
export function removeBookFromShelf(list) {
    return list.filter(item=>item.type!==3)
}
