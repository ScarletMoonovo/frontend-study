function treeToList(treeData) {
    let result = [];
    treeData.forEach(item => {
        result.push(item);
        if (item.children) {
            result = result.concat(treeToList(item.children));
        }
    })
    return result;
}