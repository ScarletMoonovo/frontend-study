
const  arr =[
    { id: 1, name: 'i1' },
    { id: 2, name: 'i2', parentId: 1 },
    { id: 4, name: 'i4', parentId: 3 },
    { id: 3, name: 'i3', parentId: 2 },
    { id: 8, name: 'i8', parentId: 7 },
]

const buildArr = (arr, parentId = null) => {
    // 先定义一个存放处理完数据的数组
    let tree = []
    // 遍历数组
    for (let item of arr) {
        // 这里可以用来判断parentId是否存在，不存在则为顶级节点，存在则为子节点
        if (item.parentId === parentId || !item.parentId && !parentId) {
            tree.push({
                ...item,
                children: buildArr(arr, item.id)
            })
        }
    }
    return tree
}