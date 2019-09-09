//实验二——程序⑤
console.log(process.platform);//输出当前Node.js进程执行所在的操作系统平台
console.log(process.pid);//输出当前Node.js进程的pid
console.log(process.argv[0]);//输出当前Node.js执行程序的文件路径
console.log(process.cwd());//输出当前Node.js进程的当前工作目录
console.log(process.memoryUsage().external);//输出Chrome V8的内存使用情况
/**
 * process.memoryUsage是一个对象，包含四个参数，分别表示：总内存的占用情况、堆占用的内存（包括用到的和没用到的）、用到的堆的部分、V8 引擎内部的 C++ 对象占用的内存
 * { rss: 130772992,  // 总内存占用
 *   heapTotal: 121925632, // 堆占用的内存，包括用到的和没用到的。
 *   heapUsed: 106210400, // 用到的堆的部分
 *   external: 2984477 } // V8 引擎内部的 C++ 对象占用的内存。
 */