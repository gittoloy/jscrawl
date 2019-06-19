/**
 * 队列类
 */
export default class Queue {

    constructor() {
        this.data = [];
    }

    /**
     * 入队列
     */
    enqueue(element) {
        this.data.push(element);
    }

    /**
     * 出队列
     */
    dequeue() {
        return this.data.shift();
    }

    /**
     * 判断队列是否为空
     */
    isEmpty() {
        return this.data.length  == 0;
    }

    /**
     * 获取队列元素的个数
     */
    count() {
        return this.data.length;
    }

    /**
     * 显示队列第一个元素的值
     */
    firstElement() {
        return this.data.length > 0 ? this.data[0] : null;
    }

    /**
     * 显示队列最后一个元素的值
     */
    lastElement() {
        return this.data.length > 0 ? this.data[this.data.length - 1] : null;
    }

}
