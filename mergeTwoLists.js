/**将两个有序链表合并为一个新的有序链表并返回。
 * 新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 示例：
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function linkList() {
    // Node类声明
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }

    // 初始化链表长度
    let length = 0;
    // 初始化第一个元素
    let head = null;

    // 尾添加
    this.append = function(val) { // 向链表尾部添加一个新的项
        let node = new ListNode(val); // 实例化一个新的节点
        let current;
        
        if(head === null) { // 链表中的第一个节点
            head = node; // 当链表中没有一个节点的时候，将实例化的新节点(地址)赋值给head成为链表的第一个元素，此时node和head的变量值里都保存着内存中的同一个地址
        } else { // 当链表中有其他元素的时候
            current = head; // current也指向head指向的内存地址
            while(current.next) {
                // 循环链表直到找到最后一项，循环结束current指向链表最后一项元素
                current = current.next;
            }
            // 找到最后一项元素后。将他的next属性指向新元素node，建立连接
            current.next = node;
        }

        length++; // 更新链表长度
    };

};

function mergeTwoLists(l1, l2) {
        
}

let list1 = new linkList();
let list2 = new linkList();
list1.append(1);
list1.append(2);
list1.append(4);
list2.append(1);
list2.append(3);
list2.append(4);

mergeTwoLists(list1, list2);